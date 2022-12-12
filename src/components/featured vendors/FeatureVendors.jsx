import React from "react";
import SectionHeader from "../SectionHeader";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import FvendrosCarousel from "../carousels/FvendrosCarousel";

const FeatureVendors = () => {
  return (
    <section className="lg:py-14">
      <div className="popular_venue container mx-auto md:px-20 px-4 text-white">
        <SectionHeader text="Featured Vendors" />
        <div className="popular_venue_content py-9 px-0 flex flex-wrap items-center justify-between">
          {/* Carousel Items */}
          <div className="carousel__div w-full flex items-center justify-between">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              slidesPerGroup={1}
              grabCursor={true}
              loop={false}
              loopFillGroupWithBlank={true}
              className="mySwiper w-full"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 70,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1440: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide>
                <FvendrosCarousel
                  img="https://images.pexels.com/photos/2124722/pexels-photo-2124722.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  name="Vanity Affair By Anmol"
                  summary="Bridal Makeup"
                  price="Rs. 16,000"
                  rating="4.9"
                />
              </SwiperSlide>
              <SwiperSlide>
                <FvendrosCarousel
                  img="https://images.pexels.com/photos/2053852/pexels-photo-2053852.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  name="Vanity Affair By Anmol"
                  summary="Bridal Makeup"
                  price="Rs. 16,000"
                  rating="5.0"
                />
              </SwiperSlide>
              <SwiperSlide>
                <FvendrosCarousel
                  img="https://images.pexels.com/photos/2106685/pexels-photo-2106685.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  name="Vanity Affair By Anmol"
                  summary="Bridal Makeup"
                  price="Rs. 16,000"
                  rating="4.5"
                />
              </SwiperSlide>
              <SwiperSlide>
                <FvendrosCarousel
                  img="https://images.pexels.com/photos/1282636/pexels-photo-1282636.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  name="Vanity Affair By Anmol"
                  summary="Bridal Makeup"
                  price="Rs. 16,000"
                  rating="4.9"
                />
              </SwiperSlide>
              <SwiperSlide>
                <FvendrosCarousel
                  img="https://images.pexels.com/photos/2124722/pexels-photo-2124722.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  name="Vanity Affair By Anmol"
                  summary="Bridal Makeup"
                  price="Rs. 16,000"
                  rating="4.8"
                />
              </SwiperSlide>
              <SwiperSlide>
                <FvendrosCarousel
                  img="https://images.pexels.com/photos/2124722/pexels-photo-2124722.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  name="Vanity Affair By Anmol"
                  summary="Bridal Makeup"
                  price="Rs. 16,000"
                  rating="5.0"
                />
              </SwiperSlide>

              <SwiperSlide>
                <FvendrosCarousel
                  img="https://image.wedmegood.com/resized/450X/uploads/images/d2f380bdc1ac49b3a21427c5f6e0cb85realwedding/ShivaniSiddhant-275.jpeg?crop=10,125,2027,1140"
                  name="Vanity Affair By Anmol"
                  summary="Bridal Makeup"
                  price="Rs. 16,000"
                  rating="4.7"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureVendors;
