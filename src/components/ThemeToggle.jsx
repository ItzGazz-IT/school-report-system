// src/components/ThemeToggle.jsx
import { useState } from "react";

export default function ThemeToggle() {
  const initial = localStorage.getItem("themeMode") || "light";
  const [mode, setMode] = useState(initial);

  const toggle = () => {
    const next = mode === "light" ? "dark" : "light";
    localStorage.setItem("themeMode", next);
    setMode(next);
    // simplest way to apply everywhere:
    window.location.reload();
  };

  const isLight = mode === "light";

  return (
    <button
      onClick={toggle}
      style={{
        width: 40,
        height: 40,
        borderRadius: 999,
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: isLight ? "#020617" : "#f9fafb",
        color: isLight ? "#f9fafb" : "#020617",
        boxShadow: "0 10px 26px rgba(15,23,42,0.35)",
        fontSize: 18,
      }}
      title="Toggle light / dark mode"
    >
      {isLight ? "🌙" : "☀️"}
    </button>
  );
}
