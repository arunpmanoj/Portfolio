"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/portfolio-data";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 60], [0.7, 1]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-4 z-50 mx-auto w-[min(1100px,calc(100%-24px))]"
    >
      <motion.nav
        style={{ opacity: navOpacity }}
        className="glass flex min-h-[60px] items-center justify-between rounded-full px-5 text-sm text-white/60"
      >
        {/* Logo */}
        <a
          href="#home"
          className="focus-ring rounded-full px-2 py-1.5 font-display text-base font-bold text-white transition hover:text-white/70"
        >
          Arun<span className="text-white/40">.</span>dev
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-0.5 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-4 py-2 transition-all duration-200 hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <a
            href="/resume-arun-p-manoj.pdf"
            download
            className="focus-ring inline-flex h-9 items-center gap-1.5 rounded-full border border-white/20 bg-white/6 px-4 text-xs font-semibold text-white/80 transition hover:bg-white hover:text-black"
          >
            <ArrowDownToLine size={14} />
            Resume
          </a>
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="focus-ring grid size-9 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:border-white/25 md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
              transition={{ duration: 0.18 }}
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="glass mt-2 grid gap-1 rounded-[22px] p-3 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/8 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-1 flex items-center justify-between border-t border-white/8 px-2 pt-3">
              <ThemeToggle />
              <a
                href="/resume-arun-p-manoj.pdf"
                download
                className="rounded-full border border-white/20 bg-white/6 px-4 py-2 text-xs font-semibold text-white/80 transition hover:bg-white hover:text-black"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
