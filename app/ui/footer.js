import Link from "next/link";
import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://github.com/yoniqt", label: "GitHub", icon: SiGithub },
  { href: "https://linkedin.com", label: "LinkedIn", icon: FaLinkedin },
  { href: "mailto:neonicolas19@gmail.com", label: "Email", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Link
            href="/"
            className="font-display text-lg font-bold text-gradient"
          >
            Neo Nicolas
          </Link>
          <p className="mt-2 max-w-xs text-sm text-[var(--text-muted)]">
            Aspiring full-stack developer, currently on OJT and open to
            entry-level roles.
          </p>
        </div>

        <div className="flex gap-16">
          <div>
            <p className="eyebrow">Quick Links</p>
            <ul className="mt-3 flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Connect</p>
            <div className="mt-3 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--border)] px-6 py-5 text-center text-xs text-[var(--text-muted)]">
        © {new Date().getFullYear()} Neo Nicolas. Built with Next.js and
        Tailwind CSS.
      </div>
    </footer>
  );
}
