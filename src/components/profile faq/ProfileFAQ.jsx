import React from "react";
import ProfilefaqCard from "./ProfilefaqCard";

const ProfileFAQ = () => {
  return (
    <section className="container mx-auto lg:px-20 px-2 my-6">
      <div className="faq__container bg-white shadow-md border-b border-paginationBg-900">
        <div className="faq__container__content border-b border-paginationBg-900">
          <div className="faq__container__heading px-5 py-4 text-lg lg:text-start text-center font-medium text-textBlack-900 border-b border-paginationBg-900">
            <h5 style={{ fontSize: "22px" }}>FAQ about THE MEMORY CAPTURE</h5>
          </div>
        </div>
        {/* Bottom */}
        <div className="w-full px-5 pt-5 pb-0">
          <ProfilefaqCard
            question="How much time does THE MEMORY CAPTURE take to deliver the wedding photos?"
            answer=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum vel velit excepturi quis tenetur pariatur dolorem sint laboriosam commodi distinctio!"
          />
          <ProfilefaqCard
            question="How many days are included in THE MEMORY CAPTURE's most booked package?"
            answer=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum vel velit excepturi quis tenetur pariatur dolorem sint laboriosam commodi distinctio!"
          />
          <ProfilefaqCard
            question="How long has THE MEMORY CAPTURE been shooting weddings?"
            answer=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum vel velit excepturi quis tenetur pariatur dolorem sint laboriosam commodi distinctio!"
          />
          <ProfilefaqCard
            question="What is the value of THE MEMORY CAPTURE's most booked package?"
            answer=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum vel velit excepturi quis tenetur pariatur dolorem sint laboriosam commodi distinctio!"
          />
          <ProfilefaqCard
            question="How much time does Sufygraphy take to deliver the wedding photos?"
            answer=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum vel velit excepturi quis tenetur pariatur dolorem sint laboriosam commodi distinctio!"
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileFAQ;
