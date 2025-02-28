const express = require("express");
const router = express.Router();
const Hackathon = require("../modules/hackathon"); // ✅ Import Hackathon model
const RegisteredHackathon = require("../modules/registeredhackathon"); // ✅ Import RegisteredHackathon model
const {
  getHackathonRegistrations,
  getStudentHackathons,
} = require("../controllers/registrationcontroller");

// ✅ POST: Register for a hackathon (Auto-fetch organizerId)
router.post("/register", async (req, res) => {
  try {
    const { hackathonId, name, email, phone, education, hasParticipated } = req.body;

    if (!hackathonId) {
      return res.status(400).json({ message: "Hackathon ID is required." });
    }

    // 🔍 Fetch Hackathon to get organizerId
    const hackathon = await Hackathon.findById(hackathonId);
    if (!hackathon) {
      return res.status(404).json({ message: "Hackathon not found." });
    }

    // ✅ Ensure organizerId exists
    if (!hackathon.organizerId) {
      return res.status(400).json({ message: "Organizer ID is missing in the Hackathon data." });
    }

    // Check if the user is already registered
    const existingRegistration = await RegisteredHackathon.findOne({ hackathonId, leaderEmail: email });
    if (existingRegistration) {
      return res.status(400).json({ message: "You have already registered for this hackathon." });
    }

    // Create registration object
    const newRegistration = new RegisteredHackathon({
      hackathonId,
      organizerId: hackathon.organizerId, // ✅ Auto-fetch from DB
      leaderName: name, // Assuming solo registration
      leaderEmail: email,
      isTeam: false, // Solo registration
      name,
      email,
      phone,
      education,
      hasParticipated,
      members: [],
    });

    await newRegistration.save();
    res.status(201).json({ message: "Registration successful!" });
  } catch (error) {
    res.status(500).json({ message: "Server error.", error: error.message });
  }
});

// ✅ GET: Fetch all registrations for a specific hackathon
router.get("/hackathon/:hackathonId", getHackathonRegistrations);

// ✅ GET: Fetch hackathons registered by a specific student
router.get("/student/:email", getStudentHackathons);

module.exports = router;
