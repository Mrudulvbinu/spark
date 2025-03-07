import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./axiosinstance";
import vid1 from "/src/assets/vid1.mp4";
import logo from "/src/assets/logo.png";
import Header from "/src/components/header.jsx";
import adminSVG from "/src/assets/admin.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [userType, setUserType] = useState("student");
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loginContainer = document.getElementById("login-container");
    if (loginContainer) {
      loginContainer.classList.add("opacity-0", "translate-y-20");
      setTimeout(() => {
        loginContainer.classList.remove("opacity-0", "translate-y-20");
        loginContainer.classList.add(
          "transition-all",
          "duration-1000",
          "opacity-100",
          "translate-y-0"
        );
      }, 700);
    }
  }, []);

  const handleAdminClick = () => {
    setIsAdminLogin(!isAdminLogin);
    setUserType("student");
    setUsername("");
    setPassword("");
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");


    try {
      let endpoint = isAdminLogin ? "/auth/login/admin" : "/auth/login";

      const response = await axiosInstance.post(
        endpoint,
        { username, password, userType },
        { withCredentials: true }
      );

      if (response.data.success) {
        localStorage.setItem("token", response.data.token); // ✅ Store token

        // After successful login
        localStorage.setItem('studentId', response.data.studentId);
        setSuccessMessage("Login successful! Redirecting...");
        setTimeout(() => {
          if (isAdminLogin) {
            navigate("/ahome");
          } else if (userType === "student") {
            navigate("/shome");
          } else if (userType === "organizer") {
            navigate("/ohome");
          }
        }, 1500);
      } else {
        setErrorMessage(response.data.message || "Login failed!");
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Something went wrong! Please try again.");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${vid1})` }}>
      <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted playsInline>
        <source src={vid1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center w-full text-center px-4 py-6 sm:px-8 sm:py-10">
        <div className="w-full">
          <Header />
        </div>

        <div id="login-container" className="relative z-20 w-full max-w-sm md:max-w-md px-4 py-6 sm:px-8 sm:py-10 bg-white backdrop-blur rounded-lg shadow-xl transition-all">
          <form onSubmit={handleLogin} className="space-y-6">
            <h1 className="text-2xl font-bold text-center text-gray-900 mb-3">
              {isAdminLogin ? "Admin Login" : userType === "student" ? "Student Login" : "Organizer Login"}
            </h1>

            {!isAdminLogin && (
              <div className="text-center mb-2">
                <button
                  type="button"
                  onClick={() => setUserType("student")}
                  className={`px-2 py-2 mr-4 ${userType === "student" ? "text-blue-600 font-semibold" : "text-gray-700"}`}
                >
                  Student
                </button>
                <span>|</span>
                <button
                  type="button"
                  onClick={() => setUserType("organizer")}
                  className={`px-4 py-2 ml-4 ${userType === "organizer" ? "text-blue-600 font-semibold" : "text-gray-700"}`}
                >
                  Organizer
                </button>
              </div>
            )}

            <div className="flex items-center space-x-4">
              <label className="text-lg font-semibold text-gray-700 w-1/3" htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-2/3 p-1 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex items-center space-x-4">
              <label className="text-lg font-semibold text-gray-700 w-1/3" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-2/3 p-1 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {error && <div className="text-red-500 text-center mt-2">{error}</div>}
            {successMessage && <div className="text-green-600 text-lg text-center mt-2 font-bold">{successMessage}</div>}

            <div className="text-center">
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-xl hover:bg-blue-700 transition duration-300">
                Login
              </button>
            </div>

            {!isAdminLogin && (
              <div className="text-center mt-4">
                <p className="text-gray-700">
                  New User? <a href="/regist" className="text-blue-500 hover:text-blue-700 font-semibold">Register Here</a>
                </p>
              </div>
            )}

            <div className="text-center mt-4 mb-0">
              <img src={adminSVG} alt="Admin Login" className="cursor-pointer w-8 h-8 mx-auto" onClick={handleAdminClick} />
            </div>
          </form>
        </div>

        <img src={logo} alt="Logo" className="absolute bottom-5 right-5 w-20 h-auto" />
      </div>
    </div>
  );
};

export default Login;
