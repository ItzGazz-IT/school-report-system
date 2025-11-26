import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function TestFirestore() {
  
  const testFirestore = async () => {
    try {
      console.log("Testing Firestore…");

      await addDoc(collection(db, "testCollection"), {
        name: "Test User",
        createdAt: new Date(),
      });

      console.log("WRITE OK");

      const snap = await getDocs(collection(db, "testCollection"));
      snap.forEach((doc) => console.log(doc.id, doc.data()));

      alert("Firestore Working!");
    } catch (err) {
      console.error("🔥 FIRESTORE ERROR:", err);
      alert("Error: " + err.message);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Firestore Test Page</h1>
      <p>Click the button below to test read+write.</p>

      <button
        onClick={testFirestore}
        style={{
          padding: "10px 20px",
          background: "#4f46e5",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          marginTop: 20,
        }}
      >
       Testfirestore
       </button>
    </div>
  );
}