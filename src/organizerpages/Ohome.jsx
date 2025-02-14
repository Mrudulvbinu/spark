import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import img from "/src/assets/img3.jpg";
import Headerbar from "/src/components/headerbar.jsx";
import Navbar from "/src/components/navbar.jsx";
import Footer from "/src/components/footer.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles

function Ohome() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing function for the animation
      once: true, // Animation should only happen once
    });
  }, []);

  return (
    <div className="relative text-white">
      <div className="absolute inset-0 z-[-1]">
        <div
          className="h-full w-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
      </div>

      <div className="w-full"><Headerbar /></div>
      <div className="w-full"><Navbar /></div>

      <h2 className="text-5xl font-bold text-center text-white mt-15 mb-20" data-aos="fade-up">
        Conduct Team Hackathon and Virtual Solo Hackathon
      </h2>

      {/* Host Event Card */}
      <div className="transform scale-85 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center" data-aos="fade-up">
        {/* Host Event Card */}
        <Link to="/hosthk" className="w-full flex justify-center">
          <div className="max-w-lg bg-white shadow-lg rounded-lg p-8 flex flex-col items-center cursor-pointer hover:shadow-xl transition-all">
            <h2 className="text-3xl font-bold text-cyan-900">HOST EVENT</h2>
          </div>
        </Link>

        {/* Review and Approve Proposals Card */}
        <Link to="/revappro" className="w-full flex justify-center">
          <div className="max-w-lg bg-white shadow-lg rounded-lg p-8 flex flex-col items-center cursor-pointer hover:shadow-xl transition-all" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-blue-900">Review and Approve Proposals</h2>
          </div>
        </Link>

        {/* Approved and Rejected Proposals Card */}
        <Link to="/approreg" className="w-full flex justify-center">
          <div className="max-w-lg bg-white shadow-lg rounded-lg p-8 flex flex-col items-center cursor-pointer hover:shadow-xl transition-all" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-slate-600">Approved and Rejected Proposals</h2>
          </div>
        </Link>
      </div>

      {/* Spacing between sections */}
      <div className="mt-12"></div>

      {/* Upcoming Events */}
      <h2 className="text-6xl font-bold text-center text-white mt-20 mb-8" data-aos="fade-up">Upcoming Events</h2>
      <div className="transform scale-85 flex flex-col space-y-6 justify-center" data-aos="fade-up">
        {[ 
          { title: "CodeRed 2025", date: "4/4/2025", details: "Additional details about the event can go here.", status: "Students Registered - 200" },
          { title: "Hackat25", date: "12/5/2025", details: "Details for this event. Aligned neat and readable.", status: "Students Registered - 120" },
          { title: "Project25", date: "2/3/2025", details: "Any extra details about this event go here, modified automatically.", status: "Students Registered - 55" }
        ].map((event, index) => (
          <div key={index} className="w-full bg-white shadow-lg rounded-full py-4 px-6 mx-auto flex flex-col sm:flex-row justify-between items-center" data-aos="fade-up">
            <div className="flex-1 text-left">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">{event.title}</h2>
            </div>
            <div className="flex-1 text-left sm:ml-4 ml-2">
              <p className="text-gray-600">{event.date}</p>
            </div>
            <div className="flex-1 text-left sm:ml-4 ml-2">
              <p className="text-gray-600">{event.details}</p>
            </div>
            <div className="flex-none text-right ml-4 flex flex-col sm:flex-row items-end">
              <p className="text-gray-600">{event.status}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Conducted Events */}
      <h2 className="text-6xl font-bold text-center text-white mt-20 mb-8" data-aos="fade-up">Conducted Events</h2>
      <div className="transform scale-85 flex flex-col space-y-6 justify-center" data-aos="fade-up">
        {[ 
          { title: "CodeRed 2024", date: "22/12/2024", details: "Additional details about the event can go here." },
          { title: "Hackat24", date: "12/8/2024", details: "Details for this event. Aligned neat and readable." },
          { title: "Project24", date: "1/11/2024", details: "Any extra details about this event go here, uniformity." }
        ].map((event, index) => (
          <div key={index} className="w-full bg-white shadow-lg rounded-full py-4 px-6 mx-auto flex justify-between items-center" data-aos="fade-up">
            <div className="flex-1 text-left">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">{event.title}</h2>
            </div>
            <div className="flex-1 text-left ml-4">
              <p className="text-gray-600">{event.date}</p>
            </div>
            <div className="flex-1 text-left ml-4">
              <p className="text-gray-600">{event.details}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full"><Footer /></div>
    </div>
  );
}

export default Ohome;
