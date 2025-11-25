// src/Dashboard.jsx
import AppLayout from "../components/AppLayout";

export default function Dashboard() {
  const cards = [
    {
      icon: "📚",
      title: "View Classes",
      text: "Browse all classes and student lists.",
      onClick: () => alert("View Classes – coming soon."),
    },
    {
      icon: "📝",
      title: "Generate Reports",
      text: "Create term reports and assessments.",
      onClick: () => alert("Generate Reports – coming soon."),
    },
    {
      icon: "📂",
      title: "Link Database",
      text: "Upload and sync your school database.",
      onClick: () => (window.location.href = "/database-link"),
    },
    {
      icon: "⚙️",
      title: "App Settings",
      text: "Customise theme, branding and more.",
      onClick: () => (window.location.href = "/settings"),
    },
  ];

  const themeMode = localStorage.getItem("themeMode") || "light";
  const isDark = themeMode === "dark";

  return (
    <AppLayout title="Dashboard">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: 22,
        }}
      >
        {cards.map((c) => (
          <button
            key={c.title}
            onClick={c.onClick}
            style={{
              textAlign: "left",
              padding: 22,
              borderRadius: 22,
              border: "none",
              cursor: "pointer",
              background: isDark
                ? "linear-gradient(145deg, rgba(31,41,55,0.9), rgba(15,23,42,0.96))"
                : "linear-gradient(145deg, rgba(255,255,255,0.92), rgba(243,244,255,0.98))",
              boxShadow: isDark
                ? "0 18px 40px rgba(0,0,0,0.7)"
                : "0 18px 40px rgba(15,23,42,0.15)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
            }}
          >
            <div style={{ fontSize: 34, marginBottom: 12 }}>{c.icon}</div>
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                marginBottom: 6,
                color: isDark ? "#e5e7eb" : "#111827",
              }}
            >
              {c.title}
            </div>
            <div
              style={{
                fontSize: 14,
                color: isDark ? "#9ca3af" : "#4b5563",
              }}
            >
              {c.text}
            </div>
          </button>
        ))}
      </div>
    </AppLayout>
  );
}
