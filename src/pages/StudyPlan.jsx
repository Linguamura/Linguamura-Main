import { CheckIcon, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudyPlan = () => {
  const navigate = useNavigate();
  const [selectedDays, setSelectedDays] = useState([]);
  const [time, setTime] = useState({ hour: "10", minute: "00" });
  const [reminder, setReminder] = useState(false);

  // Toggle selected days
  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  // Days of the week
  const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

  // Handle continue button click
  const handleContinue = () => {
    // Log selected data (for debugging)
    console.log("Selected Days:", selectedDays);
    console.log("Selected Time:", time);
    console.log("Reminder Enabled:", reminder);

    // Redirect to the next page (e.g., /dashboard/great-start)
    navigate("/dashboard/chapter-list");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-8">
      {/* Back Button */}
      <div className="absolute top-4 left-4">
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <span>&larr;</span>
          <span className="ml-2">Back</span>
        </button>
      </div>

      {/* Header */}
      <h1 className="text-[24px] font-semibold text-[#14142A] mb-6">
        Start Study Plan
      </h1>

      {/* Content Card */}
      <div className="bg-white rounded-lg p-6 w-full max-w-[885px]">
        {/* Days Selection */}
        <div className="mb-6">
          <h2 className="text-sm font-medium text-[#4E4B66] mb-3">
            Select the days of the week you want to learn
          </h2>
          <div className="flex justify-between">
            {days.map((day, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <p className="text-[#14142A] font-medium text-[24px]">{day}</p>
                <button
                  onClick={() => toggleDay(day)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${
                    selectedDays.includes(day)
                      ? "gradient text-white"
                      : "circle-shadow border border-[#A0A3BD]"
                  }`}
                >
                  {selectedDays.includes(day) && <CheckIcon className="w-5 h-5" />}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        <div className="mb-6">
          <h2 className="text-sm font-medium text-[#4E4B66] mb-3">
            Select time you want to learn
          </h2>
          <div className="flex items-center gap-4">
            <div className="w-[242px] h-[56px] bg-[#EFF0F6] outline-none hover:shadow-none circle-shadow border-[#00BBBB] rounded-[8px] px-4 py-2 text-[#4E4B66]">
              <select
                value={time.hour}
                onChange={(e) =>
                  setTime((prev) => ({ ...prev, hour: e.target.value }))
                }
                className="w-full h-full outline-none"
              >
                {Array.from({ length: 24 }, (_, i) => (
                  <option key={i} value={String(i).padStart(2, "0")}>
                    {String(i).padStart(2, "0")}
                  </option>
                ))}
              </select>
            </div>
            <span className="text-[#4E4B66]">:</span>
            <div className="w-[242px] h-[56px] bg-[#EFF0F6] outline-none hover:shadow-none circle-shadow border-[#00BBBB] rounded-[8px] px-4 py-2 text-[#4E4B66]">
              <select
                value={time.minute}
                onChange={(e) =>
                  setTime((prev) => ({ ...prev, minute: e.target.value }))
                }
                className="w-full h-full outline-none"
              >
                {["00", "15", "30", "45"].map((minute, index) => (
                  <option key={index} value={minute}>
                    {minute}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Reminder Toggle */}
        <div className="mb-6 py-9 border-t border-t-[#D9DBE9] flex items-center justify-between">
          <div className="">
          <span className="text-[18px] font-bold text-[#14142A]">
            Set a reminder
          </span>
          <p className="text-[#4E4B66] font-normal text-[1rem]">Let’s notify you when it’s time to study.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={reminder}
              onChange={() => setReminder((prev) => !prev)}
              className="sr-only peer"
            />
            <div className="w-10 h-6 bg-gray rounded-full peer peer-focus:ring-[#00BBBB] peer-checked:bg-[#00BBBB]"></div>
            <div className="absolute left-[4px] top-[4px] w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-full"></div>
          </label>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="w-full max-w-[345px] mx-auto flex items-center gap-4 justify-center gradient custom-shadow hover:shadow-none py-3 text-white rounded-[55px] hover:bg-[#009999] transition-colors"
        >
          Continue{"  "} <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default StudyPlan;