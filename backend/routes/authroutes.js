const express = require("express");
const router = express.Router();
const authController = require("../controllers/authcontroller");

router.post("/login", authController.login);  

router.post("/login/admin", authController.adminLogin);  

module.exports = router;
