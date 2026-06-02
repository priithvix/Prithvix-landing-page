# PrithviX — Setup & Launch Checklist

The marketing site is **built and passing** (`pnpm build`, `pnpm lint`). The steps
below are the things that need **your accounts/credentials** and can't be
automated. None of them block local development — the site runs fine without them
(the registration form just can't store data until Supabase is connected).

---

## 1. Run it locally

```bash
pnpm install          # from the repo root
pnpm dev              # → http://localhost:3000
pnpm build && pnpm start   # production build
pnpm images           # re-convert Docs/Images → WebP (only if sources change)
```

## 2. Supabase (registration backend)

1. Create a Supabase project — **Region: Mumbai (`ap-south-1`)** (honours the
   "data stored on Indian servers" promise in the FAQ).
2. SQL Editor → run `supabase/migrations/0001_registrations.sql`
   (creates the `registrations` table + RLS + a `registration_stats()` function).
3. Settings → API → copy the **Project URL** and the **service_role** key.
4. Add them to `apps/web/.env.local` (copy from `apps/web/.env.example`):
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=...        # SERVER ONLY — never expose to browser
   ```
5. Restart `pnpm dev`, submit a test registration, confirm a row appears in the
   Supabase Table editor and the social-proof counters increment.

> Security: the site talks to the DB only through the **server-side** service key
> (in `lib/supabase.ts` + the `/api/*` routes). RLS is on with no public policies,
> so raw leads are never readable from the browser — only aggregate counts via
> `/api/stats`.

## 3. Analytics (optional, recommended day one)

Add to `.env.local` / Vercel env:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX        # GA4
NEXT_PUBLIC_CLARITY_ID=xxxxxxxxxx     # Microsoft Clarity (heatmaps)
```
Events already fired: `page_view`, `form_submit`, `button_click`. (Scroll-depth
can be added later.) The site renders fine with these unset.

## 4. Deploy to Vercel

1. Push this repo to GitHub.
2. Import into Vercel. **Root Directory: `apps/web`** (it's a monorepo). Framework
   auto-detects as Next.js; no build-command change needed.
3. Add the env vars from steps 2–3 in Vercel → Project → Settings → Environment
   Variables.
4. Add the domain **`prithvix.in`** (Vercel → Domains) and point DNS / nameservers
   as Vercel instructs. SSL is automatic.

## 5. Still needed from the client (content)

- **Founder photo (IMG-11)** + founder **name** and final **quote** — the AI
  section currently shows a "PX" placeholder avatar and a generic attribution.
  Drop the photo at `apps/web/public/images/team/img-11-founder.webp` and update
  the founder card in `components/sections/AiAgent.tsx`.
- Confirm the **WhatsApp number** (`+91 9588874415`) and **email**
  (`madhav@prithvix.in`) in `apps/web/lib/site.ts`.
- Social links (Instagram / LinkedIn) in the footer are placeholder `#` — add real
  URLs when accounts exist.
- Privacy Policy & Terms pages (`/privacy`, `/terms`) are placeholders — replace
  with the final legal copy before launch.

## 6. Pre-launch QA (from PRD §18)

- [ ] PageSpeed / Lighthouse: target **≥85 mobile, ≥95 desktop**
- [ ] Submit a real test registration → lands in Supabase
- [ ] Real Android Chrome + iPhone Safari walkthrough of every section
- [ ] Paste the live URL into WhatsApp → OG image preview renders (uses the JPG)
- [ ] All nav links smooth-scroll to the right sections
- [ ] Announcement bar dismiss persists; preloader exits; reduced-motion disables animation
- [ ] Analytics events firing (submit the form, check GA4 realtime)

---

## What this is / isn't

**This is** the Phase 1 marketing website (single page) — fully built to the PRD,
deployed-ready. **Phase 2** is the dashboard ERP (dealer CRM, marketplaces, online
store, AI voice + WhatsApp agents). That product has no detailed spec yet — the
first Phase 2 step is to co-author its PRD. The dealer-dashboard mockup in the
"See It Working" section doubles as a visual reference for it.
