import React from 'react';
import { Link } from 'react-router-dom';
import minimal from "/frontend/assets/img4.jpeg";
import Headerbar from "/frontend/components/headerbar.jsx";
import Navbar from "/frontend/components/navbar.jsx";
import Footer from "/frontend/components/footer.jsx";

function Revappro() {
  return (
    <div className="relative text-black">
             <div className="absolute inset-0 z-[-1]">
               <div 
                 className="h-full w-full bg-cover bg-center" 
                 style={{ backgroundImage: `url(${minimal})` }}
               >
                 <div className="absolute inset-0 bg-white/70"></div>
               </div>
             </div>

      {/* Header and Navbar */}
      <div className="w-full"><Headerbar /></div>
      <div className="w-full"><Navbar /></div>

      {/* Page Title */}
      <h2 className="text-5xl font-bold text-center text-black mt-10 mb-4">Review and Approve Project Proposals</h2>

      {/* Inbox Section */}
      <div className="transform scale-85 flex flex-col items-center space-y-2 w-full max-w-3xl mx-auto">
        {/* Dummy Inbox Messages */}
        {[ 
          { subject: "Event Proposal #123", preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", date: "3/2/2025" },
          { subject: "Approval Request for Hackathon", preview: "Curabitur pretium tincidunt lacus.", date: "2/2/2025" },
          { subject: "Event Update", preview: "Vestibulum ac diam sit amet quam vehicula elementum.", date: "1/2/2025" },
          { subject: "Code Submission", preview: "Nulla porttitor accumsan tincidunt.", date: "30/1/2025" },
          { subject: "New Participant Registered", preview: "Pellentesque in ipsum id orci porta dapibus.", date: "29/1/2025" },
          { subject: "Event Results", preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", date: "28/1/2025" }
        ].map((message, index) => (
          <Link key={index} to="/revin" className="w-full">
            <div className="bg-white shadow-md rounded-lg p-2 flex flex-col items-start cursor-pointer hover:shadow-xl transition-all border-b border-black">
              <div className="flex justify-between w-full">
                <h3 className="text-xl font-semibold text-gray-800">{message.subject}</h3>
                <span className="text-gray-400 text-xs">{message.date}</span>
              </div>
              <p className="text-gray-600 text-sm mt-2">{message.preview}</p>
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
