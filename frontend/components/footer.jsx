import React from 'react';
import fb from '../assets/fb.svg';
import insta from '../assets/insta.svg';
import mail from '../assets/mail.svg';
import c from '../assets/c.svg';
import spark from "../assets/sparkventure.svg";


const Footer = () => {
  return (
  <footer id="contact" className="bg-white text-black py-4 px-6 mt-20 drop-shadow-md">
  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

    {/* Center Section - Logo */}
    <div className="flex justify-center w-full">
      <img src={spark} alt="Site Logo" className="h-auto w-60 sm:w-70 md:w-80 lg:w-90 xl:w-120 max-w-full" />

    </div>

  </div>
  <div className="mt-2 md:mt-2 lg:mt-0 sm:mt-6"></div>

  {/* Social Icons - Adjusted for Small & Large Screens */}
  <div className="flex flex-col items-center md:items-end mb-4 md:mb-2 lg:mb-2">
    <p className="font-bold text-center md:text-right">Connect with us</p>
    <div className="flex justify-center md:justify-end mt-2 space-x-6">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={fb} className="w-8 h-8" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={insta} className="w-8 h-8" />
      </a>
      <a href="https://gmail.com" target="_blank">
        <img src={mail} className="w-8 h-8" />
      </a>
    </div>
  </div>

  {/* Underline and bottom section */}
  <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 h-px bg-black mt-2 sm:mt-4 md:mt-3 lg:mt-2 mb-2 mx-auto"></div>
  <div className="text-center w-full">
    <img src={c} className="w-5 h-5 inline-block mr-2" />
    <span>All rights Reserved | Developed by ME</span>
  </div>

</footer>
  );
};

export default Footer;
