"use client";

import { useEffect, useRef } from "react";

/**
 * Matrix rain effect — canvas-based falling green characters.
 * Performant: uses a single canvas, throttled by rAF, and pauses when offscreen.
 */
export function MatrixRain({ opacity = 0.6 }: { opacity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let columns = 0;
    let drops: number[] = [];
    const fontSize = 14;
    const chars =
      "01ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ!@#$%^&*()<>?ABCDEF0123456789".split("");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      columns = Math.floor(width / fontSize);
      drops = Array(columns).fill(0).map(() => Math.random() * -100);
    };
    resize();

    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);

    let lastTime = 0;
    const fpsInterval = 1000 / 22; // ~22fps, plenty for matrix effect
    let animId = 0;

    const draw = (timestamp: number) => {
      animId = requestAnimationFrame(draw);
      const delta = timestamp - lastTime;
      if (delta < fpsInterval) return;
      lastTime = timestamp - (delta % fpsInterval);

      // Fade trail
      ctx.fillStyle = "rgba(10, 10, 10, 0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
      ctx.textBaseline = "top";

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Head of stream is brighter
        if (Math.random() > 0.975) {
          ctx.fillStyle = "rgba(180, 255, 200, 0.95)";
        } else {
          ctx.fillStyle = "rgba(0, 255, 65, 0.75)";
        }
        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    if (!reduce) {
      animId = requestAnimationFrame(draw);
    } else {
      // Single static frame for reduced motion
      ctx.fillStyle = "rgba(10, 10, 10, 1)";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "rgba(0, 255, 65, 0.4)";
      ctx.font = `${fontSize}px monospace`;
      drops.forEach((d, i) => {
        ctx.fillText(chars[i % chars.length], i * fontSize, d * fontSize);
      });
    }

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ opacity }}
      aria-hidden
    />
  );
}
