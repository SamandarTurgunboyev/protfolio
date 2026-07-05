import {
  Code,
  Briefcase,
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  Send,
  Smartphone,
  Globe,
  Bot,
} from "lucide-react";
import { projects, skills, experiences } from "@/shared/lib/data";
import { ProjectCard } from "./project-card";
import { PRODUCT_INFO } from "@/shared/constants/data";
import { useState } from "react";

type CategoryFilter = "all" | "web" | "mobile" | "bot";

const filters: {
  value: CategoryFilter;
  label: string;
  icon: React.ReactNode;
}[] = [
  { value: "all", label: "Barchasi", icon: <Code size={16} /> },
  { value: "web", label: "Web", icon: <Globe size={16} /> },
  { value: "mobile", label: "Mobile", icon: <Smartphone size={16} /> },
  { value: "bot", label: "Bot", icon: <Bot size={16} /> },
];

export default function Welcome() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const webCount = projects.filter((p) => p.category === "web").length;
  const mobileCount = projects.filter((p) => p.category === "mobile").length;

  return (
    <div className="min-h-screen bg-background-2 text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-text-1 rounded-full blur-[128px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-[128px]" />
        </div>

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-text-1/30 bg-text-1/10 px-4 py-2 text-sm text-text-1">
            <Code size={16} />
            <span>Frontend & Mobile Dasturchi</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">
            Salom, men <span className="text-text-1">Samandar</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Frontend sohasida 1.5 yillik amaliy tajribaga ega dasturchi. React,
            Next.js, TypeScript va React Native asosida zamonaviy veb va mobil
            ilovalarni yarataman.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin size={16} className="text-text-1" />
              <span>Toshkent, Olmazor tumani</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Briefcase size={16} className="text-text-1" />
              <span>Felix-Its</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Smartphone size={16} className="text-text-1" />
              <span>2 ta ilova Play Marketda</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${PRODUCT_INFO.contact.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-text-1 px-6 py-3 text-sm font-semibold text-background-2 transition-all hover:opacity-90 hover:scale-105"
            >
              <Mail size={18} />
              Bog'lanish
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-text-1/30 px-6 py-3 text-sm font-semibold text-text-1 transition-all hover:bg-text-1/10 hover:scale-105"
            >
              Loyihalarim
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-1/50">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Men <span className="text-text-1">haqimda</span>
          </h2>
          <div className="w-16 h-1 bg-text-1 mx-auto mb-10 rounded-full" />

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Frontend sohasida 1.5 yillik amaliy tajribaga ega dasturchi.
                React, Next.js va TypeScript asosida foydalanuvchi
                interfeyslarini yaratish, mavjud loyihalarni qo'llab-quvvatlash
                va optimallashtirish bo'yicha tajribaga egaman.
              </p>
              <p>
                Zamonaviy state-management vositalari (Redux, Zustand, React
                Query) va UI kutubxonalari (Shadcn, Tailwind, Sass) bilan
                ishlashda yaxshi ko'nikmalarga egaman.
              </p>
              <p>
                React Native va Expo yordamida mobil ilovalar yaratish tajribam
                bor. 2 ta real loyihani ishlab chiqib, Play Marketga
                muvaffaqiyatli chiqarganman.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-text-1/20 bg-background-2 p-6 text-center">
                <p className="text-3xl font-bold text-text-1">1.5+</p>
                <p className="text-sm text-gray-400 mt-1">Yillik tajriba</p>
              </div>
              <div className="rounded-xl border border-text-1/20 bg-background-2 p-6 text-center">
                <p className="text-3xl font-bold text-text-1">
                  {projects.length}
                </p>
                <p className="text-sm text-gray-400 mt-1">Loyihalar</p>
              </div>
              <div className="rounded-xl border border-text-1/20 bg-background-2 p-6 text-center">
                <p className="text-3xl font-bold text-text-1">{webCount}</p>
                <p className="text-sm text-gray-400 mt-1">Web loyihalar</p>
              </div>
              <div className="rounded-xl border border-text-1/20 bg-background-2 p-6 text-center">
                <p className="text-3xl font-bold text-text-1">{mobileCount}</p>
                <p className="text-sm text-gray-400 mt-1">Mobil ilovalar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Texnik <span className="text-text-1">ko'nikmalar</span>
          </h2>
          <div className="w-16 h-1 bg-text-1 mx-auto mb-10 rounded-full" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="rounded-xl border border-text-1/20 bg-background-1/50 p-6 hover:border-text-1/40 transition-colors"
              >
                <h3 className="text-lg font-semibold text-text-1 mb-4">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-background-2 px-3 py-1.5 text-xs text-gray-300 border border-white/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-1/50">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Ish <span className="text-text-1">tajribasi</span>
          </h2>
          <div className="w-16 h-1 bg-text-1 mx-auto mb-10 rounded-full" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative rounded-xl border border-text-1/20 bg-background-2 p-8 hover:border-text-1/40 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-text-1 font-medium">{exp.company}</p>
                  </div>
                  <span className="mt-2 sm:mt-0 inline-flex items-center gap-1.5 rounded-full border border-text-1/30 bg-text-1/10 px-3 py-1 text-sm text-text-1">
                    <Briefcase size={14} />
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key achievements */}
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 bg-background-1/50 rounded-full px-3 py-1.5">
                    <Globe size={12} className="text-blue-400" />
                    {webCount} veb loyiha
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 bg-background-1/50 rounded-full px-3 py-1.5">
                    <Smartphone size={12} className="text-green-400" />
                    {mobileCount} mobil ilova
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 bg-background-1/50 rounded-full px-3 py-1.5">
                    <Smartphone size={12} className="text-green-400" />
                    Play Marketda 2 ta ilova
                  </span>
                </div>
              </div>
            ))}

            {/* Education */}
            <div className="relative rounded-xl border border-text-1/20 bg-background-2 p-8 hover:border-text-1/40 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Frontend dasturlash yo'nalishi
                  </h3>
                  <p className="text-text-1 font-medium">
                    IT Markazi — O'rta maxsus ta'lim
                  </p>
                </div>
                <span className="mt-2 sm:mt-0 inline-flex items-center gap-1.5 rounded-full border border-text-1/30 bg-text-1/10 px-3 py-1 text-sm text-text-1">
                  <GraduationCap size={14} />
                  Ta'lim
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Frontend dasturlash yo'nalishi bo'yicha o'rta maxsus ta'lim
                olganman.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Mening <span className="text-text-1">loyihalarim</span>
          </h2>
          <div className="w-16 h-1 bg-text-1 mx-auto mb-6 rounded-full" />

          <p className="text-center text-gray-400 mb-8">
            {projects.length} ta loyiha — {webCount} ta veb, {mobileCount} ta
            mobil ilova, 1 ta bot
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeFilter === filter.value
                    ? "bg-text-1 text-background-2"
                    : "border border-text-1/20 text-gray-400 hover:text-text-1 hover:border-text-1/40"
                }`}
              >
                {filter.icon}
                {filter.label}
                <span
                  className={`text-xs ${activeFilter === filter.value ? "text-background-2/70" : "text-gray-500"}`}
                >
                  (
                  {filter.value === "all"
                    ? projects.length
                    : projects.filter((p) => p.category === filter.value)
                        .length}
                  )
                </span>
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-1/50">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-2">
            Bog'lanish <span className="text-text-1">uchun</span>
          </h2>
          <div className="w-16 h-1 bg-text-1 mx-auto mb-10 rounded-full" />

          <p className="text-gray-400 mb-10 text-lg">
            Loyihangiz bo'yicha gaplashmoqchimisiz? Men bilan bog'laning!
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <a
              href={`tel:${PRODUCT_INFO.contact.phone}`}
              className="flex flex-col items-center gap-3 rounded-xl border border-text-1/20 bg-background-2 p-6 hover:border-text-1/40 transition-all hover:scale-105"
            >
              <div className="rounded-full bg-text-1/10 p-3">
                <Phone size={24} className="text-text-1" />
              </div>
              <span className="text-sm text-gray-300">
                {PRODUCT_INFO.contact.phone}
              </span>
            </a>

            <a
              href={`mailto:${PRODUCT_INFO.contact.email}`}
              className="flex flex-col items-center gap-3 rounded-xl border border-text-1/20 bg-background-2 p-6 hover:border-text-1/40 transition-all hover:scale-105"
            >
              <div className="rounded-full bg-text-1/10 p-3">
                <Mail size={24} className="text-text-1" />
              </div>
              <span className="text-sm text-gray-300 break-all">
                {PRODUCT_INFO.contact.email}
              </span>
            </a>

            <a
              href={PRODUCT_INFO.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 rounded-xl border border-text-1/20 bg-background-2 p-6 hover:border-text-1/40 transition-all hover:scale-105"
            >
              <div className="rounded-full bg-text-1/10 p-3">
                <Send size={24} className="text-text-1" />
              </div>
              <span className="text-sm text-gray-300">Telegram</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
