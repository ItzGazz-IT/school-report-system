import AppLayout from "../components/AppLayout";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("mockUsers") || "[]");

  const deleteUser = (index) => {
    if (!confirm("Delete this user?")) return;

    const updated = users.filter((_, i) => i !== index);
    localStorage.setItem("mockUsers", JSON.stringify(updated));
    window.location.reload();
  };

  return (
    <AppLayout title="Users">
      <div style={styles.card}>
        <div style={styles.headerRow}>
          <h2 style={styles.title}>All Users</h2>

          <button
            style={styles.addUserBtn}
            onClick={() => navigate("/add-user")}
          >
            ➕ Add User
          </button>
        </div>

        {users.length === 0 && (
          <p style={{ fontSize: 16, opacity: 0.6, marginTop: 20 }}>
            No users added yet.
          </p>
        )}

        {users.map((u, i) => (
          <div key={i} style={styles.userRow}>
            <div style={styles.userInfo}>
              <img
                src={u.avatar || "/placeholder.png"}
                style={styles.avatar}
                alt="avatar"
              />
              <div>
                <div style={styles.userName}>{u.name}</div>
                <div style={styles.userEmail}>{u.email}</div>
                <div style={styles.userRole}>{u.role}</div>
              </div>
            </div>

            <div style={styles.actions}>
              <button
                style={styles.editBtn}
                onClick={() => navigate(`/edit-user/${i}`)}
              >
                ✏️ Edit
              </button>

              <button
                style={styles.deleteBtn}
                onClick={() => deleteUser(i)}
              >
                🗑 Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}

const styles = {
  card: {
    width: "100%",
    maxWidth: 900,
    background: "rgba(255,255,255,0.85)",
    padding: 30,
    borderRadius: 16,
  },

  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
  },

  addUserBtn: {
    padding: "10px 18px",
    background: "#111827",
    color: "#fff",
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 600,
  },

  userRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 10px",
    borderBottom: "1px solid #e5e7eb",
  },

  userInfo: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 12,
    objectFit: "cover",
  },

  userName: { fontSize: 16, fontWeight: 600 },
  userEmail: { fontSize: 13, opacity: 0.7 },
  userRole: { fontSize: 13, opacity: 0.7 },

  actions: { display: "flex", gap: 10 },

  editBtn: {
    padding: "8px 12px",
    borderRadius: 6,
    border: "none",
    background: "#3b82f6",
    color: "#fff",
    cursor: "pointer",
  },

  deleteBtn: {
    padding: "8px 12px",
    borderRadius: 6,
    border: "none",
    background: "#dc2626",
    color: "#fff",
    cursor: "pointer",
  },
};
