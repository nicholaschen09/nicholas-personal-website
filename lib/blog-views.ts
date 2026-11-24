import { neon } from '@neondatabase/serverless';

// Keep existing counts under their original database keys after the URL change.
const legacyBlogPaths = new Map([
  ['/writing/melius-summer-internship', '/blogs/melius-summer-internship'],
  ['/writing/startup-lessons', '/blogs/startup-lessons'],
  ['/writing/neural-video-compression', '/blogs/neural-video-compression'],
  ['/writing/ontology-text-to-sql', '/blogs/ontology-text-to-sql'],
]);

export const blogPaths = new Set([
  '/writing/2026-retrospective',
  ...legacyBlogPaths.keys(),
  // Accept requests from pages still open during deployment.
  '/blogs/melius-summer-internship',
  '/blogs/startup-lessons',
  '/blogs/neural-video-compression',
  '/blogs/ontology-text-to-sql',
]);

export async function blogViews(path: string, visitId?: string): Promise<number> {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not configured');
  const sql = neon(process.env.DATABASE_URL);
  const storagePath = legacyBlogPaths.get(path) ?? path;

  if (visitId) {
    // Deduplicate retries and Strict Mode effects, while counting each new visit.
    // The insert and increment commit together; concurrent devices cannot lose updates.
    const rows = await sql`
      WITH new_visit AS (
        INSERT INTO blog_view_visits (path, visit_id)
        VALUES (${storagePath}, ${visitId}::uuid)
        ON CONFLICT DO NOTHING
        RETURNING path
      )
      INSERT INTO blog_view_counts (path, views)
      SELECT path, 1 FROM new_visit
      ON CONFLICT (path) DO UPDATE SET views = blog_view_counts.views + 1
      RETURNING views
    `;
    if (rows.length) return Number(rows[0].views);
  }

  const rows = await sql`SELECT views FROM blog_view_counts WHERE path = ${storagePath}`;
  return rows.length ? Number(rows[0].views) : 0;
}
