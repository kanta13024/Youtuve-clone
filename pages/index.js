import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Modal from "../components/Modal";
import SwiperMovie from "../components/SwiperMovie";
import MovieCard from "../components/MovieCard";
import WithLoading from "../components/WithLoading";
import { getData } from "../components/function/data";

function Home() {
  const [searchText, setSearchText] = useState("");
  const [isSearch, setIsSearch] = useState(true);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Head>
        <title>ぐんたろんち!のYoutubeClone</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="bg-black text-white">
        {/* Header */}
        <Header setIsSearch={setIsSearch} setSearchText={setSearchText} />
        {/* Sidebar */}
        <div className="flex">
          <Sidebar setIsSearch={setIsSearch} />

          <div className="w-full mt-[72px] ml-[80px] overflow-y-auto ">
            {isSearch && (
              <>
                {/* Banner */}
                <Banner />
                {/* Nav */}
                <Nav setShowModal={setShowModal} />

                {/* Swiper */}
                <SwiperMovie />
                <SwiperMovie />
              </>
            )}

            {/* Body */}
            <div>
              <MovieCard title={searchText} />
              <MovieCard title={"Youtuberになるための必勝方法"} />
              <MovieCard title={"youtubeの楽しみ方"} />
              <MovieCard title={"チャンネル登録チャンネル登録"} />
              <MovieCard title={"ぐんたろTVえっぶりでー"} />
            </div>
          </div>
        </div>
      </main>
      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  );
}

export default WithLoading(Home, getData);
