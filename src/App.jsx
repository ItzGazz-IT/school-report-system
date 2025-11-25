import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Settings from "./pages/Settings.jsx";
import DatabaseLink from "./pages/DatabaseLink.jsx";
import AddUser from "./pages/AddUser.jsx";
import Users from "./pages/Users.jsx";
import EditUser from "./pages/EditUser.jsx";
import TestFirestore from "./pages/TestFirestore.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/database-link" element={<DatabaseLink />} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/users" element={<Users />} />
      <Route path="/edit-user/:id" element={<EditUser />} />
      <Route path="/test" element={<TestFirestore />} />




      {/* Redirect any unknown route to login */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
