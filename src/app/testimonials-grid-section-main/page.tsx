import Image from "next/image";
import { Barlow_Semi_Condensed } from "next/font/google";

const barlow_semi_condensed = Barlow_Semi_Condensed({
  weight: ["500", "600"],
  subsets: ["latin"],
});

function iromihon() {
  return (
    <>
      <div className="container mx-auto h-32 bg-[color:hsl(263,55%,52%)]">
        violet
      </div>
      <div className="container mx-auto h-32 bg-[color:hsl(217,19%,35%)]">
        grayish blue
      </div>
      <div className="container mx-auto h-32 bg-[color:hsl(219,29%,14%)]">
        blackish blue
      </div>
      <div className="container mx-auto h-32 bg-[color:hsl(0,0%,81%)]">
        light gray
      </div>
    </>
  );
}

export default function Page() {
  return (
    <body
      className={`${barlow_semi_condensed.className}
      bg-[color:hsl(210,46%,95%)] text-[13px]`}
    ></body>
  );
}

type Props = {
  style?: Object;
  className?: string;
  title: string;
  titleColorClass: string;
  description: string;
  bgColorClass: string;
  bgPattern?: string;
  profileImg: string;
  name: string;
};
function Card({
  style,
  className,
  title,
  titleColorClass,
  description,
  bgColorClass,
  bgPattern,
  profileImg,
  name,
}: Props) {
  return <></>;
}
