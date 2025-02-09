import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Link as ScrollLink } from 'react-scroll'; // Importing react-scroll's Link component for smooth scrolling

const Navbar = () => {
  const navigate = useNavigate(); // For programmatically navigating
  
  const handleLogout = () => {
    // Logout functionality (for now, it just navigates to the home page)
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md p-2 sm:p-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Spark Venture Logo" className="w-40 h-auto" />
        </div>
        
        {/* Links */}
        <ul className="flex space-x-4 sm:space-x-6 text-green-800 text-sm sm:text-base">
          {/* Corrected About link using react-router's Link */}
          <li>
            <Link to="/about" className="hover:text-green-600 font-semibold">
              About
            </Link>
          </li>
          
          <li>
            <ScrollLink 
              to="contact" 
              smooth={true} 
              duration={1500} 
              className="cursor-pointer hover:text-green-600"
            >
              Contact
            </ScrollLink>
          </li>

          <li>
            <button 
              onClick={handleLogout} 
              className="text-red-600 hover:text-red-800 font-semibold"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
