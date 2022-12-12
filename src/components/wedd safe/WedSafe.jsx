import React from "react";
import WedSafeCarousel from "../carousels/WedSafeCarousel";
import { Swiper, SwiperSlide } from "swiper/react";

const WedSafe = () => {
  return (
    <section className="md:py-14 my-12">
      <div className="wed__safe container mx-auto md:px-20 px-6">
        <div className="wed__safe__container">
          {/* Wedding Safe Header */}
          <div className="wed__safe__header flex justify-between items-center my-3">
            <div className="wed__safe__header__left w-full">
              <div className="sheild__image flex items-center mb-2">
                <img
                  className="md:w-8 w-4"
                  src="./wedsafe_icon.webp"
                  alt="shield__icon"
                />
                <span className="text-textBlue-900 text-xl ml-3 font-semibold">
                  Wedsafe
                </span>
              </div>
              <p className="text-xs md:text-base text-textBlack-900 font-semibold">
                Hire vendors adhering to safety standards.
              </p>
            </div>
            <div className="wed__safe__header__right text-textBlue-900 text-sm font-semibold w-full text-end">
              <a href="*">
                Learn More <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>
          </div>

          {/* Carousel Items */}
          <div className="carousel__div w-full mt-6">
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              slidesPerGroup={1}
              grabCursor={true}
              loop={false}
              loopFillGroupWithBlank={true}
              className="mySwiper"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide>
                <WedSafeCarousel
                  img="./icon_5.webp"
                  heading="Protective Gears"
                  content="Routine use of masks, gloves and sanitizers."
                />
              </SwiperSlide>
              <SwiperSlide>
                <WedSafeCarousel
                  img="./icon_5.webp"
                  heading="Protective Gears 2"
                  content="Routine use of masks, gloves and sanitizers."
                />
              </SwiperSlide>
              <SwiperSlide>
                <WedSafeCarousel
                  img="./icon_5.webp"
                  heading="Protective Gears 3"
                  content="Routine use of masks, gloves and sanitizers."
                />
              </SwiperSlide>
              <SwiperSlide>
                <WedSafeCarousel
                  img="./icon_5.webp"
                  heading="Protective Gears 4"
                  content="Routine use of masks, gloves and sanitizers."
                />
              </SwiperSlide>
              <SwiperSlide>
                <WedSafeCarousel
                  img="./icon_5.webp"
                  heading="Protective Gears 5"
                  content="Routine use of masks, gloves and sanitizers."
                />
              </SwiperSlide>
              <SwiperSlide>
                <WedSafeCarousel
                  img="./icon_5.webp"
                  heading="Protective Gears 6"
                  content="Routine use of masks, gloves and sanitizers."
                />
              </SwiperSlide>
              <SwiperSlide>
                <WedSafeCarousel
                  img="./icon_5.webp"
                  heading="Protective Gears 7"
                  content="Routine use of masks, gloves and sanitizers."
                />
              </SwiperSlide>
              <SwiperSlide>
                <WedSafeCarousel
                  img="./icon_5.webp"
                  heading="Protective Gears 8"
                  content="Routine use of masks, gloves and sanitizers."
                />
              </SwiperSlide>
              <SwiperSlide>
                <WedSafeCarousel
                  img="./icon_5.webp"
                  heading="Protective Gears 9"
                  content="Routine use of masks, gloves and sanitizers."
                />
              </SwiperSlide>
              <SwiperSlide>
                <WedSafeCarousel
                  img="./icon_5.webp"
                  heading="Protective Gears 10"
                  content="Routine use of masks, gloves and sanitizers."
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WedSafe;
