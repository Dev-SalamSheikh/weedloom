import React from "react";
import PsearchCarousel from "../carousels/PsearchCarousel";
import SectionHeader from "../SectionHeader";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const PopularSearch = () => {
  return (
    <section className="lg:py-14 pt-4">
      <div className="popular_venue container mx-auto md:px-20 px-4">
        <SectionHeader text="Popular Search" />
        <div className="desktop_carousel hidden lg:block">
          <div className="popular_venue_content py-9 px-0 flex flex-wrap items-center justify-between">
            {/* Carousel Items */}
            <div className="carousel__div w-full flex items-center justify-between">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                slidesPerView={3}
                spaceBetween={30}
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
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1280: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  1440: {
                    slidesPerView: 5,
                    spaceBetween: 40,
                  },
                }}
              >
                <SwiperSlide>
                  <PsearchCarousel
                    img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                    text="Bridal Ware in Pakistan"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <PsearchCarousel
                    img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                    text="Bridal Ware in Lahore"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <PsearchCarousel
                    img="https://image.wedmegood.com/resized/300X/uploads/banner_image/1/bridal-wear.jpg"
                    text="Bridal Ware in Islamabad"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <PsearchCarousel
                    img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                    text="Bridal Ware in Faisalabad"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <PsearchCarousel
                    img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                    text="Bridal Ware in Rawalpindi"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <PsearchCarousel
                    img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                    text="Bridal Ware in Rawalpindi"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <PsearchCarousel
                    img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                    text="Bridal Ware in Rawalpindi"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <PsearchCarousel
                    img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                    text="Bridal Ware in Rawalpindi"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <PsearchCarousel
                    img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                    text="Bridal Ware in Rawalpindi"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <div className="mobile__carousel block lg:hidden py-9">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={2}
            spaceBetween={30}
            slidesPerGroup={1}
            grabCursor={true}
            loop={false}
            loopFillGroupWithBlank={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <PsearchCarousel
                img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                text="Bridal Ware in Islamabad"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PsearchCarousel
                img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                text="Bridal Ware in Pakistan"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PsearchCarousel
                img="https://image.wedmegood.com/resized/300X/uploads/banner_image/1/bridal-wear.jpg"
                text="Bridal Ware in Maldives"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PsearchCarousel
                img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                text="Bridal Ware in Faisalabad"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PsearchCarousel
                img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                text="Bridal Ware in Lahore"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PsearchCarousel
                img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                text="Bridal Ware in Rawalpindi"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PsearchCarousel
                img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                text="Bridal Ware in Rawalpindi"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PsearchCarousel
                img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                text="Bridal Ware in Rawalpindi"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PsearchCarousel
                img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                text="Bridal Ware in Rawalpindi"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PopularSearch;
