import React, {useState, useEffect } from 'react';
import img from "/src/assets/img3.jpg"; // Background Image
import Headerbar from "/src/components/headerbar.jsx"; // Header Component
import Navbar from "/src/components/navbar.jsx"; // Navbar Component
import Footer from "/src/components/footer.jsx"; // Footer Component

const Hosthk = () => {
  const [formData, setFormData] = useState({
    ename: "",
    venue: "",
    date: "",
    regstart: "",
    regend: "",
    details: "",
    typeofhk: "",
    durofhk: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0); // This ensures the page starts at the top when it loads
  }, []);    

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 z-[-1]">
        <div
          className="h-full w-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${img})`,
          }}
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

        {/* Personal Information */}
        <div className="space-y-6">
          {[
            { label: "Event Name", id: "ename", type: "text" },
            { label: "Event Venue", id: "venue", type: "text" },
            { label: "Event Date", id: "date", type: "date" },
            { label: "Event Registration Starting Date", id: "regstart", type: "date" },
            { label: "Event Registration Ending Date", id: "regend", type: "date" },
            { label: "Event Details", id: "details", type: "text" },
          ].map(({ label, id, type }) => (
            <div key={id} className="flex items-center space-x-4">
              <label htmlFor={id} className="w-1/3 font-bold text-lg text-gray-700 text-right">
                {label}:
              </label>
              <input
                type={type}
                id={id}
                name={id} // Add the `name` attribute
                value={formData[id]} // Bind the value to the form data
                onChange={handleChange} // Handle input changes
                className="w-2/3 p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          ))}

          <div className="flex items-center space-x-4">
            <label className="w-1/3 font-bold text-lg text-gray-700 text-right">
              Type of Hackathon:
            </label>
            <select
              id="typeofhk"
              name="typeofhk" // Add the `name` attribute
              value={formData.typeofhk} // Bind the value to the form data
              onChange={handleChange} // Handle input changes
              className="w-2/3 p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            >
              {["Team Hackathon (offline)", "Virtual Solo Hackathon (online)"].map((toh) => (
                <option key={toh} value={toh}>{toh}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-4">
            <label className="w-1/3 font-bold text-lg text-gray-700 text-right">
              Duration of Hackathon:
            </label>
            <select
              id="durofhk"
              name="durofhk" // Add the `name` attribute
              value={formData.durofhk} // Bind the value to the form data
              onChange={handleChange} // Handle input changes
              className="w-2/3 p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            >
              {["24 Hour", "12 Hour", "1 Hour"].map((doh) => (
                <option key={doh} value={doh}>{doh}</option>
              ))}
            </select>
          </div>
        </div>

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
