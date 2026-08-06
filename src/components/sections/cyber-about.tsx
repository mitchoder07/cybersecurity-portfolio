"use client";

import { motion } from "framer-motion";
import { Check, Terminal } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { CyberSectionHeading } from "./cyber-section-heading";

export function CyberAbout() {
  const { t } = useI18n();

  return (
    <section id="about" className="section-pad relative">
      <div className="container-max">
        <CyberSectionHeading
          badge={t.about.badge}
          heading={t.about.heading}
        />

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          {/* Left: Story */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6 font-mono text-sm leading-relaxed text-foreground/80 sm:text-base"
            >
              <p>
                <span className="text-[var(--neon)]">{">"}</span> {t.about.p1}
              </p>
              <p>
                <span className="text-[var(--neon)]">{">"}</span> {t.about.p2}
              </p>
              <p>
                <span className="text-[var(--neon)]">{">"}</span> {t.about.p3}
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-3 pt-6 sm:grid-cols-4"
            >
              {t.about.highlights.map((h) => (
                <div
                  key={h.label}
                  className="terminal-border rounded-md bg-[var(--neon)]/[0.03] p-4 text-center transition-all duration-300 hover:bg-[var(--neon)]/[0.08]"
                  data-cursor="pointer"
                >
                  <div className="font-mono text-2xl font-bold text-[var(--neon)] sm:text-3xl">
                    {h.value}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-[var(--neon-soft)]">
                    {h.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Core Competencies card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="sticky top-24 rounded-md border border-[var(--neon)]/25 bg-[var(--surface)] p-6 backdrop-blur-md sm:p-8">
              <div className="mb-3 flex items-center gap-2 font-mono text-xs text-[var(--neon-soft)]">
                <Terminal className="h-3.5 w-3.5" />
                <span>cat core_competencies.txt</span>
              </div>
              <h3 className="mb-2 font-mono text-lg font-bold text-[var(--neon)]">
                {t.about.coreTitle}
              </h3>
              <p className="mb-5 font-mono text-xs text-foreground/60">
                {t.about.coreDesc}
              </p>

              <div className="space-y-3">
                {t.about.coreItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                    className="group rounded-md border border-[var(--neon)]/15 bg-[var(--neon)]/[0.02] p-3.5 transition-all duration-300 hover:border-[var(--neon)]/40 hover:bg-[var(--neon)]/[0.06]"
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[var(--neon)]/40 bg-[var(--neon)]/15">
                        <Check className="h-3 w-3 text-[var(--neon)]" strokeWidth={3} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-mono text-sm font-semibold text-[var(--neon)]">
                          {item.title}
                        </h4>
                        <p className="mt-1 font-mono text-xs leading-relaxed text-foreground/65">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
