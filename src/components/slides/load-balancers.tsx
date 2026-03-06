import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  SlideLayout,
  Overline,
  Blob,
} from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";

const serverNames = ["Server A", "Server B", "Server C"];
const serverColors = ["bg-pink-400", "bg-sage-400", "bg-pink-300"];

export function LoadBalancersSlide({ active }: { active: boolean }) {
  const [serverLoads, setServerLoads] = useState<number[]>([0, 0, 0]);
  const [lastAssigned, setLastAssigned] = useState<number | null>(null);

  function handleSendRequest() {
    const minLoad = Math.min(...serverLoads);
    const targetIndex = serverLoads.indexOf(minLoad);

    setServerLoads((prev) =>
      prev.map((load, i) =>
        i === targetIndex ? Math.min(load + 20, 100) : load
      )
    );
    setLastAssigned(targetIndex);
  }

  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-pink-50 to-cream"
    >
      <Blob color="pink" className="w-[320px] h-[320px] -top-16 -right-24" />
      <Blob color="sage" className="w-[240px] h-[240px] bottom-8 -left-20" />

      <Overline variant="pink">Advanced Concepts</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        <span className="text-sage-500">
          Load <strong>Balancers</strong>
        </span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        When millions of people visit a website at once, one server can&rsquo;t
        handle it all. A load balancer distributes incoming traffic across
        multiple servers so no single one gets overwhelmed.
      </p>

      <div className="stagger-item">
        <AnalogyBox>
          <p>
            A load balancer is like a{" "}
            <strong>host at a busy restaurant</strong>. Instead of sending
            everyone to the same waiter, they spread guests across all the
            available tables and staff.
          </p>
        </AnalogyBox>
      </div>

      <div className="stagger-item mt-6">
        <Card className="border border-sage-200 bg-white">
          <CardContent className="p-5">
            {/* Users */}
            <div className="mb-4">
              <div className="text-[0.72rem] font-semibold uppercase tracking-wider text-sage-400 mb-2">
                Users
              </div>
              <div className="flex justify-center gap-6">
                {["User 1", "User 2", "User 3"].map((user, i) => (
                  <div key={user} className="flex flex-col items-center gap-1">
                    <div
                      className={[
                        "w-8 h-8 rounded-full",
                        i === 0
                          ? "bg-pink-300"
                          : i === 1
                            ? "bg-sage-300"
                            : "bg-pink-200",
                      ].join(" ")}
                    />
                    <span className="text-xs text-sage-500">{user}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center my-2 text-sage-300 text-xl">
              &darr;
            </div>

            {/* Load Balancer */}
            <div className="flex justify-center mb-2">
              <div className="bg-pink-100 border border-pink-300 rounded-xl px-6 py-3 text-center">
                <div className="text-sm font-semibold text-pink-600">
                  Load Balancer
                </div>
                <div className="text-xs text-pink-400 mt-0.5">
                  Routes to least-loaded server
                </div>
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center my-2 text-sage-300 text-xl">
              &darr;
            </div>

            {/* Servers */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {serverNames.map((name, i) => (
                <div
                  key={name}
                  className={[
                    "rounded-xl border p-3 transition-all duration-300",
                    lastAssigned === i
                      ? "border-pink-400 bg-pink-50 ring-2 ring-pink-200"
                      : "border-sage-200 bg-white",
                  ].join(" ")}
                >
                  <div className="text-sm font-medium text-sage-600 mb-2">
                    {name}
                  </div>
                  <div className="w-full bg-sage-100 rounded-full h-3 overflow-hidden">
                    <div
                      className={[
                        "h-full rounded-full transition-all duration-500",
                        serverColors[i],
                      ].join(" ")}
                      style={{ width: `${serverLoads[i]}%` }}
                    />
                  </div>
                  <div className="text-xs text-sage-400 mt-1">
                    {serverLoads[i]}% load
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Button
                onClick={handleSendRequest}
                className="bg-pink-500 hover:bg-pink-600 text-white"
              >
                Send Request
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </SlideLayout>
  );
}
