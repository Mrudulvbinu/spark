const RegisteredHackathon = require('../modules/registeredhackathon');
const Hackathon = require('../modules/hackathon');

exports.registerHackathon = async (req, res, organizerId = null) => {
    try {
        const { hackathonId, studentId, isTeam, leaderName, leaderEmail, phone, education, hasParticipated, teamName, members } = req.body;
        const existingRegistration = await RegisteredHackathon.findOne({ hackathonId, leaderEmail });
        
        if (existingRegistration) {
            return res.status(400).json({ message: 'You have already registered for this hackathon.' });
        }

        // Fetch hackathon if `organizerId` is not provided
        if (!organizerId) {
            const hackathon = await Hackathon.findById(hackathonId);
            if (!hackathon) {
                return res.status(404).json({ message: 'Hackathon not found.' });
            }
            organizerId = hackathon.organizerId;
        }


        const registration = new RegisteredHackathon({
            hackathonId,
            studentId,
            isTeam,
            leaderName,
            leaderEmail,
            phone,
            education,
            hasParticipated,
            teamName,
            members
        });

        await registration.save();
        res.status(201).json({ message: 'Registration successful.', registration });
    } catch (err) {
        res.status(500).json({ message: 'Server error.', error: err.message });
    }
};

exports.getHackathonRegistrations = async (req, res) => {
    try {
        const { hackathonId } = req.params;
        const registrations = await RegisteredHackathon.find({ hackathonId });

        res.status(200).json(registrations);
    } catch (err) {
        res.status(500).json({ message: 'Server error.', error: err.message });
    }
};

exports.getStudentHackathons = async (req, res) => {
    try {
        const email = req.user.email; // Extract email from token
        const { type } = req.query; // Expect type="upcoming" or "participated"

        const registrations = await RegisteredHackathon.find({ leaderEmail: email }).populate('hackathonId');

        let events = [];
        if (type === 'upcoming') {
            events = registrations.filter(reg => new Date(reg.hackathonId.startDate) >= new Date());
        } else if (type === 'participated') {
            events = registrations.filter(reg => new Date(reg.hackathonId.startDate) < new Date());
        }

        res.status(200).json(events);
    } catch (err) {
        res.status(500).json({ message: 'Server error.', error: err.message });
    }
};
