// import styles from "./styles.module.css";
import Image from "next/image";

export default function Page() {
  const imagePath = "/base-apparel-coming-soon-master/";

  return (
    <>
      <div className="flex flex-row">
        <div
          className="bg-cover w-3/5 h-screen"
          style={{
            backgroundImage: `url(${imagePath}/bg-pattern-desktop.svg)`,
          }}
        >
          {/* base apparerlから始まる一連の説明など */}
          <div className="pl-40">
            {/* ロゴ */}
            <div className="px-10 my-8 mb-20 mt-12">
              <Image
                src={`${imagePath}/logo.svg`}
                width={36}
                height={36}
                className="w-36"
                alt="logo"
              />
            </div>

            {/* ページ説明ブロック */}
            <div className="text-left px-10">
              <h1 className="text-7xl tracking-widest mb-7">
                <span className="block text-rose-800 font-thin">WE'RE</span>
                <span className="block font-medium text-gray-800">COMING</span>
                <span className="block font-medium text-gray-800">SOON</span>
              </h1>
              <p className="leading-relaxed text-rose-800">
                Hello fellow shoppers! We're currently building our new fashion
                store. Add your email below to stay up-to-date with
                announcements and our launch deals.
              </p>
            </div>

          </div>
        </div>

        <div
          className="bg-cover w-2/5 h-screen"
          style={{
            backgroundImage: `url(${imagePath}/hero-desktop.jpg)`,
          }}
        ></div>
      </div>
    </>
  );
}
