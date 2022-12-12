import React from "react";
import BlogExploreCard from "./BlogExploreCard";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ExploreHeading from "../ExploreHeading";

const BlogExplore = () => {
  return (
    <div className="blog_explore bg-bgGrey-900 lg:py-16 pt-8 pb-16">
      <div className="blog_explore_container container mx-auto lg:px-20 px-4">
        {/* Heading */}
        <ExploreHeading text="Explore More" />

        {/* Content */}
        {/* Desktop View */}
        <div className="main_content hidden lg:block">
          <div className="blog_content my-8 flex w-full h-full gap-8 lg:flex-nowrap flex-wrap mb-4">
            <BlogExploreCard
              image="https://images.pexels.com/photos/8393708/pexels-photo-8393708.jpeg?auto=compress&cs=tinysrgb&w=1600"
              upperText="Decor"
              downText="Guide"
            />
            <BlogExploreCard
              image="https://images.pexels.com/photos/2106687/pexels-photo-2106687.jpeg?auto=compress&cs=tinysrgb&w=1600"
              upperText="Real"
              downText="Wedding"
            />
            <BlogExploreCard
              image="https://images.pexels.com/photos/2049561/pexels-photo-2049561.jpeg?auto=compress&cs=tinysrgb&w=1600"
              upperText="Dress"
              downText="Guide"
            />
            <BlogExploreCard
              image="https://images.pexels.com/photos/2218558/pexels-photo-2218558.jpeg?auto=compress&cs=tinysrgb&w=1600"
              upperText="Wedding"
              downText="Ideas"
            />
          </div>
        </div>
      </div>

      {/* Mobile View */}
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
            <BlogExploreCard
              image="https://images.pexels.com/photos/8393708/pexels-photo-8393708.jpeg?auto=compress&cs=tinysrgb&w=1600"
              upperText="Decor"
              downText="Guide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogExploreCard
              image="https://images.pexels.com/photos/2106687/pexels-photo-2106687.jpeg?auto=compress&cs=tinysrgb&w=1600"
              upperText="Real"
              downText="Wedding"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogExploreCard
              image="https://images.pexels.com/photos/2049561/pexels-photo-2049561.jpeg?auto=compress&cs=tinysrgb&w=1600"
              upperText="Dress"
              downText="Guide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogExploreCard
              image="https://images.pexels.com/photos/2218558/pexels-photo-2218558.jpeg?auto=compress&cs=tinysrgb&w=1600"
              upperText="Wedding"
              downText="Ideas"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BlogExplore;
