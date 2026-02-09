// import express from "express";
// import {
//   saveContactDetails,
//   savePersonalDetails,
// } from "../Controllers/volunteerController.js";

// const router = express.Router();

// // Page 1
// router.post("/contact", saveContactDetails);

// // Page 2
// router.put("/personal", savePersonalDetails);

// export default router;


import express from "express";
import { createVolunteer } from "../Controllers/volunteerController.js";
import { protect } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createVolunteer);

export default router;

