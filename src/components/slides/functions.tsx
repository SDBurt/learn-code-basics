import { useState, useCallback, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { SlideQA } from "@/components/shared/slide-qa";
import { AnalogyBox } from "@/components/shared/analogy-box";
import { Play } from "lucide-react";

type ExecutionStep = number | null;

export function FunctionsSlide({ active }: { active: boolean }) {
  const [name, setName] = useState("Shayla");
  const [style, setStyle] = useState<"hype" | "sweet">("hype");
  const [showOutput, setShowOutput] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [executionStep, setExecutionStep] = useState<ExecutionStep>(null);
  const [isRunning, setIsRunning] = useState(false);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const displayName = name || "someone";

  const computeResult = useCallback(
    (n: string, s: "hype" | "sweet") => {
      return s === "hype"
        ? `${n} is incredible!`
        : `${n} brings so much light.`;
    },
    [],
  );

  const clearTimeouts = useCallback(() => {
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];
  }, []);

  useEffect(() => {
    return () => clearTimeouts();
  }, [clearTimeouts]);

  const resetExecution = useCallback(() => {
    clearTimeouts();
    setExecutionStep(null);
    setIsRunning(false);
    setShowOutput(false);
    setDisplayedText("");
  }, [clearTimeouts]);

  const handleRun = useCallback(() => {
    if (isRunning) return;

    resetExecution();
    setIsRunning(true);

    const delay = 900;
    const result = computeResult(displayName, style);

    // Step 0: Read function definition
    const t0 = setTimeout(() => setExecutionStep(0), 50);
    // Step 1: Skip to comment
    const t1 = setTimeout(() => setExecutionStep(1), delay + 50);
    // Step 2: Function call line
    const t2 = setTimeout(() => setExecutionStep(2), delay * 2 + 50);
    // Step 3: Jump into function, check condition + matching branch
    const t3 = setTimeout(() => setExecutionStep(3), delay * 3 + 50);
    // Step 4: Print line
    const t4 = setTimeout(() => setExecutionStep(4), delay * 4 + 50);
    // Step 5: Show output with typing animation
    const t5 = setTimeout(() => {
      setExecutionStep(5);
      setShowOutput(true);
      setDisplayedText("");
      const chars = result.split("");
      let i = 0;
      const type = () => {
        if (i < chars.length) {
          const char = chars[i];
          i++;
          setDisplayedText((prev) => prev + char);
          const tt = setTimeout(type, 25);
          timeoutsRef.current.push(tt);
        }
      };
      type();
    }, delay * 5 + 50);
    // Step 6: Done
    const t6 = setTimeout(() => {
      setExecutionStep(6);
      setIsRunning(false);
    }, delay * 6 + 50);

    timeoutsRef.current.push(t0, t1, t2, t3, t4, t5, t6);
  }, [isRunning, resetExecution, computeResult, displayName, style]);

  const handleStyleChange = (s: "hype" | "sweet") => {
    setStyle(s);
    resetExecution();
  };

  const handleNameChange = (value: string) => {
    setName(value);
    resetExecution();
  };

  // Line styling logic
  const getLineStyle = (lineIndex: number) => {
    if (executionStep === null) return "";

    // Definition lines (0-4)
    const isDefLine = lineIndex >= 0 && lineIndex <= 4;
    // Comment line (6)
    const isComment = lineIndex === 6;
    // Call line (7)
    const isCallLine = lineIndex === 7;
    // Condition line (1 inside function)
    const isConditionLine = lineIndex === 1;
    // Hype branch (2)
    const isHypeBranch = lineIndex === 2;
    // Sweet else (3) + sweet branch (4)
    const isSweetElse = lineIndex === 3;
    const isSweetBranch = lineIndex === 4;
    // Print line (8)
    const isPrintLine = lineIndex === 8;

    // Determine the matching and non-matching branches
    const isMatchingBranch = style === "hype" ? isHypeBranch : isSweetBranch;
    const isMatchingElse = style === "sweet" ? isSweetElse : false;
    const isNonMatchingBranch = style === "hype"
      ? (isSweetElse || isSweetBranch)
      : isHypeBranch;

    // Step 0: definition lines highlighted as group
    if (executionStep === 0) {
      if (isDefLine) return "bg-sage-100/70 transition-colors duration-300";
      return "opacity-40 transition-opacity duration-300";
    }

    // Step 1: comment flashes
    if (executionStep === 1) {
      if (isDefLine) return "border-l-2 border-green-300 pl-1 transition-all duration-300";
      if (isComment) return "bg-sage-100/50 transition-colors duration-300";
      return "opacity-40 transition-opacity duration-300";
    }

    // Step 2: call line highlighted
    if (executionStep === 2) {
      if (isDefLine) return "border-l-2 border-green-300 pl-1 transition-all duration-300";
      if (isComment) return "border-l-2 border-green-300 pl-1 transition-all duration-300";
      if (isCallLine) return "bg-pink-100/60 transition-colors duration-300";
      return "opacity-40 transition-opacity duration-300";
    }

    // Step 3: inside the function -- condition + matching branch
    if (executionStep === 3) {
      if (isCallLine) return "border-l-2 border-green-300 pl-1 transition-all duration-300";
      if (isComment) return "border-l-2 border-green-300 pl-1 transition-all duration-300";
      if (isConditionLine) return "bg-pink-100/60 transition-colors duration-300";
      if (isMatchingBranch || isMatchingElse) return "bg-pink-100/60 transition-colors duration-300";
      if (isNonMatchingBranch) return "opacity-20 transition-opacity duration-300";
      // def line (0) stays with green border
      if (lineIndex === 0) return "border-l-2 border-green-300 pl-1 transition-all duration-300";
      return "opacity-40 transition-opacity duration-300";
    }

    // Step 4: print line highlighted
    if (executionStep === 4) {
      if (isDefLine) return "border-l-2 border-green-300 pl-1 transition-all duration-300";
      if (isComment) return "border-l-2 border-green-300 pl-1 transition-all duration-300";
      if (isCallLine) return "border-l-2 border-green-300 pl-1 transition-all duration-300";
      if (isPrintLine) return "bg-pink-100/60 transition-colors duration-300";
      return "opacity-40 transition-opacity duration-300";
    }

    // Step 5-6: all done
    if (executionStep >= 5) {
      if (isNonMatchingBranch) return "opacity-20 transition-opacity duration-300";
      return "border-l-2 border-green-300 pl-1 transition-all duration-300";
    }

    return "";
  };

  const getStatusMessage = () => {
    switch (executionStep) {
      case 0:
        return "Reading the function definition (saving the recipe for later)...";
      case 1:
        return "Skipping to the function call...";
      case 2:
        return "Calling compliment() -- jumping into the function...";
      case 3:
        return "Checking the condition... running the matching branch...";
      case 4:
        return "Printing the result...";
      case 5:
      case 6:
        return "Done! The function returned its result.";
      default:
        return null;
    }
  };

  const lineNum = (n: number) => (
    <span className="text-[0.65rem] text-sage-400/50 select-none w-5 inline-block text-right mr-2">
      {n}
    </span>
  );

  const statusMessage = getStatusMessage();

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

      <div className="stagger-item max-w-[600px] mx-auto mt-4 space-y-4">
        {/* Controls row */}
        <div className="flex items-end gap-3">
          <div className="flex-1">
            <label className="block text-sm font-semibold text-sage-600 mb-1.5">
              Name:
            </label>
            <Input
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              className="border-sage-200 focus-visible:ring-sage-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-sage-600 mb-1.5">
              Style:
            </label>
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={() => handleStyleChange("hype")}
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
                onClick={() => handleStyleChange("sweet")}
                className={
                  style === "sweet"
                    ? "bg-pink-500 hover:bg-pink-600 text-white"
                    : "bg-sage-100 text-sage-600 hover:bg-sage-200"
                }
              >
                Sweet
              </Button>
            </div>
          </div>
        </div>

        {/* Unified code block */}
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
            {/* Line 0: def compliment(name, style): */}
            <div className={`rounded px-1 -mx-1 ${getLineStyle(0)}`}>
              {lineNum(1)}
              <span className="syn-kw">def</span>{" "}
              <span className="syn-fn">compliment</span>
              <span className="syn-br">(</span>
              <span className="syn-kw">name</span>,{" "}
              <span className="syn-kw">style</span>
              <span className="syn-br">)</span>:
            </div>

            {/* Line 1: if style == "hype": */}
            <div className={`rounded px-1 -mx-1 ${getLineStyle(1)}`}>
              {lineNum(2)}
              {"    "}
              <span className="syn-kw">if</span>{" "}
              <span className="syn-kw">style</span>{" "}
              <span className="syn-br">==</span>{" "}
              <span className="syn-str">&quot;hype&quot;</span>:
            </div>

            {/* Line 2: return f"{name} is incredible!" */}
            <div className={`rounded px-1 -mx-1 ${getLineStyle(2)}`}>
              {lineNum(3)}
              {"        "}
              <span className="syn-kw">return</span>{" "}
              <span className="syn-str">f&quot;</span>
              <span className="syn-br">{"{"}</span>
              <span className="syn-kw">name</span>
              <span className="syn-br">{"}"}</span>
              <span className="syn-str"> is incredible!&quot;</span>
            </div>

            {/* Line 3: else: */}
            <div className={`rounded px-1 -mx-1 ${getLineStyle(3)}`}>
              {lineNum(4)}
              {"    "}
              <span className="syn-kw">else</span>:
            </div>

            {/* Line 4: return f"{name} brings so much light." */}
            <div className={`rounded px-1 -mx-1 ${getLineStyle(4)}`}>
              {lineNum(5)}
              {"        "}
              <span className="syn-kw">return</span>{" "}
              <span className="syn-str">f&quot;</span>
              <span className="syn-br">{"{"}</span>
              <span className="syn-kw">name</span>
              <span className="syn-br">{"}"}</span>
              <span className="syn-str"> brings so much light.&quot;</span>
            </div>

            {/* Line 5: blank */}
            <div className="h-4" />

            {/* Line 6: # Call the function */}
            <div className={`rounded px-1 -mx-1 ${getLineStyle(6)}`}>
              {lineNum(6)}
              <span className="syn-cm"># Call the function</span>
            </div>

            {/* Line 7: result = compliment("name", "style") */}
            <div className={`rounded px-1 -mx-1 ${getLineStyle(7)}`}>
              {lineNum(7)}
              <span className="syn-kw">result</span>{" "}
              <span className="syn-br">=</span>{" "}
              <span className="syn-fn">compliment</span>
              <span className="syn-br">(</span>
              <span className="syn-str">
                &quot;
                <span className="bg-pink-200/40 rounded px-0.5">{displayName}</span>
                &quot;
              </span>
              ,{" "}
              <span className="syn-str">
                &quot;
                <span className="bg-pink-200/40 rounded px-0.5">{style}</span>
                &quot;
              </span>
              <span className="syn-br">)</span>
            </div>

            {/* Line 8: print(result) */}
            <div className={`rounded px-1 -mx-1 ${getLineStyle(8)}`}>
              {lineNum(8)}
              <span className="syn-fn">print</span>
              <span className="syn-br">(</span>
              <span className="syn-kw">result</span>
              <span className="syn-br">)</span>
            </div>
          </div>
        </div>

        {/* Run button, status, and output */}
        <div>
          <Button
            onClick={handleRun}
            disabled={isRunning}
            className="gap-1.5 bg-sage-500 hover:bg-sage-600 text-white"
            size="sm"
          >
            <Play className="h-3.5 w-3.5" />
            Run Code
          </Button>

          {statusMessage && (
            <div className="mt-2 text-sm text-sage-500 italic animate-pulse">
              {statusMessage}
            </div>
          )}

          {showOutput && (
            <div className="output-enter mt-2.5 rounded-xl bg-sage-50 border border-sage-200 p-3.5 font-mono text-sm text-sage-600">
              <div className="text-[0.72rem] font-semibold uppercase tracking-wider text-sage-400 mb-1.5">
                Output
              </div>
              <div className="whitespace-pre-wrap">{displayedText}</div>
            </div>
          )}
        </div>
      </div>

      <SlideQA
        items={[
          {
            question: "What does 'def' mean?",
            answer:
              "It stands for 'define' -- you're telling the computer 'I'm about to define a new function'. Everything indented below it becomes part of that function's recipe.",
          },
          {
            question: "What are the things inside the parentheses?",
            answer:
              "Those are called parameters -- they're like blank spaces in a form. When you create the function, you say 'this recipe needs a name and a style'. When you use the function, you fill in those blanks with actual values.",
          },
          {
            question: "What does 'return' do?",
            answer:
              "It sends a result back from the function. Think of it like ordering food -- you tell the kitchen what you want (call the function), and they return your meal (the result). Without return, the function would do its work but wouldn't give you anything back.",
          },
        ]}
      />
    </SlideLayout>
  );
}
