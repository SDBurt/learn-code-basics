import { useState, useCallback, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { SlideQA } from "@/components/shared/slide-qa";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const LINE_DESCRIPTIONS = [
  "Reading the comment (computers skip these)",
  "Storing your name...",
  "Storing your colour...",
  "Storing your talent...",
  "",
  "Printing the result...",
];

function getLineStyle(lineIndex: number, currentLine: number | null) {
  if (currentLine === null) return "";
  if (lineIndex === currentLine)
    return "bg-pink-100/80 border-l-2 border-pink-400 -mx-3 px-3";
  if (lineIndex < currentLine) return "border-l-2 border-green-300 -mx-3 px-3";
  return "opacity-40";
}

function LineNumber({ n }: { n: number }) {
  return (
    <span className="text-[0.65rem] text-sage-400/50 select-none w-5 inline-block text-right mr-2">
      {n}
    </span>
  );
}

export function VariablesSlide({ active }: { active: boolean }) {
  const [tryName, setTryName] = useState("Shayla");
  const [tryColour, setTryColour] = useState("green");
  const [tryTalent, setTryTalent] = useState("law");
  const [currentLine, setCurrentLine] = useState<number | null>(null);
  const [showOutput, setShowOutput] = useState(false);
  const [outputText, setOutputText] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const name = tryName || "someone";
  const colour = tryColour || "everything";
  const talent = tryTalent || "so many things";

  const fullOutput = `${name} loves ${colour} and is amazing at ${talent}!`;

  const vars = [
    { name: "name", value: `"${name}"`, type: "text" },
    { name: "colour", value: `"${colour}"`, type: "text" },
    { name: "talent", value: `"${talent}"`, type: "text" },
  ];

  const clearTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  useEffect(() => {
    return () => clearTimeouts();
  }, [clearTimeouts]);

  const resetState = useCallback(() => {
    clearTimeouts();
    setCurrentLine(null);
    setShowOutput(false);
    setOutputText("");
    setIsRunning(false);
  }, [clearTimeouts]);

  const handleInputChange = useCallback(
    (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
      resetState();
    },
    [resetState],
  );

  const handleRun = useCallback(() => {
    resetState();
    setIsRunning(true);

    const lineDelays = [700, 700, 700, 700, 200, 700];
    let elapsed = 0;
    const newTimeouts: ReturnType<typeof setTimeout>[] = [];

    for (let i = 0; i < 6; i++) {
      const t = setTimeout(() => {
        setCurrentLine(i);

        if (i === 5) {
          setShowOutput(true);
          setOutputText("");
          const chars = fullOutput.split("");
          let ci = 0;
          const typeChar = () => {
            if (ci < chars.length) {
              const ch = chars[ci];
              ci++;
              setOutputText((prev) => prev + ch);
              const tt = setTimeout(typeChar, 25);
              timeoutsRef.current.push(tt);
            }
          };
          typeChar();

          const doneTimeout = setTimeout(() => {
            setCurrentLine(6);
            setIsRunning(false);
          }, chars.length * 25 + 200);
          timeoutsRef.current.push(doneTimeout);
        }
      }, elapsed);
      newTimeouts.push(t);
      elapsed += lineDelays[i];
    }

    timeoutsRef.current = newTimeouts;
  }, [fullOutput, resetState]);

  const statusText =
    currentLine === null
      ? null
      : currentLine === 6
        ? "Done! All lines executed top to bottom."
        : LINE_DESCRIPTIONS[currentLine]
          ? `Line ${currentLine + 1}: ${LINE_DESCRIPTIONS[currentLine]}`
          : null;

  return (
    <SlideLayout active={active} className="bg-cream">
      <Blob color="pink" className="w-[300px] h-[300px] -top-16 -right-24" />

      <Overline variant="pink">Building Blocks</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        <span className="text-pink-500">Variables</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        Now that you know about different types of data, you need somewhere to
        store them. A variable is like a <strong>labeled box</strong> -- you
        give it a name and put a value inside. You can use that name later to
        get the value back.
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

      <div className="stagger-item max-w-[600px] mx-auto mt-4">
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div>
            <label className="block text-sm font-semibold text-sage-600 mb-1.5">
              Your name:
            </label>
            <Input
              value={tryName}
              onChange={handleInputChange(setTryName)}
              className="border-sage-200 focus-visible:ring-sage-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-sage-600 mb-1.5">
              Favourite colour:
            </label>
            <Input
              value={tryColour}
              onChange={handleInputChange(setTryColour)}
              className="border-sage-200 focus-visible:ring-sage-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-sage-600 mb-1.5">
              Something you're great at:
            </label>
            <Input
              value={tryTalent}
              onChange={handleInputChange(setTryTalent)}
              className="border-sage-200 focus-visible:ring-sage-400"
            />
          </div>
        </div>

        <div className="code-block">
          <div className="code-header">
            <div className="code-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="code-lang">python</span>
          </div>
          <div>
            {/* Line 0: comment */}
            <div
              className={`py-0.5 transition-all duration-200 ${getLineStyle(0, currentLine)}`}
            >
              <LineNumber n={1} />
              <span className="syn-cm"># Creating variables</span>
            </div>

            {/* Line 1: name = "..." */}
            <div
              className={`py-0.5 transition-all duration-200 ${getLineStyle(1, currentLine)}`}
            >
              <LineNumber n={2} />
              <span className="syn-kw">name</span> ={" "}
              <span className="syn-str">
                "
                <span className="bg-pink-200/40 rounded px-0.5">{name}</span>
                "
              </span>
            </div>

            {/* Line 2: colour = "..." */}
            <div
              className={`py-0.5 transition-all duration-200 ${getLineStyle(2, currentLine)}`}
            >
              <LineNumber n={3} />
              <span className="syn-kw">colour</span> ={" "}
              <span className="syn-str">
                "
                <span className="bg-pink-200/40 rounded px-0.5">{colour}</span>
                "
              </span>
            </div>

            {/* Line 3: talent = "..." */}
            <div
              className={`py-0.5 transition-all duration-200 ${getLineStyle(3, currentLine)}`}
            >
              <LineNumber n={4} />
              <span className="syn-kw">talent</span> ={" "}
              <span className="syn-str">
                "
                <span className="bg-pink-200/40 rounded px-0.5">{talent}</span>
                "
              </span>
            </div>

            {/* Line 4: blank line */}
            <div
              className={`py-0.5 transition-all duration-200 ${getLineStyle(4, currentLine)}`}
            >
              <LineNumber n={5} />
            </div>

            {/* Line 5: print(...) */}
            <div
              className={`py-0.5 transition-all duration-200 ${getLineStyle(5, currentLine)}`}
            >
              <LineNumber n={6} />
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
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-2">
          <Button
            onClick={handleRun}
            disabled={isRunning}
            className="gap-1.5 bg-sage-500 hover:bg-sage-600 text-white disabled:opacity-50"
            size="sm"
          >
            <Play className="h-3.5 w-3.5" />
            Run Code
          </Button>
          {statusText && (
            <span className="text-xs text-sage-500 font-medium">
              {statusText}
            </span>
          )}
        </div>

        {showOutput && (
          <div className="output-enter mt-2.5 rounded-xl bg-sage-50 border border-sage-200 p-3.5 font-mono text-sm text-sage-600">
            <div className="text-[0.72rem] font-semibold uppercase tracking-wider text-sage-400 mb-1.5">
              Output
            </div>
            <div className="whitespace-pre-wrap">{outputText}</div>
          </div>
        )}
      </div>

      <SlideQA
        items={[
          {
            question: "Why can't I just use the value directly instead of a variable?",
            answer: "You could, but what if you need that value in 10 different places? With a variable, you change it once and it updates everywhere. It also makes your code easier to read -- 'price' is clearer than seeing the number 49.99 scattered around."
          },
          {
            question: "What does the equals sign (=) do?",
            answer: "In code, the equals sign doesn't mean 'is equal to' like in math. It means 'store this value'. So name = \"Shayla\" means 'put the text Shayla into a box called name'. It's more like an arrow pointing left -- the value on the right goes into the name on the left."
          },
          {
            question: "Can I name a variable anything I want?",
            answer: "Almost! Variable names can use letters, numbers, and underscores, but they can't start with a number and can't have spaces. So 'my_name' works but '2nd_name' or 'my name' don't. Good variable names describe what's inside, like 'age' or 'favourite_colour'."
          }
        ]}
      />
    </SlideLayout>
  );
}
