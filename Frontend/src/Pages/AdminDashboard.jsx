import { useEffect, useState } from "react";
import API from "../Server/Api";

const AdminDashboard = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const fetchVolunteers = async () => {
      const token = localStorage.getItem("adminToken");

      const res = await API.get("/admin/volunteers", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setVolunteers(res.data.volunteers);
    };

    fetchVolunteers();
  }, []);

  return (
    <div>
      <h2>All Registered Volunteers</h2>

      {volunteers.map((v) => (
        <div key={v._id} style={{ borderBottom: "1px solid #ccc", marginBottom: 10 }}>
          <p><b>Name:</b> {v.fullName}</p>
          <p><b>Email:</b> {v.email}</p>
          <p><b>Contact:</b> {v.contactNumber}</p>
          <p><b>DOB:</b> {v.dob}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
