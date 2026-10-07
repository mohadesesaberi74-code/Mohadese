import { cookies } from 'next/headers';
import { verifyPassword, sessionToken, ADMIN_COOKIE, adminConfigured } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  if (!adminConfigured()) {
    return Response.json({ ok: false, error: 'رمز مدیر در تنظیمات تعریف نشده است' }, { status: 500 });
  }

  const { password } = await request.json().catch(() => ({ password: '' }));
  if (!password || !verifyPassword(String(password))) {
    return Response.json({ ok: false, error: 'رمز عبور اشتباه است' }, { status: 401 });
  }

  cookies().set(ADMIN_COOKIE, sessionToken(), {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });
  return Response.json({ ok: true });
}

export async function DELETE() {
  cookies().delete(ADMIN_COOKIE);
  return Response.json({ ok: true });
}
