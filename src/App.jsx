import React from "react";
import { Hero } from "./components/Hero.jsx";
import { LogoRow } from "./components/LogoRow.jsx";
import { About } from "./components/About.jsx";
import { CaseStudies } from "./components/CaseStudies.jsx";
import { Experience } from "./components/Experience.jsx";
import { FAQ } from "./components/FAQ.jsx";
import { Blog } from "./components/Blog.jsx";
import { HireMeButton } from "./components/HireMeButton.jsx";
import GlowingBackground from "./components/GlowingBackground.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-black relative">
      <GlowingBackground />
      <div className="relative z-50">
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/30">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-white/80" />
              <span className="text-sm text-zinc-400">Portfolio</span>
            </div>
            <div className="hidden gap-6 text-sm text-zinc-300 md:flex">
              <a href="#work" className="hover:text-white">
                Work
              </a>
              <a href="#experience" className="hover:text-white">
                Experience
              </a>
              <a href="#blog" className="hover:text-white">
                Blog
              </a>
              <a href="#faq" className="hover:text-white">
                FAQ
            </a>
            <a href="#proposal" className="hover:text-white">
              Proposal
            </a>
            <a href="#studio" className="hover:text-white">
              Nicey Studio
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20"
          >
            Contact Creator
          </a>
        </nav>
      </header>

        <main className="mx-auto max-w-6xl px-6">
          <Hero />
          <LogoRow />
          <About />
          <CaseStudies />
          <Experience />
          <Blog />
          <FAQ />
          <HireMeButton />
        </main>

        <footer className="mx-auto max-w-6xl px-6 py-12 text-center text-xs text-zinc-500">
          Made with React + Framer Motion
        </footer>
      </div>
    </div>
  );
}
