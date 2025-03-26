import React, { useState, useEffect } from "react";
import img from "/frontend/assets/img3.jpg";
import Headerbar from "/frontend/components/headerbar.jsx";
import Navbar from "/frontend/components/navbar.jsx";
import Footer from "/frontend/components/footer.jsx";
import axiosInstance from "../axiosinstance";
import { useNavigate } from "react-router-dom";


const Hosthk = () => {
    const navigate = useNavigate();
    const [typeofhk, setTypeofhk] = useState('Team Hackathon (offline)');
    // State for form data
    const [formData, setFormData] = useState({
        typeofhk: "Team Hackathon (offline)",
        ename: "",
        venue: "",
        date: "",
        regstart: "",
        regend: "",
        details: "",
        durofhk: "",
        prize: "",
        isTeamHackathon: true,
    });

    // Track label text for Venue/Platform
    const [venueLabel, setVenueLabel] = useState("Event Venue");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Handle form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value,
            isTeamHackathon: (name === "typeofhk" ? value : prev.typeofhk).includes("Team"),         }));

        if (name === "typeofhk") {
            setVenueLabel(value === "Virtual Solo Hackathon (online)" ? "Event Platform" : "Event Venue");
            setTypeofhk(value); // ✅ Keep typeofhk in sync
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Authentication error: No token found. Please log in again.");
            navigate("/login");
            return;
        }

        try {
            console.log("📢 Sending request with data:", formData);
            const response = await axiosInstance.post("/hackathons/add",formData ,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            alert(response.data.message || "Hackathon added successfully!");

            // Reset form after submission
            setFormData({
                typeofhk: "Team Hackathon (offline)", // Reset to default option
                ename: "",
                venue: "",
                date: "",
                regstart: "",
                regend: "",
                details: "",
                durofhk: "",
                prize: "",
                isTeamHackathon: true,
            });
            setVenueLabel("Event Venue");
            setTypeofhk("Team Hackathon (offline)"); // Reset typeofhk state as well

        } catch (error) {
            console.error("❌ Error submitting form:", error.response?.data || error.message);
            alert(error.response?.data?.message || "Failed to host hackathon. Please try again.");
        }
    };

    return (
        <div className="relative">
            <div className="absolute inset-0 z-[-1]">
                <div className="h-full w-full bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${img})` }}>
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                </div>
            </div>

            <Headerbar />
            <Navbar />

            <h2 className="text-5xl font-bold text-center text-white mt-15 mb-10">Host Hackathon</h2>

            <form onSubmit={handleSubmit} className="transform scale-85 bg-white shadow-lg rounded-lg p-8 space-y-6 max-w-3xl mx-auto">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Register Hackathon</h1>

                <div className="flex items-center space-x-4">
    <label className="w-1/3 font-bold text-lg text-gray-700 text-right">Type of Hackathon:</label>
    <select
        id="typeofhk"
        name="typeofhk"
        value={formData.typeofhk}
        onChange={handleChange}
        className="w-2/3 p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        required
    >
        <option value="Team Hackathon (offline)">Team Hackathon (offline)</option>
        <option value="Virtual Solo Hackathon (online)">Virtual Solo Hackathon (online)</option>
    </select>
</div>


                {["ename", "venue", "date", "regstart", "regend", "details", "prize"].map((field) => (
    <div key={field} className="flex items-center space-x-4">
        <label htmlFor={field} className="w-1/3 font-bold text-lg text-gray-700 text-right">
        {field === 'venue' ? venueLabel :
                                field === 'ename' ? 'Event Name' :
                                field === 'regstart' ? 'Registration Start Date' :
                                field === 'regend' ? 'Registration End Date' :
                                field.charAt(0).toUpperCase() + field.slice(1)}:
        </label>
        <input
            type={["date", "regstart", "regend"].includes(field) ? "date" : "text"}
            id={field}
            name={field}
            value={formData[field]}
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


                    <div className="flex justify-center">
                    <button type="submit" className="w-1/2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                        Host
                    </button>
                </div>

            </form>

            <Footer />
        </div>
    );
};

export default Hosthk;
