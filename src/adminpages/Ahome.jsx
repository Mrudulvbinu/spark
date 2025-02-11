import React, { useState } from 'react';

function Ahome() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for toggling sidebar visibility
  const [selectedContent, setSelectedContent] = useState(null); // State to track selected content
  const [darkMode, setDarkMode] = useState(false); // State for Dark Mode toggle

  const handleSidebarToggle = () => {
    setSidebarOpen((prev) => !prev); // Toggle sidebar visibility on click
  };

  const handleContentChange = (content) => {
    setSelectedContent(content); // Set the selected content when a sidebar item is clicked
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev); // Toggle dark mode on or off
  };

  // Function to render content based on the selected item
  const renderContent = () => {
    switch (selectedContent) {
      case 'Dashboard':
        return (
          <div className="p-6 text-${darkMode ? 'white' : 'black'">
            Dashboard Content
          </div>
        );
      case 'Users':
        return (
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Panel: Registered Users */}
            <div className={`w-full md:w-1/2 p-4 shadow-lg rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className={`text-2xl font-semibold mb-4 text-${darkMode ? 'white' : 'black'}`}>Registered Users</h2>
              <div className={`space-y-4 text-${darkMode ? 'white' : 'black'}`}>
                <div className="flex justify-between">
                  <span className="font-medium">John Doe</span>
                  <span className="font-small">johndoe</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Jane Smith</span>
                  <span className="font-small">janesmith</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sam Johnson</span>
                  <span className="font-small">samjohnson</span>
                </div>
                {/* Add more users here */}
              </div>
            </div>

            {/* Right Panel: Organizers */}
            <div className={`w-full md:w-1/2 p-4 shadow-lg rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className={`text-2xl font-semibold mb-4 text-${darkMode ? 'white' : 'black'}`}>Organizers</h2>
              <div className={`space-y-4 text-${darkMode ? 'white' : 'black'}`}>
                <div className="flex justify-between">
                  <span className="font-medium">Alice Cooper</span>
                  <span className="font-small">alicecooper</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Bob Martin</span>
                  <span className="font-small">bobmartin</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Charlie Brown</span>
                  <span className="font-small">charliebrown</span>
                </div>
                {/* Add more organizers here */}
              </div>
            </div>
          </div>
        );
        case 'Settings':
          return (
            <div className="space-y-6">
              {/* Dark Mode Toggle */}
              <div
                className={`flex justify-between items-center p-4 rounded-full shadow-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
              >
                <span className="text-lg font-semibold">Dark Mode</span>
                <label
                  className="inline-flex relative items-center cursor-pointer"
                  htmlFor="darkModeSwitch"
                >
                  <input
                    id="darkModeSwitch"
                    type="checkbox"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    className="sr-only"
                  />
                  <span
                    className={`w-11 h-6 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} transition-all duration-300 ease-in-out`}
                  ></span>
                  <span
                    className={`w-4 h-4 bg-white rounded-full absolute left-1 top-1 transition-all duration-300 ease-in-out ${darkMode ? 'translate-x-5' : ''}`}
                  ></span>
                </label>
              </div>
        
              {/* Settings Pills */}
              <div className="space-y-4">
                <div className={`p-4 rounded-full shadow-md flex justify-between items-center ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
                  <span>Common Setting 1</span>
                  <span className={`${darkMode ? 'text-white' : 'text-black'}`}>Option 1</span>
                </div>
                <div className={`p-4 rounded-full shadow-md flex justify-between items-center ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
                  <span>Common Setting 2</span>
                  <span className={`${darkMode ? 'text-white' : 'text-black'}`}>Option 2</span>
                </div>
                <div className={`p-4 rounded-full shadow-md flex justify-between items-center ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
                  <span>Common Setting 3</span>
                  <span className={`${darkMode ? 'text-white' : 'text-black'}`}>Option 3</span>
                </div>
                <div className={`p-4 rounded-full shadow-md flex justify-between items-center ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
                  <span>Common Setting 4</span>
                  <span className={`${darkMode ? 'text-white' : 'text-black'}`}>Option 4</span>
                </div>
                
              </div>
            </div>
          );
        
      default:
        return (
          <div className="text-2xl">
            Welcome to the Admin Panel
          </div>
        ); // Default content when no item is clicked
    }
  };

  return (
    <div
      className={`flex h-screen overflow-hidden ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}
    >
      {/* Sidebar Component */}
      <div
        className={`bg-black text-white fixed top-16 left-0 h-full transition-all duration-300 ease-in-out z-20 ${sidebarOpen ? 'w-64' : 'w-0'} md:w-64 md:block md:relative ${darkMode ? 'bg-gray-800' : ''}`}
      >
        {/* Sidebar Content (Links) */}
        <div className={`flex flex-col items-start space-y-4 p-4 ${sidebarOpen ? 'block' : 'hidden'} md:flex`}>
          <a
            href="#"
            onClick={() => handleContentChange('Dashboard')}
            className="text-white text-lg font-semibold py-2 px-4 hover:bg-gray-700 rounded-md transition-all duration-200"
          >
            Dashboard
          </a>
          <a
            href="#"
            onClick={() => handleContentChange('Users')}
            className="text-white text-lg font-semibold py-2 px-4 hover:bg-gray-700 rounded-md transition-all duration-200"
          >
            Users
          </a>
          <a
            href="#"
            onClick={() => handleContentChange('Settings')}
            className="text-white text-lg font-semibold py-2 px-4 hover:bg-gray-700 rounded-md transition-all duration-200"
          >
            Settings
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className={`flex-1 transition-all duration-300 ease-in-out z-10 ml-0 ${sidebarOpen ? 'ml-64' : 'ml-0'} md:ml-5`}
        style={{
          backgroundImage: selectedContent ? 'none' : 'url(/src/assets/admins.jpg)', // Remove background image when content is selected
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '3rem 3rem',
          marginTop: 'calc(3rem + 13px)', // Adjusts for navbar height
          minHeight: '80vh', // Ensures the content takes up full viewport height
          position: 'relative',
        }}
      >
        {/* Top Navbar */}
        <nav className="bg-amber-200 text-white flex justify-between items-center p-4 fixed w-full z-30 top-0 left-0 shadow-lg">
          {/* Hamburger Menu Icon */}
          <div
            onClick={handleSidebarToggle} 
            className="cursor-pointer z-30 md:hidden"
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
        <div className="p-6 z-10">
          {/* Render the selected content */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Ahome;
