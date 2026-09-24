"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "../theme-provider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme() ?? {};

  if (!theme) return null;

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
