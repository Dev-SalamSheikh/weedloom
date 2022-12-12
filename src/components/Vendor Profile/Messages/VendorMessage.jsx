import React from "react";

const VendorMessage = ({ text }) => {
  return (
    <div className="flex justify-end mt-4">
      <div className="flex justify-between items-center">
        <div className="text-end">
          <span className="text-gray-500 text-xs font-medium">7:02 PM</span>
        </div>
        <div className="max-w-[70%] bg-textPrimary-900 text-white text-sm py-2 px-4 rounded-lg">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default VendorMessage;
