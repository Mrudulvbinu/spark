import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../axiosinstance";
import minimal from "/src/assets/img4.jpeg";

const RegStud = () => {
  const { hackathonId } = useParams();  
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");  

  useEffect(() => {
    console.log(" Hackathon ID from URL:", hackathonId);

    if (!hackathonId) {
      console.error(" No valid hackathonId found in URL.");
      setError("Invalid hackathon ID. Please try again.");
      setLoading(false);
      return;
    }
  
    const fetchRegisteredStudents = async () => {
      try {
        const apiUrl = `/registeredhackathon/hackathon/${hackathonId}`;
        console.log(` Fetching registered students from : ${apiUrl}`); 

        const response = await axiosInstance.get(apiUrl);
        console.log(" Registered Students Data:", response.data);

        setRegistrations(response.data);
      } catch (error) {
        console.error(" Error fetching registered students:", error.response?.data || error.message);
        setError("Failed to load registered students. Please try again.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchRegisteredStudents();
  }, [hackathonId]);
  

  return (
    <div className="relative text-black">
      <div className="absolute inset-0 z-[-1]">
        <div 
          className="h-full w-full bg-cover bg-center" 
          style={{ backgroundImage: `url(${minimal})` }}
        >
          <div className="absolute inset-0 bg-white/70"></div>
        </div>
      </div>
        <div className="min-h-screen flex items-center justify-center p-6 relative">
        <div className="w-full max-w-5xl bg-white shadow-xl rounded-lg p-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Registered Students</h2>
            {loading && <p className="text-center text-gray-700 text-lg animate-pulse">Loading...</p>}
            {error && !loading && <p className="text-center text-red-500 text-lg">{error}</p>}
  
          {!loading && !error && registrations.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th className="p-3 text-left">#</th>
                    <th className="p-3 text-left">Team Name</th>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Type</th>
                    <th className="p-3 text-center"></th>
                  </tr>
                </thead>
                <tbody>
                  {registrations.map((reg, index) => (
                    <tr key={reg._id} className="border-b border-gray-300 hover:bg-gray-100 transition-all">
                      <td className="p-3">{index + 1}</td>
  
                      {reg.isTeam ? (
                        <>
                          <td className="p-3 font-semibold text-gray-800">{reg.teamName || "N/A"}</td>  
                          <td className="p-3 font-semibold text-gray-800">{reg.leaderName || "N/A"}</td>
                        </>
                      ) : (
                        <>
                          <td className="p-3 font-semibold text-gray-800">{reg.leaderName || "N/A"}</td>
                          <td className="p-3 text-gray-600">{reg.leaderEmail || "N/A"}</td>
                        </>
                      )}  
                      <td className="p-3">
                        {reg.isTeam ? (
                          <span className="px-3 py-1 bg-yellow-500 text-gray-900 rounded-full text-sm">Team</span>
                        ) : (
                          <span className="px-3 py-1 bg-green-400 text-gray-900 rounded-full text-sm">Solo</span>
                        )}
                      </td>
                        <td className="p-3 text-center">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-all">
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            !loading && <p className="text-center text-gray-700 text-lg">No students registered yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};  

export default RegStud;
