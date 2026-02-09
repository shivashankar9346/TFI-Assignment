import { createContext, useState } from "react";
import API from "../Server/Api";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);

  const adminLogin = async (data) => {
    const res = await API.post("/admin/login", data);
    localStorage.setItem("adminToken", res.data.token);
    setAdmin(res.data);
  };

  const getVolunteers = async () => {
    const res = await API.get("/admin/volunteers");
    return res.data;
  };

  return (
    <AdminContext.Provider value={{ admin, adminLogin, getVolunteers }}>
      {children}
    </AdminContext.Provider>
  );
};
