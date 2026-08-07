"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Terminal as TerminalIcon, Shield, Activity, Lock } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MatrixRain } from "@/components/effects/matrix-rain";
import { ThreatMap } from "@/components/effects/threat-map";

const stats = [
  { key: "stat1Label", value: "5+" },
  { key: "stat2Label", value: "50+" },
  { key: "stat3Label", value: "7" },
] as const;

/** Typewriter hook — types out the supplied text char by char. */
function useTypewriter(text: string, speed = 65, startDelay = 600) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplay("");
    setDone(false);
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const start = setTimeout(function step() {
      if (i < text.length) {
        setDisplay(text.slice(0, i + 1));
        i++;
        timer = setTimeout(step, speed);
      } else {
        setDone(true);
      }
    }, startDelay);
    return () => {
      clearTimeout(start);
      clearTimeout(timer);
    };
  }, [text, speed, startDelay]);

  return { display, done };
}

export function CyberHero() {
  const { t } = useI18n();
  const { display: titleDisplay, done: titleDone } = useTypewriter(t.hero.title, 55, 900);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-grid scanlines"
    >
      {/* Matrix rain canvas background — full screen, no dark overlay */}
      <div className="absolute inset-0 z-0 bg-[var(--surface-solid)] pointer-events-none">
        <MatrixRain opacity={0.35} />
      </div>

      {/* Kept below the fixed navigation so the security readout never competes with it. */}
      <div className="absolute left-0 right-0 top-20 z-20 border-y border-[var(--neon)]/20 bg-[var(--surface-strong)] backdrop-blur-sm sm:top-[5.5rem]">
        <div className="container-max flex items-center justify-between px-4 py-2 text-[11px] sm:text-xs">
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="flex items-center gap-1.5 text-[var(--neon)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--neon)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--neon)]" />
              </span>
              <span className="font-semibold">{t.hero.statusSecure}</span>
            </span>
            <span className="hidden text-foreground/60 sm:inline">|</span>
            <span className="hidden items-center gap-1.5 text-[var(--amber)] sm:flex">
              <Activity className="h-3 w-3" />
              {t.hero.statusThreat}
            </span>
          </div>
          <span className="flex items-center gap-1.5 text-foreground/60">
            <Lock className="h-3 w-3" />
            <span className="hidden sm:inline">{t.hero.statusScan}</span>
            <span className="sm:hidden">2 min ago</span>
          </span>
        </div>
      </div>

      {/* Threat map — bottom right background */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-[60vh] w-full opacity-40 sm:h-[80vh] sm:w-[70%] lg:w-[55%]">
        <ThreatMap className="h-full w-full" />
      </div>

      <div className="container-max relative z-10 flex min-h-screen flex-col justify-center px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-3xl pb-2 md:pb-4">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 inline-flex sm:mb-6"
          >
            <div className="inline-flex items-center gap-2 rounded-md border border-[var(--neon)]/30 bg-[var(--neon)]/5 px-3 py-1.5 font-mono text-xs">
              <Shield className="h-3.5 w-3.5 text-[var(--neon)]" />
              <span className="text-[var(--neon)]">{t.hero.badge}</span>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-2 font-mono text-xs text-[var(--neon-soft)] sm:mb-3 sm:text-sm md:text-base"
          >
            <span className="text-[var(--neon)]">$</span> {t.hero.greeting}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-5xl font-bold leading-[1.05] tracking-tight break-words sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span
              className="glitch text-[var(--neon)] text-glow"
              data-text={t.hero.name}
            >
              {t.hero.name}
            </span>
          </motion.h1>

          {/* aka Upin subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-2 flex flex-wrap items-center gap-2"
          >
            <span className="font-mono text-sm text-[var(--neon-soft)] sm:text-base">
              {t.hero.akaLabel}
            </span>
            <span className="rounded border border-[var(--cyber)]/40 bg-[var(--cyber)]/10 px-2 py-0.5 font-mono text-sm font-semibold text-[var(--cyber)] sm:text-base">
              {t.hero.brandName}
            </span>
          </motion.div>

          {/* Title with typewriter */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-4 font-mono text-xl font-semibold text-[var(--neon)] sm:mt-5 sm:text-2xl md:text-3xl lg:text-4xl"
          >
            {titleDisplay}
            <span
              className={cn(
                "ml-1 inline-block h-[0.85em] w-[3px] -translate-y-[0.05em] bg-[var(--neon)]",
                titleDone ? "animate-blink" : ""
              )}
            />
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-5 max-w-xl break-words text-sm leading-relaxed text-foreground/85 sm:mt-6 sm:text-base md:text-lg"
          >
            {t.hero.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.35 }}
            className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8"
          >
            <Button
              onClick={() => scrollTo("projects")}
              size="lg"
              data-cursor="pointer"
              data-cursor-text="view"
              className={cn(
                "group h-11 rounded-md border border-[var(--neon)] bg-[var(--neon)]/10 px-5 font-mono text-sm font-semibold text-[var(--neon)] hover:bg-[var(--neon)]/20 hover:text-[var(--neon)] sm:h-12 sm:px-6",
                "transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.4)]"
              )}
            >
              {t.hero.ctaPrimary}
              <ArrowDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </Button>
            <Button
              onClick={() => scrollTo("ctf")}
              size="lg"
              data-cursor="pointer"
              data-cursor-text="run"
              className={cn(
                "group h-11 rounded-md border border-[var(--cyber)]/40 bg-transparent px-5 font-mono text-sm font-semibold text-[var(--cyber)] hover:border-[var(--cyber)] hover:bg-[var(--cyber)]/10 sm:h-12 sm:px-6",
                "transition-all duration-300"
              )}
            >
              <TerminalIcon className="mr-2 h-4 w-4" />
              {t.hero.ctaSecondary}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-10 grid grid-cols-3 gap-2 sm:mt-14 sm:gap-4 lg:gap-6"
          >
            {stats.map((stat) => (
              <div
                key={stat.key}
                className="terminal-border group min-w-0 rounded-md bg-[var(--neon)]/[0.03] p-3 text-center transition-all duration-300 hover:bg-[var(--neon)]/[0.08] sm:p-4"
              >
                <div className="font-mono text-xl font-bold text-[var(--neon)] transition-all group-hover:text-glow sm:text-3xl md:text-4xl lg:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-1 break-words text-[8px] uppercase leading-tight tracking-wider text-[var(--neon-soft)] sm:text-xs sm:tracking-wider">
                  {t.hero[stat.key as keyof typeof t.hero]}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Scroll indicator — in normal flow below the stats so it never
              overlaps the hero stats on shorter desktop viewports. */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="mt-12 flex justify-center sm:mt-16 md:mt-20"
          >
            <button
              onClick={() => scrollTo("about")}
              className="flex flex-col items-center gap-2 text-[var(--neon-soft)] transition-colors hover:text-[var(--neon)]"
              data-cursor="pointer"
              aria-label={t.hero.scroll}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                {t.hero.scroll}
              </span>
              <div className="relative h-10 w-6 rounded-full border border-current">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-1/2 top-1.5 h-2 w-0.5 -translate-x-1/2 rounded-full bg-current"
                />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
