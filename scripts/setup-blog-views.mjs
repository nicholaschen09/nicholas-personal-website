import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) throw new Error('Set DATABASE_URL before running setup');
const sql = neon(process.env.DATABASE_URL);
await sql.transaction([
  sql`CREATE TABLE IF NOT EXISTS blog_view_counts (
    path TEXT PRIMARY KEY,
    views BIGINT NOT NULL DEFAULT 0 CHECK (views >= 0)
  )`,
  sql`CREATE TABLE IF NOT EXISTS blog_view_visits (
    path TEXT NOT NULL,
    visit_id UUID NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (path, visit_id)
  )`,
]);
console.log('Blog view tables are ready.');
