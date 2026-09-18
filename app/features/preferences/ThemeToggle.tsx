"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("learno-theme", nextTheme);
  };

  return <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"} title={theme === "dark" ? "Modo claro" : "Modo oscuro"}>
    <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
  </button>;
}
