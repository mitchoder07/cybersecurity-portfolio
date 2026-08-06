"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Check, Lock } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { CyberSectionHeading } from "./cyber-section-heading";
import { LockedContent } from "@/components/locked-content";
import type { Translation } from "@/lib/translations";

const statusStyles: Record<
  "completed" | "in-progress" | "planned",
  { color: string; border: string; bg: string; dot: string }
> = {
  completed: {
    color: "#00ff41",
    border: "rgba(0, 255, 65, 0.35)",
    bg: "rgba(0, 255, 65, 0.06)",
    dot: "#00ff41",
  },
  "in-progress": {
    color: "#f59e0b",
    border: "rgba(245, 158, 11, 0.4)",
    bg: "rgba(245, 158, 11, 0.06)",
    dot: "#f59e0b",
  },
  planned: {
    color: "#00d4ff",
    border: "rgba(0, 212, 255, 0.35)",
    bg: "rgba(0, 212, 255, 0.05)",
    dot: "#00d4ff",
  },
};

export function CyberExperience() {
  const { t } = useI18n();

  return (
    <section id="experience" className="section-pad relative bg-[var(--neon)]/[0.015]">
      <div className="container-max">
        <CyberSectionHeading
          badge={t.experience.badge}
          heading={t.experience.heading}
          subheading={t.experience.subheading}
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[var(--neon)]/50 via-[var(--neon)]/20 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-8 sm:space-y-12">
            {t.experience.items.map((item, i) => {
              const isRight = i % 2 === 1;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative pl-12 sm:pl-0 ${
                    isRight ? "sm:pl-[calc(50%+2rem)]" : "sm:pr-[calc(50%+2rem)]"
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-md border border-[var(--neon)]/40 bg-[#0a0a0a] ring-2 ring-[var(--neon)]/20 sm:left-1/2 sm:-translate-x-1/2">
                    <ShieldCheck className="h-3.5 w-3.5 text-[var(--neon)]" />
                  </div>

                  {/* Card */}
                  <div className="terminal-border group rounded-md bg-[#0a0a0a]/70 p-5 backdrop-blur-sm transition-all duration-300 hover:border-[var(--neon)]/40 hover:bg-[#0a0a0a]/90 sm:p-6">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-md border border-[var(--neon)]/30 bg-[var(--neon)]/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-[var(--neon)]">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="font-mono text-lg font-bold leading-tight text-[var(--neon)] sm:text-xl">
                      {item.role}
                    </h3>
                    <p className="mt-0.5 font-mono text-sm font-medium text-foreground/65">
                      {item.company}
                    </p>
                    <p className="mt-3 font-mono text-sm leading-relaxed text-foreground/70">
                      {item.description}
                    </p>

                    <div className="mt-4 space-y-2">
                      {item.achievements.map((ach, j) => {
                        // Detect CGPA in achievement text and lock it
                        const hasCgpa = /CGPA/i.test(ach);
                        const hasClassified = /classified|red team|zero-day|0day/i.test(ach);

                        if (hasCgpa) {
                          // Split the text around the CGPA value
                          const cgpaMatch = ach.match(/(CGPA\s*)([\d.]+\/[\d.]+)/i);
                          if (cgpaMatch) {
                            const beforeCgpa = ach.substring(0, cgpaMatch.index);
                            const cgpaLabel = cgpaMatch[1];
                            const cgpaValue = cgpaMatch[2];
                            const afterCgpa = ach.substring(cgpaMatch.index + cgpaMatch[0].length);

                            return (
                              <motion.div
                                key={j}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 + j * 0.08 }}
                                className="flex items-start gap-2.5 font-mono text-sm text-foreground/80"
                              >
                                <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[var(--neon)]" />
                                <span>
                                  {beforeCgpa}
                                  {cgpaLabel}
                                  <LockedContent
                                    level="cgpa"
                                    lockedDisplay="█.██/█.██"
                                    label="CLEARANCE L5"
                                  >
                                    {cgpaValue}
                                  </LockedContent>
                                  {afterCgpa}
                                </span>
                              </motion.div>
                            );
                          }
                        }

                        if (hasClassified) {
                          return (
                            <motion.div
                              key={j}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 0.2 + j * 0.08 }}
                              className="flex items-start gap-2.5 font-mono text-sm text-foreground/80"
                            >
                              <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[var(--neon)]" />
                              <LockedContent
                                level="classified"
                                lockedDisplay="[ CLASSIFIED — RED TEAM EYES ONLY ]"
                                label="RED TEAM"
                              >
                                <span>{ach}</span>
                              </LockedContent>
                            </motion.div>
                          );
                        }

                        return (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 + j * 0.08 }}
                            className="flex items-start gap-2.5 font-mono text-sm text-foreground/80"
                          >
                            <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[var(--neon)]" />
                            <span>{ach}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Reuse status styles for certifications section
export { statusStyles };
export type CertItem = Translation["certifications"]["items"][number];
