import { useState } from "react";
import API from "../Server/Api"; // your axios instance
import "./PersonalDetails.css";

const VolunteerForm = () => {
  const [form, setForm] = useState({
    location: "",
    languages: [],
    days: [],
  });

  const languagesList = ["English", "Hindi", "Spanish", "French"];
  const daysList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handleCheckbox = (e, field) => {
    const { value, checked } = e.target;
    setForm((prev) => {
      if (checked) {
        return { ...prev, [field]: [...prev[field], value] };
      } else {
        return { ...prev, [field]: prev[field].filter((v) => v !== value) };
      }
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/volunteers", form);
      alert(res.data.message || "Form submitted successfully!");
      setForm({ location: "", languages: [], days: [] });
    } catch (error) {
      console.error("SUBMIT ERROR:", error.response?.data || error.message);
      alert("Submission failed");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={submitHandler}>
        <h2>Volunteer Info</h2>

        <input
          type="text"
          placeholder="Location"
          required
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />

        <div>
          <label>Languages Spoken:</label>
          {languagesList.map((lang) => (
            <div key={lang}>
              <input
                type="checkbox"
                value={lang}
                checked={form.languages.includes(lang)}
                onChange={(e) => handleCheckbox(e, "languages")}
              />
              <span>{lang}</span>
            </div>
          ))}
        </div>

        <div>
          <label>Available Days:</label>
          {daysList.map((day) => (
            <div key={day}>
              <input
                type="checkbox"
                value={day}
                checked={form.days.includes(day)}
                onChange={(e) => handleCheckbox(e, "days")}
              />
              <span>{day}</span>
            </div>
          ))}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VolunteerForm;
