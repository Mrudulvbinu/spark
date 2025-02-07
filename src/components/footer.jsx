import React from 'react';
import x from '../assets/x.svg';
import fb from '../assets/fb.svg';
import lin from '../assets/lin.svg';
import insta from '../assets/insta.svg';
import mail from '../assets/mail.svg';
import c from '../assets/c.svg';
import logo from "/src/assets/logo.png";


const Footer = () => {
  return (
    <footer id="contact" className="bg-yellow-50 text-black py-4 px-6 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center">

      <div className="text-left mb-4 md:mb-0">
  <p className="font-bold">Get all updates</p>
  <div className="flex flex-col items-start mt-2">
    <input
      type="email"
      placeholder="Enter your email"
      className="p-2 text-white bg-black w-64"
    />
    <button className="bg-red-700 text-white px-4 py-2 mt-2 hover:bg-green-600 transition-colors">
      SUBSCRIBE
    </button>
  </div>
</div>

        {/* Center Section */}
        <div className="text-center mb-4 md:mb-0">
          <img src={logo} alt="Site Logo" className="w-100 px-2 py-2 mx-auto" />
        </div>

        {/* Right Section */}
        <div className="text-center">
          <p className="font-bold">Connect with us</p>
          <div className="flex justify-center mt-2 space-x-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={x} alt="Twitter"  viewBox="0 0 24 24" className="w-8 h-8 text-black hover:text-blue-400" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={fb} viewBox="0 0 24 24" className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={lin} viewBox="0 0 24 24"  className="w-8 h-8" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={insta} viewBox="0 0 24 24" className="w-8 h-8" />
            </a>
            <a href="https://gmail.com" target="_blank">
              <img src={mail} viewBox="0 0 24 24" className="w-8 h-8" />
            </a>
          </div>
        </div>

      </div>

      {/* Underline */}
      <div className="w-1/2 h-px bg-black mt-4 mb-4 mx-auto"></div>

      {/* Bottom Section */}
      <div className="text-center text-black">
      <img src={c} viewBox="0 0 24 24" className=" w-5 h-5 inline-block mr-2" />
        <span>All rights Reserved | Developed by ME</span>
      </div>
    </footer>
  );
};

export default Footer;
