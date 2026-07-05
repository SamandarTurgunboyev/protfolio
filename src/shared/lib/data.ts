export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  gitlab?: string;
  github?: string;
  live?: string;
  featured: boolean;
  category: "web" | "mobile" | "bot";
}

export interface Skill {
  category: string;
  items: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  author: string;
  image?: string;
}

export const projects: Project[] = [
  // ===== WEB LOYIHALAR =====
  {
    id: "1",
    title: "Simple Travel",
    description:
      "Sayohat agentligi uchun zamonaviy veb-sayt. Turlar, yo'nalishlar, bron qilish va to'lov tizimi. Foydalanuvchilarga qulay interfeys va responsive dizayn.",
    image:
      "https://api.simpletravel.uz/resources/media/site_settings/2026-03-26_10.54.31.jpg",
    tags: ["React", "TypeScript", "Tailwind CSS", "React Query"],
    gitlab: "https://gitlab.com/SamandarTurgunboyev/simple-travel",
    featured: true,
    category: "web",
  },
  {
    id: "2",
    title: "Simple Travel Admin",
    description:
      "Simple Travel loyihasi uchun admin panel. Turlar, buyurtmalar, foydalanuvchilar va statistikani boshqarish. CRUD operatsiyalari va filtrlar.",
    image:
      "https://api.simpletravel.uz/resources/media/site_settings/2026-03-26_10.54.31.jpg",
    tags: ["React", "TypeScript", "Redux", "Shadcn UI"],
    gitlab: "https://gitlab.com/SamandarTurgunboyev/simple-travel-admin",
    featured: true,
    category: "web",
  },
  {
    id: "3",
    title: "Gastro-market",
    description:
      "Gastro-Market retoranlar uchun oziq-ovqat mahsulotlarini yetkazib beradigan firmaning veb-platforma.",
    image:
      "https://api.gastro.felixits.uz//media/shared/banners/gastromarket_banner_1920x840.png",
    tags: ["React", "TypeScript", "Zustand", "Tailwind CSS"],
    gitlab: "https://gitlab.com/SamandarTurgunboyev/robosell",
    featured: true,
    category: "web",
  },
  {
    id: "4",
    title: "Panda TV",
    description:
      "Kino va seriallarni onlayn tomosha qilish uchun veb-platforma. Kategoriyalar, reytinglar, izohlar va foydalanuvchi profili.",
    image:
      "https://play-lh.googleusercontent.com/fG9zrswiLXSQylK8i5crqH2mb-jIfqRJQ6xcy0FOWT7VbBN4--vWIjQ9csZqsMvvgeIv22dsdp8G1KZXTbXZ=w600-h300-pc0xffffff-pd",
    tags: ["React", "Next.js", "TypeScript", "Sass"],
    gitlab: "https://gitlab.com/azizziy/panda-tv",
    featured: false,
    category: "web",
  },
  {
    id: "5",
    title: "Meridyn Pharma",
    description:
      "Farmatsevtika kompaniyasi uchun korporativ veb-sayt. Dori vositalari katalogi, kompaniya haqida ma'lumotlar.",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&h=300&fit=crop",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React Query"],
    gitlab: "https://gitlab.com/SamandarTurgunboyev/meridyn-pharma",
    featured: true,
    category: "web",
  },
  {
    id: "6",
    title: "Menyu",
    description:
      "Restoran va kafelar uchun onlayn menyu tizimi. Kategoriyalar, taomlar, narxlar va buyurtma berish funksiyasi.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop",
    tags: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
    gitlab: "https://gitlab.com/SamandarTurgunboyev/menyu",
    featured: false,
    category: "web",
  },
  {
    id: "7",
    title: "CPOST",
    description:
      "Xitoydan O'zbekistonga kargo xizmatlarini taqdim etuvchi kompaniya uchun veb-sayt. Buyurtmalarni kuzatish, narxlar va xizmatlar haqida ma'lumot.",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500&h=300&fit=crop",
    tags: ["React", "TypeScript", "Redux", "Sass"],
    gitlab: "https://gitlab.com/azizziy/cpost",
    featured: false,
    category: "web",
  },
  {
    id: "8",
    title: "Brand Space",
    description:
      "Online kiyim va aksessuarlar do'koni uchun veb-sayt. Mahsulotlar, to'lov tizimi, foydalanuvchi profili va buyurtma berish.",
    image:
      "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=500&h=300&fit=crop",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    gitlab: "https://gitlab.com/azizziy/brand-space",
    featured: false,
    category: "web",
  },

  // ===== MOBILE LOYIHALAR =====
  {
    id: "9",
    title: "CPCARGO Mobile",
    description:
      "CPOST kompaniyasi uchun mobil ilova. Foydalanuvchilar buyurtmalarni kuzatish, narxlarni tekshirish va bildirishnomalarni olishlari mumkin. Play Marketga chiqarilgan.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=300&fit=crop",
    tags: ["React Native", "Expo", "TypeScript", "Redux"],
    gitlab: "https://gitlab.com/SamandarTurgunboyev/cpcargo-mobile",
    featured: true,
    category: "mobile",
  },
  {
    id: "10",
    title: "Info Taget Mobile",
    description:
      "B2B kompaniyalar uchun mobil ilova. Mahsulotlar, xizmatlar va kompaniya haqida ma'lumotlarni ko'rish. Play Marketga chiqarilgan.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
    tags: ["React Native", "Expo", "TypeScript", "Zustand"],
    github: "https://github.com/SamandarTurgunboyev/info-taget-mobile",
    featured: true,
    category: "mobile",
  },

  // ===== BOT =====
  {
    id: "11",
    title: "Meridyn Pharma Bot",
    description:
      "Meridyn Pharma farmatsevtika kompaniyasi ishchilar uchun Telegram bot. Ishchilar qayreda qanday vazidalar bajarishlari, dorilarni qaysi aptekalarga sotgani va boshqa ma'lumotlarni ko'rishlari mumkin.",
    image:
      "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=500&h=300&fit=crop",
    tags: ["React", "TypeScript", "Telegram Bot API"],
    gitlab: "https://gitlab.com/SamandarTurgunboyev/meridyn-pharma-bot",
    featured: false,
    category: "bot",
  },
];

export const skills: Skill[] = [
  {
    category: "Tillar va Markup",
    items: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    category: "Framework va Kutubxonalar",
    items: ["React", "Next.js", "Redux", "Zustand", "React Query"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Stildash va UI",
    items: ["Tailwind CSS", "Sass", "Shadcn UI"],
  },
  {
    category: "Vositalar",
    items: ["Git", "GitLab", "Vite", "Webpack", "Axios", "REST API"],
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "React da Performance Optimizatsiya",
    slug: "react-performance-optimization",
    excerpt:
      "React ilovalarini tezroq va samaraliroq qilish usullarini o'rganamiz.",
    content: `# React da Performance Optimizatsiya

React kuchli kutubxona, lekin to'g'ri optimizatsiyasiz ilovalar sekin va javobsiz bo'lishi mumkin.

## Asosiy Texnikalar

### 1. Code Splitting
Bundleni kichik qismlarga ajratish.

### 2. Memoization
React.memo, useMemo va useCallback yordamida keraksiz qayta renderlarni oldini olish.

### 3. Virtual Scrolling
Uzun ro'yxatlar uchun faqat ko'rinadigan elementlarni render qilish.`,
    date: "2024-01-15",
    tags: ["React", "Performance"],
    author: "Samandar Turgunboyev",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop",
  },
  {
    id: "2",
    title: "TypeScript Generics ni Tushunish",
    slug: "typescript-generics",
    excerpt:
      "TypeScript generics yordamida moslashuvchan va qayta foydalanish mumkin bo'lgan kod yozish.",
    content: `# TypeScript Generics

TypeScript generics turli xil tiplar bilan ishlashda tip xavfsizligini saqlashga yordam beradi.

## Asosiy Sintaksis
\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}
\`\`\``,
    date: "2024-01-10",
    tags: ["TypeScript", "Programming"],
    author: "Samandar Turgunboyev",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
  },
  {
    id: "3",
    title: "Next.js bilan SSR va SSG",
    slug: "nextjs-ssr-ssg",
    excerpt:
      "Next.js da Server Side Rendering va Static Site Generation farqlari.",
    content: `# Next.js: SSR va SSG

Next.js zamonaviy veb-ilovalar yaratish uchun eng mashhur React frameworklaridan biri.

## Server Side Rendering
Har bir so'rovda serverda sahifani yaratish.

## Static Site Generation
Build vaqtida sahifalarni oldindan yaratish.`,
    date: "2024-01-05",
    tags: ["Next.js", "Web Development"],
    author: "Samandar Turgunboyev",
  },
];

export const experiences = [
  {
    title: "Frontend Dasturchi",
    company: "Felix-Its",
    period: "2023 - Hozirgi",
    description:
      "React va Next.js asosida foydalanuvchi interfeyslarini ishlab chiqish va qo'llab-quvvatlash. TypeScript yordamida xavfsiz va barqaror kod yozish. Redux, Zustand va React Query orqali ilova holatini samarali boshqarish. React Native va Expo da mobil ilovalar yaratish va Play Marketga chiqarish.",
  },
];
