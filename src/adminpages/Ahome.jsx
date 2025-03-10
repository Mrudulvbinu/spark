import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Ahome() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleSidebarToggle = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleContentChange = (content) => {
    setSelectedContent(content);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const renderContent = () => {
    switch (selectedContent) {
      case 'Dashboard':
        return (
          <div className={`p-6 text-${darkMode ? 'white' : 'black'}`}>
            Dashboard Content
          </div>
        );
      case 'Users':
        return (
          <div className="flex flex-col md:flex-row gap-6">
            <div className={`w-full md:w-1/2 p-4 shadow-lg rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className={`text-2xl font-semibold mb-4 text-${darkMode ? 'white' : 'black'}`}>Registered Users</h2>
              <div className={`space-y-4 text-${darkMode ? 'white' : 'black'}`}>
                <div className="flex justify-between"><span className="font-medium">John Doe</span><span className="font-small">johndoe</span></div>
                <div className="flex justify-between"><span className="font-medium">Jane Smith</span><span className="font-small">janesmith</span></div>
                <div className="flex justify-between"><span className="font-medium">Sam Johnson</span><span className="font-small">samjohnson</span></div>
              </div>
            </div>

            <div className={`w-full md:w-1/2 p-4 shadow-lg rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className={`text-2xl font-semibold mb-4 text-${darkMode ? 'white' : 'black'}`}>Organizers</h2>
              <div className={`space-y-4 text-${darkMode ? 'white' : 'black'}`}>
                <div className="flex justify-between"><span className="font-medium">Alice Cooper</span><span className="font-small">alicecooper</span></div>
                <div className="flex justify-between"><span className="font-medium">Bob Martin</span><span className="font-small">bobmartin</span></div>
                <div className="flex justify-between"><span className="font-medium">Charlie Brown</span><span className="font-small">charliebrown</span></div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="text-2xl">
            Welcome to the Admin Panel
          </div>
        );
    }
  };

  return (
    <div className={`flex h-screen overflow-hidden ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className={`bg-black text-white fixed top-16 left-0 h-full transition-all duration-300 ease-in-out z-20 ${sidebarOpen ? 'w-64' : 'w-0'} md:w-64 md:block md:relative ${darkMode ? 'bg-gray-800' : ''}`}>
        <div className={`flex flex-col items-start space-y-4 p-4 ${sidebarOpen ? 'block' : 'hidden'} md:flex`}>
          <a href="#" onClick={() => handleContentChange('Dashboard')} className="text-white text-lg font-semibold py-2 px-4 hover:bg-gray-700 rounded-md transition-all duration-200">Dashboard</a>
          <a href="#" onClick={() => handleContentChange('Users')} className="text-white text-lg font-semibold py-2 px-4 hover:bg-gray-700 rounded-md transition-all duration-200">Users</a>
        </div>
      </div>

      <div className={`flex-1 transition-all duration-300 ease-in-out z-10 ml-0 ${sidebarOpen ? 'ml-64' : 'ml-0'} md:ml-5`}
        style={{
          backgroundImage: selectedContent ? 'none' : 'url(/src/assets/admins.png.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '3rem 3rem',
          marginTop: 'calc(3rem + 13px)',
          minHeight: '80vh',
          position: 'relative',
        }}
      >
        {/* Top Navbar */}
        <nav className="bg-amber-200 text-white flex justify-between items-center p-4 fixed w-full z-30 top-0 left-0 shadow-lg">
          <div onClick={handleSidebarToggle} className="cursor-pointer z-30 md:hidden">
            <img src="/src/assets/menuu.svg" alt="Menu" width="30" height="30" />
          </div>

          <div className="flex items-center justify-center mx-auto">
  <a href="/ahome" className="text-2xl">
    <img src="/src/assets/logo.png" alt="Logo" className="h-8" />
  </a>
</div>

          <div className="flex items-center space-x-4">
            <div onClick={toggleDarkMode} className="cursor-pointer">
              <img src="/src/assets/darkmode.png" alt="Dark Mode Toggle" width="30" height="30" />
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-all duration-200"
            >
              LOGOUT
            </button>
          </div>
        </nav>

        <div className="p-6 z-10">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Ahome;
