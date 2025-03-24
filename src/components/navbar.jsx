import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const navigate = useNavigate(); 
  
    const handleLogout = () => {
      localStorage.removeItem('studentId'); 
      localStorage.removeItem("token"); 
      localStorage.removeItem("organizerId");
      sessionStorage.clear();
      navigate('/', { replace: true }); 
  };

  return (
    <nav className="bg-white shadow-md p-2 sm:p-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <img src={logo} alt="Spark Venture Logo" className="w-40 h-auto" />
        </div>
        <ul className="flex space-x-4 sm:space-x-6 text-green-800 text-sm sm:text-base">
          <li>
            <Link to="/about" className="hover:text-green-600 font-semibold">
              About
            </Link>
          </li>
    
          <li>
            <ScrollLink to="contact" smooth={true} duration={1500} className="cursor-pointer hover:text-green-600">
              Contact
            </ScrollLink>
          </li>

          <li>
            <button onClick={handleLogout} className="text-red-600 hover:text-red-800 font-semibold">
              Logout
            </button>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
