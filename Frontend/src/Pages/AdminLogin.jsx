import { useContext, useState } from "react";
import { AdminContext } from "../Context/AdminContext";

const AdminLogin = () => {
  const { adminLogin } = useContext(AdminContext);
  const [form, setForm] = useState({ email: "", password: "" });

  const submitHandler = async (e) => {
    e.preventDefault();
    await adminLogin(form);
    alert("Admin logged in");
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Admin Login</h2>
      <input placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})} />
      <input placeholder="Password" type="password" onChange={(e)=>setForm({...form,password:e.target.value})} />
      <button>Login</button>
    </form>
  );
};

export default AdminLogin;
