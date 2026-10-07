import Link from 'next/link';
import { categories } from '@/data/categories';
import { categoryIcons } from '@/components/Icons';
import { FlowerIcon } from '@/components/Icons';

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-parchment">
      <div className="bg-emerald/5 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-12 bg-stone-dark" />
            <FlowerIcon size={18} className="text-emerald" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-charcoal">دسته‌بندی محصولات</h1>
          <p className="text-sm text-charcoal/60 mt-2">همه دسته‌های محصولات نوبرانه</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat.icon] || categoryIcons.leaf;
            return (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className="group bg-parchment rounded-arch-lg border border-stone/50 overflow-hidden card-lift hover:shadow-card-hover"
              >
                <div className="flex">
                  <div className="relative w-32 h-32 shrink-0 overflow-hidden bg-stone/20">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-emerald/8 flex items-center justify-center text-emerald">
                        <Icon size={18} />
                      </div>
                      <h2 className="text-base font-bold text-charcoal group-hover:text-emerald transition-colors">{cat.name}</h2>
                    </div>
                    <p className="text-xs text-charcoal/60 leading-relaxed mb-2">{cat.description}</p>
                    {cat.examples && (
                      <p className="text-xs text-cinnamon/60">{cat.examples.slice(0, 4).join('، ')}...</p>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Special links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <Link href="/custom-blend" className="bg-emerald text-parchment rounded-arch-lg p-6 card-lift hover:shadow-card-hover">
            <h3 className="text-lg font-bold mb-1">ترکیب سفارشی ادویه</h3>
            <p className="text-sm text-parchment/80">ادویه‌ات رو خودت انتخاب کن</p>
          </Link>
          <Link href="/wholesale" className="bg-charcoal text-parchment rounded-arch-lg p-6 card-lift hover:shadow-card-hover">
            <h3 className="text-lg font-bold mb-1">خرید عمده</h3>
            <p className="text-sm text-parchment/80">برای همکاران و کسب‌وکارها</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
