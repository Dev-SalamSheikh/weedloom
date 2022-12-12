import React from "react";

const ProfilefaqCard = ({ question, answer }) => {
  return (
    <div className="faqCards w-full bg-copyrightFooter-900 p-4 rounded-lg mb-4">
      <div className="faq_card_content">
        <div className="faq_question mb-2">
          <span className="cursor-pointer text-textSecondary-900 font-semibold">
            {question}
          </span>
        </div>
        <div className="faq_answer text-textSecondary-900 text-sm">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default ProfilefaqCard;
