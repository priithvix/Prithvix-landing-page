import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

// Add a short revalidate time so the map stays fresh but doesn't spam DB
export const revalidate = 60; // 1 minute cache

export async function GET() {
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({ markers: [] });
  }

  const { data, error } = await supabase
    .from("globe_markers")
    .select("city_name, lat, lng, count");

  if (error || !data) {
    return NextResponse.json({ markers: [] });
  }

  // Format them for the Globe3D component
  const markers = data.map((row) => ({
    lat: row.lat,
    lng: row.lng,
    label: row.city_name.charAt(0).toUpperCase() + row.city_name.slice(1),
    count: row.count || 1,
  }));

  return NextResponse.json({ markers });
}
