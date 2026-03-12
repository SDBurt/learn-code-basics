import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SlideLayout, Overline } from "@/components/shared/slide-layout";
import { SlideQA } from "@/components/shared/slide-qa";

const paths = [
  {
    icon: "\u{1F310}",
    title: "Web Development",
    desc: "Build websites and web apps like Instagram, Spotify, or online stores.",
    tags: "Websites & web apps",
  },
  {
    icon: "\u{1F4CA}",
    title: "Data Science & AI",
    desc: "Analyze data, spot trends, create charts, and build AI that learns from patterns.",
    tags: "Data, charts & AI",
  },
  {
    icon: "\u{1F4F1}",
    title: "Mobile Apps",
    desc: "Create apps for iPhone and Android \u2014 from social media to fitness trackers.",
    tags: "Phone & tablet apps",
  },
  {
    icon: "\u{1F3AE}",
    title: "Game Development",
    desc: "Design and build video games, from simple puzzles to 3D worlds.",
    tags: "Video games",
  },
  {
    icon: "\u2699\uFE0F",
    title: "Automation",
    desc: "Write scripts that handle repetitive tasks \u2014 renaming files, sending emails, organizing data.",
    tags: "Saving time with scripts",
  },
  {
    icon: "\u{1F527}",
    title: "Hardware & Firmware",
    desc: "Program the tiny computers inside everyday devices \u2014 thermostats, cars, medical equipment, and robots.",
    tags: "Physical devices & electronics",
  },
];

export function PathwaysSlide({ active }: { active: boolean }) {
  return (
    <SlideLayout active={active} className="bg-[#f8f5f0]">
      <Overline variant="sage">Choose Your Path</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        Coding <span className="text-pink-500">Pathways</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        There isn't just one kind of coder. Here are some popular directions:
      </p>

      <div className="stagger-item grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {paths.map((p) => (
          <Card
            key={p.title}
            className="group hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-pink-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-pink-300 to-sage-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            <CardContent className="p-6">
              <span className="text-3xl mb-3 block">{p.icon}</span>
              <h3 className="font-display font-medium text-lg mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-warm-gray mb-2">{p.desc}</p>
              <Badge
                variant="secondary"
                className="bg-sage-100 text-sage-600 hover:bg-sage-200"
              >
                {p.tags}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <SlideQA
        items={[
          {
            question: "Why are there so many different programming languages?",
            answer:
              "For the same reason there are different tools in a toolbox. A hammer is great for nails but terrible for screws. Some languages are designed to be great at building websites, others are better for crunching data or programming a robot. Each one was created to solve a particular kind of problem well.",
          },
          {
            question: "How do programming languages relate to each other?",
            answer:
              "Think of it like layers. At the very bottom, the computer only understands 1s and 0s (called machine code). Programming languages sit on top of that and translate your human-readable instructions into those 1s and 0s. Some languages are closer to the machine (faster but harder to write), and others are closer to human language (easier to write but a bit slower). Python is one of the easiest to read, which is why we start with it.",
          },
          {
            question: "Do I need to learn all of these?",
            answer:
              "Not at all. Most developers specialize in just one or two areas and learn the languages that go with them. The core ideas (variables, loops, conditionals) are the same across almost every language -- once you understand them in one, picking up another is much easier.",
          },
        ]}
      />
    </SlideLayout>
  );
}
