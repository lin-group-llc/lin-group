# AGENTS.md

## Repository overview

Minimal institutional website for Lin Group LLC, a private investment and holding company, served as a static Astro site at `https://lingroup.us`. Shared data lives in `src/consts.ts`; the only pages are `src/pages/index.astro` and `src/pages/404.astro`, rendered through `src/layouts/BaseLayout.astro` with UI in `src/components/` and styles in `src/styles/global.css`.

## Conventions

- Keep this site minimal and static: no content collections, blog pipeline, CMS, client-side framework, or analytics dependency.
- Change copy in `src/pages/` or `src/consts.ts`, and keep header, footer, and metadata behavior in the existing components.
- Reuse existing style and section patterns rather than introducing new ones.
- `npm ci` is the install path; `npm run build` is the production validation and `npm run preview` serves the built site. There is no test or lint script, though ESLint is configured in `eslint.config.js`.

## Verification

- Build the site and inspect the rendered page when copy or layout changes; inspect the final diff before finishing.
