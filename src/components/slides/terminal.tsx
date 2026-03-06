import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  SlideLayout,
  Overline,
  Blob,
} from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";

interface TerminalEntry {
  command: string;
  output: string;
  description: string;
}

const presetCommands: TerminalEntry[] = [
  {
    command: "ls",
    output: "index.html  styles.css  app.js  README.md",
    description: "List all files in the current folder",
  },
  {
    command: "cd projects",
    output: "~/projects $",
    description: "Change directory -- move into a folder",
  },
  {
    command: "mkdir new-app",
    output: "(folder created)",
    description: "Make a new folder called 'new-app'",
  },
  {
    command: "python hello.py",
    output: "Hello, World!",
    description: "Run a Python script",
  },
];

export function TerminalSlide({ active }: { active: boolean }) {
  const [history, setHistory] = useState<TerminalEntry[]>([]);

  function handleCommand(entry: TerminalEntry) {
    setHistory((prev) => [...prev, entry]);
  }

  function handleClear() {
    setHistory([]);
  }

  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-sage-50 to-cream"
    >
      <Blob color="sage" className="w-[300px] h-[300px] -top-16 -right-24" />
      <Blob color="pink" className="w-[220px] h-[220px] bottom-8 -left-20" />

      <Overline variant="sage">Developer Tools</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        The <span className="text-pink-500">Terminal</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        The terminal is a text-based way to control your computer. Instead of
        clicking icons, developers type commands &mdash; like texting your
        computer instead of tapping on apps.
      </p>

      <AnalogyBox>
        <p>
          The terminal is like texting your computer. Instead of opening folders
          and clicking buttons, you type short commands and your computer
          responds with text.
        </p>
      </AnalogyBox>

      <div className="stagger-item mt-6">
        <div className="rounded-2xl overflow-hidden border border-sage-200">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#181825]">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-pink-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <span className="text-xs font-mono text-sage-400 ml-2">
              terminal
            </span>
          </div>

          {/* Terminal body */}
          <div
            className="bg-[#1e1e2e] p-4 font-mono text-sm min-h-[160px] max-h-[240px] overflow-y-auto"
            data-testid="terminal-history"
          >
            {history.length === 0 ? (
              <span className="text-sage-500">
                Click a command below to get started...
              </span>
            ) : (
              history.map((entry, index) => (
                <div key={index} className="mb-2 last:mb-0">
                  <div className="text-sage-300">
                    <span className="text-pink-400">$ </span>
                    {entry.command}
                  </div>
                  <div className="text-sage-400">{entry.output}</div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Command buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
          {presetCommands.map((entry) => (
            <button
              key={entry.command}
              onClick={() => handleCommand(entry)}
              className="group text-left rounded-xl border border-sage-200 bg-white px-3 py-2.5 hover:bg-pink-50 hover:border-pink-300 transition-colors cursor-pointer"
            >
              <div className="font-mono text-sm font-semibold text-pink-500">
                {entry.command}
              </div>
              <div className="text-[0.7rem] text-warm-gray leading-snug mt-0.5">
                {entry.description}
              </div>
            </button>
          ))}
        </div>
        <div className="mt-2">
          <Button
            onClick={handleClear}
            variant="outline"
            size="sm"
            className="font-mono text-xs border-sage-300 hover:bg-sage-100 hover:border-sage-400"
          >
            Clear
          </Button>
        </div>
      </div>
    </SlideLayout>
  );
}
