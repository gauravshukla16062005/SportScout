import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Upload from "./pages/Upload";
import Dashboard from "./pages/Dashboard";
import Report from "./pages/Report";
import Processing from "./pages/Processing";
import HistoryPage from "./pages/History";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Routes>
      {/* Public Routes */}

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Main Application */}

      <Route path="/dashboard" element={<Dashboard />} />

      {/* Dynamic Sport Upload */}

      <Route
        path="/upload/:sport"
        element={<Upload />}
      />

      {/* Analysis Processing */}

      <Route
        path="/processing/:sport"
        element={<Processing />}
      />

      {/* Analysis Report */}

      <Route
        path="/report/:sport"
        element={<Report />}
      />

      {/* User Pages */}

      <Route
        path="/history"
        element={<HistoryPage />}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />

      {/* Unknown Routes */}

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}