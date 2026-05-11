import type { NextConfig } from "next";
import fs from "node:fs";
import path from "node:path";

function hydrateEnvFromRepoRoot() {
  if (process.env.MONGO_URI) return;

  try {
    // Use __dirname instead of process.cwd() because Next may infer a different
    // workspace root (monorepo / multiple lockfiles).
    // __dirname here is: <repo>/implementation/blog-web
    const rootEnvPath = path.resolve(__dirname, "..", "..", ".env");
    if (!fs.existsSync(rootEnvPath)) return;
    const raw = fs.readFileSync(rootEnvPath, "utf8");
    const line = raw
      .split(/\r?\n/)
      .map((l) => l.trim())
      .find((l) => l.startsWith("MONGO_URI="));
    if (!line) return;
    const value = line.slice("MONGO_URI=".length);
    if (value) process.env.MONGO_URI = value;
  } catch {
    // best-effort for local dev; do not fail boot
  }
}

hydrateEnvFromRepoRoot();

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
