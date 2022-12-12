import React from "react";
import { NavLink } from "react-router-dom";

const Copyright = () => {
  return (
    <div className="py-4 text-textSecondary-900 bg-copyrightFooter-900">
      <div className="container mx-auto md:px-20 px-4">
        <div className="copytight__content flex justify-between items-center">
          <div className="copyright__left flex justify-between lg:justify-start items-center w-full">
            &copy; 2022{" "}
            <span className="lg:ml-8 text-2xl font-bold">Logo Here</span>
          </div>
          <div className="copyright__right font-semibold text-xs lg:text-base flex flex-wrap justify-center lg:justify-end items-center w-full">
            <NavLink to="/terms">Terms & Conditions</NavLink>
            <span className="mx-2">|</span>
            <NavLink to="/policy">Privacy Policy</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
