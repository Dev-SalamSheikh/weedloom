import React from "react";
import { NavLink } from "react-router-dom";

const PackageDetails = ({ packageName, lastElem, path }) => {
  return (
    <div
      className={`price_segment px-4 pt-6 pb-2 ${
        lastElem === true ? "" : "border-b border-paginationBg-900"
      }`}
    >
      {/* Package Details Div */}
      <div className="details grid grid-cols-3 grid-rows-3 gap-4 w-full">
        {/* Details One */}
        <div className="candid mb-4">
          <h6 className="text-sm text-textSecondary-900 font-semibold">
            Details Number 1
          </h6>
          <span className="font-semibold text-sm text-dateColor-900">
            Information
          </span>
        </div>
        {/* Details Two */}
        <div className="Cinematography mb-4">
          <h6 className="text-sm text-textSecondary-900 font-semibold">
            Details 2
          </h6>
          <span className="font-semibold text-sm text-dateColor-900">
            Information
          </span>
        </div>

        {/* Details Three */}
        <div className="Studio mb-4">
          <h6 className="text-sm text-textSecondary-900 font-semibold">
            Details 3
          </h6>
          <span className="font-semibold text-sm text-dateColor-900">
            Information
          </span>
        </div>

        {/* Details Four */}
        <div className="pre mb-4">
          <h6 className="text-sm text-textSecondary-900 font-semibold">
            Details 4
          </h6>
          <span className="font-semibold text-sm text-dateColor-900">
            Information
          </span>
        </div>

        {/* Details Five */}
        <div className="albums">
          <h6 className="text-sm text-textSecondary-900 font-semibold">
            Details 5
          </h6>
          <span className="font-semibold text-sm text-dateColor-900">
            Information
          </span>
        </div>

        {/* Details Six */}
        <div className="Traditional">
          <h6 className="text-sm text-textSecondary-900 font-semibold">
            Details 6
          </h6>
          <span className="font-semibold text-sm text-dateColor-900">
            Information
          </span>
        </div>

        {/* Details Seven */}
        <div className="Traditional">
          <h6 className="text-sm text-textSecondary-900 font-semibold">
            Details 7
          </h6>
          <span className="font-semibold text-sm text-dateColor-900">
            Information
          </span>
        </div>

        {/* Details Eight */}
        <div className="Traditional">
          <h6 className="text-sm text-textSecondary-900 font-semibold">
            Details 8
          </h6>
          <span className="font-semibold text-sm text-dateColor-900">
            Information
          </span>
        </div>

        {/* Details Nine */}
        <div className="Traditional">
          <h6 className="text-sm text-textSecondary-900 font-semibold">
            Details 9
          </h6>
          <span className="font-semibold text-sm text-dateColor-900">
            Information
          </span>
        </div>
      </div>
      {/* Button Div */}
      <div className="btn w-full">
        <NavLink to={path}>
          <button className="bg-textPrimary-900 text-white w-full py-4 font-semibold text-base">
            Purchase {packageName} Package
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default PackageDetails;
