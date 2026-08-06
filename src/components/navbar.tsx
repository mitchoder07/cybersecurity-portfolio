"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { AnimatedLogo } from "./animated-logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "certifications",
  "ctf",
  "tools",
  "feed",
  "experience",
  "contact",
] as const;

export function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "ctf", label: t.nav.ctf },
    { id: "certifications", label: t.nav.certifications },
    { id: "experience", label: t.nav.experience },
    { id: "contact", label: t.nav.contact },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-2.5" : "py-4"
        )}
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "flex items-center justify-between rounded-md transition-all duration-500",
              scrolled
                ? "h-14 border border-[var(--neon)]/25 bg-[#0a0a0a]/85 px-4 shadow-lg shadow-black/40 backdrop-blur-md"
                : "h-14 px-2"
            )}
          >
            {/* Logo */}
            <AnimatedLogo onClick={() => scrollTo("home")} />

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  data-cursor="pointer"
                  className={cn(
                    "relative rounded-md px-3 py-1.5 font-mono text-xs font-medium transition-colors duration-300",
                    activeSection === item.id
                      ? "text-[var(--neon)]"
                      : "text-foreground/60 hover:text-[var(--neon)]"
                  )}
                >
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-md border border-[var(--neon)]/30 bg-[var(--neon)]/10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="text-[var(--neon-soft)]">/</span>
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-1">
              <LanguageSwitcher />
              <ThemeToggle />
              <Button
                onClick={() => scrollTo("contact")}
                size="sm"
                className="ml-2 hidden h-9 rounded-md border border-[var(--neon)] bg-[var(--neon)]/15 px-4 font-mono text-xs font-semibold text-[var(--neon)] hover:bg-[var(--neon)]/25 hover:text-[var(--neon)] md:inline-flex"
                data-cursor="pointer"
              >
                <Terminal className="mr-1.5 h-3.5 w-3.5" />
                {t.nav.contact}
              </Button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileOpen(true)}
                className="ml-1 flex h-9 w-9 items-center justify-center rounded-md border border-[var(--neon)]/25 bg-[var(--neon)]/[0.03] hover:bg-[var(--neon)]/10 lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5 text-[var(--neon)]" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-[#0a0a0a]/85 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 240 }}
              className="absolute right-0 top-0 h-full w-[78%] max-w-sm border-l border-[var(--neon)]/25 bg-[#0a0a0a] p-6 pt-8"
            >
              <div className="mb-8 flex items-center justify-between">
                <AnimatedLogo onClick={() => { setMobileOpen(false); scrollTo("home"); }} size="lg" />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--neon)]/25 hover:bg-[var(--neon)]/10"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-[var(--neon)]" />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                    onClick={() => scrollTo(item.id)}
                    className="rounded-md px-4 py-3 text-left font-mono text-base font-medium text-foreground/80 transition-colors hover:bg-[var(--neon)]/10 hover:text-[var(--neon)]"
                  >
                    <span className="text-[var(--neon-soft)]">/</span> {item.label}
                  </motion.button>
                ))}
              </nav>
              <Button
                onClick={() => scrollTo("contact")}
                className="mt-6 w-full rounded-md border border-[var(--neon)] bg-[var(--neon)]/15 font-mono text-[var(--neon)] hover:bg-[var(--neon)]/25 hover:text-[var(--neon)]"
                size="lg"
              >
                <Terminal className="mr-2 h-4 w-4" />
                {t.nav.contact}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
