import React from "react";

const DailyTarget = () => {
  const targets = ["5 mins", "10 mins", "30 mins", "50 mins", "60 mins"];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-6xl mx-auto px-4 py-6">
        <button className="text-gray-600 flex items-center space-x-2 hover:text-blue-600">
          <span>&larr;</span> <span>Back</span>
        </button>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Set a daily target to smash your learning goals
      </h1>

      {/* Target Buttons */}
      <div className="w-full max-w-md mx-auto grid gap-4">
        {targets.map((target, index) => (
          <button
            key={index}
            className="w-full py-3 border border-gray-300 rounded-lg text-gray-700 text-lg hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-600 focus:text-white focus:outline-none"
          >
            {target}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DailyTarget;
