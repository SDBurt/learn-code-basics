import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  SlideLayout,
  Overline,
  Blob,
} from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";
import { SlideQA } from "@/components/shared/slide-qa";
import { InfoTip } from "@/components/shared/info-tip";

const browsers = [
  {
    name: "Chrome",
    maker: "Google",
    color: "bg-red-100 text-red-600 border-red-200",
    icon: "\uD83D\uDD34",
    detail: "The most popular browser in the world. Made by Google.",
  },
  {
    name: "Safari",
    maker: "Apple",
    color: "bg-blue-100 text-blue-600 border-blue-200",
    icon: "\uD83E\uDDED",
    detail: "Comes built-in on iPhones and Macs. Made by Apple.",
  },
  {
    name: "Firefox",
    maker: "Mozilla",
    color: "bg-orange-100 text-orange-600 border-orange-200",
    icon: "\uD83E\uDD8A",
    detail: "A browser focused on privacy. Made by a non-profit called Mozilla.",
  },
  {
    name: "Edge",
    maker: "Microsoft",
    color: "bg-sky-100 text-sky-600 border-sky-200",
    icon: "\uD83C\uDF10",
    detail: "The browser that comes with Windows. Made by Microsoft.",
  },
];

const addressBarSteps = [
  {
    label: "You type an address",
    example: "www.google.com",
    description:
      "This is called a URL. It tells the browser which website you want to visit.",
  },
  {
    label: "The browser finds the website",
    example: "Looking up the address...",
    description:
      "The browser figures out where that website lives on the internet, kind of like looking up an address in a phone book.",
  },
  {
    label: "The website sends back its content",
    example: "Receiving files...",
    description:
      "The website sends back all the pieces needed to show the page: the text, images, colors, and layout.",
  },
  {
    label: "The browser shows you the page",
    example: "Welcome to Google!",
    description:
      "The browser takes all those pieces and puts them together into the page you see on screen.",
  },
];

export function WhatIsABrowserSlide({ active }: { active: boolean }) {
  const [selectedBrowser, setSelectedBrowser] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  const [started, setStarted] = useState(false);

  const currentStep = addressBarSteps[step];
  const selected = browsers.find((b) => b.name === selectedBrowser);

  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-sage-50 to-cream"
    >
      <Blob color="sage" className="w-[300px] h-[300px] -top-16 -right-24" />
      <Blob color="pink" className="w-[220px] h-[220px] bottom-8 -left-20" />

      <Overline variant="sage">How the Web Works</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        What is a <span className="text-pink-500">Browser</span>?
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        A{" "}
        <InfoTip term="browser">
          A browser is an app on your phone, tablet, or computer that lets you
          visit websites. You&rsquo;re probably using one right now to read this.
        </InfoTip>{" "}
        is the app you use to look at websites. When you open Chrome, Safari, or
        Firefox and go to a website, that app is your browser. It&rsquo;s your
        window into the internet.
      </p>

      <AnalogyBox>
        <p>
          Think of the internet as a giant library. A browser is like the front
          door and reading room &mdash; it&rsquo;s how you get in, find what you
          want, and read it. Without a browser, all those websites would still
          exist, but you&rsquo;d have no way to see them.
        </p>
      </AnalogyBox>

      <div className="stagger-item mt-5">
        <h3 className="font-display font-medium text-lg mb-3">
          Browsers you might recognize
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {browsers.map((b) => (
            <button
              key={b.name}
              type="button"
              onClick={() =>
                setSelectedBrowser(selectedBrowser === b.name ? null : b.name)
              }
              className={`rounded-xl border p-4 text-center transition-all cursor-pointer ${
                selectedBrowser === b.name
                  ? `${b.color} border-2 shadow-md`
                  : "bg-white border-sage-200 hover:border-sage-300"
              }`}
            >
              <div className="text-2xl mb-1">{b.icon}</div>
              <div className="font-display font-semibold text-sm">{b.name}</div>
              <div className="text-xs text-warm-gray mt-0.5">by {b.maker}</div>
            </button>
          ))}
        </div>
        {selected && (
          <div className="mt-3 bg-white rounded-xl border border-sage-200 p-4 text-sm text-warm-gray">
            {selected.detail}
          </div>
        )}
      </div>

      <div className="stagger-item mt-6">
        <h3 className="font-display font-medium text-lg mb-3">
          What happens when you visit a website?
        </h3>
        <div className="bg-white rounded-2xl p-5 border border-sage-200">
          {!started ? (
            <div className="text-center py-4">
              <p className="text-sm text-warm-gray mb-4">
                Press the button to see what your browser does behind the scenes
                when you visit a website.
              </p>
              <Button
                onClick={() => setStarted(true)}
                className="bg-pink-500 hover:bg-pink-600 text-white"
              >
                Show me
              </Button>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2 mb-4">
                {addressBarSteps.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 flex-1 rounded-full transition-colors ${
                      i <= step ? "bg-pink-400" : "bg-sage-100"
                    }`}
                  />
                ))}
              </div>

              <div className="mb-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-sage-400 mb-1">
                  Step {step + 1} of {addressBarSteps.length}
                </div>
                <div className="font-display font-medium text-base text-sage-700 mb-1">
                  {currentStep.label}
                </div>
                <div className="bg-sage-50 rounded-lg border border-sage-200 px-4 py-2.5 font-mono text-sm text-sage-600 mb-2">
                  {currentStep.example}
                </div>
                <p className="text-sm text-warm-gray leading-relaxed">
                  {currentStep.description}
                </p>
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={() => setStep(Math.max(0, step - 1))}
                  disabled={step === 0}
                  variant="outline"
                  className="border-sage-300 text-sage-600"
                  size="sm"
                >
                  Back
                </Button>
                {step < addressBarSteps.length - 1 ? (
                  <Button
                    onClick={() => setStep(step + 1)}
                    className="bg-pink-500 hover:bg-pink-600 text-white"
                    size="sm"
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      setStep(0);
                      setStarted(false);
                    }}
                    variant="outline"
                    className="border-sage-300 text-sage-600"
                    size="sm"
                  >
                    Start over
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      <SlideQA
        items={[
          {
            question: "Is the internet the same thing as a browser?",
            answer:
              "No! The internet is the giant network that connects computers around the world. A browser is just the app you use to explore it. The internet would still exist without browsers, but you'd have no easy way to see websites.",
          },
          {
            question: "Why are there so many different browsers?",
            answer:
              "For the same reason there are different car brands. They all do the same basic thing (show you websites), but each one is made by a different company and has slightly different features, speed, and design.",
          },
          {
            question: "Does it matter which browser I use?",
            answer:
              "For everyday browsing, not really. They all show the same websites. Some people prefer one over another for speed, privacy, or because it works well with their other devices (e.g. Safari on Apple devices, Chrome with Google services).",
          },
        ]}
      />
    </SlideLayout>
  );
}
