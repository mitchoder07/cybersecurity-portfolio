import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n";
import { CustomCursor } from "@/components/custom-cursor";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Upin — Cybersecurity Engineer | Abdullah Yusuf",
  description:
    "Abdullah Yusuf (Upin) is a cybersecurity engineer and ethical hacker. Penetration testing, cryptography, network security, incident response, and security scripting. I find vulnerabilities before attackers do.",
  keywords: [
    "Upin",
    "Abdullah Yusuf",
    "Cybersecurity Engineer",
    "Ethical Hacker",
    "Penetration Testing",
    "OWASP Top 10",
    "Cryptography",
    "Network Security",
    "SIEM",
    "Incident Response",
    "Python Security Tools",
    "Kali Linux",
    "TryHackMe",
    "HackTheBox",
    "HackerOne",
    "Portfolio",
  ],
  authors: [{ name: "Abdullah Yusuf" }],
  openGraph: {
    title: "Upin — Cybersecurity Engineer",
    description:
      "Cybersecurity engineer and ethical hacker. Penetration testing, cryptography, network security, and incident response.",
    siteName: "Upin",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upin — Cybersecurity Engineer",
    description:
      "Cybersecurity engineer. I find vulnerabilities before attackers do.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${jetbrainsMono.variable} antialiased bg-background text-foreground font-mono`}
      >
        <ThemeProvider>
          <I18nProvider>
            <CustomCursor />
            {children}
            <Toaster />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
