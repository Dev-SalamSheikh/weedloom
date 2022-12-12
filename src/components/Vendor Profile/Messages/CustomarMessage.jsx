import React from "react";

const CustomarMessage = ({ text, img }) => {
  return (
    <div className="mt-4 flex gap-3">
      {/* Avatar */}
      <div className="w-1/12">
        <img
          src={img}
          alt="profile"
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>
      <div className="flex justify-between items-center w-11/12">
        {/* Text */}
        <div className="max-w-[70%] bg-[#E4E6EB] text-textSecondary-900 text-sm py-2 px-4 rounded-lg">
          <p>{text}</p>
        </div>
        {/* Time */}
        <div className="text-end">
          <span className="text-gray-500 text-xs font-medium">7:02 PM</span>
        </div>
      </div>
    </div>
  );
};

export default CustomarMessage;
