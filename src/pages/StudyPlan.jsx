import React, { useState } from "react";

const StudyPlan = () => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [time, setTime] = useState({ hour: "10", minute: "00" });
  const [reminder, setReminder] = useState(false);

  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-8">
      {/* Back Button */}
      <div className="absolute top-4 left-4">
        <button className="flex items-center text-gray-600 hover:text-blue-600">
          <span>&larr;</span>
          <span className="ml-2">Back</span>
        </button>
      </div>

      {/* Header */}
      <h1 className="text-xl font-semibold text-gray-800 mb-6">
        Start Study Plan
      </h1>

      {/* Content Card */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        {/* Days Selection */}
        <div className="mb-6">
          <h2 className="text-sm font-medium text-gray-700 mb-3">
            Select the days of the week you want to learn
          </h2>
          <div className="flex justify-between">
            {days.map((day, index) => (
              <button
                key={index}
                onClick={() => toggleDay(day)}
                className={`w-10 h-10 flex items-center justify-center rounded-full border ${
                  selectedDays.includes(day)
                    ? "bg-blue-500 text-white"
                    : "border-gray-300 text-gray-600"
                }`}
              >
                {day[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        <div className="mb-6">
          <h2 className="text-sm font-medium text-gray-700 mb-3">
            Select time you want to learn
          </h2>
          <div className="flex items-center gap-4">
            <select
              value={time.hour}
              onChange={(e) =>
                setTime((prev) => ({ ...prev, hour: e.target.value }))
              }
              className="border border-gray-300 rounded-lg px-11 py-2 bg-white"
            >
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={String(i).padStart(2, "0")}>
                  {String(i).padStart(2, "0")}
                </option>
              ))}
            </select>
            <select
              value={time.minute}
              onChange={(e) =>
                setTime((prev) => ({ ...prev, minute: e.target.value }))
              }
              className="border border-gray-300 rounded-lg px-11 py-2 bg-white"
            >
              {["00", "15", "30", "45"].map((minute, index) => (
                <option key={index} value={minute}>
                  {minute}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Reminder Toggle */}
        <div className="mb-6 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">
            Set a reminder
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={reminder}
              onChange={() => setReminder((prev) => !prev)}
              className="sr-only peer"
            />
            <div className="w-10 h-6 bg-gray-300 rounded-full peer peer-focus:ring-blue-300 peer-checked:bg-blue-500"></div>
            <div className="absolute left-[4px] top-[2px] w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-full"></div>
          </label>
        </div>

        {/* Continue Button */}
        <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Continue &rarr;
        </button>
      </div>
    </div>
  );
};

export default StudyPlan;
