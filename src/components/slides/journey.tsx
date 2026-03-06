import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { Card, CardContent } from "@/components/ui/card";

const takeaways = [
  {
    label: "You now know the vocabulary",
    detail:
      "Variables, functions, APIs, databases, Git -- these aren't mysteries anymore.",
  },
  {
    label: "You understand the building blocks",
    detail:
      "Code is just instructions. Developers combine simple pieces into complex systems.",
  },
  {
    label: "You can follow the conversation",
    detail:
      "When someone talks about deploying a fix, pushing a PR, or debugging a cache issue, you get it.",
  },
  {
    label: "You see the bigger picture",
    detail:
      "Frontend, backend, databases, networking -- you know how the pieces fit together.",
  },
];

export function JourneySlide({ active }: { active: boolean }) {
  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-pink-50 via-cream to-sage-50"
    >
      <Blob color="pink" className="w-[400px] h-[400px] -top-24 -left-24" />
      <Blob color="sage" className="w-[350px] h-[350px] -bottom-20 -right-20" />

      <div className="text-center">
        <Overline variant="sage">Wrapping Up</Overline>

        <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
          Now You{" "}
          <span className="text-sage-500">Get It</span>
        </h1>

        <p className="stagger-item text-lg text-warm-gray mb-8 max-w-[560px] mx-auto">
          You don&rsquo;t need to write a single line of code.
          But now, when a developer talks about their work, you can follow along
          and actually understand what they mean.
        </p>

        <div className="stagger-item grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[640px] mx-auto mb-8">
          {takeaways.map((item) => (
            <Card key={item.label} className="text-left border-sage-200 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-5">
                <h3 className="font-display font-semibold text-sage-700 mb-1.5">
                  {item.label}
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  {item.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="stagger-item font-display text-xl italic text-sage-400">
          Understanding is the first step to great conversations.
        </p>
      </div>
    </SlideLayout>
  );
}
