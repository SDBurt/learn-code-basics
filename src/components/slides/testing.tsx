import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";

const testTypes = [
  {
    name: "Unit Tests",
    desc: "Test one small piece of code in isolation. Like checking that a single light switch works.",
    color: "border-l-sage-400",
  },
  {
    name: "Integration Tests",
    desc: "Test that multiple pieces work together. Like checking that the switch actually turns on the right light.",
    color: "border-l-pink-400",
  },
  {
    name: "End-to-End Tests",
    desc: 'Simulate a real user clicking through the app. Like walking through a house and testing everything.',
    color: "border-l-amber-400",
  },
];

interface TestResult {
  name: string;
  passed: boolean;
}

const mockTests: TestResult[] = [
  { name: "test_add_two_numbers", passed: true },
  { name: "test_add_negative_numbers", passed: true },
  { name: "test_add_zero", passed: true },
  { name: "test_subtract_result", passed: false },
];

export function TestingSlide({ active }: { active: boolean }) {
  const [ran, setRan] = useState(false);
  const [visibleTests, setVisibleTests] = useState<TestResult[]>([]);

  const runTests = () => {
    setRan(false);
    setVisibleTests([]);

    mockTests.forEach((test, i) => {
      setTimeout(() => {
        setVisibleTests((prev) => [...prev, test]);
        if (i === mockTests.length - 1) setRan(true);
      }, (i + 1) * 400);
    });
  };

  const passed = visibleTests.filter((t) => t.passed).length;
  const failed = visibleTests.filter((t) => !t.passed).length;

  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-cream to-sage-50"
    >
      <Blob color="sage" className="w-[350px] h-[350px] -top-20 -right-24" />
      <Blob color="pink" className="w-[250px] h-[250px] bottom-10 -left-16" />

      <Overline variant="sage">Developer Tools</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        <span className="text-pink-500">Testing</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        Tests are code that checks if your other code works correctly.
        Developers write tests to catch bugs <strong>before</strong> users do.
      </p>

      <div className="stagger-item">
        <AnalogyBox>
          <p>
            Testing is like proofreading an essay. You could just hand it in and
            hope for the best, or you could read through it carefully first.
            Automated tests are like having a spell-checker that runs
            every time you make a change.
          </p>
        </AnalogyBox>
      </div>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            Types of Tests
          </h3>
          <div className="space-y-2.5">
            {testTypes.map((t) => (
              <Card
                key={t.name}
                className={`border-l-[3px] ${t.color}`}
              >
                <CardContent className="p-4">
                  <p className="font-semibold text-sage-600 text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-warm-gray">{t.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            Try running tests
          </h3>
          <div className="bg-gray-900 rounded-2xl p-5 min-h-[200px]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[0.72rem] font-semibold uppercase tracking-wider text-sage-400">
                Test Runner
              </span>
              <Button
                size="sm"
                onClick={runTests}
                className="bg-sage-500 hover:bg-sage-600 text-white text-xs"
              >
                Run Tests
              </Button>
            </div>
            <div className="font-mono text-sm space-y-1">
              {visibleTests.map((t) => (
                <div key={t.name} className="output-enter">
                  <span className={t.passed ? "text-green-400" : "text-red-400"}>
                    {t.passed ? "PASS" : "FAIL"}
                  </span>{" "}
                  <span className="text-gray-400">{t.name}</span>
                </div>
              ))}
              {ran && (
                <div className="output-enter mt-3 pt-3 border-t border-gray-700">
                  <span className="text-gray-300">
                    Results: <span className="text-green-400">{passed} passed</span>
                    {failed > 0 && (
                      <>, <span className="text-red-400">{failed} failed</span></>
                    )}
                  </span>
                </div>
              )}
              {visibleTests.length === 0 && (
                <span className="text-gray-500 italic">
                  Click "Run Tests" to see results...
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
