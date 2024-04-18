import { ReactNode } from "react";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <body className={`${outfit.className} bg-[color:hsl(30,54%,90%)]`}>
      {children}
    </body>
  );
}
