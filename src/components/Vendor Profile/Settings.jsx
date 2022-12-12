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
      <div className="w-full h-full flex flex-col items-center">
        {/* Content */}
        <h1 className="text-[#333] text-3xl font-medium">Password Change</h1>
        {/* Form Content */}
        <div className="flex flex-col gap-y-8 justify-center items-center w-full h-full mt-10">
          {/* Password Box */}
          <div className="w-5/12">
            <label
              htmlFor="old"
              className="text-textSecondary-900 text-sm font-medium tracking-wider"
            >
              OLD PASSWORD
            </label>
            {/* Input Box */}
            <div className="flex items-center gap-4 mt-[2px]">
              <input
                id="old"
                type={showPass ? "text" : "password"}
                className="border outline-none border-paginationBg-900 w-full py-[10px] px-4 text-textSecondary-900 rounded-md font-semibold"
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
          <div className="w-5/12">
            <label
              htmlFor="new"
              className="text-textSecondary-900 text-sm font-medium tracking-wider"
            >
              NEW PASSWORD
            </label>
            {/* Input Box */}
            <div className="flex items-center gap-4 mt-[2px]">
              <input
                id="new"
                type={showPass ? "text" : "password"}
                className="border outline-none border-paginationBg-900 w-full py-[10px] px-4 text-textSecondary-900 rounded-md font-semibold"
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
          <div className="w-5/12">
            <label
              htmlFor="confirm"
              className="text-textSecondary-900 text-sm font-medium tracking-wider"
            >
              CONFIRM PASSWORD
            </label>
            {/* Input Box */}
            <div className="flex items-center gap-4 w-full mt-[2px]">
              <input
                id="confirm"
                type={showPass ? "text" : "password"}
                className="border outline-none border-paginationBg-900 w-full py-[10px] px-4 text-textSecondary-900 rounded-md font-semibold"
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

        <div className="w-full text-center mt-6">
          <span className="text-textSecondary-900 text-sm font-bold tracking-wide">
            UPLOAD BRAND LOGO
          </span>

          {/* Image Upload */}
          <div className="flex justify-center mt-2">
            <label htmlFor="file" className="cursor-pointer">
              <div className="w-24 h-24 rounded-md bg-slate-200 border-paginationBg-900 border overflow-hidden">
                {file.length === 0 && (
                  <div className="w-full h-full relative flex justify-center items-center">
                    <img
                      src="http://cdn.onlinewebfonts.com/svg/img_212915.png"
                      alt="blank_avatar"
                      className="w-20 opacity-50"
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

          {/* Buttons */}
          <div className="w-full mt-6 flex gap-8 justify-center">
            <button className="bg-textPrimary-900 text-white font-bold w-[20%] py-3 rounded-md">
              SAVE CHANGES
            </button>
            <button
              className="bg-[#d0d0d0] text-white font-bold w-[20%] py-3 rounded-md"
              onClick={reload}
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
