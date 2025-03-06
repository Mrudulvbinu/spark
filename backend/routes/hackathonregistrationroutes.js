const express = require('express');
const router = express.Router();
const Hackathon = require('../modules/hackathon');
const RegisteredHackathon = require('../modules/registeredhackathon');
const {
  getHackathonRegistrations,
  getStudentHackathons,
} = require('../controllers/registrationcontroller');

// ✅ Unified Registration Endpoint for Solo and Team Hackathons
router.post('/register', async (req, res) => {
  try {
    console.log("Incoming Registration Data:", req.body);

    const {
      hackathonId,
      isTeam,
      leaderName,
      datebirth,
      leaderEmail,
      name,
      email,
      phone,
      education,
      hasParticipated,
      teamName,
      members
    } = req.body;

    if (!hackathonId) {
      return res.status(400).json({ message: 'Hackathon ID is required.' });
    }

    // 🔍 Fetch Hackathon to get organizerId
    const hackathon = await Hackathon.findById(hackathonId);
    if (!hackathon) {
      return res.status(404).json({ message: 'Hackathon not found.' });
    }

    // ✅ Ensure organizerId exists
    if (!hackathon.organizerId) {
      return res.status(400).json({ message: 'Organizer ID is missing in the Hackathon data.' });
    }

    // Check if the user is already registered
    const existingRegistration = await RegisteredHackathon.findOne({ hackathonId, leaderEmail });
    if (existingRegistration) {
      return res.status(400).json({ message: 'You have already registered for this hackathon.' });
    }

    // Prepare registration data
    const registrationData = {
      hackathonId,
      organizerId: hackathon.organizerId,
      isTeam,
      leaderName: isTeam ? leaderName : name, // Use 'name' for virtual, 'leaderName' for team
      leaderEmail: isTeam ? leaderEmail : email, // Use 'email' for virtual, 'leaderEmail' for team
      datebirth,
      phone,
      education,
      hasParticipated,
      teamName: isTeam ? teamName : undefined, // Team name only for team registrations
    members: isTeam ? members.map((m) => ({
        name: m.name,
        email: m.email,
        dob: m.dob
    })) : [], // Empty members array for virtual registrations
    registrationDate: new Date()
};
  

    // Save registration to the database
    const newRegistration = new RegisteredHackathon(registrationData);
    await newRegistration.save();

    return res.status(201).json({ message: 'Registration successful!' });
  } catch (error) {
    console.error("Server Error Details:", error);
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
});

// ✅ GET: Fetch all registrations for a specific hackathon
router.get('/hackathon/:hackathonId', getHackathonRegistrations);

// ✅ GET: Fetch hackathons registered by a specific student
router.get('/student/:email', getStudentHackathons);

module.exports = router;