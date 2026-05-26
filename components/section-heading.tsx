"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  className?: string;
};

export function SectionHeading({ eyebrow, title, children, className = "" }: SectionHeadingProps) {
  return (
    <div className={`mb-14 max-w-3xl ${className}`}>
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-4 flex items-center gap-3"
      >
        <span className="h-px w-6 bg-white/40" />
        <p className="font-display text-xs font-semibold uppercase tracking-[0.36em] text-white/50">
          {eyebrow}
        </p>
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.01em] text-white sm:text-5xl md:text-[3.4rem]"
      >
        {title}
      </motion.h2>

      {/* Sub-copy */}
      {children ? (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-2xl text-base leading-[1.85] text-white/50 md:text-lg"
        >
          {children}
        </motion.p>
      ) : null}
    </div>
  );
}
