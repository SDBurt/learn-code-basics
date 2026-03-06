import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const methods = [
  {
    name: "Username & Password",
    desc: "You type in your email and a secret password that only you know. The website checks if they match what it has saved.",
    icon: "\u{1F511}",
  },
  {
    name: "Two-Factor Authentication (2FA)",
    desc: "After entering your password, you also type a short code sent to your phone. It is like needing two keys to open a door -- even if someone steals your password, they still cannot get in without your phone.",
    icon: "\u{1F4F1}",
  },
  {
    name: "Social Login (OAuth)",
    desc: 'When you click "Sign in with Google," you let Google confirm your identity instead of creating yet another password. OAuth is just the behind-the-scenes system that makes this handoff work safely.',
    icon: "\u{1F310}",
  },
  {
    name: "Tokens & Sessions",
    desc: "After you log in, the website gives your browser a small piece of data called a token (think of it as a temporary wristband). A session is the period of time that wristband is valid. This way you stay logged in without re-entering your password on every page.",
    icon: "\u{1F3AB}",
  },
];

type SimStep = {
  label: string;
  status: "pending" | "active" | "done";
};

const FAKE_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkw...xyz";

function LoginSimulation() {
  const [phase, setPhase] = useState<"idle" | "running" | "complete">("idle");
  const [currentStep, setCurrentStep] = useState(-1);

  const steps: SimStep[] = [
    {
      label: "Sending your email and password to the server...",
      status:
        currentStep > 0 ? "done" : currentStep === 0 ? "active" : "pending",
    },
    {
      label: "Server looking up your account to see if the password matches...",
      status:
        currentStep > 1 ? "done" : currentStep === 1 ? "active" : "pending",
    },
    {
      label: "Password matches! Creating a session (your login period)...",
      status:
        currentStep > 2 ? "done" : currentStep === 2 ? "active" : "pending",
    },
    {
      label: "Token received (your temporary wristband)! You're logged in.",
      status:
        currentStep > 3 ? "done" : currentStep === 3 ? "active" : "pending",
    },
  ];

  const runSimulation = useCallback(() => {
    setPhase("running");
    setCurrentStep(0);
  }, []);

  useEffect(() => {
    if (phase !== "running" || currentStep < 0) return;

    if (currentStep >= 4) {
      setPhase("complete");
      return;
    }

    const delay = currentStep === 0 ? 400 : 600;
    const timer = setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [phase, currentStep]);

  const reset = () => {
    setPhase("idle");
    setCurrentStep(-1);
  };

  return (
    <div>
      <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
        What happens when you log in?
      </h3>

      {/* Mini login form */}
      <div className="bg-white rounded-xl border border-sage-200 p-4 mb-3 space-y-3">
        <div className="space-y-2">
          <label className="text-xs font-medium text-sage-600">Email</label>
          <Input
            type="email"
            defaultValue="you@example.com"
            disabled={phase !== "idle"}
            className="text-sm h-8"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-medium text-sage-600">Password</label>
          <Input
            type="password"
            defaultValue="supersecret"
            disabled={phase !== "idle"}
            className="text-sm h-8"
          />
        </div>

        {phase === "idle" && (
          <Button
            onClick={runSimulation}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white text-sm h-9"
          >
            Log In
          </Button>
        )}

        {phase === "complete" && (
          <Button
            onClick={reset}
            variant="outline"
            className="w-full border-sage-300 text-sage-600 text-sm h-9"
          >
            Log Out &amp; Try Again
          </Button>
        )}
      </div>

      {/* Step-by-step animation */}
      {phase !== "idle" && (
        <div className="space-y-2">
          {steps.map((step, i) => {
            if (step.status === "pending") return null;

            return (
              <div
                key={i}
                className={`flex gap-3 items-center rounded-xl p-3 border transition-all duration-300 ${
                  step.status === "active"
                    ? "bg-pink-50 border-pink-200"
                    : "bg-white border-sage-200"
                }`}
              >
                {/* Step indicator */}
                <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center">
                  {step.status === "active" ? (
                    <span className="block w-4 h-4 rounded-full border-2 border-pink-400 border-t-transparent animate-spin" />
                  ) : (
                    <span className="text-green-500 font-bold text-sm">
                      &#10003;
                    </span>
                  )}
                </span>

                <p
                  className={`text-sm ${
                    step.status === "active"
                      ? "text-pink-600 font-medium"
                      : "text-warm-gray"
                  }`}
                >
                  {step.label}
                </p>
              </div>
            );
          })}
        </div>
      )}

      {/* Fake JWT token display */}
      {phase === "complete" && (
        <div className="mt-3 bg-sage-50 rounded-xl border border-sage-200 p-3">
          <p className="text-xs font-medium text-sage-600 mb-1">
            Your session token (a JWT -- a long coded string the server uses to remember you):
          </p>
          <code className="text-xs text-pink-600 break-all leading-relaxed">
            {FAKE_TOKEN}
          </code>
        </div>
      )}
    </div>
  );
}

export function AuthSlide({ active }: { active: boolean }) {
  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-pink-50 to-cream"
    >
      <Blob color="pink" className="w-[350px] h-[350px] -top-20 -right-24" />
      <Blob color="sage" className="w-[250px] h-[250px] bottom-10 -left-16" />

      <Overline variant="pink">How the Web Works</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        <span className="text-sage-500">Authentication</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        Authentication is how an app knows <strong>who you are</strong>. Every
        time you log in, there&rsquo;s a process happening behind the scenes to
        verify your identity.
      </p>

      <div className="stagger-item">
        <AnalogyBox>
          <p>
            Authentication is like showing your ID at a club. The bouncer checks
            it, and if it&rsquo;s valid, you get a <strong>wristband</strong>{" "}
            (called a &ldquo;session token&rdquo; in tech -- a small piece of
            data that proves you already checked in) so you don&rsquo;t have to
            show your ID again every time you go to the bar.
          </p>
        </AnalogyBox>
      </div>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            Common Methods
          </h3>
          <div className="space-y-2.5">
            {methods.map((m) => (
              <Card key={m.name} className="border-sage-200">
                <CardContent className="p-4 flex gap-3 items-start">
                  <span className="text-2xl shrink-0">{m.icon}</span>
                  <div>
                    <p className="font-semibold text-sage-600 text-sm">
                      {m.name}
                    </p>
                    <p className="text-xs text-warm-gray">{m.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <LoginSimulation />
      </div>
    </SlideLayout>
  );
}
