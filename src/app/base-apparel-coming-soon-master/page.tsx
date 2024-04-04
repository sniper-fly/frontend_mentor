"use client";

// import styles from "./styles.module.css";
import Image from "next/image";
import registerEmail from "./registerEmail";
import { FormState } from "./registerEmail";
import { useFormState } from "react-dom";

export default function Page() {
  const imgPath = "/base-apparel-coming-soon-master/";
  const initialState: FormState = { errors: {} };
  const [errorState, dispatch] = useFormState<FormState, FormData>(
    registerEmail,
    initialState
  );

  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* 説明、フォームなど */}
        <div className="bg-cover bg-[url(/base-apparel-coming-soon-master/bg-pattern-desktop.svg)] w-full md:w-1/2 lg:w-3/5 md:h-screen">
          {/* base apparerlから始まる一連の説明など */}
          <div className="lg:pl-40">
            {/* ロゴ */}
            <div className="px-10 my-8 md:mb-20 md:mt-12">
              <Image
                src={`${imgPath}/logo.svg`}
                width={36}
                height={36}
                className="w-24 md:w-36"
                alt="logo"
              />
            </div>

            {/* モデル写真バックグラウンド md以下 */}
            <div
              className="md:hidden bg-cover w-full h-80 mb-10"
              style={{
                backgroundImage: `url(${imgPath}/hero-mobile.jpg)`,
              }}
            ></div>

            <div className="max-w-md lg:max-w-lg mx-auto md:mx-0 px-10">
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
                action={dispatch}
                // onSubmit={handleSubmit}
                className="flex mt-9 rounded-full shadow-[#ce9797] shadow"
              >
                <input
                  type="text"
                  name="email"
                  className=" bg-transparent pl-6 py-3 w-full outline-none placeholder-[#ce9797]"
                  placeholder="Email Address"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
                <Image
                  src={`${imgPath}/icon-error.svg`}
                  alt="error"
                  width={20}
                  height={20}
                  className={`w-5 h-5 my-auto mr-4 ${
                    errorState?.errors?.email === undefined && "invisible"
                  }`}
                />
                <button className="w-28 rounded-full bg-gradient-to-r from-[#f5a8a8] to-[#ea8585]">
                  <Image
                    src={`${imgPath}/icon-arrow.svg`}
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

        {/* モデル写真バックグラウンド md以上用 */}
        <div
          className="hidden md:block bg-cover w-full md:w-1/2 lg:w-2/5 h-screen"
          style={{
            backgroundImage: `url(${imgPath}/hero-desktop.jpg)`,
          }}
        ></div>
      </div>
    </>
  );
}
