import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import vid1 from "/src/assets/vid1.mp4";
import logo from "/src/assets/logo.png";

const Regist = () => {
  const [name1, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState(""); // For organizer
  const [certificate, setCertificate] = useState(null); // For organizer
  const [error, setErrorMessage] = useState(""); 
  const [successMessage, setSuccessMessage] = useState(""); 
  const [userType, setUserType] = useState("student"); 
  const navigate = useNavigate(); 

  // Function to validate password
  function password_validate(p) { 
    return /[A-Z]/.test(p) && /[a-z]/.test(p) && /[0-9]/.test(p) && /[@$%&*!^()#]/.test(p) && p.length >= 8; 
  }

  // Function to validate file upload (size under 1MB and file type pdf)
  const validateFile = (file) => {
    if (file) {
      const fileSize = file.size / 1024 / 1024; // Convert to MB
      if (fileSize > 1) {
        setErrorMessage("File size must be less than 1MB.");
        return false;
      }
      if (!file.name.endsWith(".pdf")) {
        setErrorMessage("Please upload a PDF file.");
        return false;
      }
    }
    return true;
  };

  // Function to handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (validateFile(file)) {
        setCertificate(file);
        setErrorMessage(""); // Reset error message
      } else {
        setCertificate(null); // Clear the file if validation fails
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!password_validate(password)) {
      setErrorMessage("Password must be at least 8 characters long, including a mix of uppercase, lowercase, numbers, and special characters.");
      return;
    }

    // If organizer, validate certificate file
    if (userType === "organizer" && !certificate) {
      setErrorMessage("Please upload the university registration certificate.");
      return;
    }

    const userData = {
      name: name1,
      email: email,
      username: username,
      password: password,
      userType: userType, 
      address: address, // For organizer
      certificate: certificate, // For organizer
    };

    const existingUser = JSON.parse(localStorage.getItem("users")) || [];
    const isUserExists = existingUser.some(user => user.username === username);

    if (isUserExists) {
      setErrorMessage("Username already exists! Please choose another.");
    } else {
      existingUser.push(userData);
      localStorage.setItem("users", JSON.stringify(existingUser)); 
      setSuccessMessage("Registration successful! You can now login.");
      setTimeout(() => navigate("/"), 2000); 
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${vid1})` }}>
      {/* Background Video */}
      <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted playsInline>
        <source src={vid1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Wrapper */}
      <div className="relative z-2 flex flex-col items-center justify-center w-full text-center px-4 py-6 sm:px-8 sm:py-10">
        {/* Heading and Subheading */}
        <div className="w-full text-center z-5 mt-1 lg:mt-0.2">
          <h2 className="text-3xl font-bold text-black">Spark Venture</h2>
          <p className="text-md text-gray-700 mt-1">Welcome to Spark Venture. Register now and join the innovation!</p>
        </div>

        {/* Registration Form */}
        <div className="relative z-2 w-full max-w-sm md:max-w-sm lg:max-w-md px-2 py-2 sm:px-8 sm:py-10 bg-white rounded-lg shadow-xl mt-6 lg:mt-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h1 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-6">
              {userType === "student" ? "Student Registration" : "Organizer Registration"}
            </h1>

            {/* User Type Toggle */}
            <div className="text-center mb-6">
              <button 
                onClick={() => setUserType("student")} 
                className={`px-4 py-2 mr-4 ${userType === "student" ? "text-blue-600" : "text-gray-700"}`}
              >
                Student
              </button>
              <span>|</span>
              <button 
                onClick={() => setUserType("organizer")} 
                className={`px-4 py-2 ml-4 ${userType === "organizer" ? "text-blue-600" : "text-gray-700"}`}
              >
                Organizer
              </button>
            </div>

            {/* Name or Organizer Name */}
            <div className="space-x-4 flex items-center">
              <label className="w-1/3 text-lg font-semibold text-gray-700" htmlFor="name">
                {userType === "student" ? "Name" : "Organizer Name"}
              </label>
              <input 
                type="text" 
                id="name" 
                value={name1} 
                onChange={(e) => setName(e.target.value)} 
                className="w-2/3 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required 
              />
            </div>

            {/* Email */}
            <div className="space-x-4 flex items-center">
              <label className="w-1/3 text-lg font-semibold text-gray-700" htmlFor="email">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-2/3 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required 
              />
            </div>

            {/* Username */}
            <div className="space-x-4 flex items-center">
              <label className="w-1/3 text-lg font-semibold text-gray-700" htmlFor="username">
                Username
              </label>
              <input 
                type="text" 
                id="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                className="w-2/3 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required 
              />
            </div>

            {/* Password */}
            <div className="space-x-4 flex items-center">
              <label className="w-1/3 text-lg font-semibold text-gray-700" htmlFor="password">
                Password
              </label>
              <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="w-2/3 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required 
              />
            </div>

            {/* Address - Only for Organizer */}
            {userType === "organizer" && (
              <div className="space-x-4 flex items-center">
                <label className="w-1/3 text-lg font-semibold text-gray-700" htmlFor="address">
                  Address
                </label>
                <input 
                  type="text" 
                  id="address" 
                  value={address} 
                  onChange={(e) => setAddress(e.target.value)} 
                  className="w-2/3 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  required 
                />
              </div>
            )}

            {/* University Registration Certificate - Only for Organizer */}
            {userType === "organizer" && (
              <div className="space-x-4 flex items-center">
                <label className="w-1/3 text-lg font-semibold text-gray-700" htmlFor="certificate">
                  University Registration Certificate (PDF)
                </label>
                <input 
                  type="file" 
                  id="certificate" 
                  accept=".pdf"  // Restricting file input to PDF
                  onChange={handleFileUpload} 
                  className="w-2/3 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  required 
                />
                {/* Display PDF file name or a preview link */}
                {certificate && (
                  <div className="mt-2 text-gray-700">
                    <a href={URL.createObjectURL(certificate)} target="_blank" rel="noopener noreferrer">
                      View Certificate PDF
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* Error Message */}
            {error && <div className="text-red-500 text-center mt-2">{error}</div>}

            {/* Success Message */}
            {successMessage && (
              <div className="text-green-600 text-lg text-center mt-2 font-bold">
                {successMessage}
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-xl hover:bg-blue-700 transition duration-300"
              >
                {userType === "student" ? "Register Student" : "Register Organizer"}
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
    </div>
  );
};

export default Regist;
