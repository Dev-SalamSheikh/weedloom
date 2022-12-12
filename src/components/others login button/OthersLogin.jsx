import React from "react";
import { NavLink } from "react-router-dom";

const OthersLogin = () => {
  return (
    <div className="socialIcon flex items-center lg:justify-between lg:gap-8 gap-4 md:flex-nowrap flex-wrap">
      {/* Google Button */}
      <NavLink to="/" className="w-full">
        <div className="google border w-full py-3 gap-2 flex justify-center items-center cursor-pointer">
          <img src="./google.webp" alt="google_icon" className="w-6" />
          <span className="text-textSecondary-900 font-medium text-lg">
            Google
          </span>
        </div>
      </NavLink>
      {/* Facebook Button */}
      <NavLink to="/" className="w-full">
        <div className="facebook border w-full py-3 gap-2 flex justify-center items-center cursor-pointer">
          <img src="./facebook.webp" alt="google_icon" className="w-8" />
          <span className="text-textSecondary-900 font-medium text-lg">
            Facebook
          </span>
        </div>
      </NavLink>
    </div>
  );
};

export default OthersLogin;
