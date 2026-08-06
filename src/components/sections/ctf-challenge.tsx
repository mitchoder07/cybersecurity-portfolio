"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Lock,
  Unlock,
  Lightbulb,
  Send,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Trophy,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { CyberSectionHeading } from "./cyber-section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "idle" | "wrong" | "solved";

export function CtfChallenge() {
  const { t } = useI18n();
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [flashOn, setFlashOn] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Normalize input for comparison (strip whitespace, optional quotes/casing)
  const normalize = (s: string) => s.trim().replace(/^["']|["']$/g, "").trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setAttempts((a) => a + 1);
    if (normalize(input).toLowerCase() === t.ctf.flag.toLowerCase()) {
      setStatus("solved");
      setFlashOn(true);
      setTimeout(() => setFlashOn(false), 1200);
    } else {
      setStatus("wrong");
      setTimeout(() => setStatus("idle"), 1800);
    }
  };

  const reset = () => {
    setInput("");
    setStatus("idle");
    setAttempts(0);
    setShowHint(false);
    inputRef.current?.focus();
  };

  // Auto-focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <section id="ctf" className="section-pad relative bg-[var(--neon)]/[0.015]">
      {/* Green flash overlay on success */}
      <AnimatePresence>
        {flashOn && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none fixed inset-0 z-[100] bg-[var(--neon)]"
            aria-hidden
          />
        )}
      </AnimatePresence>

      {/* Confetti-like ASCII particles on success */}
      <AnimatePresence>
        {status === "solved" && (
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {Array.from({ length: 30 }).map((_, i) => {
              const symbols = ["0", "1", "#", "$", "*", "FLAG", "0x41"];
              const sym = symbols[i % symbols.length];
              const left = (i * 37) % 100;
              const delay = (i * 0.08) % 2;
              return (
                <motion.span
                  key={i}
                  initial={{ y: -50, opacity: 1, x: 0 }}
                  animate={{ y: "100vh", opacity: [1, 1, 0], x: (i % 5) * 20 - 40 }}
                  transition={{
                    duration: 2.5,
                    delay,
                    ease: "easeIn",
                  }}
                  className="absolute font-mono text-xs font-bold text-[var(--neon)]"
                  style={{ left: `${left}%`, top: 0 }}
                >
                  {sym}
                </motion.span>
              );
            })}
          </div>
        )}
      </AnimatePresence>

      <div className="container-max">
        <CyberSectionHeading
          badge={t.ctf.badge}
          heading={t.ctf.heading}
          subheading={t.ctf.subheading}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="terminal-border mx-auto max-w-3xl overflow-hidden rounded-md bg-[#0a0a0a]/90 backdrop-blur-md"
        >
          {/* Terminal header */}
          <div className="flex items-center justify-between border-b border-[var(--neon)]/20 bg-[var(--neon)]/[0.03] px-4 py-2.5">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--neon-soft)]">
              <Terminal className="h-3.5 w-3.5 text-[var(--neon)]" />
              <span>ctf@upin:~/challenge</span>
            </div>
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-[var(--danger)]/70" />
              <div className="h-2.5 w-2.5 rounded-full bg-[var(--amber)]/70" />
              <div className="h-2.5 w-2.5 rounded-full bg-[var(--neon)]/70" />
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* Intro */}
            <p className="mb-5 flex items-start gap-2 font-mono text-sm text-foreground/75">
              <span className="text-[var(--neon)]">{">"}</span>
              <span>{t.ctf.intro}</span>
            </p>

            {/* Encoded value display */}
            <div className="mb-5">
              <div className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[var(--neon-soft)]">
                <Lock className="h-3.5 w-3.5" />
                {t.ctf.encodedLabel}
              </div>
              <div className="terminal-border rounded-md bg-[var(--neon)]/[0.04] p-4 font-mono text-sm text-[var(--neon)] break-all">
                {t.ctf.encodedValue}
              </div>
            </div>

            {/* Hint (toggle) */}
            <AnimatePresence>
              {showHint && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-5 overflow-hidden"
                >
                  <div className="terminal-border rounded-md border-[var(--amber)]/30 bg-[var(--amber)]/[0.05] p-4">
                    <div className="mb-1.5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[var(--amber)]">
                      <Lightbulb className="h-3.5 w-3.5" />
                      Hint
                    </div>
                    <p className="font-mono text-xs leading-relaxed text-foreground/80">
                      {t.ctf.hintMessage}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Solved banner */}
            <AnimatePresence>
              {status === "solved" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="terminal-border mb-5 rounded-md border-[var(--neon)] bg-[var(--neon)]/[0.08] p-4"
                >
                  <div className="flex items-center gap-2 font-mono text-sm font-bold text-[var(--neon)]">
                    <Trophy className="h-4 w-4" />
                    {t.ctf.successTitle}
                  </div>
                  <p className="mt-1.5 font-mono text-xs text-foreground/80">
                    {t.ctf.successMessage}
                  </p>
                  <div className="mt-2 rounded border border-[var(--neon)]/30 bg-[#0a0a0a] px-3 py-1.5 font-mono text-sm text-[var(--neon)]">
                    {t.ctf.flag}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input form */}
            {status !== "solved" && (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[var(--neon-soft)]">
                    <Unlock className="h-3.5 w-3.5" />
                    {t.ctf.inputLabel}
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 font-mono text-sm text-[var(--neon)]">
                      $
                    </span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => {
                        setInput(e.target.value);
                        if (status === "wrong") setStatus("idle");
                      }}
                      placeholder={t.ctf.inputPlaceholder}
                      className={cn(
                        "w-full rounded-md border bg-[#0a0a0a]/80 py-3 pl-8 pr-4 font-mono text-sm text-[var(--neon)] outline-none transition-colors placeholder:text-foreground/30",
                        status === "wrong"
                          ? "border-[var(--danger)] focus:border-[var(--danger)]"
                          : "border-[var(--neon)]/30 focus:border-[var(--neon)]"
                      )}
                      autoComplete="off"
                      spellCheck={false}
                      aria-label={t.ctf.inputLabel}
                    />
                  </div>
                </div>

                {/* Wrong message */}
                <AnimatePresence>
                  {status === "wrong" && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 font-mono text-xs text-[var(--danger)]"
                    >
                      <XCircle className="h-3.5 w-3.5" />
                      {t.ctf.wrongMessage}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-2">
                  <Button
                    type="submit"
                    className="h-10 rounded-md border border-[var(--neon)] bg-[var(--neon)]/15 px-4 font-mono text-sm font-semibold text-[var(--neon)] hover:bg-[var(--neon)]/25 hover:text-[var(--neon)]"
                    data-cursor="pointer"
                  >
                    <Send className="mr-2 h-3.5 w-3.5" />
                    {t.ctf.submit}
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setShowHint((s) => !s)}
                    variant="outline"
                    className="h-10 rounded-md border border-[var(--amber)]/40 bg-transparent px-4 font-mono text-sm font-semibold text-[var(--amber)] hover:bg-[var(--amber)]/10 hover:text-[var(--amber)]"
                    data-cursor="pointer"
                  >
                    <Lightbulb className="mr-2 h-3.5 w-3.5" />
                    {t.ctf.hint}
                  </Button>
                  {attempts > 0 && (
                    <span className="ml-auto font-mono text-xs text-foreground/50">
                      {t.ctf.attemptsLabel}: {attempts}
                    </span>
                  )}
                </div>
              </form>
            )}

            {/* Reset button when solved */}
            {status === "solved" && (
              <Button
                onClick={reset}
                variant="outline"
                className="h-10 rounded-md border border-[var(--neon)]/40 bg-transparent px-4 font-mono text-sm text-[var(--neon)] hover:bg-[var(--neon)]/10"
                data-cursor="pointer"
              >
                <RotateCcw className="mr-2 h-3.5 w-3.5" />
                Try Again
              </Button>
            )}

            {/* Success icon when solved */}
            {status === "solved" && (
              <div className="mt-4 flex items-center gap-2 font-mono text-xs text-[var(--neon)]">
                <CheckCircle2 className="h-4 w-4" />
                <span>Challenge solved. Flag captured.</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
