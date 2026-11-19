import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function initialTheme() {
  try {
    const saved = localStorage.getItem("plotchecker-theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch { /* Storage may be unavailable. */ }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(initialTheme);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try { localStorage.setItem("plotchecker-theme", theme); } catch { /* Keep the toggle usable without storage. */ }
  }, [theme]);
  const dark = theme === "dark";
  return (
    <button type="button" className="pc-icon" onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={`Switch to ${dark ? "light" : "dark"} mode`} title={`Switch to ${dark ? "light" : "dark"} mode`}>
      {dark ? <Sun size={19} aria-hidden="true" /> : <Moon size={19} aria-hidden="true" />}
    </button>
  );
}
