"use client";

import { motion, useMotionValue, useSpring, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type MagneticButtonProps = HTMLMotionProps<"a"> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary: "border-white/80 bg-white text-black hover:bg-white/90 hover:border-white",
  secondary: "border-white/20 bg-white/8 text-white/80 hover:border-white/40 hover:bg-white/12",
  ghost: "border-white/12 bg-white/4 text-white/70 hover:border-white/25 hover:bg-white/8"
};

export function MagneticButton({
  children,
  className = "",
  variant = "primary",
  ...props
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 16, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 180, damping: 16, mass: 0.35 });

  return (
    <motion.a
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.16);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.16);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={`focus-ring group inline-flex min-h-10 sm:min-h-12 items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-xs sm:px-5 sm:py-3 sm:text-sm font-semibold transition duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  );
}
