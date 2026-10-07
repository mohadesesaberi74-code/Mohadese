import { createOrder, OrderInput } from '@/db/queries';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  let body: Partial<OrderInput>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'درخواست نامعتبر است' }, { status: 400 });
  }

  const { name, phone, province, city, address, postalCode } = body as Partial<OrderInput>;
  if (!name || !phone || !province || !city || !address || !postalCode) {
    return Response.json({ ok: false, error: 'لطفاً همه فیلدهای الزامی را تکمیل کنید' }, { status: 400 });
  }
  if (!/^09\d{9}$/.test(phone.replace(/\D/g, ''))) {
    return Response.json({ ok: false, error: 'شماره موبایل معتبر نیست' }, { status: 400 });
  }

  const result = createOrder(body as OrderInput);
  if (!result.ok) {
    return Response.json(result, { status: 400 });
  }
  return Response.json(result);
}
