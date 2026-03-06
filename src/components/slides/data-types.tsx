import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";
import { CodeBlock } from "@/components/shared/code-block";

const types = [
  {
    name: "String",
    icon: "\u{1F4AC}",
    desc: "Text wrapped in quotes",
    example: '"Hello, world!"',
    color: "border-l-pink-400",
  },
  {
    name: "Integer",
    icon: "\u{1F522}",
    desc: "Whole numbers",
    example: "42",
    color: "border-l-sage-400",
  },
  {
    name: "Float",
    icon: "\u{1F4C9}",
    desc: "Decimal numbers",
    example: "3.14",
    color: "border-l-amber-400",
  },
  {
    name: "Boolean",
    icon: "\u{2705}",
    desc: "True or False",
    example: "True",
    color: "border-l-pink-300",
  },
];

type TypeName = "String" | "Integer" | "Float" | "Boolean";

const gameValues: { label: string; type: TypeName }[] = [
  { label: '"Hello"', type: "String" },
  { label: "42", type: "Integer" },
  { label: "3.14", type: "Float" },
  { label: "True", type: "Boolean" },
  { label: '"pizza"', type: "String" },
  { label: "0", type: "Integer" },
  { label: "False", type: "Boolean" },
  { label: "99.9", type: "Float" },
];

const typeButtonColors: Record<TypeName, string> = {
  String: "bg-pink-100 text-pink-700 hover:bg-pink-200 border-pink-300",
  Integer: "bg-sage-100 text-sage-700 hover:bg-sage-200 border-sage-300",
  Float: "bg-amber-100 text-amber-700 hover:bg-amber-200 border-amber-300",
  Boolean: "bg-pink-50 text-pink-600 hover:bg-pink-100 border-pink-200",
};

function TypeSorter() {
  const [sorted, setSorted] = useState<Set<number>>(new Set());
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [shaking, setShaking] = useState<number | null>(null);

  function handleGuess(valueIndex: number, guess: TypeName) {
    if (gameValues[valueIndex].type === guess) {
      setSorted((prev) => new Set([...prev, valueIndex]));
      setActiveIndex(null);
    } else {
      setShaking(valueIndex);
      setTimeout(() => setShaking(null), 500);
    }
  }

  const allSorted = sorted.size === gameValues.length;

  return (
    <Card className="border-sage-200 bg-white/70">
      <CardContent className="p-4">
        <p className="font-semibold text-sage-600 text-sm mb-3">
          Type Sorter — click a value, then pick its type
        </p>

        <div className="flex flex-wrap gap-2 mb-3">
          {gameValues.map((v, i) =>
            sorted.has(i) ? (
              <span
                key={i}
                className="output-enter inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-sage-50 text-sage-500 text-sm font-mono line-through"
              >
                {v.label} <span className="text-green-500">&#10003;</span>
              </span>
            ) : (
              <button
                key={i}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className={`px-3 py-1.5 rounded-md border text-sm font-mono transition-all cursor-pointer
                  ${activeIndex === i ? "border-pink-400 bg-pink-50 ring-2 ring-pink-200" : "border-warm-gray/30 bg-white hover:border-sage-300"}
                  ${shaking === i ? "animate-shake" : ""}`}
              >
                {v.label}
              </button>
            )
          )}
        </div>

        {activeIndex !== null && !sorted.has(activeIndex) && (
          <div className="flex gap-2 flex-wrap">
            {(Object.keys(typeButtonColors) as TypeName[]).map((t) => (
              <button
                key={t}
                onClick={() => handleGuess(activeIndex, t)}
                className={`px-3 py-1 rounded-md border text-xs font-semibold transition-colors cursor-pointer ${typeButtonColors[t]}`}
              >
                {t}
              </button>
            ))}
          </div>
        )}

        {allSorted && (
          <p className="output-enter text-green-600 font-semibold text-sm mt-2">
            All sorted — nice work!
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export function DataTypesSlide({ active }: { active: boolean }) {
  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-sage-50 to-cream"
    >
      <Blob color="sage" className="w-[350px] h-[350px] -top-20 -right-24" />
      <Blob color="pink" className="w-[250px] h-[250px] bottom-10 -left-16" />

      <Overline variant="sage">Building Blocks</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        <span className="text-pink-500">Data</span> Types
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        Every piece of data in a program has a <strong>type</strong>. The type
        tells the computer what kind of value it is and what you can do with it.
      </p>

      <div className="stagger-item">
        <AnalogyBox>
          <p>
            Think of data types like different kinds of containers. You
            wouldn&rsquo;t store soup in a paper bag or carry books in a glass.
            Each type of data has a container that fits it best.
          </p>
        </AnalogyBox>
      </div>

      <div className="stagger-item grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
        {types.map((t) => (
          <Card
            key={t.name}
            className={`border-l-[3px] ${t.color} hover:-translate-y-0.5 transition-all`}
          >
            <CardContent className="p-4 text-center">
              <span className="text-2xl block mb-1">{t.icon}</span>
              <p className="font-semibold text-sage-600 text-sm">{t.name}</p>
              <p className="text-xs text-warm-gray mb-2">{t.desc}</p>
              <code className="text-xs bg-sage-50 px-2 py-0.5 rounded font-mono">
                {t.example}
              </code>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="stagger-item mt-4">
        <TypeSorter />
      </div>

      <div className="stagger-item mt-5">
        <CodeBlock
          output={`name is a <class 'str'>
age is a <class 'int'>
height is a <class 'float'>
is_learning is a <class 'bool'>`}
        >
          <span className="syn-kw">name</span>{" "}
          <span className="syn-br">=</span>{" "}
          <span className="syn-str">"Alice"</span>
          {"        "}
          <span className="syn-cm"># String</span>
          <br />
          <span className="syn-kw">age</span>{" "}
          <span className="syn-br">=</span>{" "}
          <span className="syn-num">25</span>
          {"             "}
          <span className="syn-cm"># Integer</span>
          <br />
          <span className="syn-kw">height</span>{" "}
          <span className="syn-br">=</span>{" "}
          <span className="syn-num">5.6</span>
          {"          "}
          <span className="syn-cm"># Float</span>
          <br />
          <span className="syn-kw">is_learning</span>{" "}
          <span className="syn-br">=</span>{" "}
          <span className="syn-num">True</span>
          {"    "}
          <span className="syn-cm"># Boolean</span>
          <br />
          <br />
          <span className="syn-bi">print</span>
          <span className="syn-br">(</span>
          <span className="syn-str">"name is a"</span>,{" "}
          <span className="syn-bi">type</span>
          <span className="syn-br">(</span>
          <span className="syn-kw">name</span>
          <span className="syn-br">))</span>
          <br />
          <span className="syn-bi">print</span>
          <span className="syn-br">(</span>
          <span className="syn-str">"age is a"</span>,{" "}
          <span className="syn-bi">type</span>
          <span className="syn-br">(</span>
          <span className="syn-kw">age</span>
          <span className="syn-br">))</span>
          <br />
          <span className="syn-bi">print</span>
          <span className="syn-br">(</span>
          <span className="syn-str">"height is a"</span>,{" "}
          <span className="syn-bi">type</span>
          <span className="syn-br">(</span>
          <span className="syn-kw">height</span>
          <span className="syn-br">))</span>
          <br />
          <span className="syn-bi">print</span>
          <span className="syn-br">(</span>
          <span className="syn-str">"is_learning is a"</span>,{" "}
          <span className="syn-bi">type</span>
          <span className="syn-br">(</span>
          <span className="syn-kw">is_learning</span>
          <span className="syn-br">))</span>
        </CodeBlock>
      </div>
    </SlideLayout>
  );
}
