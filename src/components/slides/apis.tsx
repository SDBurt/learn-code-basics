import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";

const endpoints: Record<string, string> = {
  "/weather": `{\n  "city": "Vancouver",\n  "temp": "18°C",\n  "condition": "Partly cloudy"\n}`,
  "/jokes": `{\n  "setup": "Why do programmers prefer dark mode?",\n  "punchline": "Because light attracts bugs!"\n}`,
  "/dog": `{\n  "breed": "Pomsky",\n  "name": "Juneau",\n  "goodDog": true\n}`,
};

export function ApisSlide({ active }: { active: boolean }) {
  const [selectedEndpoint, setSelectedEndpoint] = useState<string | null>(null);
  const [displayedText, setDisplayedText] = useState("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    return () => {
      timeoutRef.current.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    timeoutRef.current.forEach(clearTimeout);
    timeoutRef.current = [];
    setDisplayedText("");

    if (!selectedEndpoint) return;

    const fullText = endpoints[selectedEndpoint];

    for (let i = 0; i < fullText.length; i++) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, i + 1));
      }, i * 25);
      timeoutRef.current.push(timeout);
    }
  }, [selectedEndpoint]);

  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-sage-50 to-cream"
    >
      <Blob color="sage" className="w-[350px] h-[350px] -top-20 -right-24" />
      <Blob color="pink" className="w-[250px] h-[250px] bottom-10 -left-16" />

      <Overline variant="pink">How the Web Works</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        <span className="text-pink-500">APIs</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        An <strong>API</strong> is how one app asks another app for information.
        When a weather app shows today&rsquo;s forecast, it sends a request
        (a question) to a weather service and gets back a response (the answer).
      </p>

      <div className="stagger-item">
        <AnalogyBox>
          <p>
            An API is like a <strong>waiter at a restaurant</strong>. You
            don&rsquo;t go into the kitchen yourself &mdash; you tell the waiter
            what you want, and they bring it back. Apps use APIs to request data
            from other services.
          </p>
        </AnalogyBox>
      </div>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div className="bg-white rounded-2xl p-6 border border-sage-200">
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            Try an API endpoint
          </h3>
          <p className="text-xs text-warm-gray mb-3">
            An &ldquo;endpoint&rdquo; is just a specific web address an app can visit to get data.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {Object.keys(endpoints).map((endpoint) => (
              <Button
                key={endpoint}
                size="sm"
                onClick={() => setSelectedEndpoint(endpoint)}
                className={
                  selectedEndpoint === endpoint
                    ? "bg-pink-500 hover:bg-pink-600 text-white"
                    : "bg-sage-100 text-sage-600 hover:bg-sage-200"
                }
              >
                {endpoint}
              </Button>
            ))}
          </div>

          {selectedEndpoint && (
            <div className="text-[0.72rem] font-semibold uppercase tracking-wider text-sage-400 mb-1.5">
              GET {selectedEndpoint}
              <span className="normal-case tracking-normal font-normal text-warm-gray block mt-1">
                &ldquo;GET&rdquo; means &ldquo;give me this data&rdquo; &mdash; like placing an order at a restaurant.
              </span>
            </div>
          )}
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 min-h-[180px] flex flex-col">
          <div className="text-[0.72rem] font-semibold uppercase tracking-wider text-sage-400 mb-1">
            Response <span className="normal-case tracking-normal font-normal">&mdash; the data sent back to you</span>
          </div>
          <p className="text-[0.68rem] text-gray-500 mb-2">
            The curly-brace format below is called <strong className="text-gray-400">JSON</strong> &mdash; it&rsquo;s how computers share structured data, kind of like a labeled list.
          </p>
          <pre className="font-mono text-sm text-green-400 whitespace-pre-wrap flex-1">
            {displayedText || (
              <span className="text-gray-500 italic">
                Click a button on the left to ask for data...
              </span>
            )}
          </pre>
        </div>
      </div>
    </SlideLayout>
  );
}
