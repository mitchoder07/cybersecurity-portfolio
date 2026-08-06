export type Locale = "en" | "ms" | "ha" | "yo" | "ja" | "ar" | "zh";

export const locales: Locale[] = ["en", "ms", "ha", "yo", "ja", "ar", "zh"];

export const localeMeta: Record<
  Locale,
  { label: string; nativeLabel: string; flag: string; dir: "ltr" | "rtl" }
> = {
  en: { label: "English", nativeLabel: "English", flag: "EN", dir: "ltr" },
  ms: { label: "Malay", nativeLabel: "Bahasa Melayu", flag: "MS", dir: "ltr" },
  ha: { label: "Hausa", nativeLabel: "Hausa", flag: "HA", dir: "ltr" },
  yo: { label: "Yoruba", nativeLabel: "Yorùbá", flag: "YO", dir: "ltr" },
  ja: { label: "Japanese", nativeLabel: "日本語", flag: "JA", dir: "ltr" },
  ar: { label: "Arabic", nativeLabel: "العربية", flag: "AR", dir: "rtl" },
  zh: { label: "Chinese", nativeLabel: "中文", flag: "ZH", dir: "ltr" },
};

export type Translation = {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    certifications: string;
    ctf: string;
    tools: string;
    feed: string;
    experience: string;
    contact: string;
    menu: string;
  };
  hero: {
    badge: string;
    greeting: string;
    name: string;
    akaLabel: string;
    brandName: string;
    title: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
    scroll: string;
    statusSecure: string;
    statusThreat: string;
    statusScan: string;
  };
  terminal: {
    title: string;
    subtitle: string;
    prompt: string;
    welcome: string;
    helpLine1: string;
    helpLine2: string;
    commands: {
      help: string;
      about: string;
      skills: string;
      projects: string;
      experience: string;
      certs: string;
      contact: string;
      clear: string;
      whoami: string;
      ls: string;
      social: string;
      nmap: string;
    };
    outputs: {
      whoami: string;
      ls: string;
      social: string;
      nmap: string;
      unknown: string;
    };
    placeholder: string;
  };
  about: {
    badge: string;
    heading: string;
    p1: string;
    p2: string;
    p3: string;
    highlights: { label: string; value: string }[];
    coreTitle: string;
    coreDesc: string;
    coreItems: { title: string; desc: string }[];
  };
  skills: {
    badge: string;
    heading: string;
    subheading: string;
    categories: {
      pentest: { title: string; items: string[] };
      crypto: { title: string; items: string[] };
      network: { title: string; items: string[] };
      scripting: { title: string; items: string[] };
      siem: { title: string; items: string[] };
      platforms: { title: string; items: string[] };
    };
  };
  projects: {
    badge: string;
    heading: string;
    subheading: string;
    viewCode: string;
    viewLive: string;
    role: string;
    impact: string;
    tech: string;
    featured: string;
    classified: string;
    items: {
      name: string;
      tagline: string;
      description: string;
      role: string;
      impact: string;
      tech: string[];
      image?: string;
      gradient?: string;
      classified?: boolean;
      githubUrl?: string;
      liveUrl?: string;
    }[];
  };
  experience: {
    badge: string;
    heading: string;
    subheading: string;
    items: {
      role: string;
      company: string;
      period: string;
      description: string;
      achievements: string[];
    }[];
  };
  certifications: {
    badge: string;
    heading: string;
    subheading: string;
    items: {
      name: string;
      issuer: string;
      status: string;
      statusType: "completed" | "in-progress" | "planned";
      desc: string;
    }[];
  };
  ctf: {
    badge: string;
    heading: string;
    subheading: string;
    intro: string;
    encodedLabel: string;
    encodedValue: string;
    decodedLabel: string;
    inputLabel: string;
    inputPlaceholder: string;
    submit: string;
    hint: string;
    hintMessage: string;
    successTitle: string;
    successMessage: string;
    flag: string;
    wrongMessage: string;
    attemptsLabel: string;
  };
  tools: {
    badge: string;
    heading: string;
    subheading: string;
    items: { name: string; category: string }[];
  };
  feed: {
    badge: string;
    heading: string;
    subheading: string;
    live: string;
    items: { cve: string; severity: "critical" | "high" | "medium" | "low"; desc: string }[];
  };
  contact: {
    badge: string;
    heading: string;
    subheading: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    orText: string;
    emailMe: string;
    whatsappMe: string;
    followTitle: string;
  };
  footer: {
    tagline: string;
    quote: string;
    builtWith: string;
    rights: string;
    backToTop: string;
    quickLinks: string;
    connect: string;
  };
};

// ==================== ENGLISH ====================
const en: Translation = {
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    certifications: "Certs",
    ctf: "CTF",
    tools: "Arsenal",
    feed: "Threats",
    experience: "Experience",
    contact: "Contact",
    menu: "Menu",
  },
  hero: {
    badge: "Available for security engagements",
    greeting: "Initializing session for",
    name: "Abdullah Yusuf",
    akaLabel: "alias",
    brandName: "Upin",
    title: "Cybersecurity Engineer",
    tagline:
      "I find vulnerabilities before attackers do. From penetration testing to cryptographic analysis, I secure systems end to end.",
    ctaPrimary: "View My Work",
    ctaSecondary: "Launch Terminal",
    stat1Label: "Years IT",
    stat2Label: "Vulns Found",
    stat3Label: "Languages",
    scroll: "Scroll to infiltrate",
    statusSecure: "SECURE",
    statusThreat: "THREAT LEVEL: LOW",
    statusScan: "LAST SCAN: 2 min ago",
  },
  terminal: {
    title: "Interactive Terminal",
    subtitle:
      "This isn't a portfolio. It's a shell. Type a command and probe the system. Every section is a file you can read.",
    prompt: "upin@cyber:~$",
    welcome:
      "Welcome to Upin's cyber terminal. Type 'help' to see available commands.",
    helpLine1: "Available commands:",
    helpLine2: "Tip: commands are case-insensitive. Try 'whoami' to start.",
    commands: {
      help: "Show this help message",
      about: "Read about.md",
      skills: "List skills.json",
      projects: "List projects/",
      experience: "Show experience.log",
      certs: "List certifications.json",
      contact: "Print contact.vcf",
      clear: "Clear the terminal",
      whoami: "Who am I?",
      ls: "List directory contents",
      social: "Show social links",
      nmap: "Simulate a port scan",
    },
    outputs: {
      whoami:
        "Abdullah Yusuf (Upin). Cybersecurity Engineer and ethical hacker with 5+ years in IT. I find vulnerabilities before attackers do, from penetration testing to cryptographic analysis.",
      ls: "about.md skills.json projects/ experience.log certifications.json contact.vcf social.txt",
      social:
        "GitHub: github.com/mitchoder07 · HackerOne: hackerone.com/mitchoder07 · TryHackMe: tryhackme.com/p/mitchoder07 · X: x.com/mitchoder07",
      nmap:
        "Starting Nmap 7.94 scan on target.local\nPORT     STATE    SERVICE\n22/tcp   open     ssh\n80/tcp   open     http\n443/tcp  open     https\n3306/tcp open    mysql\nNmap done: 1 host up scanned in 1.42s",
      unknown: "command not found. Type 'help' for available commands.",
    },
    placeholder: "Type a command and press Enter...",
  },
  about: {
    badge: "About",
    heading: "Security is not a product. It's a process.",
    p1: "I'm Abdullah Yusuf, known as Upin. A cybersecurity engineer and ethical hacker who has spent the last five years securing systems, automating defenses, and finding vulnerabilities before the bad guys do. My work lives at the intersection of offense and defense: I break things to understand them, then build them back stronger. I believe every system is one misconfiguration away from a breach, and my job is to find that gap first.",
    p2: "What sets me apart is that I think like an attacker and defend like an architect. I've run penetration tests against web apps following OWASP Top 10, decrypted and validated cryptographic protocols, automated security workflows with Python, and resolved 200+ IT support tickets during my NYSC year at FUHSI. Whether it's hardening a Linux box or analyzing a packet capture, I bring the same rigor.",
    p3: "When I'm not on a gig, I'm on TryHackMe and HackTheBox sharpening my edge, building custom security tools in Python, and writing scripts that catch what humans miss. I believe the best security engineers are paranoid in the right way. This portfolio is my attempt to show you what that paranoia looks like in practice.",
    highlights: [
      { label: "Years IT", value: "5+" },
      { label: "Vulns Found", value: "50+" },
      { label: "Tickets Resolved", value: "200+" },
      { label: "Languages", value: "7" },
    ],
    coreTitle: "Core Competencies",
    coreDesc: "Offense, defense, and everything between.",
    coreItems: [
      { title: "Penetration Testing", desc: "OWASP Top 10, vulnerability assessment, exploitation, and reporting." },
      { title: "Cryptography", desc: "AES-256, RSA, PKI, hash functions, and secure communication protocols." },
      { title: "Network Security", desc: "Firewalls, VPN, Wireshark, packet analysis, and Cisco device hardening." },
      { title: "Security Scripting", desc: "Python, Bash, PowerShell, and custom security tool development." },
      { title: "Incident Response", desc: "SIEM, log analysis, threat hunting, and digital forensics." },
      { title: "System Hardening", desc: "Linux/Windows hardening, access control, and compliance baselines." },
    ],
  },
  skills: {
    badge: "Skills",
    heading: "Offense and defense, end to end.",
    subheading:
      "I don't pick a side of the kill chain. I cover the whole surface, from reconnaissance to incident response. Here's what I reach for daily.",
    categories: {
      pentest: {
        title: "Pentesting & Vuln",
        items: ["OWASP Top 10", "Burp Suite", "Nmap", "Metasploit", "Nikto", "SQLmap", "Vulnerability Assessment"],
      },
      crypto: {
        title: "Cryptography",
        items: ["AES-256", "RSA", "PKI", "Hash Functions", "Digital Signatures", "Secure Protocols"],
      },
      network: {
        title: "Network Security",
        items: ["Wireshark", "Firewalls", "VPN", "TCP/IP", "Cisco", "Packet Analysis"],
      },
      scripting: {
        title: "Security Scripting",
        items: ["Python", "Bash", "PowerShell", "Scripting", "Automation", "Custom Tools"],
      },
      siem: {
        title: "SIEM & Monitoring",
        items: ["Splunk", "Log Analysis", "Threat Hunting", "SIEM", "Incident Response"],
      },
      platforms: {
        title: "Tools & Platforms",
        items: ["Kali Linux", "Parrot OS", "Git", "Docker", "VirtualBox", "TryHackMe", "HackTheBox"],
      },
    },
  },
  projects: {
    badge: "Selected Work",
    heading: "Projects built, broken, and secured.",
    subheading:
      "A curated selection of security tools, encryption apps, and detection systems. Each one taught me something new about offense and defense.",
    viewCode: "View Code",
    viewLive: "Live Demo",
    role: "Role",
    impact: "Impact",
    tech: "Tech",
    featured: "Featured",
    classified: "Classified",
    items: [
      {
        name: "Crypto Vault",
        tagline: "AES-256 encryption in the browser",
        description:
          "A client-side encryption vault that encrypts and decrypts secrets with AES-256, fully in the browser. Zero data leaves the device. Designed the UX around trust: clear encryption states, copy-to-clipboard, and zero-confusion empty states. A practical demonstration of cryptographic principles applied to a real product.",
        role: "Security Engineer & Developer",
        impact: "Zero-server encryption, clean key-management UX, AES-256-GCM",
        tech: ["AES-256", "Web Crypto API", "JavaScript", "HTML5", "CSS3"],
        image: "/portfolio-images/crypto-vault.jpeg",
        githubUrl: "https://github.com/mitchoder07/cryptoVault",
        liveUrl: "https://crypto-vauult.vercel.app/",
      },
      {
        name: "Cyber Bot",
        tagline: "Cybersecurity Q&A bot for instant threat intel",
        description:
          "A cybersecurity Q&A bot that gives instant answers on common security topics like malware, phishing, and encryption. Designed the conversational UI, the suggested-prompts pattern, and the readable answer cards. Built mobile-first with keyboard-friendly input and a knowledge base covering OWASP fundamentals.",
        role: "Security Engineer & Developer",
        impact: "Instant answers, suggested prompts, OWASP-aware knowledge base",
        tech: ["JavaScript", "HTML5", "CSS3", "Security Concepts"],
        image: "/portfolio-images/cyber-bot.jpg",
        githubUrl: "https://github.com/mitchoder07/cyber-bot",
        liveUrl: "https://cyber-bot-zeta.vercel.app/",
      },
      {
        name: "Cyber-Words Guess",
        tagline: "Security terms word game for training",
        description:
          "A word-guessing game built around cybersecurity terms. Designed the game loop, the on-screen keyboard, and the color-coded feedback states. Shipped as a single-page app with smooth state transitions. Doubles as a fun training tool for learning security vocabulary.",
        role: "Security Engineer & Developer",
        impact: "Game loop, on-screen keyboard, color-coded feedback",
        tech: ["JavaScript", "HTML5", "CSS3", "Security Vocabulary"],
        image: "/portfolio-images/cyber-words.jpg",
        liveUrl: "https://word-guessing-game-nine.vercel.app/",
      },
      {
        name: "Network Scanner",
        tagline: "Python network scanner with port detection",
        description:
          "A custom network scanner written in Python that discovers live hosts on a subnet and detects open ports with service fingerprinting. Built to automate reconnaissance during authorized pentests. Outputs a clean report of hosts, ports, and services for further analysis. Currently in active development.",
        role: "Security Engineer",
        impact: "Automated reconnaissance, port detection, service fingerprinting",
        tech: ["Python", "Sockets", "Threading", "Nmap API"],
        gradient: "linear-gradient(135deg, #00ff41 0%, #00d4ff 100%)",
        classified: true,
      },
      {
        name: "Phishing Detector",
        tagline: "ML-based phishing URL detector",
        description:
          "A machine-learning tool that classifies URLs as phishing or legitimate based on lexical features, domain age, and redirect behavior. Trained on a curated dataset of phishing URLs. Designed to be embedded in browser extensions and email gateways. Currently in the model-tuning phase.",
        role: "Security Engineer",
        impact: "ML classification, feature engineering, browser-embeddable",
        tech: ["Python", "scikit-learn", "pandas", "URL Features"],
        gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
        classified: true,
      },
      {
        name: "Log Analyzer",
        tagline: "SIEM log analysis with anomaly detection",
        description:
          "A SIEM log analysis tool that ingests auth logs, web access logs, and system logs, then flags anomalies like brute-force attempts, lateral movement, and privilege escalation. Built around a configurable rules engine and a statistical baseline. Outputs a threat timeline for incident response teams.",
        role: "Security Engineer",
        impact: "Anomaly detection, threat timeline, rules engine",
        tech: ["Python", "Regex", "Statistics", "SIEM Concepts"],
        gradient: "linear-gradient(135deg, #a855f7 0%, #00d4ff 100%)",
        classified: true,
      },
    ],
  },
  experience: {
    badge: "Experience",
    heading: "Five years of breaking, fixing, and securing.",
    subheading:
      "From university labs to NYSC service and self-taught research. Each role taught me a different facet of the security craft.",
    items: [
      {
        role: "IT Support (NYSC)",
        company: "Federal University of Health Sciences, Ila (FUHSI)",
        period: "2025",
        description:
          "IT support during my NYSC service year. Resolved helpdesk tickets, automated security tasks, and supported staff and students with technical issues.",
        achievements: [
          "Resolved 200+ helpdesk tickets for staff and students",
          "Automated recurring security and IT tasks with Python and Bash",
          "Documented IT and security procedures for the team",
          "Conducted classified red team exercise on university infrastructure — findings classified"
        ],
      },
      {
        role: "Cybersecurity Graduate",
        company: "Al-Hikmah University",
        period: "2024",
        description:
          "Completed B.Sc. CyberSecurity with a CGPA of 4.27/5.00. Covered penetration testing, cryptography, network security, and secure systems design.",
        achievements: [
          "B.Sc. CyberSecurity, CGPA 4.27/5.00",
          "Coursework in cryptography, network security, and digital forensics",
          "Final-year project on cryptographic protocol analysis",
        ],
      },
      {
        role: "AI Intern",
        company: "AI4FS, Summit University",
        period: "2023",
        description:
          "AI for Females in STEM internship. Explored AI fundamentals and applied them to small projects, with an eye toward security applications.",
        achievements: [
          "Completed applied AI curriculum with mentorship",
          "Built small ML demos with Python",
          "Presented final project to cohort",
        ],
      },
      {
        role: "Security Researcher (Self-taught)",
        company: "TryHackMe & HackTheBox",
        period: "2023 - Present",
        description:
          "Active participant on TryHackMe (top 10%) and HackTheBox. Solve CTF challenges, complete learning paths, and sharpen offensive security skills.",
        achievements: [
          "TryHackMe top 10% with completed learning paths",
          "HackTheBox active player with ranked machines",
          "Regular CTF participation across web, crypto, and network categories",
        ],
      },
      {
        role: "Security Scripting (Self-taught)",
        company: "Self-taught",
        period: "2021 - Present",
        description:
          "Building custom security tools in Python, Bash, and PowerShell. Scripts for reconnaissance, log analysis, and automated hardening.",
        achievements: [
          "Built custom network scanner and log analyzer in Python",
          "Automated Linux hardening baselines with Bash",
          "Developed reusable security automation libraries",
        ],
      },
    ],
  },
  certifications: {
    badge: "Certifications",
    heading: "Certifications & Training",
    subheading:
      "Formal credentials and hands-on training. Some earned, some in progress, all part of the journey.",
    items: [
      {
        name: "CompTIA Security+",
        issuer: "CompTIA",
        status: "In Progress",
        statusType: "in-progress",
        desc: "Foundational security certification covering threats, architecture, operations, and risk management.",
      },
      {
        name: "Certified Ethical Hacker (CEH)",
        issuer: "EC-Council",
        status: "Planned",
        statusType: "planned",
        desc: "Hands-on ethical hacking certification covering reconnaissance, exploitation, and post-exploitation.",
      },
      {
        name: "TryHackMe",
        issuer: "TryHackMe",
        status: "Top 10%",
        statusType: "completed",
        desc: "Completed learning paths in Jr Penetration Tester, Web Fundamentals, and Cyber Defense. Top 10% globally.",
      },
      {
        name: "HackTheBox",
        issuer: "HackTheBox",
        status: "Active Player",
        statusType: "completed",
        desc: "Active player ranked on HackTheBox. Completed machines across Linux, Windows, web, and crypto categories.",
      },
      {
        name: "Cisco CCNA",
        issuer: "Cisco",
        status: "Planned",
        statusType: "planned",
        desc: "Cisco Certified Network Associate. Network fundamentals, routing, switching, and security.",
      },
      {
        name: "AWS Security Specialty",
        issuer: "Amazon Web Services",
        status: "Planned",
        statusType: "planned",
        desc: "AWS Certified Security - Specialty. Cloud security, identity, monitoring, and incident response on AWS.",
      },
    ],
  },
  ctf: {
    badge: "CTF Challenge",
    heading: "Think you can hack it?",
    subheading:
      "Decode the Base64 string below and submit the hidden flag. Use the hint if you get stuck. Real hackers read the source.",
    intro: "Our sensors intercepted an encoded transmission. Decode it to reveal the hidden flag.",
    encodedLabel: "Encoded Transmission",
    encodedValue: "RkxBR3t5b3VfZGVjb2RlZF90aGVfY2lwaGVyfQ==",
    decodedLabel: "Expected Decoded Output",
    inputLabel: "Submit Decoded Flag",
    inputPlaceholder: "Enter the decoded flag here...",
    submit: "Submit Flag",
    hint: "Show Hint",
    hintMessage: "Base64 is a binary-to-text encoding. Open your browser console and run: atob('RkxBR3t5b3VfZGVjb2RlZF90aGVfY2lwaGVyfQ==') to decode it instantly.",
    successTitle: "Flag Captured",
    successMessage: "You decoded the cipher. A true hacker's instinct. The flag has been logged.",
    flag: "FLAG{you_decoded_the_cipher}",
    wrongMessage: "Incorrect flag. Try again, or peek at the hint.",
    attemptsLabel: "Attempts",
  },
  tools: {
    badge: "Arsenal",
    heading: "Tools in my arsenal",
    subheading:
      "The everyday toolkit. From reconnaissance to exploitation, these are the weapons I reach for.",
    items: [
      { name: "Nmap", category: "Reconnaissance" },
      { name: "Wireshark", category: "Network Analysis" },
      { name: "Metasploit", category: "Exploitation" },
      { name: "Burp Suite", category: "Web Pentest" },
      { name: "Kali Linux", category: "OS" },
      { name: "Python", category: "Scripting" },
      { name: "Docker", category: "Infrastructure" },
      { name: "Splunk", category: "SIEM" },
      { name: "John the Ripper", category: "Password Cracking" },
      { name: "Hashcat", category: "Password Cracking" },
      { name: "Nikto", category: "Web Scanner" },
      { name: "SQLmap", category: "SQL Injection" },
    ],
  },
  feed: {
    badge: "Threat Feed",
    heading: "Latest threats & CVEs",
    subheading:
      "A live feed of recent CVEs and security advisories. Severity-rated for triage. Mock data for demonstration.",
    live: "LIVE",
    items: [
      { cve: "CVE-2024-3094", severity: "critical", desc: "XZ Utils backdoor in liblzma allowing remote code execution via SSH" },
      { cve: "CVE-2024-21413", severity: "critical", desc: "Microsoft Outlook moniker link RCE bypassing security warnings" },
      { cve: "CVE-2024-23897", severity: "critical", desc: "Jenkins arbitrary file read vulnerability leading to RCE" },
      { cve: "CVE-2024-27198", severity: "critical", desc: "TeamCity authentication bypass allowing admin takeover" },
      { cve: "CVE-2024-1086", severity: "high", desc: "Linux kernel nf_tables local privilege escalation to root" },
      { cve: "CVE-2024-1709", severity: "high", desc: "ConnectWise ScreenConnect auth bypass leading to RCE" },
      { cve: "CVE-2024-21887", severity: "high", desc: "Ivanti Connect Secure command injection chained with CVE-2023-46805" },
      { cve: "CVE-2024-0204", severity: "high", desc: "Fortra GoAnywhere MFT admin authentication bypass" },
      { cve: "CVE-2023-50164", severity: "high", desc: "Apache Struts file upload path traversal leading to RCE" },
      { cve: "CVE-2024-20767", severity: "medium", desc: "Adobe ColdFusion improper access control vulnerability" },
      { cve: "CVE-2024-22004", severity: "medium", desc: "Ivanti Connect Secure XXE in SAML component" },
      { cve: "CVE-2024-1012", severity: "low", desc: "WordPress plugin stored XSS in comment form" },
    ],
  },
  contact: {
    badge: "Contact",
    heading: "Let's secure something together.",
    subheading:
      "Open to penetration testing contracts, security audits, and full-time cybersecurity roles. Tell me what you need defended.",
    nameLabel: "Your name",
    emailLabel: "Email address",
    messageLabel: "Your message",
    namePlaceholder: "Your name",
    emailPlaceholder: "your@email.com",
    messagePlaceholder: "Tell me about your security need, role, or audit scope...",
    send: "Send Message",
    sending: "Transmitting...",
    success: "Message sent. I'll get back to you within 48 hours.",
    orText: "or",
    emailMe: "Email me directly",
    whatsappMe: "Message on WhatsApp",
    followTitle: "Find me on security platforms",
  },
  footer: {
    tagline: "Cybersecurity Engineer. Ethical Hacker. Threat Hunter.",
    quote: "Security is a process, not a product. The best defense is a paranoid mind that tests everything.",
    builtWith: "Built with Next.js, TypeScript, and a lot of caffeine. Stay paranoid.",
    rights: "All rights reserved.",
    backToTop: "Back to top",
    quickLinks: "Quick Links",
    connect: "Connect",
  },
};

// ==================== MALAY ====================
const ms: Translation = {
  nav: {
    home: "Utama",
    about: "Tentang",
    skills: "Kemahiran",
    projects: "Projek",
    certifications: "Sijil",
    ctf: "CTF",
    tools: "Senjata",
    feed: "Ancaman",
    experience: "Pengalaman",
    contact: "Hubungi",
    menu: "Menu",
  },
  hero: {
    badge: "Terbuka untuk kerja keselamatan",
    greeting: "Memulakan sesi untuk",
    name: "Abdullah Yusuf",
    akaLabel: "alias",
    brandName: "Upin",
    title: "Jurutera Keselamatan Siber",
    tagline:
      "Saya mencari kelemahan sebelum penyerang melakukannya. Dari ujian penembusan ke analisis kriptografi, saya selamatkan sistem hujung ke hujung.",
    ctaPrimary: "Lihat Kerja Saya",
    ctaSecondary: "Buka Terminal",
    stat1Label: "Tahun IT",
    stat2Label: "Kelemahan Ditemui",
    stat3Label: "Bahasa",
    scroll: "Tatal untuk menyusup",
    statusSecure: "SELAMAT",
    statusThreat: "TahAP ANCAMAN: RENDAH",
    statusScan: "IMBASAN TERAKHIR: 2 minit lalu",
  },
  terminal: {
    title: "Terminal Interaktif",
    subtitle:
      "Ini bukan portfolio. Ini shell. Taip arahan dan terokai sistem. Setiap bahagian adalah fail yang boleh dibaca.",
    prompt: "upin@cyber:~$",
    welcome:
      "Selamat datang ke terminal siber Upin. Taip 'help' untuk melihat arahan tersedia.",
    helpLine1: "Arahan tersedia:",
    helpLine2: "Tip: arahan tidak sensitif huruf. Cuba 'whoami' untuk mula.",
    commands: {
      help: "Tunjuk mesej bantuan ini",
      about: "Baca about.md",
      skills: "Senarai skills.json",
      projects: "Senarai projects/",
      experience: "Tunjuk experience.log",
      certs: "Senarai certifications.json",
      contact: "Cetak contact.vcf",
      clear: "Kosongkan terminal",
      whoami: "Siapa saya?",
      ls: "Senarai kandungan direktori",
      social: "Tunjuk pautan sosial",
      nmap: "Simulasikan imbasan port",
    },
    outputs: {
      whoami:
        "Abdullah Yusuf (Upin). Jurutera Keselamatan Siber dan penggodam etika dengan 5+ tahun dalam IT. Saya mencari kelemahan sebelum penyerang melakukannya, dari ujian penembusan ke analisis kriptografi.",
      ls: "about.md skills.json projects/ experience.log certifications.json contact.vcf social.txt",
      social:
        "GitHub: github.com/mitchoder07 · HackerOne: hackerone.com/mitchoder07 · TryHackMe: tryhackme.com/p/mitchoder07 · X: x.com/mitchoder07",
      nmap:
        "Memulakan imbasan Nmap 7.94 pada target.local\nPORT     STATE    SERVICE\n22/tcp   open     ssh\n80/tcp   open     http\n443/tcp  open     https\n3306/tcp open    mysql\nNmap selesai: 1 host up diimbas dalam 1.42s",
      unknown: "arahan tidak dijumpai. Taip 'help' untuk arahan tersedia.",
    },
    placeholder: "Taip arahan dan tekan Enter...",
  },
  about: {
    badge: "Tentang",
    heading: "Keselamatan bukan produk. Ia proses.",
    p1: "Saya Abdullah Yusuf, dikenali sebagai Upin. Jurutera keselamatan siber dan penggodam etika yang telah menghabiskan lima tahun lalu mengamankan sistem, mengautomasikan pertahanan, dan mencari kelemahan sebelum pihak jahat melakukannya. Kerja saya berada di persimpangan serangan dan pertahanan: saya rosakkan sesuatu untuk memahaminya, kemudian bina semula dengan lebih kuat.",
    p2: "Apa yang membezakan saya adalah saya berfikir seperti penyerang dan bertahan seperti arkitek. Saya telah menjalankan ujian penembusan terhadap aplikasi web mengikut OWASP Top 10, mengesahkan protokol kriptografi, mengautomasikan aliran kerja keselamatan dengan Python, dan menyelesaikan 200+ tiket sokongan IT semasa tahun NYSC di FUHSI.",
    p3: "Apabila saya tidak bekerja, saya di TryHackMe dan HackTheBox menajamkan kemahiran, membina alat keselamatan tersuai dalam Python, dan menulis skrip yang menangkap apa yang dilepaskan manusia. Portfolio ini adalah cubaan saya untuk menunjukkan kepada anda rupa paranoia yang betul dalam amalan.",
    highlights: [
      { label: "Tahun IT", value: "5+" },
      { label: "Kelemahan Ditemui", value: "50+" },
      { label: "Tiket Diselesaikan", value: "200+" },
      { label: "Bahasa", value: "7" },
    ],
    coreTitle: "Kompetensi Teras",
    coreDesc: "Serangan, pertahanan, dan segala-galanya di antara.",
    coreItems: [
      { title: "Ujian Penembusan", desc: "OWASP Top 10, penilaian kelemahan, eksploitasi, dan pelaporan." },
      { title: "Kriptografi", desc: "AES-256, RSA, PKI, fungsi hash, dan protokol komunikasi selamat." },
      { title: "Keselamatan Rangkaian", desc: "Firewall, VPN, Wireshark, analisis paket, dan pengerasan peranti Cisco." },
      { title: "Skrip Keselamatan", desc: "Python, Bash, PowerShell, dan pembangunan alat keselamatan tersuai." },
      { title: "Tindak Balas Insiden", desc: "SIEM, analisis log, pemburuan ancaman, dan forensik digital." },
      { title: "Pengerasan Sistem", desc: "Pengerasan Linux/Windows, kawalan akses, dan garis dasar pematuhan." },
    ],
  },
  skills: {
    badge: "Kemahiran",
    heading: "Serangan dan pertahanan, hujung ke hujung.",
    subheading:
      "Saya tidak memilih sisi kill chain. Saya meliputi keseluruhan permukaan, dari peninjauan ke tindak balas insiden.",
    categories: {
      pentest: {
        title: "Pentest & Kelemahan",
        items: ["OWASP Top 10", "Burp Suite", "Nmap", "Metasploit", "Nikto", "SQLmap", "Penilaian Kelemahan"],
      },
      crypto: {
        title: "Kriptografi",
        items: ["AES-256", "RSA", "PKI", "Fungsi Hash", "Tandatangan Digital", "Protokol Selamat"],
      },
      network: {
        title: "Keselamatan Rangkaian",
        items: ["Wireshark", "Firewall", "VPN", "TCP/IP", "Cisco", "Analisis Paket"],
      },
      scripting: {
        title: "Skrip Keselamatan",
        items: ["Python", "Bash", "PowerShell", "Skrip", "Automasi", "Alat Tersuai"],
      },
      siem: {
        title: "SIEM & Pemantauan",
        items: ["Splunk", "Analisis Log", "Pemburuan Ancaman", "SIEM", "Tindak Balas Insiden"],
      },
      platforms: {
        title: "Alat & Platform",
        items: ["Kali Linux", "Parrot OS", "Git", "Docker", "VirtualBox", "TryHackMe", "HackTheBox"],
      },
    },
  },
  projects: {
    badge: "Kerja Terpilih",
    heading: "Projek dibina, dirosakkan, dan diamankan.",
    subheading:
      "Pilihan alat keselamatan, aplikasi penyulitan, dan sistem pengesanan. Setiap satu mengajar saya sesuatu yang baru.",
    viewCode: "Lihat Kod",
    viewLive: "Demo Langsung",
    role: "Peranan",
    impact: "Impak",
    tech: "Teknologi",
    featured: "Pilihan",
    classified: "Sulit",
    items: [
      {
        name: "Crypto Vault",
        tagline: "Penyulitan AES-256 dalam pelayar",
        description:
          "Peti penyulitan sisi-klien yang menyulitkan dan menyahsulit rahsia dengan AES-256, sepenuhnya dalam pelayar. Tiada data meninggalkan peranti. UX direka sekitar kepercayaan: keadaan penyulitan jelas, salin-ke-papan keratan, dan keadaan kosong tanpa kekeliruan.",
        role: "Jurutera Keselamatan & Pembangun",
        impact: "Penyulitan tanpa pelayan, UX pengurusan kunci yang bersih, AES-256-GCM",
        tech: ["AES-256", "Web Crypto API", "JavaScript", "HTML5", "CSS3"],
        image: "/portfolio-images/crypto-vault.jpeg",
        githubUrl: "https://github.com/mitchoder07/cryptoVault",
        liveUrl: "https://crypto-vauult.vercel.app/",
      },
      {
        name: "Cyber Bot",
        tagline: "Bot soal-jawab keselamatan siber untuk intel ancaman",
        description:
          "Bot soal-jawab keselamatan siber yang memberikan jawapan serta-merta tentang topik keselamatan biasa seperti malware, phishing, dan penyulitan. UI perbualan, corak cadangan, dan kad jawapan yang boleh dibaca direka.",
        role: "Jurutera Keselamatan & Pembangun",
        impact: "Jawapan serta-merta, cadangan, pangkalan pengetahuan OWASP",
        tech: ["JavaScript", "HTML5", "CSS3", "Konsep Keselamatan"],
        image: "/portfolio-images/cyber-bot.jpg",
        githubUrl: "https://github.com/mitchoder07/cyber-bot",
        liveUrl: "https://cyber-bot-zeta.vercel.app/",
      },
      {
        name: "Cyber-Words Guess",
        tagline: "Permainan teka perkataan istilah keselamatan",
        description:
          "Permainan menebak perkataan dibina sekitar istilah keselamatan siber. Gelung permainan, papan kekunci atas-skrin, dan keadaan maklum balas berwarna-warni direka. Berfungsi sebagai alat latihan untuk pembelajaran perbendaharaan kata keselamatan.",
        role: "Jurutera Keselamatan & Pembangun",
        impact: "Gelung permainan, papan kekunci atas-skrin, maklum balas berwarna",
        tech: ["JavaScript", "HTML5", "CSS3", "Perbendaharaan Kata Keselamatan"],
        image: "/portfolio-images/cyber-words.jpg",
        liveUrl: "https://word-guessing-game-nine.vercel.app/",
      },
      {
        name: "Network Scanner",
        tagline: "Pengimbas rangkaian Python dengan pengesanan port",
        description:
          "Pengimbas rangkaian tersuai ditulis dalam Python yang menemui host hidup pada subnet dan mengesan port terbuka dengan pengesanan servis. Dibina untuk mengautomasikan peninjauan semasa pentest sah.",
        role: "Jurutera Keselamatan",
        impact: "Peninjauan automatik, pengesanan port, pengesanan servis",
        tech: ["Python", "Sockets", "Threading", "Nmap API"],
        gradient: "linear-gradient(135deg, #00ff41 0%, #00d4ff 100%)",
        classified: true,
      },
      {
        name: "Phishing Detector",
        tagline: "Pengesan URL phishing berasaskan ML",
        description:
          "Alat pembelajaran mesin yang mengklasifikasikan URL sebagai phishing atau sah berdasarkan ciri leksikal, umur domain, dan tingkah laku redirect. Dilatih pada dataset URL phishing terkurasi.",
        role: "Jurutera Keselamatan",
        impact: "Pengelasan ML, kejuruteraan ciri, boleh dipasang dalam pelayar",
        tech: ["Python", "scikit-learn", "pandas", "Ciri URL"],
        gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
        classified: true,
      },
      {
        name: "Log Analyzer",
        tagline: "Analisis log SIEM dengan pengesanan anomali",
        description:
          "Alat analisis log SIEM yang menelan log auth, log akses web, dan log sistem, kemudian menandakan anomali seperti percubaan brute-force, pergerakan lateral, dan eskalasi keistimewaan.",
        role: "Jurutera Keselamatan",
        impact: "Pengesanan anomali, garis masa ancaman, enjin peraturan",
        tech: ["Python", "Regex", "Statistik", "Konsep SIEM"],
        gradient: "linear-gradient(135deg, #a855f7 0%, #00d4ff 100%)",
        classified: true,
      },
    ],
  },
  experience: {
    badge: "Pengalaman",
    heading: "Lima tahun menghancurkan, membaiki, dan mengamankan.",
    subheading:
      "Dari makmal universiti ke perkhidmatan NYSC dan penyelidikan kendiri. Setiap peranan mengajar aspek berbeza kerajinan keselamatan.",
    items: [
      {
        role: "Sokongan IT (NYSC)",
        company: "Universiti Sains Kesihatan Persekutuan, Ila (FUHSI)",
        period: "2025",
        description:
          "Sokongan IT semasa tahun perkhidmatan NYSC. Menyelesaikan tiket helpdesk, mengautomasikan tugas keselamatan, dan menyokong staf dan pelajar.",
        achievements: [
          "Menyelesaikan 200+ tiket helpdesk untuk staf dan pelajar",
          "Mengautomasikan tugas keselamatan dan IT berulang dengan Python dan Bash",
          "Mendokumentasikan prosedur IT dan keselamatan untuk pasukan",
          "Menjalankan latihan red team classified ke atas infrastruktur universiti"
        ],
      },
      {
        role: "Siswazah Keselamatan Siber",
        company: "Universiti Al-Hikmah",
        period: "2024",
        description:
          "Menamatkan B.Sc. Keselamatan Siber dengan CGPA 4.27/5.00. Meliputi ujian penembusan, kriptografi, keselamatan rangkaian, dan reka bentuk sistem selamat.",
        achievements: [
          "B.Sc. Keselamatan Siber, CGPA 4.27/5.00",
          "Kursus dalam kriptografi, keselamatan rangkaian, dan forensik digital",
          "Projek tahun akhir tentang analisis protokol kriptografi",
        ],
      },
      {
        role: "Pelatih AI",
        company: "AI4FS, Universiti Summit",
        period: "2023",
        description:
          "Latihan AI untuk Females in STEM. Meneroka asas AI dan mengaplikasikannya ke projek kecil, dengan mata ke arah aplikasi keselamatan.",
        achievements: [
          "Menyempurnakan kurikulum AI terapan dengan bimbingan",
          "Membina demo ML kecil dengan Python",
          "Membentangkan projek akhir kepada kohort",
        ],
      },
      {
        role: "Penyelidik Keselamatan (Kendiri)",
        company: "TryHackMe & HackTheBox",
        period: "2023 - Kini",
        description:
          "Peserta aktif di TryHackMe (top 10%) dan HackTheBox. Menyelesaikan cabaran CTF, melengkapkan laluan pembelajaran, dan menajamkan kemahiran keselamatan menyerang.",
        achievements: [
          "TryHackMe top 10% dengan laluan pembelajaran lengkap",
          "Pemain aktif HackTheBox dengan mesin berkedudukan",
          "Penyertaan CTF biasa merentasi kategori web, crypto, dan rangkaian",
        ],
      },
      {
        role: "Skrip Keselamatan (Kendiri)",
        company: "Kendiri",
        period: "2021 - Kini",
        description:
          "Membina alat keselamatan tersuai dalam Python, Bash, dan PowerShell. Skrip untuk peninjauan, analisis log, dan pengerasan automatik.",
        achievements: [
          "Membina pengimbas rangkaian dan penganalisis log tersuai dalam Python",
          "Mengautomasikan garis dasar pengerasan Linux dengan Bash",
          "Membangunkan pustaka automasi keselamatan boleh guna semula",
        ],
      },
    ],
  },
  certifications: {
    badge: "Sijil",
    heading: "Sijil & Latihan",
    subheading:
      "Kredensial formal dan latihan praktikal. Sebahagiannya diperolehi, sebahagian dalam kemajuan, semua sebahagian daripada perjalanan.",
    items: [
      { name: "CompTIA Security+", issuer: "CompTIA", status: "Dalam Kemajuan", statusType: "in-progress", desc: "Sijil keselamatan asas meliputi ancaman, senibina, operasi, dan pengurusan risiko." },
      { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", status: "Dirancang", statusType: "planned", desc: "Sijil penggodam etika praktikal meliputi peninjauan, eksploitasi, dan pasca-eksploitasi." },
      { name: "TryHackMe", issuer: "TryHackMe", status: "Top 10%", statusType: "completed", desc: "Laluan pembelajaran lengkap dalam Jr Penetration Tester, Web Fundamentals, dan Cyber Defense. Top 10% global." },
      { name: "HackTheBox", issuer: "HackTheBox", status: "Pemain Aktif", statusType: "completed", desc: "Pemain aktif berkedudukan di HackTheBox. Mesin lengkap merentasi kategori Linux, Windows, web, dan crypto." },
      { name: "Cisco CCNA", issuer: "Cisco", status: "Dirancang", statusType: "planned", desc: "Cisco Certified Network Associate. Asas rangkaian, routing, switching, dan keselamatan." },
      { name: "AWS Security Specialty", issuer: "Amazon Web Services", status: "Dirancang", statusType: "planned", desc: "AWS Certified Security - Specialty. Keselamatan awan, identiti, pemantauan, dan tindak balas insiden di AWS." },
    ],
  },
  ctf: {
    badge: "Cabaran CTF",
    heading: "Fikir anda boleh goda?",
    subheading:
      "Nyahkan rentetan Base64 di bawah dan hantar bendera tersembunyi. Gunakan petunjuk jika terkandas. Penggodam sebenar membaca sumber.",
    intro: "Sensor kami telah menangkap transmisi yang dikodkan. Nyahkod untuk mendedahkan bendera tersembunyi.",
    encodedLabel: "Transmisi Dikodkan",
    encodedValue: "RkxBR3t5b3VfZGVjb2RlZF90aGVfY2lwaGVyfQ==",
    decodedLabel: "Output Nyahkod Dijangka",
    inputLabel: "Hantar Bendera Nyahkod",
    inputPlaceholder: "Masukkan bendera nyahkod di sini...",
    submit: "Hantar Bendera",
    hint: "Tunjuk Petunjuk",
    hintMessage: "Base64 ialah pengekodan binari-ke-teks. Buka konsol pelayar dan jalankan: atob('RkxBR3t5b3VfZGVjb2RlZF90aGVfY2lwaGVyfQ==') untuk nyahkod.",
    successTitle: "Bendera Ditangkap",
    successMessage: "Anda telah menyahkod sifer. Insting penggodam sebenar. Bendera telah direkodkan.",
    flag: "FLAG{you_decoded_the_cipher}",
    wrongMessage: "Bendera salah. Cuba lagi, atau lihat petunjuk.",
    attemptsLabel: "Cubaan",
  },
  tools: {
    badge: "Senjata",
    heading: "Alat dalam senjata saya",
    subheading:
      "Kit alat harian. Dari peninjauan ke eksploitasi, inilah senjata yang saya gunakan.",
    items: [
      { name: "Nmap", category: "Peninjauan" },
      { name: "Wireshark", category: "Analisis Rangkaian" },
      { name: "Metasploit", category: "Eksploitasi" },
      { name: "Burp Suite", category: "Pentest Web" },
      { name: "Kali Linux", category: "OS" },
      { name: "Python", category: "Skrip" },
      { name: "Docker", category: "Infrastruktur" },
      { name: "Splunk", category: "SIEM" },
      { name: "John the Ripper", category: "Pecah Kata Laluan" },
      { name: "Hashcat", category: "Pecah Kata Laluan" },
      { name: "Nikto", category: "Pengimbas Web" },
      { name: "SQLmap", category: "Suntikan SQL" },
    ],
  },
  feed: {
    badge: "Suapan Ancaman",
    heading: "Ancaman & CVE terkini",
    subheading:
      "Suapan langsung CVE terkini dan nasihat keselamatan. Dinilaikan mengikut keterukan untuk triaj. Data mock untuk demonstrasi.",
    live: "LANGSUNG",
    items: [
      { cve: "CVE-2024-3094", severity: "critical", desc: "Pintu belakang XZ Utils dalam liblzma membenarkan RCE melalui SSH" },
      { cve: "CVE-2024-21413", severity: "critical", desc: "Microsoft Outlook moniker link RCE memintas amaran keselamatan" },
      { cve: "CVE-2024-23897", severity: "critical", desc: "Jenkins kelemahan bacaan fail sewenang-wenangnya membawa ke RCE" },
      { cve: "CVE-2024-27198", severity: "critical", desc: "Pintipan pengesahan TeamCity membenarkan rampasan admin" },
      { cve: "CVE-2024-1086", severity: "high", desc: "Linux kernel nf_tables eskalasi keistimewaan tempatan ke root" },
      { cve: "CVE-2024-1709", severity: "high", desc: "ConnectWise ScreenConnect pintipan pengesahan membawa ke RCE" },
      { cve: "CVE-2024-21887", severity: "high", desc: "Ivanti Connect Secure suntikan arahan dirantai dengan CVE-2023-46805" },
      { cve: "CVE-2024-0204", severity: "high", desc: "Fortra GoAnywhere MFT pintipan pengesahan admin" },
      { cve: "CVE-2023-50164", severity: "high", desc: "Apache Struts muat naik fail traversal laluan membawa ke RCE" },
      { cve: "CVE-2024-20767", severity: "medium", desc: "Adobe ColdFusion kelemahan kawalan akses tidak wajar" },
      { cve: "CVE-2024-22004", severity: "medium", desc: "Ivanti Connect Secure XXE dalam komponen SAML" },
      { cve: "CVE-2024-1012", severity: "low", desc: "WordPress plugin stored XSS dalam borang komen" },
    ],
  },
  contact: {
    badge: "Hubungi",
    heading: "Mari amankan sesuatu bersama.",
    subheading:
      "Terbuka kepada kontrak ujian penembusan, audit keselamatan, dan peranan keselamatan siber sepenuh masa.",
    nameLabel: "Nama anda",
    emailLabel: "Alamat emel",
    messageLabel: "Mesej anda",
    namePlaceholder: "Nama anda",
    emailPlaceholder: "your@email.com",
    messagePlaceholder: "Beritahu saya keperluan keselamatan, peranan, atau skop audit anda...",
    send: "Hantar Mesej",
    sending: "Menghantar...",
    success: "Mesej dihantar. Saya akan menghubungi anda dalam 48 jam.",
    orText: "atau",
    emailMe: "Emel saya terus",
    whatsappMe: "Mesej di WhatsApp",
    followTitle: "Cari saya di platform keselamatan",
  },
  footer: {
    tagline: "Jurutera Keselamatan Siber. Penggodam Etika. Pemburu Ancaman.",
    quote: "Keselamatan adalah proses, bukan produk. Pertahanan terbaik ialah minda paranoid yang menguji segalanya.",
    builtWith: "Dibina dengan Next.js, TypeScript, dan banyak kafein. Kekal paranoid.",
    rights: "Hak cipta terpelihara.",
    backToTop: "Kembali ke atas",
    quickLinks: "Pautan Pantas",
    connect: "Hubung",
  },
};

// ==================== HAUSA ====================
const ha: Translation = {
  nav: {
    home: "Gida",
    about: "Game da",
    skills: "Kwarewa",
    projects: "Ayyuka",
    certifications: "Takaddun",
    ctf: "CTF",
    tools: "Makamai",
    feed: "Barazana",
    experience: "Kwarewa",
    contact: "Tuntuɓar",
    menu: "Menu",
  },
  hero: {
    badge: "Budadden ayyukan tsaro",
    greeting: "Fara zama don",
    name: "Abdullah Yusuf",
    akaLabel: "suna",
    brandName: "Upin",
    title: "Injiniyan Tsaron Cyber",
    tagline:
      "Ina neman raunin kafin masu kai hari su same shi. Daga gwajin shiga zuwa nazarin cryptographic, na tsara tsarin daga ƙarshe zuwa ƙarshe.",
    ctaPrimary: "Duba Aikina",
    ctaSecondary: "Buga Terminal",
    stat1Label: "Shekaru IT",
    stat2Label: "Raunin Da aka Same",
    stat3Label: "Harsuna",
    scroll: "Gungura zuwa shiga",
    statusSecure: "LAFIYA",
    statusThreat: "MATAKIN BARAZANA: KARAMA",
    statusScan: "SCAN NA ƘARSHE: mintuna 2 da suka wuce",
  },
  terminal: {
    title: "Terminal Mai Ma'amala",
    subtitle:
      "Wannan ba portfolio ba ne. Shi ne shell. Rubuta umarni ka bincika tsarin. Kowane sashe fayye ne da za ka iya karantawa.",
    prompt: "upin@cyber:~$",
    welcome:
      "Barka da zuwa cyber terminal na Upin. Rubuta 'help' don ganin umarnin da ke akwai.",
    helpLine1: "Umarnin da ke akwai:",
    helpLine2: "Tip: umarni ba su nuna bambanci ga haruffa. Gwada 'whoami' don farawa.",
    commands: {
      help: "Nuna wannan saƙon taimako",
      about: "Karanta about.md",
      skills: "Lissafa skills.json",
      projects: "Lissafa projects/",
      experience: "Nuna experience.log",
      certs: "Lissafa certifications.json",
      contact: "Bugawa contact.vcf",
      clear: "Goge terminal",
      whoami: "Wanene ni?",
      ls: "Lissafa abubuwan da ke cikin babban fayil",
      social: "Nuna hanyoyin sadarwar zamantakewa",
      nmap: "Kwaikwayi scan na tashar",
    },
    outputs: {
      whoami:
        "Abdullah Yusuf (Upin). Injiniyan Tsaron Cyber kuma ɗan'fari mai tunani mai kyau tare da shekaru 5+ a IT. Ina neman raunin kafin masu kai hari, daga gwajin shiga zuwa nazarin cryptographic.",
      ls: "about.md skills.json projects/ experience.log certifications.json contact.vcf social.txt",
      social:
        "GitHub: github.com/mitchoder07 · HackerOne: hackerone.com/mitchoder07 · TryHackMe: tryhackme.com/p/mitchoder07 · X: x.com/mitchoder07",
      nmap:
        "Fara Nmap 7.94 scan akan target.local\nPORT     STATE    SERVICE\n22/tcp   open     ssh\n80/tcp   open     http\n443/tcp  open     https\n3306/tcp open    mysql\nNmap gama: 1 host up an scan a cikin 1.42s",
      unknown: "an sami ba umarni ba. Rubuta 'help' don umarnin da ke akwai.",
    },
    placeholder: "Rubuta umarni ka danna Enter...",
  },
  about: {
    badge: "Game da",
    heading: "Tsaro ba kayan aiki ba ne. Yana tsari ne.",
    p1: "Ni Abdullah Yusuf ne, wanda aka fi sani da Upin. Injiniyan tsaron cyber kuma ɗan'fari mai tunani wanda ya shafe shekaru biyar na ƙarshe yana tsaron tsarin, atomatik kariya, da neman raunin kafin mugu ya same shi. Aikina yana tsakanin farmaki da kariya: na rushe abubuwa don fahimtar su, sa'an nan na gina su suka fi ƙarfi.",
    p2: "Abin da ya bambanta ni shine ina tunanin kamar mai farmaki kuma ina karewa kamar mai gine-gine. Na gudanar da gwajin shiga akan manhajar yanar gizo bisa OWASP Top 10, na tabbatar da tsarin cryptographic, na atomatik ayyukan tsaro da Python, kuma na waraka tikiti 200+ na tallafin IT a lokacin NYSC na a FUHSI.",
    p3: "Lokacin da ban aikin yi ba, ina TryHackMe da HackTheBox ina ƙwarewa, gina kayan aikin tsaro na musamman da Python, da rubuta rubutun da ke kamawa abin da mutane suka rasa. Ina tsammani mafi kyawun injiniyoyin tsaro suna da tsoro a hanya madaidaiciya. Wannan portfolio ƙoƙata ne na nuna muku yadda wannan tsoro yake a aikace.",
    highlights: [
      { label: "Shekaru IT", value: "5+" },
      { label: "Raunin Da aka Same", value: "50+" },
      { label: "Tikiti Da aka Waraka", value: "200+" },
      { label: "Harsuna", value: "7" },
    ],
    coreTitle: "Babban Kwarewa",
    coreDesc: "Farmaki, kariya, da komai tsakaninsu.",
    coreItems: [
      { title: "Gwajin Shiga", desc: "OWASP Top 10, kimanta raunin, amfani, da bayar da rahoto." },
      { title: "Cryptography", desc: "AES-256, RSA, PKI, ayyukan hash, da tsarin sadarwa mai tsaro." },
      { title: "Tsaron Cibiyar", desc: "Firewalls, VPN, Wireshark, nazarin fakiti, da ƙarfafa na'urar Cisco." },
      { title: "Rubutun Tsaro", desc: "Python, Bash, PowerShell, da haɓaka kayan aikin tsaro na musamman." },
      { title: "Amsa Lamari", desc: "SIEM, nazarin log, farautar barazana, da binciken shaida na dijital." },
      { title: "Ƙarfafa Tsarin", desc: "Ƙarfafa Linux/Windows, kula da damar shiga, da ƙa'idodin biyayya." },
    ],
  },
  skills: {
    badge: "Kwarewa",
    heading: "Farmaki da kariya, daga ƙarshe zuwa ƙarshe.",
    subheading:
      "Ba zan zaɓi ɓangaren kill chain ba. Ina rufe duka, daga bincike zuwa amsa lamari.",
    categories: {
      pentest: {
        title: "Pentest & Raunin",
        items: ["OWASP Top 10", "Burp Suite", "Nmap", "Metasploit", "Nikto", "SQLmap", "Kimanta Raunin"],
      },
      crypto: {
        title: "Cryptography",
        items: ["AES-256", "RSA", "PKI", "Ayyukan Hash", "Sanya Hannu na Dijital", "Tsarin Tsaro"],
      },
      network: {
        title: "Tsaron Cibiyar",
        items: ["Wireshark", "Firewalls", "VPN", "TCP/IP", "Cisco", "Nazarin Fakiti"],
      },
      scripting: {
        title: "Rubutun Tsaro",
        items: ["Python", "Bash", "PowerShell", "Rubutun", "Atomatik", "Kayan Aiki Na Musamman"],
      },
      siem: {
        title: "SIEM & Kulawa",
        items: ["Splunk", "Nazarin Log", "Farautar Barazana", "SIEM", "Amsa Lamari"],
      },
      platforms: {
        title: "Kayan Aiki & Dandamali",
        items: ["Kali Linux", "Parrot OS", "Git", "Docker", "VirtualBox", "TryHackMe", "HackTheBox"],
      },
    },
  },
  projects: {
    badge: "Ayyukan Da aka Zaɓa",
    heading: "Ayyukan da aka gina, suka lalace, kuma suka tsara.",
    subheading:
      "Zaɓin kayan aikin tsaro, manhajar encryption, da tsarin gano abubuwa. Kowane ɗaya ya koya min wani abu sabo.",
    viewCode: "Duba Code",
    viewLive: "Demo Live",
    role: "Aiki",
    impact: "Tasiri",
    tech: "Tech",
    featured: "Na Musamman",
    classified: "Sirri",
    items: [
      {
        name: "Crypto Vault",
        tagline: "AES-256 encryption a cikin browser",
        description:
          "Akwal encryption na gefen-aba wanda ke rufewa da buɗe asiri da AES-256, gaba ɗaya a cikin browser. Babu bayanan da ya fita daga na'urar. An tsara UX a kewayen amincewa: yanayin encryption a bayyane, kwafi-zuwa-clipboard, da yanayin gauraye babu.",
        role: "Injiniyan Tsaro & Mai Haɓaka",
        impact: "Encryption ba tare da uwar garke ba, tsabta UX na kula da maɓalli, AES-256-GCM",
        tech: ["AES-256", "Web Crypto API", "JavaScript", "HTML5", "CSS3"],
        image: "/portfolio-images/crypto-vault.jpeg",
        githubUrl: "https://github.com/mitchoder07/cryptoVault",
        liveUrl: "https://crypto-vauult.vercel.app/",
      },
      {
        name: "Cyber Bot",
        tagline: "Bot na Q&A na tsaron cyber don intel na barazana",
        description:
          "Bot na Q&A na tsaron cyber wanda ke bayar da amsa nan da nan akan batutuwan tsaro na yau da kullun kamar malware, phishing, da encryption. An tsara UI na tattaunawa, tsarin shawarwari, da katunan amsa da za a iya karantawa.",
        role: "Injiniyan Tsaro & Mai Haɓaka",
        impact: "Amsa nan da nan, shawarwari, tushe na ilimin OWASP",
        tech: ["JavaScript", "HTML5", "CSS3", "Tushen Tsaro"],
        image: "/portfolio-images/cyber-bot.jpg",
        githubUrl: "https://github.com/mitchoder07/cyber-bot",
        liveUrl: "https://cyber-bot-zeta.vercel.app/",
      },
      {
        name: "Cyber-Words Guess",
        tagline: "Wasan kalmar kalmomin tsaro don horo",
        description:
          "Wasan jin kallon kalma da aka gina a kewayen kalmomin tsaron cyber. An tsara zagayowar wasan, madannai akan-allon, da yanayin amsa mai launi. Ya zama kayan horo na nishaɗi don koyon kalmomin tsaro.",
        role: "Injiniyan Tsaro & Mai Haɓaka",
        impact: "Zagayowar wasan, madannai akan-allon, amsa mai launi",
        tech: ["JavaScript", "HTML5", "CSS3", "Kalmomin Tsaro"],
        image: "/portfolio-images/cyber-words.jpg",
        liveUrl: "https://word-guessing-game-nine.vercel.app/",
      },
      {
        name: "Network Scanner",
        tagline: "Mai binciken cibiyar Python tare da gano tashar",
        description:
          "Mai binciken cibiyar na musamman da aka rubuta a Python wanda ke gano masu haye akan subnet kuma yana gano tashoshi buɗe tare da sabis na fingerprinting. An gina don atomatik bincike a lokacin pentest da aka ba da izini.",
        role: "Injiniyan Tsaro",
        impact: "Bincike na atomatik, gano tashar, sabis na fingerprinting",
        tech: ["Python", "Sockets", "Threading", "Nmap API"],
        gradient: "linear-gradient(135deg, #00ff41 0%, #00d4ff 100%)",
        classified: true,
      },
      {
        name: "Phishing Detector",
        tagline: "Mai gano URL na phishing na ML",
        description:
          "Kayan aikin koyo na inji wanda ke rarraba URL a matsayin phishing ko halattaccen bisa ga fasalin lexical, shekarar yanki, da halayen redirect. An horar da shi akan dataset na URL ɗin phishing da aka zaɓa.",
        role: "Injiniyan Tsaro",
        impact: "Rarraba ML, injiniyan fasali, za a iya shigar a cikin browser",
        tech: ["Python", "scikit-learn", "pandas", "Fasalin URL"],
        gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
        classified: true,
      },
      {
        name: "Log Analyzer",
        tagline: "Nazarin log na SIEM tare da gano wani abu",
        description:
          "Kayakin nazarin log na SIEM wanda ke shan logs na auth, logs na damar yanar gizo, da logs na tsarin, sa'an nan kuma yana nuna abubuwa ba daidai ba kamar ƙoƙarin brute-force, motsi na gefe, da ɗaukaka gata.",
        role: "Injiniyan Tsaro",
        impact: "Gano wani abu, lokacin barazana, injiniyan ƙa'ida",
        tech: ["Python", "Regex", "Kididdiga", "Tushen SIEM"],
        gradient: "linear-gradient(135deg, #a855f7 0%, #00d4ff 100%)",
        classified: true,
      },
    ],
  },
  experience: {
    badge: "Kwarewa",
    heading: "Shekaru biyar na rushe, gyara, da tsara.",
    subheading:
      "Daga dakunan gwaje-gwaje na jami'a zuwa hidimar NYSC da bincike na kai. Kowane matsayi ya koya min wani ɓangare na aikin tsaro.",
    items: [
      {
        role: "Tallafin IT (NYSC)",
        company: "Jami'ar Kimiyyar Lafiya ta Tarayya, Ila (FUHSI)",
        period: "2025",
        description:
          "Tallafin IT a lokacin shekarar hidimar NYSC. Waraka tikiti na helpdesk, atomatik ayyukan tsaro, da tallafawa ma'aikata da ɗalibai.",
        achievements: [
          "Waraka tikiti 200+ na helpdesk don ma'aikata da ɗalibai",
          "Atomatik ayyukan tsaro da IT na maimaitawa da Python da Bash",
          "Rubuta takardun tsari na IT da tsaro ga ƙungiyar",
        ],
      },
      {
        role: "Digiri na Tsaron Cyber",
        company: "Jami'ar Al-Hikmah",
        period: "2024",
        description:
          "Kammala B.Sc. Tsaron Cyber tare da CGPA 4.27/5.00. Ya ƙunshi gwajin shiga, cryptography, tsaron cibiyar, da tsara tsarin tsaro.",
        achievements: [
          "B.Sc. Tsaron Cyber, CGPA 4.27/5.00",
          "Darasi a cryptography, tsaron cibiyar, da binciken shaida na dijital",
          "Aikin shekara ta ƙarshe akan nazarin tsarin cryptographic",
        ],
      },
      {
        role: "Mai Horarwa na AI",
        company: "AI4FS, Jami'ar Summit",
        period: "2023",
        description:
          "Horarwa na AI for Females in STEM. Bincika asalin AI kuma aka yi amfani da shi akan ƙananan ayyuka, tare da idan kan aikace-aikacen tsaro.",
        achievements: [
          "Kammala manhajar AI ta aikace tare da shawara",
          "Gina ƙananan demo na ML da Python",
          "Gabatar da aikin ƙarshe ga ƙungiyar",
        ],
      },
      {
        role: "Mai Binciken Tsaro (Kai)",
        company: "TryHackMe & HackTheBox",
        period: "2023 - Yanzu",
        description:
          "Mai shiga a TryHackMe (top 10%) da HackTheBox. Waraka kalubalen CTF, kammala hanyoyin koyo, da ƙwarewa a ƙwarewar tsaro na kai farmaki.",
        achievements: [
          "TryHackMe top 10% tare da kammala hanyoyin koyo",
          "Mai kunnawa mai aiki a HackTheBox tare da injina masu matsayi",
          "Shiga CTF na yau da kullun a cikin yanar gizo, crypto, da cibiyar",
        ],
      },
      {
        role: "Rubutun Tsaro (Kai)",
        company: "Kai",
        period: "2021 - Yanzu",
        description:
          "Gina kayan aikin tsaro na musamman a Python, Bash, da PowerShell. Rubutun don bincike, nazarin log, da ƙarfafa atomatik.",
        achievements: [
          "Gina mai binciken cibiyar na musamman da mai nazarin log a Python",
          "Atomatik ƙa'idodin ƙarfafa Linux tare da Bash",
          "Haɓaka dakunan karatu na atomatik tsaro da za a iya sake amfani da su",
        ],
      },
    ],
  },
  certifications: {
    badge: "Takaddun",
    heading: "Takaddun & Horo",
    subheading:
      "Takardun shaidar yau da kullun da horo na aikace. Wasu aka samu, wasu ana ci gaba, duka wani ɓangare ne na tafiya.",
    items: [
      { name: "CompTIA Security+", issuer: "CompTIA", status: "Ana Ci Gaba", statusType: "in-progress", desc: "Takardar shaidar tsaro ta asali wacce ke rufe barazana, gine-gine, ayyuka, da kula da haɗari." },
      { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", status: "An Tsara", statusType: "planned", desc: "Takardar shaidar ɗan'fari mai kyau wacce ke rufe bincike, amfani, da kuma bayan amfani." },
      { name: "TryHackMe", issuer: "TryHackMe", status: "Top 10%", statusType: "completed", desc: "Kammala hanyoyin koyo a Jr Penetration Tester, Web Fundamentals, da Cyber Defense. Top 10% a duniya." },
      { name: "HackTheBox", issuer: "HackTheBox", status: "Mai Kunna Mai Aiki", statusType: "completed", desc: "Mai kunnawa mai aqi a matsayi akan HackTheBox. Injina da aka kammala a cikin Linux, Windows, web, da crypto." },
      { name: "Cisco CCNA", issuer: "Cisco", status: "An Tsara", statusType: "planned", desc: "Cisco Certified Network Associate. Asalin cibiyar, routing, switching, da tsaro." },
      { name: "AWS Security Specialty", issuer: "Amazon Web Services", status: "An Tsara", statusType: "planned", desc: "AWS Certified Security - Specialty. Tsaron girgije, ainihi, kulawa, da amsa lamari akan AWS." },
    ],
  },
  ctf: {
    badge: "Kalubalen CTF",
    heading: "Kana tunanin za ka iya yin hacker?",
    subheading:
      "Ka waraka jijiyar Base64 da ke ƙasa ka gabatar da tutar da aka ɓoye. Yi amfani da alamar idan ka makale. Manyan 'yan hacker suna karanta tushe.",
    intro: "Na'urorinmu sun kama watsa da aka lulluɓe. Ka waraka ka bayyana tutar da aka ɓoye.",
    encodedLabel: "Watsa Da aka Lulluɓe",
    encodedValue: "RkxBR3t5b3VfZGVjb2RlZF90aGVfY2lwaGVyfQ==",
    decodedLabel: "Amsar Waraka Da Aka Tsara",
    inputLabel: "Ka Gabatar Da Tutar Da aka Waraka",
    inputPlaceholder: "Ka shigar da tutar da aka waraka anan...",
    submit: "Ka Gabatar Da Tuta",
    hint: "Nuna Alama",
    hintMessage: "Base64 tsari ne na binary-zuwa-text. Ka buɗe konsol ɗin browser ka gudanar: atob('RkxBR3t5b3VfZGVjb2RlZF90aGVfY2lwaGVyfQ==') don warakawa nan take.",
    successTitle: "An Kama Tuta",
    successMessage: "Ka waraka cipher. Hankalin hacker na gaskiya. An rubuta tutar.",
    flag: "FLAG{you_decoded_the_cipher}",
    wrongMessage: "Tuta ba daidai ba ne. Ka sake gwada, ko ka duba alamar.",
    attemptsLabel: "Ƙoƙari",
  },
  tools: {
    badge: "Makamai",
    heading: "Kayan aiki a cikin makamai na",
    subheading:
      "Kayan aikin kullum. Daga bincike zuwa amfani, waɗannan suke makaman da nake amfani da su.",
    items: [
      { name: "Nmap", category: "Bincike" },
      { name: "Wireshark", category: "Nazarin Cibiyar" },
      { name: "Metasploit", category: "Amfani" },
      { name: "Burp Suite", category: "Pentest Yanar Gizo" },
      { name: "Kali Linux", category: "OS" },
      { name: "Python", category: "Rubutun" },
      { name: "Docker", category: "Infra" },
      { name: "Splunk", category: "SIEM" },
      { name: "John the Ripper", category: "Rushewar Kalmar Sirri" },
      { name: "Hashcat", category: "Rushewar Kalmar Sirri" },
      { name: "Nikto", category: "Mai Binciken Yanar Gizo" },
      { name: "SQLmap", category: "Allurar SQL" },
    ],
  },
  feed: {
    badge: "Tashar Barazana",
    heading: "Sabbin barazana & CVEs",
    subheading:
      "Tashar kai tsaye na sabbin CVEs da shawarwari na tsaro. An kimanta matakai don triage. Bayanan mock don nuna.",
    live: "KAI TSAYE",
    items: [
      { cve: "CVE-2024-3094", severity: "critical", desc: "XZ Utils baya kofofin a cikin liblzma yana bada damar RCE ta hanyar SSH" },
      { cve: "CVE-2024-21413", severity: "critical", desc: "Microsoft Outlook moniker link RCE yana wuce gudanarwar tsaro" },
      { cve: "CVE-2024-23897", severity: "critical", desc: "Jenkins raunin karanta fayil ba daidai ba yana kaiwa RCE" },
      { cve: "CVE-2024-27198", severity: "critical", desc: "TeamCity ɓatarwar tabbatarwa tana bada damar mamaye admin" },
      { cve: "CVE-2024-1086", severity: "high", desc: "Linux kernel nf_tables ɗaukaka gata ta gida zuwa root" },
      { cve: "CVE-2024-1709", severity: "high", desc: "ConnectWise ScreenConnect ɓatarwar tabbatarwa tana kaiwa RCE" },
      { cve: "CVE-2024-21887", severity: "high", desc: "Ivanti Connect Secure allurar umarni tare da CVE-2023-46805" },
      { cve: "CVE-2024-0204", severity: "high", desc: "Fortra GoAnywhere MFT ɓatarwar tabbatarwar admin" },
      { cve: "CVE-2023-50164", severity: "high", desc: "Apache Struts upload fayil traversal hanya tana kaiwa RCE" },
      { cve: "CVE-2024-20767", severity: "medium", desc: "Adobe ColdFusion raunin kula da damar ba daidai ba" },
      { cve: "CVE-2024-22004", severity: "medium", desc: "Ivanti Connect Secure XXE a cikin sashen SAML" },
      { cve: "CVE-2024-1012", severity: "low", desc: "WordPress plugin stored XSS a cikin fom ɗin sharhi" },
    ],
  },
  contact: {
    badge: "Tuntuɓar",
    heading: "Mu tsara wani abu tare.",
    subheading:
      "Budaddeniyar ga kwangilar gwajin shiga, binciken tsaro, da cikakken lokaci na matsayin tsaron cyber.",
    nameLabel: "Sunanka",
    emailLabel: "Adiresin imel",
    messageLabel: "Saƙonka",
    namePlaceholder: "Sunanka",
    emailPlaceholder: "your@email.com",
    messagePlaceholder: "Faɗa min abin tsaron da kake buƙata, matsayi, ko zane na bincike...",
    send: "Aika Saƙon",
    sending: "Ana Aikawa...",
    success: "An aika saƙon. Zan dawo maka cikin awanni 48.",
    orText: "ko",
    emailMe: "Imel ni kai tsaye",
    whatsappMe: "Saƙo akan WhatsApp",
    followTitle: "Sani ni akan dandamalin tsaro",
  },
  footer: {
    tagline: "Injiniyan Tsaron Cyber. Ɗan'fari Mai Tunani. Mai Farautar Barazana.",
    quote: "Tsaro tsari ne, ba kayan aiki ba. Mafi kyawun kariya shine hankali mai tsoro wanda ke gwada komai.",
    builtWith: "An gina da Next.js, TypeScript, da yawan kafein. Kasance mai tsoro.",
    rights: "Dukkan haƙƙoƙin an adana.",
    backToTop: "Komawa sama",
    quickLinks: "Hanyoyi Masu Sauƙi",
    connect: "Haɗa",
  },
};

// ==================== YORUBA ====================
const yo: Translation = {
  nav: {
    home: "Ile",
    about: "Nipa",
    skills: "Agbárí",
    projects: "Iṣẹ́",
    certifications: "Ẹri",
    ctf: "CTF",
    tools: "Ohun Ìjà",
    feed: "Irokeke",
    experience: "Irirí",
    contact: "Íkásọ",
    menu: "Atẹ̀jà",
  },
  hero: {
    badge: "Pípàdé fún iṣẹ́ ààbọ",
    greeting: "Bẹrẹ ìpàdé fún",
    name: "Abdullah Yusuf",
    akaLabel: "orúkọ",
    brandName: "Upin",
    title: "Onímọ̀ Ìmọ̀ Ààbọ Cyber",
    tagline:
      "Mo ń wá àìfọ̀ kí àwọn olè tó rí i. Láti ìdánwò ìfọwọ́sí wọ ìyèwò cryptography, mo ń ṣèdá ààbọ fun eto láti ìbẹ̀rẹ̀ si ìparí.",
    ctaPrimary: "Wo Iṣẹ́ Mi",
    ctaSecondary: "Bí Ojú-iṣẹ́ Tẹ́míná",
    stat1Label: "Ọdún IT",
    stat2Label: "Àìfọ̀ Tí A Wá",
    stat3Label: "Èdè",
    scroll: "Yípo láti wọ inú",
    statusSecure: "ÀÀBỌ",
    statusThreat: "ÌPELE IROKEKE: KÉKÈKÈ",
    statusScan: "ÌYÈWÒ TÓ KẸ́HIN: ìsẹjú 2 sẹ́yìn",
  },
  terminal: {
    title: "Tẹ́míná Àkóópọ̀",
    subtitle:
      "Èyí kì í ṣe portfolio. Ó jẹ́ shell. Tẹ àṣẹ ki o ṣàyẹ̀wò eto. Àpá kọ̀ọ̀kan jẹ́ fáìlì tí o lè kà.",
    prompt: "upin@cyber:~$",
    welcome:
      "Káàbọ̀ sí tẹ́míná cyber Upin. Tẹ 'help' láti rí àṣẹ tí ó wà.",
    helpLine1: "Àṣẹ tí ó wà:",
    helpLine2: "Àlàyé: àṣẹ kò ní rírí ọ̀rọ̀. Gbìyànjú 'whoami' láti bẹ̀rẹ̀.",
    commands: {
      help: "Fìhàn irúṣẹ̀ ìrànlọ́wọ̀ yìí",
      about: "Kà about.md",
      skills: "Sàtárì skills.json",
      projects: "Sàtárì projects/",
      experience: "Fìhàn experience.log",
      certs: "Sàtárì certifications.json",
      contact: "Pẹ́ńtì contact.vcf",
      clear: "Pa tẹ́míná rẹ́",
      whoami: "Ta ni èmi?",
      ls: "Sàtárì àkóójọ̀pọ̀ itọ́ka",
      social: "Fìhàn ìjápọ̀ àwùjọ",
      nmap: "Ṣe ìdánwò ìyèwò ibi-iṣẹ́",
    },
    outputs: {
      whoami:
        "Abdullah Yusuf (Upin). Onímọ̀ Ìmọ̀ Ààbọ Cyber àti oníṣẹ́-ìdájọ́ ẹ̀tọ̀ pẹ̀lú ọdún 5+ nínú IT. Mo ń wá àìfọ̀ kí àwọn olè tó rí i, láti ìdánwò ìfọwọ́sí wọ ìyèwò cryptography.",
      ls: "about.md skills.json projects/ experience.log certifications.json contact.vcf social.txt",
      social:
        "GitHub: github.com/mitchoder07 · HackerOne: hackerone.com/mitchoder07 · TryHackMe: tryhackme.com/p/mitchoder07 · X: x.com/mitchoder07",
      nmap:
        "Bẹrẹ Nmap 7.94 scan lórí target.local\nPORT     STATE    SERVICE\n22/tcp   open     ssh\n80/tcp   open     http\n443/tcp  open     https\n3306/tcp open    mysql\nNmap parí: 1 host up a yèwò nínú 1.42s",
      unknown: "àṣẹ a kò rí i. Tẹ 'help' fún àṣẹ tí ó wà.",
    },
    placeholder: "Tẹ àṣẹ ki o tẹ Enter...",
  },
  about: {
    badge: "Nipa",
    heading: "Ààbọ kì í ṣe ọjà. Ó jẹ́ ìlànà.",
    p1: "Mo jẹ́ Abdullah Yusuf, tí a mọ̀ sí Upin. Onímọ̀ ìmọ̀ ààbọ cyber àti oníṣẹ́-ìdájọ́ ẹ̀tọ̀ tó ti lo ọdún márùn-ún tó kẹ́hìn nínú ṣíṣe ààbọ eto, àlàyọ̀ ìdààmú, àti wíwá àìfọ̀ kí àwọn ẹlẹ́ṣẹ́ tó rí i. Iṣẹ́ mi wà láàrin ìkọlù àti ìdààmú: mo máa ń yọ eto nù láti lè mọ̀ọ́, lẹ́yìn náà ni mo máa ń kọ́ ọ padà síi kí ó fi mí.",
    p2: "Èyí tí ó yà mi sọ́tọ̀ ni pé mo ń ròyín bí ẹlẹ́ṣẹ́ àti mo ń dáàbò bí aṣàgbékalẹ̀. Mo ti ṣe ìdánwò ìfọwọ́sí lórí àwọn àpplíkẹ́shọ̀n wẹ́ẹ̀bù gẹ́gẹ́ bí OWASP Top 10, mo ti rí i dájú àwọn ìlànà cryptographic, mo ti ṣe àlàyọ̀ àwọn iṣẹ́-ìmọ̀ ààbọ pẹ̀lú Python, àti mo ti yan ìdáhùn 200+ ìrànlọ́wọ̀ IT ní àkókò ọdún NYSC mi ní FUHSI.",
    p3: "Nígbà tí èmi kò bá lọ iṣẹ́, mo wà ní TryHackMe àti HackTheBox n ṣe àfúnin fún ọ̀nà mi, ń kọ́ àwọn ohun èlò ààbọ pẹ̀lú Python, àti ń kọ àwọn skíríptì tí ń mú àwọn ohun tí àwọn ènìyàn fojúhàn. Mo gbàgbọ́ pé àwọn onímọ̀ ìmọ̀ ààbọ tó dára jù lọ ni àwọn tí wọ́n ní ẹ̀rù ní ọ̀nà tó yẹ. Portfolio yìí ni ìgbìyànjú mi láti fún ọ hàn irú ẹ̀rú yẹn nínú ìṣẹ̀.",
    highlights: [
      { label: "Ọdún IT", value: "5+" },
      { label: "Àìfọ̀ Tí A Wá", value: "50+" },
      { label: "Ìdáhùn Tí A Yan", value: "200+" },
      { label: "Èdè", value: "7" },
    ],
    coreTitle: "Agbárí Àkọ́kọ́",
    coreDesc: "Ìkọlù, ìdààmú, àti gbogbo nǹkan láàrin wọn.",
    coreItems: [
      { title: "Ìdánwò Ìfọwọ́sí", desc: "OWASP Top 10, ìyèwò àìfọ̀, ìlo, àti ìjábọ̀." },
      { title: "Cryptography", desc: "AES-256, RSA, PKI, àwọn iṣẹ́ hash, àti àwọn ìlànà ìbáraẹnisọ̀rọ̀ ààbọ." },
      { title: "Ààbọ̀ Nẹ́tíwọ̀kì", desc: "Firewalls, VPN, Wireshark, ìyèwò paakítì, àti kíkún agbára Cisco." },
      { title: "Skíríptì Ààbọ", desc: "Python, Bash, PowerShell, àti ìdàgbàsókè ohun èlò ààbọ pàtó." },
      { title: "Ìdáhùn Ìṣẹ̀lẹ̀", desc: "SIEM, ìyèwò log, ìwá irokeke, àti ìwádìí digital." },
      { title: "Kíkún Eto Agbára", desc: "Kíkún Linux/Windows, ìmúdójú ìwọlé, àti àwọn ìpílẹ̀ ìgbẹ̀kẹ́yìn." },
    ],
  },
  skills: {
    badge: "Agbárí",
    heading: "Ìkọlù àti ìdààmú, láti ìbẹ̀rẹ̀ sí ìparí.",
    subheading:
      "Èmi kì í yàn ẹ̀yìn kill chain. Mo ń bo gbogbo ojú, láti ìwádìí sí ìdáhùn ìṣẹ̀lẹ̀.",
    categories: {
      pentest: {
        title: "Pentest & Àìfọ̀",
        items: ["OWASP Top 10", "Burp Suite", "Nmap", "Metasploit", "Nikto", "SQLmap", "Ìyèwò Àìfọ̀"],
      },
      crypto: {
        title: "Cryptography",
        items: ["AES-256", "RSA", "PKI", "Iṣẹ́ Hash", "Àkọlé Digital", "Ìlànà Ààbọ"],
      },
      network: {
        title: "Ààbọ̀ Nẹ́tíwọ̀kì",
        items: ["Wireshark", "Firewalls", "VPN", "TCP/IP", "Cisco", "Ìyèwò Paakítì"],
      },
      scripting: {
        title: "Skíríptì Ààbọ",
        items: ["Python", "Bash", "PowerShell", "Skíríptì", "Àlàyọ̀", "Ohun Èlò Pàtó"],
      },
      siem: {
        title: "SIEM & Ìtọ́kà",
        items: ["Splunk", "Ìyèwò Log", "Ìwá Irokeke", "SIEM", "Ìdáhùn Ìṣẹ̀lẹ̀"],
      },
      platforms: {
        title: "Ohun Èlò & Pẹpẹ",
        items: ["Kali Linux", "Parrot OS", "Git", "Docker", "VirtualBox", "TryHackMe", "HackTheBox"],
      },
    },
  },
  projects: {
    badge: "Iṣẹ́ Tí A Yàn",
    heading: "Àwọn iṣẹ́ tí a kọ́, tí a pa, tí a sì ṣèdá.",
    subheading:
      "Àtúnṣe àwọn ohun èlò ààbọ, àwọn applíkẹ́shọ̀n encryption, àti àwọn eto ìwárí. Ọ̀kọ̀kan kọ́ mi nǹkan tuntun.",
    viewCode: "Wo Koodu",
    viewLive: "Demo Live",
    role: "Iṣẹ́",
    impact: "Ìparí",
    tech: "Tech",
    featured: "Pàtó",
    classified: "Àkọ́ṣe",
    items: [
      {
        name: "Crypto Vault",
        tagline: "AES-256 encryption nínú browser",
        description:
          "Àpò encryption ẹ̀yìn-abẹ́ tí ń rọ́ àti t'ọ́ àwọn ìkọ̀kọ̀ pẹ̀lú AES-256, lápapọ̀ nínú browser. Kò sì dátà kan tí ó ń jáde nínú èlò. Mo ṣe àgbékalẹ̀ UX lórí ìgbẹ́kẹ́yìn: ìpò encryption yálòótọ́, da-kọ-si-clipboard, àti ìpò òfo láì dojú ìwà.",
        role: "Onímọ̀ Ààbọ & Oníṣẹ́-ìdàgbàsókè",
        impact: "Encryption láìsí sẹ́fà, UX tó mọ́n kíkó ìkọ̀kọ̀, AES-256-GCM",
        tech: ["AES-256", "Web Crypto API", "JavaScript", "HTML5", "CSS3"],
        image: "/portfolio-images/crypto-vault.jpeg",
        githubUrl: "https://github.com/mitchoder07/cryptoVault",
        liveUrl: "https://crypto-vauult.vercel.app/",
      },
      {
        name: "Cyber Bot",
        tagline: "Bot Q&A ààbọ cyber fún intel irokeke",
        description:
          "Bot Q&A ààbọ cyber tí ń fún un ní àwọn ìdáhùn lẹ́sẹ̀kẹsẹ lórí àwọn àkọlé ààbọ bíi malware, phishing, àti encryption. Mo ṣe àgbékalẹ̀ UI ìbáraẹnisọ̀rọ̀, ìlànà àbá, àti àwọn káàdì ìdáhùn tó lékọ̀.",
        role: "Onímọ̀ Ààbọ & Oníṣẹ́-ìdàgbàsókè",
        impact: "Ìdáhùn lẹ́sẹ̀kẹsẹ, àbá, ìmọ̀ OWASP",
        tech: ["JavaScript", "HTML5", "CSS3", "Ìmọ̀ Ààbọ"],
        image: "/portfolio-images/cyber-bot.jpg",
        githubUrl: "https://github.com/mitchoder07/cyber-bot",
        liveUrl: "https://cyber-bot-zeta.vercel.app/",
      },
      {
        name: "Cyber-Words Guess",
        tagline: "Ọ̀rọ̀-ọ̀wọ́ iṣẹ́ ààbọ fún ìdánilẹ́kọ̀ọ́",
        description:
          "Ọ̀rọ̀-ọ̀wọ́ mọ̀-ọ̀rọ̀ tí a kọ́ lórí àwọn ọ̀rọ̀ ààbọ cyber. Mo ṣe àgbékalẹ̀ ìlànà ìṣẹ̀, àwọn kẹ́kẹ́ lórí-òkè, àti àwọn ìpò ìdábòpọ̀ àwọ̀. Ó jẹ́ ohun èlò ìdánilẹ́kọ̀ọ́ àjọyọ̀ fún kíkọ́ ọ̀rọ̀ ààbọ.",
        role: "Onímọ̀ Ààbọ & Oníṣẹ́-ìdàgbàsókè",
        impact: "Ìlànà ìṣẹ̀, kẹ́kẹ́ lórí-òkè, ìdábòpọ̀ àwọ̀",
        tech: ["JavaScript", "HTML5", "CSS3", "Ọ̀rọ̀ Ààbọ"],
        image: "/portfolio-images/cyber-words.jpg",
        liveUrl: "https://word-guessing-game-nine.vercel.app/",
      },
      {
        name: "Network Scanner",
        tagline: "Ayẹwo nẹ́tíwọ̀kì Python pẹ̀lú ìwárí ibi-iṣẹ́",
        description:
          "Ayẹwo nẹ́tíwọ̀kì pàtó tí a kọ nínú Python tí ń rí àwọn host tí ń ṣiṣẹ́ lórí subnet àti ń wá àwọn ibi-iṣẹ́ tààrà pẹ̀lú sísààmì-ṣíṣe iṣẹ́. A kọ́ ọ́ láti ṣe àlàyọ̀ ìwádìí nínú ìdánwò ìfọwọ́sí tó ní ìyọ̀nda.",
        role: "Onímọ̀ Ààbọ",
        impact: "Ìwádìí àlàyọ̀, ìwárí ibi-iṣẹ́, sísààmì iṣẹ́",
        tech: ["Python", "Sockets", "Threading", "Nmap API"],
        gradient: "linear-gradient(135deg, #00ff41 0%, #00d4ff 100%)",
        classified: true,
      },
      {
        name: "Phishing Detector",
        tagline: "Ayẹwo URL phishing ML",
        description:
          "Ohun èlò ML tí ń pín URL gẹ́gẹ́ bí phishing tàbí òótọ́ lórí àwọn ẹ̀ya lexical, ọdún àgbègbè, àti ìhùwà síta padà. A kọ́ ọ́ lórí dataset URL phishing pàtó.",
        role: "Onímọ̀ Ààbọ",
        impact: "Ìpín ML, ìkọ́ ẹ̀ya, láti fi s'ẹ́gbẹ́ browser",
        tech: ["Python", "scikit-learn", "pandas", "Ẹ̀ya URL"],
        gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
        classified: true,
      },
      {
        name: "Log Analyzer",
        tagline: "Ìyèwò log SIEM pẹ̀lú ìwárí àìbájẹ́",
        description:
          "Ohun èlò ìyèwò log SIEM tí ń mú àwọn log auth, log àbá wẹ́ẹ̀bù, àti log eto, lẹ́yìn náà ni ó ń tọ́ka àwọn àìbájẹ́ bíi ìgbìyànjú brute-force, ìyípadàsílẹ̀ ẹ̀gbẹ́, àti ìgóga-iyè ìyọ̀nda.",
        role: "Onímọ̀ Ààbọ",
        impact: "Ìwárí àìbájẹ́, àkókò irokeke, ẹ̀rọ ìlànà",
        tech: ["Python", "Regex", "Ìṣirò", "Ìmọ̀ SIEM"],
        gradient: "linear-gradient(135deg, #a855f7 0%, #00d4ff 100%)",
        classified: true,
      },
    ],
  },
  experience: {
    badge: "Irirí",
    heading: "Ọdún márùn-ún tí a ti pa, t'a sì tún, àti t'a ti ṣèdá.",
    subheading:
      "Láti àwọn yàrá ìdánwò ilé-ẹ̀kọ́ sí ìṣẹ́ NYSC àti ìwádìí ara-ẹni. Iṣẹ́ kọ̀ọ̀kan kọ́ mi ẹ̀yín ìṣẹ́ ààbọ.",
    items: [
      {
        role: "Ìrànlọ́wọ́ IT (NYSC)",
        company: "Yunifásítì Ìmọ̀ Ìlera ti Ìjọba Àpapọ̀, Ila (FUHSI)",
        period: "2025",
        description:
          "Ìrànlọ́wọ́ IT ní àsìkò ọdún ìṣẹ́ NYSC mi. Yan àwọn ìdáhùn tìkìítì helpdesk, ṣe àlàyọ̀ àwọn iṣẹ́ ààbọ, àti ṣe ìrànlọ́wọ́ fún àwọn iṣẹ́ àti àwọn ọmọ ile.",
        achievements: [
          "Yan ìdáhùn tìkìítì helpdesk 200+ fún àwọn iṣẹ́ àti àwọn ọmọ ile",
          "Ṣe àlàyọ̀ àwọn iṣẹ́ ààbọ àti IT pẹ̀lú Python àti Bash",
          "Kọ àwọn ìlànà IT àti ààbọ fún ẹgbẹ́ náà",
        ],
      },
      {
        role: "Olùyè ààbọ cyber",
        company: "Yunifásítì Al-Hikmah",
        period: "2024",
        description:
          "Pàdé B.Sc. Ààbọ Cyber pẹ̀lú CGPA 4.27/5.00. Ó kó ìdánwò ìfọwọ́sí, cryptography, ààbọ nẹ́tíwọ̀kì, àti ìgbékalẹ̀ eto ààbọ.",
        achievements: [
          "B.Sc. Ààbọ Cyber, CGPA 4.27/5.00",
          "Ẹ̀kọ́ nínú cryptography, ààbọ nẹ́tíwọ̀kì, àti ìwádìí digital",
          "Iṣẹ́ ọdún-ìkẹ́hìn lórí ìyèwò ìlànà cryptographic",
        ],
      },
      {
        role: "Olùṣe Àyèyè AI",
        company: "AI4FS, Yunifásítì Summit",
        period: "2023",
        description:
          "Ìyè AI for Females in STEM. Ṣàgbéyẹ̀wọ̀ ìpilẹ̀ṣẹ̀ AI àti lo fún àwọn iṣẹ́ kékeré, pẹ̀lú ojú-ùjọ ìlò ààbọ.",
        achievements: [
          "Pàdé ìmọ̀ AI ìṣe pẹ̀lú ìmọ̀ràn",
          "Kọ àwọn demo ML kékeré pẹ̀lú Python",
          "Ṣàfihàn iṣẹ́ ìkẹ́hìn fún ẹgbẹ́",
        ],
      },
      {
        role: "Oníwádìí Ààbọ (Ara-ẹni)",
        company: "TryHackMe & HackTheBox",
        period: "2023 - Báyìí",
        description:
          "Alábápàdé lórí TryHackMe (top 10%) àti HackTheBox. Yan àwọn ìdánwò CTF, parí àwọn ọ̀nà ẹ̀kọ́, àti ṣe àfúnin fún àwọn agbárí ààbọ ìkọlù.",
        achievements: [
          "TryHackMe top 10% pẹ̀lú àwọn ọ̀nà ẹ̀kọ́ tó parí",
          "Alábásá tó ńṣeré lórí HackTheBox pẹ̀lú àwọn ẹ̀rọ tó ní ipò",
          "Ìkópa CTF tó máa ń ṣẹlẹ̀ nínú wẹ́ẹ̀bù, crypto, àti nẹ́tíwọ̀kì",
        ],
      },
      {
        role: "Skíríptì Ààbọ (Ara-ẹni)",
        company: "Ara-ẹni",
        period: "2021 - Báyìí",
        description:
          "Kíkọ́ àwọn ohun èlò ààbọ pàtó nínú Python, Bash, àti PowerShell. Àwọn skíríptì fún ìwádìí, ìyèwò log, àti kíkún agbára àlàyọ̀.",
        achievements: [
          "Kọ ayẹwo nẹ́tíwọ̀kì pàtó àti ayẹwo log nínú Python",
          "Ṣe àlàyọ̀ àwọn ìpílẹ̀ kíkún Linux pẹ̀lú Bash",
          "Ṣe àgbékalẹ̀ àwọn ìkọ́wé àlàyọ̀ ààbọ tó látilèwò",
        ],
      },
    ],
  },
  certifications: {
    badge: "Ẹri",
    heading: "Ẹri àti Ìdánilẹ́kọ̀ọ́",
    subheading:
      "Àwọn ẹ̀rí òde-òní àti ìdánilẹ́kọ̀ọ́ ìṣe. Àwọn kan ti pàdé, àwọn kan ń ṣẹlẹ̀, gbogbo rẹ̀ wà nínú ìrìn.",
    items: [
      { name: "CompTIA Security+", issuer: "CompTIA", status: "Ní Ìdàsílẹ̀", statusType: "in-progress", desc: "Ẹri ààbọ ìpilẹ̀ṣẹ̀ tó ń bo irokeke, àgbékalẹ̀, iṣẹ́, àti ìbájẹ́ ẹ̀rù." },
      { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", status: "A Ti Ṣètò", statusType: "planned", desc: "Ẹri oníṣẹ́-ìdájọ́ ẹ̀tọ̀ ìṣe tó ń bo ìwádìí, ìlo, àti lẹ́yìn-ìlo." },
      { name: "TryHackMe", issuer: "TryHackMe", status: "Top 10%", statusType: "completed", desc: "Parí àwọn ọ̀nà ẹ̀kọ́ nínú Jr Penetration Tester, Web Fundamentals, àti Cyber Defense. Top 10% àgbáyé." },
      { name: "HackTheBox", issuer: "HackTheBox", status: "Alábásá Tó ńṢeré", statusType: "completed", desc: "Alábásá tó ńṣeré lórí ipò lórí HackTheBox. Parí àwọn ẹ̀rọ nínú Linux, Windows, wẹ́ẹ̀bù, àti crypto." },
      { name: "Cisco CCNA", issuer: "Cisco", status: "A Ti Ṣètò", statusType: "planned", desc: "Cisco Certified Network Associate. Ìpilẹ̀ṣẹ̀ nẹ́tíwọ̀kì, routing, switching, àti ààbọ." },
      { name: "AWS Security Specialty", issuer: "Amazon Web Services", status: "A Ti Ṣètò", statusType: "planned", desc: "AWS Certified Security - Specialty. Ààbọ cloud, ìdánimọ̀, ìtọ́kà, àti ìdáhùn ìṣẹ̀lẹ̀ lórí AWS." },
    ],
  },
  ctf: {
    badge: "Ìdánwò CTF",
    heading: "Ìrètí rẹ wà pé o lè yí ohun jẹ?",
    subheading:
      "Yan ọ̀rọ̀-ònà Base16 tí ó wà lábẹ̀ kí o sì fi ọ̀rọ̀-àṣírí tó farapamọ́ ránṣẹ́. Lo ìtọ́ni náà tí o bá wà nínú ìṣòro. Àwọn oníṣẹ́-ìdájọ́ ẹ̀tọ̀ gidi ń ka orísun.",
    intro: "Àwọn oníwàásù wa ti mú ìrín-àjò ẹ̀rín àdánù. Yán kí o sì fi ọ̀rọ̀-àṣírí tó farapamọ́ hàn.",
    encodedLabel: "Ìrìn Àdánù",
    encodedValue: "RkxBR3t5b3VfZGVjb2RlZF90aGVfY2lwaGVyfQ==",
    decodedLabel: "Ìrètí Ìyípadà",
    inputLabel: "Fi Ẹ̀yìn Títú Hàn",
    inputPlaceholder: "Tẹ ọ̀rọ̀-àṣírí títú sáyé...",
    submit: "Fi Ẹ̀yìn Ránṣẹ́",
    hint: "Fìhàn Ìtọ́ni",
    hintMessage: "Base64 jẹ́ ìyípadà binary-sí-text. Ṣí ojú-ìjápọ̀ browser kí o sì lo: atob('RkxBR3t5b3VfZGVjb2RlZF90aGVfY2lwaGVyfQ==') láti yí ọ́ padà lẹ́sẹ̀kẹsẹ.",
    successTitle: "A Ti Gba Ẹ̀yìn",
    successMessage: "O ti yí cipher padà. Ọkàn oníṣẹ́-ìdájọ́ ẹ̀tọ̀ gidi. A ti kọ ẹ̀yìn náà sílẹ̀.",
    flag: "FLAG{you_decoded_the_cipher}",
    wrongMessage: "Ẹ̀yìn náà kò yẹ. Gbìyànjú lẹ́ẹ̀kan sí i, tàbí kí o wo ìtọ́ni.",
    attemptsLabel: "Ìgbìyànjú",
  },
  tools: {
    badge: "Ohun Ìjà",
    heading: "Àwọn ohun èlò nínú ohun ìjà mi",
    subheading:
      "Àwọn ohun èlò ọjọ́-kòòó. Láti ìwádìí sí ìlo, àwọn wọ̀nyí ni àwọn ohun ìjà tí mo máa ń lo.",
    items: [
      { name: "Nmap", category: "Ìwádìí" },
      { name: "Wireshark", category: "Ìyèwò Nẹ́tíwọ̀kì" },
      { name: "Metasploit", category: "Ìlo" },
      { name: "Burp Suite", category: "Pentest Wẹ́ẹ̀bù" },
      { name: "Kali Linux", category: "OS" },
      { name: "Python", category: "Skíríptì" },
      { name: "Docker", category: "Infra" },
      { name: "Splunk", category: "SIEM" },
      { name: "John the Ripper", category: "Ìpínpín Ọ̀rọ̀-Ìkọ̀kọ̀" },
      { name: "Hashcat", category: "Ìpínpín Ọ̀rọ̀-Ìkọ̀kọ̀" },
      { name: "Nikto", category: "Ayẹwo Wẹ́ẹ̀bù" },
      { name: "SQLmap", category: "Ìdàrò SQL" },
    ],
  },
  feed: {
    badge: "Ìròyin Irokeke",
    heading: "Àwọn irokeke àti CVE tuntun",
    subheading:
      "Ìròyin ìgbà-lòósókè ti àwọn CVE tuntun àti ìmọ̀ràn ààbọ. A yàn ìpele fún triage. Dátà mock fún ìfihàn.",
    live: "GBÉ-DÉ",
    items: [
      { cve: "CVE-2024-3094", severity: "critical", desc: "XZ Utils ẹ̀rín ìkọ̀kọ̀ nínú liblzma ń fàyè RCE nípasẹ̀ SSH" },
      { cve: "CVE-2024-21413", severity: "critical", desc: "Microsoft Outlook moniker link RCE ń kojú ìdákọ́ ààbọ" },
      { cve: "CVE-2024-23897", severity: "critical", desc: "Jenkins àìfọ̀ ìkàwé fáìlì ń kó lọ sí RCE" },
      { cve: "CVE-2024-27198", severity: "critical", desc: "TeamCity ìforíkò ìdámọ̀ ń fàyè gba ààbọ admin" },
      { cve: "CVE-2024-1086", severity: "high", desc: "Linux kernel nf_tables ìgóga-iyè ìyọ̀nda agbegbe lọ sí root" },
      { cve: "CVE-2024-1709", severity: "high", desc: "ConnectWise ScreenConnect ìforíkò ìdámọ̀ ń kó lọ sí RCE" },
      { cve: "CVE-2024-21887", severity: "high", desc: "Ivanti Connect Secure ìfọwọ́sí ìlànà pẹ̀lú CVE-2023-46805" },
      { cve: "CVE-2024-0204", severity: "high", desc: "Fortra GoAnywhere MFT ìforíkò ìdámọ̀ admin" },
      { cve: "CVE-2023-50164", severity: "high", desc: "Apache Struts ìgberohùn fáìlì traversal ń kó lọ sí RCE" },
      { cve: "CVE-2024-20767", severity: "medium", desc: "Adobe ColdFusion àìfọ̀ ìmúdójú ìwọlé àìtọ́" },
      { cve: "CVE-2024-22004", severity: "medium", desc: "Ivanti Connect Secure XXE nínú ìpele SAML" },
      { cve: "CVE-2024-1012", severity: "low", desc: "WordPress plugin stored XSS nínú fọ́mù ìsọ̀rọ̀" },
    ],
  },
  contact: {
    badge: "Ìkásọ",
    heading: "Ẹ jẹ́ ká ṣèdá nǹkan pọ̀.",
    subheading:
      "Pípàdé fún àwọn ìwé-ìṣèwòsí ìdánwò ìfọwọ́sí, ìyèwò ààbọ, àti àwọn ipò ààbọ cyber àkókò-gbogbo.",
    nameLabel: "Orúkọ rẹ",
    emailLabel: "Àdírẹ́sì ímẹ́ẹ̀lì",
    messageLabel: "Ìṣọ́rọ̀ rẹ",
    namePlaceholder: "Orúkọ rẹ",
    emailPlaceholder: "your@email.com",
    messagePlaceholder: "Sọ fún mi nípa ààbọ tí ó nífẹ̀ẹ́ sí, ipò, tàbí ìwádìí ìyèwò...",
    send: "Fi Ìṣọ́rọ̀ Ránṣẹ́",
    sending: "Ń Ránṣẹ́...",
    success: "A ti fi ìṣọ́rọ̀ ránṣẹ́. Mo ó padà wá sọ̀dọ̀ rẹ nípasẹ̀ wákàtí 48.",
    orText: "tàbí",
    emailMe: "Ímẹ́ẹ̀lì mi taara",
    whatsappMe: "Ìṣọ́rọ̀ lórí WhatsApp",
    followTitle: "Rí mi lórí àwọn pẹpẹ ààbọ",
  },
  footer: {
    tagline: "Onímọ̀ Ìmọ̀ Ààbọ Cyber. Oníṣẹ́-ìdájọ́ ẹ̀tọ̀. Oníwá Irokeke.",
    quote: "Ààbọ ìlànà ni, kì í ṣe ọjà. Ìdààmú tó dára jù ni ọkàn tó ní ẹ̀rú tó ń yẹ̀wò gbogbo nǹkan.",
    builtWith: "A kọ́ pẹ̀lú Next.js, TypeScript, àti káféè púpọ̀. Dúró tó ní ẹ̀rú.",
    rights: "Gbogbo ẹ̀tọ́ a pa dà mọ́.",
    backToTop: "Padà lókè",
    quickLinks: "Àwọn Ìjápọ̀ Tó Yára",
    connect: "Dá pọ̀ mọ̀",
  },
};

// ==================== JAPANESE ====================
const ja: Translation = {
  nav: {
    home: "ホーム",
    about: "概要",
    skills: "スキル",
    projects: "プロジェクト",
    certifications: "資格",
    ctf: "CTF",
    tools: "武器庫",
    feed: "脅威",
    experience: "経歴",
    contact: "連絡先",
    menu: "メニュー",
  },
  hero: {
    badge: "セキュリティ業務募集中",
    greeting: "セッション開始:",
    name: "Abdullah Yusuf",
    akaLabel: "別名",
    brandName: "Upin",
    title: "サイバーセキュリティエンジニア",
    tagline:
      "攻撃者が見つける前に脆弱性を見つけます。ペネトレーションテストから暗号解析まで、システムをエンドツーエンドで保護します。",
    ctaPrimary: "作品を見る",
    ctaSecondary: "ターミナル起動",
    stat1Label: "IT経験年数",
    stat2Label: "発見脆弱性",
    stat3Label: "言語",
    scroll: "スクロールして侵入",
    statusSecure: "安全",
    statusThreat: "脅威レベル: 低",
    statusScan: "最終スキャン: 2分前",
  },
  terminal: {
    title: "インタラクティブターミナル",
    subtitle:
      "これはポートフォリオではありません。シェルです。コマンドを入力してシステムを探ってください。各セクションは読めるファイルです。",
    prompt: "upin@cyber:~$",
    welcome:
      "Upinのサイバーターミナルへようこそ。'help' で使用可能なコマンドを表示。",
    helpLine1: "利用可能なコマンド:",
    helpLine2: "ヒント: コマンドは大文字小文字を区別しません。'whoami' を試してください。",
    commands: {
      help: "このヘルプメッセージを表示",
      about: "about.md を読む",
      skills: "skills.json を一覧表示",
      projects: "projects/ を一覧表示",
      experience: "experience.log を表示",
      certs: "certifications.json を一覧表示",
      contact: "contact.vcf を出力",
      clear: "ターミナルをクリア",
      whoami: "私は誰?",
      ls: "ディレクトリ内容を一覧表示",
      social: "ソーシャルリンクを表示",
      nmap: "ポートスキャンをシミュレート",
    },
    outputs: {
      whoami:
        "Abdullah Yusuf (Upin)。5年以上のIT経験を持つサイバーセキュリティエンジニア兼倫理的ハッカー。ペネトレーションテストから暗号解析まで、攻撃者が見つける前に脆弱性を見つけます。",
      ls: "about.md skills.json projects/ experience.log certifications.json contact.vcf social.txt",
      social:
        "GitHub: github.com/mitchoder07 · HackerOne: hackerone.com/mitchoder07 · TryHackMe: tryhackme.com/p/mitchoder07 · X: x.com/mitchoder07",
      nmap:
        "Nmap 7.94 スキャンを target.local で開始\nPORT     STATE    SERVICE\n22/tcp   open     ssh\n80/tcp   open     http\n443/tcp  open     https\n3306/tcp open    mysql\nNmap 完了: 1ホストアップ、1.42秒でスキャン",
      unknown: "コマンドが見つかりません。'help' で利用可能なコマンドを表示。",
    },
    placeholder: "コマンドを入力して Enter...",
  },
  about: {
    badge: "概要",
    heading: "セキュリティは製品ではなく、プロセスである。",
    p1: "私はAbdullah Yusuf、別名Upinです。過去5年間、システムの保護、防御の自動化、攻撃者より先に脆弱性を見つけることに費やしてきたサイバーセキュリティエンジニア兼倫理的ハッカーです。私の仕事は攻撃と防御の交差点にあります。理解するために破壊し、より強く再構築します。すべてのシステムは設定ミス一つで侵害される可能性があり、私の仕事はその隙間を先に見つけることです。",
    p2: "私の強みは、攻撃者のように考え、建築家のように防御することです。OWASP Top 10に従ったWebアプリのペネトレーションテスト、暗号プロトコルの検証、Pythonによるセキュリティワークフローの自動化、FUHSIでのNYSC年度に200以上のITサポートチケットを解決してきました。Linuxサーバーの強化でもパケット解析でも、同じ厳格さを持ち込みます。",
    p3: "仕事以外では、TryHackMeとHackTheBoxでスキルを磨き、Pythonでカスタムセキュリティツールを構築し、人間が見逃すものを捕捉するスクリプトを書いています。最高のセキュリティエンジニアは適切な形で偏執的だと信じています。このポートフォリオは、その偏執が実践でどのようなものかを示す試みです。",
    highlights: [
      { label: "IT経験年数", value: "5+" },
      { label: "発見脆弱性", value: "50+" },
      { label: "解決チケット", value: "200+" },
      { label: "言語", value: "7" },
    ],
    coreTitle: "コアコンピテンシー",
    coreDesc: "攻撃、防御、そしてその間のすべて。",
    coreItems: [
      { title: "ペネトレーションテスト", desc: "OWASP Top 10、脆弱性評価、エクスプロイト、レポート作成。" },
      { title: "暗号学", desc: "AES-256、RSA、PKI、ハッシュ関数、セキュア通信プロトコル。" },
      { title: "ネットワークセキュリティ", desc: "ファイアウォール、VPN、Wireshark、パケット解析、Cisco機器の強化。" },
      { title: "セキュリティスクリプティング", desc: "Python、Bash、PowerShell、カスタムセキュリティツール開発。" },
      { title: "インシデント対応", desc: "SIEM、ログ分析、スレットハンティング、デジタルフォレンジック。" },
      { title: "システム強化", desc: "Linux/Windowsの強化、アクセス制御、コンプライアンス基準。" },
    ],
  },
  skills: {
    badge: "スキル",
    heading: "攻撃と防御、エンドツーエンド。",
    subheading:
      "キルチェインの片側を選びません。偵察からインシデント対応まで全表面をカバーします。",
    categories: {
      pentest: {
        title: "ペネトレーションテスト",
        items: ["OWASP Top 10", "Burp Suite", "Nmap", "Metasploit", "Nikto", "SQLmap", "脆弱性評価"],
      },
      crypto: {
        title: "暗号学",
        items: ["AES-256", "RSA", "PKI", "ハッシュ関数", "デジタル署名", "セキュアプロトコル"],
      },
      network: {
        title: "ネットワークセキュリティ",
        items: ["Wireshark", "ファイアウォール", "VPN", "TCP/IP", "Cisco", "パケット解析"],
      },
      scripting: {
        title: "セキュリティスクリプティング",
        items: ["Python", "Bash", "PowerShell", "スクリプティング", "自動化", "カスタムツール"],
      },
      siem: {
        title: "SIEM & 監視",
        items: ["Splunk", "ログ分析", "スレットハンティング", "SIEM", "インシデント対応"],
      },
      platforms: {
        title: "ツール & プラットフォーム",
        items: ["Kali Linux", "Parrot OS", "Git", "Docker", "VirtualBox", "TryHackMe", "HackTheBox"],
      },
    },
  },
  projects: {
    badge: "選抜作品",
    heading: "構築し、破壊し、保護したプロジェクト。",
    subheading:
      "セキュリティツール、暗号化アプリ、検知システムの厳選コレクション。それぞれが新しいことを教えてくれました。",
    viewCode: "コードを見る",
    viewLive: "ライブデモ",
    role: "役割",
    impact: "インパクト",
    tech: "技術",
    featured: "注目",
    classified: "機密",
    items: [
      {
        name: "Crypto Vault",
        tagline: "ブラウザ内AES-256暗号化",
        description:
          "クライアントサイドでAES-256による暗号化・復号を行う金庫。データはデバイスから一切外に出ません。信頼を中心にUXを設計: 明確な暗号化状態、クリップボードコピー、紛らわしくない空状態。暗号原理を実製品に適用した実例です。",
        role: "セキュリティエンジニア & 開発者",
        impact: "サーバーレス暗号化、クリーンな鍵管理UX、AES-256-GCM",
        tech: ["AES-256", "Web Crypto API", "JavaScript", "HTML5", "CSS3"],
        image: "/portfolio-images/crypto-vault.jpeg",
        githubUrl: "https://github.com/mitchoder07/cryptoVault",
        liveUrl: "https://crypto-vauult.vercel.app/",
      },
      {
        name: "Cyber Bot",
        tagline: "瞬時の脅威インテリジェンスを提供するセキュリティQ&Aボット",
        description:
          "マルウェア、フィッシング、暗号化などの一般的なセキュリティトピックに瞬時に回答するサイバーセキュリティQ&Aボット。会話UI、提案プロンプトパターン、読みやすい回答カードを設計。OWASPの基礎を網羅するナレッジベースを搭載。",
        role: "セキュリティエンジニア & 開発者",
        impact: "即時回答、提案プロンプト、OWASP対応ナレッジベース",
        tech: ["JavaScript", "HTML5", "CSS3", "セキュリティ概念"],
        image: "/portfolio-images/cyber-bot.jpg",
        githubUrl: "https://github.com/mitchoder07/cyber-bot",
        liveUrl: "https://cyber-bot-zeta.vercel.app/",
      },
      {
        name: "Cyber-Words Guess",
        tagline: "トレーニング用セキュリティ用語ワードゲーム",
        description:
          "サイバーセキュリティ用語を中心としたワード推測ゲーム。ゲームループ、オンスクリーンキーボード、色分けフィードバック状態を設計。スムーズな状態遷移を持つSPAとして構築。セキュリティ語彙を学ぶ楽しいトレーニングツールとしても機能。",
        role: "セキュリティエンジニア & 開発者",
        impact: "ゲームループ、オンスクリーンキーボード、色分けフィードバック",
        tech: ["JavaScript", "HTML5", "CSS3", "セキュリティ語彙"],
        image: "/portfolio-images/cyber-words.jpg",
        liveUrl: "https://word-guessing-game-nine.vercel.app/",
      },
      {
        name: "Network Scanner",
        tagline: "ポート検出を備えたPython製ネットワークスキャナー",
        description:
          "サブネット上の稼働ホストを発見し、サービスフィンガープリントでオープンポートを検出するPython製カスタムネットワークスキャナー。認可されたペンテスト中の偵察自動化のために構築。さらに分析するためのホスト、ポート、サービスのクリーンなレポートを出力。",
        role: "セキュリティエンジニア",
        impact: "自動化された偵察、ポート検出、サービスフィンガープリント",
        tech: ["Python", "Sockets", "Threading", "Nmap API"],
        gradient: "linear-gradient(135deg, #00ff41 0%, #00d4ff 100%)",
        classified: true,
      },
      {
        name: "Phishing Detector",
        tagline: "MLベースのフィッシングURL検出器",
        description:
          "語彙的特徴、ドメイン年齢、リダイレクト動作に基づいてURLをフィッシングか正当か分類する機械学習ツール。キュレーションされたフィッシングURLデータセットで訓練。ブラウザ拡張機能やメールゲートウェイに組み込めるよう設計。",
        role: "セキュリティエンジニア",
        impact: "ML分類、特徴エンジニアリング、ブラウザ組み込み可能",
        tech: ["Python", "scikit-learn", "pandas", "URL特徴"],
        gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
        classified: true,
      },
      {
        name: "Log Analyzer",
        tagline: "異常検出を備えたSIEMログ分析",
        description:
          "認証ログ、Webアクセスログ、システムログを取り込み、ブルートフォース試行、横展開、権限昇格などの異常をフラグ付けするSIEMログ分析ツール。設定可能なルールエンジンと統計的ベースラインを中心に構築。インシデント対応チーム向けの脅威タイムラインを出力。",
        role: "セキュリティエンジニア",
        impact: "異常検出、脅威タイムライン、ルールエンジン",
        tech: ["Python", "Regex", "統計", "SIEM概念"],
        gradient: "linear-gradient(135deg, #a855f7 0%, #00d4ff 100%)",
        classified: true,
      },
    ],
  },
  experience: {
    badge: "経歴",
    heading: "破壊し、修正し、保護してきた5年間。",
    subheading:
      "大学の実験室からNYSCサービス、独学の研究まで。各役割がセキュリティ技術の異なる側面を教えてくれました。",
    items: [
      {
        role: "ITサポート (NYSC)",
        company: "連邦健康科学大学イラ (FUHSI)",
        period: "2025",
        description:
          "NYSC奉仕年度中のITサポート。ヘルプデスクチケットを解決し、セキュリティタスクを自動化し、スタッフと学生をサポートしました。",
        achievements: [
          "スタッフと学生のヘルプデスクチケット200+件を解決",
          "PythonとBashで繰り返しのセキュリティ・ITタスクを自動化",
          "チーム向けのIT・セキュリティ手順を文書化",
          "大学インフラへのclassifiedレッドチーム演習を実施"
        ],
      },
      {
        role: "サイバーセキュリティ卒業",
        company: "Al-Hikmah大学",
        period: "2024",
        description:
          "B.Sc.サイバーセキュリティをCGPA 4.27/5.00で修了。ペネトレーションテスト、暗号学、ネットワークセキュリティ、セキュアシステム設計を履修。",
        achievements: [
          "B.Sc.サイバーセキュリティ、CGPA 4.27/5.00",
          "暗号学、ネットワークセキュリティ、デジタルフォレンジックの課程",
          "最終学年プロジェクトは暗号プロトコル解析",
        ],
      },
      {
        role: "AIインターン",
        company: "AI4FS、Summit大学",
        period: "2023",
        description:
          "AI for Females in STEMインターンシップ。AIの基礎を探求し、セキュリティ応用を見据えて小規模プロジェクトに適用。",
        achievements: [
          "メンターシップ付き応用AIカリキュラムを完了",
          "Pythonで小規模なMLデモを構築",
          "コホートに最終プロジェクトを発表",
        ],
      },
      {
        role: "セキュリティリサーチャー (独学)",
        company: "TryHackMe & HackTheBox",
        period: "2023 - 現在",
        description:
          "TryHackMe (トップ10%)とHackTheBoxで活動。CTFチャレンジを解き、ラーニングパスを完了し、攻撃的セキュリティスキルを研鑽。",
        achievements: [
          "TryHackMeトップ10%、ラーニングパス完了",
          "HackTheBoxアクティブプレイヤー、ランキングマシン完了",
          "Web、Crypto、ネットワークカテゴリで定期的にCTF参加",
        ],
      },
      {
        role: "セキュリティスクリプティング (独学)",
        company: "独学",
        period: "2021 - 現在",
        description:
          "Python、Bash、PowerShellでカスタムセキュリティツールを構築。偵察、ログ分析、自動強化のスクリプト。",
        achievements: [
          "Pythonでカスタムネットワークスキャナーとログアナライザーを構築",
          "BashでLinux強化基準を自動化",
          "再利用可能なセキュリティ自動化ライブラリを開発",
        ],
      },
    ],
  },
  certifications: {
    badge: "資格",
    heading: "資格 & トレーニング",
    subheading:
      "正式な資格と実践的トレーニング。取得済み、進行中、すべてが旅の一部。",
    items: [
      { name: "CompTIA Security+", issuer: "CompTIA", status: "進行中", statusType: "in-progress", desc: "脅威、アーキテクチャ、運用、リスク管理をカバーする基礎セキュリティ資格。" },
      { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", status: "計画中", statusType: "planned", desc: "偵察、エクスプロイト、ポストエクスプロイトをカバーする実践的倫理ハッキング資格。" },
      { name: "TryHackMe", issuer: "TryHackMe", status: "トップ10%", statusType: "completed", desc: "Jr Penetration Tester、Web Fundamentals、Cyber Defenseのラーニングパス完了。グローバルトップ10%。" },
      { name: "HackTheBox", issuer: "HackTheBox", status: "アクティブプレイヤー", statusType: "completed", desc: "HackTheBoxでランク入りアクティブプレイヤー。Linux、Windows、Web、Cryptoカテゴリのマシン完了。" },
      { name: "Cisco CCNA", issuer: "Cisco", status: "計画中", statusType: "planned", desc: "Cisco Certified Network Associate。ネットワーク基礎、ルーティング、スイッチング、セキュリティ。" },
      { name: "AWS Security Specialty", issuer: "Amazon Web Services", status: "計画中", statusType: "planned", desc: "AWS Certified Security - Specialty。クラウドセキュリティ、アイデンティティ、監視、AWS上のインシデント対応。" },
    ],
  },
  ctf: {
    badge: "CTFチャレンジ",
    heading: "ハッキングできると思う?",
    subheading:
      "下のBase64文字列をデコードして隠しフラグを送信。詰まったらヒントを使用。本物のハッカーはソースを読む。",
    intro: "当社のセンサーが暗号化された送信を傍受しました。デコードして隠しフラグを表示。",
    encodedLabel: "暗号化送信",
    encodedValue: "RkxBR3t5b3VfZGVjb2RlZF90aGVfY2lwaGVyfQ==",
    decodedLabel: "期待されるデコード出力",
    inputLabel: "デコードされたフラグを送信",
    inputPlaceholder: "デコードされたフラグを入力...",
    submit: "フラグ送信",
    hint: "ヒントを表示",
    hintMessage: "Base64はバイナリからテキストへのエンコーディング。ブラウザコンソールを開いて atob('RkxBR3t5b3VfZGVjb2RlZF90aGVfY2lwaGVyfQ==') を実行して即座にデコード。",
    successTitle: "フラグ取得",
    successMessage: "暗号をデコードしました。真のハッカーの本能。フラグは記録されました。",
    flag: "FLAG{you_decoded_the_cipher}",
    wrongMessage: "フラグが正しくありません。再試行するか、ヒントを確認。",
    attemptsLabel: "試行",
  },
  tools: {
    badge: "武器庫",
    heading: "私の武器庫にあるツール",
    subheading:
      "日常のツールキット。偵察からエクスプロイトまで、これらが私が使用する武器です。",
    items: [
      { name: "Nmap", category: "偵察" },
      { name: "Wireshark", category: "ネットワーク解析" },
      { name: "Metasploit", category: "エクスプロイト" },
      { name: "Burp Suite", category: "Webペンテスト" },
      { name: "Kali Linux", category: "OS" },
      { name: "Python", category: "スクリプティング" },
      { name: "Docker", category: "インフラ" },
      { name: "Splunk", category: "SIEM" },
      { name: "John the Ripper", category: "パスワードクラック" },
      { name: "Hashcat", category: "パスワードクラック" },
      { name: "Nikto", category: "Webスキャナー" },
      { name: "SQLmap", category: "SQLインジェクション" },
    ],
  },
  feed: {
    badge: "脅威フィード",
    heading: "最新の脅威 & CVE",
    subheading:
      "最近のCVEとセキュリティ勧告のライブフィード。トリアージ用に重大度評価付き。デモ用のモックデータ。",
    live: "ライブ",
    items: [
      { cve: "CVE-2024-3094", severity: "critical", desc: "liblzmaのXZ UtilsバックドアがSSH経由でRCEを許可" },
      { cve: "CVE-2024-21413", severity: "critical", desc: "Microsoft OutlookモニカーリンクRCEがセキュリティ警告をバイパス" },
      { cve: "CVE-2024-23897", severity: "critical", desc: "Jenkins任意ファイル読み取り脆弱性がRCEにつながる" },
      { cve: "CVE-2024-27198", severity: "critical", desc: "TeamCity認証バイパスが管理者乗っ取りを許可" },
      { cve: "CVE-2024-1086", severity: "high", desc: "Linux kernel nf_tablesローカル権限昇格でrootへ" },
      { cve: "CVE-2024-1709", severity: "high", desc: "ConnectWise ScreenConnect認証バイパスがRCEにつながる" },
      { cve: "CVE-2024-21887", severity: "high", desc: "Ivanti Connect SecureコマンドインジェクションがCVE-2023-46805と連鎖" },
      { cve: "CVE-2024-0204", severity: "high", desc: "Fortra GoAnywhere MFT管理者認証バイパス" },
      { cve: "CVE-2023-50164", severity: "high", desc: "Apache StrutsファイルアップロードパストラバーサルがRCEにつながる" },
      { cve: "CVE-2024-20767", severity: "medium", desc: "Adobe ColdFusion不適切なアクセス制御脆弱性" },
      { cve: "CVE-2024-22004", severity: "medium", desc: "Ivanti Connect Secure SAMLコンポーネントのXXE" },
      { cve: "CVE-2024-1012", severity: "low", desc: "WordPressプラグインのコメントフォームにXSS" },
    ],
  },
  contact: {
    badge: "連絡先",
    heading: "一緒にセキュリティを強化しましょう。",
    subheading:
      "ペネトレーションテスト契約、セキュリティ監査、フルタイムのサイバーセキュリティ職に対応可能。",
    nameLabel: "お名前",
    emailLabel: "メールアドレス",
    messageLabel: "メッセージ",
    namePlaceholder: "お名前",
    emailPlaceholder: "your@email.com",
    messagePlaceholder: "セキュリティのニーズ、役割、監査範囲について教えてください...",
    send: "メッセージ送信",
    sending: "送信中...",
    success: "メッセージ送信完了。48時間以内にご返信します。",
    orText: "または",
    emailMe: "直接メール",
    whatsappMe: "WhatsAppでメッセージ",
    followTitle: "セキュリティプラットフォームで見つけてください",
  },
  footer: {
    tagline: "サイバーセキュリティエンジニア。倫理的ハッカー。スレットハンター。",
    quote: "セキュリティはプロセスであり、製品ではない。最高の防御は、すべてをテストする偏執的な心。",
    builtWith: "Next.js、TypeScript、そして大量のカフェインで構築。偏執的であれ。",
    rights: "All rights reserved.",
    backToTop: "トップへ戻る",
    quickLinks: "クイックリンク",
    connect: "つながる",
  },
};

// ==================== ARABIC ====================
const ar: Translation = {
  nav: {
    home: "الرئيسية",
    about: "نبذة",
    skills: "المهارات",
    projects: "المشاريع",
    certifications: "الشهادات",
    ctf: "CTF",
    tools: "الترسانة",
    feed: "التهديدات",
    experience: "الخبرة",
    contact: "تواصل",
    menu: "القائمة",
  },
  hero: {
    badge: "متاح لمهام الأمن السيبراني",
    greeting: "بدء الجلسة لـ",
    name: "عبد الله يوسف",
    akaLabel: "المعروف بـ",
    brandName: "Upin",
    title: "مهندس أمن سيبراني",
    tagline:
      "أجد الثغرات قبل المهاجمين. من اختبار الاختراق إلى التحليل التشفيري، أؤمن الأنظمة من البداية إلى النهاية.",
    ctaPrimary: "شاهد أعمالي",
    ctaSecondary: "شغل الطرفية",
    stat1Label: "سنوات تقنية",
    stat2Label: "ثغرات موجودة",
    stat3Label: "لغات",
    scroll: "مرر للاختراق",
    statusSecure: "آمن",
    statusThreat: "مستوى التهديد: منخفض",
    statusScan: "آخر فحص: قبل دقيقتين",
  },
  terminal: {
    title: "طرفية تفاعلية",
    subtitle:
      "هذا ليس معرض أعمال. هذا صدفة. اكتب أمراً واستكشف النظام. كل قسم ملف يمكنك قراءته.",
    prompt: "upin@cyber:~$",
    welcome:
      "مرحباً بك في طرفية Upin السيبرانية. اكتب 'help' لرؤية الأوامر المتاحة.",
    helpLine1: "الأوامر المتاحة:",
    helpLine2: "نصيحة: الأوامر غير حساسة لحالة الأحرف. جرب 'whoami' للبدء.",
    commands: {
      help: "اعرض رسالة المساعدة هذه",
      about: "اقرأ about.md",
      skills: "اعرض skills.json",
      projects: "اعرض projects/",
      experience: "اعرض experience.log",
      certs: "اعرض certifications.json",
      contact: "اطبع contact.vcf",
      clear: "مسح الطرفية",
      whoami: "من أنا؟",
      ls: "اعرض محتويات الدليل",
      social: "اعرض روابط التواصل",
      nmap: "محاكاة فحص المنافذ",
    },
    outputs: {
      whoami:
        "عبد الله يوسف (Upin). مهندس أمن سيبراني وهاكر أخلاقي بخبرة 5+ سنوات في تقنية المعلومات. أجد الثغرات قبل المهاجمين، من اختبار الاختراق إلى التحليل التشفيري.",
      ls: "about.md skills.json projects/ experience.log certifications.json contact.vcf social.txt",
      social:
        "GitHub: github.com/mitchoder07 · HackerOne: hackerone.com/mitchoder07 · TryHackMe: tryhackme.com/p/mitchoder07 · X: x.com/mitchoder07",
      nmap:
        "بدء فحص Nmap 7.94 على target.local\nPORT     STATE    SERVICE\n22/tcp   open     ssh\n80/tcp   open     http\n443/tcp  open     https\n3306/tcp open    mysql\nانتهى Nmap: مضيف واحد يعمل في 1.42 ث",
      unknown: "الأمر غير موجود. اكتب 'help' للأوامر المتاحة.",
    },
    placeholder: "اكتب أمراً واضغط Enter...",
  },
  about: {
    badge: "نبذة",
    heading: "الأمن ليس منتجاً. إنه عملية.",
    p1: "أنا عبد الله يوسف، المعروف بـ Upin. مهندس أمن سيبراني وهاكر أخلاقي قضى السنوات الخمس الماضية في تأمين الأنظمة وأتمتة الدفاعات وإيجاد الثغرات قبل المهاجمين. عملي يقع في تقاطع الهجوم والدفاع: أكسر الأشياء لأفهمها، ثم أبنيها أقوى. أؤمن أن كل نظام يبعد خطأ تكوين واحد عن الاختراق، وعملي هو إيجاد تلك الفجوة أولاً.",
    p2: "ما يميزني هو أنني أفكر كمهاجم وأدافع كمعماري. لقد أجريت اختبارات اختراق لتطبيقات الويب وفق OWASP Top 10، وتحققت من بروتوكولات التشفير، وأتمتت سير عمل الأمان بـ Python، وحللت 200+ تذكرة دعم تقني المعلومات خلال سنة NYSC في FUHSI. سواء كان تقوية خادم Linux أو تحليل التقاط الحزم، أجلب نفس الصرامة.",
    p3: "عندما لا أعمل، أكون على TryHackMe و HackTheBox أصقل مهاراتي، وأبني أدوات أمان مخصصة بـ Python، وأكتب نصوصاً تلتقط ما يفوته البشر. أؤمن أن أفضل مهندسي الأمن هم من لديهم جنون الارتياب بالطريقة الصحيحة. هذا المعرض هو محاولتي لإظهار كيف يبدو ذلك الجنون عملياً.",
    highlights: [
      { label: "سنوات تقنية", value: "5+" },
      { label: "ثغرات موجودة", value: "50+" },
      { label: "تذاكر محلولة", value: "200+" },
      { label: "لغات", value: "7" },
    ],
    coreTitle: "الكفاءات الأساسية",
    coreDesc: "هجوم، دفاع، وكل شيء بينهما.",
    coreItems: [
      { title: "اختبار الاختراق", desc: "OWASP Top 10، تقييم الثغرات، الاستغلال، وإعداد التقارير." },
      { title: "التشفير", desc: "AES-256، RSA، PKI، دوال التجزئة، وبروتوكولات الاتصال الآمن." },
      { title: "أمن الشبكات", desc: "جدران الحماية، VPN، Wireshark، تحليل الحزم، وتقوية أجهزة Cisco." },
      { title: "البرمجة الأمنية", desc: "Python، Bash، PowerShell، وتطوير أدوات أمان مخصصة." },
      { title: "الاستجابة للحوادث", desc: "SIEM، تحليل السجلات، صيد التهديدات، والطب الشرعي الرقمي." },
      { title: "تقوية الأنظمة", desc: "تقوية Linux/Windows، التحكم في الوصول، وقواعد الامتثال." },
    ],
  },
  skills: {
    badge: "المهارات",
    heading: "هجوم ودفاع من البداية للنهاية.",
    subheading:
      "لا أختار جانباً من سلسلة القتل. أغطي السطح بالكامل، من الاستطلاع إلى الاستجابة للحوادث.",
    categories: {
      pentest: {
        title: "الاختراق والثغرات",
        items: ["OWASP Top 10", "Burp Suite", "Nmap", "Metasploit", "Nikto", "SQLmap", "تقييم الثغرات"],
      },
      crypto: {
        title: "التشفير",
        items: ["AES-256", "RSA", "PKI", "دوال التجزئة", "التوقيعات الرقمية", "بروتوكولات آمنة"],
      },
      network: {
        title: "أمن الشبكات",
        items: ["Wireshark", "جدران الحماية", "VPN", "TCP/IP", "Cisco", "تحليل الحزم"],
      },
      scripting: {
        title: "البرمجة الأمنية",
        items: ["Python", "Bash", "PowerShell", "البرمجة", "الأتمتة", "أدوات مخصصة"],
      },
      siem: {
        title: "SIEM والمراقبة",
        items: ["Splunk", "تحليل السجلات", "صيد التهديدات", "SIEM", "الاستجابة للحوادث"],
      },
      platforms: {
        title: "الأدوات والمنصات",
        items: ["Kali Linux", "Parrot OS", "Git", "Docker", "VirtualBox", "TryHackMe", "HackTheBox"],
      },
    },
  },
  projects: {
    badge: "أعمال مختارة",
    heading: "مشاريع تم بناؤها واختراقها وتأمينها.",
    subheading:
      "مجموعة مختارة من أدوات الأمان وتطبيقات التشفير وأنظمة الكشف. كل واحد علمني شيئاً جديداً.",
    viewCode: "عرض الكود",
    viewLive: "عرض حي",
    role: "الدور",
    impact: "الأثر",
    tech: "التقنية",
    featured: "مميز",
    classified: "سري",
    items: [
      {
        name: "Crypto Vault",
        tagline: "تشفير AES-256 في المتصفح",
        description:
          "خزنة تشفير من جانب العميل تشفر وتفك تشفير الأسرار بـ AES-256، بالكامل في المتصفح. لا تغادر أي بيانات الجهاز. صممت تجربة المستخدم حول الثقة: حالات تشفير واضحة، نسخ إلى الحافظة، وحالات فارغة دون ارتباك.",
        role: "مهندس أمن ومطور",
        impact: "تشفير بدون خادم، تجربة مستخدم نظيفة لإدارة المفاتيح، AES-256-GCM",
        tech: ["AES-256", "Web Crypto API", "JavaScript", "HTML5", "CSS3"],
        image: "/portfolio-images/crypto-vault.jpeg",
        githubUrl: "https://github.com/mitchoder07/cryptoVault",
        liveUrl: "https://crypto-vauult.vercel.app/",
      },
      {
        name: "Cyber Bot",
        tagline: "بوت أسئلة وأجوبة للأمن السيبراني للاستخبارات الفورية",
        description:
          "بوت أسئلة وأجوبة للأمن السيبراني يعطي إجابات فورية حول مواضيع أمنية شائعة مثل البرمجيات الخبيثة والتصيد والتشفير. صممت واجهة المحادثة ونمط الاقتراحات وبطاقات الإجابة القابلة للقراءة.",
        role: "مهندس أمن ومطور",
        impact: "إجابات فورية، اقتراحات، قاعدة معرفة متوافقة مع OWASP",
        tech: ["JavaScript", "HTML5", "CSS3", "مفاهيم أمنية"],
        image: "/portfolio-images/cyber-bot.jpg",
        githubUrl: "https://github.com/mitchoder07/cyber-bot",
        liveUrl: "https://cyber-bot-zeta.vercel.app/",
      },
      {
        name: "Cyber-Words Guess",
        tagline: "لعبة كلمات مصطلحات أمنية للتدريب",
        description:
          "لعبة تخمين كلمات مبنية حول مصطلحات الأمن السيبراني. صممت حلقة اللعب ولوحة المفاتيح على الشاشة وحالات التغذية الراجعة الملونة. تعمل كأداة تدريب ممتعة لتعلم مفردات الأمن.",
        role: "مهندس أمن ومطور",
        impact: "حلقة اللعب، لوحة المفاتيح على الشاشة، تغذية راجعة ملونة",
        tech: ["JavaScript", "HTML5", "CSS3", "مفردات أمنية"],
        image: "/portfolio-images/cyber-words.jpg",
        liveUrl: "https://word-guessing-game-nine.vercel.app/",
      },
      {
        name: "Network Scanner",
        tagline: "ماسح شبكات Python مع كشف المنافذ",
        description:
          "ماسح شبكات مخصص مكتوب بـ Python يكتشف المضيفين النشطين على الشبكة الفرعية ويكتشف المنافذ المفتوحة مع بصمة الخدمة. بُني لأتمتة الاستطلاع أثناء اختبارات الاختراق المصرح بها.",
        role: "مهندس أمن",
        impact: "استطلاع مؤتمت، كشف المنافذ، بصمة الخدمة",
        tech: ["Python", "Sockets", "Threading", "Nmap API"],
        gradient: "linear-gradient(135deg, #00ff41 0%, #00d4ff 100%)",
        classified: true,
      },
      {
        name: "Phishing Detector",
        tagline: "كاشف روابط التصيد بتعلم الآلة",
        description:
          "أداة تعلم آلي تصنف الروابط كتصيد أو شرعية بناءً على الميزات المعجمية وعمر النطاق وسلوك إعادة التوجيه. درّبت على مجموعة بيانات منظمة من روابط التصيد.",
        role: "مهندس أمن",
        impact: "تصنيف تعلم آلي، هندسة الميزات، قابل للتضمين في المتصفح",
        tech: ["Python", "scikit-learn", "pandas", "ميزات URL"],
        gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
        classified: true,
      },
      {
        name: "Log Analyzer",
        tagline: "تحليل سجلات SIEM مع كشف الشذوذ",
        description:
          "أداة تحليل سجلات SIEM تستوعب سجلات المصادقة وسجلات الوصول للويب وسجلات النظام، ثم تُعلم الشذوذ مثل محاولات القوة الغاشمة والحركة الجانبية وتصعيد الامتيازات.",
        role: "مهندس أمن",
        impact: "كشف الشذوذ، جدول زمني للتهديدات، محرك قواعد",
        tech: ["Python", "Regex", "إحصاء", "مفاهيم SIEM"],
        gradient: "linear-gradient(135deg, #a855f7 0%, #00d4ff 100%)",
        classified: true,
      },
    ],
  },
  experience: {
    badge: "الخبرة",
    heading: "خمس سنوات من الكسر والإصلاح والتأمين.",
    subheading:
      "من مختبرات الجامعة إلى خدمة NYSC والبحث الذاتي. كل دور علّمني جانباً مختلفاً من حرفة الأمن.",
    items: [
      {
        role: "دعم تقني المعلومات (NYSC)",
        company: "الجامعة الفيدرالية للعلوم الصحية، إيلا (FUHSI)",
        period: "2025",
        description:
          "دعم تقني المعلومات خلال سنة خدمة NYSC. حل تذاكر مكتب المساعدة وأتمتة مهام الأمان ودعم الموظفين والطلاب.",
        achievements: [
          "حل 200+ تذكرة مكتب مساعدة للموظفين والطلاب",
          "أتمتة مهام الأمان وتقنية المعلومات المتكررة بـ Python و Bash",
          "توثيق إجراءات تقنية المعلومات والأمان للفريق",
          "إجراء تمرين فريق أحمر classified على البنية التحتية للجامعة"
        ],
      },
      {
        role: "خريج أمن سيبراني",
        company: "جامعة الحكمة",
        period: "2024",
        description:
          "أكملت بكالوريوس الأمن السيبراني بمعدل تراكمي 4.27/5.00. شمل اختبار الاختراق والتشفير وأمن الشبكات وتصميم الأنظمة الآمنة.",
        achievements: [
          "بكالوريوس أمن سيبراني، معدل 4.27/5.00",
          "مقررات في التشفير وأمن الشبكات والطب الشرعي الرقمي",
          "مشروع السنة النهائية حول تحليل البروتوكولات التشفيرية",
        ],
      },
      {
        role: "متدرب ذكاء اصطناعي",
        company: "AI4FS، جامعة Summit",
        period: "2023",
        description:
          "تدريب الذكاء الاصطناعي للإناث في مجالات STEM. استكشفت أساسيات الذكاء الاصطناعي وطبقتها على مشاريع صغيرة، مع نظرة على تطبيقات الأمان.",
        achievements: [
          "إكمال منهج الذكاء الاصطناعي التطبيقي مع إشراف",
          "بناء عروض تعلم آلي صغيرة بـ Python",
          "تقديم المشروع النهائي للفوج",
        ],
      },
      {
        role: "باحث أمني (ذاتي)",
        company: "TryHackMe & HackTheBox",
        period: "2023 - حتى الآن",
        description:
          "مشارك نشط في TryHackMe (أفضل 10%) و HackTheBox. حل تحديات CTF وإكمال مسارات التعلم وصقل مهارات الأمن الهجومي.",
        achievements: [
          "TryHackMe أفضل 10% مع مسارات تعلم مكتملة",
          "لاعب نشط في HackTheBox مع أجهزة مصنفة",
          "مشاركة منتظمة في CTF عبر فئات الويب والتشفير والشبكات",
        ],
      },
      {
        role: "برمجة أمنية (ذاتي)",
        company: "ذاتي",
        period: "2021 - حتى الآن",
        description:
          "بناء أدوات أمان مخصصة بـ Python و Bash و PowerShell. نصوص للاستطلاع وتحليل السجلات والتقوية المؤتمتة.",
        achievements: [
          "بناء ماسح شبكات مخصص ومحلل سجلات بـ Python",
          "أتمتة قواعد تقوية Linux بـ Bash",
          "تطوير مكتبات أتمتة أمان قابلة لإعادة الاستخدام",
        ],
      },
    ],
  },
  certifications: {
    badge: "الشهادات",
    heading: "الشهادات والتدريب",
    subheading:
      "اعتمادات رسمية وتدريب عملي. بعضها مكتمل وبعضها قيد التقدم، وكلها جزء من الرحلة.",
    items: [
      { name: "CompTIA Security+", issuer: "CompTIA", status: "قيد التقدم", statusType: "in-progress", desc: "شهادة أمان أساسية تغطي التهديدات والبنية والعمليات وإدارة المخاطر." },
      { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", status: "مخطط", statusType: "planned", desc: "شهادة هاكر أخلاقي عملي تغطي الاستطلاع والاستغلال وما بعد الاستغلال." },
      { name: "TryHackMe", issuer: "TryHackMe", status: "أفضل 10%", statusType: "completed", desc: "إكمال مسارات التعلم في Jr Penetration Tester و Web Fundamentals و Cyber Defense. أفضل 10% عالمياً." },
      { name: "HackTheBox", issuer: "HackTheBox", status: "لاعب نشط", statusType: "completed", desc: "لاعب نشط مصنف على HackTheBox. إكمال أجهزة عبر فئات Linux و Windows و الويب و التشفير." },
      { name: "Cisco CCNA", issuer: "Cisco", status: "مخطط", statusType: "planned", desc: "Cisco Certified Network Associate. أساسيات الشبكات والتوجيه والتبديل والأمان." },
      { name: "AWS Security Specialty", issuer: "Amazon Web Services", status: "مخطط", statusType: "planned", desc: "AWS Certified Security - Specialty. أمان السحابة والهوية والمراقبة والاستجابة للحوادث على AWS." },
    ],
  },
  ctf: {
    badge: "تحدي CTF",
    heading: "هل تظن أنك تستطيع الاختراق؟",
    subheading:
      "فك تشفير سلسلة Base64 أدناه وأرسل العلم المخفي. استخدم التلميح إذا علقت. الهاكرز الحقيقيون يقرؤون المصدر.",
    intro: "اعترضت أجهزة الاستشعار لدينا إرسالاً مشفراً. فك التشفير لكشف العلم المخفي.",
    encodedLabel: "الإرسال المشفر",
    encodedValue: "RkxBR3t5b3VfZGVjb2RlZF90aGVfY2lwaGVyfQ==",
    decodedLabel: "المخرجات المتوقعة",
    inputLabel: "أرسل العلم المفكوك",
    inputPlaceholder: "أدخل العلم المفكوك هنا...",
    submit: "أرسل العلم",
    hint: "إظهار التلميح",
    hintMessage: "Base64 هو ترميز من ثنائي إلى نص. افتح وحدة تحكم المتصفح ونفّذ: atob('RkxBR3t5b3VfZGVjb2RlZF90aGVfY2lwaGVyfQ==') لفك التشفير فوراً.",
    successTitle: "تم التقاط العلم",
    successMessage: "لقد فككت الشيفرة. غريزة هاكر حقيقية. تم تسجيل العلم.",
    flag: "FLAG{you_decoded_the_cipher}",
    wrongMessage: "علم غير صحيح. حاول مرة أخرى، أو اطلع على التلميح.",
    attemptsLabel: "المحاولات",
  },
  tools: {
    badge: "الترسانة",
    heading: "الأدوات في ترسانتي",
    subheading:
      "حقيبة الأدوات اليومية. من الاستطلاع إلى الاستغلال، هذه هي الأسلحة التي أستخدمها.",
    items: [
      { name: "Nmap", category: "الاستطلاع" },
      { name: "Wireshark", category: "تحليل الشبكات" },
      { name: "Metasploit", category: "الاستغلال" },
      { name: "Burp Suite", category: "اختراق الويب" },
      { name: "Kali Linux", category: "نظام تشغيل" },
      { name: "Python", category: "البرمجة" },
      { name: "Docker", category: "البنية التحتية" },
      { name: "Splunk", category: "SIEM" },
      { name: "John the Ripper", category: "كسر كلمات المرور" },
      { name: "Hashcat", category: "كسر كلمات المرور" },
      { name: "Nikto", category: "ماسح الويب" },
      { name: "SQLmap", category: "حقن SQL" },
    ],
  },
  feed: {
    badge: "تغذية التهديدات",
    heading: "أحدث التهديدات و CVEs",
    subheading:
      "تغذية حية لأحدث CVEs والنصائح الأمنية. مصنفة حسب الخطورة للفرز. بيانات وهمية للعرض.",
    live: "مباشر",
    items: [
      { cve: "CVE-2024-3094", severity: "critical", desc: "باب خلفي في XZ Utils في liblzma يسمح بتنفيذ كود عن بعد عبر SSH" },
      { cve: "CVE-2024-21413", severity: "critical", desc: "Microsoft Outlook moniker link RCE يتجاوز تحذيرات الأمان" },
      { cve: "CVE-2024-23897", severity: "critical", desc: "ثغرة قراءة ملف عشوائي في Jenkins تؤدي إلى RCE" },
      { cve: "CVE-2024-27198", severity: "critical", desc: "تجاوز مصادقة TeamCity يسمح بالاستيلاء على المسؤول" },
      { cve: "CVE-2024-1086", severity: "high", desc: "تصعيد امتيازات محلي في Linux kernel nf_tables إلى root" },
      { cve: "CVE-2024-1709", severity: "high", desc: "تجاوز مصادقة ConnectWise ScreenConnect يؤدي إلى RCE" },
      { cve: "CVE-2024-21887", severity: "high", desc: "حقن أوامر Ivanti Connect Secure مقترن مع CVE-2023-46805" },
      { cve: "CVE-2024-0204", severity: "high", desc: "تجاوز مصادقة مسؤول Fortra GoAnywhere MFT" },
      { cve: "CVE-2023-50164", severity: "high", desc: "ثغرة تحميل ملفات Apache Struts path traversal تؤدي إلى RCE" },
      { cve: "CVE-2024-20767", severity: "medium", desc: "ثغرة تحكم وصول غير صحيح في Adobe ColdFusion" },
      { cve: "CVE-2024-22004", severity: "medium", desc: "Ivanti Connect Secure XXE في مكون SAML" },
      { cve: "CVE-2024-1012", severity: "low", desc: "WordPress plugin stored XSS في نموذج التعليقات" },
    ],
  },
  contact: {
    badge: "تواصل",
    heading: "لنؤمن شيئاً معاً.",
    subheading:
      "منفتح على عقود اختبار الاختراق وتدقيق الأمان ووظائف الأمن السيبراني بدوام كامل.",
    nameLabel: "اسمك",
    emailLabel: "البريد الإلكتروني",
    messageLabel: "رسالتك",
    namePlaceholder: "اسمك",
    emailPlaceholder: "your@email.com",
    messagePlaceholder: "أخبرني عن حاجتك الأمنية أو الدور أو نطاق التدقيق...",
    send: "إرسال الرسالة",
    sending: "جاري الإرسال...",
    success: "تم إرسال الرسالة. سأعود إليك خلال 48 ساعة.",
    orText: "أو",
    emailMe: "راسلني مباشرة",
    whatsappMe: "راسلني على WhatsApp",
    followTitle: "جديني على منصات الأمان",
  },
  footer: {
    tagline: "مهندس أمن سيبراني. هاكر أخلاقي. صائد تهديدات.",
    quote: "الأمن عملية لا منتج. أفضل دفاع هو عقل ارتيابي يختبر كل شيء.",
    builtWith: "مبني بـ Next.js و TypeScript و الكثير من الكافيين. ابقَ مرتاباً.",
    rights: "جميع الحقوق محفوظة.",
    backToTop: "العودة للأعلى",
    quickLinks: "روابط سريعة",
    connect: "تواصل",
  },
};

// ==================== CHINESE ====================
const zh: Translation = {
  nav: {
    home: "首页",
    about: "关于",
    skills: "技能",
    projects: "项目",
    certifications: "证书",
    ctf: "CTF",
    tools: "武器库",
    feed: "威胁",
    experience: "经历",
    contact: "联系",
    menu: "菜单",
  },
  hero: {
    badge: "接受安全项目委托",
    greeting: "为以下用户启动会话:",
    name: "Abdullah Yusuf",
    akaLabel: "别名",
    brandName: "Upin",
    title: "网络安全工程师",
    tagline:
      "在攻击者之前发现漏洞。从渗透测试到密码分析,我为系统提供端到端的安全保障。",
    ctaPrimary: "查看我的作品",
    ctaSecondary: "启动终端",
    stat1Label: "IT 年数",
    stat2Label: "发现漏洞",
    stat3Label: "语言",
    scroll: "滚动以入侵",
    statusSecure: "安全",
    statusThreat: "威胁等级: 低",
    statusScan: "上次扫描: 2 分钟前",
  },
  terminal: {
    title: "交互式终端",
    subtitle:
      "这不是作品集。这是 shell。输入命令并探索系统。每个部分都是可读的文件。",
    prompt: "upin@cyber:~$",
    welcome:
      "欢迎来到 Upin 的网络终端。输入 'help' 查看可用命令。",
    helpLine1: "可用命令:",
    helpLine2: "提示: 命令不区分大小写。试试 'whoami' 开始。",
    commands: {
      help: "显示此帮助信息",
      about: "读取 about.md",
      skills: "列出 skills.json",
      projects: "列出 projects/",
      experience: "显示 experience.log",
      certs: "列出 certifications.json",
      contact: "打印 contact.vcf",
      clear: "清空终端",
      whoami: "我是谁?",
      ls: "列出目录内容",
      social: "显示社交链接",
      nmap: "模拟端口扫描",
    },
    outputs: {
      whoami:
        "Abdullah Yusuf (Upin)。网络安全工程师和道德黑客,拥有 5+ 年 IT 经验。我在攻击者之前发现漏洞,从渗透测试到密码分析。",
      ls: "about.md skills.json projects/ experience.log certifications.json contact.vcf social.txt",
      social:
        "GitHub: github.com/mitchoder07 · HackerOne: hackerone.com/mitchoder07 · TryHackMe: tryhackme.com/p/mitchoder07 · X: x.com/mitchoder07",
      nmap:
        "在 target.local 上启动 Nmap 7.94 扫描\nPORT     STATE    SERVICE\n22/tcp   open     ssh\n80/tcp   open     http\n443/tcp  open     https\n3306/tcp open    mysql\nNmap 完成: 1 台主机在线,扫描用时 1.42 秒",
      unknown: "未找到命令。输入 'help' 查看可用命令。",
    },
    placeholder: "输入命令并按 Enter...",
  },
  about: {
    badge: "关于",
    heading: "安全不是产品,而是过程。",
    p1: "我是 Abdullah Yusuf,又名 Upin。一名网络安全工程师和道德黑客,过去五年致力于保护系统、自动化防御,并在坏人之前发现漏洞。我的工作处于攻击与防御的交叉点:我破坏东西以理解它们,然后更强大地重建它们。我相信每个系统都只差一个配置错误就会被入侵,我的工作就是先找到那个缺口。",
    p2: "我的独特之处在于我像攻击者一样思考,像架构师一样防御。我按照 OWASP Top 10 对 Web 应用进行渗透测试,验证加密协议,用 Python 自动化安全工作流,并在 FUHSI 的 NYSC 年度解决了 200+ IT 支持工单。无论是加固 Linux 服务器还是分析数据包捕获,我都带来同样的严谨。",
    p3: "不工作时,我在 TryHackMe 和 HackTheBox 上磨砺技能,用 Python 构建自定义安全工具,编写脚本来捕捉人类遗漏的内容。我相信最好的安全工程师都以正确的方式保持偏执。这个作品集是我向你展示这种偏执在实践中是什么样子的尝试。",
    highlights: [
      { label: "IT 年数", value: "5+" },
      { label: "发现漏洞", value: "50+" },
      { label: "已解决工单", value: "200+" },
      { label: "语言", value: "7" },
    ],
    coreTitle: "核心能力",
    coreDesc: "攻击、防御以及其间的一切。",
    coreItems: [
      { title: "渗透测试", desc: "OWASP Top 10、漏洞评估、漏洞利用和报告。" },
      { title: "密码学", desc: "AES-256、RSA、PKI、哈希函数和安全通信协议。" },
      { title: "网络安全", desc: "防火墙、VPN、Wireshark、数据包分析和 Cisco 设备加固。" },
      { title: "安全脚本", desc: "Python、Bash、PowerShell 和自定义安全工具开发。" },
      { title: "事件响应", desc: "SIEM、日志分析、威胁狩猎和数字取证。" },
      { title: "系统加固", desc: "Linux/Windows 加固、访问控制和合规基线。" },
    ],
  },
  skills: {
    badge: "技能",
    heading: "攻击和防御,端到端。",
    subheading:
      "我不选择杀伤链的某一方。我覆盖整个攻击面,从侦察到事件响应。",
    categories: {
      pentest: {
        title: "渗透测试与漏洞",
        items: ["OWASP Top 10", "Burp Suite", "Nmap", "Metasploit", "Nikto", "SQLmap", "漏洞评估"],
      },
      crypto: {
        title: "密码学",
        items: ["AES-256", "RSA", "PKI", "哈希函数", "数字签名", "安全协议"],
      },
      network: {
        title: "网络安全",
        items: ["Wireshark", "防火墙", "VPN", "TCP/IP", "Cisco", "数据包分析"],
      },
      scripting: {
        title: "安全脚本",
        items: ["Python", "Bash", "PowerShell", "脚本", "自动化", "自定义工具"],
      },
      siem: {
        title: "SIEM 与监控",
        items: ["Splunk", "日志分析", "威胁狩猎", "SIEM", "事件响应"],
      },
      platforms: {
        title: "工具与平台",
        items: ["Kali Linux", "Parrot OS", "Git", "Docker", "VirtualBox", "TryHackMe", "HackTheBox"],
      },
    },
  },
  projects: {
    badge: "精选作品",
    heading: "构建、破解并保护的项目。",
    subheading:
      "安全工具、加密应用和检测系统的精选集。每一个都教会我新东西。",
    viewCode: "查看代码",
    viewLive: "在线演示",
    role: "角色",
    impact: "影响",
    tech: "技术",
    featured: "精选",
    classified: "机密",
    items: [
      {
        name: "Crypto Vault",
        tagline: "浏览器中的 AES-256 加密",
        description:
          "客户端加密保险库,使用 AES-256 在浏览器中完全加密和解密机密。零数据离开设备。围绕信任设计用户体验:清晰的加密状态、复制到剪贴板、无混淆的空状态。",
        role: "安全工程师与开发者",
        impact: "无服务器加密、干净的密钥管理 UX、AES-256-GCM",
        tech: ["AES-256", "Web Crypto API", "JavaScript", "HTML5", "CSS3"],
        image: "/portfolio-images/crypto-vault.jpeg",
        githubUrl: "https://github.com/mitchoder07/cryptoVault",
        liveUrl: "https://crypto-vauult.vercel.app/",
      },
      {
        name: "Cyber Bot",
        tagline: "提供即时威胁情报的网络安全问答机器人",
        description:
          "网络安全问答机器人,就恶意软件、网络钓鱼和加密等常见安全主题提供即时回答。设计了对话式 UI、建议提示模式和易读的答案卡片。内置涵盖 OWASP 基础的知识库。",
        role: "安全工程师与开发者",
        impact: "即时回答、建议提示、OWASP 感知知识库",
        tech: ["JavaScript", "HTML5", "CSS3", "安全概念"],
        image: "/portfolio-images/cyber-bot.jpg",
        githubUrl: "https://github.com/mitchoder07/cyber-bot",
        liveUrl: "https://cyber-bot-zeta.vercel.app/",
      },
      {
        name: "Cyber-Words Guess",
        tagline: "安全术语猜词游戏用于培训",
        description:
          "围绕网络安全术语构建的猜词游戏。设计了游戏循环、屏幕键盘和颜色编码的反馈状态。作为单页应用发布,具有平滑的状态转换。也可作为学习安全词汇的有趣培训工具。",
        role: "安全工程师与开发者",
        impact: "游戏循环、屏幕键盘、颜色编码反馈",
        tech: ["JavaScript", "HTML5", "CSS3", "安全词汇"],
        image: "/portfolio-images/cyber-words.jpg",
        liveUrl: "https://word-guessing-game-nine.vercel.app/",
      },
      {
        name: "Network Scanner",
        tagline: "带端口检测的 Python 网络扫描器",
        description:
          "用 Python 编写的自定义网络扫描器,可发现子网上的活动主机并通过服务指纹识别检测开放端口。专为在授权渗透测试期间自动化侦察而构建。输出主机、端口和服务的清晰报告供进一步分析。",
        role: "安全工程师",
        impact: "自动化侦察、端口检测、服务指纹识别",
        tech: ["Python", "Sockets", "Threading", "Nmap API"],
        gradient: "linear-gradient(135deg, #00ff41 0%, #00d4ff 100%)",
        classified: true,
      },
      {
        name: "Phishing Detector",
        tagline: "基于机器学习的钓鱼 URL 检测器",
        description:
          "机器学习工具,根据词法特征、域名年龄和重定向行为将 URL 分类为钓鱼或合法。在精选的钓鱼 URL 数据集上训练。设计为可嵌入浏览器扩展和邮件网关。",
        role: "安全工程师",
        impact: "机器学习分类、特征工程、可嵌入浏览器",
        tech: ["Python", "scikit-learn", "pandas", "URL 特征"],
        gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
        classified: true,
      },
      {
        name: "Log Analyzer",
        tagline: "带异常检测的 SIEM 日志分析",
        description:
          "SIEM 日志分析工具,摄取身份验证日志、Web 访问日志和系统日志,然后标记暴力破解尝试、横向移动和权限提升等异常。围绕可配置的规则引擎和统计基线构建。为事件响应团队输出威胁时间线。",
        role: "安全工程师",
        impact: "异常检测、威胁时间线、规则引擎",
        tech: ["Python", "Regex", "统计", "SIEM 概念"],
        gradient: "linear-gradient(135deg, #a855f7 0%, #00d4ff 100%)",
        classified: true,
      },
    ],
  },
  experience: {
    badge: "经历",
    heading: "五年来的破坏、修复和保护。",
    subheading:
      "从大学实验室到 NYSC 服务和自学研究。每个角色都教会我安全工艺的不同方面。",
    items: [
      {
        role: "IT 支持 (NYSC)",
        company: "联邦健康科学大学,Ila (FUHSI)",
        period: "2025",
        description:
          "NYSC 服务年度的 IT 支持。解决帮助台工单、自动化安全任务,并为员工和学生提供支持。",
        achievements: [
          "为员工和学生解决 200+ 帮助台工单",
          "使用 Python 和 Bash 自动化重复的安全和 IT 任务",
          "为团队编写 IT 和安全程序文档",
        ],
      },
      {
        role: "网络安全毕业生",
        company: "Al-Hikmah 大学",
        period: "2024",
        description:
          "以 CGPA 4.27/5.00 完成 B.Sc. 网络安全学位。涵盖渗透测试、密码学、网络安全和安全系统设计。",
        achievements: [
          "B.Sc. 网络安全,CGPA 4.27/5.00",
          "密码学、网络安全和数字取证课程",
          "毕业设计为密码协议分析",
        ],
      },
      {
        role: "AI 实习生",
        company: "AI4FS,Summit 大学",
        period: "2023",
        description:
          "AI for Females in STEM 实习。探索 AI 基础并将其应用于小项目,着眼于安全应用。",
        achievements: [
          "在有指导的情况下完成应用 AI 课程",
          "用 Python 构建小型 ML 演示",
          "向队列展示最终项目",
        ],
      },
      {
        role: "安全研究员 (自学)",
        company: "TryHackMe & HackTheBox",
        period: "2023 - 至今",
        description:
          "在 TryHackMe (前 10%) 和 HackTheBox 上活跃参与。解决 CTF 挑战、完成学习路径并磨砺攻击性安全技能。",
        achievements: [
          "TryHackMe 前 10%,完成学习路径",
          "HackTheBox 活跃玩家,完成排名机器",
          "定期在 Web、Crypto 和网络类别中参加 CTF",
        ],
      },
      {
        role: "安全脚本 (自学)",
        company: "自学",
        period: "2021 - 至今",
        description:
          "使用 Python、Bash 和 PowerShell 构建自定义安全工具。用于侦察、日志分析和自动化加固的脚本。",
        achievements: [
          "用 Python 构建自定义网络扫描器和日志分析器",
          "使用 Bash 自动化 Linux 加固基线",
          "开发可重用的安全自动化库",
        ],
      },
    ],
  },
  certifications: {
    badge: "证书",
    heading: "证书与培训",
    subheading:
      "正式凭据和实践培训。部分已完成,部分进行中,都是旅程的一部分。",
    items: [
      { name: "CompTIA Security+", issuer: "CompTIA", status: "进行中", statusType: "in-progress", desc: "基础安全认证,涵盖威胁、架构、运营和风险管理。" },
      { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", status: "已计划", statusType: "planned", desc: "实践性道德黑客认证,涵盖侦察、漏洞利用和后渗透。" },
      { name: "TryHackMe", issuer: "TryHackMe", status: "前 10%", statusType: "completed", desc: "完成 Jr Penetration Tester、Web Fundamentals 和 Cyber Defense 学习路径。全球前 10%。" },
      { name: "HackTheBox", issuer: "HackTheBox", status: "活跃玩家", statusType: "completed", desc: "HackTheBox 排名活跃玩家。完成 Linux、Windows、Web 和 Crypto 类别的机器。" },
      { name: "Cisco CCNA", issuer: "Cisco", status: "已计划", statusType: "planned", desc: "Cisco Certified Network Associate。网络基础、路由、交换和安全。" },
      { name: "AWS Security Specialty", issuer: "Amazon Web Services", status: "已计划", statusType: "planned", desc: "AWS Certified Security - Specialty。云安全、身份、监控和 AWS 上的事件响应。" },
    ],
  },
  ctf: {
    badge: "CTF 挑战",
    heading: "觉得自己能破解吗?",
    subheading:
      "解码下方的 Base64 字符串并提交隐藏的 flag。如果卡住了请使用提示。真正的黑客会阅读源代码。",
    intro: "我们的传感器截获了加密传输。解码以显示隐藏的 flag。",
    encodedLabel: "加密传输",
    encodedValue: "RkxBR3t5b3VfZGVjb2RlZF90aGVfY2lwaGVyfQ==",
    decodedLabel: "预期解码输出",
    inputLabel: "提交解码的 flag",
    inputPlaceholder: "在此输入解码的 flag...",
    submit: "提交 flag",
    hint: "显示提示",
    hintMessage: "Base64 是一种二进制到文本的编码。打开浏览器控制台并运行: atob('RkxBR3t5b3VfZGVjb2RlZF90aGVfY2lwaGVyfQ==') 即时解码。",
    successTitle: "已捕获 flag",
    successMessage: "你解开了密码。真正的黑客直觉。flag 已被记录。",
    flag: "FLAG{you_decoded_the_cipher}",
    wrongMessage: "flag 不正确。再试一次,或查看提示。",
    attemptsLabel: "尝试次数",
  },
  tools: {
    badge: "武器库",
    heading: "我武器库中的工具",
    subheading:
      "日常工具包。从侦察到漏洞利用,这些是我使用的武器。",
    items: [
      { name: "Nmap", category: "侦察" },
      { name: "Wireshark", category: "网络分析" },
      { name: "Metasploit", category: "漏洞利用" },
      { name: "Burp Suite", category: "Web 渗透" },
      { name: "Kali Linux", category: "操作系统" },
      { name: "Python", category: "脚本" },
      { name: "Docker", category: "基础设施" },
      { name: "Splunk", category: "SIEM" },
      { name: "John the Ripper", category: "密码破解" },
      { name: "Hashcat", category: "密码破解" },
      { name: "Nikto", category: "Web 扫描器" },
      { name: "SQLmap", category: "SQL 注入" },
    ],
  },
  feed: {
    badge: "威胁源",
    heading: "最新威胁与 CVE",
    subheading:
      "最近 CVE 和安全通告的实时源。按严重程度分级以便分诊。演示用模拟数据。",
    live: "实时",
    items: [
      { cve: "CVE-2024-3094", severity: "critical", desc: "liblzma 中的 XZ Utils 后门允许通过 SSH 远程执行代码" },
      { cve: "CVE-2024-21413", severity: "critical", desc: "Microsoft Outlook moniker 链接 RCE 绕过安全警告" },
      { cve: "CVE-2024-23897", severity: "critical", desc: "Jenkins 任意文件读取漏洞导致 RCE" },
      { cve: "CVE-2024-27198", severity: "critical", desc: "TeamCity 身份验证绕过允许管理员接管" },
      { cve: "CVE-2024-1086", severity: "high", desc: "Linux 内核 nf_tables 本地权限提升到 root" },
      { cve: "CVE-2024-1709", severity: "high", desc: "ConnectWise ScreenConnect 身份验证绕过导致 RCE" },
      { cve: "CVE-2024-21887", severity: "high", desc: "Ivanti Connect Secure 命令注入与 CVE-2023-46805 链式利用" },
      { cve: "CVE-2024-0204", severity: "high", desc: "Fortra GoAnywhere MFT 管理员身份验证绕过" },
      { cve: "CVE-2023-50164", severity: "high", desc: "Apache Struts 文件上传路径遍历导致 RCE" },
      { cve: "CVE-2024-20767", severity: "medium", desc: "Adobe ColdFusion 不当访问控制漏洞" },
      { cve: "CVE-2024-22004", severity: "medium", desc: "Ivanti Connect Secure SAML 组件中的 XXE" },
      { cve: "CVE-2024-1012", severity: "low", desc: "WordPress 插件评论表单中的存储型 XSS" },
    ],
  },
  contact: {
    badge: "联系",
    heading: "让我们一起来保护些什么。",
    subheading:
      "接受渗透测试合同、安全审计和全职网络安全职位。",
    nameLabel: "您的姓名",
    emailLabel: "邮箱地址",
    messageLabel: "您的消息",
    namePlaceholder: "您的姓名",
    emailPlaceholder: "your@email.com",
    messagePlaceholder: "告诉我您的安全需求、职位或审计范围...",
    send: "发送消息",
    sending: "传输中...",
    success: "消息已发送。我将在 48 小时内回复您。",
    orText: "或",
    emailMe: "直接给我发邮件",
    whatsappMe: "在 WhatsApp 上发消息",
    followTitle: "在安全平台上找到我",
  },
  footer: {
    tagline: "网络安全工程师。道德黑客。威胁猎人。",
    quote: "安全是过程而非产品。最好的防御是一个测试一切的偏执头脑。",
    builtWith: "使用 Next.js、TypeScript 和大量咖啡因构建。保持偏执。",
    rights: "保留所有权利。",
    backToTop: "返回顶部",
    quickLinks: "快速链接",
    connect: "连接",
  },
};

export const translations: Record<Locale, Translation> = {
  en,
  ms,
  ha,
  yo,
  ja,
  ar,
  zh,
};
