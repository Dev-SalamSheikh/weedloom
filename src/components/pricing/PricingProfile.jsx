import React, { useState } from "react";
import PackageDetails from "./PackageDetails";

const PricingProfile = () => {
  const [segment, setSegment] = useState(false);
  const [segment2, setSegment2] = useState(false);
  const [segment3, setSegment3] = useState(false);
  const [segment4, setSegment4] = useState(false);
  return (
    <div className="pricingProfile bg-white shadow-md w-full">
      <div className="pricingProfile__content">
        <div className="heading flex justify-between border-b border-paginationBg-900 p-4">
          <div className="title">
            <h2 className="text-textSecondary-900 font-semibold font-base">
              Per Day Price Estimate
            </h2>
          </div>
          <div className="togglePrice text-textPrimary-900">
            <span>Package Info </span>
          </div>
        </div>
        <div className="price_highlighted py-2">
          <div className="price_hightlight">
            {/* Segment 1 */}
            <div
              className="photo_package flex items-center justify-between border-b py-3 px-4 cursor-pointer"
              onClick={() => setSegment(!segment)}
            >
              {/* Price Highlighted */}
              <div className="w-5/12">
                <h3 className="text-base lg:text-xl text-textPrimary-900">
                  Rs. 30,000 <span className="text-sm">per day</span>
                </h3>
              </div>

              {/* Package Name Highlighted */}
              <div className="w-5/12">
                <h1 className="text-sm lg:text-base text-textPrimary-900">
                  ( Basic Package )
                </h1>
              </div>

              {/* Dropdown Button */}
              <div className="w-1/12 text-end">
                <span className="text-sm text-textSecondary-900">
                  <i
                    className={`fa-solid fa-chevron-down text-base lg:text-lg text-textPrimary-900 ${
                      segment ? "rotate-180" : ""
                    }`}
                  ></i>
                </span>
              </div>
            </div>
            {segment && (
              <PackageDetails packageName={"Basic"} path="/checkout/basic" />
            )}

            {/* Segment two */}
            <div
              className="photo_package flex items-center justify-between border-b py-3 px-4 cursor-pointer"
              onClick={() => setSegment2(!segment2)}
            >
              {/* Price Highlighted */}
              <div className="w-5/12">
                <h3 className="text-base lg:text-xl text-textPrimary-900">
                  Rs. 50,000 <span className="text-sm">per day</span>
                </h3>
              </div>

              {/* Package Name Highlighted */}
              <div className="w-5/12">
                <h1 className="text-sm lg:text-base text-textPrimary-900">
                  ( Standard Package )
                </h1>
              </div>

              {/* Dropdown Button */}

              <div className="w-1/12 text-end">
                <span className="text-sm text-textSecondary-900">
                  <i
                    className={`fa-solid fa-chevron-down text-base lg:text-lg text-textPrimary-900 ${
                      segment2 ? "rotate-180" : ""
                    }`}
                  ></i>
                </span>
              </div>
            </div>
            {segment2 && (
              <PackageDetails
                packageName={"Standard"}
                path="/checkout/standard"
              />
            )}

            {/* Three Segment */}
            <div
              className="photo_package flex items-center justify-between border-b py-3 px-4 cursor-pointer"
              onClick={() => setSegment3(!segment3)}
            >
              {/* Price Highlighted */}
              <div className="w-5/12">
                <h3 className="text-base lg:text-xl text-textPrimary-900">
                  Rs. 1,00,000 <span className="text-sm">per day</span>
                </h3>
              </div>

              {/* Package Name Highlighted */}
              <div className="w-5/12">
                <h1 className="text-sm lg:text-base text-textPrimary-900">
                  ( Premium Package )
                </h1>
              </div>

              {/* Dropdown Button */}

              <div className="w-1/12 text-end">
                <span className="text-sm text-textSecondary-900">
                  <i
                    className={`fa-solid fa-chevron-down text-base lg:text-lg text-textPrimary-900 ${
                      segment3 ? "rotate-180" : ""
                    }`}
                  ></i>
                </span>
              </div>
            </div>
            {segment3 && (
              <PackageDetails
                packageName={"Premium"}
                path="/checkout/premium"
              />
            )}

            {/* Four Segment */}
            <div
              className={`photo_package flex items-center justify-between py-3 px-4 cursor-pointer ${
                segment4 ? "border-b" : ""
              }`}
              onClick={() => setSegment4(!segment4)}
            >
              {/* Price Highlighted */}
              <div className="w-5/12">
                <h3 className="text-base lg:text-xl text-textPrimary-900">
                  Rs. 1,50,000 <span className="text-sm">per day</span>
                </h3>
              </div>

              {/* Package Name Highlighted */}
              <div className="w-5/12">
                <h1 className="text-sm lg:text-base text-textPrimary-900">
                  ( Luxury Package )
                </h1>
              </div>

              {/* Dropdown Button */}

              <div className="w-1/12 text-end">
                <span className="text-sm text-textSecondary-900">
                  <i
                    className={`fa-solid fa-chevron-down text-base lg:text-lg text-textPrimary-900 ${
                      segment4 ? "rotate-180" : ""
                    }`}
                  ></i>
                </span>
              </div>
            </div>
            {segment4 && (
              <PackageDetails
                packageName={"Luxury"}
                lastElem
                path="/checkout/luxury"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingProfile;
