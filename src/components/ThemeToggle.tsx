"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

/**
 * Switches between the day and night themes by setting data-theme on <html>,
 * and remembers the choice. Day is the base theme; with nothing stored, a
 * system set to dark mode still gets night, which is the CSS default, so no
 * attribute is set at all.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // The inline script in the layout has already applied any stored choice.
    const stored = document.documentElement.dataset.theme as Theme | undefined;
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      return;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(prefersDark.matches ? "dark" : "light");

    // Keep following the system while the visitor has made no choice.
    const onChange = (e: MediaQueryListEvent) => {
      if (!document.documentElement.dataset.theme) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    prefersDark.addEventListener("change", onChange);
    return () => prefersDark.removeEventListener("change", onChange);
  }, []);

  function toggle() {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private browsing or blocked storage: the choice just won't persist.
    }
  }

  // Render a placeholder until the theme is known, so the markup the server
  // sent matches the first client render and the button keeps its space.
  const label =
    theme === null
      ? "Switch theme"
      : theme === "light"
        ? "Switch to the night theme"
        : "Switch to the day theme";

  return (
    <button
      type="button"
      onClick={toggle}
      className="theme-toggle"
      aria-label={label}
      title={label}
    >
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {theme === "light" ? (
          // Moon: offer the night theme.
          <path d="M20 14.5A8.2 8.2 0 0 1 9.5 4 8.3 8.3 0 1 0 20 14.5Z" />
        ) : (
          // Sun: offer the day theme.
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4" />
          </>
        )}
      </svg>
    </button>
  );
}
