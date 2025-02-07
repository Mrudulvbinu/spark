import React, { useState } from "react";
import vid1 from "/src/assets/vid1.mp4";
import logo from "/src/assets/logo.png";
import Header from "/src/components/header.jsx";

const Vregpg = () => {
  const [hasParticipated, setHasParticipated] = useState(null);
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const maxSize = 1 * 1024 * 1024;

    if (selectedFile.type !== "application/pdf") {
        setFileError("Only PDF files are allowed.");
        setFile(null);
        return;
      }
    if (selectedFile && selectedFile.size > maxSize) {
      setFileError("File size should be below 1MB.");
      setFile(null); 
    } else {
      setFileError("");
      setFile(selectedFile);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    // You can handle the file upload here
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen">
              {/* Background video */}
              <video 
                className="absolute top-0 left-0 w-full h-full object-cover" 
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src={vid1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
          <div className="transform scale-80 relative z-10 container mx-auto p-4">
            <div className="w-full"><Header /></div>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8 space-y-6 max-w-3xl mx-auto"
        >
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Register for Hackathon
          </h1>

          {/* Personal Information */}
          <div className="space-y-6 ">
            {[
              { label: "Name", id: "name", type: "text" },
              { label: "Date of Birth", id: "dob", type: "date" },
              { label: "Email", id: "email", type: "email" },
              { label: "Phone Number", id: "phone", type: "tel" },
            ].map(({ label, id, type }) => (
              <div key={id} className="flex items-center space-x-4">
                <label htmlFor={id} className="w-1/3 font-bold text-lg text-gray-700 text-right">
                  {label}:
                </label>
                <input
                  type={type}
                  id={id}
                  className="w-2/3 p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            ))}

            <div className="flex items-center space-x-4">
              <label htmlFor="education" className="w-1/3 font-bold text-lg text-gray-700 text-right">
                Education:
              </label>
              <select
                id="education"
                className="w-2/3 p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              >
                {[
                  "MCA",
                  "BCA",
                  "BSC",
                  "BTech",
                ].map((edu) => (
                  <option key={edu} value={edu}>{edu}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Previous Hackathon Participation */}
          <div className="flex items-center space-x-4">
            <p className="w-1/3 font-bold text-lg text-gray-700 text-right">Participated before?</p>
            <div className="w-2/3 flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="hackathon-participation"
                  value="yes"
                  checked={hasParticipated === "yes"}
                  onChange={() => setHasParticipated("yes")}
                  className="mr-2"
                  required
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="hackathon-participation"
                  value="no"
                  checked={hasParticipated === "no"}
                  onChange={() => setHasParticipated("no")}
                  className="mr-2"
                  required
                />
                No
              </label>
            </div>
          </div>

          {/* Upload Project Proposal */}
          <div className="flex items-center space-x-4">
            <label htmlFor="project-proposal" className="w-1/3 font-bold text-lg text-gray-700 text-right">
              Upload Project Proposal:
            </label>
            <input
              type="file"
              id="project-proposal"
              onChange={handleFileChange}
              className="w-2/3 p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              accept=".pdf"
            />
          </div>
          {fileError && (
            <p className="text-red-500 text-sm mt-2">{fileError}</p>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-bold text-xl hover:bg-blue-800"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      {/* Logo Watermark */}
              <img
                src={logo}
                alt="Logo"
                className="absolute bottom-5 right-5 w-45 h-auto"
              />
    </div>
  );
};

export default Vregpg;
