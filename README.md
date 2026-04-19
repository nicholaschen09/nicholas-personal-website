## Nicholas Chen – Personal Website v2

<img width="621" height="835" alt="Screenshot 2026-01-18 at 4 00 57 PM" src="https://github.com/user-attachments/assets/0a8a3198-fe08-4834-8fdd-667ebb2fffe1" />

### Overview

Personal site and long-form blog, built with **Next.js**, **TypeScript**, and a small design system. Content is localized (English/中文) via a central `LanguageContext`.

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
