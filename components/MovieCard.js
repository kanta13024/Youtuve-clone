import { Avatar } from "@mui/material";

function MovieCard({ title }) {
  return (
    <div className="flex p-5 my-4 hover:scale-95 hover:opacity-50 active:scale-105 transition transform duration-200 cursor-pointer">
      <img className="h-40 sm:h-52 mr-7" src="./thumb.jpg" alt="thumb" />
      <div className="flex flex-col max-w-4xl items-start">
        {title !== "" ? (
          <h2 className="font-bold line-clamp-3">{title}</h2>
        ) : (
          <h2 className="font-bold line-clamp-3">
            ぐんたろの【プログラミングスクール】でできうようになったこと
          </h2>
        )}
        <p className="text-xs text-gray-400">23442回再生・1日前</p>
        <div>
          <Avatar className="mr-4 my-2" src="./main.png" />
          <div className="text-xs text-gray-400 line-clamp-1">
            ぐんたろの【クリエイターチャレンジ】
          </div>
        </div>

        <div>
          <p className="text-xs text-gray-400 line-clamp-1 sm:line-clamp-3">
            プログラミングスクールってどうなんだろう？」
            「自分にもプログラミングができるようになるかな？」
            「実際にプログラミングスクールに入ったらプログラミングスクールってどうなんだろう？」
            プログラミングスクールってどうなんだろう？」
            「自分にもプログラミングができるようになるかな？」
            「実際にプログラミングスクールに入ったらプログラミングスクールってどうなんだろう？」プログラミングスクールってどうなんだろう？」
            「自分にもプログラミングができるようになるかな？」
            「実際にプログラミングスクールに入ったらプログラミングスクールってどうなんだろう？」
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
