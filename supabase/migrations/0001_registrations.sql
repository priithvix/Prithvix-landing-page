-- PrithviX — registrations table for the marketing-site lead form (PRD §12).
-- Run in the Supabase SQL editor (project in the Mumbai / ap-south-1 region),
-- or via the Supabase CLI: `supabase db push`.

create table if not exists public.registrations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  district text not null,
  role text not null,
  service_interest text not null,
  created_at timestamptz not null default now()
);

create index if not exists registrations_created_at_idx
  on public.registrations (created_at desc);

-- Row-Level Security: the marketing site talks to the DB only through the
-- server-side service-role key (which bypasses RLS). We enable RLS and add NO
-- public policies, so the anon key can neither read nor write — raw leads stay
-- private (FAQ promise). Aggregate counts are exposed only via /api/stats.
alter table public.registrations enable row level security;

-- Optional: a SECURITY DEFINER function for cheap aggregate stats at scale.
create or replace function public.registration_stats()
returns table (registrations bigint, districts bigint)
language sql
security definer
set search_path = public
as $$
  select
    count(*)::bigint as registrations,
    count(distinct lower(trim(district)))::bigint as districts
  from public.registrations;
$$;
