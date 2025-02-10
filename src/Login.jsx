import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import vid1 from "/src/assets/vid1.mp4";
import logo from "/src/assets/logo.png";
import Header from "/src/components/header.jsx";
import adminSVG from "/src/assets/admin.svg"; // Add your admin SVG path here

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [userType, setUserType] = useState("student"); // Default to student
  const [isAdminLogin, setIsAdminLogin] = useState(false); // For toggling admin login
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    let storedUsers = [];
    if (isAdminLogin) {
      // Admin login - separate array for admins
      storedUsers = JSON.parse(localStorage.getItem("admins")) || [];
    } else {
      // Student or organizer login
      storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    }

    const user = storedUsers.find(
      (user) =>
        user.username === username &&
        user.password === password &&
        (isAdminLogin ? user.userType === "admin" : user.userType === userType)
    );

    if (user) {
      setSuccessMessage("Login successful! Redirecting...");
      setTimeout(() => {
        // Redirect based on user type
        if (isAdminLogin) {
          navigate("/ahome"); // For Admins
        } else if (userType === "student") {
          navigate("/shome"); // For students
        } else if (userType === "organizer") {
          navigate("/ohome"); // For organizers
        }
      }, 1700);
    } else {
      setErrorMessage("Invalid username or password!");
    }
  };

  const handleAdminClick = () => {
    setIsAdminLogin(true);
    setUserType("admin"); // For admin, no need for student/organizer toggle
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${vid1})` }}>
      {/* Background Video */}
      <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted playsInline>
        <source src={vid1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Wrapper for Centering */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full text-center px-4 py-6 sm:px-8 sm:py-10">
        <div className="w-full"><Header /></div>

        {/* Login Form Container with Translucent and Blurred Background */}
        <div className="relative z-20 w-full max-w-sm md:max-w-sm lg:max-w-md px-2 py-2 sm:px-8 sm:py-10 transition-all bg-white backdrop-blur rounded-lg shadow-xl mt-1 lg:mt-1">
          {/* Form content */}
          <form onSubmit={handleLogin} className="space-y-6">
            <h1 className="text-l sm:text-2xl font-bold text-center text-gray-900 mb-1">
              {isAdminLogin ? "Admin Login" : userType === "student" ? "Student Login" : "Organizer Login"}
            </h1>

            {/* Toggle between Student, Organizer, and Admin */}
            {!isAdminLogin && (
              <div className="text-center mb-2">
                <button
                  onClick={() => setUserType("student")}
                  className={`px-2 py-2 mr-4 ${userType === "student" ? "text-blue-600" : "text-gray-700"}`}
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
            )}

            {/* Username */}
            <div className="flex items-center space-x-4">
              <label className="text-lg font-semibold text-gray-700 w-1/3" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-2/3 p-1 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div className="flex items-center space-x-4">
              <label className="text-lg font-semibold text-gray-700 w-1/3" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-2/3 p-1 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Error Message */}
            {error && <div className="text-red-500 text-center mt-2">{error}</div>}

            {/* Success Message */}
            {successMessage && (
              <div className="text-green-600 text-lg text-center mt-2 font-bold">
                {successMessage}
              </div>
            )}

            {/* Login Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-xl hover:bg-blue-700 transition duration-300"
              >
                Login
              </button>
            </div>

            

            {/* New User Registration */}
            {!isAdminLogin && (
              <div className="text-center mt-4">
                <p className="text-gray-700">
                  New User?{" "}
                  <a
                    href="/regist"
                    className="text-blue-500 hover:text-blue-700 font-semibold"
                  >
                    Register Here
                  </a>
                </p>
              </div>
              )}
              {/* Admin SVG Icon */}
            {!isAdminLogin && (
              <div className="text-center mt-4 mb-0">
                <img
                  src={adminSVG}
                  alt="Admin Login"
                  className="cursor-pointer w-3 h-3 mx-auto"
                  onClick={handleAdminClick}
                />
              </div>
            )}
            
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

export default Login;
