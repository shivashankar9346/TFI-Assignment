import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./dataBase/db.js";

import authRoutes from "./Routes/authRoutes.js"
import volunteerRoutes from "./Routes/volunteerRoutes.js"
import adminRoutes from "./Routes/adminRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/volunteers", volunteerRoutes);
app.use("/api/admin", adminRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Teach For India Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
