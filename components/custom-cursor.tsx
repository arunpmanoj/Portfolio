"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 450, damping: 38 });
  const springY = useSpring(y, { stiffness: 450, damping: 38 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    const move = (event: MouseEvent) => {
      x.set(event.clientX - 18);
      y.set(event.clientY - 18);
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="custom-cursor pointer-events-none fixed left-0 top-0 z-[70] size-9 rounded-full border border-white/20 bg-white/[0.04] mix-blend-screen shadow-[0_0_24px_rgba(255,255,255,0.12)]"
      style={{ x: springX, y: springY }}
    />
  );
}
