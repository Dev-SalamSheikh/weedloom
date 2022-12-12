import React from "react";
import { NavLink } from "react-router-dom";

const LatestReview = ({ avatar, category, shortReview, name, date }) => {
  return (
    <div className="latest__review bg-white shadow-lg lg:shadow-md p-8 mb-8">
      <div className="latest__review_card flex flex-wrap lg:flex-nowrap">
        <div className="review__image lg:w-1/12 w-full flex justify-center mb-4 lg:mb-0">
          <img
            src={avatar}
            alt="userImage"
            className="w-10 h-10 lg:h-20 lg:w-20 rounded-full ring-4 ring-textPrimary-900"
          />
        </div>
        <div className="review__content lg:w-11/12 w-full lg:text-start text-center">
          <h5 className="mb-2 font-semibold text-base text-textSecondary-900">
            {category}
          </h5>
          <div className="review__desc overflow-hidden flex mb-2 items-center">
            <div className="review__desc_content h-4 text-sm text-textSecondary-900">
              <p>{shortReview}</p>
            </div>
            <NavLink to="/reviewdetails">
              <span className="text-dateColor-900 font-bold">...more</span>
            </NavLink>
          </div>
          <div className="auhtor">
            <p className="text-sm text-dateColor-900 font-medium">
              Reviewd By: <span>{name}</span> | <span>{date}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestReview;
