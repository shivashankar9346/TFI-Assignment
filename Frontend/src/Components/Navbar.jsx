import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, [location.pathname]);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/");
  };

  return (
    <nav>
      <h3>Teach For India</h3>

      {!token ? (
        <Link to="/">Student Volunteer Program</Link>
      ) : (
        <div>
          <Link
            to="/contact-details"
            className={
              location.pathname === "/contact-details" ? "active" : ""
            }
          >
            Contact Details
          </Link>

          <Link
            to="/personal-details"
            className={
              location.pathname === "/personal-details" ? "active" : ""
            }
          >
            Personal Details
          </Link>

          <button onClick={logout}>Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
