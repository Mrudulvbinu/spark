// routes/hackathonroutes.js
const express = require("express");
const router = express.Router();
const Hackathon = require("../modules/hackathon");

// POST route to add a hackathon
router.post("/add", async (req, res) => {
  try {
    const newHackathon = new Hackathon(req.body);
    await newHackathon.save();
    res.status(201).json({ message: "Hackathon added successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET route to get all hackathons
router.get("/", async (req, res) => {
  try {
    const hackathons = await Hackathon.find();
    res.status(200).json(hackathons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET route to get a hackathon by ID (using findOne instead of findById)
router.get("/:id", async (req, res) => {
  try {
    const hackathon = await Hackathon.findOne({ _id: req.params.id });

    if (!hackathon) {
      return res.status(404).json({ message: "Hackathon not found" });
    }

    res.status(200).json(hackathon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
