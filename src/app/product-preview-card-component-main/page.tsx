import { Fraunces } from "next/font/google";
import Image from "next/image";

const fraunces = Fraunces({
  weight: ["700"],
  subsets: ["latin"],
});

export default function Page() {
  const basePath = "/product-preview-card-component-main";

  return (
    <div className="flex h-screen items-center justify-center px-4">
      <main className="flex max-w-xl flex-col overflow-hidden rounded-2xl sm:flex-row">
        {/* sm以上で表示 */}
        <Image
          src={`${basePath}/image-product-desktop.jpg`}
          alt="image-product-desktop"
          width={600}
          height={900}
          className="hidden w-1/2 sm:block"
        />

        {/* sm 以下で表示 */}
        <Image
          src={`${basePath}/image-product-mobile.jpg`}
          alt="image-product-desktop"
          width={600}
          height={900}
          className="block sm:hidden"
        />

        {/* 文章とボタンの配置 */}
        <article className=" bg-white p-6 text-gray-500 sm:w-1/2 ">
          <h2 className="text-xs tracking-[0.4em]">PERFUME</h2>
          <h1
            className={`${fraunces.className} my-5 text-3xl leading-8 text-black sm:max-w-52`}
          >
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-sm leading-relaxed">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <section className="my-5 flex flex-row items-center space-x-4">
            <h1 className={`${fraunces.className} text-3xl text-emerald-700`}>
              $149.99
            </h1>
            <h2 className="text-sm line-through">$169.99</h2>
          </section>
          <button className="flex w-full flex-row items-center justify-center rounded-lg bg-emerald-700 py-3 text-white transition duration-100 hover:bg-emerald-900">
            <Image
              src={`${basePath}/icon-cart.svg`}
              alt="icon-cart"
              width={15}
              height={15}
              className="mr-2"
            />
            <p className="text-sm font-semibold">Add to Cart</p>
          </button>
        </article>
      </main>
    </div>
  );
}
