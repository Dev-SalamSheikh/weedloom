import React from "react";
import SectionHeader from "../SectionHeader";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import GLookCarousel from "../carousels/GLookCarousel";

const GalleryLook = () => {
  return (
    <section className="lg:py-14">
      <div className="popular_venue container mx-auto md:px-20 px-4">
        <SectionHeader text="Gallery To Look For" />
        <div className="desktop_view hidden xl:block">
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
                  <GLookCarousel
                    img="https://image.wedmegood.com/resized/300X/uploads/im_cat_image/4/outfits.jpg"
                    text="Bridal Ware in Lahore"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <GLookCarousel
                    img="https://image.wedmegood.com/resized/300X/uploads/im_cat_image/4/outfits.jpg"
                    text="Bridal Ware in Pakistan"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <GLookCarousel
                    img="https://image.wedmegood.com/resized/300X/uploads/im_cat_image/4/outfits.jpg"
                    text="Bridal Ware in Faisalabad"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <GLookCarousel
                    img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                    text="Bridal Ware in Islamabad"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <GLookCarousel
                    img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                    text="Bridal Ware in Karachi"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <GLookCarousel
                    img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                    text="Bridal Ware in Multan"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <GLookCarousel
                    img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                    text="Bridal Ware in Sukkur"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <GLookCarousel
                    img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                    text="Bridal Ware in Okara"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <GLookCarousel
                    img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                    text="Bridal Ware in Nawabshah"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <GLookCarousel
                    img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                    text="Bridal Ware in Jhelum"
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
              <GLookCarousel
                img="https://image.wedmegood.com/resized/300X/uploads/im_cat_image/4/outfits.jpg"
                text="Bridal Ware in Lahore"
              />
            </SwiperSlide>
            <SwiperSlide>
              <GLookCarousel
                img="https://image.wedmegood.com/resized/300X/uploads/im_cat_image/4/outfits.jpg"
                text="Bridal Ware in Pakistan"
              />
            </SwiperSlide>
            <SwiperSlide>
              <GLookCarousel
                img="https://image.wedmegood.com/resized/300X/uploads/im_cat_image/4/outfits.jpg"
                text="Bridal Ware in Faisalabad"
              />
            </SwiperSlide>
            <SwiperSlide>
              <GLookCarousel
                img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                text="Bridal Ware in Islamabad"
              />
            </SwiperSlide>
            <SwiperSlide>
              <GLookCarousel
                img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                text="Bridal Ware in Karachi"
              />
            </SwiperSlide>
            <SwiperSlide>
              <GLookCarousel
                img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                text="Bridal Ware in Multan"
              />
            </SwiperSlide>
            <SwiperSlide>
              <GLookCarousel
                img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                text="Bridal Ware in Sukkur"
              />
            </SwiperSlide>
            <SwiperSlide>
              <GLookCarousel
                img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                text="Bridal Ware in Okara"
              />
            </SwiperSlide>
            <SwiperSlide>
              <GLookCarousel
                img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                text="Bridal Ware in Nawabshah"
              />
            </SwiperSlide>
            <SwiperSlide>
              <GLookCarousel
                img="https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
                text="Bridal Ware in Jhelum"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default GalleryLook;
