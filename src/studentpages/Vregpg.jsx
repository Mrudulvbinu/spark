import React, { useEffect, useState } from "react";
import axiosInstance from "../../backend/axiosinstance";
import { useNavigate, useParams } from "react-router-dom";
import vid1 from "/src/assets/vid1.mp4";
import logo from "/src/assets/logo.png";
import Header from "/src/components/header.jsx";

const Vregpg = () => {
  const navigate = useNavigate();
  const { hackathonId } = useParams();
  const [errorMessage, setErrorMessage] = useState("");
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [hasParticipated, setHasParticipated] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Fetch Hackathon by ID (for verification)
  useEffect(() => {
    const fetchHackathon = async () => {
      try {
        const response = await axiosInstance.get(`/hackathons/${hackathonId}`);
        console.log("Hackathon fetched:", response.data);
      } catch (error) {
        console.error("Error fetching hackathon:", error.response?.data || error.message);
      }
    };

    if (hackathonId) fetchHackathon();
  }, [hackathonId]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const maxSize = 1 * 1024 * 1024;

    if (selectedFile?.type !== "application/pdf") {
      setFileError("Only PDF files are allowed.");
      setFile(null);
    } else if (selectedFile?.size > maxSize) {
      setFileError("File size should be below 1MB.");
      setFile(null);
    } else {
      setFileError("");
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const registrationData = {
      hackathonId,
      name: formData.get("name"),
      dob: formData.get("dob"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      education: formData.get("education"),
      teamSize: 1,
      members: [],
      hasParticipated,
    };

    const dataToSend = new FormData();
    dataToSend.append("data", JSON.stringify(registrationData));
    if (file) dataToSend.append("file", file);

    try {
      await axiosInstance.post("/registeredhackathon/register", dataToSend);
      navigate("/shome");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      <video className="fixed top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted playsInline>
        <source src={vid1} type="video/mp4" />
      </video>

      <div className="w-full transform scale-80 relative z-10 container mx-auto p-1">
        <Header />
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 space-y-6 max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Register for Hackathon</h1>

          {["Name", "Date of Birth", "Email", "Phone Number"].map((label, index) => (
            <div key={index} className="flex items-center space-x-4">
              <label htmlFor={label.toLowerCase().replace(/ /g, "-")} className="w-1/3 font-bold text-lg text-gray-700 text-right">
                {label}:
              </label>
              <input
                type={label === "Date of Birth" ? "date" : label === "Email" ? "email" : label === "Phone Number" ? "tel" : "text"}
                id={label.toLowerCase().replace(/ /g, "-")}
                name={label.toLowerCase().replace(/ /g, "-")}
                className="w-2/3 p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          ))}

          <div className="flex items-center space-x-4">
            <label htmlFor="education" className="w-1/3 font-bold text-lg text-gray-700 text-right">Education:</label>
            <select id="education" name="education" className="w-2/3 p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" required>
              {["MCA", "BCA", "BSC", "BTech"].map((edu) => (
                <option key={edu} value={edu}>{edu}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-4">
            <p className="w-1/3 font-bold text-lg text-gray-700 text-right">Participated before?</p>
            <div className="w-2/3 flex space-x-4">
              {["Yes", "No"].map((value) => (
                <label key={value}>
                  <input
                    type="radio"
                    name="hackathon-participation"
                    value={value.toLowerCase()}
                    checked={hasParticipated === value.toLowerCase()}
                    onChange={() => setHasParticipated(value.toLowerCase())}
                    className="mr-2"
                    required
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <label htmlFor="project-proposal" className="w-1/3 font-bold text-lg text-gray-700 text-right">Upload Project Proposal:</label>
            <input type="file" id="project-proposal" onChange={handleFileChange} className="w-2/3 p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" accept=".pdf" />
          </div>
          {fileError && <p className="text-red-500 text-sm mt-2">{fileError}</p>}
          {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}

          <div className="text-center">
            <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-bold text-xl hover:bg-blue-800">Register</button>
          </div>
        </form>
      </div>

      <img src={logo} alt="Logo" className="absolute bottom-5 right-5 w-45 h-auto" />
    </div>
  );
};

export default Vregpg;
