import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";
import { SlideQA } from "@/components/shared/slide-qa";

function simulateSteps(
  steps: string[],
  setSteps: React.Dispatch<React.SetStateAction<string[]>>,
  setTime: React.Dispatch<React.SetStateAction<string>>,
  time: string,
  timeouts: React.MutableRefObject<ReturnType<typeof setTimeout>[]>
) {
  setSteps([]);
  setTime("");

  steps.forEach((step, i) => {
    const timeout = setTimeout(() => {
      setSteps((prev) => [...prev, step]);

      if (i === steps.length - 1) {
        setTime(time);
      }
    }, (i + 1) * 300);
    timeouts.current.push(timeout);
  });
}

export function CachingSlide({ active }: { active: boolean }) {
  const [leftSteps, setLeftSteps] = useState<string[]>([]);
  const [rightSteps, setRightSteps] = useState<string[]>([]);
  const [rightCached, setRightCached] = useState(false);
  const [leftTime, setLeftTime] = useState("");
  const [rightTime, setRightTime] = useState("");
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  function handleLeftFetch() {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    simulateSteps(
      [
        "1. Request sent to server",
        "2. Server queries database",
        "3. Data returned",
      ],
      setLeftSteps,
      setLeftTime,
      "~800ms",
      timeoutsRef
    );
  }

  function handleRightFetch() {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    if (rightCached) {
      simulateSteps(
        ["1. Served from cache!"],
        setRightSteps,
        setRightTime,
        "~50ms",
        timeoutsRef
      );
    } else {
      simulateSteps(
        [
          "1. Request sent to server",
          "2. Server queries database",
          "3. Data returned",
        ],
        setRightSteps,
        setRightTime,
        "~800ms",
        timeoutsRef
      );
      setRightCached(true);
    }
  }

  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-sage-50 to-cream"
    >
      <Blob color="sage" className="w-[350px] h-[350px] -top-20 -right-24" />
      <Blob color="pink" className="w-[250px] h-[250px] bottom-10 -left-16" />

      <Overline variant="pink">Advanced Concepts</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        <span className="text-pink-500">Caching</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        Caching stores copies of data so it can be served faster next time.
        Instead of fetching the same thing repeatedly, the system remembers the
        answer.
      </p>

      <div className="stagger-item">
        <AnalogyBox>
          <p>
            Caching is like keeping a <strong>sticky note on your desk</strong>{" "}
            instead of walking to the filing cabinet every time. The first lookup
            takes effort, but after that it&rsquo;s instant.
          </p>
        </AnalogyBox>
      </div>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <Card className="border-sage-200">
          <CardContent>
            <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
              Without Cache
            </h3>

            <div className="text-sm text-warm-gray mb-3 flex items-center gap-2">
              <span>User</span>
              <span className="text-sage-300">&rarr;</span>
              <span>Server</span>
              <span className="text-sage-300">&rarr;</span>
              <span>Database</span>
            </div>

            <Button
              size="sm"
              onClick={handleLeftFetch}
              className="bg-pink-500 hover:bg-pink-600 text-white mb-4"
            >
              Fetch Data
            </Button>

            <div className="space-y-2 min-h-[100px]">
              {leftSteps.map((step) => (
                <div
                  key={step}
                  className="text-sm text-sage-600 bg-sage-50 rounded-lg px-3 py-1.5"
                >
                  {step}
                </div>
              ))}
              {leftTime && (
                <Badge className="bg-pink-100 text-pink-600 mt-2">
                  {leftTime}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-sage-200">
          <CardContent>
            <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
              With Cache
            </h3>

            <div className="text-sm text-warm-gray mb-3 flex items-center gap-2">
              <span>User</span>
              <span className="text-sage-300">&rarr;</span>
              <span>Server</span>
              <span className="text-sage-300">&rarr;</span>
              <span>Database</span>
            </div>

            <Button
              size="sm"
              onClick={handleRightFetch}
              className="bg-pink-500 hover:bg-pink-600 text-white mb-4"
            >
              Fetch Data
            </Button>

            <div className="space-y-2 min-h-[100px]">
              {rightSteps.map((step) => (
                <div
                  key={step}
                  className={`text-sm rounded-lg px-3 py-1.5 ${
                    step.includes("cache")
                      ? "text-sage-600 bg-sage-100 font-medium"
                      : "text-sage-600 bg-sage-50"
                  }`}
                >
                  {step}
                </div>
              ))}
              {rightTime && (
                <Badge
                  className={
                    rightTime === "~50ms"
                      ? "bg-sage-100 text-sage-600 mt-2"
                      : "bg-pink-100 text-pink-600 mt-2"
                  }
                >
                  {rightTime}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <SlideQA
        items={[
          {
            question: "Where does the cache live?",
            answer: "It can be in several places. Your browser has a cache (that's why websites load faster the second time). Servers have caches too. The idea is always the same -- keep a copy of something close by so you don't have to go far to get it."
          },
          {
            question: "What happens when cached data is wrong or outdated?",
            answer: "Caches have expiration times -- after a set period, the system fetches fresh data and replaces the old copy. It's like replacing the sticky note when the answer changes. Getting this timing right is one of the trickier parts of building software."
          }
        ]}
      />
    </SlideLayout>
  );
}
