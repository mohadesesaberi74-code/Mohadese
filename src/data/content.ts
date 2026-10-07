export interface Recipe {
  id: string;
  name: string;
  image: string;
  ingredients: string[];
  recommendedProducts: string[];
  instructions: string[];
  time: string;
  difficulty: string;
}

export const recipes: Recipe[] = [
  {
    id: 'r1',
    name: 'مرغ تنوری زعفرانی',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80',
    ingredients: ['مرغ کامل', 'ماست', 'زعفران', 'ادویه جوجه زعفرانی نوبرانه', 'لیمو', 'سیر', 'روغن'],
    recommendedProducts: ['chicken-saffron-spice', 'turmeric', 'saffron'],
    instructions: [
      'مرغ را تمیز بشویید و خشک کنید',
      'ماست، زعفران، ادویه جوجه زعفرانی و لیمو را مخلوط کنید',
      'مرغ را در مخلوط مزه‌دار کنید و حداقل ۲ ساعت در یخچال بگذارید',
      'فر را از قبل گرم کنید و مرغ را ۴۵ تا ۶۰ دقیقه بپزید',
    ],
    time: '۹۰ دقیقه',
    difficulty: 'متوسط',
  },
  {
    id: 'r2',
    name: 'قورمه‌سبزی',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80',
    ingredients: ['گوشت گوسفند', 'سبزی قورمه', 'لوبیا قرمز', 'پیاز', 'ادویه قورمه‌سبزی نوبرانه', 'لیمو عمانی', 'روغن'],
    recommendedProducts: ['ghormeh-sabzi-spice', 'ghormeh-sabzi-herb-mix', 'dried-lime'],
    instructions: [
      'پیاز را تفت دهید تا طلایی شود',
      'گوشت را اضافه کرده و تفت دهید',
      'سبزی قورمه را اضافه کنید',
      'ادویه، لوبیا و لیمو عمانی را اضافه و بپزید',
    ],
    time: '۱۸۰ دقیقه',
    difficulty: 'متوسط',
  },
  {
    id: 'r3',
    name: 'قیمه بزی',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80',
    ingredients: ['گوشت گوسفند', 'لپه', 'پیاز', 'ادویه قیمه نوبرانه', 'رب گوجه', 'زعفران', 'لیمو عمانی'],
    recommendedProducts: ['gheymeh-spice', 'turmeric', 'dried-lime'],
    instructions: [
      'لپه را از قبل خیس کنید',
      'پیاز را تفت دهید و گوشت را اضافه کنید',
      'رب گوجه و ادویه قیمه را اضافه کنید',
      'لپه و آب اضافه کرده و بپزید',
    ],
    time: '۱۵۰ دقیقه',
    difficulty: 'متوسط',
  },
  {
    id: 'r4',
    name: 'آبگوشت',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80',
    ingredients: ['گوشت گوسفند', 'لوبیا سفید', 'سیب‌زمینی', 'پیاز', 'ادویه آبگوشت نوبرانه', 'گوجه', 'لیمو عمانی'],
    recommendedProducts: ['abgousht-spice', 'dried-mint', 'dried-lime'],
    instructions: [
      'گوشت و پیاز را در آب بپزید',
      'ادویه آبگوشت را اضافه کنید',
      'لوبیا و سیب‌زمینی را اضافه کرده و بپزید',
      'با نان و ترشی سرو کنید',
    ],
    time: '۱۲۰ دقیقه',
    difficulty: 'آسان',
  },
  {
    id: 'r5',
    name: 'کاچی',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80',
    ingredients: ['آرد گندم', 'روغن', 'ادویه کاچی نوبرانه', 'شکر', 'هل'],
    recommendedProducts: ['kachi-spice', 'cinnamon', 'cardamom'],
    instructions: [
      'آرد را در روغن تفت دهید تا طلایی شود',
      'ادویه کاچی را اضافه کنید',
      'آب اضافه کرده و هم بزنید',
      'با شکر و هل سرو کنید',
    ],
    time: '۴۵ دقیقه',
    difficulty: 'آسان',
  },
  {
    id: 'r6',
    name: 'جوجه کباب زعفرانی',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80',
    ingredients: ['سینه مرغ', 'ماست', 'زعفران', 'ادویه جوجه زعفرانی نوبرانه', 'لیمو', 'پیاز'],
    recommendedProducts: ['chicken-saffron-spice', 'sumac', 'dried-mint'],
    instructions: [
      'مرغ را خرد و تمیز کنید',
      'ماست، زعفران، ادویه و لیمو را مخلوط کنید',
      'مرغ را مزه‌دار کنید و ۴ ساعت بگذارید',
      'روی سیخ کشیده و کباب کنید',
    ],
    time: '۶۰ دقیقه',
    difficulty: 'متوسط',
  },
];

export interface DishInspiration {
  id: string;
  name: string;
  image: string;
  spiceName: string;
  spiceSlug: string;
}

export const dishInspirations: DishInspiration[] = [
  { id: 'd1', name: 'قورمه‌سبزی', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80', spiceName: 'ادویه قورمه‌سبزی نوبرانه', spiceSlug: 'ghormeh-sabzi-spice' },
  { id: 'd2', name: 'قیمه', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80', spiceName: 'ادویه قیمه نوبرانه', spiceSlug: 'gheymeh-spice' },
  { id: 'd3', name: 'مرغ زعفرانی', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80', spiceName: 'ادویه جوجه زعفرانی نوبرانه', spiceSlug: 'chicken-saffron-spice' },
  { id: 'd4', name: 'جوجه', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80', spiceName: 'ادویه جوجه زعفرانی نوبرانه', spiceSlug: 'chicken-saffron-spice' },
  { id: 'd5', name: 'آبگوشت', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80', spiceName: 'ادویه آبگوشت نوبرانه', spiceSlug: 'abgousht-spice' },
  { id: 'd6', name: 'ماکارونی', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80', spiceName: 'ادویه ماکارونی نوبرانه', spiceSlug: 'macaroni-spice' },
  { id: 'd7', name: 'کوکو', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80', spiceName: 'سبزی کوکو نوبرانه', spiceSlug: 'kuku-herb-mix' },
  { id: 'd8', name: 'آش', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80', spiceName: 'سبزی آش نوبرانه', spiceSlug: 'ash-herb-mix' },
  { id: 'd9', name: 'کاچی', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80', spiceName: 'ادویه کاچی نوبرانه', spiceSlug: 'kachi-spice' },
  { id: 'd10', name: 'غذاهای تنوری', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80', spiceName: 'ادویه جوجه زعفرانی نوبرانه', spiceSlug: 'chicken-saffron-spice' },
];

export interface EducationalCard {
  id: string;
  title: string;
  content: string;
  icon: string;
}

export const educationalCards: EducationalCard[] = [
  { id: 'e1', title: 'روش نگهداری ادویه', content: 'ادویه‌ها را در ظرف دربسته، دور از نور، گرما و رطوبت نگهداری کنید. از قرار دادن آن‌ها کنار اجاق خودداری کنید.', icon: 'storage' },
  { id: 'e2', title: 'زمان مناسب اضافه کردن ادویه', content: 'ادویه‌های خشک را در اواسط پخت اضافه کنید تا عطر و طعم آن‌ها بهتر در غذا حل شود. زعفران را در اواخر پخت اضافه کنید.', icon: 'clock' },
  { id: 'e3', title: 'تفاوت ادویه تازه و کهنه', content: 'ادویه تازه عطر قوی‌تر و رنگ زنده‌تری دارد. ادویه کهنه رنگ کدر و عطر ضعیفی دارد. برای بهترین طعم، ادویه را تازه آسیاب کنید.', icon: 'fresh' },
  { id: 'e4', title: 'روش نگهداری سبزی خشک', content: 'سبزی خشک را در کیسه یا ظرف دربسته، در جای خشک و خنک نگهداری کنید. از رطوبت دور بمانید تا کپک نزند.', icon: 'herb' },
  { id: 'e5', title: 'نحوه مصرف سویق', content: 'سویق را می‌توان با شیر، ماست یا آب میوه مخلوط و مصرف کرد. برای صبحانه مقوی و میان‌وعده سالم مناسب است.', icon: 'spoon' },
  { id: 'e6', title: 'نکات آشپزی', content: 'برای طعم بهتر، ادویه را قبل از اضافه کردن به غذا، کوتاه در روغن تفت دهید تا عطر آن آزاد شود.', icon: 'cook' },
  { id: 'e7', title: 'شناخت ادویه‌ها', content: 'هر ادویه طعم و کاربرد مخصوصی دارد. زردچوبه برای رنگ، فلفل برای تندی، دارچین برای شیرینی و سماق برای ترشی استفاده می‌شود.', icon: 'identify' },
];
