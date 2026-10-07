import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import ProductShelf from '@/components/ProductShelf';
import FeaturesSection from '@/components/FeaturesSection';
import CustomSpiceSection from '@/components/CustomSpiceSection';
import WholesaleSection from '@/components/WholesaleSection';
import StorySection from '@/components/StorySection';
import FoodInspiration from '@/components/FoodInspiration';
import EducationalSection from '@/components/EducationalSection';
import RecipeSection from '@/components/RecipeSection';
import { getBestSellers, getNewArrivals, getProductsByCategory, getFeatured } from '@/db/queries';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const [bestSellers, newArrivals, blendedSpices, driedHerbs, sooqh, teas, featured] = await Promise.all([
    getBestSellers(),
    getNewArrivals(),
    getProductsByCategory('blended-spices'),
    getProductsByCategory('dried-herbs'),
    getProductsByCategory('sooqh'),
    getProductsByCategory('tea-infusions'),
    getFeatured(),
  ]);

  return (
    <>
      <Hero />
      <CategorySection />

      <ProductShelf title="پرفروش‌های نوبرانه" products={bestSellers} viewAllHref="/shop?sort=bestseller" />
      <ProductShelf title="تازه‌رسیده‌ها" products={newArrivals} viewAllHref="/shop?sort=newest" />

      <FeaturesSection />

      <ProductShelf title="ادویه‌های ترکیبی نوبرانه" products={blendedSpices} viewAllHref="/category/blended-spices" />
      <ProductShelf title="سبزیجات خشک" products={driedHerbs} viewAllHref="/category/dried-herbs" />

      <FoodInspiration />

      <ProductShelf title="سویق‌های نوبرانه" products={sooqh} viewAllHref="/category/sooqh" />
      <ProductShelf title="دمنوش‌های خوش‌عطر" products={teas} viewAllHref="/category/tea-infusions" />

      <CustomSpiceSection />

      <ProductShelf title="پیشنهادهای ویژه" products={featured} viewAllHref="/category/special-products" />

      <StorySection />

      <RecipeSection />

      <EducationalSection />

      <WholesaleSection />
    </>
  );
}
