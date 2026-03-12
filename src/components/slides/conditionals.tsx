import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  SlideLayout,
  Overline,
  Blob,
} from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";
import { SlideQA } from "@/components/shared/slide-qa";
import { InfoTip } from "@/components/shared/info-tip";

type Weather = "sunny" | "rainy" | "snowy";

const weatherOptions: { label: string; value: Weather }[] = [
  { label: "Sunny", value: "sunny" },
  { label: "Rainy", value: "rainy" },
  { label: "Snowy", value: "snowy" },
];

const outfitMap: Record<Weather, string> = {
  sunny: "sunglasses",
  rainy: "umbrella",
  snowy: "warm coat",
};

interface CodeLineProps {
  children: React.ReactNode;
  highlighted: boolean;
}

function CodeLine({ children, highlighted }: CodeLineProps) {
  return (
    <div
      className={
        highlighted
          ? "bg-pink-100 border-l-2 border-pink-400 -mx-3 px-3 py-0.5 rounded-r"
          : "py-0.5"
      }
    >
      {children}
    </div>
  );
}

export function ConditionalsSlide({ active }: { active: boolean }) {
  const [selected, setSelected] = useState<Weather | null>(null);

  const outfit = selected ? outfitMap[selected] : null;

  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-sage-50 to-pink-50"
    >
      <Blob color="pink" className="w-[280px] h-[280px] -top-12 -right-20" />
      <Blob color="sage" className="w-[200px] h-[200px] bottom-10 -left-16" />

      <Overline variant="pink">Core Concepts</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        <span className="text-pink-500">Conditionals</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        Computers make decisions using{" "}
        <InfoTip term="if/else">
          &ldquo;if&rdquo; checks whether something is true. &ldquo;else&rdquo;
          is what happens when it&rsquo;s not. Together they let the computer
          choose between different actions.
        </InfoTip>{" "}
        &mdash; like checking the weather before deciding what to wear.
      </p>

      <AnalogyBox>
        <p>
          Every morning you check the weather: if it's sunny you grab
          sunglasses, if it's rainy you grab an umbrella, otherwise you reach for
          a warm coat. That's exactly how <strong>conditionals</strong> work in
          code &mdash; check a condition, then pick the matching action.
        </p>
      </AnalogyBox>

      <div className="stagger-item mt-4">
        <h3 className="font-display font-medium text-lg mb-3">
          Reading the code
        </h3>
        <div className="bg-white rounded-xl border border-sage-200 p-4">
          <div className="space-y-2.5">
            <div className="flex items-start gap-3">
              <span className="font-mono bg-pink-100 text-pink-600 px-2.5 py-0.5 rounded-md text-sm font-semibold min-w-[60px] text-center shrink-0">
                if
              </span>
              <span className="text-sm text-warm-gray">
                Check if something is true. This is always the first check.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono bg-pink-100 text-pink-600 px-2.5 py-0.5 rounded-md text-sm font-semibold min-w-[60px] text-center shrink-0">
                elif
              </span>
              <span className="text-sm text-warm-gray">
                Short for &ldquo;else if&rdquo;. Only checked when the{" "}
                <code className="font-mono text-pink-600">if</code> above it
                wasn&rsquo;t true. You can chain as many as you need.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono bg-pink-100 text-pink-600 px-2.5 py-0.5 rounded-md text-sm font-semibold min-w-[60px] text-center shrink-0">
                else
              </span>
              <span className="text-sm text-warm-gray">
                The catch-all. If nothing above matched, do this instead. No
                condition needed &mdash; it just catches everything that&rsquo;s
                left.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono bg-sage-100 text-sage-600 px-2.5 py-0.5 rounded-md text-sm font-semibold min-w-[60px] text-center shrink-0 tracking-widest">
                {"····"}
              </span>
              <span className="text-sm text-warm-gray">
                The spaces at the start of a line tell Python which code belongs
                to which check. Everything indented under an{" "}
                <code className="font-mono text-pink-600">if</code>/
                <code className="font-mono text-pink-600">elif</code>/
                <code className="font-mono text-pink-600">else</code> only runs
                when that condition is chosen.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
        <div>
          <div className="code-block">
            <div className="code-header">
              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="code-lang">python</span>
            </div>
            <div className="font-mono text-sm leading-relaxed">
              <CodeLine highlighted={false}>
                <span className="syn-kw">weather</span> ={" "}
                <span className="syn-str">
                  "{selected ?? "sunny"}"
                </span>
              </CodeLine>
              <div className="py-0.5">&nbsp;</div>
              <CodeLine highlighted={selected === "sunny"}>
                <span className="syn-kw">if</span>{" "}
                <span className="syn-kw">weather</span> =={" "}
                <span className="syn-str">"sunny"</span>:
              </CodeLine>
              <CodeLine highlighted={selected === "sunny"}>
                {"    "}
                <span className="syn-kw">outfit</span> ={" "}
                <span className="syn-str">"sunglasses"</span>
              </CodeLine>
              <CodeLine highlighted={selected === "rainy"}>
                <span className="syn-kw">elif</span>{" "}
                <span className="syn-kw">weather</span> =={" "}
                <span className="syn-str">"rainy"</span>:
              </CodeLine>
              <CodeLine highlighted={selected === "rainy"}>
                {"    "}
                <span className="syn-kw">outfit</span> ={" "}
                <span className="syn-str">"umbrella"</span>
              </CodeLine>
              <CodeLine highlighted={selected === "snowy"}>
                <span className="syn-kw">else</span>:
              </CodeLine>
              <CodeLine highlighted={selected === "snowy"}>
                {"    "}
                <span className="syn-kw">outfit</span> ={" "}
                <span className="syn-str">"warm coat"</span>
              </CodeLine>
              <div className="py-0.5">&nbsp;</div>
              <CodeLine highlighted={false}>
                <span className="syn-bi">print</span>
                <span className="syn-br">(</span>
                <span className="syn-str">"Bring your"</span>,{" "}
                <span className="syn-kw">outfit</span>
                <span className="syn-br">)</span>
              </CodeLine>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-sage-200">
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            Choose the weather
          </h3>

          <div className="flex gap-3 mb-5">
            {weatherOptions.map((opt) => (
              <Button
                key={opt.value}
                onClick={() => setSelected(opt.value)}
                variant={selected === opt.value ? "default" : "outline"}
                className={
                  selected === opt.value
                    ? "bg-pink-500 hover:bg-pink-600 text-white"
                    : "border-sage-300 text-sage-600 hover:bg-sage-50"
                }
              >
                {opt.label}
              </Button>
            ))}
          </div>

          {outfit && (
            <div className="output-enter rounded-xl bg-sage-50 border border-sage-200 p-3.5 font-mono text-sm text-sage-600">
              <div className="text-[0.72rem] font-semibold uppercase tracking-wider text-sage-400 mb-1.5">
                Output
              </div>
              <div>Bring your {outfit}</div>
            </div>
          )}
        </div>
      </div>

      <div className="stagger-item mt-5">
        <h3 className="font-display font-medium text-lg mb-3">
          Multiple &ldquo;if&rdquo; vs. &ldquo;elif&rdquo;
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <h4 className="font-display font-medium text-sm mb-2 text-sage-600">
                Multiple if (checks ALL)
              </h4>
              <div className="bg-[#1e1e2e] rounded-lg p-3 font-mono text-xs leading-relaxed">
                <div>
                  <span className="syn-kw">if</span>{" "}
                  <span className="syn-kw">weather</span> =={" "}
                  <span className="syn-str">"sunny"</span>:
                </div>
                <div>
                  {"    "}
                  <span className="syn-kw">outfit</span> ={" "}
                  <span className="syn-str">"sunglasses"</span>
                </div>
                <div>
                  <span className="syn-kw">if</span>{" "}
                  <span className="syn-kw">weather</span> =={" "}
                  <span className="syn-str">"rainy"</span>:
                </div>
                <div>
                  {"    "}
                  <span className="syn-kw">outfit</span> ={" "}
                  <span className="syn-str">"umbrella"</span>
                </div>
              </div>
              <p className="text-xs text-warm-gray mt-2">
                Each &ldquo;if&rdquo; is checked independently. The computer
                checks every single one, even if an earlier one was true.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h4 className="font-display font-medium text-sm mb-2 text-sage-600">
                if/elif (checks until one matches)
              </h4>
              <div className="bg-[#1e1e2e] rounded-lg p-3 font-mono text-xs leading-relaxed">
                <div>
                  <span className="syn-kw">if</span>{" "}
                  <span className="syn-kw">weather</span> =={" "}
                  <span className="syn-str">"sunny"</span>:
                </div>
                <div>
                  {"    "}
                  <span className="syn-kw">outfit</span> ={" "}
                  <span className="syn-str">"sunglasses"</span>
                </div>
                <div>
                  <span className="syn-kw">elif</span>{" "}
                  <span className="syn-kw">weather</span> =={" "}
                  <span className="syn-str">"rainy"</span>:
                </div>
                <div>
                  {"    "}
                  <span className="syn-kw">outfit</span> ={" "}
                  <span className="syn-str">"umbrella"</span>
                </div>
              </div>
              <p className="text-xs text-warm-gray mt-2">
                With elif, the computer stops checking as soon as it finds a
                match. It&rsquo;s like a decision tree &mdash; once you pick a
                branch, you skip the rest.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <SlideQA
        items={[
          {
            question: "Can I have more than one elif?",
            answer:
              "Yes! You can chain as many elif checks as you want. For example, you could check for sunny, rainy, snowy, windy, and foggy -- each as its own elif. The computer goes through them in order and stops at the first match.",
          },
          {
            question: "Do I always need an else at the end?",
            answer:
              "No, else is optional. If you leave it out and none of the if/elif conditions match, the computer just skips the whole block and moves on. But else is useful as a safety net to handle anything you didn't specifically check for.",
          },
          {
            question: "What does == mean?",
            answer:
              "The double equals sign (==) means 'is this equal to?' It's how you compare two things. It's different from a single = which means 'store this value'. So weather == 'sunny' is asking a question, while weather = 'sunny' is setting a value.",
          },
        ]}
      />
    </SlideLayout>
  );
}
