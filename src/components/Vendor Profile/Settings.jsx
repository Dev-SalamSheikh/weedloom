import React, { useState } from "react";

const Settings = () => {
  const [showPass, setShowPass] = useState(false);
  const [file, setFile] = useState([]);

  //   Reload Function
  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="py-10">
      <div className="w-full h-full flex flex-col lg:flex-row justify-between">
        {/* Avatar Option */}
        <div className="w-full lg:w-6/12 text-center my-6">
          <span className="text-[#333] text-lg lg:text-xl font-medium tracking-wide">
            Upload Your Brand Logo
          </span>

          {/* Image Upload */}
          <div className="flex justify-center lg:mt-10 mt-4">
            <label htmlFor="file" className="cursor-pointer">
              <div className="lg:w-48 lg:h-48 w-32 h-32 rounded-full bg-slate-100 border-paginationBg-900 border overflow-hidden">
                {file.length === 0 && (
                  <div className="w-full h-full relative flex justify-center items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/User_icon-cp.png/1200px-User_icon-cp.png"
                      alt="blank_avatar"
                      className="w-20 lg:w-28 opacity-50"
                    />
                  </div>
                )}

                {Array.from(file).map((img, i) => (
                  <img
                    key={i}
                    src={img ? URL.createObjectURL(img) : null}
                    alt="images"
                    className="w-full h-full"
                  />
                ))}
              </div>
            </label>
            <input
              type="file"
              id="file"
              accept=".png, .jpeg, .jpg"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files)}
            />
          </div>
        </div>

        {/* Form Content */}
        <div className="flex flex-col gap-y-2 lg:gap-y-8 justify-center items-center w-full lg:w-6/12 h-full mt-6 border-l">
          <h1 className="text-[#333] text-lg lg:text-xl font-medium">
            Change Password
          </h1>
          {/* Password Box */}
          <div className="w-full lg:px-10 px-4 mt-4 lg:mt-0">
            <label
              htmlFor="old"
              className="text-textSecondary-900 text-xs lg:text-sm font-medium tracking-wider"
            >
              OLD PASSWORD
            </label>
            {/* Input Box */}
            <div className="flex items-center gap-4 mt-[2px]">
              <input
                id="old"
                type={showPass ? "text" : "password"}
                className="border outline-none border-paginationBg-900 w-full py-1 lg:py-[10px] px-4 text-textSecondary-900 rounded-md font-semibold"
              />
              <i
                className={`fa-solid ${
                  showPass ? "fa-eye-slash" : "fa-eye"
                } text-xl text-textSecondary-900 cursor-pointer`}
                onClick={() => setShowPass(!showPass)}
              ></i>
            </div>
          </div>

          {/* New Password */}
          <div className="w-full lg:px-10 px-4">
            <label
              htmlFor="new"
              className="text-textSecondary-900 text-xs lg:text-sm font-medium tracking-wider"
            >
              NEW PASSWORD
            </label>
            {/* Input Box */}
            <div className="flex items-center gap-4 mt-[2px]">
              <input
                id="new"
                type={showPass ? "text" : "password"}
                className="border outline-none border-paginationBg-900 w-full py-1 lg:py-[10px] px-4 text-textSecondary-900 rounded-md font-semibold"
              />
              <i
                className={`fa-solid ${
                  showPass ? "fa-eye-slash" : "fa-eye"
                } text-xl text-textSecondary-900 cursor-pointer`}
                onClick={() => setShowPass(!showPass)}
              ></i>
            </div>
          </div>

          {/*Confirm New Password */}
          <div className="w-full lg:px-10 px-4">
            <label
              htmlFor="confirm"
              className="text-textSecondary-900 text-xs lg:text-sm font-medium tracking-wider"
            >
              CONFIRM PASSWORD
            </label>
            {/* Input Box */}
            <div className="flex items-center gap-4 w-full mt-[2px]">
              <input
                id="confirm"
                type={showPass ? "text" : "password"}
                className="border outline-none border-paginationBg-900 w-full py-1 lg:py-[10px] px-4 text-textSecondary-900 rounded-md font-semibold"
              />
              <i
                className={`fa-solid ${
                  showPass ? "fa-eye-slash" : "fa-eye"
                } text-xl text-textSecondary-900 cursor-pointer`}
                onClick={() => setShowPass(!showPass)}
              ></i>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full lg:mt-16 mt-8 flex gap-4 lg:gap-8 justify-center">
        <button className="bg-textPrimary-900 text-white font-semibold text-xs lg:text-sm w-max px-6 lg:px-0 lg:w-[15%] py-3 rounded-md">
          SAVE CHANGES
        </button>
        <button
          className="bg-[#d0d0d0] text-white font-semibold text-xs lg:text-sm w-max px-6 lg:px-0 lg:w-[15%] py-3 rounded-md"
          onClick={reload}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default Settings;
