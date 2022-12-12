import React from "react";
import { NavLink } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Badge from "../../assets/blue.webp";
import Handpicked from "../../assets/handpicked.png";
import tooltip from "../../assets/tooltip.png";

const WpCardGrid = ({
  img,
  name,
  location,
  category,
  price,
  review,
  totalReview,
  tooltip1,
  tooltip2,
}) => {
  return (
    <div className="wpCardGrid w-full md:w-4/12 mb-6 px-3 pt-2 pb-4 hover:bg-white hover:shadow-md duration-200 rounded-md">
      <NavLink to="profile">
        <div className="wpCardGrid__content">
          {/* Image */}

          <div className="image relative">
            <img
              src={img}
              alt="weeding__photographer"
              className="w-full h-56 rounded-md"
            />
            <div className="handpicked">
              <Tippy
                theme="tomato"
                content={<div className="w-64">{tooltip1}</div>}
                placement={"right"}
              >
                <img
                  src={Handpicked}
                  alt="handpic tooltip"
                  className="w-28 absolute top-0 left-0"
                />
              </Tippy>
            </div>
            <div className="about">
              <Tippy
                theme="tomato"
                content={<div className="w-64">{tooltip2}</div>}
                placement={"right"}
              >
                <img
                  src={tooltip}
                  alt="handpic tooltip"
                  className="w-6 absolute bottom-4 right-2"
                />
              </Tippy>
            </div>

            <div className="rating text-base text-white bg-textPrimary-900 w-max p-1 font-bold absolute top-2 right-2">
              <i className="fa-solid fa-star"></i>
              <span>5.0</span>
            </div>
          </div>

          {/* Content Details */}
          <div className="wpCardGrid__content_details">
            {/* Name */}
            <div className="name mt-2 mb-1 flex gap-2 items-center">
              <h5 className="text-lg font-bold text-textSecondary-900">
                {name}
              </h5>
              <img src={Badge} alt="" className="w-5 h-5" />
            </div>
            {/* Location */}
            <div className="location text-sm text-dateColor-900 my-1">
              <i className="fa-solid fa-location-dot"></i>{" "}
              <span className="font-medium ml-1">{location}</span>
            </div>

            {/* Category */}
            <div className="package">
              <span className="text-package text-sm font-medium text-dateColor-900">
                {category}
              </span>
            </div>

            {/* Price */}
            <div className="price flex gap-2 md:gap-2 lg:gap-6 items-center flex-wrap my-1">
              <div className="flex items-center">
                <span className="text-lg mr-2 font-semibold text-textPrimary-900">
                  Rs. {price}
                </span>
                <p className="text-sm text-textSecondary-900 font-medium">
                  per day
                </p>
              </div>
            </div>
            {/* Reviews */}
            <div className="flex items-center gap-1 mb-1">
              <i className="fa-solid fa-star text-textPrimary-900"></i>
              <span className="text-xl">{review}</span>{" "}
              <span className="text-sm">({totalReview} reviews)</span>
            </div>

            {/* Votes */}
            {/* <div className="tags flex gap-4 flex-wrap">
            <div>
              <span className="font-medium bg-tagsBackground-900 py-1 px-2 text-sm text-textSecondary-900">
                Professionalism: {vote1} Votes
              </span>
            </div>
            <div>
              <span className="font-medium bg-tagsBackground-900 py-1 px-2 text-sm text-textSecondary-900">
                Wedding Flims: {vote2} Votes
              </span>
            </div>
            <div>
              <NavLink to="/moretags">
                <span className="border-b text-sm text-dateColor-900 font-bold">
                  +1 more
                </span>
              </NavLink>
            </div>
          </div> */}
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default WpCardGrid;
