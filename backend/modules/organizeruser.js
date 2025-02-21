const mongoose = require("mongoose");

const organizerUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  certificate: { type: String }, // Path to the uploaded certificate
});

module.exports = mongoose.model("OrganizerUser", organizerUserSchema);
