import React, { useState } from 'react'

const categories = [
  "Mobile Apps",
  "Web Design",
  "Illustration",
  "Social Media",
  "Icon pack",
]

const projects = [
  {
    id: 1,
    title: "Dzikra",
    category: "Mobile Apps",
    type: "Product • 2022",
    description:
      "Dzikra, a muslim habit builder. We redesigned the entire app with a focus on habit-building through gamification, using the Design Sprint framework for rapid ideation and iteration.",
    image: "/assets/rectangle3.png",
    link: "https://www.behance.net/gallery/129478525/Restabili-Mental-Health-Support-App/",
  },
  {
    id: 2,
    title: "Dimulai",
    category: "Mobile Apps",
    type: "Product • 2023",
    description:
      "A habit-tracker and productivity solution helping users overcome procrastination with focused task management and streak-based accountability.",
    image: "/assets/rectangle4.png",
    link: "https://www.behance.net/",
  },
  {
    id: 3,
    title: "Quran Hifz",
    category: "Mobile Apps",
    type: "Product • 2024",
    description:
      "Quran memorization companion designed for effortless retention tracking, repetition scheduling, and distraction-free recitation.",
    image: "/assets/rectangle3.png",
    link: "https://www.behance.net/",
  },
  {
    id: 4,
    title: "FinTrack Web",
    category: "Web Design",
    type: "Web App • 2023",
    description:
      "Modern finance and expense management dashboard designed with deep data analytics, intuitive charts, and clean responsive workflows.",
    image: "/assets/rectangle4.png",
    link: "https://www.behance.net/",
  },
  {
    id: 5,
    title: "Editorial Vector Series",
    category: "Illustration",
    type: "Visuals • 2023",
    description:
      "A curated collection of modern editorial vector illustrations crafted for digital publications and contemporary product branding.",
    image: "/assets/rectangle3.png",
    link: "https://www.behance.net/",
  },
  {
    id: 6,
    title: "Campaign Visuals",
    category: "Social Media",
    type: "Social • 2024",
    description:
      "Engaging high-conversion social media kits and visual templates designed for high-growth tech startups and creative communities.",
    image: "/assets/rectangle4.png",
    link: "https://www.behance.net/",
  },
  {
    id: 7,
    title: "Minimalist Glyphs",
    category: "Icon pack",
    type: "Design System • 2024",
    description:
      "Precision-crafted 24px grid iconography set with balanced optical weights, optimized for UI components and mobile displays.",
    image: "/assets/rectangle3.png",
    link: "https://www.behance.net/",
  },
]

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Mobile Apps")

  const filteredProjects = projects.filter(
    (item) => item.category === activeCategory
  )

  // Subheading words to animate individually
  const subheadingWords = [
    "a", "UI/UX", "and", "Graphic", "Designer", "based", "in", "Indonesia."
  ]

  return (
    <div className="relative min-h-screen bg-white text-[#1e1e1e] font-figtree selection:bg-[#0d5eb9] selection:text-white overflow-x-hidden">
      {/* Background Dotted Patterns */}
      <div 
        className="pointer-events-none absolute left-0 top-[96px] w-full h-[650px] overflow-hidden opacity-90 z-0 animate-fade-in"
        aria-hidden="true"
      >
        <div className="flex w-full h-full max-w-[1512px] mx-auto relative">
          <img
            src="/assets/dot-pattern1.svg"
            alt=""
            className="absolute left-0 top-0 w-[1290px] max-w-none h-auto object-contain"
          />
          <img
            src="/assets/dot-pattern2.svg"
            alt=""
            className="absolute left-[1290px] top-0 w-[300px] max-w-none h-auto object-contain hidden xl:block"
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <header className="flex items-center justify-between px-6 sm:px-12 md:px-[60px] pt-8 pb-5 w-full max-w-[1512px] mx-auto animate-fade-in">
          {/* Logo & Brand text */}
          <div className="flex items-center gap-[13px]">
            <img
              src="/assets/logo.svg"
              alt="Logo"
              className="h-[44px] w-[83px] object-contain"
            />
            <div className="font-mono font-extrabold text-[#0d5eb9] text-[14px] leading-tight tracking-[1.54px] uppercase select-none">
              Port
              <br />
              folio
            </div>
          </div>

          {/* Social / Contact Links */}
          <nav className="flex items-center gap-6 sm:gap-[35px] font-mono text-[13px] sm:text-[14px] uppercase tracking-[1.54px]">
            <a
              href="https://wa.me/6285853533382"
              target="_blank"
              rel="noreferrer"
              className="text-black hover:text-[#0d5eb9] transition-colors"
            >
              Whatsapp
            </a>
            <a
              href="mailto:trizakahabib@gmail.com"
              className="text-black hover:text-[#0d5eb9] transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/habibtrizaka/"
              target="_blank"
              rel="noreferrer"
              className="text-black hover:text-[#0d5eb9] transition-colors"
            >
              Linkedin
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="px-6 sm:px-12 md:px-[60px] pt-12 md:pt-[68px] pb-10 md:pb-[48px] max-w-[1512px] w-full mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 md:gap-[72px]">
            
            {/* Heading with word-by-word swipe up */}
            <h1 className="text-[48px] sm:text-[60px] md:text-[64px] leading-[1.1] md:leading-[64px] tracking-[-3px] md:tracking-[-5px] font-normal">
              <span className="block overflow-hidden">
                <span className="inline-block animate-swipe-up [animation-delay:100ms]">
                  He<span className="italic font-light">ll</span>o,
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="inline-block animate-swipe-up [animation-delay:220ms]">
                  I’m
                </span>{" "}
                <span className="inline-block animate-swipe-up [animation-delay:340ms]">
                  H<span className="italic font-light">a</span>bib
                </span>
              </span>
            </h1>

            {/* Subheading with word-by-word swipe up */}
            <div className="text-[20px] sm:text-[24px] leading-[32px] text-[#1e1e1e] max-w-[348px] font-normal pb-1 flex flex-wrap gap-x-2 gap-y-1">
              {subheadingWords.map((word, idx) => (
                <span key={idx} className="overflow-hidden inline-block py-0.5">
                  <span
                    className="inline-block animate-swipe-up"
                    style={{ animationDelay: `${450 + idx * 60}ms` }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </div>

          </div>
        </section>

        {/* Category Filter Tabs */}
        <section className="px-6 sm:px-12 md:px-[60px] pb-8 md:pb-[46px] max-w-[1512px] w-full mx-auto">
          <div className="flex items-center gap-6 md:gap-[35px] overflow-x-auto no-scrollbar py-2">
            {categories.map((cat, idx) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="flex flex-col items-center justify-center group focus:outline-none shrink-0 overflow-hidden"
                >
                  <span
                    className={`inline-block font-mono text-[13px] md:text-[14px] uppercase tracking-[1.54px] pb-2 transition-colors animate-swipe-up ${
                      isActive
                        ? "text-[#0d5eb9] font-medium"
                        : "text-black hover:text-[#0d5eb9]"
                    }`}
                    style={{
                      animationDelay: `${100 + idx * 80}ms`,
                    }}
                  >
                    {cat}
                  </span>
                  <div
                    className={`h-[1.5px] w-full transition-all duration-300 ${
                      isActive
                        ? "bg-[#0d5eb9] opacity-100"
                        : "bg-[#0d5eb9] opacity-0 group-hover:opacity-40"
                    }`}
                  />
                </button>
              )
            })}
          </div>
        </section>

        {/* Portfolio Projects Carousel / Grid */}
        <section className="px-6 sm:px-12 md:px-[60px] pb-24 md:pb-[120px] max-w-[1512px] w-full mx-auto">
          <div className="flex gap-6 md:gap-[20px] overflow-x-auto custom-scrollbar pb-6 pt-2">
            {(filteredProjects.length > 0 ? filteredProjects : projects).map((project, index) => (
              <article
                key={`${activeCategory}-${project.id}`}
                className="flex flex-col gap-5 md:gap-[24px] w-[280px] sm:w-[320px] md:w-[331px] shrink-0 group animate-swipe-up-card"
                style={{
                  animationDelay: `${250 + index * 180}ms`,
                }}
              >
                {/* Project Image Frame */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="relative h-[400px] md:h-[473px] w-full overflow-hidden rounded-sm bg-[#f3f4f6] block transition-transform duration-300 group-hover:-translate-y-1 shadow-sm group-hover:shadow-md"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>

                {/* Project Info */}
                <div className="flex flex-col gap-[15px] pr-4">
                  <div className="flex flex-col gap-1 uppercase">
                    <h3 className="font-mono text-[14px] tracking-[1.54px] text-black">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[#0d5eb9] transition-colors"
                      >
                        {project.title}
                      </a>
                    </h3>
                    <p className="font-mono font-bold text-[12px] tracking-[1.32px] text-black/70">
                      {project.type}
                    </p>
                  </div>

                  <p className="text-[13px] leading-[22px] text-[#1e1e1e]/90 font-normal">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto border-t border-gray-100 py-8 px-6 sm:px-12 md:px-[60px] max-w-[1512px] w-full mx-auto flex flex-col sm:flex-row items-center justify-between text-[12px] font-mono text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Habib Tri Zaka. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
