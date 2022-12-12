import React from "react";

const BlogExploreCard = ({ image, upperText, downText }) => {
  return (
    <div className="cards lg:w-full w-9/12">
      <div className="image relative">
        <img
          src={image}
          alt={upperText}
          className="brightness-50 w-full lg:h-[425px] h-[350px]"
        />
        <div className="overlay absolute top-0 right-0 w-full h-full p-4">
          <div className="child w-full h-full border-4 border-white flex flex-col justify-center items-center text-center">
            <h1 className="text-white text-3xl">
              {upperText} <br /> {downText}
            </h1>
            <a href="*" className="underline text-white text-sm mt-12">
              EXPLORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogExploreCard;
