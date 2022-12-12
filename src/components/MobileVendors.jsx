import React, { useCallback, useState } from "react";
import VendorPopup from "./vendors mobile popup/VendorPopup";

const MobileVendors = () => {
  const [showPop, setShowPop] = useState(false);
  const toggleVendor = useCallback(() => {
    setShowPop(!showPop);
  }, [showPop]);
  return (
    <>
      <div className="w-full shadow-md rounded-md cursor-pointer">
        <div className="vendors_content flex" onClick={toggleVendor}>
          <div className="vendors-left bg-textPrimary-900 text-white py-3 w-2/12 text-center">
            <i class="fa-solid fa-store"></i>
          </div>
          <div className="vendors_right bg-white text-textPrimary-900 py-3 px-6 w-11/12 flex justify-between items-center">
            <div className="text">
              <span>Find Vendors</span>
            </div>
            <div className="icon">
              <i class="fa-solid fa-chevron-right text-xl"></i>
            </div>
          </div>
        </div>
      </div>
      {showPop && <VendorPopup toggle={toggleVendor} />}
    </>
  );
};

export default React.memo(MobileVendors);
