import { Card, CardContent } from "@/components/ui/card";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";

const concerns = [
  {
    name: "Bias & Fairness",
    desc: "AI can inherit and amplify biases from its training data, leading to unfair outcomes for certain groups.",
    icon: "\u{2696}",
  },
  {
    name: "Privacy",
    desc: "AI systems often need large amounts of personal data, raising questions about consent and surveillance.",
    icon: "\u{1F512}",
  },
  {
    name: "Job Displacement",
    desc: "Automation can replace certain jobs while creating new ones -- the transition affects real people.",
    icon: "\u{1F3ED}",
  },
  {
    name: "Misinformation",
    desc: "Generative AI can create convincing fake text, images, and videos that are hard to distinguish from real content.",
    icon: "\u{1F4F0}",
  },
  {
    name: "Transparency",
    desc: "Many AI models are \"black boxes\" -- even their creators can't fully explain why they make certain decisions.",
    icon: "\u{1F50D}",
  },
];

const goodPractices = [
  "Use diverse, representative training data to reduce bias.",
  "Be transparent about when AI is being used and what data it collects.",
  "Keep a human in the loop for high-stakes decisions.",
  "Test AI systems for fairness across different demographic groups.",
  "Make AI decisions explainable -- users deserve to know why.",
  "Regularly audit models for accuracy and unintended consequences.",
];

export function AiEthicsSlide({ active }: { active: boolean }) {
  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-sage-50 via-cream to-pink-50"
    >
      <Blob color="sage" className="w-[350px] h-[350px] -top-20 -left-24" />
      <Blob color="pink" className="w-[250px] h-[250px] bottom-10 -right-16" />

      <Overline variant="sage">AI &amp; Data</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        AI <span className="text-pink-500">Ethics</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        AI is powerful, but power comes with responsibility. Understanding the
        ethical challenges helps us build AI that is fair, transparent, and
        beneficial for everyone.
      </p>

      <div className="stagger-item">
        <AnalogyBox>
          <p>
            If you only teach with biased examples, you get biased results
            &mdash; garbage in, garbage out. An AI trained mostly on one
            perspective will reflect that perspective, not the full picture.
          </p>
        </AnalogyBox>
      </div>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            Key Concerns
          </h3>
          <div className="space-y-2.5">
            {concerns.map((c) => (
              <Card key={c.name} className="border-sage-200">
                <CardContent className="p-4 flex gap-3 items-start">
                  <span className="text-2xl shrink-0">{c.icon}</span>
                  <div>
                    <p className="font-semibold text-sage-600 text-sm">
                      {c.name}
                    </p>
                    <p className="text-xs text-warm-gray">{c.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            Good Practices
          </h3>
          <div className="space-y-2">
            {goodPractices.map((practice, i) => (
              <div
                key={i}
                className="flex gap-3 items-start bg-white rounded-xl p-3 border border-sage-200"
              >
                <span className="bg-pink-100 text-pink-600 font-bold text-sm w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <p className="text-sm text-warm-gray">{practice}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
