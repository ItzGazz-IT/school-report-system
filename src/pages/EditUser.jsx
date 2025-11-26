// src/pages/EditUser.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AppLayout from "../components/AppLayout";
import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "educator",
    classRoom: "",
    avatar: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const ref = doc(db, "users", id);
        const snap = await getDoc(ref);
        if (!snap.exists()) {
          alert("User not found.");
          navigate("/users");
          return;
        }
        const data = snap.data();
        setForm({
          name: data.name || "",
          email: data.email || "",
          role: data.role || "educator",
          classRoom: data.classRoom || "",
          avatar: data.avatar || "",
        });
      } catch (err) {
        console.error("Error loading user:", err);
        alert("Failed to load user.");
        navigate("/users");
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [id, navigate]);

  const updateUser = async () => {
    try {
      await updateDoc(doc(db, "users", id), {
        name: form.name,
        email: form.email,
        role: form.role,
        classRoom: form.classRoom,
        avatar: form.avatar,
      });
      alert("User updated.");
      navigate("/users");
    } catch (err) {
      console.error("Error updating user:", err);
      alert("Failed to update user.");
    }
  };

  if (loading) {
    return (
      <AppLayout title="Edit User">
        <p>Loading user…</p>
      </AppLayout>
    );
  }

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

        <label>Class</label>
        <input
          style={styles.input}
          value={form.classRoom}
          onChange={(e) => setForm({ ...form, classRoom: e.target.value })}
        />

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
    cursor: "pointer",
  },
};
