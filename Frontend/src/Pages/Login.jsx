import { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await login(form);

    if (res?.token) {
      localStorage.setItem("token", res.token);
      alert("Login successful");
      navigate("/volunteer-details");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={submitHandler}>
        <h2>Login</h2>

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

        <button type="submit">Login</button>

        <p className="auth-text">
          Not registered?{" "}
          <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
