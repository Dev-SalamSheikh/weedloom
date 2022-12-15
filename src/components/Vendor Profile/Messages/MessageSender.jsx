import React from "react";

const MessageSender = ({ name, text, date, img }) => {
  return (
    <div className="border-b border-b-paginationBg-900 py-2 px-2 flex gap-4 md:gap-0 items-center cursor-pointer hover:bg-tagsBackground-900 hover:text-white">
      {/* Image */}
      <div className="md:w-3/12">
        <img src={img} alt="avatar" className="w-12 h-12 rounded-full" />
      </div>

      {/* Author Info */}
      <div className="flex justify-between items-center w-9/12">
        {/* NAme and last messgae */}
        <div className="flex flex-col gap-1 h-full w-9/12">
          <div className="h-5 overflow-hidden">
            <h3 className="text-textSecondary-900 font-bold text-sm">{name}</h3>
          </div>
          <div className="w-full h-5 overflow-hidden">
            <p className="text-gray-500 font-semibold text-[11px]">{text}</p>
          </div>
        </div>
        {/* Last Message Time */}
        <div className="w-3/12 text-end">
          <span className="text-textBlack-900 text-[11px] font-semibold">
            {date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
