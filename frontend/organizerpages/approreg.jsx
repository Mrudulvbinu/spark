import React from 'react';
import minimal from "/frontend/assets/img4.jpeg";
import Headerbar from "/frontend/components/headerbar.jsx";
import Navbar from "/frontend/components/navbar.jsx";
import Footer from "/frontend/components/footer.jsx";

function Approreg() {
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
      <h2 className="text-5xl font-bold text-center text-black mt-15 mb-20">Project Proposals</h2>

      {/* Main Panel Section with Two Divisions Side by Side */}
      <div className="flex justify-center w-full max-w-6xl mx-auto p-6 space-x-4">
        {/* Single Panel Container with Two Divisions */}
        <div className="w-full flex space-x-4">

          {/* Left Panel - Accepted Proposals */}
          <div className="flex-1 bg-white bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
            <h3 className="text-3xl font-bold text-green-600 text-center py-4">Accepted Proposals</h3>
            <div className="space-y-4 p-4">
              {/* Summary Cards for Accepted Proposals */}
              {[
                { title: "Event Proposal #1", content: "Lorem ipsum dolor sit amet." },
                { title: "Hackathon Proposal", content: "Curabitur pretium tincidunt." },
                { title: "Workshop Proposal", content: "Vestibulum ac diam." },
                { title: "Coding Challenge", content: "Nulla porttitor accumsan." },
                { title: "New Member Proposal", content: "Pellentesque in ipsum." },
                { title: "Results Proposal", content: "Lorem ipsum dolor sit amet." },
              ].map((item, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-2">{item.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Rejected Proposals */}
          <div className="flex-1 bg-white bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
            <h3 className="text-3xl font-bold text-red-600 text-center py-4">Rejected Proposals</h3>
            <div className="space-y-4 p-4">
              {/* Reduced Summary Cards for Rejected Proposals (only 3 cards now) */}
              {[
                { title: "Proposal #A", content: "Lorem ipsum dolor sit amet." },
                { title: "Hackathon #2", content: "Curabitur pretium tincidunt." },
                { title: "Workshop #2", content: "Vestibulum ac diam." },
              ].map((item, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-2">{item.content}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="w-full"><Footer /></div>
    </div>
  );
}

export default Approreg;
