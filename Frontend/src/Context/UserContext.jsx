// UserContext.jsx
import { createContext, useState } from "react";
import API from "../Server/Api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // optional, store logged-in user

  // REGISTER
  const register = async (formData) => {
    try {
      const res = await API.post("/auth/register", formData);
      console.log("REGISTER SUCCESS:", res.data);
      return res.data;
    } catch (error) {
      console.error("REGISTER ERROR:", error.response?.data || error.message);
      return null;
    }
  };

  // LOGIN
  const login = async (formData) => {
    try {
      const res = await API.post("/auth/login", formData);
      console.log("LOGIN SUCCESS:", res.data);

      // store token for future requests
      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
      }

      setUser(res.data.user || null); // optional, store user info
      return res.data;
    } catch (error) {
      console.error("LOGIN ERROR:", error.response?.data || error.message);
      return null;
    }
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
