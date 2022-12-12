import Tippy from "@tippyjs/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Pcontact from "../photographer contact/Pcontact";
import PricingProfile from "../pricing/PricingProfile";
import ProjectsSample from "../projects/ProjectsSample";
import Path from "../Routes path/Path";
import Badge from "../../assets/blue.webp";
import HandpickedIcon from "../../assets/handpicked.png";
import About from "../About Details/About";
import Review from "../submit review/Review";

const SingleProfile = ({ scroll, project, about, review }) => {
  const [click, setclick] = useState(false);
  return (
    <section className="lg:pt-4">
      <div className="single__profile container mx-auto lg:px-20">
        <div className="hidden xl:block">
          <Path first="Home" second="Photographer" third="Profile" />
        </div>
        {/* Single Profile Start */}
        <div className="singleProfile__content lg:flex lg:my-6 lg:gap-8">
          {/* Left */}
          <div className="singleProfileContent__left lg:w-7/12 w-full">
            <div className="details">
              {/* Image */}
              <div className="details__img h-96 relative" id="image">
                <img
                  src="https://images.pexels.com/photos/1707446/pexels-photo-1707446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="h-96 w-full rounded-md"
                />
                <div className="handpicked">
                  <Tippy
                    theme="tomato"
                    content={<div className="w-64">Tooltip</div>}
                    placement={"right"}
                  >
                    <img
                      src={HandpickedIcon}
                      alt="handpic tooltip"
                      className="w-32 absolute lg:top-0 top-2 left-0"
                    />
                  </Tippy>
                </div>
              </div>

              {/* Deails */}
              <div className="photographer__details w-full bg-white shadow-md lg:pt-4 pt-4 mb-8">
                {/* Name */}
                <div className="photographerDetails__name w-full flex justify-between items-center px-6">
                  <div className="name">
                    <div className="only_name flex items-center gap-3">
                      <h5 className="text-xl text-textSecondary-900 font-bold">
                        THE MEMORY CAPTURE
                      </h5>

                      <div className="blue_badge">
                        <span>
                          <img src={Badge} alt="" className="w-5" />
                        </span>
                      </div>
                    </div>
                    <span className="text-sm text-textSecondary-900 font-medium hidden lg:block">
                      (Formerly Known as AJEET KHAN)
                    </span>
                  </div>
                  <div className="rating hidden lg:block">
                    <div className="overall__rating">
                      <span className="bg-textPrimary-900 px-4 py-2 text-white font-semibold">
                        <i className="fa-solid fa-star mr-2"></i>
                        5.0
                      </span>
                      <p className="mt-2 font-semibold text-textSecondary-900">
                        38 reviews
                      </p>
                    </div>
                  </div>
                </div>
                {/* Location */}
                <div className="location text-base text-textSecondary-900 my-4 px-6">
                  <i className="fa-solid fa-location-dot"></i>{" "}
                  <span className="font-medium ml-2">Lahore, Pakistan</span>{" "}
                  <NavLink to="map">
                    <span>(View on Map)</span>
                  </NavLink>
                </div>

                {/* Contact */}
                <NavLink to="/contact">
                  <div className="contact text-textPrimary-900 px-6">
                    <i className="fa-solid fa-phone"></i>
                    <span className="font-medium ml-2">Contact</span>
                  </div>
                </NavLink>

                {/* Listing */}

                <div className="listing bg-sectionBg-900 px-8 lg:py-6 py-4 mt-4 text-textBlack-900 flex items-center">
                  <div className="photos w-full border-r-2 cursor-pointer hidden lg:block">
                    <i className="fa-solid fa-image mr-2"></i>
                    <span>1055 Photos</span>
                  </div>
                  <div className="review block lg:hidden w-full border-r">
                    <div className="overall__rating">
                      <span className="bg-textPrimary-900 lg:px-4 lg:py-2 px-4 py-1 text-white font-semibold">
                        <i className="fa-solid fa-star lg:mr-2 mr-1"></i>
                        5.0
                      </span>
                      <p className="lg:mt-2 font-semibold text-textSecondary-900">
                        38 reviews
                      </p>
                    </div>
                  </div>
                  <div
                    className="photos w-full text-center border-r-2 cursor-pointer"
                    onClick={() => setclick(!click)}
                  >
                    <i
                      class={`fa-regular fa-heart mr-2 ${
                        click ? "text-textPrimary-900 fa-solid fa-heart" : ""
                      }`}
                    ></i>
                    <span>Shortlist</span>
                  </div>
                  <div className="photos w-full text-center border-r-2 cursor-pointer hidden lg:block">
                    <i class="fa-solid fa-pen-nib mr-2"></i>
                    <span>Write a Review</span>
                  </div>
                  <div className="photos w-full text-center cursor-pointer">
                    <i class="fa-solid fa-share-nodes mr-2"></i>
                    <span>Share</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Content For Mobile */}
            <div className="singleProfileContent__right block xl:hidden w-full">
              <PricingProfile />
              <Pcontact />
              <div className="report mt-6 text-textPrimary-900 text-center">
                <NavLink to="/report">
                  <span>
                    <i className="fa-solid fa-flag mr-3"></i>
                    Report Inaccurate Info
                  </span>
                </NavLink>
              </div>
            </div>

            {/* Section Scroll */}
            <div className="hidden lg:block">
              <div className="w-full bg-white shadow-md text-base font-semibold px-6 text-textSecondary-900 flex gap-12 mb-4">
                <div
                  className="project cursor-pointer py-4"
                  onClick={() => scroll(project)}
                >
                  <span>Project</span>
                </div>
                <div
                  className="project cursor-pointer py-4"
                  onClick={() => scroll(about)}
                >
                  <span>About</span>
                </div>
                <div
                  className="project cursor-pointer py-4"
                  onClick={() => scroll(review)}
                >
                  <span>Reviews</span>
                </div>
              </div>
            </div>

            {/* Projects Start Section*/}
            <div className="projects bg-white shadow-md mt-6" ref={project}>
              <div className="project__card">
                <ProjectsSample />
              </div>
            </div>
          </div>

          {/* About Section */}

          {/* Right */}

          {/* Pricing Content for Desktop */}
          <div className="singleProfileContent__right lg:w-5/12 w-full hidden lg:block">
            {/* Pricing Components */}
            <PricingProfile />

            {/* Contact Components */}
            <Pcontact />

            <div className="report mt-6 text-textPrimary-900 text-center">
              <NavLink to="/report">
                <span>
                  <i className="fa-solid fa-flag mr-3"></i>
                  Report Inaccurate Info
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto lg:px-20">
        {/* Projects Start Section*/}
        <div className="projects bg-white" ref={about}>
          <div className="project__card">
            <About />
          </div>
        </div>
        {/* Projects Start Section*/}
        <div className="projects bg-white" ref={review}>
          <div className="project__card">
            <Review heading="Reviews for THE MEMORY CAPTURE (38)" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProfile;
