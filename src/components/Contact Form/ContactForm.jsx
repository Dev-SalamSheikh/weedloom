import React from "react";

const ContactForm = () => {
  return (
    <div className="contact_form">
      <div className="w-full text-center my-8">
        <h1 className="text-textSecondary-900 text-4xl lg:text-5xl font-bold">
          Get In Touch
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-8">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              className="w-full bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg brightness-75"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/5747224/pexels-photo-5747224.jpeg?auto=compress&cs=tinysrgb&w=1600')",
              }}
            ></div>

            <div className="w-full lg:w-7/12 bg-white shadow-lg p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-2 mb-4 text-2xl text-center text-textSecondary-900 font-semibold">
                Fill Out The Form Below
              </h3>
              <form className="px-6 mb-4 bg-white rounded">
                <div className="w-full mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-textPrimary-900"
                    htmlFor="select"
                  >
                    Select Who You are
                  </label>
                  <select
                    style={{ padding: "9px" }}
                    className="w-full text-textSecondary-900 rounded bg-transparent border focus:border-textPrimary-900"
                  >
                    <option>Select</option>
                    <option>User</option>
                    <option>Vendor</option>
                  </select>
                </div>
                {/* Name */}
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0 w-full">
                    <label
                      className="block mb-2 text-sm font-bold text-textPrimary-900"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="w-full p-3 text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded"
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="md:ml-2 w-full">
                    <label
                      className="block mb-2 text-sm font-bold text-textPrimary-900"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className="w-full p-3 text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded"
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0 w-full">
                    <label
                      className="block mb-2 text-sm font-bold text-textPrimary-900"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full p-3 text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded"
                      id="email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="md:ml-2 w-full">
                    <label
                      className="block mb-2 text-sm font-bold text-textPrimary-900"
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                    <input
                      className="w-full p-3 text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded"
                      id="phone"
                      type="number"
                      placeholder="Phone No"
                    />
                  </div>
                </div>

                {/* Subjeect */}
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-textPrimary-900"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <input
                    className="w-full p-3 text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded"
                    id="subject"
                    type="subject"
                    placeholder="Your Subject"
                  />
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mb-0 w-full h-full">
                    <label
                      className="block mb-2 text-sm font-bold text-textPrimary-900"
                      htmlFor="message"
                    >
                      Your Message
                    </label>
                    <textarea
                      className="w-full p-2 text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded text-textPrimary-900"
                      placeholder="Enter Your Message"
                      rows="10"
                    />
                  </div>
                </div>

                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-textPrimary-900 rounded-full focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
