// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authroutes");  // Import your routes

dotenv.config();

const app = express();

// CORS Configuration (make sure frontend and backend are allowed to communicate)
app.use(cors({
  origin: "http://localhost:5173", // Make sure your frontend is running on this URL
  credentials: true,
}));

app.use(express.json()); // For parsing application/json

// Database connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.error("MongoDB connection error", err);
  });

// Use routes correctly
app.use("/api/auth", authRoutes); // The '/api/auth' is the base for the routes defined in authRoutes

// Handle preflight requests for CORS
app.options("*", cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
