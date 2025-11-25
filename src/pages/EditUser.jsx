import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import AppLayout from "../components/AppLayout";

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("mockUsers") || "[]");

  const existing = users[id];
  const [form, setForm] = useState(existing);

  const updateUser = () => {
    users[id] = form;
    localStorage.setItem("mockUsers", JSON.stringify(users));
    alert("User updated.");
    navigate("/users");
  };

  return (
    <AppLayout title="Edit User">
      <div style={styles.card}>
        <h2>Edit User</h2>

        <label>Name</label>
        <input
          style={styles.input}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <label>Email</label>
        <input
          style={styles.input}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <label>Role</label>
        <select
          style={styles.input}
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option value="educator">Educator</option>
          <option value="admin">Admin</option>
        </select>

        <button style={styles.button} onClick={updateUser}>
          Save
        </button>
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
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  input: {
    padding: 12,
    borderRadius: 8,
    border: "1px solid #ccc",
  },
  button: {
    padding: 14,
    background: "#111827",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    fontWeight: 600,
    marginTop: 10,
  },
};
