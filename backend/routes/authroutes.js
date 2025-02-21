const express = require("express");
const router = express.Router();
const { registerStudent, registerOrganizer, login } = require("../controllers/authcontroller");

// Register routes
router.post("/register/student", registerStudent);
router.post("/register/organizer", registerOrganizer);

// Login route should be "/login"
router.post("/login", login);

module.exports = router;
