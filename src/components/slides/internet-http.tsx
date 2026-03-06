import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  SlideLayout,
  Overline,
  Blob,
} from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";

type RequestPhase = "idle" | "sending" | "responding" | "done";

function getStatusForUrl(url: string): { code: number; text: string } {
  if (url.toLowerCase().includes("missing")) {
    return { code: 404, text: "404 Not Found" };
  }
  return { code: 200, text: "200 OK" };
}

export function InternetHttpSlide({ active }: { active: boolean }) {
  const [url, setUrl] = useState("example.com");
  const [phase, setPhase] = useState<RequestPhase>("idle");
  const [statusResult, setStatusResult] = useState<{
    code: number;
    text: string;
  } | null>(null);

  function handleGo() {
    if (phase !== "idle" && phase !== "done") return;

    setStatusResult(null);
    setPhase("sending");

    setTimeout(() => {
      setPhase("responding");

      setTimeout(() => {
        setPhase("done");
        setStatusResult(getStatusForUrl(url));
      }, 800);
    }, 800);
  }

  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-sage-50 to-cream"
    >
      <Blob color="sage" className="w-[300px] h-[300px] -top-16 -right-24" />
      <Blob color="pink" className="w-[220px] h-[220px] bottom-8 -left-20" />

      <Overline variant="sage">How the Web Works</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        The Internet &amp; <span className="text-pink-500">HTTP</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        When you visit a website, your browser sends a request to a server,
        which sends back a response. This back-and-forth is the foundation of
        everything on the web.
      </p>

      <AnalogyBox>
        <p>
          Think of it like ordering at a restaurant. You (the browser) tell the
          waiter (HTTP) what you want. The waiter takes your order to the kitchen
          (the server), and brings back your food (the response).
        </p>
      </AnalogyBox>

      <div className="stagger-item mt-6">
        <div className="bg-white rounded-2xl p-6 border border-sage-200">
          <h3 className="font-display font-medium text-lg mb-4 text-sage-600">
            See it in action
          </h3>

          <div className="flex gap-3 mb-6">
            <Input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter a URL"
              className="flex-1 border-sage-300"
              aria-label="URL"
            />
            <Button
              onClick={handleGo}
              disabled={phase === "sending" || phase === "responding"}
              className="bg-pink-500 hover:bg-pink-600 text-white"
            >
              Go
            </Button>
          </div>

          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <div className="shrink-0 w-[70px] sm:w-auto sm:flex-1 rounded-xl bg-sage-50 border border-sage-200 p-3 sm:p-4 text-center">
              <div className="text-xl sm:text-2xl mb-1" aria-hidden="true">
                {"\uD83D\uDCBB"}
              </div>
              <div className="font-mono text-xs sm:text-sm font-semibold text-sage-600">
                Browser
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center gap-1 sm:gap-2 relative min-h-[50px] sm:min-h-[60px] min-w-0">
              <div
                className={`flex items-center transition-all duration-500 ${
                  phase === "sending" || phase === "responding" || phase === "done"
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              >
                <span className="text-[0.65rem] sm:text-xs font-mono text-sage-500 mr-1">
                  Request
                </span>
                <span className="text-sage-400" aria-hidden="true">
                  {"-->"}
                </span>
              </div>

              <div
                className={`flex items-center transition-all duration-500 ${
                  phase === "responding" || phase === "done"
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              >
                <span className="text-pink-400" aria-hidden="true">
                  {"<--"}
                </span>
                <span className="text-[0.65rem] sm:text-xs font-mono text-pink-500 ml-1">
                  Response
                </span>
              </div>
            </div>

            <div className="shrink-0 w-[70px] sm:w-auto sm:flex-1 rounded-xl bg-sage-50 border border-sage-200 p-3 sm:p-4 text-center">
              <div className="text-xl sm:text-2xl mb-1" aria-hidden="true">
                {"\uD83D\uDDC4\uFE0F"}
              </div>
              <div className="font-mono text-xs sm:text-sm font-semibold text-sage-600">
                Server
              </div>
            </div>
          </div>

          {statusResult && (
            <div className="mt-4 text-center">
              <Badge
                className={
                  statusResult.code === 200
                    ? "bg-sage-100 text-sage-600 border border-sage-300"
                    : "bg-pink-100 text-pink-600 border border-pink-300"
                }
              >
                {statusResult.text}
              </Badge>
            </div>
          )}
        </div>
      </div>
    </SlideLayout>
  );
}
