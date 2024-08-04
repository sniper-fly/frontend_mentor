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
      <main className="flex flex-row rounded-2xl max-w-xl">
        {/* 画像を半分配置 */}
        <Image
          src={`${basePath}/image-product-desktop.jpg`}
          alt="image-product-desktop"
          width={600}
          height={900}
          className="w-1/2"
        />
        {/* 文章とボタンの配置 */}
        <article className="w-1/2 bg-white">
          <h2>PERFUME</h2>
          <h1>
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
          <h1>$149.99</h1>
          <h2>$169.99</h2>
          <button>Add to Cart</button>
        </article>
      </main>
    </div>
  );
}
