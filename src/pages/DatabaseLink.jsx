// src/DatabaseLink.jsx
import AppLayout from "../components/AppLayout";
import { useState } from "react";

export default function DatabaseLink() {
  const [fileName, setFileName] = useState("");

  const themeMode = localStorage.getItem("themeMode") || "light";
  const isDark = themeMode === "dark";

  const handleUpload = () => {
    if (!fileName) {
      alert("Please choose a .accdb or .mdb file first.");
      return;
    }
    alert("Upload feature placeholder – hook this to your backend.");
  };

  return (
    <AppLayout title="Link School Database">
      <div style={{ maxWidth: 520 }}>
        <p
          style={{
            fontSize: 14,
            marginBottom: 16,
            color: isDark ? "#e5e7eb" : "#374151",
          }}
        >
          Upload your Microsoft Access database (.accdb / .mdb). The system will
          use this as the source for learners, classes and report data.
        </p>

        <input
          type="file"
          accept=".accdb,.mdb"
          onChange={(e) =>
            setFileName(e.target.files?.[0]?.name || "")
          }
          style={{
            marginBottom: 12,
            fontSize: 14,
            color: isDark ? "#e5e7eb" : "#111827",
          }}
        />

        {fileName && (
          <p
            style={{
              fontSize: 14,
              marginBottom: 16,
              color: isDark ? "#e5e7eb" : "#374151",
            }}
          >
            Selected file: <strong>{fileName}</strong>
          </p>
        )}

        <button
          onClick={handleUpload}
          style={{
            padding: "10px 18px",
            borderRadius: 14,
            border: "none",
            cursor: "pointer",
            background: "#0f62fe",
            color: "#fff",
            fontWeight: 600,
            boxShadow: "0 12px 30px rgba(15,23,42,0.45)",
          }}
        >
          Upload Database
        </button>
      </div>
    </AppLayout>
  );
}
