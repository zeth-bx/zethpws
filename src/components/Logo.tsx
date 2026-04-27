import { motion } from "motion/react";

export function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <title>Logo Zeth</title>
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#FDE047", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#EAB308", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Background Hexagon or Shield */}
      <path
        d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-white/10"
      />
      {/* The Styled 'Z' */}
      <motion.path
        d="M30 30 H70 L30 70 H70"
        fill="none"
        stroke="url(#goldGradient)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      {/* Accent Profit Line */}
      <motion.path
        d="M20 80 Q50 60 80 80"
        fill="none"
        stroke="#22C55E"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />
    </motion.svg>
  );
}

export function LogoText() {
  return (
    <div className="flex items-center gap-3">
      <Logo className="w-10 h-10" />
      <span className="font-sans font-bold text-2xl tracking-tighter text-white uppercase italic">
        Zeth
      </span>
    </div>
  );
}
