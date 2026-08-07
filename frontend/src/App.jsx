import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import Dashboard from "./pages/Dashboard";
import Report from "./pages/Report";
import Processing from "./pages/Processing";
import HistoryPage from "./pages/History";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Dynamic Sport Upload */}
      <Route path="/upload/:sport" element={<Upload />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/report" element={<Report />} />
      <Route path="/processing/:sport" element={<Processing />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
  );
}