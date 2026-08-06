"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function CyberSectionHeading({
  badge,
  heading,
  subheading,
  align = "center",
}: {
  badge?: string;
  heading: string;
  subheading?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-12 sm:mb-16",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      {badge && (
        <div
          className={cn(
            "mb-4 inline-flex items-center gap-2 rounded-md border border-[var(--neon)]/30 bg-[var(--neon)]/5 px-3 py-1 font-mono text-xs uppercase tracking-wider text-[var(--neon)]",
            align === "center" && "mx-auto"
          )}
        >
          <span className="text-[var(--neon)]">[</span>
          {badge}
          <span className="text-[var(--neon)]">]</span>
        </div>
      )}
      <h2 className="font-mono text-3xl font-bold leading-tight tracking-tight text-[var(--neon)] text-glow sm:text-4xl md:text-5xl lg:text-[3.25rem]">
        {heading}
      </h2>
      {subheading && (
        <p
          className={cn(
            "mt-4 font-mono text-sm leading-relaxed text-foreground/70 sm:text-base md:text-lg",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          )}
        >
          {subheading}
        </p>
      )}
    </motion.div>
  );
}
