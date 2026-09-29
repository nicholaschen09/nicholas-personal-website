## Nicholas Chen – Personal Website v2

### Overview

Personal site and long-form blog, built with **Next.js**, **TypeScript**, and a small design system. 

### Tech stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript, React 18/19
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

### Local development

```bash
pnpm install
pnpm dev
```

The app will start on `http://localhost:3000`.

### Notable blog posts

- **Lossless audio & FLAC** – `/blogs/lossless-audio`
- **Ontology & text-to-SQL** – `/blogs/ontology-text-to-sql`

### Content & i18n

- All copy lives in `contexts/LanguageContext.tsx` under the `en` and `zh` objects.
- Blog pages live under `app/blogs/*` and consume strings through `useLanguage()` and `t(key)`.

### Blog view counts

The Writing list does not show counts. Article pages use one shared Postgres total.
Each article opening or refresh adds one view, including visits from different devices.
Retries and React Strict Mode reuse a visit ID to avoid duplicate increments.
Visible articles refresh totals every 30 seconds and when the window regains focus.

Setup with [Neon’s free Postgres plan](https://neon.com/pricing):

1. Create a Neon database and put its connection string in `DATABASE_URL` in
   `.env.local` and in the Vercel project's server environment variables. Never use
   a `NEXT_PUBLIC_` prefix for this secret. Use a separate database for previews
   and development so test visits do not affect production totals.
2. Run `node --env-file=.env.local scripts/setup-blog-views.mjs` once against each
   database to create the tables (requires Node 20.6+).
3. Restart development or redeploy the site after setting the environment variable.

Without a configured database, the article still loads and the count stays hidden.
Old localStorage counts are not imported: they were independent browser totals,
not a trustworthy global count. The new shared counters start at zero.
