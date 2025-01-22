import React from "react";

const SelectLanguage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-80 bg-white shadow-md rounded-xl p-6 text-center">
        {/* Header Section */}
        <p className="text-gray-600 text-lg mb-4">You are learning</p>

        {/* Language Section */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-6 h-4 bg-red-600 rounded-sm"></div>
          <span className="text-gray-800 font-medium">French</span>
        </div>

        {/* Add Language Button */}
        <button className="flex items-center justify-center gap-2 w-full border-2 border-teal-500 text-teal-500 font-semibold py-2 rounded-full hover:bg-teal-50">
          <span className="text-xl font-bold">+</span>
          Add another language
        </button>
      </div>
    </div>
  );
};

export default SelectLanguage;
