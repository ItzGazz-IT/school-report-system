// src/pages/AddUser.jsx
import React, { useState } from "react";
import AppLayout from "../components/AppLayout";

export default function AddUser() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "educator",
    classRoom: "Grade 1A",
    password: "",
    avatar: "",
  });

  const [avatarPreview, setAvatarPreview] = useState("");
  const [pwStrength, setPwStrength] = useState({ score: 0, label: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const classes = Array.from({ length: 7 }, (_, g) =>
    ["A", "B", "C", "D"].map((sec) => `Grade ${g + 1}${sec}`)
  ).flat();

  const scorePassword = (pw) => {
    let score = 0;
    if (pw.length >= 8) score += 2;
    else if (pw.length >= 6) score += 1;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;

    let label = score >= 5 ? "Strong" : score >= 3 ? "Medium" : "Weak";
    return { score, label };
  };

  const updatePassword = (e) => {
    const value = e.target.value;
    setForm((f) => ({ ...f, password: value }));
    setPwStrength(scorePassword(value));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const preview = URL.createObjectURL(file);
    setAvatarPreview(preview);

    const reader = new FileReader();
    reader.onload = () =>
      setForm((f) => ({ ...f, avatar: reader.result }));
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name) return setError("Name is required");
    if (!form.email) return setError("Email is required");
    if (!form.password) return setError("Password is required");
    if (pwStrength.label === "Weak")
      return setError("Password is too weak");

    setSuccess("User added successfully (local mode).");
  };

  return (
    <AppLayout title="Add User">
      <div style={styles.card}>
        <h2 style={styles.title}>Add New User</h2>

        {error && <div style={styles.error}>{error}</div>}
        {success && <div style={styles.success}>{success}</div>}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>

          <label style={styles.label}>Full Name</label>
          <input
            style={styles.input}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <label style={styles.label}>Email</label>
          <input
            style={styles.input}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <label style={styles.label}>Role</label>
          <select
            style={styles.input}
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="educator">Educator</option>
            <option value="admin">Admin</option>
          </select>

          <label style={styles.label}>Class</label>
          <select
            style={styles.input}
            value={form.classRoom}
            onChange={(e) => setForm({ ...form, classRoom: e.target.value })}
          >
            {classes.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          <label style={styles.label}>Password</label>
          <input
            type="password"
            style={styles.input}
            value={form.password}
            onChange={updatePassword}
          />

          {/* Password Strength */}
          <div style={styles.strengthBar}>
            <div
              style={{
                height: "100%",
                width: `${(pwStrength.score / 5) * 100}%`,
                background:
                  pwStrength.label === "Strong"
                    ? "#0f9d58"
                    : pwStrength.label === "Medium"
                    ? "#f4b400"
                    : "#d93025",
                transition: "width 0.25s",
              }}
            ></div>
          </div>
          <div style={styles.strengthLabel}>{pwStrength.label}</div>

          <label style={styles.label}>Avatar (optional)</label>
          <div style={{ display: "flex", gap: 12 }}>
            <input type="file" accept="image/*" onChange={handleAvatarChange} />
            {avatarPreview && (
              <img
                src={avatarPreview}
                alt="preview"
                style={{ width: 60, height: 60, borderRadius: 8, objectFit: "cover" }}
              />
            )}
          </div>

          <button type="submit" style={styles.button}>Add User</button>
        </form>
      </div>
    </AppLayout>
  );
}

const styles = {
  card: {
    width: "100%",
    maxWidth: 700,
    background: "rgba(255,255,255,0.85)",
    padding: 30,
    borderRadius: 16,
    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
    backdropFilter: "blur(8px)",
  },
  title: { fontSize: 26, fontWeight: 700, marginBottom: 10 },
  label: { fontSize: 14, fontWeight: 600 },
  input: {
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid #ccc",
    fontSize: 15,
  },
  button: {
    marginTop: 10,
    padding: "14px",
    borderRadius: 10,
    background: "#111827",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: 16,
    fontWeight: 600,
  },
  error: {
    background: "#fee2e2",
    padding: 10,
    borderRadius: 10,
    color: "#b91c1c",
  },
  success: {
    background: "#d1fae5",
    padding: 10,
    borderRadius: 10,
    color: "#065f46",
  },
  strengthBar: {
    height: 8,
    width: "100%",
    borderRadius: 6,
    background: "#eee",
    overflow: "hidden",
  },
  strengthLabel: {
    fontSize: 12,
    marginTop: -6,
    marginBottom: 4,
    textAlign: "right",
    color: "#444",
  },
};
