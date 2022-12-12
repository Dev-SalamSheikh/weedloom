import React from "react";

const InhouseCard = ({ image, title, subtitle }) => {
  return (
    <div className="inhouseCard bg-white p-4 md:w-6/12 w-full rounded-lg shadow-xl group">
      <div className="inhouseCard__container text-center">
        <div className="image w-full overflow-hidden">
          <img
            src={image}
            alt=""
            className="h-52 w-full group-hover:scale-125 duration-200 rounded-lg"
          />
        </div>
        <div className="bottom__content my-8">
          <h4 className="text-textSecondary-900 font-semibold text-2xl mb-4">
            {title}
          </h4>
          <p className="text-textSecondary-900 font-semibold">{subtitle}</p>
          <button className="text-textPrimary-900 border border-textPrimary-900 py-3 px-8 group-hover:bg-textPrimary-900 group-hover:text-white duration-200 font-semibold mt-4">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default InhouseCard;
