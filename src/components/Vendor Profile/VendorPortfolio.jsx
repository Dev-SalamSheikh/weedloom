import AddImage from "./addNewAlbum.jpg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const VendorPortfolio = () => {
  // State
  const [certified, setCertified] = useState(false);

  return (
    <div>
      {/* Heading */}
      <div className="bg-sectionBg-900 px-2 lg:px-6 py-3 flex justify-between items-center">
        {/* Left */}
        <div>
          <NavLink to="/vendor/profile/projects">
            <h2 className="text-textSecondary-900 lg:text-lg cursor-pointer">
              {" "}
              <i className="fa-solid fa-arrow-left-long mr-1"></i> Portfolio
            </h2>
          </NavLink>
        </div>

        {/* Right */}
        <div>
          <NavLink to="/imageupload/guideline">
            <span className="text-xs lg:text-sm font-medium text-textPrimary-900 cursor-pointer">
              View image upload guidelines
            </span>
          </NavLink>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 lg:px-6 pt-4 pb-14">
        {/* Check Items */}
        <div>
          <div className="flex gap-4 items-center">
            <div>
              <input
                className="accent-textPrimary-900 outline-none"
                type="checkbox"
                id="certified"
                value={certified}
                checked={certified}
                onChange={(e) => setCertified(e.target.checked)}
              />
            </div>
            <div>
              <label
                className={`text-xs lg:text-sm font-medium ${
                  certified ? "text-[#27AE5F]" : "text-red-600"
                }`}
                htmlFor="certified"
              >
                I certify that the work uploaded is my own / is the copyright of
                our firm. I understand that any work found to be someone else's
                would be removed immediately, and action could be taken.
              </label>
            </div>
          </div>
        </div>

        <NavLink to={certified ? "/vendor/profile/projects/image-upload" : ""}>
          <div
            className={`mt-16 w-full lg:w-60 h-64 ${
              certified ? "cursor-pointer" : "cursor-not-allowed"
            } text-white font-semibold flex justify-center items-center text-center`}
            style={{
              background: `url(${AddImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <span>
              <i className="fa-solid fa-plus"></i>
              <p>Add new image</p>
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default VendorPortfolio;
