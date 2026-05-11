import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { ok: false, message: "Detail API disabled in lightweight local mode." },
    { status: 501 }
  );
}

export async function PATCH() {
  return NextResponse.json(
    { ok: false, message: "Update API disabled in lightweight local mode." },
    { status: 501 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { ok: false, message: "Delete API disabled in lightweight local mode." },
    { status: 501 }
  );
}

