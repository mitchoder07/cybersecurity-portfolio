"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail, ShieldCheck, Terminal } from "lucide-react";
import { SiX, SiWhatsapp, SiTryhackme, SiHackthebox } from "react-icons/si";
import { useI18n } from "@/lib/i18n";
import { AnimatedLogo } from "@/components/animated-logo";

const EMAIL = "olaniyiaremu2003@gmail.com";
const WHATSAPP_NUMBER = "2347088955340";

const navLinks = [
  { id: "about", key: "about" },
  { id: "skills", key: "skills" },
  { id: "projects", key: "projects" },
  { id: "certifications", key: "certifications" },
  { id: "ctf", key: "ctf" },
  { id: "tools", key: "tools" },
  { id: "feed", key: "feed" },
  { id: "experience", key: "experience" },
  { id: "contact", key: "contact" },
] as const;

export function CyberFooter() {
  const { t } = useI18n();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const socials = [
    { icon: Github, href: "https://github.com/mitchoder07", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/mitchoder07", label: "LinkedIn" },
    { icon: SiX, href: "https://x.com/mitchoder07", label: "X" },
    { icon: ShieldCheck, href: "https://hackerone.com/mitchoder07", label: "HackerOne" },
    { icon: SiTryhackme, href: "https://tryhackme.com/p/mitchoder07", label: "TryHackMe" },
    { icon: SiHackthebox, href: "https://hackthebox.com", label: "HackTheBox" },
    { icon: SiWhatsapp, href: `https://wa.me/${WHATSAPP_NUMBER}`, label: "WhatsApp" },
    { icon: Mail, href: `mailto:${EMAIL}`, label: "Email" },
  ];

  return (
    <footer className="relative mt-auto border-t border-[var(--neon)]/20 bg-[#050505]">
      <div className="container-max px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <AnimatedLogo onClick={() => scrollTo("home")} size="lg" />
            <p className="mb-4 mt-4 max-w-sm font-mono text-sm text-foreground/70">
              {t.footer.tagline}
            </p>
            <div className="rounded-md border border-[var(--neon)]/20 bg-[var(--neon)]/[0.03] p-3">
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--neon-soft)]">
                <Terminal className="h-3 w-3" />
                <span>upin@cyber:~/$</span>
              </div>
              <p className="mt-1 font-mono text-xs text-[var(--neon)]">
                {`$ echo "${t.footer.quote}"`}
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-3 flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--neon-soft)]">
              <span className="text-[var(--neon)]">{">"}</span>
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-1.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="font-mono text-sm text-foreground/65 transition-colors hover:text-[var(--neon)]"
                    data-cursor="pointer"
                  >
                    <span className="text-[var(--neon-soft)]">{"→"}</span> {t.nav[link.key]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-3 flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--neon-soft)]">
              <span className="text-[var(--neon)]">{">"}</span>
              {t.footer.connect}
            </h4>
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--neon)]/20 bg-[var(--neon)]/[0.03] transition-all duration-300 hover:border-[var(--neon)]/55 hover:bg-[var(--neon)]/10 hover:text-[var(--neon)]"
                    aria-label={s.label}
                    data-cursor="pointer"
                  >
                    <Icon className="h-4 w-4 text-[var(--neon)]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar — terminal style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[var(--neon)]/15 pt-6 sm:flex-row"
        >
          <p className="font-mono text-xs text-foreground/55">
            <span className="text-[var(--neon)]">$</span> echo "© {new Date().getFullYear()} Upin. {t.footer.rights}"
          </p>
          <button
            onClick={() => scrollTo("home")}
            className="group flex items-center gap-2 rounded-md border border-[var(--neon)]/25 bg-[var(--neon)]/[0.03] px-4 py-2 font-mono text-xs font-medium text-[var(--neon-soft)] transition-all duration-300 hover:border-[var(--neon)]/55 hover:text-[var(--neon)]"
            data-cursor="pointer"
          >
            <ArrowUp className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
            {t.footer.backToTop}
          </button>
        </motion.div>

        {/* Built with */}
        <p className="mt-4 text-center font-mono text-[10px] text-foreground/35 sm:text-left">
          {t.footer.builtWith}
        </p>
      </div>
    </footer>
  );
}
