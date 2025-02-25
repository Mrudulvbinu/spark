import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-6 text-gray-600">The page you are looking for might have been removed or is temporarily unavailable.</p>
      <div className="space-x-4">
        <button
          onClick={() => navigate(-1)}  // Navigate back to the previous page
          className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-medium hover:bg-blue-600 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
