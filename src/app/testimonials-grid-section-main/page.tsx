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
  const basePath = "/testimonials-grid-section-main";
  const data = [
    {
      name: "Daniel Clifford",
      title:
        "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
      profileImg: `${basePath}/image-daniel.jpg`,
      description:
        "I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.",
      bgColorClass: "bg-[color:hsl(263,55%,52%)]",
      titleColorClass: "text-white",
      bgPattern: `${basePath}/bg-pattern-quotation.svg`,
    },
    {
      name: "Jonathan Walters",
      title: "The team was very supportive and kept me motivated",
      profileImg: `${basePath}/image-jonathan.jpg`,
      description:
        "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.",
      bgColorClass: "bg-slate-700",
      titleColorClass: "text-white",
    },
    {
      name: "Jeanette Harmon",
      title: "An overall wonderful and rewarding experience",
      profileImg: `${basePath}/image-jeanette.jpg`,
      description:
        "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.",
      bgColorClass: "bg-white",
      titleColorClass: "text-slate-900",
    },
    {
      name: "Patrick Abrams",
      title:
        "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
      profileImg: `${basePath}/image-patrick.jpg`,
      description:
        "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.",
      bgColorClass: "bg-slate-900",
      titleColorClass: "text-white",
    },
    {
      name: "Kira Whittle",
      title: "Such a life-changing experience. Highly recommended!",
      profileImg: `${basePath}/image-kira.jpg`,
      description:
        "Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!",
      bgColorClass: "bg-white",
      titleColorClass: "text-slate-900",
    },
  ] as const satisfies Props[];

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
  return <div></div>;
}
