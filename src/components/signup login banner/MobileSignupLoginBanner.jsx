import React from "react";

const MobileSignupLoginBanner = ({ image }) => {
  return (
    <div className="mobileBanner w-full h-[25vh] bg-white">
      <div className="image_div h-full w-full relative">
        <img
          src={image}
          alt="mobileBannerIMage"
          className="w-full h-[25vh] bg-cover bg-center brightness-50"
        />
        <div className="content absolute bottom-4 left-4 flex flex-wrap pr-20">
          <h1 className="text-white text-xl font-semibold leading-8">
            Pakistan's Favourite Wedding Planning Plartform
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MobileSignupLoginBanner;
