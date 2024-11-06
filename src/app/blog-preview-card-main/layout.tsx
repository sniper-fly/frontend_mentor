import { ReactNode } from "react";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  weight: ["500", "800"],
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={`${figtree.className} bg-[color:hsl(47,88%,63%)]`}>
      {children}
    </div>
  );
}
