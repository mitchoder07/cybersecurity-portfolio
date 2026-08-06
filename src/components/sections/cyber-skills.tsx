"use client";

import { motion } from "framer-motion";
import {
  Crosshair,
  KeySquare,
  Network,
  Code2,
  Activity,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { CyberSectionHeading } from "./cyber-section-heading";

const categoryMeta: {
  key: "pentest" | "crypto" | "network" | "scripting" | "siem" | "platforms";
  icon: LucideIcon;
  color: string;
}[] = [
  { key: "pentest", icon: Crosshair, color: "#ef4444" },
  { key: "crypto", icon: KeySquare, color: "#00d4ff" },
  { key: "network", icon: Network, color: "#00ff41" },
  { key: "scripting", icon: Code2, color: "#f59e0b" },
  { key: "siem", icon: Activity, color: "#a855f7" },
  { key: "platforms", icon: Wrench, color: "#00d4ff" },
];

export function CyberSkills() {
  const { t } = useI18n();

  return (
    <section id="skills" className="section-pad relative bg-[var(--neon)]/[0.015]">
      <div className="container-max">
        <CyberSectionHeading
          badge={t.skills.badge}
          heading={t.skills.heading}
          subheading={t.skills.subheading}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {categoryMeta.map((meta, i) => {
            const cat = t.skills.categories[meta.key];
            const Icon = meta.icon;
            return (
              <motion.div
                key={meta.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="terminal-border group relative overflow-hidden rounded-md bg-[#0a0a0a]/70 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-[#0a0a0a]/90 sm:p-6"
                data-cursor="pointer"
              >
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                  style={{ background: meta.color }}
                />

                <div className="relative">
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-md border transition-all duration-300 group-hover:scale-110"
                      style={{
                        borderColor: `${meta.color}40`,
                        background: `${meta.color}15`,
                      }}
                    >
                      <Icon className="h-5 w-5" style={{ color: meta.color }} />
                    </div>
                    <h3 className="font-mono text-lg font-bold text-[var(--neon)]">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((item, j) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 + j * 0.03 }}
                        className="flex items-center gap-1.5 rounded border border-[var(--neon)]/15 bg-[var(--neon)]/[0.04] px-2 py-1 font-mono text-xs text-foreground/85 transition-all duration-200 hover:border-[var(--neon)]/45 hover:bg-[var(--neon)]/10 hover:text-[var(--neon)]"
                      >
                        <span className="text-[var(--neon-soft)]">{">"}</span>
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
