import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from "/src/assets/im1.jpg";
import Headerbar from "/src/components/headerbar.jsx";
import Navbar from "/src/components/navbar.jsx";
import Footer from "/src/components/footer.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import axiosInstance from '../../backend/axiosinstance';

function Shome() {
  const [teamHackathons, setTeamHackathons] = useState([]);
  const [soloHackathons, setSoloHackathons] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [participatedEvents, setParticipatedEvents] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });

    const fetchData = async () => {
      try {
        const [hackathonRes, upcomingRes, participatedRes] = await Promise.all([
          axiosInstance.get('/hackathons'),
          axiosInstance.get('/user/registered-events?type=upcoming'),
          axiosInstance.get('/user/participated-events?type=participated')
        ]);

        const hackathons = hackathonRes.data;
        setTeamHackathons(hackathons.filter(event => event.typeofhk === 'Team'));
        setSoloHackathons(hackathons.filter(event => event.typeofhk === 'Solo'));

        setUpcomingEvents(upcomingRes.data);
        setParticipatedEvents(participatedRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleRegister = (event) => {
    const route = event.typeofhk === 'Team' ? `/tregpg/${event._id}` : `/vregpg/${event._id}`;
    navigate(route);
  };

  const handleDetailsClick = (event) => {
    setSelectedEvent(event);
    setShowDetails(true);
  };

  const handleCloseDialog = () => {
    setShowDetails(false);
    setSelectedEvent(null);
  };

  const formatDate = (date) => new Date(date).toLocaleDateString();

  return (
    <section className="w-full mx-auto p-0 relative"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        scrollBehavior: 'smooth',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      <div className="relative z-10">
        <Headerbar />
        <Navbar />

        {/* Team Hackathons */}
        <h2 className="text-6xl font-bold text-center text-white mt-20" data-aos="fade-up">Team Hackathons</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {teamHackathons.length > 0 ? (
            teamHackathons.map((event) => (
              <div key={event._id} className="bg-blue-700 text-white p-6 rounded-lg shadow-lg max-w-md" data-aos="fade-up">
                <h3 className="text-2xl font-bold">{event.ename}</h3>
                <p className="text-lg">📅 Date: {event.date}</p>
                <p className="text-lg">📍 Venue: {event.venue}</p>
                <p className="text-lg">🏆 Prize: {event.prize}</p>
                <div className="flex justify-between mt-3">
                  <button onClick={() => handleRegister(event)} className="bg-white text-blue-700 px-4 py-2 rounded-lg font-bold">Register</button>
                  <button onClick={() => handleDetailsClick(event)} className="bg-white text-blue-700 px-4 py-2 rounded-lg font-bold">Details</button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-center text-xl">No team hackathons available.</p>
          )}
        </div>

        {/* Solo Hackathons */}
        <h2 className="text-6xl font-bold text-center text-white mt-20" data-aos="fade-up">Virtual Solo Hackathons</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {soloHackathons.length > 0 ? (
            soloHackathons.map((event) => (
              <div key={event._id} className="bg-green-600 text-white p-6 rounded-lg shadow-lg max-w-md" data-aos="fade-up">
                <h3 className="text-2xl font-bold">{event.ename}</h3>
                <p className="text-lg">📅 Date: {event.date}</p>
                <p className="text-lg">💻 Platform: {event.venue}</p>
                <p className="text-lg">🏆 Prize: {event.prize}</p>
                <div className="flex justify-between mt-3">
                  <button onClick={() => handleRegister(event)} className="bg-white text-green-600 px-4 py-2 rounded-lg font-bold">Register</button>
                  <button onClick={() => handleDetailsClick(event)} className="bg-white text-green-600 px-4 py-2 rounded-lg font-bold">Details</button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-center text-xl">No solo hackathons available.</p>
          )}
        </div>

        <div className="w-full transform scale-80 container mx-auto p-4">
          {/* Upcoming Registered Events */}
          <section className="my-8">
            <h2 className="text-3xl font-bold text-white text-center mb-4">Upcoming Registered Events</h2>
            {upcomingEvents.length > 0 ? (
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event._id} className="bg-white rounded-full shadow-lg p-4 flex justify-between items-center w-2/3 mx-auto">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                      {event.members.length > 0 && (
                        <p className="text-gray-600 text-sm"><strong>Members:</strong> {event.members.join(", ")}</p>
                      )}
                      <p className="text-gray-500 text-sm">Date: {formatDate(event.date)}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white text-center">No upcoming events registered.</p>
            )}
          </section>

          {/* Participated Events */}
          <section className="my-8">
            <h2 className="text-3xl font-bold text-white text-center mb-4">Participated Events</h2>
            {participatedEvents.length > 0 ? (
              <div className="space-y-4">
                {participatedEvents.map((event) => (
                  <div key={event._id} className="bg-white rounded-full shadow-lg p-4 flex justify-between items-center w-2/3 mx-auto">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                      {event.members.length > 0 && (
                        <p className="text-gray-600 text-sm"><strong>Members:</strong> {event.members.join(", ")}</p>
                      )}
                      <p className="text-gray-500 text-sm">Date: {formatDate(event.date)}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white text-center">No participated events.</p>
            )}
          </section>
        </div>

        <Footer />
      </div>

      {/* Event Details Dialog */}
      {showDetails && selectedEvent && (
        <div className="fixed inset-0 z-50 flex justify-center items-center" onClick={handleCloseDialog}>
          <div className="absolute inset-0" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(5px)' }}></div>
          <div className="absolute inset-0 bg-opacity-20"></div>
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full animate-fade-zoom z-10" onClick={(e) => e.stopPropagation()}>
            <button onClick={handleCloseDialog} className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold">✖</button>
            <h2 className="text-3xl font-bold text-center mb-4">EVENT DETAILS</h2>
            <p className="text-lg"><strong>Name:</strong> {selectedEvent.ename}</p>
            <p className="text-lg"><strong>Date:</strong> {selectedEvent.date}</p>
            <p className="text-lg"><strong>{selectedEvent.typeofhk === 'Team' ? 'Venue' : 'Platform'}:</strong> {selectedEvent.venue}</p>
            <p className="text-lg"><strong>Duration:</strong> {selectedEvent.durofhk}</p>
            <p className="text-lg"><strong>Prize:</strong> {selectedEvent.prize}</p>
            <p className="text-lg"><strong>Details:</strong> {selectedEvent.details}</p>
            <div className="flex justify-center mt-6">
              <button onClick={() => handleRegister(selectedEvent)} className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">Register</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Shome;
