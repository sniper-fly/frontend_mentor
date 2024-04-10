import Link from "next/link";
import { ReactNode } from "react";

function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`m-3 bg-black p-2 text-white ${className}`}>{children}</div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Card className="mt-10">
        <Link href="/base-apparel-coming-soon-master">
          base-apparel-coming-soon-master
        </Link>
      </Card>
      <Card>
        <Link href="/blog-preview-card-main">blog-preview-card-main</Link>
      </Card>
    </div>
  );
}
