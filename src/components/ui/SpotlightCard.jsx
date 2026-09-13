import { useRef, useState } from "react";

/**
 * SpotlightCard — Awwwards & Linear-style cursor-aware illuminated card.
 * Tracks mouse position via CSS variables to avoid React re-render lag.
 * Features both surface ambient glow and illuminated border-beam.
 */
export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(245, 158, 11, 0.08)",
  onClick,
  ...props
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative overflow-hidden bento-card group ${className}`}
      {...props}
    >
      {/* Surface ambient spotlight glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${spotlightColor}, transparent 60%)`,
        }}
        aria-hidden="true"
      />

      {/* Perimeter border-beam spotlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 border border-amber-600/30 dark:border-amber-400/40 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          maskImage: `radial-gradient(240px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black, transparent)`,
          WebkitMaskImage: `radial-gradient(240px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black, transparent)`,
        }}
        aria-hidden="true"
      />

      {/* Content Layer */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}

