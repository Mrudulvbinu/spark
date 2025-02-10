import React, { useState } from 'react';

function Ahome() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for toggling sidebar visibility

  const handleSidebarToggle = () => {
    setSidebarOpen((prev) => !prev); // Toggle sidebar visibility on click
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar Component */}
      <div
        className={`bg-black text-white fixed top-16 left-0 h-full p-4 transition-all duration-300 ease-in-out z-20 ${
          sidebarOpen ? 'w-64' : 'w-0'
        } md:w-64 md:block md:relative`} // Ensure sidebar can collapse/expand on all screen sizes
      >
        {/* Sidebar Content (Cards) */}
        <div className="flex flex-col items-start">
          <div className="w-full p-2 mb-4 bg-white text-black shadow-lg">
            <h2 className="text-lg font-bold">Dashboard</h2>
          </div>
          <div className="w-full p-2 mb-4 bg-white text-black shadow-lg">
            <h2 className="text-lg font-bold">Users</h2>
          </div>
          <div className="w-full p-2 mb-4 bg-white text-black shadow-lg">
            <h2 className="text-lg font-bold">Settings</h2>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className={`flex-1 ml-0 md:ml-64 p-6 overflow-auto transition-all duration-300 ease-in-out z-10`}
        style={{
          backgroundImage: 'url(/src/assets/admins.jpg)', // Background image applied here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginTop: '4rem', // Push content below the fixed navbar
          height: '100vh', // Ensure background fills the entire height of the screen
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black overlay to darken background
        }}
      >
        {/* Top Navbar */}
        <nav className="bg-amber-400 text-white flex justify-between items-center p-4 fixed w-full z-10 top-0 left-0 shadow-lg">
          {/* Hamburger Menu Icon - Always visible on all screen sizes */}
          <div
            onClick={handleSidebarToggle} // Toggle sidebar on click
            className="cursor-pointer z-30" // Ensure button is above other elements
          >
            <img
              src="/src/assets/menuu.svg"
              alt="Menu"
              width="30"
              height="30"
            />
          </div>

          {/* Centered Logo */}
          <div className="flex justify-center items-center flex-1">
            <a href="/ahome" className="text-2xl">
              <img src="/src/assets/logo.png" alt="Logo" className="h-8" />
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <div>
          {/* Your content here */}
        </div>
      </div>
    </div>
  );
}

export default Ahome;
