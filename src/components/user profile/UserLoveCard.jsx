import React from "react";

const UserLoveCard = ({ image, authorimg, authorname }) => {
  return (
    <div className="w-full">
      {/* Heading */}
      <div className="p-4 border-b border-b-paginationBg-900">
        <h2 className="text-sm lg:text-base tracking-widest text-textSecondary-900 leading-none">
          10 Dec, 2022
        </h2>
      </div>

      {/* Content */}
      <div className="m-2 lg:m-8 border border-paginationBg-900 rounded-sm">
        {/* Image */}
        <div className="m-2 lg:m-4">
          <img
            src={image}
            alt=""
            className="h-[300px] lg:h-[500px] w-full lg:w-6/12 object-cover rounded-md mx-auto"
          />
        </div>

        {/* Author */}
        <div className="mx-4 mt-6 mb-4 flex items-center gap-4">
          <img
            src={authorimg}
            alt="avatar"
            className="w-10 h-10 object-cover rounded-full"
          />
          <div>
            <p className="text-xs text-textSecondary-900 font-bold">
              {" "}
              <span className="text-textPrimary-900 font-medium">by</span>{" "}
              {authorname}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoveCard;
