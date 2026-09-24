"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Download, Mail, Briefcase } from "lucide-react";
import {
  SiGithub,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFlutter,
  SiNodedotjs,
  SiGit,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const roles = [
  "Full-Stack Developer",
  "Software Engineer",
  "React & Next.js Developer",
  "Laravel Developer",
];

const socials = [
  { href: "https://github.com/yoniqt", label: "GitHub", icon: SiGithub },
  { href: "https://linkedin.com", label: "LinkedIn", icon: FaLinkedin },
  { href: "mailto:neonicolas19@gmail.com", label: "Email", icon: Mail },
];

const techStack = [
  { name: "Laravel", icon: SiLaravel },
  { name: "PHP", icon: SiPhp },
  { name: "MySQL", icon: SiMysql },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Flutter", icon: SiFlutter },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Git", icon: SiGit },
];

const containerStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="font-semibold text-[#14121f] dark:text-[#e4e2ee]"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
      <span className="hero-cursor ml-0.5 text-[var(--hero-primary-light)]">_</span>
    </span>
  );
}

export default function Home() {
  return (
    <main
      className="relative flex min-h-[calc(100vh-73px)] flex-col justify-center overflow-hidden bg-[var(--hero-bg)]"
      style={{ colorScheme: "inherit" }}
    >
      {/* Scoped background: grid + drifting orbs (hero only) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 90%)",
        }}
      />
      <div
        aria-hidden
        className="blob pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full opacity-40 blur-3xl dark:opacity-60"
        style={{ background: "var(--hero-primary)" }}
      />
      <div
        aria-hidden
        className="blob pointer-events-none absolute top-1/4 -right-24 h-96 w-96 rounded-full opacity-30 blur-3xl dark:opacity-40"
        style={{ background: "var(--hero-accent)", animationDelay: "3s" }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 py-14 lg:grid-cols-2 lg:items-center lg:gap-8 lg:py-16">
        {/* LEFT */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate="show"
          className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--hero-surface)]/70 px-4 py-1.5 text-sm font-medium text-[var(--hero-muted)] backdrop-blur"
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: "var(--hero-success)" }}
            />
            Open to OJT &amp; entry-level roles
          </motion.span>

          <motion.p variants={fadeUp} className="mt-6 text-sm font-medium text-[var(--hero-muted)]">
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-6xl leading-[1.05] font-bold tracking-tight sm:text-7xl lg:text-[96px]"
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--hero-primary-light), #c79ae0 55%, var(--hero-accent))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Neo Nicolas
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-3 text-xl font-medium text-[var(--hero-text)] sm:text-2xl">
            <RotatingRole />
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg text-base leading-relaxed text-[var(--hero-muted)]"
          >
            I build full-stack web applications with React, Next.js, and
            Laravel — from a hotel reservation platform to a barangay
            management system — and I&apos;m looking for a team where I can
            keep growing as an engineer.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Link
              href="/projects"
              className="flex items-center gap-2 rounded-full px-6 py-3 font-medium text-white shadow-lg transition-transform hover:scale-105"
              style={{
                background: "linear-gradient(90deg, var(--hero-primary), var(--hero-primary-light))",
                boxShadow: "0 12px 30px -10px var(--hero-primary)",
              }}
            >
              View my projects
              <ArrowRight size={16} />
            </Link>
            <a
              href="/cv.pdf"
              download="Neo_Nicolas_CV.pdf"
              className="flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 font-medium text-[var(--hero-text)] transition-colors hover:border-[var(--hero-primary)] hover:text-[var(--hero-primary-light)]"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-7 flex items-center justify-center gap-3 lg:justify-start">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--hero-muted)] transition-colors hover:border-[var(--hero-primary)] hover:text-[var(--hero-primary-light)]"
              >
                <s.icon size={16} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT - single frame, photo breaks out above the top edge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="relative h-[380px] w-[300px] [--photo-pop:40px] sm:h-[440px] sm:w-[360px] sm:[--photo-pop:50px] lg:h-[520px] lg:w-[420px] lg:[--photo-pop:60px]">
            {/* glow */}
            <div
              aria-hidden
              className="absolute inset-6 -z-10 rounded-[36px] opacity-60 blur-3xl"
              style={{ background: "var(--hero-primary)" }}
            />

            {/* frame: gradient border via two-layer trick. Height is the
                container minus --photo-pop, so exactly --photo-pop worth of
                the photo shows above the frame's top edge. */}
            <div
              className="absolute inset-x-0 bottom-0 rounded-[32px] p-[2px]"
              style={{
                height: "calc(100% - var(--photo-pop))",
                background:
                  "linear-gradient(135deg, var(--hero-primary-light), #c79ae0 55%, var(--hero-accent))",
              }}
            >
              <div
                className="h-full w-full rounded-[30px]"
                style={{
                  background:
                    "radial-gradient(circle at 50% 25%, color-mix(in srgb, var(--hero-primary) 18%, transparent), var(--hero-surface))",
                }}
              />
            </div>

            {/* photo wrapper - sits exactly inside the frame's 2px border on
                the left/right/bottom, but has no top inset, so it's taller
                than the frame and the head can extend above it freely.
                Bottom corners match the frame's inner radius (32-2=30px);
                top corners stay square since nothing clips them anyway. */}
            <div className="absolute top-0 right-[2px] bottom-[2px] left-[2px] z-10 overflow-hidden rounded-b-[30px]">
              <Image
                src="/profile.png"
                alt="Neo Nicolas"
                fill
                unoptimized
                className="object-cover object-[center_bottom]"
                priority
              />
            </div>

            {/* floating badge: currently on OJT */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 bottom-8 z-20 flex items-center gap-2.5 rounded-2xl border border-[var(--border)] bg-[var(--hero-surface)]/80 px-3.5 py-2.5 shadow-lg backdrop-blur-md sm:-left-6"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white"
                style={{ background: "var(--hero-primary)" }}
              >
                <Briefcase size={14} />
              </span>
              <p className="text-xs font-semibold text-[var(--hero-text)] whitespace-nowrap">
                Currently on OJT
              </p>
            </motion.div>

            {/* floating badge: live projects */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute top-[42%] -right-3 z-20 flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--hero-surface)]/80 px-3.5 py-2 shadow-lg backdrop-blur-md sm:-right-5"
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: "var(--hero-accent)" }}
              />
              <p className="text-xs font-semibold text-[var(--hero-text)] whitespace-nowrap">
                3 live projects
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Tech marquee */}
      <div className="relative mt-4 pb-10 lg:mt-2">
        <p className="eyebrow text-center">Tech I Work With</p>
        <div className="hero-marquee-viewport relative mt-5 overflow-hidden">
          <div className="hero-marquee-track flex w-max gap-10 pr-10">
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="flex items-center gap-2 text-[var(--hero-muted)] transition-colors hover:text-[var(--hero-primary-light)]"
              >
                <tech.icon size={20} />
                <span className="text-sm font-medium whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
