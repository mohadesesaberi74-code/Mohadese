// همهٔ داده‌های نمایشی سایت — بعداً می‌توان به‌راحتی با داده‌های واقعی فروشگاه جایگزین کرد
export const BRAND = {
  name: 'نوبرانه',
  slogan: 'تجربه طعم واقعی',
}

export const NAV_LINKS = [
  { label: 'خانه', href: '#' },
  { label: 'فروشگاه', href: '#products' },
  { label: 'ادویه‌ها', href: '#categories' },
  { label: 'ادویه‌های ترکیبی', href: '#categories' },
  { label: 'سبزیجات خشک', href: '#categories' },
  { label: 'دمنوش‌ها', href: '#categories' },
  { label: 'درباره ما', href: '#story' },
  { label: 'تماس با ما', href: '#footer' },
]

export const CATEGORIES = [
  { id: 1, name: 'ادویه‌های تک', image: '/images/cat-spices.jpg' },
  { id: 2, name: 'ادویه‌های ترکیبی', image: '/images/cat-blends.jpg' },
  { id: 3, name: 'سبزیجات خشک', image: '/images/cat-herbs.jpg' },
  { id: 4, name: 'دمنوش‌ها', image: '/images/cat-tea.jpg' },
]

export const PRODUCTS = [
  {
    id: 1,
    name: 'زردچوبه',
    description: 'زردچوبه‌ی خالص و پررنگ، با عطر ملایم و رنگ درخشان برای انواع خورش و پلو.',
    weight: '۱۰۰ گرم',
    image: '/images/p-turmeric.jpg',
  },
  {
    id: 2,
    name: 'فلفل سیاه',
    description: 'فلفل سیاه تازه‌ساییده با تندی متعادل و عطر گرم، مناسب همهٔ طعم‌ها.',
    weight: '۱۰۰ گرم',
    image: '/images/p-pepper.jpg',
  },
  {
    id: 3,
    name: 'دارچین',
    description: 'دارچین درجه‌یک با طعم شیرین و گرم، همراه خوب کیک، دسر و خورش‌های ایرانی.',
    weight: '۱۵۰ گرم',
    image: '/images/p-cinnamon.jpg',
  },
  {
    id: 4,
    name: 'ادویه مرغ',
    description: 'ترکیبی متعادل برای خوش‌عطر شدن خورش و مرغ، با رایحهٔ گرم و ملایم.',
    weight: '۲۰۰ گرم',
    image: '/images/p-chicken.jpg',
  },
  {
    id: 5,
    name: 'ادویه جوجه',
    description: 'مخصوص جوجه‌کباب و مرغ گریل؛ رنگ و عطری که هر جوجه را حرفه‌ای می‌کند.',
    weight: '۲۰۰ گرم',
    image: '/images/p-joojeh.jpg',
  },
  {
    id: 6,
    name: 'ادویه قورمه‌سبزی',
    description: 'همان طعم آشنا و دلخواه قورمه‌سبزی خانگی، با ترکیبی دقیق و خوش‌عطر.',
    weight: '۱۵۰ گرم',
    image: '/images/p-ghormeh.jpg',
  },
]

export const SPECIALS = [
  {
    id: 1,
    name: 'زعفران سرگل قائنات',
    description: 'زعفران سرگل با رنگ‌دهی بالا و عطر بی‌نظیر؛ نگین آشپزی ایرانی.',
    weight: '۴٫۶ گرم',
    image: '/images/sp-1.jpg',
  },
  {
    id: 2,
    name: 'دمنوش بهار نارنج',
    description: 'دمنوشی آرام‌بخش با عطر بهار نارنج طبیعی، برای ساعات دلچسب روزانه.',
    weight: '۱۰۰ گرم',
    image: '/images/sp-2.jpg',
  },
  {
    id: 3,
    name: 'بستهٔ هدیه ادویه',
    description: 'انتخابی از خوش‌عطرترین ادویه‌های نوبرانه در بسته‌بندی مخصوص هدیه.',
    weight: '۶ عددی',
    image: '/images/sp-3.jpg',
  },
]

export const FEATURES = [
  { icon: '🌿', title: 'مواد اولیه باکیفیت', text: 'انتخاب دقیق محصولات تازه از منابع مطمئن و معتبر.' },
  { icon: '✨', title: 'آماده‌سازی با دقت', text: 'شست‌وشو، خشک‌کردن و آسیاب‌سازی تمیز و اصولی.' },
  { icon: '📦', title: 'بسته‌بندی تمیز', text: 'بسته‌بندی بهداشتی برای حفظ عطر و تازگی ادویه‌ها.' },
  { icon: '❤️', title: 'توجه به کیفیت', text: 'نظارت روی کیفیت در هر مرحله، از انتخاب تا ارسال.' },
]

export const RECIPES = [
  {
    id: 1,
    title: 'ادویه مناسب جوجه',
    preview: 'با ترکیبی ساده و متعادل، جوجه‌ای خوش‌رنگ و خوش‌عطر برای شب خانواده آماده کنید.',
    image: '/images/r-1.jpg',
  },
  {
    id: 2,
    title: 'راز خوش‌عطر شدن قورمه‌سبزی',
    preview: 'نکته‌های کوچکی که قورمه‌سبزی شما را به‌مانگیزه و خوش‌عطر می‌کند.',
    image: '/images/r-2.jpg',
  },
  {
    id: 3,
    title: 'ادویه مناسب سیب‌زمینی',
    preview: 'برای سیب‌زمینی سرخ‌شده یا تنوری، این ترکیب‌ها طعمی متفاوت می‌سازند.',
    image: '/images/r-3.jpg',
  },
]

export const INSTA_IMAGES = [
  '/images/cat-spices.jpg',
  '/images/cat-herbs.jpg',
  '/images/sp-1.jpg',
  '/images/cat-tea.jpg',
  '/images/sp-3.jpg',
  '/images/cat-blends.jpg',
]

export const FOOTER_COLUMNS = [
  {
    title: 'دسترسی سریع',
    links: [
      { label: 'خانه', href: '#' },
      { label: 'فروشگاه', href: '#products' },
      { label: 'درباره ما', href: '#story' },
      { label: 'تماس با ما', href: '#footer' },
    ],
  },
  {
    title: 'دسته‌بندی‌ها',
    links: [
      { label: 'ادویه‌ها', href: '#categories' },
      { label: 'ادویه‌های ترکیبی', href: '#categories' },
      { label: 'سبزیجات خشک', href: '#categories' },
      { label: 'دمنوش‌ها', href: '#categories' },
    ],
  },
  {
    title: 'خدمات مشتریان',
    links: [
      { label: 'سوالات متداول', href: '#' },
      { label: 'قوانین و مقررات', href: '#' },
      { label: 'حریم خصوصی', href: '#' },
      { label: 'شرایط ارسال', href: '#' },
    ],
  },
]
