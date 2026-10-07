import { isAdmin } from '@/lib/auth';
import { getAdminOrders } from '@/db/queries';

export const dynamic = 'force-dynamic';

export async function GET() {
  if (!isAdmin()) return Response.json({ error: 'unauthorized' }, { status: 401 });
  return Response.json({ orders: getAdminOrders() });
}
