import React from "react";

const DayStreakCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-96 bg-white shadow-lg rounded-xl p-6">
        {/* Streak Icon and Count */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-yellow-100 rounded-full flex justify-center items-center">
            <span className="text-yellow-500 text-2xl">🔥</span>
          </div>
          <h1 className="text-4xl font-bold mt-2">1</h1>
          <p className="text-gray-500">Day Streak</p>
          <p className="text-sm text-teal-600 mt-1">
            You're doing great, Darlington!
          </p>
        </div>

        {/* Days of the Week */}
        <div className="flex justify-between mt-6">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
            <div
              key={day}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                index < 5
                  ? "bg-teal-500 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {day[0]}
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-6">
          <h3 className="text-gray-800 font-semibold text-sm mb-2">
            Your Stats
          </h3>
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-lg font-bold">1</p>
              <p className="text-gray-500 text-xs">Days</p>
            </div>
            <div>
              <p className="text-lg font-bold">1</p>
              <p className="text-gray-500 text-xs">Lessons</p>
            </div>
            <div>
              <p className="text-lg font-bold">3</p>
              <p className="text-gray-500 text-xs">Quizzes</p>
            </div>
            <div>
              <p className="text-lg font-bold">36</p>
              <p className="text-gray-500 text-xs">Minutes</p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button className="mt-6 w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg">
          Take lesson
        </button>
      </div>
    </div>
  );
};

export default DayStreakCard;
