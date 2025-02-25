// models/Hackathon.js
const mongoose = require('mongoose');

const HackathonSchema = new mongoose.Schema({
    organizerId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'OrganizerUser' },
    typeofhk: { type: String, required: true },
    ename: { type: String, required: true },
    venue: { type: String, required: true },
    date: { type: String, required: true },
    regstart: { type: String, required: true },
    regend: { type: String, required: true },
    details: { type: String, required: true },
    durofhk: { type: String, required: true },
    prize: { type: String, required: true }
});

module.exports = mongoose.model('Hackathon', HackathonSchema);
