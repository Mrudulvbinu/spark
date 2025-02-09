import React from 'react';
import airplane from '../assets/airplane.gif';

const Headerbar = () => {
  return (
    <header className="text-center bg-sky-900 py-4 text-white mb-0">
      <h1 className="text-3xl sm:text-4xl font-bold">Spark Venture</h1>
      <p className="mt-4 text-sm sm:text-base">Welcome to the Spark Venture. Register now and join the innovation!</p>
      {/* Airplane */}
      <img 
        src={airplane} 
        alt="Airplane" 
        className="airplane-animation absolute top-0 left-0 w-10 h-14 sm:w-12 sm:h-16" 
      />
    </header>
  );
};

export default Headerbar;
