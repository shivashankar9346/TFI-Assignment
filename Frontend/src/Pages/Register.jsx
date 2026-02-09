
import { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    // ✅ Validate confirm password
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const res = await register(form);

    if (res?.message) {
      alert(res.message);
      navigate("/login");
      setForm({ fullName: "", email: "", password: "", confirmPassword: "" });
    } else {
      alert("User already exists or registration failed");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={submitHandler}>
        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          required
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          required
          value={form.confirmPassword}
          onChange={(e) =>
            setForm({ ...form, confirmPassword: e.target.value })
          }
        />

        <button type="submit">Register</button>

        <p className="auth-text">
          Already registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
