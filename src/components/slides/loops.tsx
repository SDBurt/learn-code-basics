import { useState, useCallback, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";
import { SlideQA } from "@/components/shared/slide-qa";
import { Play, Check } from "lucide-react";

const partyItems = ["balloons", "cake", "music", "confetti", "candles"];

interface Annotation {
  id: string;
  label: string;
  explanation: string;
}

const annotations: Annotation[] = [
  {
    id: "list",
    label: "The list",
    explanation:
      "This creates a list of items. The square brackets [ ] hold the items, and commas separate each one. This is the data the loop will go through.",
  },
  {
    id: "for",
    label: "for",
    explanation:
      "'for' tells the computer: start a loop. It means 'I'm about to repeat something for each item.'",
  },
  {
    id: "item",
    label: "item",
    explanation:
      "'item' is a temporary variable that changes each time the loop repeats. First it becomes 'balloons', then 'cake', then 'music', and so on. You could name it anything -- 'thing', 'x', 'party_item' -- but 'item' is clear.",
  },
  {
    id: "in",
    label: "in",
    explanation:
      "'in' connects the loop to the list. It means 'go through each thing inside this list'. Read the whole line as: 'for each item in party_items, do the following.'",
  },
  {
    id: "body",
    label: "The indented line",
    explanation:
      "This indented line is the action that repeats. It runs once for each item in the list. The 4 spaces at the start tell Python this line belongs to the loop. Everything indented here happens 5 times (once per item).",
  },
];

export function LoopsSlide({ active }: { active: boolean }) {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [activeAnnotation, setActiveAnnotation] = useState<string | null>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  const handleRun = useCallback(() => {
    if (isRunning) return;

    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    setVisibleItems([]);
    setIsRunning(true);

    partyItems.forEach((item, index) => {
      const timeout = setTimeout(() => {
        setVisibleItems((prev) => [...prev, item]);

        if (index === partyItems.length - 1) {
          setIsRunning(false);
        }
      }, (index + 1) * 600);

      timeoutsRef.current.push(timeout);
    });
  }, [isRunning]);

  const toggleAnnotation = (id: string) => {
    setActiveAnnotation((prev) => (prev === id ? null : id));
  };

  const annotationStyle = (id: string, variant: "inline" | "line" = "inline") => {
    const isActive = activeAnnotation === id;
    const somethingActive = activeAnnotation !== null;

    const base = "cursor-pointer transition-all duration-200";

    if (variant === "line") {
      if (isActive) {
        return `${base} bg-pink-200/60 border-l-2 border-pink-400 pl-2 -ml-2 rounded`;
      }
      if (somethingActive) {
        return `${base} opacity-60 hover:opacity-90`;
      }
      return `${base} hover:bg-pink-100/40 rounded`;
    }

    // inline
    if (isActive) {
      return `${base} bg-pink-200/60 rounded px-0.5 -mx-0.5`;
    }
    if (somethingActive) {
      return `${base} opacity-60 hover:opacity-90`;
    }
    return `${base} hover:bg-pink-100/40 rounded px-0.5 -mx-0.5`;
  };

  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-cream to-pink-50"
    >
      <Blob color="pink" className="w-[350px] h-[350px] -top-20 -right-28" />
      <Blob color="sage" className="w-[200px] h-[200px] bottom-10 -left-16" />

      <Overline variant="pink">Core Concepts</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        <span className="text-sage-500">Loops</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        Loops repeat actions &mdash; instead of writing the same instruction 100
        times, developers say{" "}
        <strong>&ldquo;do this for each item.&rdquo;</strong>
      </p>

      <div className="stagger-item">
        <AnalogyBox>
          <p>
            A loop is like a <strong>party checklist</strong> &mdash; instead of
            writing &ldquo;set up balloons, set up cake, set up music...&rdquo;
            one by one, you say &ldquo;for each item on the list, set it
            up!&rdquo;
          </p>
        </AnalogyBox>
      </div>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <p className="text-xs text-sage-400 mb-2">
            Click any highlighted part to learn what it does
          </p>

          <div className="bg-[#1e1e2e] rounded-2xl p-5 font-mono text-sm leading-7 text-gray-200 select-none">
            {/* Line 1: comment */}
            <div className="text-gray-500"># Party setup loop</div>

            {/* Line 2: the list */}
            <div>
              <span className="syn-kw">party_items</span>
              <span> = </span>
              <button
                type="button"
                onClick={() => toggleAnnotation("list")}
                className={annotationStyle("list")}
                tabIndex={0}
              >
                <span className="syn-br">[</span>
                <span className="syn-str">&quot;balloons&quot;</span>
                <span>, </span>
                <span className="syn-str">&quot;cake&quot;</span>
                <span>, </span>
                <span className="syn-str">&quot;music&quot;</span>
                <span>, </span>
                <span className="syn-str">&quot;confetti&quot;</span>
                <span>, </span>
                <span className="syn-str">&quot;candles&quot;</span>
                <span className="syn-br">]</span>
              </button>
            </div>

            {/* Line 3: empty */}
            <div>&nbsp;</div>

            {/* Line 4: for item in party_items: */}
            <div>
              <button
                type="button"
                onClick={() => toggleAnnotation("for")}
                className={annotationStyle("for")}
                tabIndex={0}
              >
                <span className="syn-kw">for</span>
              </button>{" "}
              <button
                type="button"
                onClick={() => toggleAnnotation("item")}
                className={annotationStyle("item")}
                tabIndex={0}
              >
                <span className="syn-kw">item</span>
              </button>{" "}
              <button
                type="button"
                onClick={() => toggleAnnotation("in")}
                className={annotationStyle("in")}
                tabIndex={0}
              >
                <span className="syn-kw">in</span>
              </button>{" "}
              <span className="syn-kw">party_items</span>
              <span>:</span>
            </div>

            {/* Line 5: indented body */}
            <button
              type="button"
              onClick={() => toggleAnnotation("body")}
              className={`block w-full text-left ${annotationStyle("body", "line")}`}
              tabIndex={0}
            >
              <span>{"    "}</span>
              <span className="syn-bi">print</span>
              <span className="syn-br">(</span>
              <span className="syn-str">&quot;Setting up:&quot;</span>
              <span>, </span>
              <span className="syn-kw">item</span>
              <span className="syn-br">)</span>
            </button>
          </div>

          {activeAnnotation && (
            <div className="mt-3 bg-white rounded-xl border border-pink-200 p-4 output-enter">
              <p className="text-xs font-semibold uppercase tracking-wider text-pink-500 mb-1.5">
                {annotations.find((a) => a.id === activeAnnotation)?.label}
              </p>
              <p className="text-sm text-warm-gray leading-relaxed">
                {annotations.find((a) => a.id === activeAnnotation)?.explanation}
              </p>
            </div>
          )}
        </div>

        <div>
          <div className="bg-white rounded-2xl p-6 border border-sage-200">
            <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
              Watch the loop run
            </h3>

            <Button
              onClick={handleRun}
              disabled={isRunning}
              className="gap-1.5 bg-pink-500 hover:bg-pink-600 text-white mb-4"
              size="sm"
            >
              <Play className="h-3.5 w-3.5" />
              Run Loop
            </Button>

            {(visibleItems.length > 0 || isRunning) && (
              <div className="mb-3 text-sm font-semibold text-pink-500">
                {isRunning
                  ? `Processing item ${visibleItems.length + 1} of ${partyItems.length}`
                  : `Done! All ${partyItems.length} items set up.`}
              </div>
            )}

            <div className="space-y-2">
              {partyItems.map((item) => {
                const isVisible = visibleItems.includes(item);
                return (
                  <div
                    key={item}
                    className={`flex items-center gap-3 rounded-xl px-4 py-2.5 font-mono text-sm transition-all duration-300 ${
                      isVisible
                        ? "bg-sage-50 border border-sage-200 opacity-100 translate-x-0"
                        : "bg-gray-50 border border-dashed border-gray-200 opacity-40 translate-x-2"
                    }`}
                  >
                    <span
                      className={`flex items-center justify-center w-5 h-5 rounded-full text-[0.65rem] font-bold transition-colors ${
                        isVisible
                          ? "bg-sage-400 text-white"
                          : "bg-gray-200 text-gray-400"
                      }`}
                    >
                      {isVisible ? (
                        <Check className="h-3 w-3" />
                      ) : (
                        <span>&middot;</span>
                      )}
                    </span>
                    <span
                      className={
                        isVisible ? "text-sage-600" : "text-gray-400"
                      }
                    >
                      {item}
                    </span>
                    {isVisible && (
                      <span className="ml-auto text-[0.72rem] text-sage-400">
                        Setting up: {item}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <SlideQA
        items={[
          {
            question: "What if I want to loop a specific number of times?",
            answer:
              "You can! Python has a built-in way to say 'do this 10 times' using range(). For example: for i in range(10) will repeat the indented code 10 times. The list-based loop we showed is just one common pattern.",
          },
          {
            question: "Can a loop run forever?",
            answer:
              "It can if you write it that way (called an 'infinite loop'), and it's a common beginner mistake. The computer will keep going until you force it to stop. That's why loops usually have a clear end point, like finishing all the items in a list.",
          },
        ]}
      />
    </SlideLayout>
  );
}
