import React from "react";

const CoinBalance = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-80 bg-white shadow-md rounded-xl p-6 text-center">
        {/* Coin Balance Text */}
        <p className="text-gray-600 text-lg">
          You have <span className="text-teal-500 font-bold">250</span> coins.
        </p>

        {/* Buy More Button */}
        <button className="mt-6 w-full border-2 border-teal-500 text-teal-500 font-semibold py-2 rounded-full hover:bg-teal-50">
          Buy more
        </button>
      </div>
    </div>
  );
};

export default CoinBalance;
