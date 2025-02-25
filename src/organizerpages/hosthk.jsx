import React, { useState, useEffect } from 'react';
import img from "/src/assets/img3.jpg";
import Headerbar from "/src/components/headerbar.jsx";
import Navbar from "/src/components/navbar.jsx";
import Footer from "/src/components/footer.jsx";
import axiosInstance from '../../backend/axiosinstance';

const Hosthk = () => {
    const [formData, setFormData] = useState({
        typeofhk: "",
        ename: "",
        venue: "",
        date: "",
        regstart: "",
        regend: "",
        details: "",
        durofhk: "",
        prize: "",
    });

    // Track label text for Venue/Platform
    const [venueLabel, setVenueLabel] = useState("Event Venue");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Handle form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Update label based on selected hackathon type
        if (name === "typeofhk") {
            setVenueLabel(value === "Virtual Solo Hackathon (online)" ? "Event Platform" : "Event Venue");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const mappedFormData = {
            ...formData,
            typeofhk: formData.typeofhk === "Team Hackathon (offline)" ? "Team" : "Solo",
        };

        try {
            const response = await axiosInstance.post('/hackathons/add', mappedFormData);
            alert(response.data.message || 'Hackathon added successfully!');
            setFormData({
                typeofhk: "",
                ename: "",
                venue: "",
                date: "",
                regstart: "",
                regend: "",
                details: "",
                durofhk: "",
                prize: "",
            });
            setVenueLabel("Event Venue");
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to host hackathon. Please try again.');
        }
    };

    return (
        <div className="relative">
            <div className="absolute inset-0 z-[-1]">
                <div
                    className="h-full w-full bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: `url(${img})` }}
                >
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                </div>
            </div>

            {/* Header and Navbar */}
            <div className="w-full"><Headerbar /></div>
            <div className="w-full"><Navbar /></div>

            {/* Page Title */}
            <h2 className="text-5xl font-bold text-center text-white mt-15 mb-10">Host Hackathon</h2>

            <form
                onSubmit={handleSubmit}
                className="transform scale-85 bg-white shadow-lg rounded-lg p-8 space-y-6 max-w-3xl mx-auto"
            >
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Register Hackathon
                </h1>

                {/* Type of Hackathon */}
                <div className="flex items-center space-x-4">
                    <label className="w-1/3 font-bold text-lg text-gray-700 text-right">
                        Type of Hackathon:
                    </label>
                    <select
                        id="typeofhk"
                        name="typeofhk"
                        value={formData.typeofhk}
                        onChange={handleChange}
                        className="w-2/3 p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        required
                    >
                        <option value="">Select Type</option>
                        <option value="Team Hackathon (offline)">Team Hackathon (offline)</option>
                        <option value="Virtual Solo Hackathon (online)">Virtual Solo Hackathon (online)</option>
                    </select>
                </div>

                {/* Personal Information */}
                <div className="space-y-6">
                    {/* Event Name */}
                    <div className="flex items-center space-x-4">
                        <label htmlFor="ename" className="w-1/3 font-bold text-lg text-gray-700 text-right">
                            Event Name:
                        </label>
                        <input
                            type="text"
                            id="ename"
                            name="ename"
                            value={formData.ename}
                            onChange={handleChange}
                            className="w-2/3 p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Venue/Platform (Dynamic Label) */}
                    <div className="flex items-center space-x-4">
                        <label htmlFor="venue" className="w-1/3 font-bold text-lg text-gray-700 text-right">
                            {venueLabel}:
                        </label>
                        <input
                            type="text"
                            id="venue"
                            name="venue"
                            value={formData.venue}
                            onChange={handleChange}
                            className="w-2/3 p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Other Fields */}
                    {[
                        { label: "Event Date", id: "date", type: "date" },
                        { label: "Event Registration Starting Date", id: "regstart", type: "date" },
                        { label: "Event Registration Ending Date", id: "regend", type: "date" },
                        { label: "Event Details", id: "details", type: "text" },
                        { label: "Event Prize", id: "prize", type: "text" },
                    ].map(({ label, id, type }) => (
                        <div key={id} className="flex items-center space-x-4">
                            <label htmlFor={id} className="w-1/3 font-bold text-lg text-gray-700 text-right">
                                {label}:
                            </label>
                            <input
                                type={type}
                                id={id}
                                name={id}
                                value={formData[id]}
                                onChange={handleChange}
                                className="w-2/3 p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                    ))}

                    {/* Duration of Hackathon */}
                    <div className="flex items-center space-x-4">
                        <label className="w-1/3 font-bold text-lg text-gray-700 text-right">
                            Duration of Hackathon:
                        </label>
                        <select
                            id="durofhk"
                            name="durofhk"
                            value={formData.durofhk}
                            onChange={handleChange}
                            className="w-2/3 p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value="">Select Duration</option>
                            <option value="24 Hour">24 Hour</option>
                            <option value="12 Hour">12 Hour</option>
                            <option value="1 Hour">1 Hour</option>
                        </select>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-1/2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Host
                    </button>
                </div>
            </form>

            {/* Footer */}
            <div className="w-full"><Footer /></div>
        </div>
    );
};

export default Hosthk;
