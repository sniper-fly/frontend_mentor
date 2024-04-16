import Image from "next/image";

export default function Page() {
  const basePath = "/blog-preview-card-main";

  return (
    <main className="flex h-screen items-center justify-center">
      <section className="w-80 rounded-3xl border border-black bg-white p-5 shadow-[10px_10px_black] transition-shadow hover:shadow-[17px_17px_black] md:w-96">
        <Image
          src={`${basePath}/illustration-article.svg`}
          width={336}
          height={201}
          alt="illustration-editor-desktop"
          className="mb-3 rounded-lg"
        />
        <h2 className="my-2 inline-block rounded-md bg-[color:hsl(47,88%,63%)] px-4 py-1 text-xs font-semibold md:text-sm">
          Learning
        </h2>
        <h2 className="my-2 text-xs md:text-sm">Published 21 Dec 2023</h2>
        <h1 className="my-3 text-xl font-bold transition-colors hover:text-yellow-400 md:text-2xl">
          HTML & CSS foundations
        </h1>
        <p className="text-sm text-gray-500 md:text-base">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="flex flex-row items-center justify-start pt-5">
          <div className="mr-3">
            <Image
              src={`${basePath}/image-avatar.webp`}
              width={64}
              height={64}
              alt="image-avatar"
              className="w-9"
            />
          </div>
          <div className="text-sm font-semibold">Greg Hooper</div>
        </div>
      </section>
    </main>
  );
}
