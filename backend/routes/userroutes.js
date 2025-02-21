const express = require("express");
const router = express.Router();
const { registerStudent, registerOrganizer, login } = require("../controllers/authcontroller");  // Make sure path is correct

// Registration routes
router.post("/register/student", registerStudent);
router.post("/register/organizer", registerOrganizer);

// Login route
router.post("/login", login);  // Ensure it's correctly defined as /login

module.exports = router;
