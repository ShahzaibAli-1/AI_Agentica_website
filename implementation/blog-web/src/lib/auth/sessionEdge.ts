import type { Session } from "@/lib/auth/session";

export async function verifySessionValueEdge(_value: string): Promise<Session | null> {
  return null;
}

import type { Session } from "@/lib/auth/session";

function base64UrlDecode(input: string) {
  const pad = "=".repeat((4 - (input.length % 4)) % 4);
  const base64 = (input + pad).replaceAll("-", "+").replaceAll("_", "/");
  const bin = atob(base64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

function base64UrlEncode(bytes: Uint8Array) {
  let bin = "";
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  const base64 = btoa(bin);
  return base64.replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

function timingSafeEqual(a: Uint8Array, b: Uint8Array) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}

async function hmacSha256Base64Url(secret: string, payload: string) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(payload));
  return base64UrlEncode(new Uint8Array(sig));
}

export async function verifySessionValueEdge(value: string): Promise<Session | null> {
  const secret = process.env.AUTH_SECRET;
  if (!secret) return null;

  const parts = value.split(".");
  if (parts.length !== 3) return null;
  const [userId, expStr, sig] = parts;
  const exp = Number(expStr);
  if (!userId || !Number.isFinite(exp)) return null;

  const payload = `${userId}.${exp}`;
  const expected = await hmacSha256Base64Url(secret, payload);

  if (!timingSafeEqual(base64UrlDecode(sig), base64UrlDecode(expected))) return null;
  if (Date.now() > exp) return null;
  return { userId, exp };
}

