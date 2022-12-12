import React, { useState } from "react";
// import Rate from "./Rate";
import ReactStars from "react-rating-stars-component";

const Review = ({ review, heading }) => {
  const [starRate, setStarRate] = useState(0);

  const secondExample = {
    size: 30,
    count: 5,
    color: "#DDD",
    activeColor: "#e72e77",
    isHalf: true,
    emptyIcon: <i className="fa-regular fa-star" />,
    halfIcon: <i className="fa-solid fa-star-half-stroke" />,
    filledIcon: <i className="fa-solid fa-star" />,
    onChange: (newValue) => {
      setStarRate(newValue);
    },
  };

  return (
    // Rating Section Start
    <section ref={review}>
      <div className="review__container bg-white shadow-md border-b border-paginationBg-900">
        <div className="review__top__content border-b border-paginationBg-900">
          <div className="about__heading px-5 py-4 text-lg text-center lg:text-start lg:text-2xl font-medium text-textBlack-900 border-b border-paginationBg-900 flex justify-between items-center">
            {/* Heading Text */}
            <div className="text">
              <h5 style={{ fontSize: "22px" }}>{heading}</h5>
            </div>
            {/* Social Icon */}

            <div className="heading_right lg:block hidden">
              <div className="social_links flex items-center gap-4">
                <div className="facebook w-8 h-8 border flex items-center justify-center p-1">
                  <a href="https://www.facebook.com">
                    <i
                      className="fa-brands fa-square-facebook"
                      style={{ color: "#4267B2" }}
                    ></i>
                  </a>
                </div>
                <div className="twitter w-8 h-8 border flex items-center justify-center p-1">
                  <a href="https://www.twitter.com">
                    <i
                      className="fa-brands fa-twitter"
                      style={{ color: "#1DA1F2" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="review_bottom_content lg:flex">
          {/* Left Div */}
          <div className="rating_distribution lg:w-4/12 border-r border-paginationBg-900 px-5 py-8 lg:block hidden">
            <div className="progressbar">
              <div className="rating__distributon__heading flex items-center justify-between">
                <div>
                  <span className="text-textBlack-900 font-semibold">
                    Rating Distribution
                  </span>
                </div>
                <div className="review_box">
                  <div className="rating">
                    <div className="overall__rating">
                      <span className="bg-textPrimary-900 px-4 py-2 text-white font-semibold">
                        <i className="fa-solid fa-star mr-2"></i>
                        5.0
                      </span>
                      <p className="mt-2 font-semibold text-textSecondary-900">
                        12 reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rating__distribution_content mt-3 text-textSecondary-900">
                {/* 5 Star */}
                <div className="5star flex items-center gap-4 mb-3">
                  <div className="checkbox w-1/12">
                    <input
                      type="checkbox"
                      className="scale-125 accent-textPrimary-900"
                    />
                  </div>
                  <div className="icon w-1/12 flex items-center justify-center">
                    <span>5</span> <i className="fa-solid fa-star ml-1"></i>
                  </div>
                  <div class="progressbar w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      class="bg-textPrimary-900 h-2.5 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                  <div className="totalReview w-3/12">
                    <span className="text-sm">8 reviews</span>
                  </div>
                </div>

                {/* 4 Star */}
                <div className="4star flex items-center gap-4 mb-3">
                  <div className="checkbox w-1/12">
                    <input
                      type="checkbox"
                      className="scale-125 accent-textPrimary-900"
                    />
                  </div>
                  <div className="icon w-1/12 flex items-center justify-center">
                    <span>4</span> <i className="fa-solid fa-star ml-1"></i>
                  </div>
                  <div class="progressbar w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      class="bg-textPrimary-900 h-2.5 rounded-full"
                      style={{ width: "15%" }}
                    ></div>
                  </div>
                  <div className="totalReview w-3/12">
                    <span className="text-sm">3 reviews</span>
                  </div>
                </div>

                {/* 3 Star */}
                <div className="3star flex items-center gap-4 mb-3">
                  <div className="checkbox w-1/12">
                    <input
                      type="checkbox"
                      className="scale-125 accent-textPrimary-900"
                    />
                  </div>
                  <div className="icon w-1/12 flex items-center justify-center">
                    <span>3</span> <i className="fa-solid fa-star ml-1"></i>
                  </div>
                  <div class="progressbar w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      class="bg-textPrimary-900 h-2.5 rounded-full"
                      style={{ width: "5%" }}
                    ></div>
                  </div>
                  <div className="totalReview w-3/12">
                    <span className="text-sm">1 reviews</span>
                  </div>
                </div>

                {/* 2 Star */}
                <div className="2star flex items-center gap-4 mb-3">
                  <div className="checkbox w-1/12">
                    <input
                      type="checkbox"
                      className="scale-125 accent-textPrimary-900"
                    />
                  </div>
                  <div className="icon w-1/12 flex items-center justify-center">
                    <span>2</span> <i className="fa-solid fa-star ml-1"></i>
                  </div>
                  <div class="progressbar w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      class="bg-textPrimary-900 h-2.5 rounded-full"
                      style={{ width: "3%" }}
                    ></div>
                  </div>
                  <div className="totalReview w-3/12">
                    <span className="text-sm">0 reviews</span>
                  </div>
                </div>

                {/* 1 star */}
                <div className="1star flex items-center gap-4 mb-3">
                  <div className="checkbox w-1/12">
                    <input
                      type="checkbox"
                      className="scale-125 accent-textPrimary-900"
                    />
                  </div>
                  <div className="icon w-1/12 flex items-center justify-center">
                    <span>1</span> <i className="fa-solid fa-star ml-1"></i>
                  </div>
                  <div class="progressbar w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      class="bg-textPrimary-900 h-2.5 rounded-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                  <div className="totalReview w-3/12">
                    <span className="text-sm">0 reviews</span>
                  </div>
                </div>
              </div>
            </div>
            <span className="text-sm text-textSecondary-900">
              <i>Last Review Update on 22 Aug 2022</i>
            </span>
          </div>

          {/* Right Div */}
          <div className="rating_form w-full lg:w-8/12 px-4 lg:px-12 py-6">
            <div className="rating_form_content">
              {/* Heading */}
              <div className="rating__form_heading">
                <h5 className="text-base text-textBlack-900 font-semibold">
                  Review THE MEMORY CAPTURE
                </h5>
              </div>
              {/* Subheading */}
              <div className="rating__form__subheading lg:my-6 mt-4 mb-1">
                <h6 className="text-textBlack-900 font-semibold">
                  Rate Vendor*
                </h6>
              </div>

              {/* Form Content */}
              <div className="form__start">
                <div className="checkbox lg:flex lg:justify-between w-full">
                  <div className="flex gap-3 items-center justify-center">
                    <ReactStars {...secondExample} />
                    <span className="text-textSecondary-900 font-semibold text-lg">
                      {starRate} Star
                    </span>
                  </div>
                  <div className="hidden lg:block">
                    <div className="flex gap-4 items-center">
                      <input
                        type="checkbox"
                        className="scale-125 accent-textPrimary-900"
                      />
                      <span>Share on Facebook</span>
                    </div>
                  </div>
                </div>

                <div className="textarea mt-6 mb-2 lg:my-6">
                  <textarea
                    className="w-full border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 border p-2"
                    id=""
                    cols="30"
                    rows="7"
                    placeholder="Tell us about your experience*"
                  ></textarea>
                </div>
                <div className="input_area">
                  <input
                    type="text"
                    placeholder="How much do you spend on this vendor?"
                    className="p-3 w-full border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 border"
                  />
                </div>

                <div className="button_area mt-4 text-center lg:text-end">
                  <button className="border border-paginationBg-900 px-4 py-2 text-textSecondary-900">
                    Add Photos
                  </button>
                  <button className="bg-textPrimary-900 px-4 py-2 text-white ml-4">
                    Submit Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
