import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

/**
 * GET /api/stats - aggregate counts for the social-proof counter and the
 * form's "Join X registered" line. Returns zeros when not yet provisioned.
 * Only aggregates are exposed; raw registration rows are never returned.
 */
export const runtime = "nodejs";
export const revalidate = 60; // cache for a minute

export async function GET() {
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({ registrations: 0, districts: 0 });
  }

  const [{ count }, { data: districtsRows }] = await Promise.all([
    supabase.from("registrations").select("*", { count: "exact", head: true }),
    supabase.from("registrations").select("district"),
  ]);

  const districts = new Set(
    (districtsRows ?? [])
      .map((r) => (r.district as string)?.trim().toLowerCase())
      .filter(Boolean),
  ).size;

  return NextResponse.json({ registrations: count ?? 0, districts });
}
