# stacked-web

Stacked Media's primary web surface: the company landing page plus the bundled sites that ride on top of our vertical micro-SaaS rotation.

## Stack

- **Framework:** Next.js 15 (App Router) + React 19
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **Hosting:** Vercel (preview per PR, production from `main`)
- **CI:** GitHub Actions (lint / typecheck / build)
- **Database:** none yet — deferred until a product surface needs persistence

See the stack-decision rationale on the onboarding issue.

## Scripts

```bash
npm run dev        # local dev server on http://localhost:3000
npm run build      # production build
npm run start      # run the production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## Layout

- `src/app/` — App Router entrypoints. `page.tsx` is the company landing page.
- `public/` — static assets.
- `.github/workflows/ci.yml` — CI pipeline.

## Conventions

- No speculative abstractions. Three similar lines beats a premature helper.
- Keep copy short and confident. No placeholder lorem.
- Every PR deploys a Vercel preview; merges to `main` ship production.
