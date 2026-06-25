import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://amaandoes.tech';

// Generates /robots.txt, served as text/plain with HTTP 200.
// The userAgent/allow/disallow rules and Sitemap directive follow RFC 9309
// (https://www.rfc-editor.org/rfc/rfc9309). The `host` field below is a
// non-standard Yandex extension and is not part of RFC 9309.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Default rule for all crawlers and agents.
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
