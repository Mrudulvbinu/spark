import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosinstance';
import { useNavigate, useParams } from 'react-router-dom';
import vid1 from '/src/assets/vid1.mp4';
import logo from '/src/assets/logo.png';
import Header from '/src/components/header.jsx';

const Tregpg = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const { hackathonId } = useParams();

  const [teamSize, setTeamSize] = useState(1);
  const [members, setMembers] = useState([{}]);
  const [hasParticipated, setHasParticipated] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleTeamSizeChange = (event) => {
    const size = parseInt(event.target.value, 10);
    setTeamSize(size);
    // Set members array with empty objects, +1 because members start from "Member 2"
    setMembers(Array(size).fill({}));
};

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...members];
    updatedMembers[index] = { ...updatedMembers[index], [field]: value };
    setMembers(updatedMembers);

        // Debugging the specific member input change
        console.log(`Updated Member ${index} Data:`, updatedMembers[index]);

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const studentId = localStorage.getItem('studentId'); // Get student ID from localStorage

    console.log("Student ID from localStorage:", studentId); // 🔍 Check if studentId is null


    if (!studentId || studentId === 'null') {
      alert("Student ID is missing. Please log in again.");
      return;
  }


 // Debugging form data before constructing registration data
 console.log("Form Data Before Submission:", {
  leaderName: formData.get('leaderName'),
  datebirth: formData.get('datebirth'),
  leaderEmail: formData.get('leaderEmail'),
  phone: formData.get('phone'),
  education: formData.get('education'),
  teamName: formData.get('teamName'),
  hasParticipated,
  members: members.map((_, index) => ({
      name: formData.get(`member-${index}-name`) || 'N/A',
      email: formData.get(`member-${index}-email`) || 'N/A',
      dob: formData.get(`member-${index}-date-of-birth`) || 'N/A'
  }))
});



    const registrationData = {
      hackathonId,
      studentId,
      isTeam: true,
      teamName: formData.get('teamName'),
      leaderName: formData.get('leaderName'),
      datebirth: formData.get('datebirth'),
      leaderEmail: formData.get('leaderEmail'),
      phone: formData.get('phone'),
      education: formData.get('education'),
      hasParticipated,
      members: members.map((_, index) => ({
          name: formData.get(`member-${index}-name`) || '',
          email: formData.get(`member-${index}-email`) || '',
          dob: formData.get(`member-${index}-date-of-birth`) || ''
      }))
  };
  console.log("Registration Data Being Sent:", registrationData);
  


    try {
      await axiosInstance.post('/registeredhackathon/register', registrationData);
      alert('Team Registration successful!');
      navigate('/shome');
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Registration failed.');
    }
  };
  return (
    <div className="relative flex flex-col min-h-screen">
      <video className="fixed top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted playsInline>
        <source src={vid1} type="video/mp4" />
      </video>

      <div className="w-full transform scale-80 relative z-10 container mx-auto p-1">
        <Header />
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 space-y-6 max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Register for Team Hackathon</h1>

         {/* Leader Personal Information */}
{[
    { label: "Leader Name", name: "leaderName", type: "text" },
    { label: "Date of Birth", name: "datebirth", type: "date" },
    { label: "Leader Email", name: "leaderEmail", type: "email" },
    { label: "Phone Number", name: "phone", type: "tel" }
].map(({ label, name, type }, index) => (
    <div key={index} className="flex items-center space-x-4">
        <label htmlFor={name} className="w-1/3 font-bold text-lg text-gray-700 text-right">
            {label}:
        </label>
        <input
            type={type}
            id={name}
            name={name}
            className="w-2/3 p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
        />
    </div>
))}


          <div className="flex items-center space-x-4">
            <label htmlFor="education" className="w-1/3 font-bold text-lg text-gray-700 text-right">Education:</label>
            <select id="education" name="education" className="w-2/3 p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" required>
              {["MCA", "BCA", "BSC", "BTech"].map((edu) => (
                <option key={edu} value={edu}>{edu}</option>
              ))}
            </select>
          </div>

          {/* Team Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <label htmlFor="team-name" className="w-1/3 font-bold text-lg text-gray-700 text-right">Team Name:</label>
              <input type="text" id="team-name" name="teamName" className="w-2/3 p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" required />
            </div>

            <div className="flex items-center space-x-4">
              <label htmlFor="team-size" className="w-1/3 font-bold text-lg text-gray-700 text-right"> Number of Team Mates (Excluding Leader):</label>
              <select id="team-size" value={teamSize} onChange={(e)=>handleTeamSizeChange(e)} className="w-2/3 p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" required>
              {[...Array(5)].map((_, index) => (
            <option key={index} value={index + 1}>
                {index + 1}
            </option>
        ))}
              </select>
            </div>

            {members.map((_, index) => (
              <div key={index} className="space-y-4">
                {["Name", "Email", "Date of Birth"].map((label) => (
                  <div key={label} className="flex items-center space-x-4">
                    <label htmlFor={`member-${index}-${label.toLowerCase().replace(/ /g, "-")}`} className="w-1/3 font-bold text-lg text-gray-700 text-right">
                      Member {index + 2} {label}:
                    </label>
                    <input
                      type={label === "Date of Birth" ? "date" : label === "Email" ? "email" : "text"}
                      id={`members-${index}-${label.toLowerCase().replace(/ /g, "-")}`}
                      name={`member-${index}-${label.toLowerCase().replace(/ /g, "-")}`} // Ensure correct naming pattern
                      value={members[index][label.toLowerCase().replace(/ /g, "-")] || ""}
                      onChange={(e) => handleMemberChange(index, label.toLowerCase().replace(/ /g, "-"), e.target.value)}
                      className="w-2/3 p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Participation */}
          <div className="flex items-center space-x-4">
            <p className="w-1/3 font-bold text-lg text-gray-700 text-right">Participated before?</p>
            <div className="w-2/3 flex space-x-4">
              {["Yes", "No"].map((value) => (
                <label key={value}>
                  <input
                    type="radio"
                    name="hackathon-participation"
                    value={value.toLowerCase()}
                    checked={hasParticipated === value.toLowerCase()}
                    onChange={() => setHasParticipated(value.toLowerCase())}
                    className="mr-2"
                    required
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>

          {/* File Upload 
          <div className="flex items-center space-x-4">
            <label htmlFor="project-proposal" className="w-1/3 font-bold text-lg text-gray-700 text-right">Upload Project Proposal:</label>
            <input type="file" id="project-proposal" onChange={handleFileChange} className="w-2/3 p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" accept=".pdf" />
          </div>
          {fileError && <p className="text-red-500 text-sm mt-2">{fileError}</p>}
          {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
*/}
          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-bold text-xl hover:bg-blue-800">Register</button>
          </div>
        </form>
      </div>

      <img src={logo} alt="Logo" className="absolute bottom-5 right-5 w-45 h-auto" />
    </div>
  );
};

export default Tregpg;
