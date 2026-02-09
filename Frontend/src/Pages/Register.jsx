import { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await register(form);

    if (res) {
      alert("Registered successfully");
      navigate("/login");
    } else {
      alert(" User already Exist or Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={submitHandler}>
        <h2>Create Account</h2>

        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button type="submit">Register</button>

        <p className="auth-text">
          Already registered?{" "}
          <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
