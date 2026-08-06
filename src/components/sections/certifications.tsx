"use client";

import { motion } from "framer-motion";
import { Award, Lock, Loader, Circle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { CyberSectionHeading } from "./cyber-section-heading";
import { statusStyles } from "./cyber-experience";

const statusIcons = {
  completed: Award,
  "in-progress": Loader,
  planned: Circle,
};

export function Certifications() {
  const { t } = useI18n();

  return (
    <section id="certifications" className="section-pad relative">
      <div className="container-max">
        <CyberSectionHeading
          badge={t.certifications.badge}
          heading={t.certifications.heading}
          subheading={t.certifications.subheading}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {t.certifications.items.map((cert, i) => {
            const styles = statusStyles[cert.statusType];
            const Icon = statusIcons[cert.statusType];
            const inProgress = cert.statusType === "in-progress";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="terminal-border group relative overflow-hidden rounded-md bg-[#0a0a0a]/70 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-[#0a0a0a]/90 sm:p-6"
                data-cursor="pointer"
              >
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                  style={{ background: styles.color }}
                />

                <div className="relative">
                  <div className="mb-4 flex items-center justify-between">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-md border transition-all duration-300 group-hover:scale-110"
                      style={{
                        borderColor: styles.border,
                        background: styles.bg,
                      }}
                    >
                      <Icon
                        className={`h-5 w-5 ${inProgress ? "animate-spin" : ""}`}
                        style={{ color: styles.color }}
                      />
                    </div>
                    <span
                      className="rounded-md border px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider"
                      style={{
                        color: styles.color,
                        borderColor: styles.border,
                        background: styles.bg,
                      }}
                    >
                      {cert.status}
                    </span>
                  </div>

                  <h3 className="font-mono text-base font-bold leading-tight text-[var(--neon)]">
                    {cert.name}
                  </h3>
                  <p className="mt-0.5 font-mono text-xs font-medium text-foreground/55">
                    {cert.issuer}
                  </p>
                  <p className="mt-3 font-mono text-xs leading-relaxed text-foreground/65">
                    {cert.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
