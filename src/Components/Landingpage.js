import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 to-blue-600 text-white p-6">
      <h1 className="text-6xl font-extrabold mb-6 text-center drop-shadow-lg">Welcome to the Website</h1>
      <p className="text-xl text-center max-w-2xl mb-8 opacity-90">
        Empowering you to upload and manage your courses seamlessly. Share your knowledge with the world and make learning accessible!
      </p>
      
      <Link to="/upload" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-yellow-500 transition shadow-md">
        Upload Course
      </Link>
    </div>
  );
};

export default LandingPage;

