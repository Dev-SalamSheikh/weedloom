import React, { useState } from "react";
import "./wCategorySingle.css";

const WcategorySingle = ({
  bgColor,
  title,
  subtitle,
  image,
  leftLink1,
  leftLink2,
  leftLink3,
  leftLink4,
  rightLink1,
  rightLink2,
  rightLink3,
  rightLink4,
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="md:w-6/12 h-full w-full">
      <div
        style={{ backgroundColor: `${bgColor}` }}
        className="wCategory__single__content "
      >
        <div className="flex items-center">
          <div className="content__left w-full pl-5 text-textSecondary-900">
            <div
              className="category__Heading flex items-center gap-5 lg:text-xl text-base font-semibold cursor-pointer"
              onClick={() => setToggle(!toggle)}
            >
              <h5>{title}</h5>
              <i className="fa-sharp fa-solid fa-chevron-down"></i>
            </div>
            <span className="text-sm">{subtitle}</span>
          </div>
          <div className="content__right w-full">
            <img src={image} alt="" className="w-full h-32" />
          </div>
        </div>
        {toggle && (
          <div className="w-full pl-5 text-black py-6 bg-white shadow-2xl text-xs lg:text-base">
            <div className="toggle__content flex align-center gap-28">
              <div className="left">
                <ul className="flex flex-col gap-2">
                  <li className="hover:font-semibold duration-200">
                    <a href="*">{leftLink1}</a>
                  </li>
                  <li className="hover:font-semibold duration-200">
                    <a href="*">{leftLink2}</a>
                  </li>
                  <li className="hover:font-semibold duration-200">
                    <a href="*">{leftLink3}</a>
                  </li>
                  <li className="hover:font-semibold duration-200">
                    <a href="*">{leftLink4}</a>
                  </li>
                </ul>
              </div>
              <div className="right">
                <ul className="flex flex-col gap-2">
                  <li className="hover:font-semibold duration-200">
                    <a href="*">{rightLink1}</a>
                  </li>
                  <li className="hover:font-semibold duration-200">
                    <a href="*">{rightLink2}</a>
                  </li>
                  <li className="hover:font-semibold duration-200">
                    <a href="*">{rightLink3}</a>
                  </li>
                  <li className="hover:font-semibold duration-200">
                    <a href="*">{rightLink4}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WcategorySingle;
