import { isAdmin } from '@/lib/auth';
import { getUploadsDir } from '@/db/index';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export const dynamic = 'force-dynamic';

const MAX_SIZE = 5 * 1024 * 1024;
const EXT_BY_TYPE: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/gif': 'gif',
};

export async function POST(request: Request) {
  if (!isAdmin()) return Response.json({ error: 'unauthorized' }, { status: 401 });

  const form = await request.formData().catch(() => null);
  const file = form?.get('file');
  if (!(file instanceof File)) {
    return Response.json({ ok: false, error: 'تصویری انتخاب نشده است' }, { status: 400 });
  }
  const ext = EXT_BY_TYPE[file.type];
  if (!ext) {
    return Response.json({ ok: false, error: 'فقط تصویر (JPG، PNG، WebP یا GIF) مجاز است' }, { status: 400 });
  }
  if (file.size > MAX_SIZE) {
    return Response.json({ ok: false, error: 'حجم تصویر باید کمتر از ۵ مگابایت باشد' }, { status: 400 });
  }

  const name = `${Date.now()}-${crypto.randomBytes(4).toString('hex')}.${ext}`;
  const bytes = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(path.join(getUploadsDir(), name), bytes);

  return Response.json({ ok: true, url: `/api/uploads/${name}` });
}
