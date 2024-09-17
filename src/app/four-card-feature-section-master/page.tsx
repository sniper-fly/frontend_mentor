import { Poppins } from "next/font/google";

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
    <body className={`${poppins.className}`}>
      <main>
        <div>
          <h1>Reliable, efficient delivery</h1>
          <h1>Powered by Technology</h1>
          <p>
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        <div>
          <Card
            title="Supervisor"
            description="Monitors activity to identify project roadblocks"
            bgColorClass="bg-red-800"
            logoUrl={`${basePath}/icon-supervisor`}
          />
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
  return <div className={`${className}`}></div>;
}
