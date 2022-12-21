import React from "react";

const WeeddingContentCard = ({ img, title, text }) => {
  return (
    <div className="text-center flex flex-col justify-center items-center">
      {/* Image */}
      <div>
        <img src={img} alt="mail_icon" className="w-14" />
      </div>
      {/* Title */}
      <div className="my-3">
        <p className="text-textSecondary-900 text-center font-semibold">
          {title}
        </p>
      </div>

      {/* Texts */}
      <div>
        <span className="text-gray-500 text-[13px]">{text}</span>
      </div>
    </div>
  );
};

export default WeeddingContentCard;
