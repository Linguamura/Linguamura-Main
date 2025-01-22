import React from "react";

const ProficiencyPage = () => {
  const proficiencyLevels = ["Beginner", "Intermediate", "Advanced"];

  return (
    <div className="flex flex-col items-center justify-center h-full p-6">
        <div className="w-full max-w-6xl mx-auto px-4 py-6">
        <button className="text-gray-600 flex items-center space-x-2 hover:text-blue-600">
          <span>&larr;</span> <span>Back</span>
        </button>
      </div>
      <h1 className="text-xl font-semibold mb-8"> What's your proficiency level?</h1>
      <div className="space-y-4 w-full max-w-md">
        {proficiencyLevels.map((level) => (
          <button
            key={level}
            className="w-full py-3 border rounded-full text-gray-700 font-medium hover:bg-blue-100 focus:outline-none focus:ring focus:ring-blue-300"
          >
            {level}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProficiencyPage;
