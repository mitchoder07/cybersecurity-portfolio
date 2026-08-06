"use client";

import { useState } from "react";
import Image from "next/image";
import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export default function ResumePage() {
  const { t } = useI18n();
  const [printing, setPrinting] = useState(false);

  const handlePrint = () => {
    setPrinting(true);
    setTimeout(() => {
      window.print();
      setPrinting(false);
    }, 200);
  };

  return (
    <div className="min-h-screen bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto mb-8 flex max-w-4xl items-center justify-between print:hidden">
        <a href="/" className="text-sm text-muted-foreground hover:text-foreground">
          {"<-"} Back to portfolio
        </a>
        <Button onClick={handlePrint} disabled={printing} className="gap-2">
          {printing ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-background/30 border-t-background" />
              Preparing...
            </>
          ) : (
            <>
              <Printer className="h-4 w-4" />
              Print / Save as PDF
            </>
          )}
        </Button>
      </div>

      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 text-black shadow-xl sm:p-12 print:rounded-none print:p-0 print:shadow-none">
        <div className="flex flex-col items-center gap-6 border-b border-gray-200 pb-8 sm:flex-row sm:items-start">
          <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-gray-100 sm:h-40 sm:w-40">
            <Image
              src="/portfolio-images/profile.jpeg"
              alt="Abdullah Yusuf"
              fill
              sizes="160px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h1 className="font-display text-3xl font-bold text-gray-900 sm:text-4xl">
              Abdullah Yusuf
            </h1>
            <p className="mt-1 text-lg font-medium text-gray-600">
              Cybersecurity Engineer
            </p>
            <p className="mt-2 text-sm text-gray-500">Known as Upin · Nigeria</p>
            <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-gray-600 sm:justify-start">
              <a href="mailto:olaniyiaremu2003@gmail.com" className="hover:text-gray-900">
                olaniyiaremu2003@gmail.com
              </a>
              <span className="text-gray-300">|</span>
              <a href="https://github.com/mitchoder07" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                github.com/mitchoder07
              </a>
              <span className="text-gray-300">|</span>
              <span>+234 708 895 5340</span>
            </div>
            <div className="mt-1 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-gray-600 sm:justify-start">
              <a href="https://linkedin.com/in/mitchoder07" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                linkedin.com/in/mitchoder07
              </a>
              <span className="text-gray-300">|</span>
              <a href="https://hackerone.com/mitchoder07" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                hackerone.com/mitchoder07
              </a>
              <span className="text-gray-300">|</span>
              <a href="https://tryhackme.com/p/mitchoder07" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                tryhackme.com/p/mitchoder07
              </a>
            </div>
          </div>
        </div>

        <section className="mt-8">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-900">Summary</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Cybersecurity Engineer and ethical hacker with 5+ years of IT experience. Skilled in penetration testing (OWASP Top 10), cryptography (AES-256, RSA, PKI), network security (Wireshark, firewalls, Cisco), and security scripting (Python, Bash, PowerShell). I find vulnerabilities before attackers do, from reconnaissance to incident response. Seeking roles where I can own both offense and defense.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-900">Skills</h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-700 sm:grid-cols-3">
            <div><span className="font-semibold">Pentesting:</span> OWASP Top 10, Burp Suite, Nmap, Metasploit, SQLmap</div>
            <div><span className="font-semibold">Cryptography:</span> AES-256, RSA, PKI, Hash Functions, Digital Signatures</div>
            <div><span className="font-semibold">Network:</span> Wireshark, Firewalls, VPN, TCP/IP, Cisco, Packet Analysis</div>
            <div><span className="font-semibold">Scripting:</span> Python, Bash, PowerShell, Automation, Custom Tools</div>
            <div><span className="font-semibold">SIEM:</span> Splunk, Log Analysis, Threat Hunting, Incident Response</div>
            <div><span className="font-semibold">Platforms:</span> Kali Linux, Parrot OS, Docker, VirtualBox, TryHackMe, HackTheBox</div>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-900">Experience</h2>
          <div className="space-y-4">
            {t.experience.items.map((item, i) => (
              <div key={i}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-bold text-gray-900">{item.role}</h3>
                  <span className="text-xs text-gray-500">{item.period}</span>
                </div>
                <p className="text-sm font-medium text-gray-600">{item.company}</p>
                <p className="mt-1 text-sm text-gray-700">{item.description}</p>
                <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-gray-700">
                  {item.achievements.map((ach, j) => (
                    <li key={j}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-900">Selected Projects</h2>
          <div className="space-y-2">
            {t.projects.items.slice(0, 6).map((project, i) => (
              <div key={i}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-bold text-gray-900">
                    {project.name}
                    {project.classified && (
                      <span className="ml-2 text-xs font-normal text-amber-600">(In Development)</span>
                    )}
                  </h3>
                  <span className="text-xs text-gray-500">{project.tech.slice(0, 4).join(", ")}</span>
                </div>
                <p className="text-sm text-gray-700">{project.tagline}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-900">Education</h2>
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-sm font-bold text-gray-900">B.Sc. CyberSecurity</h3>
              <span className="text-xs text-gray-500">2020 — 2024</span>
            </div>
            <p className="text-sm font-medium text-gray-600">Al-Hikmah University, Ilorin, Kwara State, Nigeria</p>
            <p className="text-sm text-gray-700">Second Class Honours (Upper Division) · CGPA: 4.27/5.00</p>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-900">Certifications & Training</h2>
          <div className="space-y-1 text-sm text-gray-700">
            {t.certifications.items.map((cert, i) => (
              <div key={i} className="flex flex-wrap items-baseline justify-between gap-2">
                <span><span className="font-semibold">{cert.name}</span> — {cert.issuer}</span>
                <span className="text-xs text-gray-500">{cert.status}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style jsx global>{`
        @media print {
          body { background: white !important; }
          @page { size: A4; margin: 1.5cm; }
          section { page-break-inside: avoid; }
        }
      `}</style>
    </div>
  );
}
