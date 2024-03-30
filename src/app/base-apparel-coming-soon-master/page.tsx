"use client";

// import styles from "./styles.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const imagePath = "/base-apparel-coming-soon-master/";
  const [email, setEmail] = useState("");
  const [shouldShowError, setShouldShowError] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const isCorrectEmail = email.match(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    );
    if (isCorrectEmail) {
      alert("Thanks for subscribing!");
      setShouldShowError(false);
    } else {
      e.preventDefault();
      setShouldShowError(true);
    }
  }

  return (
    <>
      <div className="flex flex-col md:flex-row">

        {/* 説明、フォームなど */}
        <div
          className="bg-cover w-full md:w-1/2 lg:w-3/5 md:h-screen"
          style={{
            backgroundImage: `url(${imagePath}/bg-pattern-desktop.svg)`,
          }}
        >
          {/* base apparerlから始まる一連の説明など */}
          <div className="lg:pl-40">
            <div className="max-w-md mx-auto px-10">

              {/* ロゴ */}
              <div className="my-8 mb-20 mt-12">
                <Image
                  src={`${imagePath}/logo.svg`}
                  width={36}
                  height={36}
                  className="w-36"
                  alt="logo"
                />
              </div>

              {/* ページ説明ブロック */}
              <div className="md:text-left text-center">
                <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-widest mb-7">
                  <span className="block text-[#ce9797] font-thin">WE'RE</span>
                  <span className="block font-medium text-gray-800">
                    COMING
                  </span>
                  <span className="block font-medium text-gray-800">SOON</span>
                </h1>
                <p className="leading-relaxed text-[#ce9797]">
                  Hello fellow shoppers! We're currently building our new
                  fashion store. Add your email below to stay up-to-date with
                  announcements and our launch deals.
                </p>
              </div>

              {/* フォーム */}
              <form
                onSubmit={handleSubmit}
                className="flex mt-9 rounded-full shadow-[#ce9797] shadow"
              >
                <input
                  type="text"
                  className=" bg-transparent pl-6 py-3 w-full outline-none placeholder-[#ce9797]"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Image
                  src={`${imagePath}/icon-error.svg`}
                  alt="error"
                  width={20}
                  height={20}
                  className={`w-5 h-5 my-auto mr-4 ${
                    !shouldShowError && "invisible"
                  }`}
                />
                <button className="w-28 rounded-full bg-gradient-to-r from-[#f5a8a8] to-[#ea8585]">
                  <Image
                    src={`${imagePath}/icon-arrow.svg`}
                    alt="arrow"
                    width={20}
                    height={20}
                    className="w-4 h-5 mx-auto"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* モデル写真バックグラウンド */}
        <div
          className="bg-cover w-full md:w-1/2 lg:w-2/5 h-screen"
          style={{
            backgroundImage: `url(${imagePath}/hero-desktop.jpg)`,
          }}
        ></div>
      </div>
    </>
  );
}
