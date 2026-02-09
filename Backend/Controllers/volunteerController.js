import Volunteer from "../Models/volunteerModel.js";

export const createVolunteer = async (req, res) => {
  try {
    const volunteer = new Volunteer({
      userId: req.user.id,
      ...req.body
    });

    await volunteer.save();

    res.status(201).json({
      message: "Volunteer details saved successfully",
      volunteer
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
