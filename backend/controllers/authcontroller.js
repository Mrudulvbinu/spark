const bcrypt = require("bcryptjs");
const StudentUser = require("../modules/studentuser");  // Correct path to your student model
const OrganizerUser = require("../modules/organizeruser");  // Correct path to your organizer model

// Register student
const registerStudent = async (req, res) => {
  const { name, email, username, password } = req.body;
  try {
    const existingUser = await StudentUser.findOne({ username });
    if (existingUser) return res.status(400).json({ error: "Username already exists!" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new StudentUser({ name, email, username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "Student registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Register organizer
const registerOrganizer = async (req, res) => {
  const { name, email, username, password, address, certificate } = req.body;
  try {
    const existingUser = await OrganizerUser.findOne({ username });
    if (existingUser) return res.status(400).json({ error: "Username already exists!" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new OrganizerUser({
      name,
      email,
      username,
      password: hashedPassword,
      address,
      certificate,
    });

    await newUser.save();
    res.status(201).json({ message: "Organizer registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const login = async (req, res) => {
  const { username, password, userType } = req.body;

  try {
    let user;

    // Check the user type and query the appropriate model
    if (userType === "student") {
      user = await StudentUser.findOne({ username });
    } else if (userType === "organizer") {
      user = await OrganizerUser.findOne({ username });
    } else {
      return res.status(400).json({ error: "Invalid user type" });
    }

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    // Compare the password with the hashed password stored in the DB
    const isPasswordCorrect = await bcrypt.compare(password, user.password); // bcrypt will compare hashed passwords
    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // If the login is successful
    res.status(200).json({
      success: true,
      message: "Login successful!",
      // Optionally send user data excluding sensitive data like password
      user: { username: user.username, userType: user.userType, _id: user._id }
    });

  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { registerStudent, registerOrganizer, login };
