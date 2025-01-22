import React from "react";

const LearningCard = () => {
  return (
    <div className="w-80 bg-teal-100 rounded-lg shadow-lg p-4 text-center">
      <div className="relative">
        <img
          src="https://via.placeholder.com/150" // Replace with your Eiffel Tower image URL
          alt="Eiffel Tower"
          className="w-16 h-16 rounded-full mx-auto border-2 border-white shadow-md"
        />
      </div>
      <h2 className="text-lg font-bold text-gray-800 mt-2">Bonjour!</h2>
      <p className="text-gray-600 mt-1">Start with greetings and introductions.</p>
      <p className="text-gray-500 text-sm mt-1">(2mins)</p>
      <button className="mt-4 px-4 py-2 bg-white text-teal-600 font-medium rounded-lg shadow hover:bg-gray-100 transition">
        Start learning
      </button>
    </div>
  );
};

export default LearningCard;
