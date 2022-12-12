import React from "react";

const FaqCard = ({ faqTitle, faqContent }) => {
  return (
    <div className="faqs__card w-full bg-copyrightFooter-900 py-4 lg:px-8 px-3 mb-6">
      <div className="faqs__card__content">
        <div className="faqs__card__heading">
          <h3 className="text-textSecondary-900 font-bold mb-2">{faqTitle}</h3>
        </div>
        <div className="faqs__card__content">
          <p className="text-textSecondary-900 leading-7 lg:text-base text-sm">
            {faqContent}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
