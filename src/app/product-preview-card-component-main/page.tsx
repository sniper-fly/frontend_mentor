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
      <main className="flex max-w-xl flex-row">
        {/* 画像を半分配置 */}
        <Image
          src={`${basePath}/image-product-desktop.jpg`}
          alt="image-product-desktop"
          width={600}
          height={900}
          className="w-1/2 rounded-l-2xl"
        />
        {/* 文章とボタンの配置 */}
        <article className="w-1/2 rounded-r-2xl bg-white p-8 text-gray-500">
          <h2>PERFUME</h2>
          <h1 className={`${fraunces.className} text-black`}>
            <div>Gabrielle</div>
            <div>Essence Eau</div>
            <div>De Parfum</div>
          </h1>
          <section>
            <p>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
          </section>
          <h1 className={`${fraunces.className} text-teal-700`}>$149.99</h1>
          <h2>$169.99</h2>
          <button className="rounded-lg bg-teal-700 text-white">
            <Image
              src={`${basePath}/icon-cart.svg`}
              alt="icon-cart"
              width={15}
              height={15}
              className="mr-2"
            />
            Add to Cart
          </button>
        </article>
      </main>
    </div>
  );
}
