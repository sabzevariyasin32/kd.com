/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ContactConfig {
  name: string;
  brandName: string;
  fullName: string;
  role: string;
  roleEn: string;
  slogan: string;
  sloganEn: string;
  heroHeadline: string;
  heroHeadlineEn: string;
  heroSubtitle: string;
  heroSubtitleEn: string;
  email: string;
  telegramUsername: string; // e.g. "KingDeveloper"
  telegramUrl: string;
  phone: string;
  githubUrl: string;
  bazaarUrl?: string; // Cafe Bazaar profile
  location: string;
}

export const INITIAL_CONFIG: ContactConfig = {
  name: "King Developer",
  brandName: "KD",
  fullName: "KD | King Developer",
  role: "توسعه‌دهنده وب و نرم‌افزار",
  roleEn: "Full-Stack Web & Software Developer",
  slogan: "تبدیل ایده‌ها به واقعیت دیجیتال",
  sloganEn: "Turning Ideas Into Digital Reality",
  heroHeadline: "خلق تجربه‌های دیجیتال پایدار و کاربردی",
  heroHeadlineEn: "Building Digital Experiences That Matter",
  heroSubtitle: "توسعه‌دهنده متمرکز بر ساخت وب‌سایت‌های مدرن، سیستم‌های وردپرس اختصاصی، اسکریپت‌های پایتون و ابزارهای نرم‌افزاری کاربردی.",
  heroSubtitleEn: "Developer focused on building websites, applications, and practical software solutions.",
  email: "contact@kingdeveloper.dev", // مقدار پیش‌فرض قابل ویرایش
  telegramUsername: "KingDev_Official", // شناسه تلگرام قابل تنظیم
  telegramUrl: "https://t.me/KingDev_Official",
  phone: "+98 900 000 0000",
  githubUrl: "https://github.com/kingdeveloper",
  bazaarUrl: "https://cafebazaar.ir/developer/kingdeveloper",
  location: "ایران",
};

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  titleEn: string;
  description: string;
  features: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "web-dev",
    number: "01",
    title: "طراحی و توسعه وب‌سایت مدرن",
    titleEn: "Modern Web Development",
    description: "توسعه وب‌سایت‌های واکنش‌گرا و سریع با استفاده از HTML5، CSS3، جاوااسکریپت، تایپ‌اسکریپت و فریم‌ورک‌های مدرن.",
    features: [
      "طراحی اختصاصی متناسب با هویت برند",
      "سرعت بارگذاری بهینه و کدنویسی تمیز",
      "سازگاری کامل با موبایل، تبلت و دسکتاپ",
      "رعایت استانداردهای سئو و دسترسی‌پذیری"
    ]
  },
  {
    id: "wordpress",
    number: "02",
    title: "طراحی سایت حرفه‌ای با WordPress و المنتور",
    titleEn: "WordPress & Elementor Development",
    description: "پیاده‌سازی وب‌سایت‌های شرکتی، فروشگاهی و شخصی با وردپرس، بدون کدهای اضافه و با امنیت و سرعت بالا.",
    features: [
      "طراحی قالب‌های المنتوری تمیز و بدون باگ",
      "پیکربندی فروشگاه آنلاین با ووکامرس",
      "شخصی‌سازی پیشرفته افزونه‌ها و استایل‌ها",
      "آموزش مدیریت پنل برای کارفرما"
    ]
  },
  {
    id: "landing-pages",
    number: "03",
    title: "طراحی صفحات فرود تبدیل‌گرا (Landing Page)",
    titleEn: "High-Converting Landing Pages",
    description: "ساخت لندینگ‌پیج‌های جذاب و هدفمند برای کمپین‌های تبلیغاتی، معرفی محصولات و افزایش نرخ ثبت‌نام مشتریان.",
    features: [
      "روان‌شناسی بصری و تمرکز بر دکمه‌های اقدام (CTA)",
      "لود سریع برای عدم اتلاف ترافیک تبلیغاتی",
      "فرم‌های دریافت سرنخ (Lead Capture)",
      "اتصال به ابزارهای تحلیل رفتار کاربر"
    ]
  },
  {
    id: "site-optimization",
    number: "04",
    title: "بهینه‌سازی، افزایش سرعت و امنیت وب‌سایت",
    titleEn: "Website Security & Performance Optimization",
    description: "بررسی جامع آسیب‌پذیری‌ها، امن‌سازی وردپرس، رفع خطاهای تکنیکال و افزایش امتیاز Core Web Vitals.",
    features: [
      "امنیّت لایه‌ای وردپرس و جلوگیری از حملات Brute Force",
      "بهینه‌سازی تصاویر، اسکریپت‌ها و کش وب‌سایت",
      "رفع تداخل افزونه‌ها و ارورهای دیتابیس",
      "بهبود رتبه سرعت در ابزارهای تست فنی"
    ]
  },
  {
    id: "python-tools",
    number: "05",
    title: "توسعه اسکریپت و ابزارهای خودکارسازی با Python",
    titleEn: "Python Automation & Tooling",
    description: "نوشتن اسکریپت‌های کاربردی برای خودکارسازی کارهای تکراری، استخراج داده (Web Scraping)، بات‌ها و تحلیل فایل‌ها.",
    features: [
      "ربات‌های کاربردی تلگرام و سرویس‌های اعلان",
      "اسکرپینگ ساختارمند داده‌ها از صفحات وب",
      "پردازش خودکار فایل‌های اکسل، PDF و تصاویر",
      "کدهای ماژولار با امکان زمان‌بندی خودکار"
    ]
  },
  {
    id: "mvp-apps",
    number: "06",
    title: "توسعه نمونه اولیه و اپلیکیشن‌های نرم‌افزاری",
    titleEn: "MVP & Application Development",
    description: "ساخت نمونه‌های اولیه نرم‌افزاری، ابزارهای دسکتاپ/وب و آماده‌سازی برای بازارهای نرم‌افزار.",
    features: [
      "پیاده‌سازی سریع نسخه قابل ارائه (MVP)",
      "معماری آماده برای اتصال دیتابیس و مقیاس‌پذیری",
      "رابط کاربری ساده، کاربردی و مستقیم",
      "خروجی استاندارد و قابل توزیع"
    ]
  },
  {
    id: "tech-consulting",
    number: "07",
    title: "مشاوره فنی و اجرای پروژه‌های برنامه‌نویسی",
    titleEn: "Technical Consulting & Architecture",
    description: "راهنمایی فنی پیش از شروع پروژه، انتخاب استک فناوری مناسب و نظارت بر کیفیت پیاده‌سازی.",
    features: [
      "بررسی امکان‌سنجی ایده‌های نرم‌افزاری",
      "محاسبه زمان‌بندی و الزامات واقعی پروژه",
      "مشاوره هاستینگ، سرور و گیت‌هاب",
      "پرهیز از هزینه‌های غیرضروری نرم‌افزاری"
    ]
  }
];

export interface SkillItem {
  id: string;
  title: string;
  titleEn: string;
  scope: string;
  description: string;
  technologies: string[];
}

export const SKILLS_DATA: SkillItem[] = [
  {
    id: "web-dev",
    title: "توسعه وب و فرانت‌اند",
    titleEn: "Web Development",
    scope: "طراحی رابط‌های کاربری مدرن، واکنش‌گرا و سریع",
    description: "مسلط به ساختار معنایی HTML5، استایل‌دهی مدرن CSS3 و فلکس‌باکس/گرید، جاوااسکریپت مدرن و تایپ‌اسکریپت برای وب‌اپلیکیشن‌ها.",
    technologies: ["HTML5", "CSS3", "JavaScript ES6+", "TypeScript", "Tailwind CSS", "React"]
  },
  {
    id: "wordpress",
    title: "توسعه و شخصی‌سازی وردپرس",
    titleEn: "WordPress Development",
    scope: "راه‌اندازی، مدیریت قالب و افزونه‌ها",
    description: "تسلط بر سیستم مدیریت محتوای وردپرس، کار با افزونه محبوب Elementor، راه‌اندازی فروشگاه‌های ووکامرس و رفع عیوب قالب‌ها.",
    technologies: ["WordPress", "Elementor", "WooCommerce", "Theme Customization", "Child Themes"]
  },
  {
    id: "python",
    title: "برنامه‌نویسی پایتون",
    titleEn: "Python Programming",
    scope: "اسکریپت‌نویسی، اتوماسیون و ابزارهای کمکی",
    description: "توانایی نوشتن کدهای تمیز پایتون برای خودکارسازی فرآیندها، بات‌نویسی، استخراج اطلاعات از وب، و کار با ساختارهای داده.",
    technologies: ["Python 3", "Automation Scripts", "Web Scraping", "Telegram Bot API", "Data Processing"]
  },
  {
    id: "security-optimization",
    title: "امنیت سایت و بهینه‌سازی",
    titleEn: "Security & Optimization",
    scope: "ایمن‌سازی وردپرس و افزایش کارایی",
    description: "پیاده‌سازی اقدامات امنیتی ضروری روی سیستم‌های مدیریت محتوا، کنترل دسترسی‌ها، مدیریت لاگین‌ها و بهینه‌سازی سرعت بارگذاری صفحات.",
    technologies: ["WordPress Hardening", "Speed Optimization", "Asset Minification", "Core Web Vitals"]
  },
  {
    id: "software-dev",
    title: "توسعه نرم‌افزار و ابزارها",
    titleEn: "Software Development",
    scope: "حل مسئله و ساخت ابزارهای مستقل",
    description: "شناخت اصول معماری نرم‌افزار، طراحی ساختارهای ماژولار، کدنویسی با قابلیت نگهداری، و بهره‌گیری از ابزارهای کنترل نسخه گیت.",
    technologies: ["Git & GitHub", "REST APIs", "Modular Architecture", "Clean Code"]
  },
  {
    id: "seo-technical",
    title: "سئو تکنیکال و استانداردسازی",
    titleEn: "SEO & Web Standards",
    scope: "سازگاری ساختار وب‌سایت با موتورهای جستجو",
    description: "رعایت هرم هدینگ‌ها (H1-H6)، نشانه‌گذاری‌های معنایی، متاتگ‌های شبکه‌های اجتماعی، داده‌های ساختاریافته و رعایت اصول دسترسی‌پذیری وب.",
    technologies: ["Semantic Markup", "Open Graph", "Schema Meta", "Accessibility (a11y)"]
  }
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const COLLABORATION_STEPS: ProcessStep[] = [
  {
    step: "۰۱",
    title: "ثبت درخواست مشتری",
    description: "شما ایده، اهداف و نیازمندی‌های اولیه پروژه را از طریق فرم سفارش یا پیام مستقیم در تلگرام/ایمیل ارسال می‌کنید."
  },
  {
    step: "۰۲",
    title: "بررسی نیازها و گفتگوی فنی",
    description: "جزئیات فنی پروژه، نوع فناوری‌های مورد نیاز، پیچیدگی کار و امکان‌سنجی اولیه دقیقاً بررسی و با شما مطرح می‌شود."
  },
  {
    step: "۰۳",
    title: "توافق بر سر هزینه و زمان",
    description: "یک برآورد شفاف از مدت زمان اجرا و هزینه واقعی بر اساس حجم کار تعیین می‌شود تا هیچ ابهام مالی وجود نداشته باشد."
  },
  {
    step: "۰۴",
    title: "اجرای پروژه و تحویل",
    description: "مراحل کدنویسی و تست به صورت گام‌به‌گام انجام شده و پس از بررسی نهایی توسط شما، پروژه به طور کامل تحویل می‌گردد."
  }
];
