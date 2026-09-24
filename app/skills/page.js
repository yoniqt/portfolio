"use client";

import {
  SiPhp,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiLaravel,
  SiMysql,
  SiFlutter,
  SiDart,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiGit,
  SiGithub,
  SiCisco,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { Database, Network, Award, Wrench } from "lucide-react";
import Reveal from "../ui/reveal";

const coreStack = [
  { name: "React", icon: SiReact, color: "#61DAFB", context: "UI for The Matrix Hotel" },
  { name: "Next.js", icon: SiNextdotjs, color: "currentColor", context: "Frontend + this portfolio" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20", context: "Backend APIs for The Matrix Hotel" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", context: "Databases for PinacConnect & The Matrix Hotel" },
];

const mobile = [
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Dart", icon: SiDart, color: "#0175C2" },
];

const languages = [
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "SQL", icon: Database, color: "var(--hero-primary-light)" },
];

const tools = [
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "currentColor" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "currentColor" },
  { name: "RESTful APIs", icon: Network, color: "var(--hero-primary-light)" },
];

const certifications = [
  { title: "CCNA", issuer: "Cisco Networking Academy", icon: SiCisco, color: "#1BA0D7" },
  { title: "IT Essentials", issuer: "Cisco Networking Academy", icon: Wrench, color: "var(--hero-primary-light)" },
  { title: "Amazon EC2", issuer: "AWS Academy", icon: FaAws, color: "#FF9900" },
];

function Pill({ item, delay }) {
  return (
    <Reveal
      delay={delay}
      className="group flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3.5 py-2 text-sm font-medium whitespace-nowrap text-[var(--hero-text)] transition-transform hover:-translate-y-0.5"
    >
      <item.icon
        size={16}
        className="shrink-0 grayscale-[60%] opacity-70 transition-all group-hover:grayscale-0 group-hover:opacity-100"
        style={{ color: item.color }}
      />
      {item.name}
    </Reveal>
  );
}

function SectionCard({ eyebrow, blurb, className = "", children, delay = 0 }) {
  return (
    <Reveal
      delay={delay}
      className={`rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--hero-surface)]/70 p-6 backdrop-blur transition-colors hover:border-[var(--hero-primary)]/40 ${className}`}
    >
      <p className="eyebrow">{eyebrow}</p>
      {blurb && <p className="mt-2 text-sm text-[var(--hero-muted)]">{blurb}</p>}
      {children}
    </Reveal>
  );
}

export default function Skills() {
  return (
    <main className="relative overflow-hidden bg-[var(--hero-bg)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 50% at 85% 15%, black 20%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 85% 15%, black 20%, transparent 85%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="eyebrow">02 / Skills</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-[var(--hero-text)] sm:text-5xl">
            Skills &amp; Tools
          </h1>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* CORE STACK - full width, 4-across on desktop */}
          <div className="md:col-span-12">
            <div
              className="rounded-[var(--radius-lg)] p-[1.5px]"
              style={{
                background:
                  "linear-gradient(135deg, var(--hero-primary-light), transparent 60%, var(--hero-accent))",
              }}
            >
              <Reveal className="rounded-[calc(var(--radius-lg)-1.5px)] bg-[var(--hero-surface)] p-6 backdrop-blur">
                <p className="eyebrow">Core Stack</p>
                <p className="mt-2 text-sm text-[var(--hero-muted)]">
                  What I use to build and ship full-stack apps.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {coreStack.map((tech, i) => (
                    <Reveal
                      key={tech.name}
                      delay={0.05 + i * 0.06}
                      className="group flex flex-col gap-2.5 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-2)] p-4 transition-all hover:-translate-y-1"
                      style={{ "--tile-glow": tech.color === "currentColor" ? "var(--hero-primary)" : tech.color }}
                    >
                      <tech.icon
                        size={30}
                        style={{ color: tech.color }}
                        className="transition-transform group-hover:scale-110"
                      />
                      <div>
                        <p className="font-semibold text-[var(--hero-text)]">{tech.name}</p>
                        <p className="mt-0.5 text-xs leading-snug text-[var(--hero-muted)]">
                          {tech.context}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* MOBILE / LANGUAGES / TOOLS & DATABASES - one equal-height row */}
          <SectionCard
            eyebrow="Mobile"
            blurb="Built the PinacConnect companion app."
            className="md:col-span-6 lg:col-span-4"
            delay={0.06}
          >
            <div className="mt-5 flex flex-wrap content-start gap-2.5">
              {mobile.map((item, i) => (
                <Pill key={item.name} item={item} delay={0.1 + i * 0.05} />
              ))}
            </div>
          </SectionCard>

          <SectionCard eyebrow="Languages" className="md:col-span-6 lg:col-span-4" delay={0.1}>
            <div className="mt-5 flex flex-wrap content-start gap-2.5">
              {languages.map((item, i) => (
                <Pill key={item.name} item={item} delay={0.14 + i * 0.05} />
              ))}
            </div>
          </SectionCard>

          <SectionCard
            eyebrow="Tools & Databases"
            className="md:col-span-12 lg:col-span-4"
            delay={0.14}
          >
            <div className="mt-5 flex flex-wrap content-start gap-2.5">
              {tools.map((item, i) => (
                <Pill key={item.name} item={item} delay={0.18 + i * 0.05} />
              ))}
            </div>
          </SectionCard>

          {/* CERTIFICATIONS & TRAINING */}
          <SectionCard
            eyebrow="Certifications & Training"
            className="md:col-span-12 lg:col-span-12"
            delay={0.18}
          >
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {certifications.map((cert, i) => (
                <Reveal
                  key={cert.title}
                  delay={0.22 + i * 0.06}
                  className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-2)] p-4 transition-all hover:-translate-y-0.5 hover:border-[var(--hero-primary)]/50"
                >
                  <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--hero-primary)]/10">
                    <Award size={14} className="absolute -top-1 -right-1 text-[var(--hero-accent)]" />
                    <cert.icon size={20} style={{ color: cert.color }} />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[var(--hero-text)]">{cert.title}</p>
                    <p className="text-xs text-[var(--hero-muted)]">{cert.issuer}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </SectionCard>
        </div>
      </div>
    </main>
  );
}
