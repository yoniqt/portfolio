"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Copy,
  Check,
  Download,
  Send,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import Reveal from "../ui/reveal";

const EMAIL = "neonicolas19@gmail.com";

const reasons = ["Job opportunity", "Project / Freelance", "Just saying hi"];

const socials = [
  { href: "https://github.com/yoniqt", label: "GitHub", icon: SiGithub },
  { href: "https://linkedin.com", label: "LinkedIn", icon: FaLinkedin },
];

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  async function handleCopy(e) {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API can fail (permissions, insecure context) - the mailto
      // link on the row itself still works as a fallback.
    }
  }

  return (
    <span className="relative">
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy email address"
        className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--hero-muted)] transition-colors hover:bg-[var(--surface-2)] hover:text-[var(--hero-primary-light)]"
      >
        {copied ? <Check size={15} /> : <Copy size={15} />}
      </button>
      {copied && (
        <span className="absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-[var(--hero-text)] px-2 py-1 text-xs font-medium whitespace-nowrap text-[var(--hero-bg)]">
          Copied!
        </span>
      )}
    </span>
  );
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-[var(--hero-text)]">
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

const inputClass = (hasError) =>
  `w-full rounded-[12px] border bg-[var(--hero-surface)] px-4 py-2.5 text-[var(--hero-text)] outline-none transition-colors placeholder:text-[var(--hero-muted)]/60 focus:border-[var(--hero-primary)] focus:ring-2 focus:ring-[var(--ring)] ${
    hasError ? "border-red-500" : "border-[var(--border)]"
  }`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [reason, setReason] = useState(reasons[0]);
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const errors = {
    name: touched.name && !form.name.trim() ? "Please enter your name." : "",
    email:
      touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
        ? "Enter a valid email address."
        : "",
    message: touched.message && !form.message.trim() ? "Message can't be empty." : "",
  };

  const isValid =
    form.name.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) && form.message.trim();

  async function handleSubmit(e) {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!isValid) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: `Reason: ${reason}\n\n${form.message}`,
        }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTouched({});
      setReason(reasons[0]);
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="relative overflow-hidden bg-[var(--hero-bg)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 50% at 15% 15%, black 20%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 15% 15%, black 20%, transparent 85%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-24 lg:grid-cols-12">
        {/* LEFT */}
        <div className="flex flex-col gap-6 lg:col-span-5">
          <Reveal>
            <p className="eyebrow">04 / Contact</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-[var(--hero-text)] sm:text-5xl">
              Let&apos;s Work Together
            </h1>
            <p className="mt-4 max-w-md text-[var(--hero-muted)]">
              Have an opportunity or a question? Send me a message, I usually
              reply within a day or two.
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <div
              className="rounded-[var(--radius-lg)] p-[1.5px]"
              style={{
                background:
                  "linear-gradient(135deg, var(--hero-primary-light), transparent 60%, var(--hero-accent))",
              }}
            >
              <div className="flex items-center gap-3 rounded-[calc(var(--radius-lg)-1.5px)] bg-[var(--hero-surface)] px-5 py-4">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--hero-text)]">
                    Available for OJT &amp; entry-level roles
                  </p>
                  <p className="mt-0.5 text-xs text-[var(--hero-muted)]">
                    Open to full-stack, frontend, or web developer positions.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-3">
            <Reveal delay={0.1}>
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center justify-between gap-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--hero-surface)]/70 p-4 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-[var(--hero-primary)]/50"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--hero-primary)]/10 text-[var(--hero-primary-light)]">
                    <Mail size={17} />
                  </span>
                  <span>
                    <span className="block text-xs font-medium tracking-wide text-[var(--hero-muted)] uppercase">
                      Email
                    </span>
                    <span className="block text-sm font-medium text-[var(--hero-text)]">
                      {EMAIL}
                    </span>
                  </span>
                </span>
                <CopyEmailButton />
              </a>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--hero-surface)]/70 p-4 backdrop-blur">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--hero-primary)]/10 text-[var(--hero-primary-light)]">
                  <MapPin size={17} />
                </span>
                <span>
                  <span className="block text-xs font-medium tracking-wide text-[var(--hero-muted)] uppercase">
                    Location
                  </span>
                  <span className="block text-sm font-medium text-[var(--hero-text)]">
                    Bulacan, Philippines
                  </span>
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} className="flex flex-wrap items-center gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--hero-text)] transition-colors hover:border-[var(--hero-primary)] hover:text-[var(--hero-primary-light)]"
              >
                <s.icon size={15} />
                {s.label}
              </a>
            ))}
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-1.5 text-sm font-semibold text-[var(--hero-primary-light)] hover:underline"
            >
              <Download size={14} />
              Download CV
            </a>
          </Reveal>
        </div>

        {/* RIGHT - form */}
        <Reveal
          delay={0.1}
          className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--hero-surface)]/70 p-6 backdrop-blur sm:p-8 lg:col-span-7"
        >
          <h2 className="font-display text-xl font-bold text-[var(--hero-text)]">
            Send a message
          </h2>
          <p className="mt-1 text-sm text-[var(--hero-muted)]">
            Fill out the form and I&apos;ll get back to you.
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-6 flex flex-col gap-5">
            <div>
              <p className="text-sm font-medium text-[var(--hero-text)]">What's this about?</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {reasons.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setReason(r)}
                    aria-pressed={reason === r}
                    className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                      reason === r
                        ? "bg-gradient-to-r from-[var(--hero-primary)] to-[var(--hero-primary-light)] text-white shadow-md shadow-[var(--hero-primary)]/25"
                        : "border border-[var(--border)] text-[var(--hero-muted)] hover:border-[var(--hero-primary)] hover:text-[var(--hero-primary-light)]"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Name" error={errors.name}>
                <input
                  id="name"
                  placeholder="Juan Dela Cruz"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                  className={inputClass(errors.name)}
                />
              </Field>
              <Field id="email" label="Email" error={errors.email}>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  className={inputClass(errors.email)}
                />
              </Field>
            </div>

            <Field id="message" label="Message" error={errors.message}>
              <textarea
                id="message"
                rows={6}
                maxLength={1000}
                placeholder="Tell me about the role or project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                className={inputClass(errors.message)}
              />
              <p className="mt-1 text-right text-xs text-[var(--hero-muted)]">
                {form.message.length}/1000
              </p>
            </Field>

            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--hero-primary)] to-[var(--hero-primary-light)] px-6 py-3 font-medium text-white shadow-lg shadow-[var(--hero-primary)]/30 transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send message
                </>
              )}
            </button>

            <p className="text-center text-xs text-[var(--hero-muted)]">
              Your info is only used to reply to you.
            </p>

            <div aria-live="polite">
              {status === "sent" && (
                <p className="flex items-center gap-2 text-sm text-emerald-500">
                  <CheckCircle2 size={16} />
                  Message sent! Thank you, I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-red-500">
                  <XCircle size={16} />
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </main>
  );
}
