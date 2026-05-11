import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { ok: false, message: "Auth disabled in lightweight local mode." },
    { status: 501 }
  );
}

