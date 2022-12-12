import React from "react";
import PvenueCarousel from "../carousels/PvenueCarousel";
import SectionHeader from "../SectionHeader";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const PopularVenue = () => {
  return (
    <section className="lg:py-14 mt-12">
      <div className="popular_venue container mx-auto md:px-20 px-4">
        <SectionHeader text="Popular Venues" />
        <div className="popular_venue_content py-9 flex flex-wrap items-center justify-between">
          {/* Carousel Items Desktop*/}
          <div className="hidden lg:block carousel__div w-full">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              slidesPerView={3}
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
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
            >
              <SwiperSlide>
                <PvenueCarousel
                  img="https://images.pexels.com/photos/5834134/pexels-photo-5834134.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  name="5 Star & Above Hotels"
                  link1="popular1"
                  link2="popular2"
                  link3="popular3"
                  link4="popular4"
                  link5="all"
                  link1Text="Lahore"
                  link2Text="Islamabad"
                  link3Text="Gujranwala"
                  link4Text="Rawalpindi"
                />
              </SwiperSlide>
              <SwiperSlide>
                <PvenueCarousel
                  img="https://images.pexels.com/photos/1802253/pexels-photo-1802253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  name="5 Star & Above Hotels"
                  link1="popular1"
                  link2="popular2"
                  link3="popular3"
                  link4="popular4"
                  link5="all"
                  link1Text="Jacobabad"
                  link2Text="Kohat"
                  link3Text="Hafizabad"
                  link4Text="Khanewal"
                />
              </SwiperSlide>
              <SwiperSlide>
                <PvenueCarousel
                  img="https://images.pexels.com/photos/9464804/pexels-photo-9464804.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  name="4 Star & Above Hotels"
                  link1="popular1"
                  link2="popular2"
                  link3="popular3"
                  link4="popular4"
                  link5="all"
                  link1Text="Tando Allahyar"
                  link2Text="Swabi"
                  link3Text="Vehari"
                  link4Text="Daska"
                />
              </SwiperSlide>
              <SwiperSlide>
                <PvenueCarousel
                  img="https://images.pexels.com/photos/303068/pexels-photo-303068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  name="4 Star & Above Hotels"
                  link1="*"
                  link2="*"
                  link3="*"
                  link4="*"
                  link5="*"
                  link1Text="Mr 10 Road"
                  link2Text="Nipania"
                  link3Text="United State"
                  link4Text="France"
                  link5Text="Italy"
                />
              </SwiperSlide>
              <SwiperSlide>
                <PvenueCarousel
                  img="https://images.pexels.com/photos/303068/pexels-photo-303068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  name="4 Star & Above Hotels"
                  link1="*"
                  link2="*"
                  link3="*"
                  link4="*"
                  link5="*"
                  link1Text="Mr 10 Road"
                  link2Text="Nipania"
                  link3Text="United State"
                  link4Text="France"
                  link5Text="Italy"
                />
              </SwiperSlide>
              <SwiperSlide>
                <PvenueCarousel
                  img="https://images.pexels.com/photos/303068/pexels-photo-303068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  name="4 Star & Above Hotels"
                  link1="*"
                  link2="*"
                  link3="*"
                  link4="*"
                  link5="*"
                  link1Text="Mr 10 Road"
                  link2Text="Nipania"
                  link3Text="United State"
                  link4Text="France"
                  link5Text="Italy"
                />
              </SwiperSlide>
              <SwiperSlide>
                <PvenueCarousel
                  img="https://images.pexels.com/photos/303068/pexels-photo-303068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  name="4 Star & Above Hotels"
                  link1="*"
                  link2="*"
                  link3="*"
                  link4="*"
                  link5="*"
                  link1Text="Mr 10 Road"
                  link2Text="Nipania"
                  link3Text="United State"
                  link4Text="France"
                  link5Text="Italy"
                />
              </SwiperSlide>
              <SwiperSlide>
                <PvenueCarousel
                  img="https://images.pexels.com/photos/303068/pexels-photo-303068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  name="4 Star & Above Hotels"
                  link1="*"
                  link2="*"
                  link3="*"
                  link4="*"
                  link5="*"
                  link1Text="Mr 10 Road"
                  link2Text="Nipania"
                  link3Text="United State"
                  link4Text="France"
                  link5Text="Italy"
                />
              </SwiperSlide>
              <SwiperSlide>
                <PvenueCarousel
                  img="https://images.pexels.com/photos/303068/pexels-photo-303068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  name="4 Star & Above Hotels"
                  link1="*"
                  link2="*"
                  link3="*"
                  link4="*"
                  link5="*"
                  link1Text="Mr 10 Road"
                  link2Text="Nipania"
                  link3Text="United State"
                  link4Text="France"
                  link5Text="Italy"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Mobile Venue Box */}
          <div className="block lg:hidden mobile_venue">
            <PvenueCarousel
              img="https://images.pexels.com/photos/2404422/pexels-photo-2404422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              name="5 Star & Above Hotels"
              link1="popular1"
              link2="popular2"
              link3="popular3"
              link4="popular4"
              link5="all"
              link1Text="Lahore"
              link2Text="Islamabad"
              link3Text="Gujranwala"
              link4Text="Rawalpindi"
            />
            <PvenueCarousel
              img="https://images.pexels.com/photos/9290787/pexels-photo-9290787.jpeg?auto=compress&cs=tinysrgb&w=1600"
              name="5 Star & Above Hotels"
              link1="popular1"
              link2="popular2"
              link3="popular3"
              link4="popular4"
              link5="all"
              link1Text="Jacobabad"
              link2Text="Kohat"
              link3Text="Hafizabad"
              link4Text="Khanewal"
            />
            <PvenueCarousel
              img="https://images.pexels.com/photos/9464804/pexels-photo-9464804.jpeg?auto=compress&cs=tinysrgb&w=1600"
              name="4 Star & Above Hotels"
              link1="popular1"
              link2="popular2"
              link3="popular3"
              link4="popular4"
              link5="all"
              link1Text="Tando Allahyar"
              link2Text="Swabi"
              link3Text="Vehari"
              link4Text="Daska"
            />
            <PvenueCarousel
              img="https://images.pexels.com/photos/303068/pexels-photo-303068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              name="4 Star & Above Hotels"
              link1="*"
              link2="*"
              link3="*"
              link4="*"
              link5="*"
              link1Text="Mr 10 Road"
              link2Text="Nipania"
              link3Text="United State"
              link4Text="France"
              link5Text="Italy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularVenue;
