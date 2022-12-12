import React from "react";
import { NavLink } from "react-router-dom";
import SimilarWeedingCard from "./SimilarWeedingCard";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const SimilarWedding = () => {
  return (
    <section className="container mx-auto lg:px-20 px-2 my-6">
      <div className="similar_wedding__container bg-white shadow-md border-b border-paginationBg-900">
        <div className="similar_wedding__container__content border-b border-paginationBg-900">
          <div className="similar_wedding__container__heading px-5 py-4 text-lg lg:text-start lg:text-2xl font-medium text-textBlack-900 border-b border-paginationBg-900 lg:flex lg:justify-between lg:items-center text-center">
            <div className="main_header">
              <h5 style={{ fontSize: "22px" }}>
                Browse Similar Wedding Photographer
              </h5>
            </div>
            <div className="browse_btn hidden lg:block">
              <NavLink to="/similarWedding">
                <button className="border rounded-full border-textPrimary-900 px-4 py-1 text-textPrimary-900 hover:bg-textPrimary-900 hover:text-white font-medium duration-300 text-base">
                  View More
                </button>
              </NavLink>
            </div>
          </div>
          {/* Bottom or Blogs */}.{" "}
          <div className="hidden lg:block">
            <div className="similar_wedding_content_bottom flex pt-4 pb-8">
              <SimilarWeedingCard
                image="https://images.pexels.com/photos/3872614/pexels-photo-3872614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                name="The Conflict Photographer"
                location="Lahore, Pakistan"
                totalReview={70}
                budget="40,000 Rs"
              />
              <SimilarWeedingCard
                image="https://images.pexels.com/photos/10492654/pexels-photo-10492654.jpeg?auto=compress&cs=tinysrgb&w=1600"
                name="The Passionate Photographer"
                location="Islamabad, Pakistan"
                totalReview={90}
                budget="70,000 Rs"
              />
              <SimilarWeedingCard
                image="https://images.pexels.com/photos/11390735/pexels-photo-11390735.jpeg?auto=compress&cs=tinysrgb&w=1600"
                name="Ajeet Photography"
                location="Faisalabad, Pakistan"
                totalReview={20}
                budget="1,00,000 Rs"
              />
              <SimilarWeedingCard
                image="https://images.pexels.com/photos/8110411/pexels-photo-8110411.jpeg?auto=compress&cs=tinysrgb&w=1600"
                name="Pro Photography"
                location="Lahore, Pakistan"
                totalReview={13}
                budget="2,00,000 Rs"
              />
            </div>
          </div>
          {/* Carousel For Mobile */}
          <div className="block lg:hidden">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              slidesPerView={1}
              slidesPerGroup={1}
              grabCursor={true}
              loop={false}
              loopFillGroupWithBlank={true}
              className="mySwiper w-full"
            >
              <SwiperSlide>
                <SimilarWeedingCard
                  image="https://images.pexels.com/photos/3872614/pexels-photo-3872614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  name="The Conflict Photographer"
                  location="Lahore, Pakistan"
                  totalReview={70}
                  budget="40,000 Rs"
                />
              </SwiperSlide>
              <SwiperSlide>
                <SimilarWeedingCard
                  image="https://images.pexels.com/photos/8110411/pexels-photo-8110411.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  name="Pro Photography"
                  location="Lahore, Pakistan"
                  totalReview={13}
                  budget="2,00,000 Rs"
                />
              </SwiperSlide>
              <SwiperSlide>
                <SimilarWeedingCard
                  image="https://images.pexels.com/photos/11390735/pexels-photo-11390735.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  name="Ajeet Photography"
                  location="Faisalabad, Pakistan"
                  totalReview={20}
                  budget="1,00,000 Rs"
                />
              </SwiperSlide>
              <SwiperSlide>
                <SimilarWeedingCard
                  image="https://images.pexels.com/photos/10492654/pexels-photo-10492654.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  name="The Passionate Photographer"
                  location="Islamabad, Pakistan"
                  totalReview={90}
                  budget="70,000 Rs"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimilarWedding;
