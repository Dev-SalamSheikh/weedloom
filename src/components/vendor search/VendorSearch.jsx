import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const VendorSearch = () => {
  // State
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  // Options
  const options = [
    { key: 1, value: "Sialkot" },
    { key: 2, value: "Faisalabad" },
    { key: 3, value: "Rawalpindi" },
    { key: 4, value: "Multan" },
    { key: 5, value: "Gujranwala" },
    { key: 6, value: "Quetta" },
  ];

  // Input Field OnChange Function
  const changeInputValue = (e) => {
    setValue(e.target.value);
  };

  const selectValue = (option) => {
    setValue(option);
    setOpen(!open);
  };

  return (
    // Vendor Search Content Start
    <div className="vendor_search bg-white lg:pt-20 lg:pb-24 hidden lg:block">
      <div className="vendor_search_container container mx-auto lg:px-20 px-4">
        <div className="vendor_search_content border border-textPrimary-900 pt-14">
          {/* Heading */}
          <div className="heading w-full flex justify-center mt-[-70px]">
            <h1
              className="bg-white w-max px-10 text-3xl font-semibold text-textBlack-900"
              style={{ color: "#000" }}
            >
              Find the best wedding vendors with thousands of trusted reviews
            </h1>
          </div>

          {/* Input Fields */}
          <div className="search_options w-full py-10">
            <div className="dropdown__container flex justify-center my-5 w-full">
              <div className="vendor__container w-full justify-center flex items-center">
                {/* Text */}
                <div className="text w-max mr-5">
                  <span className="text-xl">I'm Looking For</span>
                </div>
                {/* Input Dropdown */}
                <div className="vendor__container__wrapper relative w-3/12 border-b border-textPrimary-900">
                  <div
                    className="input__container"
                    onClick={() => setOpen(!open)}
                  >
                    <input
                      type="text"
                      placeholder="Select Vendor"
                      value={value}
                      onChange={changeInputValue}
                      className="py-3 pr-3 text-xl w-full outline-none border-none text-black cursor-pointer"
                    />
                    <div className="input__arrow__container absolute right-3 bottom-3 text-black">
                      <i
                        className={`fa-solid fa-chevron-down cursor-pointer ${
                          open ? "rotate-180" : ""
                        }`}
                      ></i>
                    </div>
                  </div>
                  {open && (
                    <div className="dropdown border border-textPrimary-900 box-border absolute w-full">
                      {options
                        .filter((item) =>
                          item.value.toLocaleLowerCase().includes(value)
                        )
                        .map((opt) => (
                          <div
                            className="bg-white text-black p-2 flex items-center cursor-pointer hover:bg-gray-300 text-sm"
                            key={opt.key}
                            onClick={() => selectValue(opt.value)}
                          >
                            {opt.value}
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Button div */}
          <div className="button_div flex justify-center">
            <div className="button bg-white w-max h-max px-8 mb-[-20px]">
              <NavLink to="/search">
                <button className="bg-textPrimary-900 text-white px-12 py-3 rounded-full font-medium">
                  Search
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    // Vendor Search Content End
  );
};

export default VendorSearch;
