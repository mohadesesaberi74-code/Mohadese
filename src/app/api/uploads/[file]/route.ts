import { getUploadsDir } from '@/db/index';
import fs from 'fs';
import path from 'path';

const MIME: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
};

export async function GET(_request: Request, { params }: { params: { file: string } }) {
  const name = path.basename(params.file);
  const filePath = path.join(getUploadsDir(), name);
  if (!fs.existsSync(filePath)) {
    return new Response('Not found', { status: 404 });
  }
  const type = MIME[path.extname(name).toLowerCase()] || 'application/octet-stream';
  const data = fs.readFileSync(filePath);
  return new Response(new Uint8Array(data), {
    headers: { 'Content-Type': type, 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
}
