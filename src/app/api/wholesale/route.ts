import { createWholesaleRequest } from '@/db/queries';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  let body: { name?: string; phone?: string; product?: string; quantity?: string; notes?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'درخواست نامعتبر است' }, { status: 400 });
  }

  const { name, phone } = body;
  if (!name || !phone) {
    return Response.json({ ok: false, error: 'نام و شماره تماس الزامی است' }, { status: 400 });
  }

  const result = createWholesaleRequest({
    name,
    phone,
    product: body.product || '',
    quantity: body.quantity || '',
    notes: body.notes || '',
  });
  return Response.json(result);
}
