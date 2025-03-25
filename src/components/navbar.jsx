import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import spark from '../assets/sparkventure.svg';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const navigate = useNavigate(); 
  
    const handleLogout = () => {
      localStorage.removeItem('studentId'); 
      localStorage.removeItem("token"); 
      localStorage.removeItem("organizerId");
      sessionStorage.clear();
      navigate('/', { replace: true });
       window.location.reload();
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-md text-black dark:text-white shadow-md p-2 sm:p-4" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <img src={spark} alt="Spark Venture Logo" className="w-40 h-auto" />
        </div>
        <ul className="flex space-x-4 sm:space-x-6 text-red-800 text-sm sm:text-base">
          <li>
            <Link to="/about" className="hover:text-red-600 font-semibold">
              About
            </Link>
          </li>
    
          <li>
            <ScrollLink to="contact" smooth={true} duration={1500} className="font-semibold cursor-pointer hover:text-red-600">
              Contact
            </ScrollLink>
          </li>

          <li>
            <button onClick={handleLogout} className=" hover:text-red-600 font-semibold">
              Logout
            </button>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
