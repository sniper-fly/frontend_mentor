import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["200", "400", "600"],
  subsets: ["latin"],
});

export default function Page() {
  return (
    <body className={`${poppins.className}`}>
      <div>
        <h1>Reliable, efficient delivery</h1>
        <h1>Powered by Technology</h1>
        <p>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
    </body>
  );
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
