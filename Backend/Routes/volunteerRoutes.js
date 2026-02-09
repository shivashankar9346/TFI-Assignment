


import express from "express";
import { createVolunteer } from "../Controllers/volunteerController.js";
import { protect } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createVolunteer);

export default router;

