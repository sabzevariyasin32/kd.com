/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import imgWeb from '../assets/images/project_web_platform_1792949024122.jpg';
import imgMobile from '../assets/images/project_mobile_app_1792949024194.jpg';
import imgHero from '../assets/images/hero_kd_monogram_1792949022401.jpg';

export type ProjectCategory = 
  | 'websites' 
  | 'android' 
  | 'python' 
  | 'tools' 
  | 'experimental';

export interface ProjectItem {
  id: string;
  title: string;
  titleEn: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  fullOverview: string;
  technologies: string[];
  releaseDate?: string;
  status: 'published' | 'in_development' | 'experimental';
  statusLabel: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  appDownloadUrl?: string; // For Cafe Bazaar or direct APK
  featured?: boolean;
}

export const CATEGORY_FILTERS: { key: ProjectCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'همه پروژه‌ها' },
  { key: 'websites', label: 'وب‌سایت‌ها' },
  { key: 'android', label: 'اپلیکیشن‌های اندروید' },
  { key: 'python', label: 'پروژه‌های Python' },
  { key: 'tools', label: 'ابزارهای نرم‌افزاری' },
  { key: 'experimental', label: 'پروژه‌های آزمایشی' },
];

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: "kd-portfolio-engine",
    title: "سامانه پرتفولیو و معرفی برند King Developer",
    titleEn: "KD Brand & Portfolio Engine",
    category: "websites",
    categoryLabel: "وب‌سایت‌ها",
    description: "وب‌سایت رسمی شخصی با معماری ماژولار استاتیک سازگار با GitHub Pages، تم اختصاصی تیره و سامانه مدیریت محلی.",
    fullOverview: "این پروژه به عنوان پایگاه رسمی و هویت دیجیتال KD پیاده‌سازی شده است. تمرکز اصلی بر معماری مستقل از سرور، رعایت هرم تایپوگرافی، سئو بهینه و فرم‌های ثبت سفارش امن و شفاف بدون واسطه بوده است.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Responsive Design"],
    releaseDate: "۱۴۰۳ / ۲۰۲۶",
    status: "published",
    statusLabel: "منتشر شده",
    image: imgWeb,
    demoUrl: "#",
    githubUrl: "https://github.com/kingdeveloper/kd-portfolio",
    featured: true
  },
  {
    id: "kd-pulse-mobile",
    title: "اپلیکیشن دستیار مدیریت کارها و ابزارک‌های روزانه",
    titleEn: "KD Task Assistant Mobile App",
    category: "android",
    categoryLabel: "اپلیکیشن‌های اندروید",
    description: "اپلیکیشن سبک و کاربردی برای ساماندهی یادداشت‌ها، پروژه‌های روزانه و مانیتورینگ عملکرد با رابط کاربری تیره و بهینه.",
    fullOverview: "طراحی شده با رویکرد سرعت و کارایی آفلاین بدون تبلیغات مزاحم. این اپلیکیشن با استانداردهای گوگل‌پلی و کافه‌بازار آماده‌سازی شده و از پایگاه داده محلی با کمترین مصرف باتری استفاده می‌کند.",
    technologies: ["Android", "Kotlin / Java", "Room DB", "Material Design 3"],
    releaseDate: "۱۴۰۳ / ۲۰۲۶",
    status: "in_development",
    statusLabel: "در حال توسعه",
    image: imgMobile,
    appDownloadUrl: "https://cafebazaar.ir/developer/kingdeveloper",
    githubUrl: "https://github.com/kingdeveloper/pulse-tasks-android",
    featured: true
  },
  {
    id: "python-smart-scraper",
    title: "ابزار هوشمند استخراج و پایش داده‌های وب",
    titleEn: "Python Automated Web Monitor & Scraper",
    category: "python",
    categoryLabel: "پروژه‌های Python",
    description: "اسکریپت پیشرفته پایتون برای پایش خودکار تغییرات قیمت، استخراج دوره‌ای داده‌ها و ارسال گزارش ساختارمند در اکسل و تلگرام.",
    fullOverview: "یک ابزار ماژولار و قابل تنظیم که به کاربران امکان می‌دهد صفحات وب مورد نظر را بدون نیاز به باز کردن مکرر مرورگر پایش کنند و در صورت بروز تغییر یا موجود شدن کالا، از طریق بات تلگرام اعلان دریافت کنند.",
    technologies: ["Python 3", "BeautifulSoup4", "Requests", "Pandas", "Telegram Bot API"],
    releaseDate: "۱۴۰۳ / ۲۰۲۶",
    status: "published",
    statusLabel: "منتشر شده",
    image: imgWeb,
    githubUrl: "https://github.com/kingdeveloper/python-web-monitor",
    featured: true
  },
  {
    id: "wordpress-ecommerce-custom",
    title: "قالب فروشگاهی بهینه‌شده وردپرس و المنتور",
    titleEn: "Optimized WooCommerce Custom Theme",
    category: "websites",
    categoryLabel: "وب‌سایت‌ها",
    description: "پیاده‌سازی یک فروشگاه آنلاین مبتنی بر ووکامرس با بارگذاری زیر ۱.۸ ثانیه، امن‌سازی ضد اسپم و هماهنگی درگاه‌های بانکی.",
    fullOverview: "در این پروژه تمامی اسکریپت‌های سنگین المنتور پاکسازی و بهینه‌سازی شده و فرآیند خرید کاربر به ۲ مرحله سریع کاهش یافته است. همچنین فایروال محلی و تنظیمات امنیتی روی فایل‌های اصلی وردپرس اعمال گردید.",
    technologies: ["WordPress", "Elementor Pro", "WooCommerce", "MySQL", "PHP Snippets"],
    releaseDate: "۱۴۰۳ / ۲۰۲۵",
    status: "published",
    statusLabel: "منتشر شده",
    image: imgWeb,
    demoUrl: "#",
    featured: false
  },
  {
    id: "python-file-organizer",
    title: "ابزار خودکارسازی سازماندهی فایل‌ها و مستندات",
    titleEn: "Python Intelligent Desktop Organizer",
    category: "tools",
    categoryLabel: "ابزارهای نرم‌افزاری",
    description: "ابزار خط فرمان و رابط سبک پایتون برای مرتب‌سازی هوشمند پوشه دانلودها و هارد بر اساس پسوند، تاریخ و محتوا.",
    fullOverview: "حل مسئله شلوغی پوشه‌های کاری توسعه‌دهندگان و کاربران. اسکریپت به صورت خودکار فایل‌های دانلود شده را در پوشه‌های مرتبط دسته‌بندی کرده، فایل‌های تکراری را شناسایی و گزارش پاکسازی ارائه می‌دهد.",
    technologies: ["Python", "Pathlib", "OS", "Hashlib", "CLI Utility"],
    releaseDate: "۱۴۰۳ / ۲۰۲۵",
    status: "published",
    statusLabel: "منتشر شده",
    image: imgWeb,
    githubUrl: "https://github.com/kingdeveloper/py-folder-cleaner",
    featured: false
  },
  {
    id: "experimental-canvas-lab",
    title: "لابراتوار انیمیشن‌های ریاضی و بصری‌سازی الگوریتم",
    titleEn: "Algorithm & Canvas Visualization Lab",
    category: "experimental",
    categoryLabel: "پروژه‌های آزمایشی",
    description: "مجموعه‌ای از تست‌های تعاملی برای شبیه‌سازی الگوریتم‌های مرتب‌سازی و گرافیک‌های هندسی روی Canvas مرورگر.",
    fullOverview: "یک محیط آزمایشی برای بررسی عملکرد محاسباتی جاوااسکریپت و رندر گرافیکی فرم‌های ریاضی بدون استفاده از کتابخانه‌های حجیم جانبی.",
    technologies: ["JavaScript ES6", "HTML5 Canvas", "Math Algorithms", "Performance Tuning"],
    releaseDate: "۱۴۰۳ / ۲۰۲۶",
    status: "experimental",
    statusLabel: "آزمایشی",
    image: imgHero,
    demoUrl: "#",
    githubUrl: "https://github.com/kingdeveloper/algo-canvas-lab",
    featured: false
  }
];

const STORAGE_KEY = 'kd_custom_projects_v1';

export function getStoredProjects(): ProjectItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_PROJECTS;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch {
    // fallback to initial
  }
  return INITIAL_PROJECTS;
}

export function saveStoredProjects(projects: ProjectItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  } catch (err) {
    console.error("Failed to save projects to LocalStorage", err);
  }
}

export function resetStoredProjects(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error("Failed to reset projects", err);
  }
}
