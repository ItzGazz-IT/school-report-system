// src/LoginPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const settings = JSON.parse(localStorage.getItem("appSettings")) || {};
  const schoolName = settings.schoolName || "School Report System";
  const primaryColor = settings.primaryColor || "#0f62fe";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid credentials. Use admin / admin.");
    }
  };

  const themeMode = localStorage.getItem("themeMode") || "light";
  const isDark = themeMode === "dark";

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        background: isDark
          ? "radial-gradient(circle at top, #3b3b4f, #050509)"
          : "radial-gradient(circle at top, #e5edff, #fdfbff)",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 380,
          background: isDark
            ? "rgba(17,24,39,0.85)"
            : "rgba(255,255,255,0.9)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderRadius: 24,
          padding: 28,
          boxShadow: isDark
            ? "0 22px 60px rgba(0,0,0,0.75)"
            : "0 22px 60px rgba(15,23,42,0.25)",
          border: isDark
            ? "1px solid rgba(148,163,184,0.4)"
            : "1px solid rgba(229,231,235,0.9)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <div
            style={{
              width: 52,
              height: 52,
              margin: "0 auto 10px",
              borderRadius: 18,
              background:
                "linear-gradient(145deg, #0f62fe, #42a5f5, #7c3aed)",
              boxShadow: "0 14px 35px rgba(59,130,246,0.6)",
            }}
          />
          <h1
            style={{
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 4,
              color: isDark ? "#f9fafb" : "#111827",
            }}
          >
            {schoolName}
          </h1>
          <p
            style={{
              fontSize: 13,
              color: isDark ? "#9ca3af" : "#6b7280",
            }}
          >
            Secure teacher login
          </p>
        </div>

        {error && (
          <div
            style={{
              background: "rgba(239,68,68,0.1)",
              border: "1px solid rgba(239,68,68,0.4)",
              color: isDark ? "#fecaca" : "#b91c1c",
              borderRadius: 12,
              padding: "8px 10px",
              fontSize: 13,
              marginBottom: 12,
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 10 }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              padding: "10px 12px",
              borderRadius: 12,
              border: "1px solid rgba(148,163,184,0.8)",
              fontSize: 14,
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "10px 12px",
              borderRadius: 12,
              border: "1px solid rgba(148,163,184,0.8)",
              fontSize: 14,
            }}
          />

          <button
            type="submit"
            style={{
              marginTop: 6,
              padding: "10px 14px",
              borderRadius: 14,
              border: "none",
              background: primaryColor,
              color: "#fff",
              fontWeight: 600,
              fontSize: 15,
              cursor: "pointer",
              boxShadow: "0 16px 40px rgba(15,23,42,0.45)",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
