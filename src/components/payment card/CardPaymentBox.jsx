import React from "react";
import { useState } from "react";

const CardPaymentBox = () => {
  const [data, setData] = useState({
    cardNumber: "",
    expire: "",
    security: "",
    name: "",
  });

  // On SUbmit Handler
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        {/* 1st Row */}
        <div className="1stRow md:flex gap-8">
          {/* Card Number */}
          <div className="mb-4 md:mb-0 md:w-4/12 w-full">
            <label
              className="block mb-2 text-sm font-bold text-textPrimary-900"
              htmlFor="cardNumber"
            >
              Card Number *
            </label>
            <input
              className="w-full p-3 text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded"
              id="cardNumber"
              type="number"
              value={data.cardNumber}
              placeholder="Card Number"
              onChange={(e) =>
                setData({
                  ...data,
                  cardNumber: e.target.value,
                })
              }
              required
            />
          </div>
          {/* Expire Date Number */}
          <div className="mb-4 md:mb-0 md:w-2/12 w-full hidden md:flex">
            <div className="for_tab w-full">
              <label
                className="block mb-2 text-sm font-bold text-textPrimary-900"
                htmlFor="expire"
              >
                Expire Date
              </label>
              <input
                className="w-full p-3 text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded"
                id="expire"
                type="month"
                name="start"
                min="2020-01"
                value={data.expire}
                onChange={(e) =>
                  setData({
                    ...data,
                    expire: e.target.value,
                  })
                }
              />
            </div>
          </div>
          {/* Security Code */}
          <div className="mb-4 md:mb-0 md:w-2/12 w-full hidden md:flex">
            <div className="for_tab w-full">
              <label
                className="block mb-2 text-sm font-bold text-textPrimary-900"
                htmlFor="code"
              >
                Security Code
              </label>
              <input
                className="w-full p-3 text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded"
                id="code"
                type="number"
                value={data.security}
                placeholder="Security Code"
                onChange={(e) =>
                  setData({
                    ...data,
                    security: e.target.value,
                  })
                }
                required
              />
            </div>
          </div>

          {/* Mobile Box */}
          <div className="mobilerow flex gap-4 my-8 md:hidden">
            <div className="mb-4 md:mb-0 w-full">
              <label
                className="block mb-2 text-sm font-bold text-textPrimary-900"
                htmlFor="expire"
              >
                Expire Date
              </label>
              <input
                className="w-full p-3 text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded"
                id="expire"
                type="month"
                name="start"
                min="2020-01"
                value={data.expire}
                onChange={(e) =>
                  setData({
                    ...data,
                    expire: e.target.value,
                  })
                }
              />
            </div>

            <div className="mb-4 md:mb-0 w-full">
              <label
                className="block mb-2 text-sm font-bold text-textPrimary-900"
                htmlFor="code"
              >
                Security Code
              </label>
              <input
                className="w-full p-3 text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded"
                id="code"
                type="number"
                placeholder="Security Code"
                onChange={(e) =>
                  setData({
                    ...data,
                    security: e.target.value,
                  })
                }
                required
              />
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="secondRow flex gap-4 my-8">
          {/* First Name */}
          <div className="mb-4 md:mb-0 md:w-6/12 w-full">
            <label
              className="block mb-2 text-sm font-bold text-textPrimary-900"
              htmlFor="nameOnCard"
            >
              Name on card*
            </label>
            <input
              className="w-full p-3 text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded"
              id="nameOnCard"
              type="text"
              value={data.name}
              placeholder="Name on Card"
              onChange={(e) =>
                setData({
                  ...data,
                  name: e.target.value,
                })
              }
              required
            />
          </div>
        </div>

        {/* Apply Coupon */}
        <div className="mb-4 md:mb-8 md:w-2/12 w-8/12">
          <label
            className="block mb-2 ml-1 text-sm font-bold text-textPrimary-900"
            htmlFor="coupon"
          >
            Apply coupon?
          </label>
          <input
            className="w-full p-3 text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded"
            id="coupon"
            type="text"
            placeholder="Coupon Code"
          />
        </div>

        {/* Save as Default Button */}
        <div className="flex items-center ml-1">
          <input
            className="accent-textPrimary-900 md:scale-150 scale-125"
            type="checkbox"
            id="saveasdefault"
            name="saveasdefault"
            value="saveasdefault"
          />
          <label
            className="px-2 md:px-4 text-textSecondary-900 font-medium"
            htmlFor="saveasdefault"
          >
            Save as default
          </label>
        </div>
      </form>
    </div>
  );
};

export default CardPaymentBox;
