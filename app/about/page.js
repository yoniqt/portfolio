"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "motion/react";
import {
  MapPin,
  GraduationCap,
  Code2,
  Briefcase,
  Rocket,
  ArrowRight,
} from "lucide-react";
import Reveal from "../ui/reveal";

const facts = [
  { icon: MapPin, label: "Bulacan, PH" },
  { icon: GraduationCap, label: "BS Computer Science" },
  { icon: null, label: "Open to work" },
];

const timeline = [
  {
    label: "Education",
    title: "BS Computer Science, Baliuag University",
    text: "Building my foundation in programming, databases, networking, and systems.",
    icon: GraduationCap,
    tags: [],
  },
  {
    label: "Capstone",
    title: "PinacConnect: Barangay Management System",
    text: "Sole developer on a 4-person team: architecture, backend, frontend, and database for the web app and Flutter mobile app. Includes two-factor login, identity verification, and a hybrid rule-based/AI chatbot.",
    icon: Code2,
    tags: ["PHP", "MySQL", "Flutter"],
  },
  {
    label: "OJT",
    title: "The Matrix Hotel",
    text: "Building a full-stack hotel reservation platform with a guest booking site, staff admin panel, real-time room availability, and an AI chat assistant.",
    icon: Briefcase,
    tags: ["React", "Next.js", "Laravel", "MySQL"],
  },
  {
    label: "Now",
    title: "Looking for my first role",
    text: "Open to OJT and entry-level full-stack or web developer positions.",
    icon: Rocket,
    tags: [],
    highlight: true,
  },
];

function TimelineItem({ item, index, isLast }) {
  return (
    <Reveal delay={index * 0.1} className="relative flex gap-5 pb-10 last:pb-0">
      {!isLast && (
        <span className="absolute top-11 bottom-0 left-[19px] w-px bg-[var(--border)]" />
      )}

      <span className="relative z-10 shrink-0">
        {item.highlight && (
          <motion.span
            aria-hidden
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full"
            style={{ background: "var(--hero-primary)" }}
          />
        )}
        <span
          className="relative flex h-10 w-10 items-center justify-center rounded-full text-white shadow-md"
          style={{
            background: item.highlight
              ? "linear-gradient(135deg, var(--hero-primary), var(--hero-accent))"
              : "var(--hero-primary)",
          }}
        >
          <item.icon size={17} />
        </span>
      </span>

      <div
        className={`flex-1 rounded-[var(--radius-lg)] border p-5 backdrop-blur ${
          item.highlight ? "shadow-lg" : "border-[var(--border)] bg-[var(--hero-surface)]/70"
        }`}
        style={
          item.highlight
            ? {
                borderColor: "transparent",
                background:
                  "linear-gradient(var(--hero-surface), var(--hero-surface)) padding-box, linear-gradient(135deg, var(--hero-primary-light), var(--hero-accent)) border-box",
                border: "1px solid transparent",
              }
            : undefined
        }
      >
        <p className="eyebrow" style={{ color: "var(--hero-primary-light)" }}>
          {item.label}
        </p>
        <h3 className="mt-1.5 font-display text-lg font-bold text-[var(--hero-text)]">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--hero-muted)]">
          {item.text}
        </p>

        {item.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[var(--surface-2)] px-2.5 py-1 text-xs font-medium text-[var(--hero-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {item.highlight && (
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--hero-primary-light)] hover:underline"
          >
            Get in touch
            <ArrowRight size={14} />
          </Link>
        )}
      </div>
    </Reveal>
  );
}

export default function About() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const fillHeight = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });

  return (
    <main className="relative overflow-hidden bg-[var(--hero-bg)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 50% at 15% 20%, black 20%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 15% 20%, black 20%, transparent 85%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-10">
        {/* LEFT - sticky intro */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">01 / About</p>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-[var(--hero-text)] sm:text-5xl">
                About Me
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-6 text-2xl leading-snug font-bold text-[var(--hero-text)] sm:text-[28px]">
                I build full-stack web and mobile apps,{" "}
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, var(--hero-primary-light), var(--hero-accent))",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  from the database to the UI.
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 text-lg leading-[1.7] text-[var(--hero-muted)]">
                I&apos;m a Computer Science student at Baliuag University,
                currently on my OJT, the last requirement before I graduate.
                For my capstone, I handled the entire technical side of
                PinacConnect, a web and mobile Barangay Management System.
              </p>
              <p className="mt-4 text-lg leading-[1.7] text-[var(--hero-muted)]">
                These days I&apos;m learning modern full-stack JavaScript
                (React, Next.js, Node.js) and PHP/Laravel, aiming for a stable
                role where I can keep learning and growing as a developer.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {facts.map((fact) => (
                  <span
                    key={fact.label}
                    className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--hero-surface)]/70 px-3.5 py-2 text-sm font-medium text-[var(--hero-muted)] backdrop-blur"
                  >
                    {fact.icon ? (
                      <fact.icon size={14} style={{ color: "var(--hero-primary-light)" }} />
                    ) : (
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ background: "var(--hero-success)" }}
                      />
                    )}
                    {fact.label}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* RIGHT - timeline */}
        <div ref={timelineRef} className="relative lg:col-span-7">
          <div className="absolute top-11 bottom-0 left-[19px] w-px origin-top bg-[var(--border)]">
            <motion.div
              className="w-full origin-top"
              style={{
                height: "100%",
                scaleY: fillHeight,
                background:
                  "linear-gradient(var(--hero-primary), var(--hero-accent))",
              }}
            />
          </div>

          {timeline.map((item, i) => (
            <TimelineItem
              key={item.label}
              item={item}
              index={i}
              isLast={i === timeline.length - 1}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
