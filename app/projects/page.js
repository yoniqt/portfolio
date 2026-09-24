"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { ExternalLink, Globe, Smartphone } from "lucide-react";
import { SiPhp, SiMysql, SiFlutter, SiReact, SiNextdotjs, SiGithub } from "react-icons/si";
import Reveal from "../ui/reveal";

const tagIcons = {
  Web: Globe,
  Mobile: Smartphone,
  PHP: SiPhp,
  MySQL: SiMysql,
  Flutter: SiFlutter,
  React: SiReact,
  "Next.js": SiNextdotjs,
};

const projects = [
  {
    title: "PinacConnect",
    description:
      "A full-stack Barangay Management System with a web app and a companion Flutter mobile app. Sole developer (architecture, backend, frontend, and database) on a 4-person capstone team. Features two-factor login, identity verification, and a hybrid rule-based/AI chatbot.",
    tags: ["Web", "Mobile", "PHP", "MySQL", "Flutter"],
    link: "https://pinacconnect.com/",
    github: null,
    thumbnail: "/projects/pinacconnect.png",
    featured: true,
  },
  {
    title: "The Matrix Hotel",
    description:
      "A full-stack hotel reservation platform built for my OJT, with a guest-facing booking site and a staff admin panel. Features real-time room availability, an admin dashboard for managing bookings/rooms/photos, and an AI-powered chat assistant. Built a React/Next.js frontend against a Laravel/MySQL backend specifically to get hands-on PHP/Laravel experience.",
    tags: ["Web", "React", "Next.js", "PHP", "MySQL"],
    link: "https://matrix-hotel.vercel.app/",
    github: "https://github.com/yoniqt/matrix-hotel",
    thumbnail: "/projects/matrix-hotel.png",
    featured: false,
  },
  {
    title: "Event Register",
    description:
      "A seminar registration website ('The Autonomous Professional: Unlocking AI & Automation') with automated email confirmations for registrants. React frontend against a Laravel backend, deployed on Laravel Cloud.",
    tags: ["Web", "React", "PHP"],
    link: "https://event-register-production-mftjyy.laravel.cloud/",
    github: "https://github.com/yoniqt/event-register",
    thumbnail: "/projects/event-register.png",
    featured: false,
  },
  {
    title: "This Portfolio Site",
    description:
      "My personal developer portfolio, built to learn the React/Next.js ecosystem from the ground up, including the App Router, Tailwind CSS, dark mode, and this very project filter you're using right now.",
    tags: ["Web", "React", "Next.js"],
    link: null,
    github: "https://github.com/yoniqt/portfolio",
    thumbnail: "/projects/portfolio.png",
    featured: false,
  },
];

const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags))];

function ProjectThumbnail({ title, thumbnail, sizes, roundedClass }) {
  const [failed, setFailed] = useState(false);

  if (thumbnail && !failed) {
    return (
      <div className={`relative h-full w-full overflow-hidden ${roundedClass}`}>
        <Image
          src={thumbnail}
          alt={`${title} screenshot`}
          fill
          sizes={sizes}
          quality={90}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--primary)]/25 via-[var(--primary-2)]/20 to-[var(--accent)]/20 ${roundedClass}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <span className="relative font-display text-3xl font-bold text-[var(--text)]/25">
        {title}
      </span>
      <p className="absolute right-3 bottom-2 text-[10px] tracking-wide text-[var(--text-muted)]/70 uppercase">
        Screenshot placeholder
      </p>
    </div>
  );
}

function ProjectCard({ project, isOrphan }) {
  const [expanded, setExpanded] = useState(false);

  const sizes = project.featured
    ? "(min-width: 1024px) 60vw, 100vw"
    : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25 }}
      className={`group flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)]/70 backdrop-blur transition-all hover:-translate-y-1.5 hover:border-[var(--primary)]/50 hover:shadow-xl hover:shadow-[var(--primary)]/10 ${
        project.featured ? "sm:col-span-2 lg:col-span-3" : ""
      } ${isOrphan ? "md:col-span-2 md:flex-row lg:col-span-1 lg:flex-col" : ""}`}
    >
      <div
        className={`shrink-0 ${
          project.featured
            ? "aspect-[21/9]"
            : isOrphan
              ? "aspect-[16/10] md:aspect-auto md:w-2/5 lg:aspect-[16/10] lg:w-full"
              : "aspect-[16/10]"
        }`}
      >
        <ProjectThumbnail
          title={project.title}
          thumbnail={project.thumbnail}
          sizes={sizes}
          roundedClass={
            isOrphan
              ? "rounded-t-[var(--radius-lg)] md:rounded-t-none md:rounded-l-[var(--radius-lg)] lg:rounded-t-[var(--radius-lg)] lg:rounded-l-none"
              : "rounded-t-[var(--radius-lg)]"
          }
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2">
          <h2 className="font-display text-xl font-semibold text-[var(--text)]">
            {project.title}
          </h2>
          {project.featured && (
            <span className="rounded-full bg-[var(--accent)]/15 px-2.5 py-0.5 text-xs font-semibold text-[var(--accent)]">
              Featured · Capstone
            </span>
          )}
        </div>

        <p
          className={`mt-3 text-sm leading-relaxed text-[var(--text-muted)] ${
            expanded ? "" : "line-clamp-3"
          }`}
        >
          {project.description}
        </p>
        {project.description.length > 160 && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-1 self-start text-xs font-semibold text-[var(--primary)] hover:underline"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => {
            const Icon = tagIcons[tag];
            return (
              <span
                key={tag}
                className="flex items-center gap-1.5 rounded-full bg-[var(--surface-2)] px-3 py-1 text-xs font-medium text-[var(--text-muted)]"
              >
                {Icon && <Icon size={12} />}
                {tag}
              </span>
            );
          })}
        </div>

        <div className="mt-auto flex flex-wrap gap-2.5 pt-5">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-2)] px-4 py-2 text-sm font-medium text-white shadow-md shadow-[var(--primary)]/25 transition-transform hover:scale-105"
            >
              <ExternalLink size={14} />
              Live Site
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              <SiGithub size={14} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");

  const visibleProjects =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  const featured = visibleProjects.filter((p) => p.featured);
  const rest = visibleProjects.filter((p) => !p.featured);

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-24">
      <Reveal>
        <p className="eyebrow">03 / Projects</p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-[var(--text)] sm:text-5xl">
          Projects
        </h1>
      </Reveal>

      <Reveal delay={0.08} className="mt-8 flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeTag === tag
                ? "bg-gradient-to-r from-[var(--primary)] to-[var(--primary-2)] text-white shadow-md shadow-[var(--primary)]/30"
                : "border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
            }`}
          >
            {tag}
          </button>
        ))}
      </Reveal>

      <LayoutGroup>
        <motion.div layout className="mt-10 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {featured.map((project) => (
              <ProjectCard key={project.title} project={project} isOrphan={false} />
            ))}
            {rest.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                isOrphan={i === rest.length - 1 && rest.length % 2 === 1}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {visibleProjects.length === 0 && (
        <p className="mt-10 text-[var(--text-muted)]">
          No projects match that filter yet.
        </p>
      )}
    </main>
  );
}
