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
        className={`bg-black text-white fixed top-16 left-0 h-full transition-all duration-300 ease-in-out z-20 ${sidebarOpen ? 'w-64' : 'w-0'} md:w-64 md:block md:relative`}
      >
        {/* Sidebar Content (Links) */}
        <div className={`flex flex-col items-start space-y-4 p-4 ${sidebarOpen ? 'block' : 'hidden'} md:block md:flex`}>
          <a href="/dashboard" className="text-white text-lg font-semibold py-2 px-4 hover:bg-gray-700 rounded-md transition-all duration-200">Dashboard</a>
          <a href="/users" className="text-white text-lg font-semibold py-2 px-4 hover:bg-gray-700 rounded-md transition-all duration-200">Users</a>
          <a href="/settings" className="text-white text-lg font-semibold py-2 px-4 hover:bg-gray-700 rounded-md transition-all duration-200">Settings</a>
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className={`flex-1 transition-all duration-300 ease-in-out z-10 ml-0 ${sidebarOpen ? 'ml-64' : 'ml-0'} md:ml-5`}
        style={{
          backgroundImage: 'url(/src/assets/admins.jpg)',
          backgroundSize: 'contain', // Keeps the image size as is
          backgroundPosition: 'center', // Centers the image horizontally and vertically
          backgroundRepeat: 'no-repeat',
          padding: '2rem 2rem',
          marginTop: 'calc(3rem + 13px)', // Adjusts for navbar height
          minHeight: '80vh', // Ensures the content takes up full viewport height
        }}
      >
        {/* Top Navbar */}
        <nav className="bg-amber-200 text-white flex justify-between items-center p-4 fixed w-full z-30 top-0 left-0 shadow-lg">
          {/* Hamburger Menu Icon - Visible only on smaller screens */}
          <div
            onClick={handleSidebarToggle} // Toggle sidebar on click
            className="cursor-pointer z-30 md:hidden" // Hide on larger screens
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
        <div className="p-6">
          {/* Your content here */}
        </div>
      </div>
    </div>
  );
}

export default Ahome;
