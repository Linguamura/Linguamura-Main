import React from "react";

const GreatStart = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      {/* Back Button */}
      <div className="absolute top-4 left-4">
        <button className="flex items-center text-gray-600 hover:text-blue-600">
          <span>&larr;</span>
          <span className="ml-2">Back</span>
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
      <p className="text-center text-gray-600 text-lg max-w-lg">
        Learning French 30 mins/day will make you a great speaker in no time.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col gap-4 w-full max-w-xs">
        <button className="py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
          Start a Study Plan
        </button>
        <button className="py-3 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-100">
          Not now
        </button>
      </div>
    </div>
  );
};

export default GreatStart;
