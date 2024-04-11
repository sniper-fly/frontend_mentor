import Image from "next/image";

export default function Page() {
  const basePath = "/blog-preview-card-main/";

  return (
    <main className="flex h-screen items-center justify-center">
      <section className="w-1/3 rounded-lg bg-white shadow-xl shadow-black">
        {/* 画像 */}
        <Image 
          src={`${basePath}/illustration-article.svg`}
          width={336}
          height={201}
          alt="illustration-editor-desktop"
          className="rounded-lg m-3"
        />
        {/* type (ex. learning)  */}
        {/* date */}
        <h1>HTML & CSS foundations</h1>
        <p>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        {/* アイコン */}
      </section>
    </main>
  );
}
