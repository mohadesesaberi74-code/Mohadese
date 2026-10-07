import crypto from 'crypto';
import { cookies } from 'next/headers';

export const ADMIN_COOKIE = 'nb_admin';

function adminPassword(): string {
  return process.env.ADMIN_PASSWORD || '';
}

export function sessionToken(): string {
  return crypto.createHmac('sha256', adminPassword()).update('nobaraneh-admin-v1').digest('hex');
}

export function verifyPassword(password: string): boolean {
  const expected = adminPassword();
  if (!expected) return false;
  const a = Buffer.from(crypto.createHash('sha256').update(password).digest('hex'));
  const b = Buffer.from(crypto.createHash('sha256').update(expected).digest('hex'));
  return crypto.timingSafeEqual(a, b);
}

export function isAdmin(): boolean {
  const token = cookies().get(ADMIN_COOKIE)?.value;
  return !!token && token === sessionToken();
}

export function adminConfigured(): boolean {
  return adminPassword().length > 0;
}
