import { isAdmin } from '@/lib/auth';
import { updateAdminProduct, deleteAdminProduct, AdminProductInput } from '@/db/queries';

export const dynamic = 'force-dynamic';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  if (!isAdmin()) return Response.json({ error: 'unauthorized' }, { status: 401 });
  const body = (await request.json().catch(() => null)) as AdminProductInput | null;
  if (!body) return Response.json({ ok: false, error: 'داده نامعتبر است' }, { status: 400 });
  const result = updateAdminProduct(params.id, body);
  if (!result.ok) return Response.json(result, { status: 400 });
  return Response.json(result);
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  if (!isAdmin()) return Response.json({ error: 'unauthorized' }, { status: 401 });
  return Response.json(deleteAdminProduct(params.id));
}
