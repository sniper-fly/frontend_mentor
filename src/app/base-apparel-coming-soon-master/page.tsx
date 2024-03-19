// import styles from "./styles.module.css";
import Image from "next/image";

export default function Page() {
  const imagePath = "/base-apparel-coming-soon-master/";

  return (
    <>
      <div className="flex flex-row">
        {/* <div> */}
        {/* <div className={`bg-fixed ${styles.bg_wallpaper}`}>
        <div></div>
      </div> */}
        <div
          className="bg-cover w-3/5 h-screen"
          style={{
            backgroundImage: `url(${imagePath}/bg-pattern-desktop.svg)`,
          }}
        >
          {/* base apparerlから始まる一連の説明など */}
          <div className="pl-40">
            <div className="px-10 my-8 mb-20 mt-12">
              <Image
                src={`${imagePath}/logo.svg`}
                width={36}
                height={36}
                className="w-36"
                alt="logo"
              />
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
