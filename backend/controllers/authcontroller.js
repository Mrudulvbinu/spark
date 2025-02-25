const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const StudentUser = require("../modules/studentuser");
const OrganizerUser = require("../modules/organizerusers");
const Admin = require("../modules/admin");
const RegisteredHackathon = require("../modules/registeredhackathon");

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key"; 

// ================== REGISTER STUDENT ==================
const registerStudent = async (req, res) => {
  const { name, email, username, password } = req.body;
  try {
    const existingUser = await StudentUser.findOne({ username });
    if (existingUser) return res.status(400).json({ error: "Username already exists!" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new StudentUser({ name, email, username, password: hashedPassword, userType: "student" });
    await newUser.save();
    res.status(201).json({ message: "Student registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// ================== REGISTER ORGANIZER ==================
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
      userType: "organizer",
    });

    await newUser.save();
    res.status(201).json({ message: "Organizer registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// ================== LOGIN ==================
const login = async (req, res) => {
  const { username, password, userType } = req.body;

  try {
    let user;

    if (userType === "student") {
      user = await StudentUser.findOne({ username });
    } else if (userType === "organizer") {
      user = await OrganizerUser.findOne({ username });
    } else {
      return res.status(400).json({ error: "Invalid user type" });
    }

    if (!user) return res.status(400).json({ error: "User not found" });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, userType: user.userType }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({
      success: true,
      message: "Login successful!",
      user: { username: user.username, userType: user.userType, _id: user._id },
      token,
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// ================== ADMIN LOGIN ==================
const adminLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(400).json({ success: false, message: "Admin not found" });

    if (admin.password !== password) return res.status(400).json({ success: false, message: "Invalid password" });

    res.status(200).json({ success: true, message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ================== FETCH REGISTERED EVENTS ==================
const getRegisteredEvents = async (req, res) => {
  try {
    const user = await StudentUser.findById(req.user.id).populate('registeredEvents');
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user.registeredEvents);
  } catch (error) {
    res.status(500).json({ message: "Error fetching registered events", error });
  }
};

// ================== FETCH PARTICIPATED EVENTS ==================
const getParticipatedEvents = async (req, res) => {
  try {
    const user = await StudentUser.findById(req.user.id).populate('participatedEvents');
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user.participatedEvents);
  } catch (error) {
    res.status(500).json({ message: "Error fetching participated events", error });
  }
};

module.exports = {
  registerStudent,
  registerOrganizer,
  login,
  adminLogin,
  getRegisteredEvents,
  getParticipatedEvents,
};
