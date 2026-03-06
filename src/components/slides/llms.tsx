import { Card, CardContent } from "@/components/ui/card";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";

const facets = [
  {
    name: "How They're Trained",
    desc: "LLMs read billions of sentences from books, websites, and articles to learn how language works.",
    icon: "\u{1F4DA}",
  },
  {
    name: "What They Can Do",
    desc: "Summarize text, translate languages, write code, answer questions, and generate creative content.",
    icon: "\u{2705}",
  },
  {
    name: "What They Can't Do",
    desc: "Truly understand meaning, guarantee accuracy, access real-time information, or replace human judgment.",
    icon: "\u{26A0}",
  },
];

const examples = [
  { name: "ChatGPT", maker: "OpenAI", note: "The model that brought LLMs into the mainstream." },
  { name: "Claude", maker: "Anthropic", note: "Focused on being helpful, harmless, and honest." },
  { name: "Gemini", maker: "Google", note: "Multimodal -- can work with text, images, and more." },
];

export function LlmsSlide({ active }: { active: boolean }) {
  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-sage-50 via-cream to-pink-50"
    >
      <Blob color="sage" className="w-[350px] h-[350px] -top-20 -left-24" />
      <Blob color="pink" className="w-[250px] h-[250px] bottom-10 -right-16" />

      <Overline variant="sage">AI &amp; Data</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        Large Language <span className="text-pink-500">Models</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        Large language models (LLMs) are AI systems trained on massive amounts
        of text. They power chatbots, writing assistants, and coding tools by
        predicting what words come next.
      </p>

      <div className="stagger-item">
        <AnalogyBox>
          <p>
            An LLM is like autocomplete on your phone, but trained on billions
            of sentences instead of just your texts. It doesn&rsquo;t
            &ldquo;understand&rdquo; language &mdash; it&rsquo;s incredibly good
            at predicting what should come next.
          </p>
        </AnalogyBox>
      </div>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            The Big Picture
          </h3>
          <div className="space-y-2.5">
            {facets.map((f) => (
              <Card key={f.name} className="border-sage-200">
                <CardContent className="p-4 flex gap-3 items-start">
                  <span className="text-2xl shrink-0">{f.icon}</span>
                  <div>
                    <p className="font-semibold text-sage-600 text-sm">
                      {f.name}
                    </p>
                    <p className="text-xs text-warm-gray">{f.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            Popular LLMs
          </h3>
          <div className="space-y-2.5">
            {examples.map((e) => (
              <Card key={e.name} className="border-sage-200">
                <CardContent className="p-4">
                  <p className="font-semibold text-sage-600">
                    {e.name}{" "}
                    <span className="text-xs font-normal text-warm-gray">
                      by {e.maker}
                    </span>
                  </p>
                  <p className="text-sm text-warm-gray">{e.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-4 bg-pink-50 rounded-xl p-4 border border-pink-200">
            <p className="text-sm text-warm-gray">
              <strong className="text-sage-600">Key insight:</strong> LLMs
              generate text that <em>sounds</em> right, but they can
              &ldquo;hallucinate&rdquo; &mdash; confidently produce information
              that is incorrect. Always verify important claims.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
