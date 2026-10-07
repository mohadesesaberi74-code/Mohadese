import { isAdmin } from '@/lib/auth';
import { getAllProducts, createAdminProduct, AdminProductInput } from '@/db/queries';

export const dynamic = 'force-dynamic';

export async function GET() {
  if (!isAdmin()) return Response.json({ error: 'unauthorized' }, { status: 401 });
  const products = await getAllProducts({ includeArchived: true });
  return Response.json({ products });
}

export async function POST(request: Request) {
  if (!isAdmin()) return Response.json({ error: 'unauthorized' }, { status: 401 });
  const body = (await request.json().catch(() => null)) as AdminProductInput | null;
  if (!body) return Response.json({ ok: false, error: 'داده نامعتبر است' }, { status: 400 });
  const result = createAdminProduct(body);
  if (!result.ok) return Response.json(result, { status: 400 });
  return Response.json(result);
}
