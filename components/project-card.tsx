"use client";

import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";

type Project = {
  title: string;
  subtitle: string;
  stack: string[];
  color: string;
  image: string | null;
  liveUrl: string | null;
  githubUrl: string;
  showActions: boolean;
  description: string;
  features: string[];
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="glass flex flex-col rounded-[26px] overflow-hidden h-full border border-white/8 w-full select-none bg-black/40">
      {/* ── Floated Screenshot (Apple/Stripe-Style Top half) ── */}
      <div className="relative shrink-0 overflow-hidden bg-gradient-to-br from-white/[0.02] to-white/[0.005] border-b border-white/8 p-5 flex items-center justify-center aspect-[16/10] w-full">
        {/* Floating simulated screen shadow wrapper */}
        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.35)] border border-white/10 bg-neutral-900/60">
          {project.image ? (
            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>
          ) : (
            /* Premium Dashboard Skeleton Fallback */
            <div className="absolute inset-0 flex flex-col justify-between p-4 text-[10px] select-none">
              <div className="absolute inset-0 grid-mask opacity-30 pointer-events-none" />
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-6 rounded bg-white/15" />
                  <span className="h-1.5 w-8 rounded bg-white/10" />
                </div>
                <span className="h-2 w-2 rounded-full bg-white/20" />
              </div>
              <div className="space-y-2 z-10">
                <span className="block h-2 w-2/3 rounded bg-white/15" />
                <span className="block h-2 w-full rounded bg-white/10" />
                <span className="block h-2 w-4/5 rounded bg-white/10" />
              </div>
              <div className="flex items-center justify-between border-t border-white/5 pt-3 z-10">
                <div className="flex gap-1">
                  <span className="h-3 w-8 rounded bg-white/10" />
                  <span className="h-3 w-8 rounded bg-white/10" />
                </div>
                <span className="h-1.5 w-10 rounded bg-white/15" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Content Details (Bottom half) ── */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          {/* Subtitle & Index Indicator Row */}
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="text-[9px] uppercase tracking-[0.25em] font-semibold text-white/40">
              {project.subtitle}
            </span>
            <span className="font-hero text-2xl font-light italic text-white/15">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="font-display text-xl font-semibold text-white tracking-tight leading-tight transition-colors">
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="mt-2.5 text-xs leading-relaxed text-white/50">
            {project.description}
          </p>

          {/* Bulleted Feature Details */}
          <ul className="mt-4 space-y-2 text-xs text-white/45">
            {project.features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-start gap-2.5">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-white/20" />
                <span className="leading-tight">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {/* Tech Stack Tags */}
          <div className="mt-5 flex flex-wrap gap-1">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded border border-white/8 bg-white/[0.02] px-2 py-0.5 text-[9px] md:text-[10px] text-white/50 font-mono tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          {project.showActions && (
            <div className="mt-5 pt-4 border-t border-white/8 flex items-center gap-5">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-white border-b border-white/30 pb-0.5 transition-all duration-300 hover:border-white hover:text-white/90"
                >
                  Live Preview
                  <ArrowUpRight size={11} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="group/btn inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/60 border-b border-white/10 pb-0.5 transition-all duration-300 hover:border-white/60 hover:text-white/85"
              >
                Source Code
                <Github size={11} className="opacity-60 transition-transform duration-300 group-hover/btn:scale-110" />
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
