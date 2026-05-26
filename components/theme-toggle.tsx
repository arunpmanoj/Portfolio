"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", !light);
    document.body.classList.toggle("light-mode", light);
  }, [light]);

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setLight((value) => !value)}
      className="focus-ring grid size-10 place-items-center rounded-full border border-white/12 bg-white/6 text-white transition hover:border-white/30 hover:bg-white/12"
    >
      {light ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
