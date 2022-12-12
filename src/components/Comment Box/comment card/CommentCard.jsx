import React from "react";

const CommentCard = ({ image, author, comments, date }) => {
  return (
    <div className="latest__review bg-white shadow-lg lg:shadow-md px-4 py-2 mb-8">
      <div className="latest__review_card flex flex-wrap lg:flex-nowrap items-center">
        <div className="review__image lg:w-1/12 w-full flex justify-center mb-4 lg:mb-0">
          <img
            src={image}
            alt="userImage"
            className="w-10 h-10 lg:h-12 lg:w-12 rounded-full"
          />
        </div>
        <div className="review__content lg:w-11/12 w-full lg:text-start text-center">
          <h5 className="font-semibold text-base text-textSecondary-900">
            {author}
          </h5>
          <div className="review__desc overflow-hidden flex mb-2 items-center">
            <div className="review__desc_content h-4 text-sm text-textSecondary-900">
              <p>{comments}</p>
            </div>
          </div>
          <div className="auhtor">
            <p className="text-xs text-dateColor-900 font-medium">
              Commented on: <span>{date}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
