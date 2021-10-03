function SwiperMovieCard() {
  return (
    <a href="https://www.youtube.com/channel/UCKOgDGUgEJtkRFQMha9TyDQ">
      <div className="w-56 hover:opacity-50 hover:scale-95 transition duration-200 cursor-pointer">
        <img src="./thumb.jpg" alt="thumb" />
        <p classname="my-4 line-clamp-1">【Day22】100日後にLINEクリエイターになるチャレンジ</p>
        <p className=" line-clamp-1 text-gray-400">ぐんたろの【クリエイターチャレンジ】</p>
        <p className=" line-clamp-1 text-gray-400">26989回再生・14時間前</p>
      </div>
    </a>
  );
}

export default SwiperMovieCard;
