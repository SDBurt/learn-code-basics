import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  SlideLayout,
  Overline,
  Blob,
} from "@/components/shared/slide-layout";

interface Bug {
  label: string;
  buggyCode: string;
  fixedCode: string;
  hint: string;
  options: { text: string; correct: boolean }[];
}

const bugs: Bug[] = [
  {
    label: "Missing parenthesis",
    buggyCode: 'print("Hello World"',
    fixedCode: 'print("Hello World")',
    hint: "Look at the parentheses carefully.",
    options: [
      { text: 'print("Hello World")', correct: true },
      { text: 'print("Hello World"', correct: false },
    ],
  },
  {
    label: "Wrong operator",
    buggyCode: "if age = 18:",
    fixedCode: "if age == 18:",
    hint: "= assigns a value, == compares values.",
    options: [
      { text: "if age = 18:", correct: false },
      { text: "if age == 18:", correct: true },
    ],
  },
  {
    label: "Index out of range",
    buggyCode: 'names = ["Alice", "Bob"]\nprint(names[2])',
    fixedCode: 'names = ["Alice", "Bob"]\nprint(names[1])',
    hint: "Lists start at index 0, so two items use indices 0 and 1.",
    options: [
      { text: "print(names[1])", correct: true },
      { text: "print(names[2])", correct: false },
    ],
  },
];

export function DebuggingSlide({ active }: { active: boolean }) {
  const [found, setFound] = useState<number[]>([]);
  const [shaking, setShaking] = useState<number[]>([]);

  function handleChoice(bugIndex: number, correct: boolean) {
    if (found.includes(bugIndex)) return;

    if (correct) {
      setFound((prev) => [...prev, bugIndex]);
    } else {
      setShaking((prev) => [...prev, bugIndex]);
      setTimeout(() => {
        setShaking((prev) => prev.filter((i) => i !== bugIndex));
      }, 500);
    }
  }

  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-pink-50 to-cream"
    >
      <Blob color="pink" className="w-[300px] h-[300px] -top-16 -right-24" />
      <Blob color="sage" className="w-[220px] h-[220px] bottom-8 -left-20" />

      <Overline variant="pink">Data Structures</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        <span className="text-sage-500">
          Bugs &amp; <strong>Debugging</strong>
        </span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-6">
        Bugs are mistakes in code. Debugging is the detective work of finding
        and fixing them. Every developer does this daily &mdash; it&rsquo;s a
        normal part of the job.
      </p>

      <h2 className="stagger-item font-display font-semibold text-xl text-pink-500 mb-4">
        Spot the Bug
      </h2>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-3 gap-5">
        {bugs.map((bug, index) => {
          const isFound = found.includes(index);
          const isShaking = shaking.includes(index);

          return (
            <Card
              key={index}
              data-testid={`bug-card-${index}`}
              className={[
                "transition-all duration-300",
                isFound
                  ? "border-2 border-green-500 bg-green-50"
                  : "border border-sage-200 bg-white",
                isShaking ? "animate-shake" : "",
              ].join(" ")}
            >
              <CardContent className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-sage-400 mb-2">
                  Bug #{index + 1}: {bug.label}
                </p>

                <div className="font-mono text-sm bg-sage-50 rounded-lg p-3 mb-4 whitespace-pre-wrap text-sage-600 border border-sage-200">
                  {bug.buggyCode}
                </div>

                {isFound ? (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-green-600 mb-1">
                      Fixed!
                    </p>
                    <div className="font-mono text-sm bg-green-50 rounded-lg p-3 whitespace-pre-wrap text-green-700 border border-green-300">
                      {bug.fixedCode}
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="text-xs text-warm-gray mb-2">{bug.hint}</p>
                    <p className="text-xs font-semibold uppercase tracking-wider text-sage-400 mb-2">
                      Which is correct?
                    </p>
                    <div className="flex flex-col gap-2">
                      {bug.options.map((option, optIndex) => (
                        <button
                          key={optIndex}
                          onClick={() => handleChoice(index, option.correct)}
                          className="text-left font-mono text-sm px-3 py-2 rounded-lg border border-sage-200 bg-white hover:bg-pink-50 hover:border-pink-300 transition-colors cursor-pointer"
                        >
                          {option.text}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {found.length === bugs.length && (
        <p className="stagger-item text-center text-sage-500 font-semibold mt-6">
          You found all the bugs &mdash; great debugging skills!
        </p>
      )}
    </SlideLayout>
  );
}
