// src/components/Sidebar.jsx
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const themeMode = localStorage.getItem("themeMode") || "light";
  const isDark = themeMode === "dark";

  const items = [
    { icon: "🏠", label: "Dashboard", path: "/dashboard" },
    { icon: "👥", label: "Users", path: "/users" },
    { icon: "📚", label: "View Classes", path: null, disabled: true },
    { icon: "📝", label: "Generate Reports", path: null, disabled: true },
    { icon: "📂", label: "Link Database", path: "/database-link" },
    { icon: "⚙️", label: "Settings", path: "/settings" },
  ];

  return (
    <aside
      style={{
        position: "fixed",
        top: 72, // Matches Header height
        left: 0,
        bottom: 0,
        width: 260,
        padding: "24px 18px",
        background: isDark
          ? "linear-gradient(180deg, rgba(20,20,23,0.95), rgba(10,10,12,0.96))"
          : "linear-gradient(180deg, rgba(255,255,255,0.88), rgba(241,244,255,0.92))",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        borderRight: "1px solid rgba(148,163,184,0.25)",
        boxShadow: "4px 0 25px rgba(0,0,0,0.1)",
        overflowY: "auto",
      }}
    >
      {items.map((item) => {
        const isActive = item.path && location.pathname === item.path;

        return (
          <button
            key={item.label}
            disabled={item.disabled}
            onClick={() => item.path && navigate(item.path)}
            style={{
              width: "100%",
              padding: "12px 14px",
              marginBottom: 10,
              borderRadius: 14,
              border: "none",
              display: "flex",
              alignItems: "center",
              gap: 12,
              cursor: item.disabled ? "default" : "pointer",
              fontSize: 15,
              fontWeight: isActive ? 600 : 500,
              background: isActive
                ? isDark
                  ? "rgba(59,130,246,0.25)"
                  : "rgba(37,99,235,0.15)"
                : "transparent",
              color: isDark ? "#e5e7eb" : "#111827",
              boxShadow: isActive
                ? "0 8px 24px rgba(37,99,235,0.35)"
                : "none",
              opacity: item.disabled ? 0.45 : 1,
              textAlign: "left",
              transition: "all 0.2s",
            }}
          >
            <span style={{ fontSize: 19 }}>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        );
      })}
    </aside>
  );
}
