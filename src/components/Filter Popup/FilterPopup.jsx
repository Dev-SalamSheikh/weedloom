import React, { useState } from "react";

const FilterPopup = ({ toggleFilter }) => {
  const [allCities, setAllCities] = useState(false);
  const [days, setDays] = useState(false);
  const [services, setServices] = useState(false);
  const [budget, setBudget] = useState(false);
  const [rating, setRating] = useState(false);
  const [review, setReview] = useState(false);
  return (
    <div className="filter_popups h-screen overflow-y-scroll w-screen bg-white text-textSecondary-900 z-50 fixed top-0 right-0">
      <div className="filter_popups_content">
        {/* Heading */}
        <div className="heading p-4 bg-textPrimary-900 text-white font-bold flex justify-between items-center">
          <div className="left flex items-center gap-4">
            <i
              className="fa-solid fa-xmark text-2xl cursor-pointer"
              onClick={toggleFilter}
            ></i>
            <span>Vendor Filters</span>
          </div>
          <div className="right">
            <span>Reset</span>
          </div>
        </div>

        {/* Content */}
        <div className="content">
          {/* All Cities */}
          <div className="all_cities p-4 border-b border-paginationBg-900">
            <div
              className="subHeading flex items-center justify-between cursor-pointer"
              onClick={() => setAllCities(!allCities)}
            >
              <span>All Cities</span>
              <i
                className={`fa-solid fa-caret-down text-textSecondary-900 ${
                  allCities ? "rotate-180" : ""
                }`}
              ></i>
            </div>
            {allCities && (
              <div className="cities mt-4 flex flex-col gap-4 text-sm">
                <p>Lahore</p>
                <p>Lahore</p>
                <p>Lahore</p>
                <p>Lahore</p>
                <p>Lahore</p>
                <p>Lahore</p>
                <p>Lahore</p>
                <p>Lahore</p>
                <p>Lahore</p>
                <p>Lahore</p>
              </div>
            )}
          </div>

          {/* No of Days */}
          <div className="all_cities p-4 border-b border-paginationBg-900">
            <div
              className="subHeading flex items-center justify-between cursor-pointer"
              onClick={() => setDays(!days)}
            >
              <div className="title">
                <span>No of Days</span>
                <p className="text-sm">1 day</p>
              </div>
              <i
                className={`fa-solid fa-caret-down text-textSecondary-900 ${
                  days ? "rotate-180" : ""
                }`}
              ></i>
            </div>
            {days && (
              <div className="cities mt-4 flex flex-col gap-4 text-sm">
                <form className="flex flex-col gap-y-2">
                  <div>
                    <input
                      type="radio"
                      id="one_day"
                      name="days"
                      value="1 Day"
                      className="scale-125"
                    />
                    <label className="pl-2" htmlFor="one_day">
                      1 Day
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="two_days"
                      name="days"
                      value="2 Days"
                      className="scale-125"
                    />
                    <label className="pl-2" htmlFor="two_days">
                      2 Days
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="three_days"
                      name="days"
                      value="3 Days"
                      className="scale-125"
                    />
                    <label className="pl-2" htmlFor="three_days">
                      3 Days
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="four_days"
                      name="days"
                      value="4 Days"
                      className="scale-125"
                    />
                    <label className="pl-2" htmlFor="four_days">
                      4 Days
                    </label>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Services */}
          <div className="all_cities p-4 border-b border-paginationBg-900">
            <div
              className="subHeading flex items-center justify-between cursor-pointer"
              onClick={() => setServices(!services)}
            >
              <div className="title">
                <span>Services</span>
                <p className="text-sm">one_day_photo....</p>
              </div>
              <i
                className={`fa-solid fa-caret-down text-textSecondary-900 ${
                  services ? "rotate-180" : ""
                }`}
              ></i>
            </div>
            {services && (
              <div className="cities mt-4 flex flex-col gap-4 text-sm">
                <form className="flex flex-col gap-y-2">
                  <div>
                    <input
                      type="radio"
                      id="photo_video"
                      name="service"
                      value="Photo + Video"
                      className="scale-125"
                    />
                    <label className="pl-2" htmlFor="photo_video">
                      Photo + Video
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="photo_package"
                      name="service"
                      value="Photo Package"
                      className="scale-125"
                    />
                    <label className="pl-2" htmlFor="photo_package">
                      Photo Package
                    </label>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Budget */}
          <div className="all_cities p-4 border-b border-paginationBg-900">
            <div
              className="subHeading flex items-center justify-between cursor-pointer"
              onClick={() => setBudget(!budget)}
            >
              <div className="title">
                <span>Budget (Photo + Video)</span>
              </div>
              <i
                className={`fa-solid fa-caret-down text-textSecondary-900 ${
                  budget ? "rotate-180" : ""
                }`}
              ></i>
            </div>
            {budget && (
              <div className="cities mt-4 flex flex-col gap-4 text-sm">
                <form className="flex flex-col gap-y-2">
                  <div>
                    <input
                      type="checkbox"
                      id="fifty_thousand"
                      name="fifty_thousand"
                      value="50,000 Rs"
                    />
                    <label className="pl-2" htmlFor="fifty_thousand">
                      50,000 Rs
                    </label>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      id="fifty_thousand_to_one_lakh"
                      name="fifty_thousand_to_one_lakh"
                      value="50,000 Rs -  1,00,000 Rs"
                    />
                    <label
                      className="pl-2"
                      htmlFor="fifty_thousand_to_one_lakh"
                    >
                      50,000 Rs - 1,00,000 Rs
                    </label>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      id="one_lakh_to_one_fifty"
                      name="one_lakh_to_one_fifty"
                      value="1,00,000 Rs - 1,50,000 Rs"
                    />
                    <label className="pl-2" htmlFor="one_lakh_to_one_fifty">
                      1,00,000Rs - 1,50,000Rs
                    </label>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      id="one_fifty_to_two_lakh"
                      name="one_fifty_to_two_lakh"
                      value="1,50,000 Rs - 2,00,000 Rs"
                    />
                    <label className="pl-2" htmlFor="one_fifty_to_two_lakh">
                      1,50,000 Rs - 2,00,000 Rs
                    </label>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      id="more_than_two_lakhs"
                      name="more_than_two_lakhs"
                      value="2,00,000+ Rs"
                    />
                    <label className="pl-2" htmlFor="more_than_two_lakhs">
                      2,00,000+ Rs
                    </label>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Rating */}
          <div className="all_cities p-4 border-b border-paginationBg-900">
            <div
              className="subHeading flex items-center justify-between cursor-pointer"
              onClick={() => setRating(!rating)}
            >
              <div className="title">
                <span>Rating</span>
              </div>
              <i
                className={`fa-solid fa-caret-down text-textSecondary-900 ${
                  rating ? "rotate-180" : ""
                }`}
              ></i>
            </div>
            {rating && (
              <div className="cities mt-4 flex flex-col gap-4 text-sm">
                <form className="flex flex-col gap-y-2">
                  <div>
                    <input
                      type="radio"
                      id="all_ratings"
                      name="rating"
                      value="All Ratings"
                      className="scale-125"
                    />
                    <label className="pl-2" htmlFor="all_ratings">
                      All Ratings
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="rating_under-four"
                      name="rating"
                      value="Rated 4-"
                      className="scale-125"
                    />
                    <label className="pl-2" htmlFor="rating_under-four">
                      Rated 4-
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="rating_upto_four"
                      name="rating"
                      value="Rated 4+"
                      className="scale-125"
                    />
                    <label className="pl-2" htmlFor="rating_upto_four">
                      Rated 4+
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="rated_upto_four_five"
                      name="rating"
                      value="Rated 4.5+"
                      className="scale-125"
                    />
                    <label className="pl-2" htmlFor="rated_upto_four_five">
                      Rated 4.5+
                    </label>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Rating */}
          <div className="all_cities p-4 border-b border-paginationBg-900">
            <div
              className="subHeading flex items-center justify-between cursor-pointer"
              onClick={() => setReview(!review)}
            >
              <div className="title">
                <span>Review Count</span>
              </div>
              <i
                className={`fa-solid fa-caret-down text-textSecondary-900 ${
                  review ? "rotate-180" : ""
                }`}
              ></i>
            </div>
            {review && (
              <div className="cities mt-4 flex flex-col gap-4 text-sm">
                <form className="flex flex-col gap-y-2">
                  <div>
                    <input
                      type="radio"
                      id="under_five_riview"
                      name="review"
                      value="5- reviews"
                      className="scale-125"
                    />
                    <label className="pl-2" htmlFor="under_five_riview">
                      5- reviews
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="five_plus_review"
                      name="review"
                      value="5+ reviews"
                      className="scale-125"
                    />
                    <label className="pl-2" htmlFor="five_plus_review">
                      5+ reviews
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="fiften_plus"
                      name="review"
                      value="15+ reviews"
                      className="scale-125"
                    />
                    <label className="pl-2" htmlFor="fiften_plus">
                      15+ reviews
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="thirty_plus"
                      name="review"
                      value="30+ reviews"
                      className="scale-125"
                    />
                    <label className="pl-2" htmlFor="thirty_plus">
                      30+ reviews
                    </label>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="filter__footer p-4 bg-textPrimary-900 text-white text-center fixed bottom-0 right-0 w-full">
          <span>View Results</span>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
