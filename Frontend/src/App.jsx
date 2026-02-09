import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// User Pages
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ContactDetails from "./Pages/ContactDetails";
import PersonalDetails from "./Pages/PersonalDetails";

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
        <Route path="/contact-details" element={<ContactDetails />} />
        <Route path="/personal-details" element={<PersonalDetails />} />

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
