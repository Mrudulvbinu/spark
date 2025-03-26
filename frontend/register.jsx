import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import vid1 from "/frontend/assets/vid1.mp4";
import logo from "/frontend/assets/sparkventure.svg";
import axiosInstance from "./axiosinstance";

const Regist = () => {
  const [name1, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [userType, setUserType] = useState("student");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const password_validate = (p) => {
    return /[A-Z]/.test(p) && /[a-z]/.test(p) && /[0-9]/.test(p) && /[@$%&*!^()#]/.test(p) && p.length >= 8;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!password_validate(password)) {
      setErrorMessage("Password must have at least 8 characters, should include uppercase, lower case, special characters, and numbers.");
      return;
    }

    const userData = {
      name: name1,
      email: email,
      username: username,
      password: password,
      userType: userType,
      address: address,
    };

    try {
      const endpoint = userType === "student" ? "/user/register/student" : "/user/register/organizer";
      const response = await axiosInstance.post(endpoint, userData);
      setSuccessMessage(response.data.message);
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      setErrorMessage(error.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${vid1})` }}>
      <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted playsInline>
        <source src={vid1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-2 flex flex-col items-center justify-center w-full text-center px-4 py-6 sm:px-8 sm:py-10">
        <div className="w-full text-center z-5 mt-1 lg:mt-0.2">
          <h2 className="text-3xl font-bold text-black">Sparkventure</h2>
          <p className="text-md text-gray-700 mt-1">Welcome to Sparkventure. Register now and join the innovation!</p>
        </div>

        <div className="relative z-2 w-full max-w-sm md:max-w-sm lg:max-w-md px-2 py-2 sm:px-8 sm:py-10 bg-white rounded-lg shadow-xl mt-6 lg:mt-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h1 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-6">
              {userType === "student" ? "Student Registration" : "Organizer Registration"}
            </h1>

            <div className="text-center mb-6">
              <button type="button" onClick={() => setUserType("student")} className={`px-4 py-2 mr-4 ${userType === "student" ? "text-blue-600" : "text-gray-700"}`}>
                Student
              </button>
              <span>|</span>
              <button type="button" onClick={() => setUserType("organizer")} className={`px-4 py-2 ml-4 ${userType === "organizer" ? "text-blue-600" : "text-gray-700"}`}>
                Organizer
              </button>
            </div>

            <div className="space-x-4 flex items-center">
              <label className="w-1/3 text-lg font-semibold text-gray-700" htmlFor="name">
                {userType === "student" ? "Name" : "Organizer Name"}
              </label>
              <input type="text" id="name" value={name1} onChange={(e) => setName(e.target.value)} className="w-2/3 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>

            <div className="space-x-4 flex items-center">
              <label className="w-1/3 text-lg font-semibold text-gray-700" htmlFor="email">Email</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-2/3 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>

            <div className="space-x-4 flex items-center">
              <label className="w-1/3 text-lg font-semibold text-gray-700" htmlFor="username">Username</label>
              <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-2/3 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>

            <div className="space-x-4 flex items-center">
              <label className="w-1/3 text-lg font-semibold text-gray-700" htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-2/3 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>

            {userType === "organizer" && (
              <div className="space-x-4 flex items-center">
                <label className="w-1/3 text-lg font-semibold text-gray-700" htmlFor="address">Address</label>
                <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="w-2/3 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
            )}

            {errorMessage && <div className="text-red-500 text-center mt-2">{errorMessage}</div>}

            {successMessage && <div className="text-green-600 text-lg text-center mt-2 font-bold">{successMessage}</div>}

            <div className="text-center">
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-xl hover:bg-blue-700 transition duration-300">
                {userType === "student" ? "Register Student" : "Register Organizer"}
              </button>
            </div>
          </form>
        </div>

        <img src={logo} alt="Logo" className="absolute bottom-10 right-5 w-50 h-auto" />
      </div>
    </div>
  );
};

export default Regist;
