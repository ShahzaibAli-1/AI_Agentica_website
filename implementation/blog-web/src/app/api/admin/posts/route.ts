import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/blogData";

export async function GET() {
  return NextResponse.json({ items: getAllPosts(), mode: "lightweight-compat" });
}

export async function POST() {
  return NextResponse.json(
    { ok: false, message: "Write API disabled in lightweight local mode." },
    { status: 501 }
  );
}

