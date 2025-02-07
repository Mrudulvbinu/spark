import React from 'react';
import { Link } from 'react-router-dom';
import img from "/src/assets/im1.jpg";
function Ohome() {
  return (
    <section className="w-full mx-auto p-8" 
    style={{
      backgroundImage: `url(${img})`,  
      backgroundSize: 'cover',         
      backgroundPosition: 'center',    
      backgroundAttachment: 'fixed'    
    }}>
      <h2 className="text-6xl font-bold text-center text-white mt-5 mb-10">Conduct Team Hackathon</h2>

      {/* First Row of Cards */}
      <div className="flex space-x-12 justify-center">
        
        {/* First Event Card */}
        <div className="max-w-sm bg-white shadow-lg rounded-lg p-5 space-y-4">
          <h2 className="text-3xl font-bold text-center text-gray-800">ProHack 2k25</h2>
          <div className="space-y-2">
            <p><strong className="font-semibold">Date:</strong> March 15th, 2025</p>
            <p><strong className="font-semibold">Location:</strong> Spark Tech, InfoPark Cochin</p>
            <p><strong className="font-semibold">Prize:</strong> INR 10,000</p>
            <p><strong className="font-semibold">Rules:</strong> Teams of 2-5 participants. All ideas must be tech-driven.</p>
          </div>
          <div className="text-center">
            <Link to="/tregpg">
              <button className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg font-bold text-xl hover:bg-blue-800 transition-colors">
                REGISTER
              </button>
            </Link>
          </div>
        </div>

        {/* Second Event Card */}
        <div className="max-w-sm bg-white shadow-lg rounded-lg p-5 space-y-4">
          <h2 className="text-3xl font-bold text-center text-gray-800">Hackat25</h2>
          <div className="space-y-2">
            <p><strong className="font-semibold">Date:</strong> February 22nd, 2025</p>
            <p><strong className="font-semibold">Location:</strong> Cobol, InfoPark Cochin</p>
            <p><strong className="font-semibold">Prize:</strong> INR 5000</p>
            <p><strong className="font-semibold">Rules:</strong> Teams of 2-4 participants. All ideas must be tech-driven.</p>
          </div>
          <div className="text-center">
            <Link to="/tregpg">
              <button className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg font-bold text-xl hover:bg-blue-800 transition-colors">
                REGISTER
              </button>
            </Link>
          </div>
        </div>

        {/* Third Event Card */}
        <div className="max-w-sm bg-white shadow-lg rounded-lg p-5 space-y-4">
          <h2 className="text-3xl font-bold text-center text-gray-800">Codearth</h2>
          <div className="space-y-2">
            <p><strong className="font-semibold">Date:</strong> February 12th, 2025</p>
            <p><strong className="font-semibold">Location:</strong> Freston, CyberPark, Kozhikode</p>
            <p><strong className="font-semibold">Prize:</strong> INR 12000</p>
            <p><strong className="font-semibold">Rules:</strong> Teams of 2-5 participants. All ideas must be tech-driven.</p>
          </div>
          <div className="text-center">
            <Link to="/tregpg">
              <button className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg font-bold text-xl hover:bg-blue-800 transition-colors">
                REGISTER
              </button>
            </Link>
          </div>
        </div>

        {/* Fourth Event Card */}
        <div className="max-w-sm bg-white shadow-lg rounded-lg p-5 space-y-4">
          <h2 className="text-3xl font-bold text-center text-gray-800">FlagHack</h2>
          <div className="space-y-2">
            <p><strong className="font-semibold">Date:</strong> March 25th, 2025</p>
            <p><strong className="font-semibold">Location:</strong> GitzTech, InfoPark Cochin</p>
            <p><strong className="font-semibold">Prize:</strong> INR 8,000</p>
            <p><strong className="font-semibold">Rules:</strong> Teams of 2-5 participants. All ideas must be tech-driven.</p>
          </div>
          <div className="text-center">
            <Link to="/tregpg">
              <button className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg font-bold text-xl hover:bg-blue-800 transition-colors">
                REGISTER
              </button>
            </Link>
          </div>
        </div>
      </div>

      <h2 className="text-6xl font-bold text-center text-white mt-50">Conduct Virtual Solo Hackathons</h2>
      {/* Second Row of Cards */}
      <div className="flex space-x-12 justify-center mt-8">
        
        {/* First Event Card (Second Row) */}
        <div className="max-w-sm bg-white shadow-lg rounded-lg p-5 space-y-4">
          <h2 className="text-3xl font-bold text-center text-gray-800">ProHack 2k25</h2>
          <div className="space-y-2">
            <p><strong className="font-semibold">Date:</strong> March 15th, 2025</p>
            <p><strong className="font-semibold">Location:</strong> Hackerearth.com</p>
            <p><strong className="font-semibold">Prize:</strong> INR 10,000</p>
            <p><strong className="font-semibold">Rules:</strong> All ideas must be tech-driven.</p>
          </div>
          <div className="text-center">
            <Link to="/vregpg">
              <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-bold text-xl hover:bg-green-700 transition-colors">
                REGISTER
              </button>
            </Link>
          </div>
        </div>

        {/* Second Event Card (Second Row) */}
        <div className="max-w-sm bg-white shadow-lg rounded-lg p-5 space-y-4">
          <h2 className="text-3xl font-bold text-center text-gray-800">Hackat25</h2>
          <div className="space-y-2">
            <p><strong className="font-semibold">Date:</strong> February 22nd, 2025</p>
            <p><strong className="font-semibold">Location:</strong> Microsoft Teams</p>
            <p><strong className="font-semibold">Prize:</strong> INR 5000</p>
            <p><strong className="font-semibold">Rules:</strong> All ideas must be tech-driven.</p>
          </div>
          <div className="text-center">
            <Link to="/vregpg">
              <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-bold text-xl hover:bg-green-700 transition-colors">
                REGISTER
              </button>
            </Link>
          </div>
        </div>

        {/* Third Event Card (Second Row) */}
        <div className="max-w-sm bg-white shadow-lg rounded-lg p-5 space-y-4">
          <h2 className="text-3xl font-bold text-center text-gray-800">Codearth</h2>
          <div className="space-y-2">
            <p><strong className="font-semibold">Date:</strong> February 12th, 2025</p>
            <p><strong className="font-semibold">Location:</strong> Google Meet</p>
            <p><strong className="font-semibold">Prize:</strong> INR 12000</p>
            <p><strong className="font-semibold">Rules:</strong> All ideas must be tech-driven.</p>
          </div>
          <div className="text-center">
            <Link to="/vregpg">
              <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-bold text-xl hover:bg-green-700 transition-colors">
                REGISTER
              </button>
            </Link>
          </div>
        </div>

        {/* Fourth Event Card (Second Row) */}
        <div className="max-w-sm bg-white shadow-lg rounded-lg p-5 space-y-4">
          <h2 className="text-3xl font-bold text-center text-gray-800">FlagHack</h2>
          <div className="space-y-2">
            <p><strong className="font-semibold">Date:</strong> March 25th, 2025</p>
            <p><strong className="font-semibold">Location:</strong> Hackerearth.com</p>
            <p><strong className="font-semibold">Prize:</strong> INR 8,000</p>
            <p><strong className="font-semibold">Rules:</strong> All ideas must be tech-driven.</p>
          </div>
          <div className="text-center">
            <Link to="/vregpg">
              <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-bold text-xl hover:bg-green-700 transition-colors">
                REGISTER
              </button>
            </Link>
          </div>
        </div>
      </div>


{/*Upcoming Events */}
<h2 className="text-6xl font-bold text-center text-white mt-50">Upcoming Events</h2>
<div className="flex flex-col space-y-8 justify-center mt-8">
  {/* First upcoming Event */}
  <div className="w-full bg-white shadow-lg rounded-full py-4 px-6 mx-auto flex justify-between items-center">
    <div className="flex-1 text-left">
      <h2 className="text-2xl font-semibold text-gray-800">CodeRed 2025</h2>
    </div>
    <div className="flex-1 text-left ml-4">
      <p className="text-gray-600">Additional details about the event can go here.</p>
    </div>
    <div className="flex-none text-right ml-4">
      <p className="text-gray-600">Proposal - Accepted</p>
    </div>
  </div>

  {/* Second upcoming Event */}
  <div className="w-full bg-white shadow-lg rounded-full py-4 px-6 mx-auto flex justify-between items-center">
    <div className="flex-1 text-left">
      <h2 className="text-2xl font-semibold text-gray-800">Hackat25</h2>
    </div>
    <div className="flex-1 text-left ml-4">
      <p className="text-gray-600">Details for this event. Aligned neat and readable.</p>
    </div>
    <div className="flex-none text-right ml-4">
      <p className="text-gray-600">Proposal - Rejected</p>
    </div>
  </div>

  {/* Third Upcoming Event */}
  <div className="w-full bg-white shadow-lg rounded-full py-4 px-6 mx-auto flex justify-between items-center">
    <div className="flex-1 text-left">
      <h2 className="text-2xl font-semibold text-gray-800">Project25</h2>
    </div>
    <div className="flex-1 text-left ml-4">
      <p className="text-gray-600">Any extra details about this event go here.</p>
    </div>
    <div className="flex-none text-right ml-4">
      <p className="text-gray-600">Proposal - Accepted</p>
    </div>
  </div>
</div>


{/* Participated Events */}
<h2 className="text-6xl font-bold text-center text-white mt-60">Participated Events</h2>
<div className="flex flex-col space-y-8 justify-center mt-8">
  {/* First Participated Event Card */}
  <div className="w-full bg-white shadow-lg rounded-full py-4 px-6 mx-auto flex justify-between items-center">
    <div className="flex-1 text-left">
      <h2 className="text-2xl font-semibold text-gray-800">Participated in CodeRed 2024</h2>
    </div>
    <div className="flex-2 text-left ml-4">
      <p className="text-gray-600">Additional details about the event can go here. Clean and centered layout.</p>
    </div>
  </div>

  {/* Second Participated Event Card */}
  <div className="w-full bg-white shadow-lg rounded-full py-4 px-6 mx-auto flex justify-between items-center">
    <div className="flex-1 text-left">
      <h2 className="text-2xl font-semibold text-gray-800">Participated in Hackat24</h2>
    </div>
    <div className="flex-2 text-left ml-4">
      <p className="text-gray-600">Details for this event. Aligned in a way that looks neat and readable.</p>
    </div>
  </div>

  {/* Third Participated Event Card */}
  <div className="w-full bg-white shadow-lg rounded-full py-4 px-6 mx-auto flex justify-between items-center">
    <div className="flex-1 text-left">
      <h2 className="text-2xl font-semibold text-gray-800">Participated in Project24</h2>
    </div>
    <div className="flex-2 text-left ml-4">
      <p className="text-gray-600">Any extra details about this event go here. Ensuring alignment for uniformity.</p>
    </div>
  </div>
</div>


    </section>
  );
}

export default Ohome;
