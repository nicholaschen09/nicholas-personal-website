# Repository Notes

## Local Next.js Development

- Do not delete `.next` while `npm run dev` is running. The dev server reads compiled route, JavaScript, and CSS artifacts from `.next`; removing it mid-session can make local pages temporarily lose styling.
- If the local site loses CSS or starts serving stale assets, stop the dev server, run `rm -rf .next`, then start it again with `npm run dev`.
- Avoid running `npm run build` at the same time as `npm run dev` for this repo, since both commands write Next.js build artifacts under `.next`.
