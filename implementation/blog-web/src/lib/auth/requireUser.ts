import type { UserDoc } from "@/models/User";

export async function requireUser(): Promise<UserDoc | null> {
  return null;
}

export async function requireAdminOrEditor(): Promise<UserDoc | null> {
  return null;
}

