import React, { Component } from "react";
import "./../theme/carosel.css";
import "swiper/css";
// import required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import OpportunityCard from "./opportunity-card";

const SuccessCarousel = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: "auto",
          },
          // when window width is >= 768px
          1080: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={40}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper !mt-[-1em]"
      >
        <SwiperSlide className="swiper-slide mt-12 flex justify-center">
          <div className="bg-white w-[280px]  pt-[3em] pb-[4em] px-4  mt-7 mb-7 text-center rounded-[30px] relative">
            <div className="flex justify-center">
              <img
                src="assets/images/bbc.png"
                alt="bbc-owais"
                className="w-[60px] mb-8"
              />
            </div>
            <h1 className="text-[#77838F]">فوربس الشرق الأوسط </h1>
            <h1 className="text-[#9ca6afd2] mt-4 text-[.75rem] text-end leading-6">
              شركة سيركليز ترفع قيمتها بعد حصولها على استثمار بقيمة 5 مليون ريال
              من منصة سكوبير المالية. كبراء المستثمرين يتوقعون زيادة في قيمة
              الشركة حتى وصولها الى 100 مليون ريال سعودي خلال الأشهر القادمة.
            </h1>
            <img
              src="assets/images/black-line.png"
              alt="bbc-owais"
              className="absolute left-[25%] bottom-[10px] w-[150px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide mt-12 flex justify-center">
          <div className="bg-white w-[280px]  pt-[3em] pb-[4em] px-4  mt-7 mb-7 text-center rounded-[30px] relative">
            <div className="flex justify-center">
              <img
                src="assets/images/forbes.png"
                alt="bbc-owais"
                className="w-[60px] mb-8"
              />
            </div>
            <h1 className="text-[#77838F]">فوربس الشرق الأوسط </h1>
            <h1 className="text-[#9ca6afd2] mt-4 text-[.75rem] text-end leading-6">
              شركة سيركليز ترفع قيمتها بعد حصولها على استثمار بقيمة 5 مليون ريال
              من منصة سكوبير المالية. كبراء المستثمرين يتوقعون زيادة في قيمة
              الشركة حتى وصولها الى 100 مليون ريال سعودي خلال الأشهر القادمة.
            </h1>
            <img
              src="assets/images/black-line.png"
              alt="bbc-owais"
              className="absolute left-[25%] bottom-[10px] w-[150px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide mt-12 flex justify-center">
          <div className="bg-white w-[280px]  pt-[3em] pb-[4em] px-4  mt-7 mb-7 text-center rounded-[30px] relative">
            <div className="flex justify-center">
              <img
                src="assets/images/cnn.png"
                alt="bbc-owais"
                className="w-[60px] mb-8"
              />
            </div>
            <h1 className="text-[#77838F]">فوربس الشرق الأوسط </h1>
            <h1 className="text-[#9ca6afd2] mt-4 text-[.75rem] text-end leading-6">
              شركة سيركليز ترفع قيمتها بعد حصولها على استثمار بقيمة 5 مليون ريال
              من منصة سكوبير المالية. كبراء المستثمرين يتوقعون زيادة في قيمة
              الشركة حتى وصولها الى 100 مليون ريال سعودي خلال الأشهر القادمة.
            </h1>
            <img
              src="assets/images/black-line.png"
              alt="bbc-owais"
              className="absolute left-[25%] bottom-[10px] w-[150px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide mt-12 flex justify-center">
          <div className="bg-white w-[280px]  pt-[3em] pb-[4em] px-4  mt-7 mb-7 text-center rounded-[30px] relative">
            <div className="flex justify-center">
              <img
                src="assets/images/bbc.png"
                alt="bbc-owais"
                className="w-[60px] mb-8"
              />
            </div>
            <h1 className="text-[#77838F]">فوربس الشرق الأوسط </h1>
            <h1 className="text-[#9ca6afd2] mt-4 text-[.75rem] text-end leading-6">
              شركة سيركليز ترفع قيمتها بعد حصولها على استثمار بقيمة 5 مليون ريال
              من منصة سكوبير المالية. كبراء المستثمرين يتوقعون زيادة في قيمة
              الشركة حتى وصولها الى 100 مليون ريال سعودي خلال الأشهر القادمة.
            </h1>
            <img
              src="assets/images/black-line.png"
              alt="bbc-owais"
              className="absolute left-[25%] bottom-[10px] w-[150px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide mt-12 flex justify-center">
          <div className="bg-white w-[280px]  pt-[3em] pb-[4em] px-4  mt-7 mb-7 text-center rounded-[30px] relative">
            <div className="flex justify-center">
              <img
                src="assets/images/forbes.png"
                alt="bbc-owais"
                className="w-[60px] mb-8"
              />
            </div>
            <h1 className="text-[#77838F]">فوربس الشرق الأوسط </h1>
            <h1 className="text-[#9ca6afd2] mt-4 text-[.75rem] text-end leading-6">
              شركة سيركليز ترفع قيمتها بعد حصولها على استثمار بقيمة 5 مليون ريال
              من منصة سكوبير المالية. كبراء المستثمرين يتوقعون زيادة في قيمة
              الشركة حتى وصولها الى 100 مليون ريال سعودي خلال الأشهر القادمة.
            </h1>
            <img
              src="assets/images/black-line.png"
              alt="bbc-owais"
              className="absolute left-[25%] bottom-[10px] w-[150px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide mt-12 flex justify-center">
          <div className="bg-white w-[280px]  pt-[3em] pb-[4em] px-4  mt-7 mb-7 text-center rounded-[30px] relative">
            <div className="flex justify-center">
              <img
                src="assets/images/cnn.png"
                alt="bbc-owais"
                className="w-[60px] mb-8"
              />
            </div>
            <h1 className="text-[#77838F]">فوربس الشرق الأوسط </h1>
            <h1 className="text-[#9ca6afd2] mt-4 text-[.75rem] text-end leading-6">
              شركة سيركليز ترفع قيمتها بعد حصولها على استثمار بقيمة 5 مليون ريال
              من منصة سكوبير المالية. كبراء المستثمرين يتوقعون زيادة في قيمة
              الشركة حتى وصولها الى 100 مليون ريال سعودي خلال الأشهر القادمة.
            </h1>
            <img
              src="assets/images/black-line.png"
              alt="bbc-owais"
              className="absolute left-[25%] bottom-[10px] w-[150px]"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SuccessCarousel;
