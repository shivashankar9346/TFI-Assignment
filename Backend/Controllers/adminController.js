import Admin from "../Models/admin.js";
import Volunteer from "../Models/volunteerModel.js";
import jwt from "jsonwebtoken";

// ADMIN LOGIN
export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const admin = await Admin.findOne({ email });


        console.log("DB Admin:", admin);
        console.log("Password from DB:", admin?.password);
        console.log("Password from request:", password);

        if (!admin) {
            return res.status(401).json({ message: "Invalid admin credentials" });
        }

        // plain text check (for now)
        if (admin.password !== password) {
            return res.status(401).json({ message: "Invalid admin credentials" });
        }

        const token = jwt.sign(
            { id: admin._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.status(200).json({
            message: "Admin login successful",
            token
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET ALL VOLUNTEERS (ADMIN ONLY)
export const getAllVolunteers = async (req, res) => {
    try {
        const volunteers = await Volunteer.find();
        res.status(200).json({
            total: volunteers.length,
            volunteers
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


