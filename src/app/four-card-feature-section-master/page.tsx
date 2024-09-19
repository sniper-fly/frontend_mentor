import { Poppins } from "next/font/google";
import Image from "next/image";

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
      bgColorClass: "bg-teal-500",
      logoUrl: `${basePath}/icon-supervisor.svg`,
    },
    {
      title: "Team Builder",
      description:
        "Scans our talent network to create the optimal team for your project",
      bgColorClass: "bg-red-800",
      logoUrl: `${basePath}/icon-team-builder.svg`,
    },
    {
      title: "Karma",
      description: "Regularly evaluates our talent to ensure quality",
      bgColorClass: "bg-yellow-600",
      logoUrl: `${basePath}/icon-karma.svg`,
    },
    {
      title: "Calculator",
      description:
        "Uses data from past projects to provide better delivery estimates",
      bgColorClass: "bg-blue-800",
      logoUrl: `${basePath}/icon-calculator.svg`,
    },
  ];

  return (
    <body
      className={`${poppins.className} bg-[color:hsl(0,0%,98%)]
      text-[color:hsl(229,6%,66%)]`}
    >
      <main className="flex flex-col items-center py-14">
        <div className="max-w-xl text-center">
          <div
            className="my-5 space-y-3 text-4xl
            text-[color:hsl(234,12%,34%)]"
          >
            <h1 className="font-extralight">Reliable, efficient delivery</h1>
            <h1 className="font-semibold">Powered by Technology</h1>
          </div>
          <p>
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        <div className="grid grid-flow-col grid-rows-4 gap-4 p-3">
          <div className="grid grid-rows-subgrid gap-4 row-span-4">
            <Card
              className="row-start-2 row-end-4"
              title={cards[0].title}
              description={cards[0].description}
              bgColorClass={cards[0].bgColorClass}
              logoUrl={cards[0].logoUrl}
            />
          </div>
          <Card
            className="row-start-1 row-end-3"
            title={cards[1].title}
            description={cards[1].description}
            bgColorClass={cards[1].bgColorClass}
            logoUrl={cards[1].logoUrl}
          />
          <Card
            className="row-start-3 row-end-5"
            title={cards[2].title}
            description={cards[2].description}
            bgColorClass={cards[2].bgColorClass}
            logoUrl={cards[2].logoUrl}
          />
          <div className="grid grid-rows-subgrid gap-4 row-span-4">
            <Card
              className="row-start-2 row-end-4"
              title={cards[3].title}
              description={cards[3].description}
              bgColorClass={cards[3].bgColorClass}
              logoUrl={cards[3].logoUrl}
            />
          </div>
        </div>
      </main>
    </body>
  );
}

type Props = {
  className?: string;
  title: string;
  description: string;
  bgColorClass: string;
  logoUrl: string;
};
function Card({ className, title, description, bgColorClass, logoUrl }: Props) {
  return (
    <div className={`${className} rounded-lg bg-white p-5 shadow-md`}>
      <h1 className="text-[color:hsl(234,12%,34%)]">{title}</h1>
      <p>{description}</p>
      <Image src={logoUrl} alt={title} width={70} height={70} />
    </div>
  );
}
