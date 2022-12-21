import React from "react";
import { NavLink } from "react-router-dom";

const ShortListCard = ({ image, name, finalize }) => {
  return (
    <div className="w-full flex justify-between border-b border-b-paginationBg-900 pb-4 mb-4">
      {/* Left Imagee */}
      <div className="w-[20%] pt-[7px]">
        <img src={image} alt="hotel_image" className="w-28 h-16 rounded-md" />
      </div>

      {/* Right Content */}
      <div className="w-[80%]">
        {/* Heading */}
        <h1 className="text-lg text-textPrimary-900 font-semibold">{name}</h1>

        {/* Ratings */}
        <div className="text-sm mt-1">
          <i className="fa-solid fa-star text-[#FFD700]"></i>
          <i className="fa-solid fa-star text-[#FFD700]"></i>
          <i className="fa-solid fa-star text-[#FFD700]"></i>
          <i className="fa-solid fa-star text-[#FFD700]"></i>
          <i className="fa-solid fa-star text-[#FFD700]"></i>
          <span className="text-gray-600 ml-1 font-medium">4.9</span>
        </div>

        {/* Review and button */}
        <div
          className={`flex justify-between items-center pr-8 ${
            finalize ? "mt-0" : "mt-[6px]"
          }`}
        >
          <span className="text-[13px] text-gray-600">7 Reviews</span>
          {finalize && (
            <NavLink to="/photographer/profile">
              <button className="text-white text-sm bg-textPrimary-900 px-4 py-[6px] rounded-md font-medium uppercase">
                Finalize
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShortListCard;
