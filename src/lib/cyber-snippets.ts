export type CodeSnippet = {
  language: string;
  filename: string;
  code: string;
};

export const cyberCodeSnippets: CodeSnippet[] = [
  // 1. Crypto Vault — AES-256-GCM encryption
  {
    language: "javascript",
    filename: "crypto-vault/encrypt.js",
    code: `// AES-256-GCM encryption in the browser using Web Crypto API
// Zero data leaves the device — keys are derived from user password.

async function deriveKey(password, salt) {
  const enc = new TextEncoder();
  const baseKey = await crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveKey"]
  );
  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: 250000,
      hash: "SHA-256",
    },
    baseKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

export async function encryptSecret(plaintext, password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(password, salt);
  const enc = new TextEncoder();
  const ciphertext = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    enc.encode(plaintext)
  );
  return { salt, iv, ciphertext };
}`,
  },

  // 2. Cyber Bot — security Q&A logic
  {
    language: "javascript",
    filename: "cyber-bot/knowledge.js",
    code: `// Cybersecurity Q&A knowledge base
// Pattern-matches user input against security topics.

const knowledgeBase = [
  {
    topic: "phishing",
    keywords: ["phish", "email scam", "spoof"],
    answer: "Phishing is a social engineering attack where attackers send fraudulent emails pretending to be a trusted entity, aiming to steal credentials or deliver malware. Defenses: SPF/DKIM/DMARC, user training, and MFA.",
  },
  {
    topic: "owasp-top-10",
    keywords: ["owasp", "injection", "xss", "broken access"],
    answer: "The OWASP Top 10 is a standard awareness document listing the 10 most critical web application security risks, including Injection, Broken Authentication, and XSS. Use it as a pentest checklist.",
  },
  {
    topic: "cryptography",
    keywords: ["aes", "rsa", "encryption", "hash"],
    answer: "AES-256 is a symmetric cipher used for data at rest. RSA is asymmetric, used for key exchange and signatures. Never roll your own crypto — use vetted libraries.",
  },
];

export function findAnswer(query) {
  const q = query.toLowerCase();
  for (const entry of knowledgeBase) {
    if (entry.keywords.some(k => q.includes(k))) {
      return entry.answer;
    }
  }
  return "I don't have a specific answer for that. Try asking about phishing, OWASP, or cryptography.";
}`,
  },

  // 3. Cyber-Words — game loop with security vocab
  {
    language: "javascript",
    filename: "cyber-words/useGameLoop.js",
    code: `import { useState, useEffect, useCallback } from "react";

const SECURITY_WORDS = [
  "PHISHING", "MALWARE", "ENCRYPTION", "FIREWALL", "VULNERABILITY",
  "EXPLOIT", "RANSOMWARE", "BOTNET", "CIPHERTEXT", "AUTHENTICATION",
];

export function useGameLoop() {
  const [target, setTarget] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [status, setStatus] = useState("playing");

  const newGame = useCallback(() => {
    const word = SECURITY_WORDS[Math.floor(Math.random() * SECURITY_WORDS.length)];
    setTarget(word);
    setGuesses([]);
    setStatus("playing");
  }, []);

  useEffect(() => { newGame(); }, [newGame]);

  const submit = (word) => {
    if (word.length !== target.length) return;
    const newGuesses = [...guesses, word.toUpperCase()];
    setGuesses(newGuesses);
    if (word.toUpperCase() === target) setStatus("won");
    else if (newGuesses.length >= 6) setStatus("lost");
  };

  // Per-letter feedback: correct / present / absent
  const score = (guess) => {
    return guess.split("").map((ch, i) => {
      if (ch === target[i]) return "correct";
      if (target.includes(ch)) return "present";
      return "absent";
    });
  };

  return { target, guesses, status, submit, score, newGame };
}`,
  },

  // 4. Network Scanner — Python port scan
  {
    language: "python",
    filename: "network_scanner/scanner.py",
    code: `#!/usr/bin/env python3
"""Network scanner with port detection and service fingerprinting.
For authorized use only — written for pentest reconnaissance.
"""
import socket
import concurrent.futures
from datetime import datetime

COMMON_PORTS = {
    21: "ftp", 22: "ssh", 23: "telnet", 25: "smtp",
    53: "dns", 80: "http", 110: "pop3", 143: "imap",
    443: "https", 3306: "mysql", 3389: "rdp",
    5432: "postgresql", 6379: "redis", 8080: "http-proxy",
}

def scan_port(host, port, timeout=1.0):
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.settimeout(timeout)
            result = s.connect_ex((host, port))
            if result == 0:
                service = COMMON_PORTS.get(port, "unknown")
                return port, service, "open"
    except (socket.timeout, OSError):
        pass
    return port, None, "closed"

def scan_host(host, ports=None):
    ports = ports or list(COMMON_PORTS.keys())
    open_ports = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=50) as ex:
        futures = [ex.submit(scan_port, host, p) for p in ports]
        for fut in concurrent.futures.as_completed(futures):
            port, service, state = fut.result()
            if state == "open":
                open_ports.append((port, service))
    return sorted(open_ports, key=lambda x: x[0])

if __name__ == "__main__":
    target = input("Target host: ").strip()
    print(f"[*] Scanning {target} at {datetime.now()}")
    for port, service in scan_host(target):
        print(f"  {port:>5}/tcp   open   {service}")`,
  },

  // 5. Phishing Detector — ML feature extraction
  {
    language: "python",
    filename: "phishing_detector/features.py",
    code: `"""Phishing URL feature extractor.
Lexical + host-based features fed into a logistic regression model.
"""
import re
from urllib.parse import urlparse
import tldextract

def extract_features(url):
    parsed = urlparse(url)
    ext = tldextract.extract(url)
    features = {
        # Lexical features
        "url_length": len(url),
        "num_dots": url.count("."),
        "num_hyphens": url.count("-"),
        "num_at": url.count("@"),
        "has_ip": bool(re.match(r"\\d+\\.\\d+\\.\\d+\\.\\d+", parsed.netloc)),
        "has_https": parsed.scheme == "https",
        "subdomain_count": len(ext.subdomain.split(".")) if ext.subdomain else 0,
        # Suspicious tokens
        "has_login": int("login" in url.lower()),
        "has_secure": int("secure" in url.lower()),
        "has_account": int("account" in url.lower()),
        "has_verify": int("verify" in url.lower()),
        "has_update": int("update" in url.lower()),
        # TLD reputation proxy
        "tld_is_common": int(ext.suffix in {"com", "org", "net", "edu", "gov"}),
    }
    return features

def vectorize(url):
    feats = extract_features(url)
    return [v for v in feats.values()]

# In production: train on PhishTank + OpenPhish datasets
# with sklearn.linear_model.LogisticRegression`,
  },

  // 6. Log Analyzer — anomaly detection
  {
    language: "python",
    filename: "log_analyzer/detect.py",
    code: `"""SIEM log analyzer with anomaly detection.
Detects brute-force, lateral movement, and privilege escalation.
"""
import re
from collections import defaultdict, Counter
from datetime import datetime, timedelta

AUTH_LOG_PATTERN = re.compile(
    r"(?P<timestamp>\\w{3}\\s+\\d+\\s+[\\d:]+)\\s+"
    r"(?P<host>\\S+)\\s+(?P<process>\\S+?):\\s+"
    r"(?P<message>.*)"
)

FAILED_LOGIN = re.compile(r"Failed password for (?:invalid user )?(?P<user>\\S+) from (?P<ip>\\d+\\.\\d+\\.\\d+\\.\\d+)")
SUCCESS_LOGIN = re.compile(r"Accepted password for (?P<user>\\S+) from (?P<ip>\\S+)")

def analyze_auth_log(lines):
    failures = defaultdict(Counter)
    successes = defaultdict(list)
    anomalies = []

    for line in lines:
        m = AUTH_LOG_PATTERN.search(line)
        if not m:
            continue
        msg = m.group("message")
        if (fm := FAILED_LOGIN.search(msg)):
            failures[fm.group("ip")][fm.group("user")] += 1
        elif (sm := SUCCESS_LOGIN.search(msg)):
            successes[sm.group("user")].append(sm.group("ip"))

    # Brute-force: 10+ failed attempts from one IP within window
    for ip, users in failures.items():
        total = sum(users.values())
        if total >= 10:
            anomalies.append({
                "type": "brute_force",
                "source_ip": ip,
                "attempts": total,
                "targeted_users": list(users.keys()),
            })

    # Lateral movement: same user from 3+ distinct IPs
    for user, ips in successes.items():
        unique_ips = set(ips)
        if len(unique_ips) >= 3:
            anomalies.append({
                "type": "lateral_movement",
                "user": user,
                "source_ips": list(unique_ips),
            })

    return anomalies`,
  },
];
