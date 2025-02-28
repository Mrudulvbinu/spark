// server.js 
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// CORS middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");  
  })
  .catch((err) => {
    console.error("MongoDB connection error", err);
  });

// Routes
const authRoutes = require("./routes/authroutes");
app.use("/api/auth", authRoutes);

const userRoutes = require("./routes/userroutes");
app.use("/api/user", userRoutes);

const hackathonroutes = require("./routes/hackathonroutes");
app.use("/api/hackathons", hackathonroutes);

const registeredhackathonRoutes = require("./routes/hackathonregistrationroutes");
app.use("/api/registeredhackathon", registeredhackathonRoutes);

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
