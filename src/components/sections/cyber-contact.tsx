"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  ArrowUpRight,
  CheckCircle2,
  Terminal,
  ShieldCheck,
} from "lucide-react";
import { SiX, SiWhatsapp, SiTryhackme, SiHackthebox } from "react-icons/si";
import { useI18n } from "@/lib/i18n";
import { CyberSectionHeading } from "./cyber-section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const EMAIL = "olaniyiaremu2003@gmail.com";
const WHATSAPP_NUMBER = "2347088955340";
const WHATSAPP_DISPLAY = "+234 708 895 5340";
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;

// HackerOne + TryHackMe use lucide ShieldCheck as a stand-in since they have no brand icon
export function CyberContact() {
  const { t } = useI18n();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("All fields required");
      return;
    }
    setSending(true);
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `[CYBER CONTACT] ${form.name}`,
        }),
      });
      if (res.ok) {
        setSent(true);
        toast.success(t.contact.success);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      } else {
        const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
          `[CYBER CONTACT] ${form.name}`
        )}&body=${encodeURIComponent(form.message + `\n\nFrom: ${form.name} <${form.email}>`)}`;
        window.location.href = mailto;
        toast.success("Opening email client...");
      }
    } catch {
      const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
        `[CYBER CONTACT] ${form.name}`
      )}&body=${encodeURIComponent(form.message + `\n\nFrom: ${form.name} <${form.email}>`)}`;
      window.location.href = mailto;
      toast.success("Opening email client...");
    } finally {
      setSending(false);
    }
  };

  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/mitchoder07", color: "#00ff41" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/mitchoder07", color: "#00d4ff" },
    { icon: SiX, label: "X", href: "https://x.com/mitchoder07", color: "#00ff41" },
    { icon: ShieldCheck, label: "HackerOne", href: "https://hackerone.com/mitchoder07", color: "#ef4444" },
    { icon: SiTryhackme, label: "TryHackMe", href: "https://tryhackme.com/p/mitchoder07", color: "#f59e0b" },
    { icon: SiHackthebox, label: "HackTheBox", href: "https://hackthebox.com", color: "#00ff41" },
    { icon: SiWhatsapp, label: "WhatsApp", href: `https://wa.me/${WHATSAPP_NUMBER}`, color: "#00ff41" },
  ];

  return (
    <section id="contact" className="section-pad relative">
      <div className="container-max">
        <CyberSectionHeading
          badge={t.contact.badge}
          heading={t.contact.heading}
          subheading={t.contact.subheading}
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          {/* Left: Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="terminal-border overflow-hidden rounded-md bg-[var(--surface-strong)] backdrop-blur-md"
          >
            {/* Terminal-style header */}
            <div className="flex items-center justify-between border-b border-[var(--neon)]/20 bg-[var(--neon)]/[0.03] px-4 py-2.5">
              <div className="flex items-center gap-2 font-mono text-xs text-[var(--neon-soft)]">
                <Terminal className="h-3.5 w-3.5 text-[var(--neon)]" />
                <span>upin@cyber:~/$ send_message.sh</span>
              </div>
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-[var(--danger)]/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-[var(--amber)]/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-[var(--neon)]/70" />
              </div>
            </div>

            <div className="space-y-4 p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[var(--neon-soft)]">
                    <span className="text-[var(--neon)]">$</span>
                    {t.contact.nameLabel}
                  </label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    className="h-11 rounded-md border-[var(--neon)]/25 bg-[var(--surface)] font-mono text-sm text-[var(--neon)] placeholder:text-foreground/30 focus:border-[var(--neon)]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[var(--neon-soft)]">
                    <span className="text-[var(--neon)]">$</span>
                    {t.contact.emailLabel}
                  </label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t.contact.emailPlaceholder}
                    className="h-11 rounded-md border-[var(--neon)]/25 bg-[var(--surface)] font-mono text-sm text-[var(--neon)] placeholder:text-foreground/30 focus:border-[var(--neon)]"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[var(--neon-soft)]">
                  <span className="text-[var(--neon)]">$</span>
                  {t.contact.messageLabel}
                </label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder}
                  className="min-h-[140px] rounded-md border-[var(--neon)]/25 bg-[var(--surface)] font-mono text-sm text-[var(--neon)] placeholder:text-foreground/30 focus:border-[var(--neon)]"
                />
              </div>

              <Button
                type="submit"
                disabled={sending || sent}
                size="lg"
                className="h-12 w-full rounded-md border border-[var(--neon)] bg-[var(--neon)]/15 font-mono text-sm font-semibold text-[var(--neon)] hover:bg-[var(--neon)]/25 hover:text-[var(--neon)]"
                data-cursor="pointer"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4 text-[var(--neon)]" />
                    {t.contact.success}
                  </>
                ) : sending ? (
                  <>
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-[var(--neon)]/30 border-t-[var(--neon)]" />
                    {t.contact.sending}
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    {t.contact.send}
                  </>
                )}
              </Button>
            </div>
          </motion.form>

          {/* Right: Direct CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-3"
          >
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center gap-3 rounded-md border border-[var(--neon)]/20 bg-[var(--surface)] p-4 transition-all duration-300 hover:border-[var(--neon)]/55 hover:bg-[var(--neon)]/[0.06]"
              data-cursor="pointer"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md border border-[var(--neon)]/30 bg-[var(--neon)]/10 transition-transform duration-300 group-hover:scale-110">
                <Mail className="h-5 w-5 text-[var(--neon)]" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-mono text-[10px] uppercase tracking-wider text-foreground/55">
                  {t.contact.emailMe}
                </div>
                <div className="truncate font-mono text-sm font-semibold text-[var(--neon)]">
                  {EMAIL}
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-foreground/40 transition-colors group-hover:text-[var(--neon)]" />
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-md border border-[var(--cyber)]/25 bg-[var(--surface)] p-4 transition-all duration-300 hover:border-[var(--cyber)]/60 hover:bg-[var(--cyber)]/[0.06]"
              data-cursor="pointer"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md border border-[var(--cyber)]/30 bg-[var(--cyber)]/10 transition-transform duration-300 group-hover:scale-110">
                <SiWhatsapp className="h-5 w-5 text-[var(--cyber)]" />
              </div>
              <div className="flex-1">
                <div className="font-mono text-[10px] uppercase tracking-wider text-foreground/55">
                  {t.contact.whatsappMe}
                </div>
                <div className="font-mono text-sm font-semibold text-[var(--cyber)]">
                  {WHATSAPP_DISPLAY}
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-foreground/40 transition-colors group-hover:text-[var(--cyber)]" />
            </a>

            {/* Socials */}
            <div className="mt-2">
              <div className="mb-3 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[var(--neon-soft)]">
                <span className="text-[var(--neon)]">$</span>
                {t.contact.followTitle}
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-16 flex-col items-center justify-center gap-1.5 rounded-md border border-[var(--neon)]/20 bg-[var(--surface)] transition-all duration-300 hover:border-[var(--neon)]/50 hover:bg-[var(--neon)]/[0.06]"
                      data-cursor="pointer"
                    >
                      <Icon
                        className="h-4 w-4 transition-transform group-hover:scale-110"
                        style={{ color: s.color }}
                      />
                      <span className="font-mono text-[11px] text-foreground/75 group-hover:text-[var(--neon)]">
                        {s.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
