import { NextResponse } from "next/server";
import { getAllPostsData } from "@/lib/postStore";

export async function GET() {
  return NextResponse.json({ items: await getAllPostsData() });
}

