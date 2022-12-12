import React from "react";

const ExploreHeading = ({ text }) => {
  return (
    <div>
      <div className="heading flex flex-col lg:text-center text-start items-center mb-8">
        <h1 className="text-3xl font-bold" style={{ color: "000" }}>
          {text}
        </h1>
        <hr className="w-14 border border-textPrimary-900 mt-1" />
      </div>
    </div>
  );
};

export default ExploreHeading;
