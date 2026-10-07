import { isAdmin } from '@/lib/auth';
import { updateOrderStatus } from '@/db/queries';

export const dynamic = 'force-dynamic';

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  if (!isAdmin()) return Response.json({ error: 'unauthorized' }, { status: 401 });
  const { status } = await request.json().catch(() => ({ status: '' }));
  const result = updateOrderStatus(Number(params.id), String(status));
  if (!result.ok) return Response.json(result, { status: 400 });
  return Response.json(result);
}
