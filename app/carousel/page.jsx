"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning } from '@fortawesome/free-solid-svg-icons';

export default function SwiperCarouselCode() {
  const codeNormal = `
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

export default function NormalCarousel() {
  return (
    <Swiper spaceBetween={10} slidesPerView={1}>
      <SwiperSlide><img src="https://placehold.co/600x400" alt="Image 1" /></SwiperSlide>
      <SwiperSlide><img src="https://placehold.co/600x400" alt="Image 2" /></SwiperSlide>
      <SwiperSlide><img src="https://placehold.co/600x400" alt="Image 3" /></SwiperSlide>
    </Swiper>
  );
}
`;

  const code21_4 = `
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

export default function RatioCarousel() {
  return (
    <Swiper spaceBetween={10} slidesPerView={1}>
      <SwiperSlide><img src="https://placehold.co/2100x400" alt="Image 1" /></SwiperSlide>
      <SwiperSlide><img src="https://placehold.co/2100x400" alt="Image 2" /></SwiperSlide>
      <SwiperSlide><img src="https://placehold.co/2100x400" alt="Image 3" /></SwiperSlide>
    </Swiper>
  );
}
`;

  const code3x9_16 = `
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

export default function ThreeLandscapeCarousels() {
  return (
    <div className="flex justify-between">
      <div className="w-1/3">
        <Swiper spaceBetween={10} slidesPerView={1}>
          <SwiperSlide><img src="https://placehold.co/600x1066" alt="Image 1" /></SwiperSlide>
          <SwiperSlide><img src="https://placehold.co/600x1066" alt="Image 2" /></SwiperSlide>
          <SwiperSlide><img src="https://placehold.co/600x1066" alt="Image 3" /></SwiperSlide>
        </Swiper>
      </div>
      <div className="w-1/3">
        <Swiper spaceBetween={10} slidesPerView={1}>
          <SwiperSlide><img src="https://placehold.co/600x1066" alt="Image 1" /></SwiperSlide>
          <SwiperSlide><img src="https://placehold.co/600x1066" alt="Image 2" /></SwiperSlide>
          <SwiperSlide><img src="https://placehold.co/600x1066" alt="Image 3" /></SwiperSlide>
        </Swiper>
      </div>
      <div className="w-1/3">
        <Swiper spaceBetween={10} slidesPerView={1}>
          <SwiperSlide><img src="https://placehold.co/600x1066" alt="Image 1" /></SwiperSlide>
          <SwiperSlide><img src="https://placehold.co/600x1066" alt="Image 2" /></SwiperSlide>
          <SwiperSlide><img src="https://placehold.co/600x1066" alt="Image 3" /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
`;

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen gap-4 px-5 py-20">

      {/* Normal Carousel */}
      <div className="flex w-full gap-4 mb-4">
        <div className="w-1/2 text-xs">
          <h2 className="text-base">Pre-requisites:</h2>
          <div className="bg-neutral-800">
            <p className="p-2 text-white">npm install swiper</p>
          </div>
          <br />
          <h2 className="text-base">Other Notes:</h2>
          <p><FontAwesomeIcon icon={faWarning} /> Ensure you import the Swiper styles.</p>
        </div>
        <div className="w-1/2">
          <div className="flex items-center justify-between w-full px-10 py-2 text-white rounded-t-lg bg-neutral-700">
            <h2>Normal Carousel</h2>
            <button onClick={() => copyCode(codeNormal)} className="p-2 rounded bg-neutral-500">
              Copy Code
            </button>
          </div>
          <div className="w-full p-5 text-xs bg-neutral-800 h-[60vh] overflow-scroll text-white">
            <pre>
              <code>{codeNormal}</code>
            </pre>  
          </div>
        </div>
      </div>

      {/* 21:4 Ratio Carousel */}
      <div className="flex w-full gap-4 mb-4">
        <div className="w-1/2 text-xs">

        </div>
        <div className="w-1/2">
          <div className="flex items-center justify-between w-full px-10 py-2 text-white rounded-t-lg bg-neutral-700">
            <h2>21:4 Ratio Carousel</h2>
            <button onClick={() => copyCode(code21_4)} className="p-2 rounded bg-neutral-500">
              Copy Code
            </button>
          </div>
          <div className="w-full p-5 text-xs bg-neutral-800 h-[60vh] overflow-scroll text-white">
            <pre>
              <code>{code21_4}</code>
            </pre>  
          </div>
        </div>
      </div>

      {/* Three 9:16 Carousels */}
      <div className="flex w-full gap-4">
        <div className="w-1/2 text-xs">

        </div>
        <div className="w-1/2">
          <div className="flex items-center justify-between w-full px-10 py-2 text-white rounded-t-lg bg-neutral-700">
            <h2>Three 9:16 Carousels</h2>
            <button onClick={() => copyCode(code3x9_16)} className="p-2 rounded bg-neutral-500">
              Copy Code
            </button>
          </div>
          <div className="w-full p-5 text-xs bg-neutral-800 h-[60vh] overflow-scroll text-white">
            <pre>
              <code>{code3x9_16}</code>
            </pre>  
          </div>
        </div>
      </div>
    </section>
  );
}
