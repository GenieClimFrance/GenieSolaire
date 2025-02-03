"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import styles from "./Slider.module.css";
import { slides } from "@/app/data/slides";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-full">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          style={{
            backgroundImage: `url(${slide.image.src})`,
            opacity: activeIndex === index ? 1 : 0,
          }}
          className={styles.backgroundImage}
        />
      ))}

      <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        cssMode={true}
        navigation={true}
        pagination={{ type: "progressbar" }}
        autoplay={{ delay: 5500, disableOnInteraction: true }}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className={`h-full lg:h-[25rem] 2xl:h-[30rem] ${styles.slider}`}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.slide}>
              <h3 className={styles.slideTitle}>{slide.title}</h3>
              {slide.content.map((text, index) => (
                <p key={index} className={styles.slideText}>
                  {text}
                </p>
              ))}
              <button className={styles.slideButton}>En savoir plus</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
