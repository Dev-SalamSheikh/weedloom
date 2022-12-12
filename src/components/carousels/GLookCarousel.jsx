import React from "react";

const GLookCarousel = ({ img, text }) => {
  return (
    <div className="w-full">
      <div className="GLookCarousel__content w-full d-flex justify-between items-center bg-white shadow-lg p-2">
        <div className="GLookCarousel__img overflow-hidden">
          <img
            src={img}
            alt=""
            className="h-60 hover:scale-125 duration-200 rounded-md"
          />
        </div>
        <div className="psearch__content mt-3 text-center">
          <a
            href="*"
            className="text-base text-textSecondary-900 font-bold hover:text-textPrimary-900 cursor-pointer duration-200"
          >
            {text}
          </a>
        </div>
      </div>
    </div>
  );
};

export default GLookCarousel;
