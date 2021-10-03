import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import Link from "next/link";
import { IconButton } from "@mui/material";

function Sidebar({ setIsSearch }) {
  return (
    <div className="flex fixed flex-shrink-0 flex-col top-[72px] z-40 items-center h-screen w-20 bg-[#151516]">
      <Link href="/">
        <a className="my-4 flex flex-col items-center hover:text-blue-500">
          <IconButton
            className="active:scale-90 transition transform duration-200 bg-black"
            onClick={() => setIsSearch(true)}
          >
            <HomeIcon className="text-white" />
          </IconButton>
          <p className="text-sm textcenter">ホーム</p>
        </a>
      </Link>

      <div>
        <a className="my-4 flex flex-col items-center hover:text-blue-500">
          <IconButton
            className="active:scale-90 transition transform duration-200 bg-black"
            onClick={() => setIsSearch(false)}
          >
            <ExploreIcon className="text-white" />
          </IconButton>
          <p className="text-xs text-center">探索</p>
        </a>
      </div>

      <a
        className="my-4 flex flex-col items-center hover:text-blue-500"
        href="https://www.youtube.com/channel/UCKOgDGUgEJtkRFQMha9TyDQ"
      >
        <IconButton className="active:scale-90 transition transform duration-200">
          <SubscriptionsIcon className="text-white" />
        </IconButton>
        <p className="text-xs text-center">登録Channel</p>
      </a>

      <a
        className="my-4 flex flex-col items-center hover:text-blue-500"
        href="https://www.youtube.com/channel/UCKOgDGUgEJtkRFQMha9TyDQ"
      >
        <IconButton className="active:scale-90 transition transform duration-200">
          <DynamicFeedIcon className="text-white" />
        </IconButton>
        <p className="text-xs text-center">ラリブラリー</p>
      </a>
    </div>
  );
}

export default Sidebar;
