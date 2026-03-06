import { useState, useCallback, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";
import { CodeBlock } from "@/components/shared/code-block";
import { Play, Check } from "lucide-react";

const partyItems = ["balloons", "cake", "music", "confetti", "candles"];

export function LoopsSlide({ active }: { active: boolean }) {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
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
          <CodeBlock>
            <span className="syn-cm"># Party setup loop</span>
            <br />
            <span className="syn-kw">party_items</span> ={" "}
            <span className="syn-br">[</span>
            <span className="syn-str">"balloons"</span>,{" "}
            <span className="syn-str">"cake"</span>,{" "}
            <span className="syn-str">"music"</span>,{" "}
            <span className="syn-str">"confetti"</span>,{" "}
            <span className="syn-str">"candles"</span>
            <span className="syn-br">]</span>
            <br />
            <br />
            <span className="syn-kw">for</span>{" "}
            <span className="syn-kw">item</span>{" "}
            <span className="syn-kw">in</span>{" "}
            <span className="syn-kw">party_items</span>:
            <br />
            {"    "}
            <span className="syn-bi">print</span>
            <span className="syn-br">(</span>
            <span className="syn-str">"Setting up:"</span>,{" "}
            <span className="syn-kw">item</span>
            <span className="syn-br">)</span>
          </CodeBlock>

          <Card className="mt-4">
            <CardContent className="p-5">
              <h3 className="font-display font-medium text-lg mb-2 text-sage-600">
                How loops work
              </h3>
              <div className="text-sm text-warm-gray leading-7">
                <span className="font-mono text-sage-500">for</span> &mdash;
                start a loop
                <br />
                <span className="font-mono text-sage-500">item</span> &mdash;
                the current value
                <br />
                <span className="font-mono text-sage-500">in</span> &mdash;
                iterate over a collection
                <br />
                The indented block runs <strong>once per item</strong>
              </div>
            </CardContent>
          </Card>
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
    </SlideLayout>
  );
}
