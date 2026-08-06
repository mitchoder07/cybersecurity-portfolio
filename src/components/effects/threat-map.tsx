"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated threat map — an SVG world map with animated attack arcs.
 * Arcs fly from random points to other points, simulating cyber attacks
 * in green/amber/red colors.
 */

type Attack = {
  id: number;
  from: { x: number; y: number };
  to: { x: number; y: number };
  color: string;
  duration: number;
};

// Simplified dotted world map — abstract continents as dot grids
// viewBox: 0 0 1000 500 (equirectangular-ish)
const ATTACK_COLORS = [
  { color: "#00ff41", weight: 5 }, // green - low severity
  { color: "#f59e0b", weight: 3 }, // amber - medium
  { color: "#ef4444", weight: 2 }, // red - critical
];

function pickColor() {
  const total = ATTACK_COLORS.reduce((s, c) => s + c.weight, 0);
  let r = Math.random() * total;
  for (const c of ATTACK_COLORS) {
    if (r < c.weight) return c.color;
    r -= c.weight;
  }
  return ATTACK_COLORS[0].color;
}

// Generate dot grid that vaguely resembles continents
function generateWorldDots() {
  const dots: { x: number; y: number }[] = [];
  // North America
  for (let i = 0; i < 120; i++) {
    const x = 80 + Math.random() * 200;
    const y = 80 + Math.random() * 120;
    if (Math.random() > 0.3) dots.push({ x, y });
  }
  // South America
  for (let i = 0; i < 80; i++) {
    const x = 220 + Math.random() * 80;
    const y = 250 + Math.random() * 150;
    if (Math.random() > 0.3) dots.push({ x, y });
  }
  // Europe
  for (let i = 0; i < 70; i++) {
    const x = 460 + Math.random() * 100;
    const y = 100 + Math.random() * 80;
    if (Math.random() > 0.3) dots.push({ x, y });
  }
  // Africa
  for (let i = 0; i < 130; i++) {
    const x = 470 + Math.random() * 120;
    const y = 200 + Math.random() * 180;
    if (Math.random() > 0.3) dots.push({ x, y });
  }
  // Asia
  for (let i = 0; i < 180; i++) {
    const x = 580 + Math.random() * 240;
    const y = 100 + Math.random() * 160;
    if (Math.random() > 0.3) dots.push({ x, y });
  }
  // Australia
  for (let i = 0; i < 60; i++) {
    const x = 770 + Math.random() * 110;
    const y = 320 + Math.random() * 80;
    if (Math.random() > 0.3) dots.push({ x, y });
  }
  return dots;
}

export function ThreatMap({ className }: { className?: string }) {
  const [attacks, setAttacks] = useState<Attack[]>([]);
  const [dots] = useState(() => generateWorldDots());
  const idRef = useRef(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const spawn = () => {
      if (dots.length < 2) return;
      const from = dots[Math.floor(Math.random() * dots.length)];
      const to = dots[Math.floor(Math.random() * dots.length)];
      const attack: Attack = {
        id: idRef.current++,
        from,
        to,
        color: pickColor(),
        duration: 1500 + Math.random() * 1500,
      };
      setAttacks((prev) => [...prev.slice(-10), attack]);
    };

    const initial = setInterval(spawn, 800);
    spawn();
    spawn();

    const cleanup = setInterval(() => {
      setAttacks((prev) => prev.slice(-10));
    }, 1000);

    return () => {
      clearInterval(initial);
      clearInterval(cleanup);
    };
  }, [dots]);

  return (
    <svg
      viewBox="0 0 1000 500"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <filter id="threat-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Dotted world map */}
      <g opacity="0.5">
        {dots.map((d, i) => (
          <circle
            key={i}
            cx={d.x}
            cy={d.y}
            r="1.1"
            fill="#00ff41"
            opacity={0.7}
          />
        ))}
      </g>

      {/* Animated attack arcs */}
      {attacks.map((a) => {
        const cx = (a.from.x + a.to.x) / 2;
        const cy = Math.min(a.from.y, a.to.y) - Math.abs(a.to.x - a.from.x) * 0.25;
        const d = `M ${a.from.x} ${a.from.y} Q ${cx} ${cy} ${a.to.x} ${a.to.y}`;
        return (
          <AttackArc
            key={a.id}
            d={d}
            color={a.color}
            duration={a.duration}
            from={a.from}
            to={a.to}
          />
        );
      })}
    </svg>
  );
}

function AttackArc({
  d,
  color,
  duration,
  from,
  to,
}: {
  d: string;
  color: string;
  duration: number;
  from: { x: number; y: number };
  to: { x: number; y: number };
}) {
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);
  const startRef = useRef(Date.now());

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const path = pathRef.current;
      const dot = dotRef.current;
      if (!path || !dot) return;
      const elapsed = Date.now() - startRef.current;
      const t = Math.min(elapsed / duration, 1);
      if (t >= 1) {
        dot.setAttribute("opacity", "0");
        return;
      }
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      let total = 0;
      try {
        total = path.getTotalLength();
      } catch {
        return;
      }
      if (!total || !isFinite(total)) return;
      const point = path.getPointAtLength(total * eased);
      dot.setAttribute("cx", String(point.x));
      dot.setAttribute("cy", String(point.y));
      dot.setAttribute("opacity", String(t < 0.1 ? t * 10 : t > 0.9 ? (1 - t) * 10 : 1));
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [duration]);

  return (
    <>
      <path
        ref={pathRef}
        d={d}
        stroke={color}
        strokeWidth="1"
        fill="none"
        opacity="0.4"
        filter="url(#threat-glow)"
      />
      <circle cx={from.x} cy={from.y} r="3" fill={color} opacity="0.75">
        <animate
          attributeName="r"
          values="2;5;2"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx={to.x}
        cy={to.y}
        r="2"
        fill="none"
        stroke={color}
        strokeWidth="1"
        opacity="0.6"
      >
        <animate
          attributeName="r"
          values="2;8;2"
          dur="1.2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.8;0;0.8"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle ref={dotRef} r="2.5" fill={color} filter="url(#threat-glow)" />
    </>
  );
}
