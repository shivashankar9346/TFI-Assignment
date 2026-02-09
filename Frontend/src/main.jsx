import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./Context/UserContext";
import { AdminProvider } from "./Context/AdminContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <AdminProvider>
      <App />
    </AdminProvider>
  </UserProvider>
);
