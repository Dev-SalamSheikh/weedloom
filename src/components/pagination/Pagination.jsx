import React from "react";

const Pagination = () => {
  return (
    <div className="pagination flex items-center lg:justify-center my-8">
      <div className="pagination_content flex lg:gap-2 gap-2 items-center flex-wrap justify-center">
        <div className="left__arrow cursor-pointer">
          <i className="fa-solid fa-chevron-left text-textPrimary-900 font-bold"></i>
        </div>
        <div className="bg-paginationBg-900 py-1 px-4 cursor-pointer">
          <span className="text-textPrimary-900">1</span>
        </div>
        <div className="py-1 px-4 cursor-pointer">
          <span className="text-textPrimary-900">2</span>
        </div>
        <div className="py-1 px-4 cursor-pointer">
          <span className="text-textPrimary-900">3</span>
        </div>
        <div className="py-1 px-4 cursor-pointer">
          <span className="text-textPrimary-900">4</span>
        </div>
        <div className="py-1 px-4 cursor-pointer">
          <span className="text-textPrimary-900">5</span>
        </div>
        <div className="py-1 px-4 cursor-pointer">
          <span className="text-textPrimary-900">6</span>
        </div>
        <div className="py-1 px-4 cursor-pointer">
          <span className="text-textPrimary-900">...</span>
        </div>
        <div className="py-1 px-4 cursor-pointer">
          <span className="text-textPrimary-900">60</span>
        </div>
        <div className="py-1 px-4 cursor-pointer">
          <span className="text-textPrimary-900">61</span>
        </div>
        <div className="py-1 px-4 cursor-pointer">
          <span className="text-textPrimary-900">62</span>
        </div>
        <div className="cursor-pointer">
          <i className="fa-solid fa-chevron-right text-textPrimary-900 font-bold"></i>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
