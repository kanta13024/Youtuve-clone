import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import WidgetsIcon from "@mui/icons-material/Widgets";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Avatar from "@mui/material/Avatar";
import MenuDrawer from "./MenuDrawer";
import SlideSidebar from "./SlideSidebar";
import { IconButton, Button } from "@mui/material";

function Header({ setIsSearch, setSearchText }) {
  const [text, setText] = useState("");
  const router = useRouter();

  const submitForm = (e) => {
    if (text !== "") {
      e.preventDefault();
      setSearchText(text);
      setIsSearch(false);
    }
  };

  const linkHome = () => {
    setIsSearch(true);
    setSearchText("");
    router.push("/");
  };

  return (
    <div className="flex fixed z-50 w-full justify-between bg-[#151516] items-center p-2">
      {/* Left */}
      <div classname="flex items-center w-60">
        <SlideSidebar linkHome={linkHome} />

        <img
          onClick={() => linkHome()}
          className="h-10 inline-block cursor-pointer hover:animate-pulse active:scale-90 transition duaration-200"
          src="./logo-guntaro.png"
          alt="logo"
        />
      </div>

      {/* Center(Search Area ) */}
      <form onSubmit={submitForm} className="hidden md:block md:flex-grow max-w-3xl">
        <div className=" flex items-center">
          <input
            className="bg-black p-2 border focus:shadow-md border-gray-700 focus-within:border-blue-300 w-full text-white outline-none"
            type="text"
            placeholder="検索"
            valu={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button onClick={submitForm} className="bg-black mr-2">
            <SearchIcon className="h-8 text-white" />
          </Button>
          <IconButton className="bg-black active:scale-90 transition transform duration-200">
            <MicIcon className=" text-white" />
          </IconButton>
        </div>
      </form>

      {/* Right(Switch Icons...) */}
      <div classname="flex ">
        <MenuDrawer
          Icon={VideoCallIcon}
          SubIcon={BookmarkBorderIcon}
          url={"https://guntaro.blog/"}
          title={"動画のアップロード"}
          content={"ショート動画"}
        />

        <MenuDrawer
          Icon={WidgetsIcon}
          SubIcon={ThumbUpIcon}
          url={"https://www.youtube.com/channel/UCKOgDGUgEJtkRFQMha9TyDQ"}
          title={"ぐんたろのYoutubeへ"}
          content={"ぐんたろのブログへ"}
        />

        <MenuDrawer
          Icon={NotificationsIcon}
          SubIcon={BookmarkBorderIcon}
          url={"https://guntaro.blog/"}
          title={"通知"}
          content={"お問い合わせ"}
        />

        <MenuDrawer
          Icon={Avatar}
          SubIcon={BookmarkBorderIcon}
          url={"https://guntaro.blog/"}
          title={"プロフィールへ"}
          content={"ぐんたろのプロフィール"}
        />
      </div>
    </div>
  );
}

export default Header;
