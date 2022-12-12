import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Pcontact = () => {
  // All States
  const [showContact, setShowContact] = useState(false);
  const [message, setMessage] = useState(false);
  const [value, setValue] = useState("+92");
  const [switchInput, setSwitchInput] = useState();

  const toggleMenuContact = () => {
    setMessage(false);
    setShowContact(true);
  };

  const toggleMessage = () => {
    setShowContact(false);
    setMessage(true);
  };

  return (
    <div className="p_contact bg-white shadow-md">
      <div className="p_contact_button flex lg:justify-around gap-8 justify-center items-center lg:px-4 py-6 my-4">
        <div className="send">
          <button
            className="text-white lg:text-lg text-sm bg-textPrimary-900 lg:py-3 lg:px-12 p-4 rounded-full hover:bg-btnHover-900 duration-200"
            onClick={toggleMenuContact}
          >
            <i className="fa-regular fa-envelope mr-2"></i>
            Send Message
          </button>
        </div>
        <div className="view">
          <button
            className="text-white lg:text-lg text-sm bg-greenBG-900 lg:py-3 lg:px-12 rounded-full hover:bg-greenHover-900 duration-200 p-4"
            onClick={toggleMessage}
          >
            <i className="fa-solid fa-phone mr-2"></i>
            View Contact
          </button>
        </div>
      </div>
      <div className="my-6 pb-6 text-center text-textSecondary-900">
        <span className="bg-demandBg-900 text-xs p-1 mr-3">In High Demand</span>{" "}
        <span>15 exquiries last week</span>
      </div>

      {/* Message Form */}
      {showContact && (
        <div className="pContact_modal border-t border-textPrimary-900">
          <div className="pContact_modal_Content px-4 py-4">
            <h1 className="text-textSecondary-900 font-semibold text-lg">
              Hello Dear,
            </h1>
            <div className="form_fields my-6">
              <div className="frist_row flex gap-8 justify-between my-4">
                <div className="name w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className="w-full outline-none pb-2 focus:border-b focus:border-textPrimary-900  border-b border-newBorder-900"
                  />
                </div>
                <div className="number w-full">
                  <input
                    type="text"
                    placeholder="Contact Number*"
                    className="w-full outline-none pb-2 focus:border-b focus:border-textPrimary-900  border-b border-newBorder-900"
                  />
                </div>
              </div>
              <div className="second_row flex gap-8 justify-between my-8 w-full">
                <div className="name w-full">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full outline-none pb-2 focus:border-b focus:border-textPrimary-900  border-b border-newBorder-900"
                  />
                </div>
                {/* Date */}
                <div className="date w-full border-b">
                  <DatePicker
                    selected={switchInput}
                    onChange={(e) => setSwitchInput(e)}
                    dateFormat="MMMM d, yyyy"
                    placeholderText="Function Date"
                    className="outline-none border-none"
                  />
                </div>
              </div>
              <div className="third_row mt-8 mb-4">
                <div className="name w-full">
                  <input
                    type="text"
                    placeholder="Details About Your Wedding*"
                    required
                    className="w-full outline-none pb-2 focus:border-b focus:border-textPrimary-900  border-b border-newBorder-900"
                  />
                </div>
              </div>

              <div className="fourth_row flex justify-between my-8">
                <div className="left w-full">
                  <h5 className="text-lg text-textSecondary-900 font-semibold">
                    Function Type
                  </h5>
                  <form className="flex items-center gap-4 lg:gap-6 mt-4 flex-wrap lg:flex-nowrap">
                    <div>
                      <input
                        type="radio"
                        id="prewedding"
                        name="wedding"
                        value="Pre Wedding"
                        className="scale-150 accent-textPrimary-900"
                      />
                      <label
                        className="pl-2 font-medium text-textSecondary-900"
                        htmlFor="prewedding"
                      >
                        Pre Wedding
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="wedding"
                        name="wedding"
                        value="Wedding"
                        className="scale-150 accent-textPrimary-900"
                      />
                      <label
                        className="pl-2 font-medium text-textSecondary-900"
                        htmlFor="wedding"
                      >
                        Wedding
                      </label>
                    </div>
                  </form>
                </div>

                <div className="right w-full pl-10 border-l text-start">
                  <h5 className="text-lg text-textSecondary-900 font-semibold">
                    Function Time
                  </h5>
                  <form className="flex items-start gap-4 lg:gap-6 mt-4 flex-wrap flex-col lg:flex-row">
                    <div>
                      <input
                        type="radio"
                        id="evening"
                        name="time"
                        value="Evening"
                        className="scale-150 accent-textPrimary-900"
                      />
                      <label
                        className="pl-2 font-medium text-textSecondary-900"
                        htmlFor="evening"
                      >
                        Evening
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="day"
                        name="time"
                        value="Day"
                        className="scale-150 accent-textPrimary-900"
                      />
                      <label
                        className="pl-2 font-medium text-textSecondary-900"
                        htmlFor="day"
                      >
                        Day
                      </label>
                    </div>
                  </form>
                </div>
              </div>

              <div className="button mb-4">
                <button
                  type="submit"
                  className="w-full bg-textPrimary-900 py-4 text-white font-semibold text-lg"
                >
                  Send Message
                </button>
              </div>

              <div className="text text-center">
                <span className="text-sm text-dateColor-900">
                  Complete information ensures you get accurate and timely
                  vendor responses
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form*/}
      {message && (
        <div className="message border-t border-textPrimary-900">
          <div className="message_Content px-4 py-8">
            <h1 className="text-textSecondary-900 font-semibold text-base">
              Verify you phone number to contact the vendor
            </h1>
            <div className="form_fields">
              <div className="frist_row flex gap-8 justify-between my-4">
                <div className="name w-full">
                  <label className="text-textPrimary-900 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name*"
                    required
                    className="mt-2 w-full outline-none focus:border-b focus:border-textPrimary-900  border-b border-paginationBg-900"
                  />
                </div>
                <div className="number w-full">
                  <label className="text-textPrimary-900 font-medium">
                    Phone
                  </label>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="mt-2 w-full outline-none focus:border-b focus:border-textPrimary-900  border-b border-paginationBg-900"
                  />
                </div>
              </div>

              <div className="button mt-10">
                <button
                  type="submit"
                  className="w-full duration-300 bg-greenBG-900 hover:bg-greenHover-900 py-4 text-white font-semibold text-lg"
                >
                  View Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pcontact;
