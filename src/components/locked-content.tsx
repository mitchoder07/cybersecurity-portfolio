"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Unlock, Eye, EyeOff, ShieldAlert, KeyRound } from "lucide-react";

// === SECURITY CLEARANCE SYSTEM ===
// Passwords for different clearance levels.
// To change a password, just update the value below.
const PASSWORDS: Record<string, string> = {
  cgpa: "Cl34r4nc3_L3v3l_5",        // Unlocks CGPA
  classified: "R3d_Th34m_0nly",      // Unlocks classified project details
  contact: "V3r1f13d_Us3r",          // Unlocks direct phone number
};

// Track unlocked state globally so all instances share state
const unlocked = new Set<string>();

type LockedContentProps = {
  /** Which clearance level this content requires */
  level: "cgpa" | "classified" | "contact";
  /** What to show when locked (e.g. "4.27/5.00", "CLASSIFIED", "+234 ***") */
  lockedDisplay: string;
  /** The actual content to reveal when unlocked */
  children: React.ReactNode;
  /** Optional label for the lock */
  label?: string;
};

export function LockedContent({
  level,
  lockedDisplay,
  children,
  label = "CLASSIFIED",
}: LockedContentProps) {
  const [isUnlocked, setIsUnlocked] = useState(unlocked.has(level));
  const [showPrompt, setShowPrompt] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [lockedOut, setLockedOut] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showPrompt && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showPrompt]);

  // Auto-clear error after 2s
  useEffect(() => {
    if (error) {
      const t = setTimeout(() => setError(false), 2000);
      return () => clearTimeout(t);
    }
  }, [error]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (lockedOut) return;

    if (input === PASSWORDS[level]) {
      unlocked.add(level);
      setIsUnlocked(true);
      setShowPrompt(false);
      setInput("");
      setError(false);
      setAttempts(0);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      setError(true);
      setShake(true);
      setInput("");
      setTimeout(() => setShake(false), 500);

      if (newAttempts >= 3) {
        setLockedOut(true);
        setTimeout(() => {
          setLockedOut(false);
          setAttempts(0);
        }, 10000); // 10 second lockout
      }
    }
  };

  // If already unlocked, show content
  if (isUnlocked) {
    return (
      <span className="inline-flex items-center gap-1.5">
        {children}
        <Unlock
          className="h-3.5 w-3.5 text-[var(--neon)] opacity-60"
          aria-label="Decrypted"
        />
      </span>
    );
  }

  return (
    <>
      {/* Locked display */}
      <button
        onClick={() => setShowPrompt(true)}
        className="group inline-flex items-center gap-1.5 rounded border border-[#f59e0b]/30 bg-[#f59e0b]/5 px-2 py-0.5 font-mono text-sm transition-all hover:border-[#f59e0b]/60 hover:bg-[#f59e0b]/10"
        data-cursor="pointer"
        aria-label={`Unlock ${label}`}
      >
        <Lock className="h-3.5 w-3.5 text-[#f59e0b] transition-transform group-hover:scale-110" />
        <span className="text-[#f59e0b] tracking-wider">
          {lockedDisplay}
        </span>
        <span className="text-[#f59e0b]/50 text-[10px] uppercase tracking-wider">
          {label}
        </span>
      </button>

      {/* Password prompt modal */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => !lockedOut && setShowPrompt(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{
                scale: 1,
                y: 0,
                x: shake ? [0, -10, 10, -10, 10, 0] : 0,
              }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: shake ? 0.4 : 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md overflow-hidden rounded-lg border border-[#00ff41]/30 bg-[var(--surface-solid)] shadow-2xl"
              style={{ boxShadow: "0 0 40px rgba(0,255,65,0.15)" }}
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 border-b border-[#00ff41]/20 bg-[#00ff41]/5 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#00ff41]" />
                </div>
                <div className="ml-2 flex items-center gap-2">
                  <KeyRound className="h-3.5 w-3.5 text-[#00ff41]" />
                  <span className="font-mono text-xs text-[#00ff41]">
                    security@clearance:~$ auth --level={level}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                {lockedOut ? (
                  <div className="py-8 text-center">
                    <ShieldAlert className="mx-auto mb-3 h-12 w-12 text-[#ef4444]" />
                    <p className="font-mono text-sm text-[#ef4444]">
                      ACCESS DENIED — TOO MANY ATTEMPTS
                    </p>
                    <p className="mt-2 font-mono text-xs text-[#ef4444]/60">
                      Account locked. Try again in 10 seconds.
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Warning banner */}
                    <div className="mb-4 rounded border border-[#f59e0b]/20 bg-[#f59e0b]/5 p-3">
                      <div className="flex items-start gap-2">
                        <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-[#f59e0b]" />
                        <div>
                          <p className="font-mono text-xs text-[#f59e0b]">
                            AUTHORIZED PERSONNEL ONLY
                          </p>
                          <p className="mt-1 font-mono text-[11px] text-[#f59e0b]/60">
                            This content is protected. Enter your clearance
                            passphrase to decrypt. All access attempts are logged.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Attempts counter */}
                    {attempts > 0 && (
                      <div className="mb-3 text-center font-mono text-[11px] text-[#ef4444]">
                        Failed attempts: {attempts}/3
                      </div>
                    )}

                    <form onSubmit={handleSubmit}>
                      <label className="mb-2 block font-mono text-xs text-[#00ff41]/60">
                        $ Enter passphrase:
                      </label>
                      <input
                        ref={inputRef}
                        type="password"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="••••••••••••"
                        autoFocus
                        className="w-full rounded border border-[#00ff41]/20 bg-[#00ff41]/5 px-3 py-2.5 font-mono text-sm text-[#00ff41] outline-none transition-colors placeholder:text-[#00ff41]/20 focus:border-[#00ff41]/50 focus:bg-[#00ff41]/10"
                        autoComplete="off"
                        spellCheck={false}
                      />

                      {error && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 font-mono text-xs text-[#ef4444]"
                        >
                          ✗ ACCESS DENIED — Invalid passphrase
                        </motion.p>
                      )}

                      <div className="mt-4 flex gap-2">
                        <button
                          type="submit"
                          className="flex-1 rounded border border-[#00ff41]/30 bg-[#00ff41]/10 px-4 py-2 font-mono text-xs text-[#00ff41] transition-all hover:bg-[#00ff41]/20"
                          data-cursor="pointer"
                        >
                          {">"} AUTHENTICATE
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowPrompt(false)}
                          className="rounded border border-[#ef4444]/30 bg-[#ef4444]/5 px-4 py-2 font-mono text-xs text-[#ef4444] transition-all hover:bg-[#ef4444]/10"
                          data-cursor="pointer"
                        >
                          ABORT
                        </button>
                      </div>
                    </form>

                    {/* Hint */}
                    <div className="mt-4 border-t border-[#00ff41]/10 pt-3">
                      <p className="font-mono text-[10px] text-[#00ff41]/30">
                        {"// Hint: Clearance level + tier number. Leet speak required. Example format: W0rd_L3v3l_N"}
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Scanline effect */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,0.02) 2px, rgba(0,255,65,0.02) 4px)",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
