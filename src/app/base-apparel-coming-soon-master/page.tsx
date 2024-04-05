"use client";

// import styles from "./styles.module.css";
import Image from "next/image";
import registerEmail from "./registerEmail";
import { FormState } from "./registerEmail";
import { useFormState } from "react-dom";

export default function Page() {
  const basePath = "/base-apparel-coming-soon-master/";
  const initialState: FormState = { errors: {} };
  const [errorState, dispatch] = useFormState<FormState, FormData>(
    registerEmail,
    initialState,
  );

  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* 説明、フォームなど */}
        <div
          className="w-full bg-cover md:h-screen md:w-1/2 lg:w-3/5"
          style={{
            backgroundImage: `url(${basePath}/bg-pattern-desktop.svg)`,
          }}
        >
          {/* base apparerlから始まる一連の説明など */}
          <div className="lg:pl-40">
            {/* ロゴ */}
            <div className="my-8 px-10 md:mb-20 md:mt-12">
              <Image
                src={`${basePath}/logo.svg`}
                width={36}
                height={36}
                className="w-24 md:w-36"
                alt="logo"
              />
            </div>

            {/* モデル写真バックグラウンド md以下 */}
            <div
              className="mb-10 h-80 w-full bg-cover md:hidden"
              style={{
                backgroundImage: `url(${basePath}/hero-mobile.jpg)`,
              }}
            ></div>

            <div className="mx-auto max-w-md px-10 md:mx-0 lg:max-w-lg">
              {/* ページ説明ブロック */}
              <div className="text-center md:text-left">
                <h1 className="mb-7 text-5xl tracking-widest md:text-6xl lg:text-7xl">
                  <span className="block font-thin text-[#ce9797]">{`WE'RE`}</span>
                  <span className="block font-medium text-gray-800">
                    COMING
                  </span>
                  <span className="block font-medium text-gray-800">SOON</span>
                </h1>
                <p className="leading-relaxed text-[#ce9797]">
                  {`Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.`}
                </p>
              </div>

              {/* フォーム */}
              <form
                action={dispatch}
                className="mt-9 flex rounded-full shadow shadow-[#ce9797]"
              >
                <input
                  type="text"
                  name="email"
                  className=" w-full bg-transparent py-3 pl-6 placeholder-[#ce9797] outline-none"
                  placeholder="Email Address"
                />
                <Image
                  src={`${basePath}/icon-error.svg`}
                  alt="error"
                  width={20}
                  height={20}
                  className={`my-auto mr-4 h-5 w-5 ${
                    errorState?.errors?.email === undefined && "invisible"
                  }`}
                />
                <button className="w-28 rounded-full bg-gradient-to-r from-[#f5a8a8] to-[#ea8585]">
                  <Image
                    src={`${basePath}/icon-arrow.svg`}
                    alt="arrow"
                    width={20}
                    height={20}
                    className="mx-auto h-5 w-4"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* モデル写真バックグラウンド md以上用 */}
        <div
          className="hidden h-screen w-full bg-cover md:block md:w-1/2 lg:w-2/5"
          style={{
            backgroundImage: `url(${basePath}/hero-desktop.jpg)`,
          }}
        ></div>
      </div>
    </>
  );
}
