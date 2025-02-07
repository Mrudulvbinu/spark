import React from 'react';
import img from "/src/assets/im1.jpg";
function Ahome() {
  return (
    <section className="w-full mx-auto p-8" 
    style={{
      backgroundImage: `url(${img})`,  
      backgroundSize: 'cover',         
      backgroundPosition: 'center',    
      backgroundAttachment: 'fixed'    
    }}></section>
);
}

export default Ahome;