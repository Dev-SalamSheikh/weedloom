import React from "react";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const HowIWCard = () => {
  return (
    <div className="how_it_works_card w-full cursor-pointer">
      <div className="hidden lg:block">
        <div className="single_card_container lg:flex lg:gap-8">
          <div className="card1 group">
            <div className="how_it_works_card_content bg-white group-hover:bg-textPrimary-900 duration-300 shadow-md mt-6 px-4 flex flex-col items-center justify-center py-4 rounded-md">
              <div
                style={{ marginTop: "-62px", padding: "22px 33px" }}
                className="title bg-textPrimary-900 group-hover:bg-white duration-300 rounded-full group-hover:shadow-md text-center"
              >
                <span className="text-white group-hover:text-textPrimary-900 font-bold text-xl lg:text-lg">
                  Step
                  <p className="text-3xl">1</p>
                </span>
              </div>
              <div className="step_details text-center mt-4">
                <p className="text-sm text-textSecondary-900 font-medium leading-7 group-hover:text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                  iusto necessitatibus labore nihil ab repellendus fugiat odio
                  velit expedita deleniti?
                </p>
              </div>
            </div>
          </div>
          <div className="card2 group">
            <div className="how_it_works_card_content bg-white group-hover:bg-textPrimary-900 duration-300 shadow-md mt-6 px-4 flex flex-col items-center justify-center py-4 rounded-md">
              <div
                style={{ marginTop: "-62px", padding: "22px 33px" }}
                className="title bg-textPrimary-900 group-hover:bg-white duration-300 rounded-full group-hover:shadow-md text-center"
              >
                <span className="text-white group-hover:text-textPrimary-900 font-bold text-xl lg:text-lg">
                  Step
                  <p className="text-3xl">2</p>
                </span>
              </div>
              <div className="step_details text-center mt-4">
                <p className="text-sm text-textSecondary-900 font-medium leading-7 group-hover:text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                  iusto necessitatibus labore nihil ab repellendus fugiat odio
                  velit expedita deleniti?l
                </p>
              </div>
            </div>
          </div>
          <div className="card3 group">
            <div className="how_it_works_card_content bg-white group-hover:bg-textPrimary-900 duration-300 shadow-md mt-6 px-4 flex flex-col items-center justify-center py-4 rounded-md">
              <div
                style={{ marginTop: "-62px", padding: "22px 33px" }}
                className="title bg-textPrimary-900 group-hover:bg-white duration-300 rounded-full group-hover:shadow-md text-center"
              >
                <span className="text-white group-hover:text-textPrimary-900 font-bold text-xl lg:text-lg">
                  Step
                  <p className="text-3xl">3</p>
                </span>
              </div>
              <div className="step_details text-center mt-4">
                <p className="text-sm text-textSecondary-900 font-medium leading-7 group-hover:text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                  iusto necessitatibus labore nihil ab repellendus fugiat odio
                  velit expedita deleniti?
                </p>
              </div>
            </div>
          </div>
          <div className="card4 group">
            <div className="how_it_works_card_content bg-white group-hover:bg-textPrimary-900 duration-300 shadow-md mt-6 px-4 flex flex-col items-center justify-center py-4 rounded-md">
              <div
                style={{ marginTop: "-62px", padding: "22px 33px" }}
                className="title bg-textPrimary-900 group-hover:bg-white duration-300 rounded-full group-hover:shadow-md text-center"
              >
                <span className="text-white group-hover:text-textPrimary-900 font-bold text-xl lg:text-lg">
                  Step
                  <p className="text-3xl">4</p>
                </span>
              </div>
              <div className="step_details text-center mt-4">
                <p className="text-sm text-textSecondary-900 font-medium leading-7 group-hover:text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                  iusto necessitatibus labore nihil ab repellendus fugiat odio
                  velit expedita deleniti?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Container */}
      <div className="w-full block lg:hidden h-full">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          grabCursor={true}
          loop={false}
          loopFillGroupWithBlank={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card1 group w-full">
              <div className="how_it_works_card_content bg-white group-hover:bg-textPrimary-900 duration-300 shadow-xl mt-16 px-4 flex flex-col items-center justify-center pb-6 rounded-md">
                <div
                  style={{ marginTop: "-50px", padding: "22px 33px" }}
                  className="title bg-textPrimary-900 group-hover:bg-white duration-300 rounded-full group-hover:shadow-md text-center"
                >
                  <span className="text-white group-hover:text-textPrimary-900 font-bold text-xl lg:text-lg">
                    Step
                    <p className="text-3xl">1</p>
                  </span>
                </div>
                <div className="step_details text-center mt-4">
                  <p className="text-sm text-textSecondary-900 font-medium leading-7 group-hover:text-white">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Vel iusto necessitatibus labore nihil ab repellendus fugiat
                    odio velit expedita deleniti?
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card1 group w-full">
              <div className="how_it_works_card_content bg-white group-hover:bg-textPrimary-900 duration-300 shadow-xl mt-16 px-4 flex flex-col items-center justify-center pb-6 rounded-md">
                <div
                  style={{ marginTop: "-50px", padding: "22px 33px" }}
                  className="title bg-textPrimary-900 group-hover:bg-white duration-300 rounded-full group-hover:shadow-md text-center"
                >
                  <span className="text-white group-hover:text-textPrimary-900 font-bold text-xl lg:text-lg">
                    Step
                    <p className="text-3xl">2</p>
                  </span>
                </div>
                <div className="step_details text-center mt-4">
                  <p className="text-sm text-textSecondary-900 font-medium leading-7 group-hover:text-white">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Vel iusto necessitatibus labore nihil ab repellendus fugiat
                    odio velit expedita deleniti?
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card1 group w-full">
              <div className="how_it_works_card_content bg-white group-hover:bg-textPrimary-900 duration-300 shadow-xl mt-16 px-4 flex flex-col items-center justify-center pb-6 rounded-md">
                <div
                  style={{ marginTop: "-50px", padding: "22px 33px" }}
                  className="title bg-textPrimary-900 group-hover:bg-white duration-300 rounded-full group-hover:shadow-md text-center"
                >
                  <span className="text-white group-hover:text-textPrimary-900 font-bold text-xl lg:text-lg">
                    Step
                    <p className="text-3xl">3</p>
                  </span>
                </div>
                <div className="step_details text-center mt-4">
                  <p className="text-sm text-textSecondary-900 font-medium leading-7 group-hover:text-white">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Vel iusto necessitatibus labore nihil ab repellendus fugiat
                    odio velit expedita deleniti?
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card1 group w-full">
              <div className="how_it_works_card_content bg-white group-hover:bg-textPrimary-900 duration-300 shadow-xl mt-16 px-4 flex flex-col items-center justify-center pb-6 rounded-md">
                <div
                  style={{ marginTop: "-50px", padding: "22px 33px" }}
                  className="title bg-textPrimary-900 group-hover:bg-white duration-300 rounded-full group-hover:shadow-md text-center"
                >
                  <span className="text-white group-hover:text-textPrimary-900 font-bold text-xl lg:text-lg">
                    Step
                    <p className="text-3xl">4</p>
                  </span>
                </div>
                <div className="step_details text-center mt-4">
                  <p className="text-sm text-textSecondary-900 font-medium leading-7 group-hover:text-white">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Vel iusto necessitatibus labore nihil ab repellendus fugiat
                    odio velit expedita deleniti?
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HowIWCard;
