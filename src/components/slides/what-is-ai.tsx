import { Card, CardContent } from "@/components/ui/card";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";

const aiTypes = [
  {
    name: "Narrow AI",
    desc: "AI designed for one specific task. Siri, spam filters, and Netflix recommendations are all narrow AI.",
    icon: "\u{1F3AF}",
  },
  {
    name: "General AI",
    desc: "A hypothetical AI that could do anything a human can. This doesn't exist yet -- it's still science fiction.",
    icon: "\u{1F52E}",
  },
  {
    name: "Generative AI",
    desc: "AI that creates new content -- text, images, music, or code. ChatGPT and image generators are examples.",
    icon: "\u{2728}",
  },
];

const timeline = [
  { year: "1950s", event: "Alan Turing asks \"Can machines think?\" and proposes the Turing Test." },
  { year: "1980s", event: "Expert systems boom -- programs that mimic human specialists in narrow domains." },
  { year: "2010s", event: "Deep learning takes off. AI beats humans at image recognition and board games." },
  { year: "2020s", event: "Large language models like ChatGPT bring AI into everyday life for millions of people." },
];

export function WhatIsAiSlide({ active }: { active: boolean }) {
  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-sage-50 via-cream to-pink-50"
    >
      <Blob color="sage" className="w-[350px] h-[350px] -top-20 -left-24" />
      <Blob color="pink" className="w-[250px] h-[250px] bottom-10 -right-16" />

      <Overline variant="sage">AI &amp; Data</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        What Is <span className="text-pink-500">AI</span>?
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        Artificial intelligence is the science of teaching computers to recognize
        patterns and make decisions. It&rsquo;s not magic &mdash; it&rsquo;s
        math, data, and clever algorithms working together.
      </p>

      <div className="stagger-item">
        <AnalogyBox>
          <p>
            AI is like a student that learns from examples rather than being told
            exact rules. Show it thousands of cat photos and it figures out what
            a cat looks like &mdash; without anyone writing a rule for
            &ldquo;pointy ears&rdquo; or &ldquo;whiskers.&rdquo;
          </p>
        </AnalogyBox>
      </div>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            Types of AI
          </h3>
          <div className="space-y-2.5">
            {aiTypes.map((t) => (
              <Card key={t.name} className="border-sage-200">
                <CardContent className="p-4 flex gap-3 items-start">
                  <span className="text-2xl shrink-0">{t.icon}</span>
                  <div>
                    <p className="font-semibold text-sage-600 text-sm">
                      {t.name}
                    </p>
                    <p className="text-xs text-warm-gray">{t.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            A Brief History
          </h3>
          <div className="space-y-2">
            {timeline.map((t) => (
              <div
                key={t.year}
                className="flex gap-3 items-start bg-white rounded-xl p-3 border border-sage-200"
              >
                <span className="bg-pink-100 text-pink-600 font-bold text-sm px-2 py-1 rounded-full shrink-0">
                  {t.year}
                </span>
                <p className="text-sm text-warm-gray">{t.event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
