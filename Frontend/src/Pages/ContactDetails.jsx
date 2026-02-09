import { useState } from "react";
import API from "../Server/Api";
import "./ContactDetails.css";

const ContactDetails = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    dob: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await API.post("/volunteers", form);
      alert("Volunteer details saved successfully");
    } catch (error) {
      alert(error.response?.data?.message || "Error");
    }
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={submitHandler}>
        <h2>Volunteer Details</h2>

        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter full name"
          required
          onChange={(e) =>
            setForm({ ...form, fullName: e.target.value })
          }
        />

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter email"
          required
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <label>Contact Number</label>
        <input
          type="tel"
          placeholder="Enter contact number"
          required
          onChange={(e) =>
            setForm({ ...form, contactNumber: e.target.value })
          }
        />

        <label>Date of Birth</label>
        <input
          type="date"
          required
          onChange={(e) =>
            setForm({ ...form, dob: e.target.value })
          }
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactDetails;
