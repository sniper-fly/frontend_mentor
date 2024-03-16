// import styles from "./styles.module.css";
import bg from "./images/bg-pattern-desktop.svg"

export default function Page() {
  return (
    <div className="flex">
      {/* <div className={`bg-fixed ${styles.bg_wallpaper}`}>
        <div></div>
      </div> */}
      <div
        className="bg-cover bg-center w-full h-screen"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        {/* ここに他のコンポーネントやコンテンツを追加できます */}
      </div>
    </div>
  );
}
