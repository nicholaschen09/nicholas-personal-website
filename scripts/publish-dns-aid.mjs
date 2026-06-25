/**
 * Publish DNS for AI Discovery (DNS-AID) records to Cloudflare DNS.
 *
 * DNS-AID lets agents discover the protocols a domain speaks by querying
 * SVCB/HTTPS records under the `_agents` namespace. See:
 *   - draft-mozleywilliams-dnsop-dnsaid
 *   - RFC 9460 (SVCB/HTTPS records)
 *
 * These records are NOT part of the deployed site — they live in the DNS zone.
 * Run this once (and after any change) to upsert them via the Cloudflare API.
 *
 * Usage:
 *   CLOUDFLARE_API_TOKEN=*** node scripts/publish-dns-aid.mjs
 *   CLOUDFLARE_API_TOKEN=*** node scripts/publish-dns-aid.mjs --dry-run
 *
 * The token needs Zone:Read + DNS:Edit on the amaandoes.tech zone.
 * After publishing, enable DNSSEC for the zone (Cloudflare dashboard ->
 * DNS -> Settings -> Enable DNSSEC) so validating resolvers get authenticated
 * answers, then add the DS record at your registrar.
 */

const ZONE = "amaandoes.tech";
const TTL = 3600;

// Each record is a ServiceMode SVCB record (priority >= 1) under _agents.
// `target` is the host that actually serves the agent; `value` carries the
// SvcParams (alpn + port, made mandatory per the DNS-AID guidance).
//
// NOTE: only publish a protocol record (_a2a, _mcp, ...) if that endpoint
// really answers. `_index` is the well-known discovery entrypoint the scanner
// looks for and is safe to point at the existing site.
const RECORDS = [
  {
    // Discovery index entrypoint — served over HTTPS by the site itself.
    name: `_index._agents.${ZONE}`,
    type: "SVCB",
    data: { priority: 1, target: ZONE, value: 'alpn="h2,http/1.1" port=443 mandatory=alpn,port' },
  },
  // Uncomment once a real A2A agent endpoint exists behind the domain:
  // {
  //   name: `_a2a._agents.${ZONE}`,
  //   type: "SVCB",
  //   data: { priority: 1, target: ZONE, value: 'alpn="a2a" port=443 mandatory=alpn,port' },
  // },
];

const token = process.env.CLOUDFLARE_API_TOKEN;
const dryRun = process.argv.includes("--dry-run");

if (!token) {
  console.error("Missing CLOUDFLARE_API_TOKEN (needs Zone:Read + DNS:Edit).");
  process.exit(1);
}

const api = async (path, init = {}) => {
  const res = await fetch(`https://api.cloudflare.com/client/v4${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
  });
  // Cloudflare may return a non-JSON body on infra errors (HTML 429/503 pages,
  // plain-text auth failures). Surface the HTTP status instead of letting
  // res.json() throw an opaque SyntaxError that masks the real failure.
  const contentType = res.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    const text = await res.text();
    throw new Error(
      `Cloudflare API ${path}: HTTP ${res.status} ${res.statusText} (non-JSON response) ${text.slice(0, 200)}`,
    );
  }
  const json = await res.json();
  if (!json.success) {
    throw new Error(`Cloudflare API ${path}: HTTP ${res.status} ${JSON.stringify(json.errors)}`);
  }
  return json.result;
};

const zones = await api(`/zones?name=${encodeURIComponent(ZONE)}`);
const zone = zones[0];
if (!zone) {
  console.error(`Zone ${ZONE} not found on this account.`);
  process.exit(1);
}
console.log(`Zone ${ZONE} -> ${zone.id}`);

for (const record of RECORDS) {
  const existing = await api(
    `/zones/${zone.id}/dns_records?type=${record.type}&name=${encodeURIComponent(record.name)}`,
  );
  const body = { ...record, ttl: TTL };
  const desc = `${record.type} ${record.name} (${record.data.value})`;

  if (dryRun) {
    console.log(`[dry-run] ${existing.length ? "update" : "create"} ${desc}`);
    continue;
  }

  if (existing.length) {
    // Update the first match and remove any duplicates so repeated runs with
    // different values don't leave stale SVCB records accumulating in the zone.
    await api(`/zones/${zone.id}/dns_records/${existing[0].id}`, {
      method: "PUT",
      body: JSON.stringify(body),
    });
    for (const dup of existing.slice(1)) {
      await api(`/zones/${zone.id}/dns_records/${dup.id}`, { method: "DELETE" });
      console.log(`deleted  duplicate ${record.type} ${record.name} (id=${dup.id})`);
    }
    console.log(`updated  ${desc}`);
  } else {
    await api(`/zones/${zone.id}/dns_records`, {
      method: "POST",
      body: JSON.stringify(body),
    });
    console.log(`created  ${desc}`);
  }
}

console.log(
  "\nDone. Next: enable DNSSEC for the zone (Cloudflare dashboard -> DNS ->\n" +
    "Settings -> Enable DNSSEC) and add the resulting DS record at your registrar.\n" +
    "Verify with: dig +short SVCB _index._agents." + ZONE,
);
