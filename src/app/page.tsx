import Link from "next/link";
import Image from "next/image";

function Card({ className, title }: { className?: string; title: string }) {
  return (
    <Link href={`/${title}`}>
      <div
        className={`${className} cursor-pointer overflow-hidden rounded-lg
      bg-white transition-transform duration-200
      hover:scale-105`}
      >
        <Image
          src={`/${title}/desktop.png`}
          alt={title}
          width={1500}
          height={1500}
        />
        <p className="text-center text-lg font-medium my-3">{title}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  const works = [
    "four-card-feature-section-master",
    "product-preview-card-component-main",
    "base-apparel-coming-soon-master",
    "blog-preview-card-main",
    "recipe-page-main",
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
      {works.map((work) => (
        <Card key={work} title={work} className="" />
      ))}
    </div>
  );
}
