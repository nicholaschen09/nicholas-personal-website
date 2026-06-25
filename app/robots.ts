import type { MetadataRoute } from 'next';

const SITE_URL = 'https://amaandoes.tech';

// Generates /robots.txt, served as text/plain with HTTP 200.
// Follows RFC 9309 (https://www.rfc-editor.org/rfc/rfc9309).
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
