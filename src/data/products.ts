export interface WeightOption {
  value: string;
  label: string;
  price: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryName: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  ingredients?: string;
  suitableFor?: string[];
  storageMethod?: string;
  weights: WeightOption[];
  image: string;
  images?: string[];
  oldPrice?: number;
  discount?: number;
  inStock: boolean;
  tags: string[];
  featured?: boolean;
  bestSeller?: boolean;
  newArrival?: boolean;
  wholesalePrice?: number;
  rating?: number;
}

const img = (id: string) => `https://images.unsplash.com/${id}?w=600&h=600&fit=crop&q=80`;

export const products: Product[] = [
  // ===== SINGLE SPICES =====
  {
    id: 'p1', slug: 'turmeric', name: 'زردچوبه', category: 'single-spices', categoryName: 'ادویه‌های تک', categorySlug: 'single-spices',
    shortDescription: 'زردچوبه خالص و خوش‌رنگ، آسیاب‌شده تازه',
    description: 'زردچوبه نوبرانه از بهترین ریشه‌های زردچوبه انتخاب و پس از تمیز کردن، آسیاب می‌شود. رنگ زرد طبیعی و عطر ملایم آن، طعم و رنگ غنی به غذاها می‌دهد. بدون افزودنی و رنگ مصنوعی.',
    suitableFor: ['خورش‌ها', 'برنج و چلو', 'سس و ترشی', 'غذاهای گوشتی'],
    storageMethod: 'در ظرف دربسته، دور از نور و رطوبت نگهداری شود',
    weights: [{ value: '75g', label: '۷۵ گرم', price: 45000 }, { value: '150g', label: '۱۵۰ گرم', price: 85000 }, { value: '500g', label: '۵۰۰ گرم', price: 240000 }],
    image: img('photo-1615485290382-441cc423c98a'), oldPrice: 55000, discount: 18, inStock: true,
    tags: ['ادویه تک', 'پرفروش'], featured: true, bestSeller: true, rating: 4.8,
  },
  {
    id: 'p2', slug: 'black-pepper', name: 'فلفل سیاه', category: 'single-spices', categoryName: 'ادویه‌های تک', categorySlug: 'single-spices',
    shortDescription: 'فلفل سیاه آسیاب‌شده، تند و خوش‌عطر',
    description: 'فلفل سیاه نوبرانه از دانه‌های انتخابی تهیه می‌شود. عطر تند و طعم گرم آن، مزه‌ای خاص به غذاها می‌دهد. آسیاب تازه برای حفظ عطر و طعم.',
    suitableFor: ['غذاهای گوشتی', 'سوپ و آش', 'سس‌ها', 'سالاد'],
    storageMethod: 'در ظرف دربسته، دور از رطوبت نگهداری شود',
    weights: [{ value: '75g', label: '۷۵ گرم', price: 50000 }, { value: '150g', label: '۱۵۰ گرم', price: 95000 }, { value: '500g', label: '۵۰۰ گرم', price: 280000 }],
    image: img('photo-1596040033229-a9821ebd05e6'), inStock: true,
    tags: ['ادویه تک', 'پرفروش'], bestSeller: true, rating: 4.7,
  },
  {
    id: 'p3', slug: 'cinnamon', name: 'دارچین', category: 'single-spices', categoryName: 'ادویه‌های تک', categorySlug: 'single-spices',
    shortDescription: 'دارچین معطر و خوش‌طعم، آسیاب‌شده تازه',
    description: 'دارچین نوبرانه از پوست درخت دارچین انتخابی تهیه می‌شود. عطر شیرین و گرم آن، برای دسر، چای و غذاها بی‌نظیر است.',
    suitableFor: ['چای و دمنوش', 'دسر و شیرینی', 'غذاهای گوشتی', 'کیک و کوکی'],
    storageMethod: 'در ظرف دربسته، دور از نور نگهداری شود',
    weights: [{ value: '75g', label: '۷۵ گرم', price: 48000 }, { value: '150g', label: '۱۵۰ گرم', price: 90000 }, { value: '500g', label: '۵۰۰ گرم', price: 260000 }],
    image: img('photo-1606787367669-6d5e8b27e0c9'), inStock: true,
    tags: ['ادویه تک'], featured: true, rating: 4.9,
  },
  {
    id: 'p4', slug: 'sumac', name: 'سماق', category: 'single-spices', categoryName: 'ادویه‌های تک', categorySlug: 'single-spices',
    shortDescription: 'سماق خالص، رنگ قرمز طبیعی و طعم ترش‌ملایم',
    description: 'سماق نوبرانه از بهترین سماق‌های ایرانی آسیاب و الک می‌شود. رنگ قرمز روشن و طعم ترش‌ملایم آن، همراه بی‌نظیر کباب و غذاهاست.',
    suitableFor: ['کباب', 'سالاد فصل', 'چلوکباب', 'ساندویچ'],
    storageMethod: 'در ظرف دربسته، دور از رطوبت نگهداری شود',
    weights: [{ value: '75g', label: '۷۵ گرم', price: 35000 }, { value: '150g', label: '۱۵۰ گرم', price: 65000 }, { value: '500g', label: '۵۰۰ گرم', price: 180000 }],
    image: img('photo-1599909362335-7c8e1c1c2c5e'), oldPrice: 42000, discount: 17, inStock: true,
    tags: ['ادویه تک'], newArrival: true, rating: 4.6,
  },
  {
    id: 'p5', slug: 'cardamom', name: 'هل', category: 'single-spices', categoryName: 'ادویه‌های تک', categorySlug: 'single-spices',
    shortDescription: 'هل سبز معطر، دانه‌های درشت و خوش‌بو',
    description: 'هل سبز نوبرانه از دانه‌های درشت و خوش‌عطر انتخاب می‌شود. عطر مطبوع آن برای چای، قهوه، شیرینی و غذاها مناسب است.',
    suitableFor: ['چای و قهوه', 'شیرینی و دسر', 'برنج و پلو', 'دمنوش'],
    storageMethod: 'در ظرف دربسته، دور از رطوبت نگهداری شود',
    weights: [{ value: '50g', label: '۵۰ گرم', price: 75000 }, { value: '100g', label: '۱۰۰ گرم', price: 140000 }, { value: '250g', label: '۲۵۰ گرم', price: 320000 }],
    image: img('photo-1606787367669-6d5e8b27e0c9'), inStock: true,
    tags: ['ادویه تک'], rating: 4.8,
  },
  {
    id: 'p6', slug: 'cumin', name: 'زیره', category: 'single-spices', categoryName: 'ادویه‌های تک', categorySlug: 'single-spices',
    shortDescription: 'زیره خالص، عطر گرم و طعم مخصوص',
    description: 'زیره نوبرانه از دانه‌های انتخابی آسیاب می‌شود. عطر گرم و طعم مخصوص آن، برای خورش، کوکو و غذاها عالی است.',
    suitableFor: ['خورش‌ها', 'کوکو', 'غذاهای گوشتی', 'سالاد'],
    storageMethod: 'در ظرف دربسته، دور از رطوبت نگهداری شود',
    weights: [{ value: '75g', label: '۷۵ گرم', price: 40000 }, { value: '150g', label: '۱۵۰ گرم', price: 75000 }, { value: '500g', label: '۵۰۰ گرم', price: 220000 }],
    image: img('photo-1596040033229-a9821ebd05e6'), inStock: true,
    tags: ['ادویه تک'], rating: 4.5,
  },

  // ===== BLENDED SPICES =====
  {
    id: 'p7', slug: 'ghormeh-sabzi-spice', name: 'ادویه قورمه‌سبزی', category: 'blended-spices', categoryName: 'ادویه‌های ترکیبی', categorySlug: 'blended-spices',
    shortDescription: 'ترکیب مخصوص نوبرانه برای قورمه‌سبزی اصیل',
    description: 'ادویه قورمه‌سبزی نوبرانه، ترکیبی متعادل از ادویه‌های خالص است که طعم اصیل قورمه‌سبزی را تضمین می‌کند. با نسبت دقیق ترکیب شده تا طعمی غنی و متعادل به خورش بدهد.',
    ingredients: 'زردچوبه، فلفل سیاه، زیره، هل، دارچین، لیمو عمانی خشک',
    suitableFor: ['قورمه‌سبزی', 'خورش سبزی', 'خورش لوبیا'],
    storageMethod: 'در ظرف دربسته، دور از نور و رطوبت نگهداری شود',
    weights: [{ value: '75g', label: '۷۵ گرم', price: 55000 }, { value: '150g', label: '۱۵۰ گرم', price: 105000 }, { value: '500g', label: '۵۰۰ گرم', price: 300000 }],
    image: img('photo-1604908554007-3e1c1c2c5e5e'), oldPrice: 65000, discount: 15, inStock: true,
    tags: ['ادویه ترکیبی', 'پرفروش'], featured: true, bestSeller: true, rating: 4.9,
  },
  {
    id: 'p8', slug: 'chicken-saffron-spice', name: 'ادویه جوجه زعفرانی', category: 'blended-spices', categoryName: 'ادویه‌های ترکیبی', categorySlug: 'blended-spices',
    shortDescription: 'ترکیب زعفرانی مخصوص مرغ زعفرانی',
    description: 'ادویه جوجه زعفرانی نوبرانه، ترکیبی از زعفران، فلفل، زردچوبه و ادویه‌های خالص است که به مرغ رنگ و طعم زعفرانی زیبا می‌دهد. مناسب برای جوجه کباب، مرغ تنوری و گریل.',
    ingredients: 'زعفران، زردچوبه، فلفل سیاه، فلفل قرمز، زیره، سیر خشک',
    suitableFor: ['جوجه کباب', 'مرغ تنوری', 'مرغ گریل', 'مرغ تابه‌ای'],
    storageMethod: 'در ظرف دربسته، دور از نور و رطوبت نگهداری شود',
    weights: [{ value: '75g', label: '۷۵ گرم', price: 75000 }, { value: '150g', label: '۱۵۰ گرم', price: 140000 }, { value: '500g', label: '۵۰۰ گرم', price: 400000 }],
    image: img('photo-1604908554007-3e1c1c2c5e5e'), inStock: true,
    tags: ['ادویه ترکیبی', 'پرفروش'], featured: true, bestSeller: true, rating: 4.8,
  },
  {
    id: 'p9', slug: 'gheymeh-spice', name: 'ادویه قیمه', category: 'blended-spices', categoryName: 'ادویه‌های ترکیبی', categorySlug: 'blended-spices',
    shortDescription: 'ترکیب مخصوص نوبرانه برای قیمه بزی',
    description: 'ادویه قیمه نوبرانه، ترکیبی متعادل از ادویه‌های خالص است که طعم اصیل قیمه را به غذایتان می‌بخشد.',
    ingredients: 'زردچوبه، فلفل سیاه، دارچین، هل، میخک، زیره',
    suitableFor: ['قیمه', 'خورش لپه', 'خورش بزی'],
    storageMethod: 'در ظرف دربسته، دور از نور و رطوبت نگهداری شود',
    weights: [{ value: '75g', label: '۷۵ گرم', price: 55000 }, { value: '150g', label: '۱۵۰ گرم', price: 105000 }, { value: '500g', label: '۵۰۰ گرم', price: 300000 }],
    image: img('photo-1604908554007-3e1c1c2c5e5e'), inStock: true,
    tags: ['ادویه ترکیبی'], rating: 4.7,
  },
  {
    id: 'p10', slug: 'abgousht-spice', name: 'ادویه آبگوشت', category: 'blended-spices', categoryName: 'ادویه‌های ترکیبی', categorySlug: 'blended-spices',
    shortDescription: 'ترکیب گرم و خوش‌عطر برای آبگوشت اصیل',
    description: 'ادویه آبگوشت نوبرانه، ترکیبی از ادویه‌های گرم و خوش‌عطر است که طعمی غنی و دلپذیر به آبگوشت می‌دهد.',
    ingredients: 'زردچوبه، فلفل سیاه، زیره، دارچین، هل، لیمو عمانی',
    suitableFor: ['آبگوشت', 'دمیپخت', 'سوپ گوشتی'],
    storageMethod: 'در ظرف دربسته، دور از رطوبت نگهداری شود',
    weights: [{ value: '75g', label: '۷۵ گرم', price: 50000 }, { value: '150g', label: '۱۵۰ گرم', price: 95000 }, { value: '500g', label: '۵۰۰ گرم', price: 270000 }],
    image: img('photo-1604908554007-3e1c1c2c5e5e'), inStock: true,
    tags: ['ادویه ترکیبی'], newArrival: true, rating: 4.6,
  },
  {
    id: 'p11', slug: 'macaroni-spice', name: 'ادویه ماکارونی', category: 'blended-spices', categoryName: 'ادویه‌های ترکیبی', categorySlug: 'blended-spices',
    shortDescription: 'ترکیب مخصوص برای ماکارونی و پاستا',
    description: 'ادویه ماکارونی نوبرانه، ترکیبی از ادویه‌های خالص است که طعمی خاص و خوش‌مزه به ماکارونی و پاستا می‌دهد.',
    ingredients: 'فلفل قرمز، آویشن، ریحان خشک، سیر خشک، پاپریکا',
    suitableFor: ['ماکارونی', 'پاستا', 'سس گوجه'],
    storageMethod: 'در ظرف دربسته، دور از رطوبت نگهداری شود',
    weights: [{ value: '75g', label: '۷۵ گرم', price: 45000 }, { value: '150g', label: '۱۵۰ گرم', price: 85000 }, { value: '500g', label: '۵۰۰ گرم', price: 240000 }],
    image: img('photo-1604908554007-3e1c1c2c5e5e'), inStock: true,
    tags: ['ادویه ترکیبی'], rating: 4.5,
  },
  {
    id: 'p12', slug: 'kachi-spice', name: 'ادویه کاچی', category: 'blended-spices', categoryName: 'ادویه‌های ترکیبی', categorySlug: 'blended-spices',
    shortDescription: 'ترکیب گرم و مقوی برای کاچی',
    description: 'ادویه کاچی نوبرانه، ترکیبی از ادویه‌های گرم و مقوی است که برای کاچی و غذاهای گرم مناسب است.',
    ingredients: 'زردچوبه، دارچین، هل، زنجبیل، فلفل سیاه',
    suitableFor: ['کاچی', 'حلیم', 'غذاهای گرم'],
    storageMethod: 'در ظرف دربسته، دور از رطوبت نگهداری شود',
    weights: [{ value: '75g', label: '۷۵ گرم', price: 48000 }, { value: '150g', label: '۱۵۰ گرم', price: 90000 }, { value: '500g', label: '۵۰۰ گرم', price: 250000 }],
    image: img('photo-1604908554007-3e1c1c2c5e5e'), inStock: true,
    tags: ['ادویه ترکیبی'], rating: 4.6,
  },

  // ===== DRIED HERBS =====
  {
    id: 'p13', slug: 'dried-dill', name: 'شوید خشک', category: 'dried-herbs', categoryName: 'سبزیجات خشک', categorySlug: 'dried-herbs',
    shortDescription: 'شوید خشک تمیز و خوش‌عطر',
    description: 'شوید خشک نوبرانه از بهترین شوید تازه خشک و تمیز می‌شود. عطر طبیعی و رنگ سبز روشن آن، برای قورمه‌سبزی، ماست و غذاها عالی است.',
    suitableFor: ['قورمه‌سبزی', 'ماست شوید', 'برنج', 'سس'],
    storageMethod: 'در ظرف دربسته، دور از رطوبت و نور نگهداری شود',
    weights: [{ value: '100g', label: '۱۰۰ گرم', price: 38000 }, { value: '250g', label: '۲۵۰ گرم', price: 85000 }, { value: '500g', label: '۵۰۰ گرم', price: 160000 }],
    image: img('photo-1515449570631-5c08f1c3b6c3'), oldPrice: 45000, discount: 16, inStock: true,
    tags: ['سبزیجات خشک', 'پرفروش'], featured: true, bestSeller: true, rating: 4.7,
  },
  {
    id: 'p14', slug: 'dried-mint', name: 'نعناع خشک', category: 'dried-herbs', categoryName: 'سبزیجات خشک', categorySlug: 'dried-herbs',
    shortDescription: 'نعناع خشک خوش‌عطر و تمیز',
    description: 'نعناع خشک نوبرانه از نعناع تازه خشک می‌شود. عطر قوی و طعم خنک آن، برای دوغ، چای و غذاها مناسب است.',
    suitableFor: ['دوغ', 'چای', 'آبگوشت', 'سالاد'],
    storageMethod: 'در ظرف دربسته، دور از رطوبت نگهداری شود',
    weights: [{ value: '100g', label: '۱۰۰ گرم', price: 35000 }, { value: '250g', label: '۲۵۰ گرم', price: 80000 }, { value: '500g', label: '۵۰۰ گرم', price: 150000 }],
    image: img('photo-1515449570631-5c08f1c3b6c3'), inStock: true,
    tags: ['سبزیجات خشک'], rating: 4.8,
  },
  {
    id: 'p15', slug: 'dried-parsley', name: 'جعفری خشک', category: 'dried-herbs', categoryName: 'سبزیجات خشک', categorySlug: 'dried-herbs',
    shortDescription: 'جعفری خشک تمیز و خوش‌رنگ',
    description: 'جعفری خشک نوبرانه از جعفری تازه خشک و تمیز می‌شود. عطر طبیعی و رنگ سبز آن، برای غذاها و سالادها عالی است.',
    suitableFor: ['خورش‌ها', 'سالاد', 'سس', 'سوپ'],
    storageMethod: 'در ظرف دربسته، دور از رطوبت نگهداری شود',
    weights: [{ value: '100g', label: '۱۰۰ گرم', price: 35000 }, { value: '250g', label: '۲۵۰ گرم', price: 80000 }, { value: '500g', label: '۵۰۰ گرم', price: 150000 }],
    image: img('photo-1515449570631-5c08f1c3b6c3'), inStock: true,
    tags: ['سبزیجات خشک'], newArrival: true, rating: 4.6,
  },
  {
    id: 'p16', slug: 'ghormeh-sabzi-herb-mix', name: 'سبزی قورمه', category: 'dried-herbs', categoryName: 'سبزیجات خشک', categorySlug: 'dried-herbs',
    shortDescription: 'ترکیب آماده سبزی قورمه خشک',
    description: 'سبزی قورمه نوبرانه، ترکیب متناسب از شوید، تره، جعفری و گشنیز خشک است که آماده استفاده برای قورمه‌سبزی است.',
    ingredients: 'شوید خشک، تره خشک، جعفری خشک، گشنیز خشک',
    suitableFor: ['قورمه‌سبزی', 'خورش سبزی'],
    storageMethod: 'در ظرف دربسته، دور از رطوبت نگهداری شود',
    weights: [{ value: '150g', label: '۱۵۰ گرم', price: 55000 }, { value: '300g', label: '۳۰۰ گرم', price: 100000 }, { value: '500g', label: '۵۰۰ گرم', price: 160000 }],
    image: img('photo-1515449570631-5c08f1c3b6c3'), oldPrice: 65000, discount: 15, inStock: true,
    tags: ['سبزیجات خشک', 'پرفروش'], bestSeller: true, rating: 4.8,
  },
  {
    id: 'p17', slug: 'ash-herb-mix', name: 'سبزی آش', category: 'dried-herbs', categoryName: 'سبزیجات خشک', categorySlug: 'dried-herbs',
    shortDescription: 'ترکیب آماده سبزی آش خشک',
    description: 'سبزی آش نوبرانه، ترکیب متناسب از سبزیجات خشک برای انواع آش‌های ایرانی است.',
    ingredients: 'تره، جعفری، گشنیز، نعناع، شوید خشک',
    suitableFor: ['آش رشته', 'آش دوغ', 'آش جو'],
    storageMethod: 'در ظرف دربسته، دور از رطوبت نگهداری شود',
    weights: [{ value: '150g', label: '۱۵۰ گرم', price: 50000 }, { value: '300g', label: '۳۰۰ گرم', price: 95000 }, { value: '500g', label: '۵۰۰ گرم', price: 150000 }],
    image: img('photo-1515449570631-5c08f1c3b6c3'), inStock: true,
    tags: ['سبزیجات خشک'], rating: 4.5,
  },
  {
    id: 'p18', slug: 'kuku-herb-mix', name: 'سبزی کوکو', category: 'dried-herbs', categoryName: 'سبزیجات خشک', categorySlug: 'dried-herbs',
    shortDescription: 'ترکیب آماده سبزی کوکو خشک',
    description: 'سبزی کوکو نوبرانه، ترکیب متناسب از سبزیجات خشک برای کوکو سبزی است.',
    ingredients: 'تره، جعفری، گشنیز، شوید خشک',
    suitableFor: ['کوکو سبزی', 'کوکو لوبیا'],
    storageMethod: 'در ظرف دربسته، دور از رطوبت نگهداری شود',
    weights: [{ value: '150g', label: '۱۵۰ گرم', price: 48000 }, { value: '300g', label: '۳۰۰ گرم', price: 90000 }, { value: '500g', label: '۵۰۰ گرم', price: 140000 }],
    image: img('photo-1515449570631-5c08f1c3b6c3'), inStock: true,
    tags: ['سبزیجات خشک'], rating: 4.6,
  },

  // ===== SOOQH =====
  {
    id: 'p19', slug: 'sooqh-senjed-almond', name: 'سویق سنجد و بادام', category: 'sooqh', categoryName: 'سویق', categorySlug: 'sooqh',
    shortDescription: 'سویق سنتی مقوی از سنجد و بادام',
    description: 'سویق سنجد و بادام نوبرانه، محصول سنتی و مقوی است که از سنجد و بادام آسیاب‌شده با ترکیب انتخابی تهیه می‌شود. مناسب برای صبحانه و میان‌وعده.',
    ingredients: 'سنجد، بادام، شکر، هل',
    suitableFor: ['صبحانه', 'میان‌وعده', 'مقوی'],
    storageMethod: 'در ظرف دربسته، دور از رطوبت نگهداری شود',
    weights: [{ value: '200g', label: '۲۰۰ گرم', price: 95000 }, { value: '400g', label: '۴۰۰ گرم', price: 180000 }, { value: '800g', label: '۸۰۰ گرم', price: 340000 }],
    image: img('photo-1566208311264-520c011b22c7'), oldPrice: 110000, discount: 14, inStock: true,
    tags: ['سویق', 'پرفروش'], featured: true, bestSeller: true, rating: 4.7,
  },
  {
    id: 'p20', slug: 'sooqh-grain', name: 'سویق غلات', category: 'sooqh', categoryName: 'سویق', categorySlug: 'sooqh',
    shortDescription: 'سویق مغذی از غلات انتخابی',
    description: 'سویق غلات نوبرانه، ترکیبی از غلات آسیاب‌شده با مغزها است که محصولی مقوی و سیرکننده است.',
    ingredients: 'گندم، جو، بادام، گردو، شکر، هل',
    suitableFor: ['صبحانه', 'میان‌وعده', 'مقوی'],
    storageMethod: 'در ظرف دربسته، دور از رطوبت نگهداری شود',
    weights: [{ value: '200g', label: '۲۰۰ گرم', price: 85000 }, { value: '400g', label: '۴۰۰ گرم', price: 160000 }, { value: '800g', label: '۸۰۰ گرم', price: 300000 }],
    image: img('photo-1566208311264-520c011b22c7'), inStock: true,
    tags: ['سویق'], newArrival: true, rating: 4.6,
  },
  {
    id: 'p21', slug: 'sooqh-mixed', name: 'سویق ترکیبی', category: 'sooqh', categoryName: 'سویق', categorySlug: 'sooqh',
    shortDescription: 'سویق ترکیبی مقوی و خوش‌طعم',
    description: 'سویق ترکیبی نوبرانه، ترکیبی از سنجد، بادام، گردو و غلات است که محصولی مقوی و خوش‌طعم برای همه سنین است.',
    ingredients: 'سنجد، بادام، گردو، گندم، شکر، هل',
    suitableFor: ['صبحانه', 'میان‌وعده', 'مقوی'],
    storageMethod: 'در ظرف دربسته، دور از رطوبت نگهداری شود',
    weights: [{ value: '200g', label: '۲۰۰ گرم', price: 90000 }, { value: '400g', label: '۴۰۰ گرم', price: 170000 }, { value: '800g', label: '۸۰۰ گرم', price: 320000 }],
    image: img('photo-1566208311264-520c011b22c7'), inStock: true,
    tags: ['سویق'], rating: 4.5,
  },

  // ===== TEA & INFUSIONS =====
  {
    id: 'p22', slug: 'borage-flower', name: 'گل گاوزبان', category: 'tea-infusions', categoryName: 'دمنوش و چای', categorySlug: 'tea-infusions',
    shortDescription: 'گل گاوزبان خشک، خوش‌رنگ و خوش‌عطر',
    description: 'گل گاوزبان نوبرانه از گل‌های انتخابی خشک می‌شود. رنگ بنفش و عطر مطبوع آن، برای دمنوش آرامش‌بخش عالی است.',
    suitableFor: ['دمنوش', 'آرامش', 'نوشیدنی گرم'],
    storageMethod: 'در ظرف دربسته، دور از نور و رطوبت نگهداری شود',
    weights: [{ value: '50g', label: '۵۰ گرم', price: 45000 }, { value: '100g', label: '۱۰۰ گرم', price: 85000 }, { value: '250g', label: '۲۵۰ گرم', price: 200000 }],
    image: img('photo-1597318181409-0e8e6d0c3f3e'), oldPrice: 52000, discount: 13, inStock: true,
    tags: ['دمنوش', 'پرفروش'], featured: true, bestSeller: true, rating: 4.8,
  },
  {
    id: 'p23', slug: 'chamomile', name: 'بابونه', category: 'tea-infusions', categoryName: 'دمنوش و چای', categorySlug: 'tea-infusions',
    shortDescription: 'بابونه خشک، خوش‌عطر و آرامش‌بخش',
    description: 'بابونه نوبرانه از گل‌های انتخابی خشک می‌شود. عطر ملایم و طعم شیرین آن، برای دمنوش آرامش‌بخش مناسب است.',
    suitableFor: ['دمنوش', 'آرامش', 'نوشیدنی گرم'],
    storageMethod: 'در ظرف دربسته، دور از نور و رطوبت نگهداری شود',
    weights: [{ value: '50g', label: '۵۰ گرم', price: 40000 }, { value: '100g', label: '۱۰۰ گرم', price: 75000 }, { value: '250g', label: '۲۵۰ گرم', price: 180000 }],
    image: img('photo-1597318181409-0e8e6d0c3f3e'), inStock: true,
    tags: ['دمنوش'], rating: 4.7,
  },
  {
    id: 'p24', slug: 'lemon-balm', name: 'به‌لیمو', category: 'tea-infusions', categoryName: 'دمنوش و چای', categorySlug: 'tea-infusions',
    shortDescription: 'به‌لیمو خشک، خوش‌عطر و طراوت‌بخش',
    description: 'به‌لیمو نوبرانه از برگ‌های انتخابی خشک می‌شود. عطر لیمویی و طعم طراوت‌بخش آن، برای دمنوش مناسب است.',
    suitableFor: ['دمنوش', 'طراوت', 'نوشیدنی گرم'],
    storageMethod: 'در ظرف دربسته، دور از رطوبت نگهداری شود',
    weights: [{ value: '50g', label: '۵۰ گرم', price: 38000 }, { value: '100g', label: '۱۰۰ گرم', price: 70000 }, { value: '250g', label: '۲۵۰ گرم', price: 170000 }],
    image: img('photo-1597318181409-0e8e6d0c3f3e'), inStock: true,
    tags: ['دمنوش'], newArrival: true, rating: 4.6,
  },
  {
    id: 'p25', slug: 'lavender', name: 'اسطوخودوس', category: 'tea-infusions', categoryName: 'دمنوش و چای', categorySlug: 'tea-infusions',
    shortDescription: 'اسطوخودوس خشک، خوش‌عطر و آرامش‌بخش',
    description: 'اسطوخودوس نوبرانه از گل‌های انتخابی خشک می‌شود. عطر مطبوع و آرامش‌بخش آن، برای دمنوش و معطر کردن فضا مناسب است.',
    suitableFor: ['دمنوش', 'آرامش', 'نوشیدنی گرم'],
    storageMethod: 'در ظرف دربسته، دور از نور و رطوبت نگهداری شود',
    weights: [{ value: '50g', label: '۵۰ گرم', price: 55000 }, { value: '100g', label: '۱۰۰ گرم', price: 100000 }, { value: '250g', label: '۲۵۰ گرم', price: 230000 }],
    image: img('photo-1597318181409-0e8e6d0c3f3e'), inStock: true,
    tags: ['دمنوش'], rating: 4.7,
  },
  {
    id: 'p26', slug: 'dried-lime', name: 'لیمو خشک', category: 'tea-infusions', categoryName: 'دمنوش و چای', categorySlug: 'tea-infusions',
    shortDescription: 'لیمو خشک عمانی، خوش‌عطر و ترش‌مزه',
    description: 'لیمو خشک نوبرانه از لیموهای تازه خشک می‌شود. عطر قوی و طعم ترش آن، برای خورش، دمنوش و غذاها مناسب است.',
    suitableFor: ['خورش‌ها', 'دمنوش', 'آبگوشت'],
    storageMethod: 'در ظرف دربسته، دور از رطوبت نگهداری شود',
    weights: [{ value: '100g', label: '۱۰۰ گرم', price: 35000 }, { value: '250g', label: '۲۵۰ گرم', price: 80000 }, { value: '500g', label: '۵۰۰ گرم', price: 150000 }],
    image: img('photo-1597318181409-0e8e6d0c3f3e'), inStock: true,
    tags: ['دمنوش'], rating: 4.5,
  },

  // ===== DRIED FRUITS & SNACKS =====
  {
    id: 'p27', slug: 'dried-peach', name: 'هلو خشک', category: 'dried-fruits-snacks', categoryName: 'خشکبار و تنقلات', categorySlug: 'dried-fruits-snacks',
    shortDescription: 'هلو خشک خوش‌طعم و طبیعی',
    description: 'هلو خشک نوبرانه از هلوهای تازه خشک می‌شود. طعم شیرین و بافت نرم آن، تنقلاتی سالم و خوش‌مزه است.',
    suitableFor: ['تنقلات', 'میان‌وعده'],
    storageMethod: 'در ظرف دربسته، دور از رطوبت نگهداری شود',
    weights: [{ value: '200g', label: '۲۰۰ گرم', price: 90000 }, { value: '400g', label: '۴۰۰ گرم', price: 170000 }, { value: '800g', label: '۸۰۰ گرم', price: 320000 }],
    image: img('photo-1606101208038-4de8f2c1b0f3'), inStock: true,
    tags: ['خشکبار'], featured: true, rating: 4.6,
  },
  {
    id: 'p28', slug: 'mixed-dried-fruit', name: 'آمیخته میوه خشک', category: 'dried-fruits-snacks', categoryName: 'خشکبار و تنقلات', categorySlug: 'dried-fruits-snacks',
    shortDescription: 'ترکیب میوه خشک سالم و خوش‌مزه',
    description: 'آمیخته میوه خشک نوبرانه، ترکیبی از انواع میوه‌های خشک انتخابی است که تنقلاتی سالم و متنوع برای همه سنین است.',
    ingredients: 'هلو خشک، زردآلو خشک، انجیر خشک، خرما، کشمش',
    suitableFor: ['تنقلات', 'میان‌وعده', 'صبحانه'],
    storageMethod: 'در ظرف دربسته، دور از رطوبت نگهداری شود',
    weights: [{ value: '300g', label: '۳۰۰ گرم', price: 130000 }, { value: '500g', label: '۵۰۰ گرم', price: 210000 }, { value: '1000g', label: '۱ کیلوگرم', price: 400000 }],
    image: img('photo-1606101208038-4de8f2c1b0f3'), oldPrice: 150000, discount: 13, inStock: true,
    tags: ['خشکبار'], newArrival: true, rating: 4.7,
  },

  // ===== FLOUR & INGREDIENTS =====
  {
    id: 'p29', slug: 'pastry-flour', name: 'آرد شیرینی', category: 'flour-ingredients', categoryName: 'آرد و مواد اولیه', categorySlug: 'flour-ingredients',
    shortDescription: 'آرد شیرینی نرم و سفید برای شیرینی‌پزی',
    description: 'آرد شیرینی نوبرانه از گندم انتخابی آسیاب می‌شود. بافت نرم و رنگ سفید آن، برای انواع شیرینی و کیک مناسب است.',
    suitableFor: ['شیرینی', 'کیک', 'کوکی'],
    storageMethod: 'در ظرف دربسته، دور از رطوبت نگهداری شود',
    weights: [{ value: '500g', label: '۵۰۰ گرم', price: 45000 }, { value: '1000g', label: '۱ کیلوگرم', price: 85000 }, { value: '5000g', label: '۵ کیلوگرم', price: 400000 }],
    image: img('photo-1568254183919-cc70008b5671'), inStock: true,
    tags: ['آرد'], rating: 4.5,
  },
  {
    id: 'p30', slug: 'cooking-flour', name: 'آرد مصرفی', category: 'flour-ingredients', categoryName: 'آرد و مواد اولیه', categorySlug: 'flour-ingredients',
    shortDescription: 'آرد مصرفی باکیفیت برای آشپزی',
    description: 'آرد مصرفی نوبرانه برای استفاده روزمره در آشپزی و نان‌پزی مناسب است. کیفیت یکنواخت و قیمت مناسب.',
    suitableFor: ['آشپزی', 'نان', 'سوخاری'],
    storageMethod: 'در ظرف دربسته، دور از رطوبت نگهداری شود',
    weights: [{ value: '1000g', label: '۱ کیلوگرم', price: 55000 }, { value: '5000g', label: '۵ کیلوگرم', price: 250000 }, { value: '10000g', label: '۱۰ کیلوگرم', price: 480000 }],
    image: img('photo-1568254183919-cc70008b5671'), inStock: true,
    tags: ['آرد'], rating: 4.4,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.bestSeller);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.newArrival);
}

export function getFeatured(): Product[] {
  return products.filter((p) => p.featured);
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return products;
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.categoryName.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
  );
}
