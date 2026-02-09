import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// User Pages
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import VolunteerDetails from "./Pages/VolunteerDetails";
import VolunteerInformation from "./Pages/VolunteerInformation";

// Admin Pages
import AdminLogin from "./Pages/AdminLogin";
import AdminDashboard from "./Pages/AdminDashboard";

// Common
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* User Routes */}
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/volunteer-details" element={<VolunteerDetails/>} />
        <Route path="/volunteer-information" element={<VolunteerInformation />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Fallback */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
