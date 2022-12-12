import React from "react";

const WedSafeCarousel = ({ img, heading, content }) => {
  return (
    <div className="wedsafe__carousel bg-carouselBG-900 flex items-center justify-center gap-3 py-4 px-2 rounded-lg">
      <div className="carousel__left">
        <img className="w-full" src={img} alt="carousel__image" />
      </div>
      <div className="carousel__right text-textBlack-900">
        <h5 className="font-bold text-base">{heading}</h5>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
};

export default WedSafeCarousel;
