import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ ok: true });
}

import { NextResponse } from "next/server";
import { clearSessionCookie } from "@/lib/auth/session";
import { verifyCsrfForMutation } from "@/lib/security/csrf";

export async function POST() {
  const ok = await verifyCsrfForMutation();
  if (!ok) return NextResponse.json({ error: "CSRF" }, { status: 403 });

  await clearSessionCookie();
  return NextResponse.json({ ok: true });
}

