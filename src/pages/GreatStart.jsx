import React from "react";
import { useNavigate } from "react-router-dom";

const GreatStart = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 relative">
      {/* Back Button (Aligned to the Left) */}
      <div className="absolute top-4 left-4">
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <span>&larr;</span>
        </button>
      </div>

      {/* Header */}
      <h1 className="text-2xl font-semibold text-gray-800 text-center">
        You’re off to a great start!
      </h1>

      {/* Illustration */}
      <div className="my-8">
        <img
          src="/src/assets/Group.png" // Replace with the target image URL
          alt="Great Start Illustration"
          className="w-40 h-40"
        />
      </div>

      {/* Description */}
      <p className="text-center text-[#4E4B66] text-[18px] font-normal max-w-lg">
        Learning French 30 mins/day will make you a great speaker in no time.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col gap-4 w-full max-w-xs">
        <button
          onClick={() => navigate("/dashboard/study-plan")} // Redirect to /dashboard/study-plan
          className="py-3 gradient rounded-[55px] text-white custom-shadow hover:shadow-none shadow transition-colors"
        >
          Start a Study Plan
        </button>
        <button className="py-3 custom-shadow hover:shadow-none rounded-[55px] border border-[#00BBBB] text-[#00BBBB] transition-colors">
          Not now
        </button>
      </div>
    </div>
  );
};

export default GreatStart;