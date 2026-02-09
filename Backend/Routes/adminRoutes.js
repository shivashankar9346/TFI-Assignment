import express from "express";
import { adminLogin, getAllVolunteers } from "../Controllers/adminController.js";
import { adminProtect } from "../Middleware/adminMiddleware.js";

const router = express.Router();

router.post("/login", adminLogin);
router.get("/volunteers", adminProtect, getAllVolunteers);

export default router;
