import { useState } from "react";
import { Input } from "@/components/ui/input";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { CodeBlock } from "@/components/shared/code-block";

const vars = [
  { name: "name", value: '"Shayla"', type: "text (string)" },
  { name: "colour", value: '"purple"', type: "text (string)" },
  { name: "height", value: "5.6", type: "decimal (float)" },
  { name: "is_creative", value: "True", type: "yes/no (boolean)" },
];

export function VariablesSlide({ active }: { active: boolean }) {
  const [tryName, setTryName] = useState("Shayla");
  const [tryColour, setTryColour] = useState("purple");
  const [tryTalent, setTryTalent] = useState("coding");

  return (
    <SlideLayout active={active} className="bg-cream">
      <Blob color="pink" className="w-[300px] h-[300px] -top-16 -right-24" />

      <Overline variant="pink">Building Blocks</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        <span className="text-pink-500">Variables</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        A variable is like a <strong>labeled box</strong> where you store
        information. You give it a name and put a value inside.
      </p>

      <div className="stagger-item flex flex-wrap gap-4 my-5">
        {vars.map((v) => (
          <div
            key={v.name}
            className="relative bg-white border-2 border-pink-200 rounded-xl px-5 py-4 min-w-[140px] text-center hover:border-pink-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-100/50 transition-all"
          >
            <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-pink-400 text-white text-[0.72rem] font-semibold px-2.5 py-0.5 rounded-lg font-mono">
              {v.name}
            </span>
            <div className="font-mono text-lg text-foreground mt-1.5 font-medium">
              {v.value}
            </div>
            <div className="text-[0.72rem] text-warm-gray mt-1">{v.type}</div>
          </div>
        ))}
      </div>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <CodeBlock output={`Shayla loves purple and is amazing at coding!`}>
            <span className="syn-cm"># Creating variables</span>
            <br />
            <span className="syn-kw">name</span> ={" "}
            <span className="syn-str">"Shayla"</span>
            <br />
            <span className="syn-kw">colour</span> ={" "}
            <span className="syn-str">"purple"</span>
            <br />
            <span className="syn-kw">talent</span> ={" "}
            <span className="syn-str">"coding"</span>
            <br />
            <br />
            <span className="syn-bi">print</span>
            <span className="syn-br">(</span>
            <span className="syn-str">f"</span>
            <span className="syn-br">{"{"}</span>
            <span className="syn-kw">name</span>
            <span className="syn-br">{"}"}</span>
            <span className="syn-str"> loves </span>
            <span className="syn-br">{"{"}</span>
            <span className="syn-kw">colour</span>
            <span className="syn-br">{"}"}</span>
            <span className="syn-str"> and is amazing at </span>
            <span className="syn-br">{"{"}</span>
            <span className="syn-kw">talent</span>
            <span className="syn-br">{"}"}</span>
            <span className="syn-str">!"</span>
            <span className="syn-br">)</span>
          </CodeBlock>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-sage-200">
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            Try it yourself!
          </h3>

          <label className="block text-sm font-semibold text-sage-600 mb-1.5">
            Your name:
          </label>
          <Input
            value={tryName}
            onChange={(e) => setTryName(e.target.value)}
            className="mb-3 border-sage-200 focus-visible:ring-sage-400"
          />

          <label className="block text-sm font-semibold text-sage-600 mb-1.5">
            Favourite colour:
          </label>
          <Input
            value={tryColour}
            onChange={(e) => setTryColour(e.target.value)}
            className="mb-3 border-sage-200 focus-visible:ring-sage-400"
          />

          <label className="block text-sm font-semibold text-sage-600 mb-1.5">
            Something you're great at:
          </label>
          <Input
            value={tryTalent}
            onChange={(e) => setTryTalent(e.target.value)}
            className="mb-3 border-sage-200 focus-visible:ring-sage-400"
          />

          <div className="bg-sage-50 rounded-xl p-3.5 font-mono text-sm text-sage-600 border border-dashed border-sage-300">
            {tryName || "someone"} loves {tryColour || "everything"} and is
            amazing at {tryTalent || "so many things"}!
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
