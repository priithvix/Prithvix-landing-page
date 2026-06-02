import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

/**
 * POST /api/register - validates a registration and inserts it into Supabase.
 * Never fails silently (PRD §12): returns a non-2xx on real errors so the form
 * shows its fallback message. In development without Supabase configured it
 * accepts the submission (stored:false) so the success UI can be exercised.
 */
export const runtime = "nodejs";

type Body = {
  name?: string;
  phone?: string;
  district?: string;
  role?: string;
  service?: string;
};

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const district = (body.district ?? "").trim();
  const role = (body.role ?? "").trim();
  const service = (body.service ?? "").trim();
  const phoneDigits = (body.phone ?? "").replace(/\D/g, "").replace(/^91/, "");

  if (
    !name ||
    !district ||
    !role ||
    !service ||
    !/^[6-9]\d{9}$/.test(phoneDigits)
  ) {
    return NextResponse.json(
      { error: "Please fill all fields with a valid 10-digit mobile number." },
      { status: 422 },
    );
  }

  const supabase = getSupabaseAdmin();

  if (!supabase) {
    // Not yet provisioned. Allow the flow to complete in dev; block in prod.
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        { error: "Registration is temporarily unavailable." },
        { status: 503 },
      );
    }
    console.warn("[register] Supabase not configured - submission not stored:", {
      name,
      phone: phoneDigits,
      district,
      role,
      service,
    });
    return NextResponse.json({ ok: true, stored: false });
  }

  const { error } = await supabase.from("registrations").insert({
    name,
    phone: phoneDigits,
    district,
    role,
    service_interest: service,
  });

  if (error) {
    console.error("[register] insert failed:", error.message);
    return NextResponse.json({ error: "Could not save registration." }, { status: 500 });
  }

  return NextResponse.json({ ok: true, stored: true });
}
