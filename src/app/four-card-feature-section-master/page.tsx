import { Poppins } from "next/font/google";
import Image from "next/image";
import styles from "./styles.module.css";

const poppins = Poppins({
  weight: ["200", "400", "600"],
  subsets: ["latin"],
});

export default function Page() {
  const basePath = "/four-card-feature-section-master";
  // カードの内容を配列で持ち、mapで回すようにしてもいいかもしれない
  const cards = [
    {
      title: "Supervisor",
      description: "Monitors activity to identify project roadblocks",
      bgColorClass: "bg-teal-400",
      logoUrl: `${basePath}/icon-supervisor.svg`,
    },
    {
      title: "Team Builder",
      description:
        "Scans our talent network to create the optimal team for your project",
      bgColorClass: "bg-red-600",
      logoUrl: `${basePath}/icon-team-builder.svg`,
    },
    {
      title: "Karma",
      description: "Regularly evaluates our talent to ensure quality",
      bgColorClass: "bg-amber-500",
      logoUrl: `${basePath}/icon-karma.svg`,
    },
    {
      title: "Calculator",
      description:
        "Uses data from past projects to provide better delivery estimates",
      bgColorClass: "bg-sky-600",
      logoUrl: `${basePath}/icon-calculator.svg`,
    },
  ];

  return (
    <body
      className={`${poppins.className} bg-[color:hsl(0,0%,98%)]
      text-[color:hsl(229,6%,66%)]`}
    >
      <main className="flex flex-col items-center px-7 py-14">
        <div className="max-w-xl text-center">
          <div className="my-5 space-y-3 text-2xl text-[color:hsl(234,12%,34%)] md:text-4xl">
            <h1 className="font-extralight">Reliable, efficient delivery</h1>
            <h1 className="font-semibold">Powered by Technology</h1>
          </div>
          <p>
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        <div
          className={`mt-16 grid grid-flow-col gap-6 md:grid-cols-3 md:grid-rows-4
            ${styles.areas_card_md} ${styles.areas_card_sm}`}
        >
          {cards.map((card, idx) => (
            <Card
              className="max-w-sm"
              style={{ gridArea: `card${idx + 1}` }}
              key={idx}
              title={card.title}
              description={card.description}
              bgColorClass={card.bgColorClass}
              logoUrl={card.logoUrl}
            />
          ))}
        </div>
      </main>
    </body>
  );
}

type Props = {
  style?: Object;
  className?: string;
  title: string;
  description: string;
  bgColorClass: string;
  logoUrl: string;
};
function Card({
  style,
  className,
  title,
  description,
  bgColorClass,
  logoUrl,
}: Props) {
  return (
    <div
      className={`${className} overflow-hidden rounded-lg bg-white shadow-md`}
      style={style}
    >
      <div className={`${bgColorClass} h-1`} />
      <div className="p-7">
        <h1 className="mb-3 text-2xl font-semibold text-[color:hsl(234,12%,34%)]">
          {title}
        </h1>
        <p>{description}</p>
        <div className="mt-8 grid justify-items-end">
          <Image src={logoUrl} alt={title} width={70} height={70} />
        </div>
      </div>
    </div>
  );
}
