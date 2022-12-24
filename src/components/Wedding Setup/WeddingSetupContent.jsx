import React from "react";
import WeeddingContentCard from "./WeeddingContentCard";

const WeddingSetupContent = () => {
  return (
    <div className="w-full h-full bg-sectionBg-900">
      <div className="container mx-auto lg:w-6/12 w-11/12 pt-10 pb-16">
        {/* Heading */}
        <h1 className="text-textPrimary-900 text-xl lg:text-[28px] font-medium text-center">
          Why should you sign up?
        </h1>

        {/*Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:py-10 pt-10">
          <WeeddingContentCard
            img="https://www.svgrepo.com/show/37043/mail.svg"
            title="Inbox"
            text="Send queries directly to vendors without sharing contact details"
          />
          <WeeddingContentCard
            img="https://www.svgrepo.com/show/192260/team.svg"
            title="Collaborate"
            text="Bring your special someone and loved ones together to plan your wedding"
          />
          <WeeddingContentCard
            img="https://www.svgrepo.com/show/434030/check-mark.svg"
            title="Shortlist and Finalize Vendors"
            text="Keep track of vendors that have caught your eye"
          />
          <WeeddingContentCard
            img="https://www.svgrepo.com/show/220409/checklist.svg"
            title="Checklist"
            text="Stay on top of wedding planning with the help of an organized checklist"
          />
        </div>
      </div>
    </div>
  );
};

export default WeddingSetupContent;
