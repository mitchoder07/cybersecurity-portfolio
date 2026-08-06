import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { CyberHero } from "@/components/hero/cyber-hero";
import { LanguageMarquee } from "@/components/sections/language-marquee";
import { CyberTerminal } from "@/components/terminal/cyber-terminal";
import { CyberAbout } from "@/components/sections/cyber-about";
import { CyberSkills } from "@/components/sections/cyber-skills";
import { CyberProjects } from "@/components/sections/cyber-projects";
import { Certifications } from "@/components/sections/certifications";
import { CtfChallenge } from "@/components/sections/ctf-challenge";
import { SecurityTools } from "@/components/sections/security-tools";
import { SecurityFeed } from "@/components/sections/security-feed";
import { CyberExperience } from "@/components/sections/cyber-experience";
import { CyberContact } from "@/components/sections/cyber-contact";
import { CyberFooter } from "@/components/sections/cyber-footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <CyberHero />
        <LanguageMarquee />
        <CyberAbout />
        <CyberSkills />
        <CyberProjects />
        <Certifications />
        <CtfChallenge />
        <SecurityTools />
        <SecurityFeed />
        <CyberExperience />
        <CyberTerminal />
        <CyberContact />
      </main>
      <CyberFooter />
    </div>
  );
}
