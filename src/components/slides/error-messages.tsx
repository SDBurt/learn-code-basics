import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";

interface ErrorExample {
  code: string;
  error: string;
  meaning: string;
  fix: string;
  type: string;
}

const errors: ErrorExample[] = [
  {
    code: 'print("Hello"',
    error: "SyntaxError: unexpected EOF while parsing",
    meaning: "You forgot to close a parenthesis or bracket.",
    fix: 'Add the missing closing parenthesis: print("Hello")',
    type: "SyntaxError",
  },
  {
    code: "print(name)",
    error: "NameError: name 'name' is not defined",
    meaning: "You're using a variable that doesn't exist yet.",
    fix: "Define the variable first: name = \"Alice\" before using it.",
    type: "NameError",
  },
  {
    code: '"5" + 3',
    error: 'TypeError: can only concatenate str to str',
    meaning: "You're trying to combine two incompatible types (text + number).",
    fix: 'Convert the string to a number first: int("5") + 3',
    type: "TypeError",
  },
  {
    code: "colors = [1, 2, 3]\nprint(colors[5])",
    error: "IndexError: list index out of range",
    meaning: "You're asking for an item at a position that doesn't exist in the list.",
    fix: "Check the list length first, or use a valid index (0, 1, or 2).",
    type: "IndexError",
  },
];

const tips = [
  "Read the last line first -- it usually tells you exactly what went wrong",
  "Look at the line number -- the error tells you where to start looking",
  "Google the error message -- someone has almost certainly had the same problem",
  "Check for typos -- misspelled variable names are one of the most common bugs",
  "Read the error type -- SyntaxError, TypeError, etc. narrow down the problem category",
];

export function ErrorMessagesSlide({ active }: { active: boolean }) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-cream to-pink-50"
    >
      <Blob color="pink" className="w-[350px] h-[350px] -top-20 -right-24" />
      <Blob color="sage" className="w-[250px] h-[250px] bottom-10 -left-16" />

      <Overline variant="sage">Building Blocks</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        Reading <span className="text-pink-500">Error Messages</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        Error messages look scary at first, but they're actually
        your <strong>best friend</strong> when debugging. They tell you
        exactly what went wrong and where.
      </p>

      <div className="stagger-item">
        <AnalogyBox>
          <p>
            An error message is like a check engine light that actually tells
            you what's wrong. Instead of just "something broke," it says "your
            oil is low, check line 42 of your engine."
          </p>
        </AnalogyBox>
      </div>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            Common Python Errors
          </h3>
          <div className="space-y-2">
            {errors.map((err, i) => (
              <Button
                key={i}
                variant="ghost"
                className={`w-full text-left h-auto p-0 hover:bg-transparent ${
                  selected === i ? "" : ""
                }`}
                onClick={() => setSelected(i)}
              >
                <Card
                  className={`w-full transition-all ${
                    selected === i
                      ? "border-pink-400 shadow-md"
                      : "border-sage-200 hover:border-sage-300"
                  }`}
                  data-testid={`error-card-${i}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-pink-500">
                        {err.type}
                      </span>
                    </div>
                    <code className="text-xs bg-gray-900 text-red-400 px-2.5 py-1 rounded font-mono block whitespace-pre-wrap">
                      {err.error}
                    </code>
                  </CardContent>
                </Card>
              </Button>
            ))}
          </div>
        </div>

        <div>
          {selected !== null ? (
            <div className="output-enter">
              <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
                Breaking it down
              </h3>
              <div className="space-y-3">
                <div className="bg-gray-900 rounded-xl p-4">
                  <div className="text-[0.72rem] font-semibold uppercase tracking-wider text-sage-400 mb-2">
                    The code that caused it
                  </div>
                  <pre className="font-mono text-sm text-gray-300 whitespace-pre-wrap">
                    {errors[selected].code}
                  </pre>
                </div>
                <div className="bg-white rounded-xl p-4 border border-sage-200">
                  <p className="font-semibold text-sage-600 text-sm mb-1">
                    What it means
                  </p>
                  <p className="text-sm text-warm-gray">
                    {errors[selected].meaning}
                  </p>
                </div>
                <div className="bg-sage-50 rounded-xl p-4 border border-sage-200">
                  <p className="font-semibold text-sage-600 text-sm mb-1">
                    How to fix it
                  </p>
                  <p className="text-sm text-warm-gray">
                    {errors[selected].fix}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
                Tips for reading errors
              </h3>
              <div className="space-y-2">
                {tips.map((tip, i) => (
                  <div
                    key={i}
                    className="flex gap-3 items-start bg-white rounded-xl p-3 border border-sage-200"
                  >
                    <span className="bg-sage-100 text-sage-600 font-bold text-sm w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-sm text-warm-gray">{tip}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-sage-400 mt-3 italic">
                Click an error on the left to see a breakdown.
              </p>
            </div>
          )}
        </div>
      </div>
    </SlideLayout>
  );
}
