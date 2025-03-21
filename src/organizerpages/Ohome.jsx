import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from "../axiosinstance"; 
import img from "/src/assets/img3.jpg";
import Headerbar from "/src/components/headerbar.jsx";
import Navbar from "/src/components/navbar.jsx";
import Footer from "/src/components/footer.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Ohome() {
  const navigate = useNavigate();
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [organizerId, setOrganizerId] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });

    let storedOrganizerId = localStorage.getItem("organizerId");

    if (!storedOrganizerId || storedOrganizerId === "null" || storedOrganizerId === "undefined") {
      console.error(" No valid organizer ID found. Please log in again.");
      setError("Organizer ID not found. Please log in again.");
      setLoading(false);
      return;
    }

    setOrganizerId(storedOrganizerId); 

    console.log(" Using Organizer ID:", storedOrganizerId);

    const fetchUpcomingEvents = async () => {
      try {
        console.log(` Fetching upcoming events for Organizer ID: ${storedOrganizerId}`);
        
        const response = await axiosInstance.get(`/registeredhackathon/organizer/${storedOrganizerId}/upcoming-events`);

        console.log(" API Response:", response.data);

        if (!response.data || response.data.length === 0) {
          console.warn("⚠ No upcoming events found.");
          setError("No upcoming events available.");
          setUpcomingEvents([]); // Ensure empty array is set
        } else {
          setUpcomingEvents(response.data);
        }
      } catch (err) {
        console.error(" Error fetching upcoming events:", err.response?.data || err.message);
        setError(`Failed to fetch upcoming events: ${err.response?.data?.message || err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchUpcomingEvents();
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



 {/* Upcoming Events Header */}
 <h2 className="text-6xl font-bold text-center text-white mt-20 mb-8" data-aos="fade-up">
        Upcoming Events
      </h2>

      {/* Loading State */}
      {loading && (
        <p className="text-center text-white text-xl animate-pulse">Loading events...</p>
      )}

      {/* Error State */}
      {error && !loading && (
        <p className="text-red-500 text-center text-xl">{error}</p>
      )}

      {/* Upcoming Events List */}
      {!loading && !error && upcomingEvents.length > 0 ? (
        <div className="transform scale-85 flex flex-col space-y-6 justify-center" data-aos="fade-up">
          {upcomingEvents.map((event) => (
            <div key={event._id} className="w-full bg-white shadow-lg rounded-full py-4 px-6 mx-auto flex justify-between items-center">
              <div className="flex-1 text-left">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">{event.ename}</h2>
              </div>
              <div className="flex-1 text-left sm:ml-4 ml-2">
                <p className="text-gray-600">📅 Date: {event.date ? new Date(event.date).toLocaleDateString() : "N/A"}</p>
              </div>
              <div className="flex-1 text-left sm:ml-4 ml-2">
                <p className="text-gray-600">{event.isTeamHackathon === true ? "📍 Venue" : "💻 Platform"}: {event.venue || "N/A"}</p>
              </div>
      <div className="flex-none ml-auto">
        <button   onClick={() => navigate(`/regstud/${event._id}`)} 
        className="bg-blue-500 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-md">
        Registered Students</button>
      </div>
            </div>
          ))}
        </div>
      ) : (
        !loading && !error && <p className="text-white text-center text-xl">No registered hackathons yet.</p>
      )}

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
