import React from "react";
import { NavLink } from "react-router-dom";

const PvenueCarousel = ({
  img,
  name,
  link1,
  link2,
  link3,
  link4,
  link5,
  link1Text,
  link2Text,
  link3Text,
  link4Text,
}) => {
  return (
    <div className="popular lg:h-36 h-full mb-4">
      <div className="popular__content flex justify-between gap-6">
        <div className="image w-full">
          <img src={img} alt="popular" className="h-full w-full rounded-md" />
        </div>
        <div className="popular__content w-full flex flex-col">
          <h5 className="text-textSecondary-900 font-bold">{name}</h5>
          <div className="popular__links text-textPrimary-900">
            <div className="single__links my-1">
              <div className="fristTwoAnswer flex gap-3 items-start">
                <NavLink to={link1}>
                  <span className="hover:font-semibold">
                    {link1Text ? link1Text : "Link One"} |
                  </span>
                </NavLink>
                <NavLink to={link2}>
                  <span className="hover:font-semibold">
                    {link2Text ? link2Text : "Link Two"} |
                  </span>
                </NavLink>
              </div>

              <div className="secondTwoAnswer flex gap-3 items-start">
                <NavLink to={link3}>
                  <span className="hover:font-semibold">
                    {link3Text ? link3Text : "Link Three"} |
                  </span>
                </NavLink>
                <NavLink to={link4}>
                  <span className="hover:font-semibold">
                    {link4Text ? link4Text : "Link Four"} |
                  </span>
                </NavLink>
              </div>
            </div>
            <NavLink to={link5}>
              <span className="underline hover:font-semibold">
                All Location
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PvenueCarousel;
