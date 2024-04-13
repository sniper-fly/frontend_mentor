import Image from "next/image";

export default function Page() {
  const basePath = "/blog-preview-card-main";

  return (
    <main className="flex h-screen items-center justify-center">
      <section className="w-1/3 rounded-lg bg-white p-5 shadow-xl shadow-black">
        <Image
          src={`${basePath}/illustration-article.svg`}
          width={336}
          height={201}
          alt="illustration-editor-desktop"
          className="mb-3 rounded-lg"
        />
        <h2 className="my-2 inline-block rounded-md bg-yellow-400 px-4 py-1 text-sm font-semibold">
          Learning
        </h2>
        <h2 className="my-2 text-sm">Published 21 Dec 2023</h2>
        <h1 className="my-3 text-2xl font-bold">HTML & CSS foundations</h1>
        <p className="text-gray-500">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <Image
          src={`${basePath}/image-avatar.webp`}
          width={64}
          height={64}
          alt="image-avatar"
          className="w-9 m-3"
        />
        <div className="text-sm font-semibold">Greg Hooper</div>
      </section>
    </main>
  );
}
