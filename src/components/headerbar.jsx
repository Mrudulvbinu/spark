import React from 'react';
import spark from '../assets/sparkventure.svg';

const Headerbar = () => {
  return (
    <header className="flex flex-col items-center justify-center py-4 text-black">
    <img 
        src={spark}
        alt="LOGO" 
        className="h-auto w-60 sm:w-70 md:w-80 lg:w-90 xl:w-100 max-w-full" 
      />
        <p className="text-sm sm:text-base text-center px-4">
        Welcome to the Spark Venture. Register now and join the innovation!</p>
    </header>
  );
};

export default Headerbar;
