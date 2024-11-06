import Link from "next/link";
import Image from "next/image";

function Card({ className, title }: { className?: string; title: string }) {
  return (
    <Link href={`/${title}`}>
      <div
        className={`${className} cursor-pointer overflow-hidden rounded-lg bg-white
      shadow-md transition-transform duration-200
      hover:scale-105`}
      >
        <Image
          src={`/${title}/desktop.png`}
          alt={title}
          width={1500}
          height={1500}
        />
        <p className="my-3 text-center text-lg font-medium">{title}</p>
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
    <div className="bg-gray-50">
      <header className="grid grid-cols-1 gap-5 border-b py-6 md:grid-cols-2">
        <p className="text-center text-4xl font-bold">
          sniper-fly's Frontend Mentor works
        </p>
        <div className="flex flex-row items-center justify-evenly text-xl">
          <a
            className="transition-colors duration-200 hover:text-blue-700"
            href="https://github.com/sniper-fly/frontend_mentor"
          >
            Github Repository
          </a>
          <a
            className="transition-colors duration-200 hover:text-blue-700"
            href="https://www.frontendmentor.io/profile/sniper-fly"
          >
            Frontend Mentor Profile
          </a>
        </div>
      </header>
      <main className="container mx-auto my-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {works.map((work) => (
            <Card key={work} title={work} className="" />
          ))}
        </div>
      </main>
    </div>
  );
}
