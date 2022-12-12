import React from "react";
import { NavLink } from "react-router-dom";

const SubmitWedding = ({ background }) => {
  return (
    // Submit Wedding Section Start
    <div className="submit_wedding w-full lg:mt-16 my-8 lg:mb-0">
      {/* Main Container */}
      <div
        className="content h-full w-full lg:flex lg:items-center lg:flex-nowrap flex-wrap bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
        url(${background})`,
        }}
      >
        {/* Left Side */}
        <div className="left w-full bg-center text-center text-white h-[400px]">
          <div className="left_content lg:py-24 pt-24 pb-4 px-8">
            <h1 className="text-2xl lg:text-4xl font-semibold">
              Share your own wedding to feature on WMG.
            </h1>

            <div className="button_div my-20">
              <NavLink to="/submit">
                <button className="bg-white text-textPrimary-900 px-10 py-4 lg:py-6 lg:px-16 rounded-full">
                  Submit Wedding
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="right w-full bg-center text-center text-white h-[400px]">
          <div className="right_content lg:py-24 pt-4 px-8">
            <h1 className="text-2xl lg:text-4xl font-semibold">
              Get more wedding ideas in your inbox
            </h1>
            <div className="input_box flex justify-center my-8">
              <div className="bordered border border-white w-full lg:w-6/12 px-2">
                <input
                  type="email"
                  required
                  placeholder="Enter Your Email"
                  className="w-full py-2 border-none outline-none bg-transparent text-white font-medium placeholder-white"
                />
              </div>
            </div>
            <div className="button_div">
              <NavLink to="/know-more">
                <button className="text-white font-semibold bg-textPrimary-900 py-4 px-10 rounded-full">
                  I want to know more
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    // Submit Wedding Section End
  );
};

export default SubmitWedding;
