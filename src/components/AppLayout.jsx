// src/components/AppLayout.jsx
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AppLayout({ title, children }) {
  const themeMode = localStorage.getItem("themeMode") || "light";
  const isDark = themeMode === "dark";

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        background: isDark
          ? "radial-gradient(circle at top, #3b3b3f, #121216)"
          : "radial-gradient(circle at top, #f5f5f9, #e6e9f0)",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Fixed header */}
      <Header />

      {/* Fixed sidebar */}
      <Sidebar />

      {/* Main content */}
      <main
        style={{
          flexGrow: 1,
          marginTop: 72,          // header height
          marginLeft: 260,        // sidebar width
          padding: "32px 40px",
          overflowY: "auto",
        }}
      >
        {title && (
          <h1
            style={{
              fontSize: 28,
              fontWeight: 700,
              marginBottom: 20,
              color: isDark ? "#f5f5f7" : "#111827",
            }}
          >
            {title}
          </h1>
        )}

        <div
          style={{
            background: isDark
              ? "rgba(25, 25, 28, 0.7)"
              : "rgba(255, 255, 255, 0.72)",
            backdropFilter: "blur(22px)",
            WebkitBackdropFilter: "blur(22px)",
            borderRadius: 24,
            padding: 24,
            boxShadow: isDark
              ? "0 18px 45px rgba(0,0,0,0.6)"
              : "0 18px 45px rgba(15,23,42,0.15)",
            border: isDark
              ? "1px solid rgba(255,255,255,0.12)"
              : "1px solid rgba(255,255,255,0.8)",
            minHeight: "calc(100vh - 72px - 64px)", // header + padding
          }}
        >
          {children}
        </div>
      </main>
    </div>
  );
}
