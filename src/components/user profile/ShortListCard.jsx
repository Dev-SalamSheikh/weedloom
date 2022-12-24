import React from "react";
import { NavLink } from "react-router-dom";

const ShortListCard = ({ image, name, finalize, price }) => {
  return (
    <div className="w-full flex flex-wrap md:flex-nowrap justify-betwee items-center gap-4 border-b border-b-paginationBg-900 pb-4 mb-4">
      {/* Left Imagee */}
      <div className="md:w-[20%] w-full">
        <NavLink to="/photographer/profile">
          <img
            src={image}
            alt="hotel_image"
            className="w-full h-32 md:w-36 md:h-24 rounded-md"
          />
        </NavLink>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-[80%]">
        {/* Heading */}
        <NavLink to="/photographer/profile">
          <h1 className="text-sm md:text-base text-textPrimary-900 font-semibold">
            {name}
          </h1>
        </NavLink>

        {/* Ratings */}
        <div className="text-xs md:text-sm mt-1">
          <i className="fa-solid fa-star text-[#FFD700]"></i>
          <i className="fa-solid fa-star text-[#FFD700]"></i>
          <i className="fa-solid fa-star text-[#FFD700]"></i>
          <i className="fa-solid fa-star text-[#FFD700]"></i>
          <i className="fa-solid fa-star text-[#FFD700]"></i>
          <span className="text-gray-600 ml-1 font-medium">4.9</span>
        </div>

        {/* Review and button */}
        <div>
          <span className="text-xs md:text-[13px] text-gray-600">
            7 Reviews
          </span>
        </div>

        {/* Price Per day */}
        <div
          className={`flex justify-between items-center md:pr-8 ${
            finalize ? "mt-0" : "mt-[6px]"
          }`}
        >
          <span className="text-xs font-medium text-textPrimary-900">
            RS {price} Per Day
          </span>

          {finalize && (
            <NavLink to="/photographer/profile">
              <button className="text-white text-xs md:text-sm bg-textPrimary-900 px-4 py-[6px] rounded-md font-medium uppercase">
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
