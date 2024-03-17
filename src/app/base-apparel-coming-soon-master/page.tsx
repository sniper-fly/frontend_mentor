// import styles from "./styles.module.css";
import Image from "next/image";

export default function Page() {
  const prefix = "/base-apparel-coming-soon-master/";

  return (
    <>
      <div className="flex">
        {/* <div className={`bg-fixed ${styles.bg_wallpaper}`}>
        <div></div>
      </div> */}
        <div
          className="bg-cover w-3/5 h-screen"
          style={{
            backgroundImage: `url(${prefix}/bg-pattern-desktop.svg)`,
          }}
        >
          <div className="px-10 my-8 md:mb-20 md:mt-12">
            <img
              src={`${prefix}/logo.svg`}
              alt="logo"
              className="w-24 md:w-36"
            />
            {/* <Image src="/base-apparel-coming-soon-master/logo.svg" fill={true} alt="logo" /> */}
          </div>
        </div>

        <div
          className="bg-cover w-2/5 h-screen"
          style={{
            backgroundImage: `url(${prefix}/hero-desktop.jpg)`,
          }}
        ></div>
      </div>
    </>
  );
}
