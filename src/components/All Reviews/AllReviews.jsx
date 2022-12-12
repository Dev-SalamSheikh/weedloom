import React from "react";
import { NavLink } from "react-router-dom";
import ReviewCard from "../review card/ReviewCard";

const AllReviews = () => {
  return (
    <div className="container mx-auto md:px-20 px-4 lg:my-0 my-2">
      <div className="all__reviews__container bg-white shadow-md">
        <ReviewCard
          image="https://images.pexels.com/photos/2119095/pexels-photo-2119095.jpeg?auto=compress&cs=tinysrgb&w=1600"
          name="Sujana Begum"
        />
        <ReviewCard
          image="https://images.pexels.com/photos/12737630/pexels-photo-12737630.jpeg?auto=compress&cs=tinysrgb&w=1600"
          name="Shakila Khanam"
        />
        <ReviewCard
          image="https://images.pexels.com/photos/4826191/pexels-photo-4826191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Mariyam"
        />
        <ReviewCard
          image="https://images.pexels.com/photos/8881961/pexels-photo-8881961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Zinnat Khatun"
        />
        <ReviewCard
          image="https://images.pexels.com/photos/6609965/pexels-photo-6609965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Arshad Rajiya"
        />
        <ReviewCard
          image="https://images.pexels.com/photos/6571177/pexels-photo-6571177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Manisha Akter"
        />
        <div className="viewMore py-2 text-center">
          <NavLink to="/reviews">
            <button className="bg-transparent border rounded-full border-textPrimary-900 px-6 py-1 text-textPrimary-900 hover:bg-textPrimary-900 hover:text-white font-medium duration-300">
              View More
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
