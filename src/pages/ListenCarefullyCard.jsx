import React from "react";

const ListenCarefullyCard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 relative">
      {/* Close Button */}
      <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
        &times;
      </button>

      {/* Progress Bar */}
      <div className="w-full max-w-md bg-gray-200 rounded-full h-1.5 mb-6">
        <div className="bg-teal-500 h-1.5 rounded-full" style={{ width: "40%" }}></div>
      </div>

      {/* Title */}
      <h1 className="text-xl font-bold text-gray-800">Listen carefully</h1>
      <p className="text-gray-500 mt-1">Learn how to greet people in French</p>

      {/* Image and Audio Section */}
      <div className="mt-6">
        <img
          src="https://via.placeholder.com/150" // Replace with an appropriate image URL
          alt="Person"
          className="rounded-lg shadow-lg w-40 h-40"
        />
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <button className="text-teal-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.888v4.224a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
          </svg>
        </button>
        <div className="w-32 h-1 bg-teal-500 rounded-full"></div>
      </div>

      {/* Word Translation */}
      <div className="mt-6 text-center">
        <h2 className="text-lg font-bold text-gray-800">FRENCH</h2>
        <p className="text-2xl text-teal-600 font-semibold">Bonjour</p>
        <h2 className="text-lg font-bold text-gray-800 mt-4">ENGLISH</h2>
        <p className="text-2xl text-gray-700 font-semibold">Good morning</p>
      </div>

      {/* Sentence Usage */}
      <div className="mt-6 w-full max-w-lg bg-gray-100 p-4 rounded-lg shadow">
        <p className="text-gray-700 text-sm">
          <strong>Sentence Usage:</strong> Bonjour! Comment ça va? (Hello! How are you?)
        </p>
      </div>

      {/* Continue Button */}
      <button className="mt-6 px-6 py-3 bg-teal-500 text-white font-medium rounded-full shadow hover:bg-teal-600 transition">
        Continue &rarr;
      </button>
    </div>
  );
};

export default ListenCarefullyCard;
