"use client";

export function LanguageMarquee() {
  // Security-focused marquee terms
  const items = [
    "Penetration Testing",
    "OWASP Top 10",
    "Cryptography",
    "Network Security",
    "SIEM",
    "Incident Response",
    "Python",
    "Nmap",
    "Wireshark",
    "Metasploit",
    "Burp Suite",
    "Kali Linux",
  ];
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-[var(--neon)]/20 bg-[var(--surface-strong)] py-4">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="font-mono text-base font-semibold text-foreground/65 transition-colors hover:text-[var(--neon)] sm:text-lg">
              {item}
            </span>
            <span className="text-[var(--neon)]">{"//"}</span>
          </div>
        ))}
      </div>
      {/* Edge fades — fade to the theme's surface so terms are readable in both modes */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--surface-strong)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--surface-strong)] to-transparent" />
    </div>
  );
}
