const mongoose = require('mongoose');

const RegisteredHackathonSchema = new mongoose.Schema({
    hackathonId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hackathon',
        required: true
    },
    organizerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrganizerUser',
        required: true
    },
    leaderName: {
        type: String,
        required: true
    },
    leaderEmail: {
        type: String,
        required: true
    },
    isTeam: {
        type: Boolean,
        required: true
    },
    members: {
        type: [String],
        default: []
    },
    registrationDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('RegisteredHackathon', RegisteredHackathonSchema);
