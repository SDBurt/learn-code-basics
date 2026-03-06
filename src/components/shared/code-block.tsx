import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface CodeBlockProps {
  children: React.ReactNode;
  output?: string;
  language?: string;
}

export function CodeBlock({ children, output, language }: CodeBlockProps) {
  const [showOutput, setShowOutput] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  const handleRun = useCallback(() => {
    if (!output) return;
    setShowOutput(true);
    setDisplayedText("");

    const chars = output.split("");
    let i = 0;
    const type = () => {
      if (i < chars.length) {
        const char = chars[i];
        i++;
        setDisplayedText((prev) => prev + char);
        setTimeout(type, 25);
      }
    };
    type();
  }, [output]);

  return (
    <div>
      <div className="code-block">
        <div className="code-header">
          <div className="code-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="code-lang">{language ?? "python"}</span>
        </div>
        <div>{children}</div>
      </div>

      {output && (
        <>
          <Button
            onClick={handleRun}
            className="mt-2 gap-1.5 bg-sage-500 hover:bg-sage-600 text-white"
            size="sm"
          >
            <Play className="h-3.5 w-3.5" />
            Run Code
          </Button>

          {showOutput && (
            <div className="output-enter mt-2.5 rounded-xl bg-sage-50 border border-sage-200 p-3.5 font-mono text-sm text-sage-600">
              <div className="text-[0.72rem] font-semibold uppercase tracking-wider text-sage-400 mb-1.5">
                Output
              </div>
              <div className="whitespace-pre-wrap">{displayedText}</div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
