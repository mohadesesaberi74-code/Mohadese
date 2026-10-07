export interface Category {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  description: string;
  icon: string;
  examples?: string[];
  image: string;
}

export const categories: Category[] = [
  {
    id: '1',
    slug: 'single-spices',
    name: 'ادویه‌های تک',
    nameEn: 'Single Spices',
    description: 'ادویه‌های خالص و باکیفیت برای آشپزی روزمره',
    icon: 'leaf',
    examples: ['زردچوبه', 'فلفل سیاه', 'فلفل قرمز', 'دارچین', 'زنجبیل', 'هل', 'زیره', 'آویشن', 'سیاهدانه', 'تخم گشنیز', 'جوز هندی', 'سماق', 'پاپریکا'],
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd05e6?w=800&q=80',
  },
  {
    id: '2',
    slug: 'blended-spices',
    name: 'ادویه‌های ترکیبی',
    nameEn: 'Blended Spices',
    description: 'ترکیب‌های مخصوص نوبرانه برای غذاهای محبوب ایرانی',
    icon: 'flask',
    examples: ['ادویه مرغ', 'ادویه جوجه', 'ادویه قورمه‌سبزی', 'ادویه قیمه', 'ادویه کاچی', 'ادویه ماکارونی', 'ادویه پیتزا', 'ادویه کاری', 'ادویه آبگوشت', 'ادویه سوسیس', 'ادویه پیاز جعفری', 'ادویه سیر و سبزیجات', 'ادویه گوجه', 'ادویه جوجه زعفرانی'],
    image: 'https://images.unsplash.com/photo-1532336411936-1c1c2c5c5e5e?w=800&q=80',
  },
  {
    id: '3',
    slug: 'dried-herbs',
    name: 'سبزیجات خشک',
    nameEn: 'Dried Herbs',
    description: 'سبزیجات خشک‌شده تمیز و خوش‌عطر',
    icon: 'plant',
    examples: ['شوید خشک', 'جعفری خشک', 'نعناع خشک', 'تره خشک', 'گشنیز خشک', 'سبزی قورمه', 'سبزی آش', 'سبزی کوکو'],
    image: 'https://images.unsplash.com/photo-1515449570631-5c08f1c3b6c3?w=800&q=80',
  },
  {
    id: '4',
    slug: 'sooqh',
    name: 'سویق',
    nameEn: 'Sooqh',
    description: 'محصولات سنتی و مقوی با ترکیبات انتخاب‌شده',
    icon: 'grain',
    examples: ['سویق سنجد و بادام', 'سویق غلات', 'سویق‌های ترکیبی'],
    image: 'https://images.unsplash.com/photo-1566208311264-520c011b22c7?w=800&q=80',
  },
  {
    id: '5',
    slug: 'tea-infusions',
    name: 'دمنوش و چای',
    nameEn: 'Tea & Infusions',
    description: 'دمنوش‌های خوش‌عطر و چای‌های انتخابی',
    icon: 'cup',
    examples: ['گل گاوزبان', 'بابونه', 'به‌لیمو', 'پر سیاوش', 'بهارنارنج', 'اسطوخودوس', 'آویشن', 'عناب', 'لیمو خشک'],
    image: 'https://images.unsplash.com/photo-1597318181409-0e8e6d0c3f3e?w=800&q=80',
  },
  {
    id: '6',
    slug: 'dried-fruits-snacks',
    name: 'خشکبار و تنقلات',
    nameEn: 'Dried Fruits & Snacks',
    description: 'میوه خشک و تنقلات سالم و فصلی',
    icon: 'fruit',
    examples: ['میوه خشک', 'هلو خشک', 'پر هلو', 'تنقلات سالم', 'محصولات فصلی'],
    image: 'https://images.unsplash.com/photo-1606101208038-4de8f2c1b0f3?w=800&q=80',
  },
  {
    id: '7',
    slug: 'flour-ingredients',
    name: 'آرد و مواد اولیه',
    nameEn: 'Flour & Ingredients',
    description: 'آردهای مصرفی و مواد اولیه آشپزی و شیرینی‌پزی',
    icon: 'wheat',
    examples: ['آرد شیرینی', 'آردهای مصرفی', 'مواد اولیه آشپزی و شیرینی‌پزی'],
    image: 'https://images.unsplash.com/photo-1568254183919-cc70008b5671?w=800&q=80',
  },
  {
    id: '9',
    slug: 'baking-supplies',
    name: 'لوازم قنادی',
    nameEn: 'Baking Supplies',
    description: 'مواد اولیه قنادی و شیرینی‌پزی باکیفیت',
    icon: 'grain',
    examples: ['بیکینگ پودر', 'وانیل', 'پودر کاکائو'],
    image: 'https://images.unsplash.com/photo-1568254183919-cc70008b5671?w=800&q=80',
  },
  {
    id: '10',
    slug: 'condiments',
    name: 'چاشنی‌ها',
    nameEn: 'Condiments',
    description: 'چاشنی‌های خوش‌مزه مخصوص نوبرانه',
    icon: 'flask',
    examples: ['چاشنی سالاد', 'چاشنی ذرت', 'سس سیر خشک'],
    image: 'https://images.unsplash.com/photo-1604908554007-3e1c1c2c5e5e?w=800&q=80',
  },
  {
    id: '8',
    slug: 'special-products',
    name: 'محصولات ویژه نوبرانه',
    nameEn: 'Special Products',
    description: 'محصولات محدود، فصلی و منتخب نوبرانه',
    icon: 'star',
    image: 'https://images.unsplash.com/photo-1604908554007-3e1c1c2c5e5e?w=800&q=80',
  },
];
