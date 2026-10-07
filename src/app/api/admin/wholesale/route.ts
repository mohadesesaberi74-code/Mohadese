import { isAdmin } from '@/lib/auth';
import { getWholesaleRequests, updateWholesaleStatus } from '@/db/queries';

export const dynamic = 'force-dynamic';

export async function GET() {
  if (!isAdmin()) return Response.json({ error: 'unauthorized' }, { status: 401 });
  return Response.json({ requests: getWholesaleRequests() });
}

export async function PATCH(request: Request) {
  if (!isAdmin()) return Response.json({ error: 'unauthorized' }, { status: 401 });
  const { id, status } = await request.json().catch(() => ({ id: 0, status: '' }));
  const result = updateWholesaleStatus(Number(id), String(status));
  if (!result.ok) return Response.json(result, { status: 400 });
  return Response.json(result);
}
