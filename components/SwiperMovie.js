import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import SwiperMovieCard from "./SwiperMovieCard";
import { useState, useEffect } from "react";

function SwiperMovie() {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = (e) => {
    setWidth(window.innerWidth);
  };
  const WIDTH_THRESHOLD = 768;

  useEffect(() => {
    window.addEventListener(`resize`, updateWidth, {
      capture: false,
      passive: true,
    });
    return () => window.removeEventListener(`resize`, updateWidth);
  }, []);

  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (width < WIDTH_THRESHOLD) {
    return (
      <Swiper
        className="text-xs sm:text-base space-x-2 p-4 my-4 w-3/4 mx-auto"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {num.map((i) => (
          <SwiperSlide key={i} className="">
            <SwiperMovieCard />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <Swiper
      className="text-xs sm:text-base space-x-2 p-4 my-4 w-3/4 mx-auto"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation={{ clickable: true }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {num.map((i) => (
        <SwiperSlide key={i} className="">
          <SwiperMovieCard />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperMovie;
