// src/Settings.jsx
import AppLayout from "../components/AppLayout";
import { useState } from "react";

export default function Settings() {
  const saved = JSON.parse(localStorage.getItem("appSettings")) || {};

  const [schoolName, setSchoolName] = useState(
    saved.schoolName || "School Report System"
  );
  const [primaryColor, setPrimaryColor] = useState(
    saved.primaryColor || "#0f62fe"
  );
  const [gradientStart, setGradientStart] = useState(
    saved.gradientStart || "#f5f5f9"
  );
  const [gradientEnd, setGradientEnd] = useState(
    saved.gradientEnd || "#e5e7eb"
  );
  const [logo, setLogo] = useState(saved.logo || null);

  const themeMode = localStorage.getItem("themeMode") || "light";
  const isDark = themeMode === "dark";

  const handleSave = () => {
    const data = {
      schoolName,
      primaryColor,
      gradientStart,
      gradientEnd,
      logo,
    };
    localStorage.setItem("appSettings", JSON.stringify(data));
    alert("Settings saved. UI will update now.");
    window.location.reload();
  };

  const onLogoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setLogo(reader.result);
    reader.readAsDataURL(file);
  };

  const labelStyle = {
    fontWeight: 600,
    fontSize: 14,
    marginBottom: 6,
    color: isDark ? "#e5e7eb" : "#111827",
  };

  const inputStyle = {
    padding: "10px 12px",
    borderRadius: 12,
    border: isDark
      ? "1px solid rgba(148,163,184,0.5)"
      : "1px solid rgba(148,163,184,0.7)",
    background: isDark ? "rgba(15,23,42,0.7)" : "rgba(255,255,255,0.85)",
    color: isDark ? "#f9fafb" : "#111827",
    fontSize: 14,
  };

  return (
    <AppLayout title="App Customization">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 18,
          maxWidth: 600,
        }}
      >
        {/* School name */}
        <div>
          <div style={labelStyle}>School Name</div>
          <input
            style={inputStyle}
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
        </div>

        {/* Primary color */}
        <div>
          <div style={labelStyle}>Primary Button Colour</div>
          <input
            type="color"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
            style={{
              ...inputStyle,
              padding: 0,
              height: 48,
              cursor: "pointer",
            }}
          />
        </div>

        {/* Gradient start */}
        <div>
          <div style={labelStyle}>Background Gradient Start</div>
          <input
            type="color"
            value={gradientStart}
            onChange={(e) => setGradientStart(e.target.value)}
            style={{
              ...inputStyle,
              padding: 0,
              height: 48,
              cursor: "pointer",
            }}
          />
        </div>

        {/* Gradient end */}
        <div>
          <div style={labelStyle}>Background Gradient End</div>
          <input
            type="color"
            value={gradientEnd}
            onChange={(e) => setGradientEnd(e.target.value)}
            style={{
              ...inputStyle,
              padding: 0,
              height: 48,
              cursor: "pointer",
            }}
          />
        </div>

        {/* Logo */}
        <div>
          <div style={labelStyle}>School Logo</div>
          <input type="file" accept="image/*" onChange={onLogoChange} />
          {logo && (
            <img
              src={logo}
              alt="Logo preview"
              style={{
                marginTop: 10,
                height: 60,
                borderRadius: 14,
                objectFit: "contain",
                background: "rgba(255,255,255,0.85)",
                padding: 6,
              }}
            />
          )}
        </div>

        {/* Save */}
        <div style={{ marginTop: 8 }}>
          <button
            onClick={handleSave}
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 16,
              border: "none",
              cursor: "pointer",
              background: primaryColor,
              color: "#fff",
              fontWeight: 600,
              fontSize: 15,
              boxShadow: "0 12px 30px rgba(15,23,42,0.45)",
            }}
          >
            Save Settings
          </button>
        </div>
      </div>
    </AppLayout>
  );
}
