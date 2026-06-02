# PrithviX

Agri-tech platform for India — connecting farmers, agri-input dealers, equipment
owners, and labour.

This monorepo currently contains **Phase 1: the marketing website**. Phase 2 (the
dashboard ERP) will be added as additional apps.

## Structure

```
prithvix/
├── apps/
│   └── web/                 # marketing website (Next.js 16 · App Router · TS · Tailwind v4)
│       ├── app/             # routes: /, /privacy, /terms, /api/{register,stats}, sitemap, robots
│       ├── components/      # layout/ (nav, footer, preloader, floating), sections/, ui/, providers/
│       ├── lib/             # site config, supabase admin client, scroll helpers
│       └── public/images/   # optimised WebP assets (generated from Docs/Images)
├── supabase/migrations/     # registrations table + RLS + stats function
├── scripts/convert-images.mjs
├── Docs/                    # the source PRD, design tokens, image guide, UI/UX bible
└── SETUP.md                 # ← provisioning + launch checklist (start here to deploy)
```

## Stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript** · **Tailwind CSS v4**
- **Lenis** smooth scroll + **GSAP/ScrollTrigger** (reduced-motion aware)
- **Supabase** (Postgres, Mumbai region) for the registration form + live counters
- **lucide-react** icons · deployed on **Vercel**

Design tokens (colours, fonts, scale, shadows) are the single source of truth in
`apps/web/app/globals.css`, ported verbatim from the PRD.

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm lint
```

See **[SETUP.md](./SETUP.md)** for Supabase, analytics, deployment, and the
pre-launch QA checklist.
