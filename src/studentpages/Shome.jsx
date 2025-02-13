import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import img from "/src/assets/im1.jpg";
import Headerbar from "/src/components/headerbar.jsx";
import Navbar from "/src/components/navbar.jsx";
import Footer from "/src/components/footer.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles

function Shome() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing function for the animation
      once: true, // Animation should only happen once
    });
  }, []);

  const teamHackathons = [
    { title: "ProHack 2k25", date: "March 15th, 2025", location: "Spark Tech, InfoPark Cochin", prize: "INR 10,000", rules: "Teams of 2-5 participants. All ideas must be tech-driven.", link: "/tregpg", color: "blue-700" },
    { title: "Hackat25", date: "February 22nd, 2025", location: "Cobol Tech, InfoPark Cochin", prize: "INR 5000", rules: "Teams of 2-4 participants. All ideas must be tech-driven.", link: "/tregpg", color: "blue-700" },
    { title: "Codearth", date: "February 12th, 2025", location: "Freston, CyberPark, Kozhikode", prize: "INR 12000", rules: "Teams of 2-5 participants. All ideas must be tech-driven.", link: "/tregpg", color: "blue-700" },
    { title: "FlagHack", date: "March 25th, 2025", location: "GitzTech, InfoPark Cochin", prize: "INR 8,000", rules: "Teams of 2-5 participants. All ideas must be tech-driven.", link: "/tregpg", color: "blue-700" }
  ];

  const soloHackathons = [
    { title: "ProHack 2k25", date: "March 15th, 2025", location: "Hackerearth.com", prize: "INR 10,000", rules: "All ideas must be tech-driven.", link: "/vregpg", color: "green-600" },
    { title: "Hackat25", date: "February 22nd, 2025", location: "Microsoft Teams", prize: "INR 5000", rules: "All ideas must be tech-driven.", link: "/vregpg", color: "green-600" },
    { title: "Codearth", date: "February 12th, 2025", location: "Google Meet", prize: "INR 12000", rules: "All ideas must be tech-driven.", link: "/vregpg", color: "green-600" },
    { title: "FlagHack", date: "March 25th, 2025", location: "Hackerearth.com", prize: "INR 8,000", rules: "All ideas must be tech-driven.", link: "/vregpg", color: "green-600" }
  ];
  

  return (
    <section className="w-full mx-auto p-0 relative"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        scrollBehavior: 'smooth',
        backgroundAttachment: 'fixed',
      }}>

      {/* Black tint overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      <div className="relative z-10">
        <div className="w-full"><Headerbar /></div>
        <div className="w-full"><Navbar /></div>

        {/* Team Hackathons Section */}
        <h2 className="text-6xl font-bold text-center text-white mt-20" data-aos="fade-up">Team Hackathons</h2>
        <div className="transform scale-85 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-center" data-aos="fade-up">
          {teamHackathons.map((event, index) => (
            <div key={index} className="max-w-sm bg-white shadow-lg rounded-lg p-5 space-y-4" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-center text-gray-800">{event.title}</h2>
              <div className="space-y-2">
                <p><strong className="font-semibold">Date:</strong> {event.date}</p>
                <p><strong className="font-semibold">Location:</strong> {event.location}</p>
                <p><strong className="font-semibold">Prize:</strong> {event.prize}</p>
                <p><strong className="font-semibold">Rules:</strong> {event.rules}</p>
              </div>
              <div className="text-center">
                <Link to={event.link}>
                  <button 
                    className={`w-full py-3 px-6 rounded-lg font-bold text-xl transition-all ${
                      event.color === "blue-700" ? "bg-blue-700 text-white hover:bg-blue-800" :
                      event.color === "green-600" ? "bg-green-600 text-white hover:bg-green-700" : ""
                    }`}>
                    REGISTER
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Virtual Solo Hackathons Section */}
        <h2 className="text-6xl font-bold text-center text-white mt-20" data-aos="fade-up">Virtual Solo Hackathons</h2>
        <div className="transform scale-85 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-center" data-aos="fade-up">
          {soloHackathons.map((event, index) => (
            <div key={index} className="max-w-sm bg-white shadow-lg rounded-lg p-5 space-y-4" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-center text-gray-800">{event.title}</h2>
              <div className="space-y-2">
                <p><strong className="font-semibold">Date:</strong> {event.date}</p>
                <p><strong className="font-semibold">Location:</strong> {event.location}</p>
                <p><strong className="font-semibold">Prize:</strong> {event.prize}</p>
                <p><strong className="font-semibold">Rules:</strong> {event.rules}</p>
              </div>
              <div className="text-center">
                <Link to={event.link}>
                  <button className={`w-full bg-${event.color} text-white py-3 px-6 rounded-lg font-bold text-xl hover:bg-green-700 transition-colors`}>
                    REGISTER
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Events Section */}
        <h2 className="text-6xl font-bold text-center text-white mt-25" data-aos="fade-up">Upcoming Events</h2>
        <div className="transform scale-85 flex flex-col space-y-8 justify-center mt-8">
          {['CodeRed 2025', 'Hackat25', 'Project25'].map((event, index) => (
            <div key={index} className="w-full bg-white shadow-lg rounded-full py-4 px-6 mx-auto flex justify-between items-center" data-aos="fade-up">
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-semibold text-gray-800">{event}</h2>
              </div>
              <div className="flex-1 text-left ml-4">
                <p className="text-gray-600">Additional details about the event can go here.</p>
              </div>
              <div className="flex-none text-right ml-4">
                <p className="text-gray-600">Proposal - Accepted</p>
              </div>
            </div>
          ))}
        </div>

        {/* Participated Events Section */}
        <h2 className="text-6xl font-bold text-center text-white mt-35" data-aos="fade-up">Participated Events</h2>
        <div className="transform scale-85 flex flex-col space-y-8 justify-center mt-8">
          {['CodeRed 2024', 'Hacktober Fest'].map((event, index) => (
            <div key={index} className="w-full bg-white shadow-lg rounded-full py-4 px-6 mx-auto flex justify-between items-center" data-aos="fade-up">
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-semibold text-gray-800">{event}</h2>
              </div>
              <div className="flex-1 text-left ml-4">
                <p className="text-gray-600">Participation details will be visible here.</p>
              </div>
              <div className="flex-none text-right ml-4">
                <p className="text-gray-600">Status - Completed</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full"><Footer /></div>
      </div>
    </section>
  );
}

export default Shome;
