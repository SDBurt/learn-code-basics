import { Card, CardContent } from "@/components/ui/card";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";

const concepts = [
  {
    name: "Training Data",
    desc: "The examples you feed the computer so it can learn patterns. More data usually means better results.",
    icon: "\u{1F4DA}",
  },
  {
    name: "Model",
    desc: "The mathematical recipe the computer builds from the training data. It captures the patterns it learned.",
    icon: "\u{2699}",
  },
  {
    name: "Prediction",
    desc: "When the model sees new data and makes a guess based on the patterns it learned during training.",
    icon: "\u{1F4A1}",
  },
  {
    name: "Accuracy",
    desc: "How often the model gets the right answer. No model is perfect -- the goal is to get close enough to be useful.",
    icon: "\u{1F3AF}",
  },
];

const pipeline = [
  { label: "Input Data", detail: "Raw information (images, text, numbers)" },
  { label: "Model", detail: "Learns patterns from the data" },
  { label: "Output", detail: "A prediction or classification" },
];

export function MachineLearningSlide({ active }: { active: boolean }) {
  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-pink-50 to-cream"
    >
      <Blob color="pink" className="w-[350px] h-[350px] -top-20 -right-24" />
      <Blob color="sage" className="w-[250px] h-[250px] bottom-10 -left-16" />

      <Overline variant="pink">AI &amp; Data</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        <span className="text-sage-500">Machine Learning</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        Machine learning is a branch of AI where computers learn from data
        instead of following hand-written rules. You give it examples, and it
        figures out the patterns on its own.
      </p>

      <div className="stagger-item">
        <AnalogyBox>
          <p>
            Like learning to recognize dogs &mdash; you don&rsquo;t memorize a
            checklist of rules. You see thousands of dogs until you just{" "}
            <strong>know</strong>. That&rsquo;s how ML works: learn from
            examples, not instructions.
          </p>
        </AnalogyBox>
      </div>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            Key Concepts
          </h3>
          <div className="space-y-2.5">
            {concepts.map((c) => (
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
            How It Works
          </h3>
          <div className="space-y-2">
            {pipeline.map((step, i) => (
              <div
                key={step.label}
                className="flex gap-3 items-start bg-white rounded-xl p-3 border border-sage-200"
              >
                <span className="bg-pink-100 text-pink-600 font-bold text-sm w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-sage-600 text-sm">
                    {step.label}
                  </p>
                  <p className="text-xs text-warm-gray">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-pink-50 rounded-xl p-4 border border-pink-200">
            <p className="text-sm text-warm-gray">
              <strong className="text-sage-600">Example:</strong> A spam filter
              learns from millions of emails labeled &ldquo;spam&rdquo; or
              &ldquo;not spam.&rdquo; After training, it can predict whether a
              new email is junk &mdash; without anyone writing rules about
              specific words.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
