import React from 'react';
import Footer from "/src/components/footer.jsx";
import img from '/src/assets/img2.jpg'; 

const About = () => {
  return (
    <div className="relative text-white">
      <div className="absolute inset-0 z-[-1]">
        <div
          className="h-full w-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="py-20 px-4 text-center">
        <h1 className="text-6xl font-semibold">Welcome to Spark Venture</h1>
        <p className="mt-4 text-lg">Your hackathon management solution</p>
      </div>

      {/* What We Do Section */}
      <div className="py-16 px-8">
        <section className="mb-16 text-center">
          <h2 className="text-5xl font-semibold text-white">What We Do</h2>
          <p className="mt-6 text-lg text-white max-w-4xl mx-auto">
            Spark Venture is an innovative platform for managing hackathons. Whether you're a student eager to participate or an organizer looking to host an event, we streamline the entire experience. From registration to project submissions, we ensure that every step is simple and efficient.
          </p>
        </section>
      </div>

      {/* Features Section */}
      <div className="py-16 px-8">
        <section className="mb-16 text-center">
          <h2 className="text-5xl font-semibold text-white">Features</h2>
          <ul className="mt-6 space-y-6 text-lg text-white max-w-4xl mx-auto">
            <li><strong>Student Registration:</strong> Easily sign up for hackathons and submit project proposals.</li>
            <li><strong>Organizer Tools:</strong> Host, manage, and review hackathons and project proposals.</li>
            <li><strong>Admin Control:</strong> Validate colleges and organizers, manage schedules, and provide detailed insights.</li>
          </ul>
        </section>
      </div>

      {/* Meet The Team Section */}
      <div className="py-16 px-8">
        <section className="text-center">
          <h2 className="text-5xl font-semibold text-white">Meet The 'Team'</h2>

          <div className="flex justify-center items-center mt-8">
            <div className="relative text-center">
              
              <img src="./src/assets/lead.jpg" alt="Mrudul V Binu" className="w-40 h-40 mx-auto rounded-full shadow-lg" />
             
              <p className="mt-6 font-semibold text-xl text-white">Mrudul V Binu</p>
            
              <p className="mt-2 text-lg text-gray-300">
                Project Lead | Developer | Designer
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <div className="mt-0">
        <Footer />
      </div>
    </div>
  );
};

export default About;
