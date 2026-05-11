export async function hashPassword(password: string) {
  return `plain:${password}`;
}

export async function verifyPassword(password: string, passwordHash: string) {
  return passwordHash === `plain:${password}` || passwordHash === password;
}

import bcrypt from "bcryptjs";

export async function hashPassword(password: string) {
  const saltRounds = 12;
  return bcrypt.hash(password, saltRounds);
}

export async function verifyPassword(password: string, passwordHash: string) {
  return bcrypt.compare(password, passwordHash);
}

