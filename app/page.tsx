"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CustomCursor } from "@/components/custom-cursor";
import { HeroScene } from "@/components/hero-scene";
import { LoadingScreen } from "@/components/loading-screen";
import { MagneticButton } from "@/components/magnetic-button";
import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionHeading } from "@/components/section-heading";
import { SmoothProvider } from "@/components/smooth-provider";
import {
  journey,
  orbitSkills,
  projects,
  skillGroups,
  socialLinks,
} from "@/lib/portfolio-data";

const accentClass = {
  aqua: "bg-aqua/12 text-aqua",
  mint: "bg-white/10 text-white",
  ember: "bg-ember/12 text-ember",
  pulse: "bg-pulse/12 text-pulse",
} as const;

export default function Home() {
  return (
    <SmoothProvider>
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main className="relative min-h-screen overflow-x-clip">
        <div className="noise" />
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </SmoothProvider>
  );
}

function Hero() {
  const roles = ["Frontend Developer", "React Developer", "AI Enthusiast"];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <HeroScene />
      <div className="absolute inset-0 z-[1] grid-mask opacity-40" />
      {/* Radial glow centred on hero text */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        <div className="absolute left-[10%] top-[30%] size-[600px] -translate-y-1/2 rounded-full bg-white/[0.025] blur-[120px]" />
      </div>

      <div className="section-shell relative z-10 flex min-h-screen items-center pb-20 pt-24">
        <div className="max-w-[780px]">
          {/* Cursive signature — first in */}
          <motion.span
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 block font-cursive text-xl text-white/60 sm:text-2xl"
          >
            Hey, it&apos;s me Arun
          </motion.span>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.95,
              delay: 1.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-hero text-[3.6rem] font-semibold italic leading-[0.96] tracking-[0.01em] text-white sm:text-7xl lg:text-[5.8rem]"
          >
            Arun P Manoj
          </motion.h1>

          {/* Accent divider */}
          <motion.span
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 1.28,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-5 block h-px w-20 origin-left bg-gradient-to-r from-white/40 to-transparent"
          />

          {/* Animated role tags */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 1.35 },
              },
            }}
            className="mt-5 flex flex-wrap gap-2"
          >
            {roles.map((role) => (
              <motion.span
                key={role}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="role-pill rounded-full border border-white/12 bg-white/[0.06] px-4 py-1.5 text-sm font-medium text-white/75 backdrop-blur-sm"
              >
                {role}
              </motion.span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.65 }}
            className="mt-7 max-w-xl text-base leading-[1.85] text-white/58 md:text-lg"
          >
            Creating scalable and modern web experiences driven by innovation,
            performance, and thoughtful design.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.8 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <MagneticButton href="#projects">
              View Projects
              <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton
              href="/resume-arun-p-manoj.pdf"
              download
              variant="secondary"
            >
              Download Resume
              <ArrowDownToLine size={16} />
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Contact Me
              <Mail size={16} />
            </MagneticButton>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.95 }}
            className="mt-8 flex flex-wrap items-center gap-2.5"
          >
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="focus-ring grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-white/60 transition hover:border-white/25 hover:text-white"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="focus-ring absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-white/25 transition hover:text-white/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}

function About() {
  return (
    <>
      {/* ── About ── */}
      <section id="about" className="relative">
        <div className="section-shell max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="About me"
              title="Developer craft with community energy."
            />
            <div className="space-y-5 text-base leading-[1.9] text-white/60">
              <p>
                I am a frontend-focused developer passionate about building
                modern, responsive, and immersive web experiences using
                React.js, JavaScript, Tailwind CSS, and modern UI technologies.
              </p>
              <p>
                I enjoy creating clean interfaces, smooth interactions,
                API-driven applications, and performance optimized digital
                experiences.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── GitHub Activity ── */}
      <section id="github" className="relative">
        <div className="section-shell pt-0">
          <Reveal>
            {/* Centred compact wrapper */}
            <div className="mx-auto max-w-xl">
              {/* Eyebrow — centred */}
              <div className="mb-6 flex items-center justify-center gap-2.5">
                <span className="size-1.5 rounded-full bg-white/50" />
                <p className="font-display text-[10px] font-semibold uppercase tracking-[0.38em] text-white/40">
                  Activity
                </p>
              </div>

              {/* Compact glass card — everything centred */}
              <div className="glass relative overflow-hidden rounded-[20px] p-6 text-center">
                {/* Subtle top glow */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
                {/* Grid bg */}
                <div className="absolute inset-0 grid-mask opacity-20" />

                <div className="relative z-10">
                  {/* Title + username stacked */}
                  <h2 className="font-display text-base font-semibold tracking-wide text-white">
                    GitHub Contributions
                  </h2>
                  <p className="mt-1 font-mono text-xs text-white/32">
                    @arunpmanoj
                  </p>

                  {/* Graph */}
                  <div className="my-5 overflow-x-auto">
                    <img
                      src="https://ghchart.rshah.org/555555/arunpmanoj"
                      alt="Arun's GitHub contribution chart"
                      className="mx-auto h-auto w-full max-w-[420px] opacity-70"
                      loading="lazy"
                    />
                  </div>

                  {/* View Profile button — centred */}
                  <motion.a
                    href="https://github.com/arunpmanoj"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 text-xs font-semibold text-white/55 transition hover:border-white/25 hover:text-white"
                  >
                    <Github size={12} />
                    View GitHub Profile
                  </motion.a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Journey() {
  return (
    <section id="journey" className="relative">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Journey"
            title="Experience first, foundations underneath."
          />
        </Reveal>
        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-4 left-5 top-4 w-px origin-top bg-gradient-to-b from-white/40 via-white/15 to-transparent"
          />

          {journey.map((item, index) => (
            <Reveal key={item.place} delay={index * 0.12}>
              <div className="relative mb-6 pl-14">
                {/* Node */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: 0.1 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className="absolute left-1 top-5 z-10 grid size-7 place-items-center rounded-full border border-white/20 bg-black shadow-[0_0_14px_rgba(255,255,255,0.12)]"
                >
                  <span className="size-2 rounded-full bg-white/70" />
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -5,
                    boxShadow: "0 0 28px rgba(255,255,255,0.07)",
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 24 }}
                  className="glass overflow-hidden rounded-2xl px-5 py-4"
                >
                  {/* Top glow line */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  <div className="flex items-center gap-3">
                    {/* Monogram */}
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-white/8 bg-white/5">
                      <span className="font-display text-xs font-bold text-white/60">
                        {item.logo}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-white">
                        {item.place}
                      </p>
                      {item.type === "experience" && (
                        <p className="mt-0.5 text-xs text-white/50">
                          {item.title}
                        </p>
                      )}
                    </div>

                    {/* Period pill */}
                    <span className="shrink-0 rounded-full border border-white/8 px-2.5 py-0.5 text-[11px] text-white/38">
                      {item.period}
                    </span>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const [activeSkillCat, setActiveSkillCat] = useState(0);

  return (
    <section id="skills" className="relative">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="A practical stack for expressive products."
          >
            Strong frontend fundamentals, growing AI fluency, and tooling that
            keeps ideas moving.
          </SectionHeading>
        </Reveal>

        {/* ── Interactive 3D Cards Stack layout ── */}
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] items-center">
          {/* Left Column: Premium tab list selectors */}
          <div className="flex flex-col gap-2 md:gap-3">
            {skillGroups.map(({ title, icon: Icon, accent }, idx) => {
              const active = idx === activeSkillCat;
              return (
                <button
                  key={title}
                  onClick={() => setActiveSkillCat(idx)}
                  className={`focus-ring group flex items-center justify-between rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                    active
                      ? "border-mint bg-mint/10 text-white shadow-[0_4px_24px_rgba(79,70,229,0.12)]"
                      : "border-white/8 bg-white/[0.02] text-white/50 hover:border-white/15 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <Icon
                      size={18}
                      className={
                        active ? "text-mint animate-pulse" : "text-white/40"
                      }
                    />
                    <span className="text-sm font-semibold tracking-wide">
                      {title}
                    </span>
                  </div>
                  {/* Category numeric index watermark */}
                  <span
                    className={`font-mono text-[10px] ${active ? "text-mint font-semibold" : "text-white/20"}`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: 3D Fanned Pile Deck stack */}
          <div
            className="relative mx-auto w-full max-w-[420px] h-[340px] flex items-center justify-center overflow-visible select-none mt-6 lg:mt-0"
            style={{ perspective: 1000, transformStyle: "preserve-3d" }}
          >
            {skillGroups.map(({ title, icon: Icon, skills, accent }, idx) => {
              const isFocused = idx === activeSkillCat;
              const offset = idx - activeSkillCat;

              // 3D rotation yaw angles, translations, scale, and opacity stack offsets
              const rotate = offset * 4.5;
              const xOffset = offset * 14;
              const yOffset = offset * -10;
              const scale = 1 - Math.abs(offset) * 0.04;
              const opacity = isFocused
                ? 1
                : Math.max(0, 0.42 - Math.abs(offset) * 0.12);
              const zIndex = 20 - Math.abs(offset);

              return (
                <motion.div
                  key={title}
                  style={{
                    zIndex,
                    transformStyle: "preserve-3d",
                    transformOrigin: "bottom center",
                  }}
                  animate={{
                    rotate,
                    x: xOffset,
                    y: yOffset,
                    scale,
                    opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 160,
                    damping: 18,
                  }}
                  onClick={() => setActiveSkillCat(idx)}
                  className="absolute inset-0 cursor-pointer pointer-events-auto"
                >
                  {/* Glass Card */}
                  <div className="glass relative h-full w-full rounded-[26px] p-6 md:p-8 flex flex-col justify-between overflow-hidden border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.3)]">
                    {/* Tech precision grid mask backdrop */}
                    <div className="absolute inset-0 grid-mask opacity-15 pointer-events-none" />

                    <div className="relative z-10">
                      {/* Top Row: Icon badge, Category heading & Deck label */}
                      <div className="flex items-center justify-between mb-5 border-b border-white/5 pb-3">
                        <div className="flex items-center gap-3">
                          <span
                            className={`grid size-9 place-items-center rounded-xl ${accentClass[accent as keyof typeof accentClass]}`}
                          >
                            <Icon size={16} />
                          </span>
                          <h4 className="font-display text-base font-semibold text-white tracking-tight">
                            {title}
                          </h4>
                        </div>
                        <span className="font-mono text-[9px] text-white/20 select-none tracking-widest uppercase">
                          DECK {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Mini skill tags */}
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-lg border border-white/8 bg-white/[0.02] px-3 py-1.5 text-xs font-semibold text-white/70 tracking-wide transition hover:border-white/25 hover:text-white"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Status bar */}
                    <div className="relative z-10 border-t border-white/5 pt-3 text-[9px] text-white/30 font-semibold tracking-widest uppercase flex items-center justify-between select-none">
                      <span>Core Competency</span>
                      <span className="size-1.5 rounded-full bg-mint animate-pulse" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % projects.length);
  };

  return (
    <section id="projects" className="relative">
      <div className="section-shell pb-8">
        <Reveal>
          <SectionHeading
            eyebrow="Selected Works"
            title="Sleek software engineered with purpose and precision."
          >
            A curated selection of applications focusing on clean architecture,
            security, and responsive interaction design.
          </SectionHeading>
        </Reveal>

        {/* ── 3D Circular Rotating Carousel viewport ── */}
        <div
          className="relative mx-auto w-full max-w-[800px] h-[520px] md:h-[600px] flex items-center justify-center overflow-visible select-none"
          style={{ perspective: 1200, transformStyle: "preserve-3d" }}
        >
          {projects.map((project, i) => {
            // Circular offset calculation (value is always -1, 0, or 1)
            let diff = i - activeIdx;
            if (diff < -1) diff += 3;
            if (diff > 1) diff -= 3;

            const active = diff === 0;

            // Responsive horizontal coordinate positioning
            let translateX = 0;
            if (diff === 1) translateX = isMobile ? 120 : 255;
            if (diff === -1) translateX = isMobile ? -120 : -255;

            // 3D rotation, scale, opacity, and z-index offsets
            const scale = active ? 1 : isMobile ? 0.72 : 0.82;
            const opacity = active ? 1 : isMobile ? 0.25 : 0.42;
            const rotateY = diff === 1 ? -24 : diff === -1 ? 24 : 0;
            const zIndex = active ? 10 : 5;

            return (
              <motion.div
                key={project.title}
                style={{
                  zIndex,
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  x: translateX,
                  scale,
                  rotateY,
                  opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 140,
                  damping: 18,
                  mass: 0.8,
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.4}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -60) {
                    handleNext();
                  } else if (info.offset.x > 60) {
                    handlePrev();
                  }
                }}
                onClick={() => {
                  if (!active) {
                    setActiveIdx(i);
                  }
                }}
                className="absolute w-[280px] sm:w-[320px] md:w-[410px] h-[480px] md:h-[540px] cursor-pointer"
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            );
          })}
        </div>

        {/* ── Navigation & Progress Controls ── */}
        <div className="mt-8 flex flex-col items-center gap-5 z-20 relative">
          <div className="flex items-center gap-6">
            <button
              onClick={handlePrev}
              className="focus-ring flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-lg"
              aria-label="Previous Project"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Pagination dots indicator */}
            <div className="flex items-center gap-2">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIdx
                      ? "w-6 bg-white"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="focus-ring flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-lg"
              aria-label="Next Project"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Decorative separator leading into Contact */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="mx-auto mt-24 h-px max-w-xl origin-center bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </div>
    </section>
  );
}

/* ─── Contact particles ─────────────────────────────────────────────── */
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

function ContactParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        duration: 4 + Math.random() * 8,
        delay: Math.random() * 5,
        opacity: 0.15 + Math.random() * 0.45,
      })),
    );
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[36px]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/50"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -24, 0],
            opacity: [p.opacity, p.opacity * 0.3, p.opacity],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Magnetic social icon ───────────────────────────────────────────── */
function MagneticSocial({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: LucideIcon;
  label: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.94 }}
      className="group relative flex size-[60px] shrink-0 cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur transition-all duration-300 hover:border-white/25 hover:shadow-[0_0_24px_rgba(255,255,255,0.08)]"
    >
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.07) 0%, transparent 70%)",
        }}
      />
      <Icon
        size={22}
        className="relative z-10 text-white/55 transition-colors duration-300 group-hover:text-white"
      />
    </motion.a>
  );
}

/* ─── Contact section ───────────────────────────────────────────────── */
function Contact() {
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const inputCls = (name: string) =>
    `w-full rounded-xl border px-4 py-3 text-sm text-white bg-white/[0.04] placeholder:text-white/28 outline-none transition-all duration-300 ${
      focused === name
        ? "border-white/30 shadow-[0_0_0_3px_rgba(255,255,255,0.06)] bg-white/[0.06]"
        : "border-white/10 hover:border-white/20"
    }`;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setError(null);

    // Read values directly from DOM — most reliable approach in React
    const els = formRef.current.elements;
    const templateParams = {
      from_name:  (els.namedItem("from_name")  as HTMLInputElement).value.trim(),
      from_email: (els.namedItem("from_email") as HTMLInputElement).value.trim(),
      subject:    (els.namedItem("subject")    as HTMLInputElement).value.trim(),
      message:    (els.namedItem("message")    as HTMLTextAreaElement).value.trim(),
    };

    try {
      const emailjs = (await import("@emailjs/browser")).default;

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );

      formRef.current.reset();
      setSent(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden pb-0">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-1/3 size-[500px] rounded-full bg-white/[0.025] blur-[120px]" />
        <div className="absolute -right-40 bottom-1/4 size-[400px] rounded-full bg-white/[0.02] blur-[100px]" />
      </div>

      <div className="section-shell pt-4">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something sharp."
            className="text-center"
          >
            Have an idea, a project, or just want to connect? Drop a message
            below.
          </SectionHeading>
        </Reveal>

        <div className="relative mx-auto max-w-2xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl">
              <ContactParticles />
              {/* Top glow line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

              <div className="relative z-10">
                {/* Compact social row */}
                <div className="mb-6 flex items-center justify-center gap-3">
                  {[
                    {
                      href: "https://github.com/arunpmanoj",
                      icon: Github,
                      label: "GitHub",
                    },
                    {
                      href: "https://linkedin.com/in/arunpmanoj",
                      icon: Linkedin,
                      label: "LinkedIn",
                    },
                    {
                      href: "mailto:arunpmanoj12@gmail.com",
                      icon: Mail,
                      label: "Email",
                    },
                  ].map(({ href, icon: Icon, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      aria-label={label}
                      whileHover={{ scale: 1.12, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/50 transition-all hover:border-white/25 hover:text-white"
                    >
                      <Icon size={16} />
                    </motion.a>
                  ))}
                </div>

                {/* Form */}
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center gap-5 rounded-2xl border border-white/15 bg-white/[0.05] p-10 text-center"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.12, 1], rotate: [0, 8, -8, 0] }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="grid size-16 place-items-center rounded-full bg-white/10 text-white ring-2 ring-white/20"
                    >
                      <Send size={26} />
                    </motion.div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      Message sent!
                    </h3>
                    <p className="text-sm text-white/58">
                      Thanks for reaching out. I'll get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-1 rounded-full border border-white/20 px-5 py-2 text-sm text-white/70 transition hover:bg-white hover:text-black"
                    >
                      Send another
                    </button>
                  </motion.div>
                ) : (
                  <form
                    ref={formRef}
                    className="grid gap-4"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/46">
                        Name
                        <input
                          name="from_name"
                          placeholder="Your name"
                          required
                          disabled={loading}
                          className={inputCls("name")}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                        />
                      </label>
                      <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/46">
                        Email
                        <input
                          name="from_email"
                          type="email"
                          placeholder="you@example.com"
                          required
                          disabled={loading}
                          className={inputCls("email")}
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                        />
                      </label>
                    </div>
                    <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/46">
                      Subject
                      <input
                        name="subject"
                        placeholder="What's this about?"
                        disabled={loading}
                        className={inputCls("subject")}
                        onFocus={() => setFocused("subject")}
                        onBlur={() => setFocused(null)}
                      />
                    </label>
                    <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/46">
                      Message
                      <textarea
                        name="message"
                        placeholder="Tell me what you want to create…"
                        required
                        rows={5}
                        disabled={loading}
                        className={`${inputCls("message")} resize-none`}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                      />
                    </label>

                    {/* Error message */}
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-xs text-red-400"
                      >
                        {error}
                      </motion.p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={
                        loading
                          ? {}
                          : {
                              scale: 1.02,
                              boxShadow: "0 0 32px rgba(255,255,255,0.15)",
                            }
                      }
                      whileTap={loading ? {} : { scale: 0.97 }}
                      className="group relative mt-1 inline-flex min-h-12 items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-white px-8 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <motion.span
                        className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{ mixBlendMode: "overlay" }}
                      />
                      {loading ? (
                        <>
                          <svg
                            className="size-4 animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8z"
                            />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send
                            size={15}
                            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
