import { getProductBySlug, getProductsByCategory } from '@/db/queries';
import { notFound } from 'next/navigation';
import ProductDetail from './ProductDetail';

export const dynamic = 'force-dynamic';

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);
  if (!product) notFound();

  const related = (await getProductsByCategory(product.category))
    .filter((p) => p.id !== product.id)
    .slice(0, 6);

  return <ProductDetail product={product} related={related} />;
}
