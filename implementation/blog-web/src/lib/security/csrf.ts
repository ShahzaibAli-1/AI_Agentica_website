import { cookies, headers } from "next/headers";

const CSRF_COOKIE = "ar_csrf";

export async function ensureCsrfCookie() {
  const jar = await cookies();
  const existing = jar.get(CSRF_COOKIE)?.value;
  if (existing) return existing;
  const token = `local_${Date.now()}`;
  jar.set(CSRF_COOKIE, token, {
    httpOnly: false,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
  return token;
}

export async function verifyCsrfForMutation() {
  const jar = await cookies();
  const token = jar.get(CSRF_COOKIE)?.value;
  const sent = (await headers()).get("x-csrf-token");
  return Boolean(token && sent && token === sent);
}

import crypto from "crypto";
import { cookies, headers } from "next/headers";

const CSRF_COOKIE = "ar_csrf";

function randomToken() {
  return crypto.randomBytes(32).toString("base64url");
}

export async function ensureCsrfCookie() {
  const jar = await cookies();
  const existing = jar.get(CSRF_COOKIE)?.value;
  if (existing) return existing;

  const token = randomToken();
  jar.set(CSRF_COOKIE, token, {
    httpOnly: false,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
  return token;
}

export async function verifyCsrfForMutation() {
  const jar = await cookies();
  const cookie = jar.get(CSRF_COOKIE)?.value;
  if (!cookie) return false;

  const h = await headers();
  const sent = h.get("x-csrf-token");
  if (!sent) return false;

  try {
    return crypto.timingSafeEqual(Buffer.from(cookie), Buffer.from(sent));
  } catch {
    return false;
  }
}

