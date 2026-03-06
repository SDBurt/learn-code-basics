import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { CodeBlock } from "@/components/shared/code-block";
import { AnalogyBox } from "@/components/shared/analogy-box";

export function FunctionsSlide({ active }: { active: boolean }) {
  const [name, setName] = useState("Shayla");
  const [style, setStyle] = useState<"hype" | "sweet">("hype");

  const compliment =
    style === "hype"
      ? `${name || "someone"} is an incredible lawyer -- the best advocate you could ask for!`
      : `${name || "someone"}, your dedication to justice inspires everyone around you.`;

  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-sage-50 to-cream"
    >
      <Blob color="sage" className="w-[350px] h-[350px] -top-20 -right-24" />
      <Blob color="pink" className="w-[250px] h-[250px] bottom-10 -left-16" />

      <Overline variant="pink">Core Concepts</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        <span className="text-pink-500">Functions</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        Functions are named, reusable sets of instructions &mdash; like a{" "}
        <strong>recipe card</strong> a developer can use over and over without
        rewriting the steps.
      </p>

      <AnalogyBox>
        <p>
          A function is like a <strong>recipe card</strong>. Once you write down
          the steps for making a sandwich, you can just say &ldquo;make a
          sandwich&rdquo; anytime &mdash; without listing all the steps again.
        </p>
      </AnalogyBox>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <CodeBlock>
            <span className="syn-kw">def</span>{" "}
            <span className="syn-fn">compliment</span>
            <span className="syn-br">(</span>
            <span className="syn-kw">name</span>,{" "}
            <span className="syn-kw">style</span>
            <span className="syn-br">)</span>:
            <br />
            {"    "}
            <span className="syn-kw">if</span>{" "}
            <span className="syn-kw">style</span>{" "}
            <span className="syn-br">==</span>{" "}
            <span className="syn-str">"hype"</span>:
            <br />
            {"        "}
            <span className="syn-kw">return</span>{" "}
            <span className="syn-str">f"</span>
            <span className="syn-br">{"{"}</span>
            <span className="syn-kw">name</span>
            <span className="syn-br">{"}"}</span>
            <span className="syn-str"> is incredible!"</span>
            <br />
            {"    "}
            <span className="syn-kw">else</span>:
            <br />
            {"        "}
            <span className="syn-kw">return</span>{" "}
            <span className="syn-str">f"</span>
            <span className="syn-br">{"{"}</span>
            <span className="syn-kw">name</span>
            <span className="syn-br">{"}"}</span>
            <span className="syn-str"> brings so much light."</span>
          </CodeBlock>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-sage-200">
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            Try it yourself!
          </h3>

          <label className="block text-sm font-semibold text-sage-600 mb-1.5">
            Name:
          </label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-3 border-sage-200 focus-visible:ring-sage-400"
          />

          <label className="block text-sm font-semibold text-sage-600 mb-1.5">
            Compliment style:
          </label>
          <div className="flex gap-2 mb-4">
            <Button
              size="sm"
              onClick={() => setStyle("hype")}
              className={
                style === "hype"
                  ? "bg-pink-500 hover:bg-pink-600 text-white"
                  : "bg-sage-100 text-sage-600 hover:bg-sage-200"
              }
            >
              Hype
            </Button>
            <Button
              size="sm"
              onClick={() => setStyle("sweet")}
              className={
                style === "sweet"
                  ? "bg-pink-500 hover:bg-pink-600 text-white"
                  : "bg-sage-100 text-sage-600 hover:bg-sage-200"
              }
            >
              Sweet
            </Button>
          </div>

          <div className="bg-sage-50 rounded-xl p-3.5 font-mono text-sm text-sage-600 border border-dashed border-sage-300">
            <div className="text-[0.72rem] font-semibold uppercase tracking-wider text-sage-400 mb-1.5">
              compliment({`"${name || "someone"}"`},{" "}
              {`"${style}"`})
            </div>
            {compliment}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
