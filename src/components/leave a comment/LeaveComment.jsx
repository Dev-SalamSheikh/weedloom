import React from "react";
import SectionHeader from "../SectionHeader";

const LeaveComment = () => {
  return (
    <div className="leave_comment mb-6">
      <SectionHeader text="Leave a Comment*" />
      <div className="leave_comment w-full mt-4">
        <div className="mb-2">
          <textarea
            className="w-full text-sm leading-tight text-textSecondary-900 border border-paginationBg-900 rounded shadow appearance-none focus:outline-none focus:shadow-outline p-2"
            placeholder="Your Comment"
            rows="10"
          />
        </div>
        <div className="buttonDiv text-center lg:text-end">
          <button className="text-sm text-white font-semibold bg-textPrimary-900 py-2 px-6 rounded-full ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaveComment;
