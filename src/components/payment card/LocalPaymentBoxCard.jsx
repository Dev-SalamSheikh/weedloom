import React from "react";

const LocalPaymentBoxCard = () => {
  return (
    <div>
      <div className="lcoal_payment_content">
        <div className="heading text-center">
          <h1 className="text-3xl font-semibold text-textSecondary-900">
            Who will pay the bill?
          </h1>
        </div>
        {/* Form */}
        <div>
          {/* Full NAme */}
          <div className="mb-4 md:mb-0 md:w-6/12 w-full mt-4">
            <label
              className="block mb-2 text-sm font-bold text-textPrimary-900"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              className="w-full p-3 text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded"
              id="fullName"
              type="text"
              placeholder="Enter Your Full Name"
              required
            />
          </div>

          {/* Contact Number */}
          <div className="mb-4 md:mb-0 md:w-6/12 w-full mt-4">
            <label
              className="block mb-2 text-sm font-bold text-textPrimary-900"
              htmlFor="contactNum"
            >
              Contact Number
            </label>
            <input
              className="w-full p-3 text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded"
              id="contactNum"
              type="number"
              placeholder="Contact Number"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalPaymentBoxCard;
