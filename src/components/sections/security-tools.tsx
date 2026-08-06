"use client";

import { motion } from "framer-motion";
import {
  SiTmux,
  SiWireshark,
  SiMetasploit,
  SiBurpsuite,
  SiKalilinux,
  SiPython,
  SiDocker,
  SiSplunk,
  SiGit,
  SiVirtualbox,
} from "react-icons/si";
import { Terminal, Database, KeyRound, Bug } from "lucide-react";
import type { IconType } from "react-icons";
import { useI18n } from "@/lib/i18n";
import { CyberSectionHeading } from "./cyber-section-heading";

// Map tool name to icon (using react-icons/si for brand icons, lucide for concepts)
const toolIcons: Record<string, IconType> = {
  Nmap: SiTmux,
  Wireshark: SiWireshark,
  Metasploit: SiMetasploit,
  "Burp Suite": SiBurpsuite,
  "Kali Linux": SiKalilinux,
  Python: SiPython,
  Docker: SiDocker,
  Splunk: SiSplunk,
  "John the Ripper": KeyRound,
  Hashcat: KeyRound,
  Nikto: Bug,
  SQLmap: Database,
  Git: SiGit,
  VirtualBox: SiVirtualbox,
  Terminal: Terminal,
};

export function SecurityTools() {
  const { t } = useI18n();

  return (
    <section id="tools" className="section-pad relative">
      <div className="container-max">
        <CyberSectionHeading
          badge={t.tools.badge}
          heading={t.tools.heading}
          subheading={t.tools.subheading}
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {t.tools.items.map((tool, i) => {
            const Icon = toolIcons[tool.name] ?? Terminal;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                whileHover={{ y: -4 }}
                className="terminal-border group flex flex-col items-center gap-3 rounded-md bg-[var(--surface)] p-5 text-center backdrop-blur-sm transition-all duration-300 hover:bg-[var(--surface-strong)]"
                data-cursor="pointer"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-md border border-[var(--neon)]/25 bg-[var(--neon)]/[0.05] transition-all duration-300 group-hover:scale-110 group-hover:border-[var(--neon)]/55 group-hover:bg-[var(--neon)]/15">
                  <Icon className="h-7 w-7 text-[var(--neon)] transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-bold text-[var(--neon)]">
                    {tool.name}
                  </h3>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-foreground/55">
                    {tool.category}
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
