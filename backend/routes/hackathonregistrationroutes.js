// routes/registrationroutes.js
const express = require("express");
const router = express.Router();
const {
  registerHackathon,
  getHackathonRegistrations,
  getStudentHackathons,
} = require("../controllers/registrationcontroller");

// POST: Register for a hackathon
router.post("/register", registerHackathon);

// GET: Fetch all registrations for a specific hackathon
router.get("/:hackathonId", getHackathonRegistrations);

// GET: Fetch hackathons registered by a specific student
router.get("/student/:email", getStudentHackathons);

module.exports = router;
