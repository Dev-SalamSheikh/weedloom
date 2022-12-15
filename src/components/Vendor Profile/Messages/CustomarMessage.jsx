import React from "react";

const CustomarMessage = ({ text, img }) => {
  return (
    <div className="mt-4 flex gap-2 md:gap-0">
      {/* Avatar */}
      <div className="w-max lg:w-1/12">
        <img
          src={img}
          alt="profile"
          className="lg:w-12 lg:h-12 w-8 h-8 rounded-full object-cover"
        />
      </div>
      <div className="flex justify-between items-center w-11/12">
        {/* Text */}
        <div className="max-w-[85%] lg:max-w-[70%] bg-[#E4E6EB] text-textSecondary-900 text-xs lg:text-sm py-2 px-4 rounded-lg">
          <p>{text}</p>
        </div>
        {/* Time */}
        <div className="text-end">
          <span className="text-gray-500 text-[10px] lg:text-xs font-medium">
            7:02 PM
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomarMessage;
