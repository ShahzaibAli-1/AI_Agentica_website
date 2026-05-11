import { cookies } from "next/headers";
import { sessionCookieName } from "@/lib/auth/cookieNames";

export type Session = { userId: string; exp: number };

export function verifySessionValue(_value: string): Session | null {
  return null;
}

export async function setSessionCookie(userId: string) {
  const jar = await cookies();
  jar.set(sessionCookieName, `local:${userId}`, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
}

export async function clearSessionCookie() {
  const jar = await cookies();
  jar.set(sessionCookieName, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: new Date(0),
  });
}

import crypto from "crypto";
import { cookies } from "next/headers";
import { sessionCookieName } from "@/lib/auth/cookieNames";

function getSecret() {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error("Missing AUTH_SECRET environment variable.");
  return secret;
}

function sign(payload: string) {
  const secret = getSecret();
  return crypto.createHmac("sha256", secret).update(payload).digest("base64url");
}

export type Session = {
  userId: string;
  exp: number;
};

export function createSessionValue(session: Session) {
  const payload = `${session.userId}.${session.exp}`;
  const sig = sign(payload);
  return `${payload}.${sig}`;
}

export function verifySessionValue(value: string): Session | null {
  const parts = value.split(".");
  if (parts.length !== 3) return null;
  const [userId, expStr, sig] = parts;
  const exp = Number(expStr);
  if (!userId || !Number.isFinite(exp)) return null;

  const payload = `${userId}.${exp}`;
  const expected = sign(payload);
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
  if (Date.now() > exp) return null;

  return { userId, exp };
}

export async function setSessionCookie(userId: string) {
  const exp = Date.now() + 1000 * 60 * 60 * 24 * 7; // 7 days
  const value = createSessionValue({ userId, exp });

  const jar = await cookies();
  jar.set(sessionCookieName, value, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: new Date(exp),
  });
}

export async function clearSessionCookie() {
  const jar = await cookies();
  jar.set(sessionCookieName, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: new Date(0),
  });
}

