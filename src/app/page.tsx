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
import { getBestSellers, getNewArrivals, getProductsByCategory, getFeatured } from '@/data/products';

export default function HomePage() {
  const bestSellers = getBestSellers();
  const newArrivals = getNewArrivals();
  const blendedSpices = getProductsByCategory('blended-spices');
  const driedHerbs = getProductsByCategory('dried-herbs');
  const sooqh = getProductsByCategory('sooqh');
  const teas = getProductsByCategory('tea-infusions');
  const featured = getFeatured();

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
