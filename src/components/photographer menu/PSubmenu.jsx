import React from "react";
import { NavLink } from "react-router-dom";

const PSubmenu = () => {
  return (
    <div className="pSub_menu bg-white py-4 text-textSecondary-900 px-12 shadow-sm">
      <div className="pSubment__content flex justify-between">
        {/* Sub Locality */}
        <div className="sub__locality w-full">
          <div className="mb-2">
            <div className="input_box w-max border-b">
              <input
                type="text"
                placeholder="Search Locality"
                className="outline-none pb-1 border-none text-textPrimary-900"
              />
            </div>
          </div>

          <div>
            {/* Form Start*/}
            <form className="flex flex-col gap-y-1">
              <div>
                <input
                  className="accent-textPrimary-900 scale-110"
                  type="checkbox"
                  id="karachi"
                  name="karachi"
                  value="Karachi"
                />
                <label className="pl-2" htmlFor="karachi">
                  Karachi
                </label>
              </div>

              <div>
                <input
                  className="accent-textPrimary-900 scale-110"
                  type="checkbox"
                  id="islamabad"
                  name="islamabad"
                  value="Islamabad"
                />
                <label className="pl-2" htmlFor="islamabad">
                  Islamabad
                </label>
              </div>
              <div>
                <input
                  className="accent-textPrimary-900 scale-110"
                  type="checkbox"
                  id="Multan"
                  name="Multan"
                  value="Lahore"
                />
                <label className="pl-2" htmlFor="Multan">
                  Lahore
                </label>
              </div>

              <div>
                <input
                  className="accent-textPrimary-900 scale-110"
                  type="checkbox"
                  id="sukkur"
                  name="sukkur"
                  value="Sukkur"
                />
                <label className="pl-2" htmlFor="sukkur">
                  Sukkur
                </label>
              </div>
              <div>
                <input
                  className="accent-textPrimary-900 scale-110"
                  type="checkbox"
                  id="Okara"
                  name="Okara"
                  value="Okara"
                />
                <label className="pl-2" htmlFor="Okara">
                  Okara
                </label>
              </div>
            </form>
            {/* Form End */}

            {/* More Button Start*/}
            <button className="ml-5 mt-1">
              <NavLink to="/more">
                More <i className="fa-solid fa-caret-right"></i>
              </NavLink>
            </button>

            {/* More Button End */}
          </div>
        </div>

        {/* Number of Days */}
        <div className="sub__nofdays w-full">
          {/* Form Start */}
          <form className="flex flex-col gap-y-1">
            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="radio"
                id="one_day"
                name="days"
                value="1 Day"
              />
              <label className="pl-2" htmlFor="one_day">
                1 Day
              </label>
            </div>

            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="radio"
                id="two_days"
                name="days"
                value="2 Days"
              />
              <label className="pl-2" htmlFor="two_days">
                2 Days
              </label>
            </div>

            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="radio"
                id="three_days"
                name="days"
                value="3 Days"
              />
              <label className="pl-2" htmlFor="three_days">
                3 Days
              </label>
            </div>

            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="radio"
                id="four_days"
                name="days"
                value="4 Days"
              />
              <label className="pl-2" htmlFor="four_days">
                4 Days
              </label>
            </div>
          </form>
          {/* Form ENd */}
        </div>

        {/* Services */}
        <div className="sub__services w-full">
          {/* Form Start */}
          <form className="flex flex-col gap-y-1">
            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="radio"
                id="photo_video"
                name="service"
                value="Photo + Video"
              />
              <label className="pl-2" htmlFor="photo_video">
                Photo + Video
              </label>
            </div>

            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="radio"
                id="photo_package"
                name="service"
                value="Photo Package"
              />
              <label className="pl-2" htmlFor="photo_package">
                Photo Package
              </label>
            </div>
          </form>
          {/* Form End */}
        </div>

        {/* Budget Start */}
        <div className="sub__budget w-full">
          <form className="flex flex-col gap-y-1">
            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="checkbox"
                id="fifty_thousand"
                name="fifty_thousand"
                value="50,000 Rs"
              />
              <label className="pl-2" htmlFor="fifty_thousand">
                Rs. 50,000
              </label>
            </div>

            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="checkbox"
                id="fifty_thousand_to_one_lakh"
                name="fifty_thousand_to_one_lakh"
                value="50,000 Rs -  1,00,000 Rs"
              />
              <label className="pl-2" htmlFor="fifty_thousand_to_one_lakh">
                Rs. 50,000 - Rs. 1,00,000
              </label>
            </div>

            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="checkbox"
                id="one_lakh_to_one_fifty"
                name="one_lakh_to_one_fifty"
                value="1,00,000 Rs - 1,50,000 Rs"
              />
              <label className="pl-2" htmlFor="one_lakh_to_one_fifty">
                Rs. 1,00,000 - Rs. 1,50,000
              </label>
            </div>

            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="checkbox"
                id="one_fifty_to_two_lakh"
                name="one_fifty_to_two_lakh"
                value="1,50,000 Rs - 2,00,000 Rs"
              />
              <label className="pl-2" htmlFor="one_fifty_to_two_lakh">
                Rs. 1,50,000 - Rs. 2,00,000
              </label>
            </div>

            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="checkbox"
                id="more_than_two_lakhs"
                name="more_than_two_lakhs"
                value="2,00,000+ Rs"
              />
              <label className="pl-2" htmlFor="more_than_two_lakhs">
                Rs. 2,00,000+
              </label>
            </div>
          </form>
        </div>
        {/* Budget End */}

        {/* Rating Start */}
        <div className="sub__rating w-full flex flex-col items-center">
          <form className="flex flex-col gap-y-1">
            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="radio"
                id="all_ratings"
                name="rating"
                value="All Ratings"
              />
              <label className="pl-2" htmlFor="all_ratings">
                All Ratings
              </label>
            </div>

            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="radio"
                id="rating_under-four"
                name="rating"
                value="Rated 4-"
              />
              <label className="pl-2" htmlFor="rating_under-four">
                Rated 4-
              </label>
            </div>

            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="radio"
                id="rating_upto_four"
                name="rating"
                value="Rated 4+"
              />
              <label className="pl-2" htmlFor="rating_upto_four">
                Rated 4+
              </label>
            </div>

            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="radio"
                id="rated_upto_four_five"
                name="rating"
                value="Rated 4.5+"
              />
              <label className="pl-2" htmlFor="rated_upto_four_five">
                Rated 4.5+
              </label>
            </div>
          </form>
        </div>
        {/* Rating End */}

        {/* Review Start*/}
        <div className="sub__review w-full flex flex-col items-center">
          <form className="flex flex-col gap-y-1">
            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="radio"
                id="under_five_riview"
                name="review"
                value="5- reviews"
              />
              <label className="pl-2" htmlFor="under_five_riview">
                5- reviews
              </label>
            </div>

            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="radio"
                id="five_plus_review"
                name="review"
                value="5+ reviews"
              />
              <label className="pl-2" htmlFor="five_plus_review">
                5+ reviews
              </label>
            </div>

            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="radio"
                id="fiften_plus"
                name="review"
                value="15+ reviews"
              />
              <label className="pl-2" htmlFor="fiften_plus">
                15+ reviews
              </label>
            </div>

            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="radio"
                id="thirty_plus"
                name="review"
                value="30+ reviews"
              />
              <label className="pl-2" htmlFor="thirty_plus">
                30+ reviews
              </label>
            </div>
          </form>
        </div>
        {/* Review End */}
      </div>

      {/* Button Section */}
      <div className="pSubmenu__buttons w-full mt-6 flex gap-4 justify-center">
        <button className="border border-textSecondary-900 py-2 px-8 font-medium hover:bg-textSecondary-900 hover:text-white duration-300">
          <NavLink to="*">Reset</NavLink>
        </button>
        <button className="border border-textPrimary-900 text-textPrimary-900 py-2 px-4 font-medium hover:bg-textPrimary-900 hover:text-white duration-300">
          <NavLink to="*">View Results</NavLink>
        </button>
      </div>
      {/* Button End */}
    </div>
  );
};

export default PSubmenu;
