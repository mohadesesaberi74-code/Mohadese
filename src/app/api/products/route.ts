import { NextRequest } from 'next/server';
import { getAllProducts, searchProducts } from '@/db/queries';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const q = searchParams.get('q')?.trim() || '';
  const category = searchParams.get('category') || '';

  const products = q
    ? await searchProducts(q)
    : await getAllProducts(category ? { category } : undefined);

  return Response.json({ products });
}
