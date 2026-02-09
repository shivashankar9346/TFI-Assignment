import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    location: String,
    languages: [String],
    availability: [String],
  },
  { timestamps: true }
);

export default mongoose.model("Volunteer", volunteerSchema);


