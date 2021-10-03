import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import SearchIcon from "@mui/icons-material/Search";
import MovieIcon from "@mui/icons-material/Movie";
import HomeIcon from "@mui/icons-material/Home";
import NotStartedIcon from "@mui/icons-material/NotStarted";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import AddIcon from "@mui/icons-material/Add";
import AccessibilityIcon from "@mui/icons-material/Accessibility";

function SwiperCard({ menuTitles }) {
  return (
    <Swiper
      className="text-xs sm:text-base"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={45}
      slidesPerView={6}
      navigation={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="flex border-b border-white justify-center hover:border-b hover:border-gray-400 active:scale-90 cursor-pointer">
        <span className="hidden sm:inline-block">ホーム</span>
        <HomeIcon className="text-white" />
      </SwiperSlide>

      <SwiperSlide className="flex justify-center hover:border-b hover:border-gray-400 active:scale-90 cursor-pointer">
        <span className="hidden sm:inline-block">動画</span>
        <MovieIcon className="text-white" />
      </SwiperSlide>

      <SwiperSlide className="flex justify-center hover:border-b hover:border-gray-400 active:scale-90 cursor-pointer">
        <span className="hidden sm:inline-block">再生リスト</span>
        <NotStartedIcon className=" text-white" />
      </SwiperSlide>

      <SwiperSlide className="flex justify-center hover:border-b hover:border-gray-400 active:scale-90 cursor-pointer">
        <span className="hidden sm:inline-block">チャンネル</span>
        <AddIcon className=" text-white" />
      </SwiperSlide>

      <SwiperSlide className="flex justify-center hover:border-b hover:border-gray-400 active:scale-90 cursor-pointer">
        <span className="hidden sm:inline-block">フリートーク</span>
        <AccessibilityIcon className=" text-white" />
      </SwiperSlide>

      <SwiperSlide className="flex justify-center hover:border-b hover:border-gray-400 active:scale-90 cursor-pointer">
        <span className="hidden sm:inline-block">概要</span>
        <ContentPasteIcon className=" text-white" />
      </SwiperSlide>

      <SwiperSlide className="flex justify-center hover:border-b hover:border-gray-400 active:scale-90 cursor-pointer">
        <span className="hidden sm:inline-block">検索</span>
        <SearchIcon className=" text-white" />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperCard;
