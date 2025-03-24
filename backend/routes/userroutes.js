const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authmiddleware");
const {
  registerStudent,
  registerOrganizer,
  login,
  adminLogin,
} = require("../controllers/authcontroller");
const { getStudentHackathons } = require("../controllers/registrationcontroller");

router.post("/register/student", registerStudent);
router.post("/register/organizer", registerOrganizer);
router.post("/login", login);
router.post("/admin/login", adminLogin);

router.get("/registered-events", verifyToken, getStudentHackathons);
router.get("/participated-events", verifyToken, getStudentHackathons);

module.exports = router;
