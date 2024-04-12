import Image from "next/image";

export default function Page() {
  const basePath = "/blog-preview-card-main";

  return (
    <main className="flex h-screen items-center justify-center">
      <section className="w-1/3 rounded-lg bg-white shadow-xl shadow-black">
        <Image 
          src={`${basePath}/illustration-article.svg`}
          width={336}
          height={201}
          alt="illustration-editor-desktop"
          className="rounded-lg m-3"
        />
        <h2>Leaning</h2>
        <p>Published 21 Dec 2023</p>
        <h1>HTML & CSS foundations</h1>
        <p>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <Image 
          src={`${basePath}/image-avatar.webp`}
          width={64}
          height={64}
          alt="image-avatar"
          className="m-3"
        />
      </section>
    </main>
  );
}
