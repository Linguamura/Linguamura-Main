import React from "react";

// eslint-disable-next-line react/prop-types
const Ecard = ({ title, image, description }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <img src={image} alt={title} className="w-[100%] object-cover rounded" />
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <div className="flex">
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      <button className="mt-4 px-4 py-2 bg-gradient-to-r from-[#04e2e2] to-[#00bbbb] text-[#ffffff] border md:flex h border-b-4 border-[#04e2e2] font-semibold rounded-md cursor-pointer">
      →
      </button>
      </div>
    </div>
  );
};

export default Ecard;
