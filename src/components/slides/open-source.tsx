import { Card, CardContent } from "@/components/ui/card";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";

const projects = [
  {
    name: "Linux",
    desc: "The operating system that runs most of the internet's servers, Android phones, and supercomputers.",
  },
  {
    name: "React",
    desc: "A JavaScript library for building user interfaces. Created by Meta, used by millions of developers.",
  },
  {
    name: "Python",
    desc: "One of the most popular programming languages. Entirely open source and community-driven.",
  },
  {
    name: "VS Code",
    desc: "The most popular code editor. Built by Microsoft but open source, with thousands of community extensions.",
  },
  {
    name: "WordPress",
    desc: "Powers over 40% of all websites on the internet. Free and open source since 2003.",
  },
  {
    name: "Firefox",
    desc: "A web browser built by Mozilla. One of the oldest and most well-known open-source projects.",
  },
];

const howToContribute = [
  {
    step: "Find a project",
    desc: "Browse GitHub for projects that interest you. Look for 'good first issue' labels.",
  },
  {
    step: "Read the docs",
    desc: "Every project has contributing guidelines. Read them before diving in.",
  },
  {
    step: "Start small",
    desc: "Fix a typo, improve docs, or tackle a small bug. You don't need to rewrite the whole thing.",
  },
  {
    step: "Submit a PR",
    desc: "Open a pull request with your changes. The maintainers will review it and give feedback.",
  },
];

export function OpenSourceSlide({ active }: { active: boolean }) {
  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-pink-50 via-cream to-sage-50"
    >
      <Blob color="pink" className="w-[350px] h-[350px] -top-20 -left-24" />
      <Blob color="sage" className="w-[250px] h-[250px] bottom-10 -right-16" />

      <Overline variant="pink">The Big Picture</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        <span className="text-sage-500">Open Source</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        Open source means the code is publicly available for anyone to view,
        use, modify, and share. Most of the software that powers the internet
        is open source, built by communities of volunteers and companies alike.
      </p>

      <div className="stagger-item">
        <AnalogyBox>
          <p>
            Open source is like a community cookbook. Anyone can read the
            recipes, suggest improvements, or add their own. The cookbook gets
            better over time because thousands of cooks contribute their best
            ideas.
          </p>
        </AnalogyBox>
      </div>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            Famous Open-Source Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {projects.map((p) => (
              <Card key={p.name} className="border-sage-200">
                <CardContent className="p-3">
                  <p className="font-semibold text-sage-600 text-sm">
                    {p.name}
                  </p>
                  <p className="text-xs text-warm-gray">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            How to Contribute
          </h3>
          <div className="space-y-2">
            {howToContribute.map((h, i) => (
              <div
                key={h.step}
                className="flex gap-3 items-start bg-white rounded-xl p-3 border border-sage-200"
              >
                <span className="bg-pink-100 text-pink-600 font-bold text-sm w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-sage-600 text-sm">
                    {h.step}
                  </p>
                  <p className="text-xs text-warm-gray">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-sage-50 rounded-xl p-4 border border-sage-200">
            <p className="text-sm text-warm-gray">
              <strong className="text-sage-600">Did you know?</strong> Open
              source isn't just about code. You can contribute by writing
              documentation, reporting bugs, designing graphics, translating
              text, or just helping other users in forums.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
