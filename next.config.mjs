// Defensive shim: if `localStorage` is missing or broken (common in SSR),
// provide a no-op implementation so accessors never crash server code.
if (typeof globalThis !== 'undefined') {
  const ls = globalThis.localStorage;
  if (!ls || typeof ls.getItem !== 'function') {
    globalThis.localStorage = {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
      key: () => null,
      get length() {
        return 0;
      },
    };
  }
}

let userConfig = undefined;
try {
  userConfig = await import('./v0-user-next.config');
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  // RFC 8288 Link headers for agent/crawler discovery. Points to a
  // machine-readable summary of the site (IANA-registered link relations).
  async headers() {
    const linkHeader = [
      '</llms.txt>; rel="describedby"; type="text/plain"',
      '</llms.txt>; rel="service-desc"; type="text/plain"',
    ].join(', ');

    return [
      {
        source: '/:path*',
        headers: [{ key: 'Link', value: linkHeader }],
      },
    ];
  },
};

mergeConfig(nextConfig, userConfig);

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return;
  }

  for (const key in userConfig) {
    if (typeof nextConfig[key] === 'object' && !Array.isArray(nextConfig[key])) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      };
    } else {
      nextConfig[key] = userConfig[key];
    }
  }
}

export default nextConfig;
