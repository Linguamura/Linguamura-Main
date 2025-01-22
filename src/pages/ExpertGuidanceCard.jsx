import React from "react";

const ExpertGuidanceCard = () => {
  return (
    <div className="w-full max-w-md bg-teal-100 rounded-lg shadow-lg p-6 relative">
      {/* Close Button */}
      <button className="absolute top-4 right-4 text-teal-600 hover:text-teal-800">
        &times;
      </button>

      {/* Content */}
      <div>
        <h2 className="text-lg font-bold text-gray-800 flex items-center space-x-2">
          <span>Unlock Expert Guidance!</span>
          <span role="img" aria-label="Trophy">
            🏆
          </span>
        </h2>
        <p className="text-gray-600 mt-3">
          To connect with professional tutors and get personalized learning
          support, upgrade to Premium. Master your subjects with one-on-one
          help and boost your learning journey!
          <span role="img" aria-label="Rocket">
            🚀
          </span>
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-between items-center">
          <a
            href="#"
            className="text-teal-600 font-medium hover:underline"
          >
            Go Premium & Level Up!
          </a>
          <button className="px-4 py-2 bg-white text-teal-600 font-medium rounded-lg shadow hover:bg-gray-100 transition">
            Go Premium
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpertGuidanceCard;
