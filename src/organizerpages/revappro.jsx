import React from 'react';
import { Link } from 'react-router-dom';
import img from "/src/assets/img3.jpg"; // Background Image
import Headerbar from "/src/components/headerbar.jsx"; // Header Component
import Navbar from "/src/components/navbar.jsx"; // Navbar Component
import Footer from "/src/components/footer.jsx"; // Footer Component

function Revappro() {
  return (
    <div className="relative text-white">
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
      <h2 className="text-5xl font-bold text-center text-white mt-15 mb-20">Review and Approve Project Proposals</h2>

      {/* Inbox Section */}
      <div className="transform scale-85 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
        {/* Dummy Inbox Messages */}
        {[ 
          { subject: "Event Proposal #123", preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", date: "3/2/2025" },
          { subject: "Approval Request for Hackathon", preview: "Curabitur pretium tincidunt lacus.", date: "2/2/2025" },
          { subject: "Event Update", preview: "Vestibulum ac diam sit amet quam vehicula elementum.", date: "1/2/2025" },
          { subject: "Code Submission", preview: "Nulla porttitor accumsan tincidunt.", date: "30/1/2025" },
          { subject: "New Participant Registered", preview: "Pellentesque in ipsum id orci porta dapibus.", date: "29/1/2025" },
          { subject: "Event Results", preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", date: "28/1/2025" }
        ].map((message, index) => (
          <Link key={index} to="/revin" className="w-full flex justify-center">
            <div className="max-w-lg bg-white shadow-lg rounded-lg p-6 flex flex-col items-start cursor-pointer hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-gray-800">{message.subject}</h3>
              <p className="text-gray-600 text-sm">{message.preview}</p>
              <span className="text-gray-400 text-xs">{message.date}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className="w-full"><Footer /></div>
    </div>
  );
}

export default Revappro;
