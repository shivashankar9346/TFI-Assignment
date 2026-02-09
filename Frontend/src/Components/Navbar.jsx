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
            to="/volunteer-details"
            className={
              location.pathname === "/volunteer-details" ? "active" : ""
            }
          >
            Volunteer Details
          </Link>

          <Link
            to="/volunteer-information"
            className={
              location.pathname === "/volunteer-information" ? "active" : ""
            }
          >
           Volunteer Information
          </Link>

          <button onClick={logout}>Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
