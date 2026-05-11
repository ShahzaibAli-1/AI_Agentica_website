import fs from "node:fs";
import path from "node:path";
import mongoose from "mongoose";

type MongooseGlobal = typeof globalThis & {
  __mongoose?: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
};

const g = globalThis as MongooseGlobal;

function loadMongoUriFromRootEnv() {
  if (process.env.MONGO_URI) return process.env.MONGO_URI;
  try {
    const envPath = path.resolve(process.cwd(), "..", "..", ".env");
    if (!fs.existsSync(envPath)) return undefined;
    const raw = fs.readFileSync(envPath, "utf8");
    const line = raw.split(/\r?\n/).find((l) => l.startsWith("MONGO_URI="));
    const value = line?.slice("MONGO_URI=".length).trim();
    if (value) process.env.MONGO_URI = value;
    return value;
  } catch {
    return undefined;
  }
}

export async function dbConnect() {
  const uri = process.env.MONGO_URI || loadMongoUriFromRootEnv();
  if (!uri) throw new Error("Missing MONGO_URI");

  if (!g.__mongoose) g.__mongoose = { conn: null, promise: null };
  if (g.__mongoose.conn) return g.__mongoose.conn;

  if (!g.__mongoose.promise) {
    g.__mongoose.promise = mongoose
      .connect(uri, { autoIndex: process.env.NODE_ENV !== "production" })
      .then((m) => m);
  }

  g.__mongoose.conn = await g.__mongoose.promise;
  return g.__mongoose.conn;
}

