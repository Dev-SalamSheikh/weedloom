import React from "react";
import { NavLink } from "react-router-dom";

const VendorProjectContent = () => {
  return (
    <div>
      {/* Heading */}
      <div className="bg-sectionBg-900 px-4 py-3">
        <h2 className="text-textSecondary-900 lg:text-lg">Projects</h2>
      </div>

      {/* Content */}
      <div className="mt-8 px-4 pb-8">
        {/* Image */}

        {/* Navlinks */}
        <NavLink to="/vendor/profile/projects/portfolio">
          <div
            className="lg:w-72 w-full h-56 flex justify-center items-center cursor-pointer rounded-md"
            style={{
              background:
                "radial-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('https://img.freepik.com/free-photo/abstract-blur-wedding-hall_74190-5229.jpg?w=1380&t=st=1670178252~exp=1670178852~hmac=c1f6d7158f8e07a88aafb0278bf8ddab3cb1da46714147cc1983a74b8ff52247')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <span className="text-xl lg:text-2xl text-white font-medium">
              Portfolio
            </span>
          </div>
        </NavLink>

        {/* Links */}
        <div className="mt-6">
          <NavLink to="/imageupload/guideline">
            <span className="text-sm font-medium text-textPrimary-900 cursor-pointer">
              View image upload guidelines
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default VendorProjectContent;
