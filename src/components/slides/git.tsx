import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  SlideLayout,
  Overline,
  Blob,
} from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";

interface CommitDiff {
  added: string[];
  removed: string[];
}

interface Commit {
  label: string;
  badge?: string;
  diff: CommitDiff;
}

const commits: Commit[] = [
  {
    label: "Initial setup",
    badge: "v1",
    diff: {
      added: ["+ project created", "+ README.md added"],
      removed: [],
    },
  },
  {
    label: "Add login page",
    diff: {
      added: ["+ login form component", "+ password validation"],
      removed: ["- placeholder page"],
    },
  },
  {
    label: "Fix header bug",
    diff: {
      added: ["+ header height: 60px"],
      removed: ["- header height: 600px"],
    },
  },
  {
    label: "Add dark mode",
    diff: {
      added: ["+ dark theme colors", "+ theme toggle button"],
      removed: [],
    },
  },
  {
    label: "Go live for real users",
    diff: {
      added: ["+ live-ready build config", "+ deployment script"],
      removed: [],
    },
  },
];

export function GitSlide({ active }: { active: boolean }) {
  const [selectedCommit, setSelectedCommit] = useState<number | null>(null);

  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-cream to-sage-50"
    >
      <Blob color="sage" className="w-[300px] h-[300px] -top-16 -right-24" />
      <Blob color="pink" className="w-[220px] h-[220px] bottom-8 -left-20" />

      <Overline variant="sage">Developer Tools</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        <span className="text-sage-500">
          Git &amp; <strong>Version Control</strong>
        </span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        Git saves snapshots of your code called &ldquo;commits&rdquo;&mdash;think
        of each commit as pressing &ldquo;Save&rdquo; with a short note about
        what you changed. It lets developers undo mistakes, see exactly what
        changed between any two saves, and work on the same project without
        overwriting each other&rsquo;s work.
      </p>

      <AnalogyBox>
        <p>
          Git is like save points in a video game. Every time you reach a
          milestone, you save. If something goes wrong, you can load a previous
          save and try again.
        </p>
      </AnalogyBox>

      <div className="stagger-item mt-6">
        <div className="bg-white rounded-2xl p-6 border border-sage-200">
          <h3 className="font-display font-medium text-lg mb-1 text-sage-600">
            Commit Timeline
          </h3>
          <p className="text-xs text-warm-gray mb-4">
            Each circle is one save point. Click any circle to see what changed
            in that save.
          </p>

          {/* Timeline */}
          <div className="relative flex items-center justify-between mb-6">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-sage-200 -translate-y-1/2" />

            {commits.map((commit, index) => (
              <button
                key={index}
                onClick={() =>
                  setSelectedCommit(selectedCommit === index ? null : index)
                }
                data-testid={`commit-node-${index}`}
                className={[
                  "relative z-10 flex flex-col items-center gap-2 cursor-pointer group",
                  "transition-all duration-200",
                ].join(" ")}
              >
                <div
                  className={[
                    "w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors duration-200",
                    selectedCommit === index
                      ? "bg-sage-500 border-sage-500 text-white"
                      : "bg-white border-sage-300 text-sage-500 group-hover:border-sage-400 group-hover:bg-sage-50",
                  ].join(" ")}
                >
                  <span className="text-xs font-bold">{index + 1}</span>
                </div>
                <span className="text-[0.65rem] font-medium text-sage-500 max-w-[80px] text-center leading-tight">
                  {commit.label}
                </span>
                {commit.badge && (
                  <Badge className="bg-sage-100 text-sage-600 border border-sage-300 text-[0.6rem]">
                    {commit.badge}
                  </Badge>
                )}
              </button>
            ))}
          </div>

          {/* Diff view */}
          {selectedCommit !== null && (
            <Card
              className="border-sage-200"
              data-testid="diff-view"
            >
              <CardContent className="p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-sage-400 mb-1">
                  What changed in &ldquo;{commits[selectedCommit].label}&rdquo;
                </p>
                <p className="text-[0.65rem] text-warm-gray mb-3">
                  Green lines were added; pink lines were removed.
                </p>
                <div className="font-mono text-sm space-y-1">
                  {commits[selectedCommit].diff.removed.map((line, i) => (
                    <div
                      key={`removed-${i}`}
                      className="bg-pink-50 text-pink-600 px-3 py-1 rounded border border-pink-200"
                    >
                      {line}
                    </div>
                  ))}
                  {commits[selectedCommit].diff.added.map((line, i) => (
                    <div
                      key={`added-${i}`}
                      className="bg-sage-50 text-sage-600 px-3 py-1 rounded border border-sage-200"
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </SlideLayout>
  );
}
