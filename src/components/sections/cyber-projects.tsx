"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Code2,
  Target,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Lock,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { CyberSectionHeading } from "./cyber-section-heading";
import { CodePreview } from "@/components/projects/code-preview";
import { cyberCodeSnippets } from "@/lib/cyber-snippets";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function CyberProjects() {
  const { t } = useI18n();
  const [activeIdx, setActiveIdx] = useState(0);

  const projects = t.projects.items;
  const active = projects[activeIdx];
  const snippet = cyberCodeSnippets[activeIdx];

  const go = (delta: number) => {
    setActiveIdx((prev) => (prev + delta + projects.length) % projects.length);
  };

  const isClassified = active.classified === true;
  const hasGithub = !!active.githubUrl;
  const hasLive = !!active.liveUrl;
  const showFeatured = activeIdx === 0;

  return (
    <section id="projects" className="section-pad relative">
      <div className="container-max">
        <CyberSectionHeading
          badge={t.projects.badge}
          heading={t.projects.heading}
          subheading={t.projects.subheading}
        />

        {/* Tab selector */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          {projects.map((p, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              data-cursor="pointer"
              className={cn(
                "rounded-md border px-3 py-1.5 font-mono text-xs font-medium transition-all duration-300 sm:px-3.5",
                i === activeIdx
                  ? "border-[var(--neon)] bg-[var(--neon)]/15 text-[var(--neon)]"
                  : "border-[var(--neon)]/20 bg-transparent text-foreground/60 hover:border-[var(--neon)]/40 hover:text-[var(--neon)]"
              )}
            >
              <span className="mr-2 font-mono opacity-50">
                {String(i + 1).padStart(2, "0")}
              </span>
              {i === 0 && t.projects.featured + " · "}
              {p.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid gap-6 lg:grid-cols-2 lg:gap-8"
          >
            {/* Left: case study */}
            <div className="flex min-w-0 flex-col">
              {/* Project image / gradient area */}
              <div className="terminal-border relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-md bg-[var(--surface-solid)]">
                {isClassified ? (
                  <div
                    className="relative h-full w-full"
                    style={{
                      background:
                        active.gradient ??
                        "linear-gradient(135deg, #00ff41 0%, #00d4ff 100%)",
                    }}
                    aria-hidden
                  >
                    <div className="absolute inset-0 bg-grid opacity-30" />
                  </div>
                ) : active.image ? (
                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <div
                    className="h-full w-full"
                    style={{
                      background:
                        active.gradient ??
                        "linear-gradient(135deg, #00ff41 0%, #00d4ff 100%)",
                    }}
                    aria-hidden
                  />
                )}

                {/* Featured badge */}
                {showFeatured && (
                  <div className="absolute left-3 top-3">
                    <Badge className="rounded border border-[var(--neon)] bg-[var(--neon)]/15 px-2.5 py-1 font-mono text-[11px] font-semibold text-[var(--neon)]">
                      {t.projects.featured}
                    </Badge>
                  </div>
                )}

                {/* Classified badge */}
                {isClassified && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center gap-1.5 rounded-md border border-[var(--amber)]/50 bg-[var(--surface-strong)] px-3 py-1.5 font-mono text-xs font-semibold text-[var(--amber)] backdrop-blur-sm">
                      <Lock className="h-3.5 w-3.5" />
                      {t.projects.classified}
                    </div>
                  </div>
                )}

                {/* Scanline overlay on image */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-30"
                  style={{
                    background:
                      "repeating-linear-gradient(0deg, transparent 0, transparent 2px, rgba(0,255,65,0.05) 2px, rgba(0,255,65,0.05) 3px)",
                  }}
                />
              </div>

              {/* Project name + tagline */}
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <h3 className="font-mono text-xl font-bold leading-tight text-[var(--neon)] sm:text-2xl md:text-3xl">
                    {active.name}
                  </h3>
                  <p className="mt-1.5 font-mono text-sm text-foreground/65 sm:text-base">
                    {active.tagline}
                  </p>
                </div>
                {!isClassified && (
                  <div className="flex gap-2">
                    {hasGithub && (
                      <a
                        href={active.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--neon)]/20 bg-[var(--neon)]/[0.03] transition-colors hover:border-[var(--neon)]/50 hover:bg-[var(--neon)]/10"
                        aria-label="View code"
                        data-cursor="pointer"
                      >
                        <Github className="h-4 w-4 text-[var(--neon)]" />
                      </a>
                    )}
                    {hasLive && (
                      <a
                        href={active.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--cyber)]/30 bg-[var(--cyber)]/[0.03] transition-colors hover:border-[var(--cyber)]/60 hover:bg-[var(--cyber)]/10"
                        aria-label="Live demo"
                        data-cursor="pointer"
                      >
                        <ArrowUpRight className="h-4 w-4 text-[var(--cyber)]" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="mb-6 break-words font-mono text-sm leading-relaxed text-foreground/75 sm:text-base">
                {active.description}
              </p>

              {/* Meta grid */}
              <div className="mb-6 grid gap-3 sm:grid-cols-2">
                <div className="terminal-border min-w-0 rounded-md bg-[var(--neon)]/[0.03] p-4">
                  <div className="mb-1.5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[var(--neon-soft)]">
                    <Target className="h-3.5 w-3.5" />
                    {t.projects.role}
                  </div>
                  <div className="break-words font-mono text-sm font-medium text-foreground">
                    {active.role}
                  </div>
                </div>
                <div className="terminal-border min-w-0 rounded-md bg-[var(--cyber)]/[0.03] p-4">
                  <div className="mb-1.5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[var(--cyber)]">
                    <Sparkles className="h-3.5 w-3.5" />
                    {t.projects.impact}
                  </div>
                  <div className="break-words font-mono text-sm font-medium text-foreground">
                    {active.impact}
                  </div>
                </div>
              </div>

              {/* Tech tags */}
              <div className="mb-6">
                <div className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[var(--neon-soft)]">
                  <Code2 className="h-3.5 w-3.5" />
                  {t.projects.tech}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {active.tech.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="rounded border border-[var(--neon)]/15 bg-[var(--neon)]/[0.05] px-2.5 py-0.5 font-mono text-[11px] font-medium text-[var(--neon)]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-auto flex flex-wrap gap-2">
                {isClassified ? (
                  <div className="flex items-center gap-2 rounded-md border border-[var(--amber)]/30 bg-[var(--amber)]/[0.05] px-4 py-2 font-mono text-xs font-medium text-[var(--amber)]">
                    <Lock className="h-3.5 w-3.5" />
                    {t.projects.classified}
                  </div>
                ) : (
                  <>
                    {hasGithub && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-9 rounded-md border-[var(--neon)]/30 bg-transparent font-mono text-[var(--neon)] hover:bg-[var(--neon)]/10 hover:text-[var(--neon)]"
                        data-cursor="pointer"
                        asChild
                      >
                        <a
                          href={active.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-3.5 w-3.5" />
                          {t.projects.viewCode}
                        </a>
                      </Button>
                    )}
                    {hasLive && (
                      <Button
                        size="sm"
                        className="h-9 rounded-md border border-[var(--cyber)] bg-[var(--cyber)]/15 font-mono text-[var(--cyber)] hover:bg-[var(--cyber)]/25 hover:text-[var(--cyber)]"
                        data-cursor="pointer"
                        asChild
                      >
                        <a
                          href={active.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t.projects.viewLive}
                          <ArrowUpRight className="ml-2 h-3.5 w-3.5" />
                        </a>
                      </Button>
                    )}
                  </>
                )}
              </div>

              {/* Pager */}
              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={() => go(-1)}
                  className="flex items-center gap-1 font-mono text-xs text-[var(--neon-soft)] transition-colors hover:text-[var(--neon)]"
                  data-cursor="pointer"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                  Prev
                </button>
                <div className="flex gap-1.5">
                  {projects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIdx(i)}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        i === activeIdx
                          ? "w-6 bg-[var(--neon)]"
                          : "w-1.5 bg-[var(--neon)]/25 hover:bg-[var(--neon)]/50"
                      )}
                      aria-label={`Go to project ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => go(1)}
                  className="flex items-center gap-1 font-mono text-xs text-[var(--neon-soft)] transition-colors hover:text-[var(--neon)]"
                  data-cursor="pointer"
                >
                  Next
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Right: live code preview */}
            <div className="min-w-0">
              <div className="mb-3 flex items-center gap-2 font-mono text-xs text-[var(--neon-soft)]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--neon)]" />
                Live code preview
              </div>
              <CodePreview
                code={snippet.code}
                language={snippet.language}
                filename={snippet.filename}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
