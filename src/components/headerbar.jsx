import React from 'react';
import spark from '../assets/sparkventure.svg';

const Headerbar = () => {
  return (
    <header className="text-center py-4 text-black">
    <img 
        src={spark}
        alt="LOGO" 
        className="h-20 ml-100" 
      />
      <p className="text-sm sm:text-base">Welcome to the Spark Venture. Register now and join the innovation!</p>
    </header>
  );
};

export default Headerbar;
