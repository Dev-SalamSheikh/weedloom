import React from "react";

const ContactCardSingle = () => {
  return (
    <div className="how_it_works_card w-full cursor-pointer">
      <div className="single_card_container lg:flex lg:gap-8">
        <div className="card1 group w-full">
          <div className="how_it_works_card_content bg-white group-hover:bg-textPrimary-900 duration-300 shadow-md lg:mt-0 px-4 flex flex-col items-center justify-center py-4 rounded-md">
            <div className="icon text-textPrimary-900 group-hover:text-white lg:text-6xl text-5xl">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="title my-3">
              <span className="text-lg text-textSecondary-900 group-hover:text-white font-bold lg:text-xl">
                Our Email
              </span>
            </div>
            <div className="step_details text-center">
              <p className="lg:text-lg text-base text-textSecondary-900 font-medium group-hover:text-white">
                test@example.com
              </p>
            </div>
          </div>
        </div>
        <div className="card1 group w-full">
          <div className="how_it_works_card_content bg-white group-hover:bg-textPrimary-900 duration-300 shadow-md mt-6 lg:mt-0 px-4 flex flex-col items-center justify-center py-4 rounded-md">
            <div className="icon text-textPrimary-900 group-hover:text-white lg:text-6xl text-5xl">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="title my-3">
              <span className="text-lg text-textSecondary-900 group-hover:text-white font-bold lg:text-xl">
                Our Location
              </span>
            </div>
            <div className="step_details text-center">
              <p className="lg:text-lg text-base text-textSecondary-900 font-medium group-hover:text-white">
                1200, Karachi Pakistan
              </p>
            </div>
          </div>
        </div>
        <div className="card1 group w-full">
          <div className="how_it_works_card_content bg-white group-hover:bg-textPrimary-900 duration-300 shadow-md mt-6 lg:mt-0 px-4 flex flex-col items-center justify-center py-4 rounded-md">
            <div className="icon text-textPrimary-900 group-hover:text-white lg:text-6xl text-5xl">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="title my-3">
              <span className="text-lg text-textSecondary-900 group-hover:text-white font-bold lg:text-xl">
                Our Phone
              </span>
            </div>
            <div className="step_details text-center">
              <p className="lg:text-lg text-base text-textSecondary-900 font-medium group-hover:text-white">
                +00000000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCardSingle;
