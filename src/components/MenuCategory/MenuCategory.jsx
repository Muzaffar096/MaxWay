"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

const MenuCategory = () => {
  return (
    <div className=" my-5">
      <Swiper
        slidesPerView={7}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <button className=" p-3 rounded-md hover:bg-slate-200 text-sm ml-7">
            🍟🍔🥤MaxiBOX
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className=" p-3 rounded-md hover:bg-slate-200 text-sm">
            🥪Klab-Sendvich
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className=" p-3 rounded-md hover:bg-slate-200 text-sm">
            🌯Lavash
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className=" p-3 rounded-md hover:bg-slate-200 text-sm">
            🌮Shaurma
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className=" p-3 rounded-md hover:bg-slate-200 text-sm">
            🫔Panini
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className=" p-3 rounded-md hover:bg-slate-200 text-sm">
            🍔Burger
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className=" p-3 rounded-md hover:bg-slate-200 text-sm">
            🍱Donar Kebab
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className=" p-3 rounded-md hover:bg-slate-200 text-sm">
            🌭Hot-Dog
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className=" p-3 rounded-md hover:bg-slate-200 text-sm">
            🍟Gazaklar
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className=" p-3 rounded-md hover:bg-slate-200 text-sm">
            🍚Tamaddilar
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className=" p-3 rounded-md hover:bg-slate-200 text-sm">
            🍰Desertlar
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className=" p-3 rounded-md hover:bg-slate-200 text-sm">
            🥤Ichimliklar
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className=" p-3 rounded-md hover:bg-slate-200 text-sm">
            🥫Souslar
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MenuCategory;
