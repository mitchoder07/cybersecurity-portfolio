"use client";

import { motion } from "framer-motion";
import { Radio, AlertTriangle, ShieldAlert, ShieldCheck, Info } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { CyberSectionHeading } from "./cyber-section-heading";

const severityMeta = {
  critical: {
    color: "#ef4444",
    bg: "rgba(239, 68, 68, 0.08)",
    border: "rgba(239, 68, 68, 0.4)",
    Icon: ShieldAlert,
    label: "CRITICAL",
  },
  high: {
    color: "#f59e0b",
    bg: "rgba(245, 158, 11, 0.08)",
    border: "rgba(245, 158, 11, 0.4)",
    Icon: AlertTriangle,
    label: "HIGH",
  },
  medium: {
    color: "#00d4ff",
    bg: "rgba(0, 212, 255, 0.07)",
    border: "rgba(0, 212, 255, 0.35)",
    Icon: Info,
    label: "MEDIUM",
  },
  low: {
    color: "#00ff41",
    bg: "rgba(0, 255, 65, 0.07)",
    border: "rgba(0, 255, 65, 0.35)",
    Icon: ShieldCheck,
    label: "LOW",
  },
} as const;

export function SecurityFeed() {
  const { t } = useI18n();
  const items = t.feed.items;
  // Duplicate for seamless marquee loop
  const doubled = [...items, ...items];

  return (
    <section id="feed" className="section-pad relative bg-[var(--neon)]/[0.015]">
      <div className="container-max">
        <CyberSectionHeading
          badge={t.feed.badge}
          heading={t.feed.heading}
          subheading={t.feed.subheading}
        />

        {/* Live indicator */}
        <div className="mb-6 flex items-center justify-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--danger)] opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--danger)]" />
          </span>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--danger)]">
            {t.feed.live}
          </span>
        </div>

        {/* Marquee ticker — horizontal scrolling */}
        <div className="terminal-border relative overflow-hidden rounded-md bg-[#0a0a0a]/80 backdrop-blur-sm">
          <div className="flex w-max animate-marquee-fast items-stretch gap-3 py-4">
            {doubled.map((item, i) => {
              const meta = severityMeta[item.severity];
              const Icon = meta.Icon;
              return (
                <div
                  key={i}
                  className="flex min-w-[280px] items-start gap-3 rounded-md border px-4 py-3 sm:min-w-[340px]"
                  style={{
                    borderColor: meta.border,
                    background: meta.bg,
                  }}
                >
                  <Icon
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: meta.color }}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className="font-mono text-xs font-bold"
                        style={{ color: meta.color }}
                      >
                        {item.cve}
                      </span>
                      <span
                        className="rounded px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider"
                        style={{
                          color: meta.color,
                          border: `1px solid ${meta.border}`,
                        }}
                      >
                        {meta.label}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-[11px] leading-snug text-foreground/70 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
        </div>

        {/* Stat row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {(["critical", "high", "medium", "low"] as const).map((sev) => {
            const meta = severityMeta[sev];
            const count = items.filter((i) => i.severity === sev).length;
            const Icon = meta.Icon;
            return (
              <div
                key={sev}
                className="terminal-border flex items-center gap-3 rounded-md bg-[#0a0a0a]/60 p-3"
              >
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-md"
                  style={{ background: meta.bg, border: `1px solid ${meta.border}` }}
                >
                  <Icon className="h-4 w-4" style={{ color: meta.color }} />
                </div>
                <div>
                  <div
                    className="font-mono text-xl font-bold"
                    style={{ color: meta.color }}
                  >
                    {count}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-foreground/55">
                    {meta.label}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Footer note */}
        <div className="mt-4 flex items-center justify-center gap-2 font-mono text-[11px] text-foreground/45">
          <Radio className="h-3 w-3" />
          <span>Mock data for demonstration. Real feeds sourced from NVD, CISA, and vendor advisories.</span>
        </div>
      </div>
    </section>
  );
}
