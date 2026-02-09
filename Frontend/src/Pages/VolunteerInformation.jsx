import { useState } from "react";
import API from "../Server/Api"; // your axios instance
import "./VolunteerInformation.css";

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
    <div className="volunteer-container">
      <form className="volunteer-form" onSubmit={submitHandler}>
        <h2>Volunteer Information</h2>

        {/* Location Input with Label */}
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            placeholder="Enter your location"
            required
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />
        </div>

        {/* Languages */}
        <div className="form-group">
          <label>Languages Spoken:</label>
          <div className="checkbox-group">
            {languagesList.map((lang) => (
              <div key={lang} className="checkbox-item">
                <input
                  type="checkbox"
                  id={lang}
                  value={lang}
                  checked={form.languages.includes(lang)}
                  onChange={(e) => handleCheckbox(e, "languages")}
                />
                <label htmlFor={lang}>{lang}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Days */}
        <div className="form-group">
          <label>Available Days:</label>
          <div className="checkbox-group">
            {daysList.map((day) => (
              <div key={day} className="checkbox-item">
                <input
                  type="checkbox"
                  id={day}
                  value={day}
                  checked={form.days.includes(day)}
                  onChange={(e) => handleCheckbox(e, "days")}
                />
                <label htmlFor={day}>{day}</label>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default VolunteerForm;
