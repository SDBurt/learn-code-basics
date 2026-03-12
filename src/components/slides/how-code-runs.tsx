import { useState, useCallback, useRef, useEffect } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";
import { SlideQA } from "@/components/shared/slide-qa";

const CODE_LINES = [
  {
    code: (
      <>
        <span className="syn-bi">print</span>
        <span className="syn-br">(</span>
        <span className="syn-str">&quot;Step 1: Wake up&quot;</span>
        <span className="syn-br">)</span>
      </>
    ),
    output: "Step 1: Wake up",
  },
  {
    code: (
      <>
        <span className="syn-bi">print</span>
        <span className="syn-br">(</span>
        <span className="syn-str">&quot;Step 2: Eat breakfast&quot;</span>
        <span className="syn-br">)</span>
      </>
    ),
    output: "Step 2: Eat breakfast",
  },
  {
    code: (
      <>
        <span className="syn-bi">print</span>
        <span className="syn-br">(</span>
        <span className="syn-str">&quot;Step 3: Go outside&quot;</span>
        <span className="syn-br">)</span>
      </>
    ),
    output: "Step 3: Go outside",
  },
];

const STEP_DELAY = 1200;

export function HowCodeRunsSlide({ active }: { active: boolean }) {
  // null = not started, 0/1/2 = active line index, 3 = done
  const [currentLine, setCurrentLine] = useState<number | null>(null);
  const [outputLines, setOutputLines] = useState<string[]>([]);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimeouts = useCallback(() => {
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];
  }, []);

  useEffect(() => {
    return () => clearTimeouts();
  }, [clearTimeouts]);

  const handleStep = useCallback(() => {
    clearTimeouts();
    setCurrentLine(0);
    setOutputLines([CODE_LINES[0].output]);

    for (let i = 1; i < CODE_LINES.length; i++) {
      const t = setTimeout(() => {
        setCurrentLine(i);
        setOutputLines((prev) => [...prev, CODE_LINES[i].output]);
      }, STEP_DELAY * i);
      timeoutsRef.current.push(t);
    }

    // Mark as done after the last line
    const doneTimeout = setTimeout(() => {
      setCurrentLine(CODE_LINES.length);
    }, STEP_DELAY * CODE_LINES.length);
    timeoutsRef.current.push(doneTimeout);
  }, [clearTimeouts]);

  const handleReset = useCallback(() => {
    clearTimeouts();
    setCurrentLine(null);
    setOutputLines([]);
  }, [clearTimeouts]);

  const isRunning = currentLine !== null && currentLine < CODE_LINES.length;
  const isDone = currentLine === CODE_LINES.length;

  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-cream to-sage-50"
    >
      <Blob color="sage" className="w-[350px] h-[350px] -top-20 -right-28" />
      <Blob color="pink" className="w-[200px] h-[200px] bottom-10 -left-16" />

      <Overline variant="sage">Core Concepts</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        How Code <span className="text-sage-500">Runs</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        The computer reads code like you read a book &mdash; starting at the
        top, going one line at a time, from top to bottom. It finishes one line
        before moving to the next.
      </p>

      <div className="stagger-item">
        <AnalogyBox>
          <p>
            Think of a <strong>to-do list</strong>. You start at item 1, finish
            it, then move to item 2, then item 3. You don&apos;t skip around
            randomly &mdash; you go in order. Code works the same way.
          </p>
        </AnalogyBox>
      </div>

      <div className="stagger-item mt-4">
        <div className="code-block">
          <div className="code-header">
            <div className="code-dots">
              <span />
              <span />
              <span />
            </div>
            <span className="code-lang">python</span>
          </div>

          <div className="flex flex-col gap-0.5">
            {CODE_LINES.map((line, i) => {
              const isActive = currentLine === i;
              const isExecuted =
                currentLine !== null && currentLine > i;
              const isPending =
                currentLine === null || currentLine < i;

              return (
                <div
                  key={i}
                  className={`flex items-center gap-2.5 rounded-md px-2 py-1 transition-all duration-300 ${
                    isActive
                      ? "bg-pink-100/15 border-l-2 border-pink-400"
                      : isExecuted
                        ? "border-l-2 border-green-500/50"
                        : "border-l-2 border-transparent"
                  } ${isPending ? "opacity-50" : "opacity-100"}`}
                >
                  <span className="text-[0.75rem] text-gray-500 w-5 text-right select-none shrink-0">
                    {i + 1}
                  </span>
                  <span className="w-4 text-center shrink-0">
                    {isActive && (
                      <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-pink-400 text-white text-[0.6rem] leading-none font-bold">
                        &#9654;
                      </span>
                    )}
                  </span>
                  <span className="flex-1">{line.code}</span>
                </div>
              );
            })}
          </div>

          {/* Output area */}
          {outputLines.length > 0 && (
            <div className="mt-4 pt-3 border-t border-white/10">
              <div className="text-[0.7rem] text-gray-500 uppercase tracking-wider mb-1.5">
                Output
              </div>
              <div className="text-green-400 text-[0.85rem]">
                {outputLines.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 mt-3">
          <Button
            onClick={handleStep}
            disabled={isRunning}
            className="gap-1.5 bg-sage-500 hover:bg-sage-600 text-white"
          >
            <Play className="w-4 h-4" />
            Step through
          </Button>
          <Button
            onClick={handleReset}
            variant="outline"
            disabled={currentLine === null}
          >
            Reset
          </Button>
        </div>

        {/* Completion message */}
        {isDone && (
          <div className="mt-3 bg-white/70 rounded-xl px-5 py-3.5 border border-sage-200 text-sm text-warm-gray">
            Done! The computer ran every line from top to bottom.
          </div>
        )}
      </div>

      <SlideQA
        items={[
          {
            question: "Does code always run top to bottom?",
            answer: "By default, yes. But later you'll learn about things like conditionals (which can skip lines) and loops (which repeat lines). Even then, the computer is still reading from top to bottom -- it just follows special instructions about which lines to run."
          },
          {
            question: "What happens if there's an error on one line?",
            answer: "The computer stops right there and shows you an error message. It won't keep going past the broken line. That's actually helpful -- it tells you exactly where the problem is."
          },
          {
            question: "What does 'print' do?",
            answer: "print() is a built-in command in Python that shows text on the screen. It's how you tell the computer to display something so you can see it. Without print, the computer would do the work but you wouldn't see the result."
          }
        ]}
      />
    </SlideLayout>
  );
}
