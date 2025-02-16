import React from "react";
import { useNavigate } from "react-router-dom";

const ComingSoon: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center px-4">
      <h1 className="text-5xl font-bold mb-4 animate-pulse">Coming Soon...</h1>
      <p className="text-lg text-gray-400 mb-6">
        We are working hard to bring something amazing for you!
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default ComingSoon;
