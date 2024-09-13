import { Poppins } from "next/font/google";

export default function Page() {
  const poppins = Poppins({
    weight: ["200", "400", "600"],
    subsets: ["latin"],
  });
  const basePath = "/four-card-feature-section-master";
  // カードの内容を配列で持ち、mapで回すようにしてもいいかもしれない

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
            color="hsl(180, 62%, 55%)"
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
  color: string;
  logoUrl: string;
};
function Card({ className, title, description, color, logoUrl }: Props) {
  return <div className={`${className}`}></div>;
}

`
  Supervisor
  Monitors activity to identify project roadblocks

  Team Builder
  Scans our talent network to create the optimal team for your project

  Karma
  Regularly evaluates our talent to ensure quality

  Calculator
  Uses data from past projects to provide better delivery estimates
`;
