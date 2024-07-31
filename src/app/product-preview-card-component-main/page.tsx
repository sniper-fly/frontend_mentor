import { Fraunces } from "next/font/google";
import Image from "next/image";

const fraunces = Fraunces({
  weight: ["700"],
  subsets: ["latin"],
});

export default function Page() {
  const basePath = "/product-preview-card-component-main";

  return (
    <div className="flex h-screen items-center justify-center">
      <main className="flex flex-row rounded-2xl">
        {/* 画像を半分配置 */}
        <Image
          src={`${basePath}/image-product-desktop.jpg`}
          alt="image-product-desktop"
          width={600}
          height={900}
          className="w-1/2"
        />
        {/* 文章とボタンの配置 */}
        <article className="w-1/2 bg-white">hoge</article>
      </main>
    </div>
  );
}
