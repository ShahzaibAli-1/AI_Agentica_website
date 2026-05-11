const buckets = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now();
  const existing = buckets.get(key);
  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1, resetAt: now + windowMs };
  }
  if (existing.count >= limit) {
    return { ok: false, remaining: 0, resetAt: existing.resetAt };
  }
  existing.count += 1;
  buckets.set(key, existing);
  return { ok: true, remaining: Math.max(0, limit - existing.count), resetAt: existing.resetAt };
}

import { LRUCache } from "lru-cache";

type Entry = { count: number; resetAt: number };

const cache = new LRUCache<string, Entry>({
  max: 10_000,
  ttl: 1000 * 60 * 10,
});

export function rateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now();
  const entry = cache.get(key);
  if (!entry || entry.resetAt <= now) {
    cache.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1, resetAt: now + windowMs };
  }

  if (entry.count >= limit) {
    return { ok: false, remaining: 0, resetAt: entry.resetAt };
  }

  entry.count += 1;
  cache.set(key, entry);
  return { ok: true, remaining: Math.max(0, limit - entry.count), resetAt: entry.resetAt };
}

