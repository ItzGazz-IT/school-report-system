// src/components/Header.jsx
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const settings = JSON.parse(localStorage.getItem("appSettings")) || {};
  const schoolName = settings.schoolName || "School Report System";
  const logo = settings.logo || null;
  const primaryColor = settings.primaryColor || "#0f62fe";

  const handleLogout = () => {
    if (confirm("Are you sure you want to log out?")) {
      window.location.href = "/";
    }
  };

  const themeMode = localStorage.getItem("themeMode") || "light";
  const isDark = themeMode === "dark";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 72,
        padding: "0 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 1000,
        background: isDark
          ? "linear-gradient(90deg, rgba(18,18,20,0.9), rgba(25,25,28,0.7))"
          : "linear-gradient(90deg, rgba(255,255,255,0.9), rgba(245,246,255,0.85))",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: isDark
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid rgba(15,23,42,0.06)",
      }}
    >
      {/* Left: logo + title */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {logo ? (
          <img
            src={logo}
            alt="School logo"
            style={{
              height: 40,
              width: 40,
              borderRadius: 13,
              objectFit: "cover",
              boxShadow: "0 8px 18px rgba(0,0,0,0.25)",
            }}
          />
        ) : (
          <div
            style={{
              height: 40,
              width: 40,
              borderRadius: 13,
              background:
                "linear-gradient(145deg, #0f62fe, #42a5f5, #7c3aed)",
              boxShadow: "0 8px 18px rgba(0,0,0,0.25)",
            }}
          />
        )}

        <div>
          <div
            style={{
              fontWeight: 700,
              fontSize: 18,
              color: isDark ? "#f9fafb" : "#0f172a",
            }}
          >
            {schoolName}
          </div>
          <div
            style={{
              fontSize: 12,
              color: isDark ? "#9ca3af" : "#6b7280",
            }}
          >
            Teacher Admin Console
          </div>
        </div>
      </div>

      {/* Right: theme toggle + logout */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <ThemeToggle />

        <button
          onClick={handleLogout}
          style={{
            padding: "9px 18px",
            borderRadius: 999,
            border: "none",
            cursor: "pointer",
            background: primaryColor,
            color: "#fff",
            fontSize: 14,
            fontWeight: 600,
            boxShadow: "0 10px 26px rgba(15,23,42,0.35)",
          }}
        >
          Logout
        </button>
      </div>
    </header>
  );
}
