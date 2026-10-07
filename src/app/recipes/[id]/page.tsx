import { recipes } from '@/data/content';
import { getProductBySlug } from '@/data/products';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ClockIcon, FlowerIcon } from '@/components/Icons';

export default function RecipeDetailPage({ params }: { params: { id: string } }) {
  const recipe = recipes.find((r) => r.id === params.id);
  if (!recipe) notFound();

  return (
    <div className="min-h-screen bg-parchment">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-charcoal/50 mb-4">
          <Link href="/" className="hover:text-emerald">خانه</Link>
          <span>/</span>
          <span className="text-charcoal/80">{recipe.name}</span>
        </div>

        {/* Image */}
        <div className="relative rounded-arch-xl overflow-hidden shadow-card aspect-[16/9] mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-charcoal mb-3">{recipe.name}</h1>
        <div className="flex items-center gap-4 mb-6 text-sm text-charcoal/60">
          <span className="flex items-center gap-1"><ClockIcon size={16} /> {recipe.time}</span>
          <span>درجه سختی: {recipe.difficulty}</span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Ingredients */}
          <div className="md:col-span-1">
            <div className="bg-parchment rounded-arch-lg border border-stone/50 p-5 sticky top-24">
              <h2 className="text-base font-bold text-charcoal mb-3">مواد لازم</h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-charcoal/70">
                    <FlowerIcon size={12} className="text-emerald shrink-0" />
                    {ing}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-stone/50">
                <h3 className="text-sm font-bold text-charcoal mb-2">محصولات پیشنهادی نوبرانه</h3>
                <div className="flex flex-wrap gap-2">
                  {recipe.recommendedProducts.map((slug) => {
                    const p = getProductBySlug(slug);
                    return p ? (
                      <Link key={slug} href={`/products/${slug}`} className="text-xs bg-emerald/8 text-emerald px-3 py-1.5 rounded-full hover:bg-emerald hover:text-parchment transition-colors">
                        {p.name}
                      </Link>
                    ) : null;
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="md:col-span-2">
            <h2 className="text-base font-bold text-charcoal mb-4">طرز تهیه</h2>
            <div className="space-y-4">
              {recipe.instructions.map((step, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald text-parchment flex items-center justify-center text-sm font-bold shrink-0">
                    {(i + 1).toLocaleString('fa-IR')}
                  </div>
                  <p className="text-sm text-charcoal/70 leading-relaxed pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
