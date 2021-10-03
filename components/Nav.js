import { useState } from "react";
import { Avatar } from "@mui/material";
import { Button } from "@mui/material";
import NavMenu from "./NavMenu";

function Nav({ setShowModal }) {
  return (
    <div className="mx-auto bg-[#151516]">
      <div className="flex justify-center items-center space-x-4 p-4 ">
        <Avatar className="w-20 h-20 hover:animate-pulse" src="./main.png" />
        <div className="max-w-md">
          <h2 className="font-bold text-2xl">
            ぐんたろの【100日後にLINEクリエイターになるチャレンジ】
          </h2>
          <p className="text-gray-400 hover:animate-bounce">
            チャンネル登録者 <span>145444</span>人{" "}
          </p>
        </div>

        <div className="hidden sm:block space-x-3">
          <Button onClick={() => setShowModal(true)} variant="contained">
            チャンネル登録
          </Button>
          <Button variant="contained">
            <a href="https:/guntaro.blog">もっと登録</a>
          </Button>
        </div>
      </div>
      <NavMenu />
    </div>
  );
}

export default Nav;
