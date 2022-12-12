import Tippy from "@tippyjs/react";
import React from "react";
import { NavLink } from "react-router-dom";
import Badge from "../../assets/blue.webp";
import Handpicked from "../../assets/handpicked.png";

const WpCardList = ({
  tooltip1,
  image,
  name,
  rating,
  totalreviews,
  location,
  category,
  budget,
  vote1,
  vote2,
  shortdesc,
}) => {
  return (
    <div className="wpCardList w-full p-3 bg-white rounded-md shadow-sm mb-8">
      <NavLink to="profile">
        <div className="wpCard__list_content flex flex-wrap items-center">
          {/* Image Div */}
          <div className="wpCardlist__image w-5/12 relative">
            <img
              src={image}
              alt="photographer_image"
              className="h-60 w-full rounded-md"
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
          </div>

          {/* Card Content Details */}
          <div className="wpcardList__content w-7/12 px-6">
            <div className="name mt-2 mb-1 flex w-full justify-between items-center">
              <div className="namebadge flex gap-2 items-center">
                <h5 className="text-xl font-bold text-textSecondary-900">
                  {name}
                </h5>
                <img src={Badge} alt="" className="w-5 h-5" />
              </div>

              {/* Reviews */}
              <div className="flex items-center gap-1">
                <i className="fa-solid fa-star text-textPrimary-900"></i>
                <span className="text-xl">{rating}</span>{" "}
                <span className="text-sm">({totalreviews} reviews)</span>
              </div>
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
            <div className="price flex gap-2 md:gap-2 lg:gap-6 items-center flex-wrap mb-2">
              <div className="flex items-center">
                <span className="text-xl mr-2 font-semibold text-textPrimary-900">
                  Rs. {budget}
                </span>
                <p className="text-sm text-textSecondary-900 font-medium">
                  per day
                </p>
              </div>
            </div>

            {/* Votes */}
            <div className="tags flex gap-4 flex-wrap">
              <div className="cursor-pointer">
                <span className="font-medium bg-tagsBackground-900 py-1 px-2 text-sm text-textSecondary-900">
                  Professionalism: {vote1} Votes
                </span>
              </div>
              <div className="cursor-pointer">
                <span className="font-medium bg-tagsBackground-900 py-1 px-2 text-sm text-textSecondary-900">
                  Wedding Flims: {vote2} Votes
                </span>
              </div>
              <div className="cursor-pointer">
                <NavLink to="/moretags">
                  <span className="border-b text-sm text-dateColor-900 font-bold">
                    +2 more
                  </span>
                </NavLink>
              </div>
            </div>

            {/* Photographer short summary */}
            <div className="details h-6 w-full overflow-hidden my-2">
              <span className="text-sm font-medium text-dateColor-900">
                {shortdesc}
              </span>
            </div>

            {/* Sheild */}
            {/* 
          <div className="isSafe flex items-center">
            <img src="./wedsafe_icon.webp" alt="shield" className="w-6" />{" "}
            <span className="text-xs bg-carouselBG-900 text-vaccinedText-900 px-1 font-bold">
              VACCINATED
            </span>
          </div> */}

            {/* Button */}

            <div className="button__div w-full flex justify-end">
              <NavLink to="contact">
                <button className="bg-textPrimary-900 font-medium text-white py-3 px-3 rounded-md text-base hover:bg-btnHover-900 duration-300">
                  Send Message
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default WpCardList;
