import { Card, CardContent } from "@/components/ui/card";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";

const reasons = [
  {
    icon: "\u{1F4AC}",
    title: "Understand the Conversation",
    desc: "When a developer talks about bugs, deploys, or APIs, you'll know exactly what they mean.",
  },
  {
    icon: "\u{1F50D}",
    title: "See What's Really Happening",
    desc: "Every app, website, and notification on your phone is code doing its thing. Now you'll see the invisible layer.",
  },
  {
    icon: "\u{1F91D}",
    title: "Bridge the Gap",
    desc: "Whether it's at work or at home, understanding code makes it easier to collaborate with the people who write it.",
  },
  {
    icon: "\u{1F4A1}",
    title: "Demystify the Magic",
    desc: "Tech isn't magic \u2014 it's logic. Once you see the patterns, the whole digital world starts to make more sense.",
  },
];

export function WhyCodeSlide({ active }: { active: boolean }) {
  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-sage-50 via-cream to-pink-50"
    >
      <Blob color="sage" className="w-[300px] h-[300px] -top-16 -left-20" />

      <Overline variant="pink">The Possibilities</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        Why Does <span className="text-sage-500">Code</span> Matter?
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-7">
        You don't need to write code to benefit from understanding it.
        Here's why it's worth knowing what goes on behind the screen:
      </p>

      <div className="stagger-item grid grid-cols-1 sm:grid-cols-2 gap-4">
        {reasons.map((r) => (
          <Card
            key={r.title}
            className="group hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-pink-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-pink-300 to-sage-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            <CardContent className="p-6">
              <span className="text-3xl mb-3 block">{r.icon}</span>
              <h3 className="font-display font-medium text-lg mb-2">
                {r.title}
              </h3>
              <p className="text-sm text-warm-gray">{r.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SlideLayout>
  );
}
