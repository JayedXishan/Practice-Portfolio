import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Skills = () => {
  return (
    <div className="lg:w-[1170px] mx-auto mt-[150px] mb-[100px]">
      <div>
        <h3 className=" text-center text-2xl font-extrabold">
          Skills & Technologies
        </h3>

        <div className="mt-[40px]">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={4}
            spaceBetween={30}
            autoplay={{ delay: 1000 }}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="rounded-md w-[100px] h-[100px] bg-gray-900 p-4 flex-col justify-center items-center">
                <img
                  className="w-[100px] h-[100px]"
                  src="https://i.ibb.co/NWK52Lt/CSS.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md w-[100px] h-[100px] bg-gray-900 p-4 flex justify-center items-center">
                <img
                  className="w-[100px] h-[100px]"
                  src="https://i.ibb.co/D7Z6njf/html.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md w-[100px] h-[100px] bg-gray-900 p-4 flex justify-center items-center">
                <img
                  className="w-[100px] h-[100px]"
                  src="https://i.ibb.co/2nygFkX/javascript.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md w-[100px] h-[100px] bg-gray-900 p-4 flex justify-center items-center">
                <img
                  className="w-[100px] h-[100px]"
                  src="https://i.ibb.co/SPv6gNS/react.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md w-[100px] h-[100px] bg-gray-900 p-4 flex justify-center items-center">
                <img
                  className="w-[100px] h-[100px]"
                  src="https://i.ibb.co/cJDCm2v/tailwind.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md w-[100px] h-[100px] bg-gray-900 p-4 flex justify-center items-center">
                <img
                  className="w-[100px] h-[100px]"
                  src="https://i.ibb.co/ZBr77qB/firebase.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md w-[100px] h-[100px] bg-gray-900 p-4 flex justify-center items-center">
                <img
                  className="w-[100px] h-[100px]"
                  src="https://i.ibb.co/Y3xKW0v/Express.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md w-[100px] h-[100px] bg-gray-900 p-4 flex justify-center items-center">
                <img
                  className="w-[100px] h-[100px]"
                  src="https://i.ibb.co/MNqpbMP/jwt.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md w-[100px] h-[100px] bg-gray-900 p-4 flex justify-center items-center">
                <img
                  className="w-[100px] h-[100px]"
                  src="https://i.ibb.co/Y30QQK9/mongo.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Skills;
