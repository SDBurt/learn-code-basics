import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  SlideLayout,
  Overline,
  Blob,
} from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";
import { SlideQA } from "@/components/shared/slide-qa";
type Layer = "html" | "css" | "js";

const layers: { id: Layer; label: string; color: string; fullName: string }[] = [
  { id: "html", label: "HTML", color: "pink", fullName: "HyperText Markup Language" },
  { id: "css", label: "CSS", color: "sage", fullName: "Cascading Style Sheets" },
  { id: "js", label: "JS", color: "amber", fullName: "JavaScript" },
];

const layerDetails: Record<
  Layer,
  { analogy: string; description: string; visual: string }
> = {
  html: {
    analogy: "The skeleton / structure",
    description:
      "HTML is what puts the actual content on the page: the words, headings, images, buttons, and links. Without HTML, there would be nothing to look at.",
    visual: "skeleton",
  },
  css: {
    analogy: "The paint and decoration",
    description:
      "CSS controls how everything looks: the colors, fonts, spacing, backgrounds, and layout. It takes the plain content from HTML and makes it look nice.",
    visual: "paint",
  },
  js: {
    analogy: "The electricity / moving parts",
    description:
      "JavaScript makes the page interactive. It handles things like: what happens when you click a button, animations, loading new content without refreshing the page, and forms that check your input.",
    visual: "electricity",
  },
};

export function WhatIsAWebsiteSlide({ active }: { active: boolean }) {
  const [activeLayer, setActiveLayer] = useState<Layer | null>(null);
  const [showWithCss, setShowWithCss] = useState(true);
  const [jsEnabled, setJsEnabled] = useState(true);
  const [likeCount, setLikeCount] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const detail = activeLayer ? layerDetails[activeLayer] : null;

  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-cream to-sage-50"
    >
      <Blob color="pink" className="w-[280px] h-[280px] -top-12 -right-20" />
      <Blob color="sage" className="w-[200px] h-[200px] bottom-10 -left-16" />

      <Overline variant="sage">How the Web Works</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        What is a <span className="text-pink-500">Website</span> Made Of?
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        Every website you visit is built from three building blocks. You
        don&rsquo;t need to know how to write any of them &mdash; just knowing
        what they are helps you understand how the web works.
      </p>

      <AnalogyBox>
        <p>
          Think of a website like a house.{" "}
          <strong>HTML</strong> is the walls, floors, and rooms &mdash; the
          structure. <strong>CSS</strong> is the paint, furniture, and
          decoration &mdash; what makes it look good.{" "}
          <strong>JavaScript</strong> is the electricity, plumbing, and
          appliances &mdash; what makes things actually work when you interact
          with them.
        </p>
      </AnalogyBox>

      <div className="stagger-item mt-5">
        <h3 className="font-display font-medium text-lg mb-3">
          The three building blocks
        </h3>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {layers.map((layer) => (
            <button
              key={layer.id}
              type="button"
              onClick={() =>
                setActiveLayer(activeLayer === layer.id ? null : layer.id)
              }
              className={`rounded-xl border p-4 text-center transition-all cursor-pointer ${
                activeLayer === layer.id
                  ? layer.color === "pink"
                    ? "bg-pink-100 text-pink-600 border-pink-300 border-2 shadow-md"
                    : layer.color === "sage"
                      ? "bg-sage-100 text-sage-600 border-sage-300 border-2 shadow-md"
                      : "bg-amber-100 text-amber-600 border-amber-300 border-2 shadow-md"
                  : "bg-white border-sage-200 hover:border-sage-300"
              }`}
            >
              <div className="font-display font-bold text-lg">{layer.label}</div>
              <div className="text-xs text-warm-gray mt-0.5">{layer.fullName}</div>
            </button>
          ))}
        </div>

        {detail && (
          <div className="bg-white rounded-xl border border-sage-200 p-4 mb-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-sage-400 mb-1">
              {detail.analogy}
            </div>
            <p className="text-sm text-warm-gray leading-relaxed">
              {detail.description}
            </p>
          </div>
        )}
      </div>

      <div className="stagger-item mt-5">
        <h3 className="font-display font-medium text-lg mb-3">
          See the difference CSS makes
        </h3>
        <div className="bg-white rounded-2xl p-5 border border-sage-200">
          <div className="flex gap-2 mb-4">
            <Button
              onClick={() => setShowWithCss(false)}
              variant={!showWithCss ? "default" : "outline"}
              className={
                !showWithCss
                  ? "bg-pink-500 hover:bg-pink-600 text-white"
                  : "border-sage-300 text-sage-600 hover:bg-sage-50"
              }
              size="sm"
            >
              Without CSS
            </Button>
            <Button
              onClick={() => setShowWithCss(true)}
              variant={showWithCss ? "default" : "outline"}
              className={
                showWithCss
                  ? "bg-pink-500 hover:bg-pink-600 text-white"
                  : "border-sage-300 text-sage-600 hover:bg-sage-50"
              }
              size="sm"
            >
              With CSS
            </Button>
          </div>

          <div
            className={`rounded-lg border p-4 transition-all duration-300 ${
              showWithCss
                ? "bg-gradient-to-r from-pink-50 to-sage-50 border-pink-200"
                : "bg-white border-gray-300"
            }`}
          >
            <h4
              className={`mb-2 transition-all duration-300 ${
                showWithCss
                  ? "font-display font-bold text-xl text-pink-600"
                  : "font-serif text-base text-black underline"
              }`}
            >
              Welcome to My Page
            </h4>
            <p
              className={`mb-3 transition-all duration-300 ${
                showWithCss
                  ? "text-sm text-warm-gray leading-relaxed"
                  : "text-sm text-black font-serif"
              }`}
            >
              This is a paragraph of text on a website.
            </p>
            <span
              className={`inline-block transition-all duration-300 ${
                showWithCss
                  ? "bg-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium"
                  : "text-blue-700 underline text-sm font-serif cursor-pointer"
              }`}
            >
              {showWithCss ? "Click me" : "Click me"}
            </span>
            <p
              className={`mt-3 text-xs italic transition-all duration-300 ${
                showWithCss ? "text-sage-400" : "text-black font-serif"
              }`}
            >
              {showWithCss
                ? "This page has CSS styling applied."
                : "Same content, no styling. Just plain structure."}
            </p>
          </div>
        </div>
      </div>

      <div className="stagger-item mt-5">
        <h3 className="font-display font-medium text-lg mb-3">
          See the difference JavaScript makes
        </h3>
        <div className="bg-white rounded-2xl p-5 border border-sage-200">
          <div className="flex gap-2 mb-4">
            <Button
              onClick={() => {
                setJsEnabled(false);
                setLikeCount(0);
                setShowMenu(false);
              }}
              variant={!jsEnabled ? "default" : "outline"}
              className={
                !jsEnabled
                  ? "bg-amber-500 hover:bg-amber-600 text-white"
                  : "border-sage-300 text-sage-600 hover:bg-sage-50"
              }
              size="sm"
            >
              Without JavaScript
            </Button>
            <Button
              onClick={() => setJsEnabled(true)}
              variant={jsEnabled ? "default" : "outline"}
              className={
                jsEnabled
                  ? "bg-amber-500 hover:bg-amber-600 text-white"
                  : "border-sage-300 text-sage-600 hover:bg-sage-50"
              }
              size="sm"
            >
              With JavaScript
            </Button>
          </div>

          <div className="rounded-lg border border-sage-200 bg-gradient-to-r from-pink-50 to-sage-50 p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-display font-bold text-lg text-pink-600">
                My Blog Post
              </h4>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => jsEnabled && setShowMenu(!showMenu)}
                  className={`px-3 py-1 rounded-md text-sm border transition-all ${
                    jsEnabled
                      ? "border-sage-300 text-sage-600 hover:bg-sage-100 cursor-pointer"
                      : "border-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Menu
                </button>
                {showMenu && jsEnabled && (
                  <div className="absolute right-0 top-full mt-1 bg-white border border-sage-200 rounded-lg shadow-lg py-1 z-10 min-w-[120px]">
                    <div className="px-3 py-1.5 text-sm text-sage-600 hover:bg-sage-50">Share</div>
                    <div className="px-3 py-1.5 text-sm text-sage-600 hover:bg-sage-50">Save</div>
                    <div className="px-3 py-1.5 text-sm text-sage-600 hover:bg-sage-50">Report</div>
                  </div>
                )}
              </div>
            </div>

            <p className="text-sm text-warm-gray leading-relaxed mb-3">
              This is a blog post about learning to code. It has buttons you can
              interact with.
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => jsEnabled && setLikeCount(likeCount + 1)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  jsEnabled
                    ? "bg-pink-500 text-white hover:bg-pink-600 cursor-pointer"
                    : "bg-pink-500 text-white cursor-not-allowed"
                }`}
              >
                Like{likeCount > 0 && jsEnabled ? ` (${likeCount})` : ""}
              </button>
              <span
                className={`text-xs transition-all ${
                  jsEnabled ? "text-sage-500" : "text-gray-400"
                }`}
              >
                {jsEnabled
                  ? likeCount > 0
                    ? "The button works! Click it again."
                    : "Try clicking the buttons."
                  : "Nothing happens when you click. The page just sits there."}
              </span>
            </div>
          </div>

          <p className="mt-3 text-xs text-warm-gray italic">
            {jsEnabled
              ? "With JavaScript: buttons respond to clicks, menus open, and the page updates without reloading."
              : "Without JavaScript: the page looks the same, but nothing responds. Buttons, menus, and counters are all frozen."}
          </p>
        </div>
      </div>

      <SlideQA
        items={[
          {
            question: "Do I need to learn HTML, CSS, and JavaScript?",
            answer:
              "Not at all! Most people who use websites every day have no idea how they're built, and that's perfectly fine. Knowing what these three things are just helps you understand what developers are talking about.",
          },
          {
            question: "Are all websites made the same way?",
            answer:
              "The basics are the same: every website uses HTML for content, CSS for appearance, and JavaScript for interactivity. But developers use many different tools and approaches to organize and write them, which is why there are so many different-looking websites.",
          },
          {
            question: "What about apps on my phone?",
            answer:
              "Phone apps can be built differently from websites, but many apps you use (like Instagram or Twitter) actually use similar web technologies inside the app. We'll cover the difference between websites and apps in a later section.",
          },
        ]}
      />
    </SlideLayout>
  );
}
