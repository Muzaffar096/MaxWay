"use client";
import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

import sale from "../../../public/aksiya3+.png";
import sale2 from "../../../public/1+1.png";

const Hero = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image className=" rounded-2xl" src={sale} alt="Sale" width={1200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className=" rounded-2xl" src={sale2} alt="Sale" height={520} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
