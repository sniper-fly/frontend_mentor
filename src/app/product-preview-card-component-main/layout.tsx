import { ReactNode } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["500", "700"],
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <body className={`${montserrat.className}`}>
      {children}
    </body>
  );
}
