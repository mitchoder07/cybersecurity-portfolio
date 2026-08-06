"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

// Single, stable profile image used everywhere (navbar, mobile drawer, footer).
// The avatar no longer rotates through anime/Upin characters.
const PROFILE_IMAGE = "/portfolio-images/profile.jpg";
const PROFILE_NAME = "Abdullah Yusuf";

interface AnimatedLogoProps {
  /** Click handler — usually scrolls to top */
  onClick?: () => void;
  /** Size variant — default for navbar, "lg" for hero/footer */
  size?: "default" | "lg";
  /** Show the "Upin" wordmark next to the avatar */
  showText?: boolean;
  className?: string;
}

export function AnimatedLogo({
  onClick,
  size = "default",
  showText = true,
  className,
}: AnimatedLogoProps) {
  const avatarSize = size === "lg" ? 44 : 36;
  const textSize = size === "lg" ? "text-xl" : "text-lg";

  return (
    <button
      onClick={onClick}
      data-cursor="pointer"
      aria-label="Upin — back to top"
      className={cn("group relative flex items-center gap-2.5", className)}
    >
      {/* Avatar container */}
      <div
        className="relative shrink-0"
        style={{ width: avatarSize, height: avatarSize }}
      >
        {/* Animated gradient ring */}
        <div
          className="absolute -inset-[2px] rounded-full opacity-80 blur-[1px] transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "conic-gradient(from 0deg, var(--neon), var(--magenta), var(--neon-soft), var(--neon))",
            animation: "logo-spin 4s linear infinite",
          }}
        />
        {/* Inner mask to create ring effect */}
        <div className="absolute inset-0 rounded-full bg-background" style={{ margin: 2 }} />

        {/* Stable profile image */}
        <div className="absolute overflow-hidden rounded-full" style={{ inset: 2 }}>
          <Image
            src={PROFILE_IMAGE}
            alt={`${PROFILE_NAME} avatar`}
            fill
            sizes={`${avatarSize}px`}
            className="object-cover"
            priority
          />

          {/* Subtle gradient sheen on hover */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </div>

      {/* Wordmark — just "Upin", no mode label */}
      {showText && (
        <span className={cn("font-display font-bold tracking-tight", textSize)}>
          <AnimatedWordmark />
        </span>
      )}

      {/* Inline keyframes for the conic ring spin */}
      <style jsx>{`
        @keyframes logo-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </button>
  );
}

/**
 * The "Upin" wordmark with a flowing gradient animation.
 * Uses background-clip: text with an animated gradient position.
 */
function AnimatedWordmark() {
  return (
    <span className="relative inline-block">
      <span
        className="bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(110deg, var(--foreground) 0%, var(--foreground) 35%, var(--neon) 50%, var(--magenta) 65%, var(--foreground) 80%, var(--foreground) 100%)",
          backgroundSize: "200% 100%",
          animation: "wordmark-shimmer 5s ease-in-out infinite",
        }}
      >
        Upin
      </span>
      <style jsx>{`
        @keyframes wordmark-shimmer {
          0%,
          100% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 0%;
          }
        }
      `}</style>
    </span>
  );
}
