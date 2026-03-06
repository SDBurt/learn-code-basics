import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  SlideLayout,
  Overline,
  Blob,
} from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";

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
        Computers make decisions using <strong>if/else</strong> &mdash; like
        checking the weather before deciding what to wear.
      </p>

      <AnalogyBox>
        <p>
          Every morning you check the weather: if it's sunny you grab
          sunglasses, if it's rainy you grab an umbrella, otherwise you reach for
          a warm coat. That's exactly how <strong>conditionals</strong> work in
          code &mdash; check a condition, then pick the matching action.
        </p>
      </AnalogyBox>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
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
    </SlideLayout>
  );
}
