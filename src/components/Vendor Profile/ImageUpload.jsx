import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const ImageUpload = () => {
  // Image State
  const [files, setFiles] = useState([]);

  const removeImage = (index) => {
    const file = [...files];
    file.splice(index, 1);
    setFiles(file);
  };

  return (
    <div>
      {/* Heading */}
      <div className="bg-sectionBg-900 px-4 py-3">
        <NavLink to="/vendor/profile/projects/portfolio">
          <h2 className="text-textSecondary-900 lg:text-lg cursor-pointer">
            {" "}
            <i className="fa-solid fa-arrow-left-long mr-1"></i> Upload Images
            to Portfolio
          </h2>
        </NavLink>
      </div>

      {/* Upload Box */}
      <div className="w-full h-full mt-12 flex justify-center items-center">
        {/* Image Upload */}
        <label htmlFor="file" className="text-textSecondary-900 cursor-pointer">
          <div className="border-2 border-dashed border-paginationBg-900 w-max text-center pt-2 pb-6 px-10">
            <i className="fa-solid fa-cloud-arrow-up text-3xl"></i>
            <div className="my-4">
              <p className="text-sm mb-2">Max file size : 16 MB</p>
              <p className="text-sm mb-2">Accepted Formats: jpg, jpeg, png</p>
              <p className="text-sm mb-2">Max files: 40</p>
            </div>
            <div>
              <span className="bg-textPrimary-900 text-white px-7 text-sm py-2 rounded-full">
                Choose Files
              </span>
            </div>
          </div>
        </label>
        <input
          type="file"
          id="file"
          accept=".png, .jpeg, .jpg"
          multiple
          max={40}
          style={{ display: "none" }}
          onChange={(e) => setFiles(e.target.files)}
        />
      </div>

      {/* Preview Box */}
      <div className="mt-16 mb-4 mx-6 w-full flex flex-wrap items-center gap-4">
        {files.length > 0 &&
          Array.from(files)
            .slice(0, 40)
            .map((img, i) => {
              return (
                <div
                  key={i}
                  className="w-20 h-20 border-paginationBg-900 border p-1 relative"
                >
                  <img
                    src={img ? URL.createObjectURL(img) : null}
                    alt="images"
                    className="w-full h-full"
                  />

                  {/* close */}
                  <div
                    className="text-textPrimary-900 absolute top-[-10px] -right-[5px] cursor-pointer"
                    onClick={() => removeImage(i)}
                  >
                    <i className="fa-solid fa-square-xmark"></i>
                  </div>
                </div>
              );
            })}
        {/* Buttons */}
      </div>
      {files.length > 0 && (
        <div>
          <button
            className={`w-6/12  text-white py-4 text-sm ${
              files.length > 40
                ? "bg-[#F396BB] cursor-not-allowed"
                : "bg-textPrimary-900 cursor-pointer"
            }`}
            disabled={files.length > 40}
          >
            Upload Files
          </button>
          <button
            className={`w-6/12  text-white py-4 text-sm ${
              files.length < 40
                ? "bg-[#F396BB] cursor-not-allowed"
                : "bg-textPrimary-900 cursor-pointer"
            }`}
            disabled={files.length < 40}
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
