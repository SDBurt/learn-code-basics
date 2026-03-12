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

interface ContactCard {
  label: string;
  fields: { key: string; value: string }[];
}

const examples: ContactCard[] = [
  {
    label: "A contact card",
    fields: [
      { key: "name", value: '"Sarah"' },
      { key: "phone", value: '"555-1234"' },
      { key: "email", value: '"sarah@email.com"' },
    ],
  },
  {
    label: "A recipe",
    fields: [
      { key: "name", value: '"Pancakes"' },
      { key: "servings", value: "4" },
      { key: "minutes", value: "15" },
    ],
  },
  {
    label: "A weather report",
    fields: [
      { key: "city", value: '"Vancouver"' },
      { key: "temperature", value: "18" },
      { key: "condition", value: '"Sunny"' },
    ],
  },
];

export function WhatIsJsonSlide({ active }: { active: boolean }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const current = examples[selectedIndex];

  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-sage-50 to-pink-50"
    >
      <Blob color="pink" className="w-[280px] h-[280px] -top-12 -right-20" />
      <Blob color="sage" className="w-[200px] h-[200px] bottom-10 -left-16" />

      <Overline variant="sage">How the Web Works</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        What is <span className="text-pink-500">JSON</span>?
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        <InfoTip term="JSON">
          Stands for JavaScript Object Notation. Don&rsquo;t worry about the
          name &mdash; it&rsquo;s just a way of writing information down so that
          computers can read it easily.
        </InfoTip>{" "}
        is a simple way to organize information so computers can understand it.
        When websites, apps, and services need to share data with each other,
        they often use JSON because it&rsquo;s clean, simple, and easy for both
        humans and computers to read.
      </p>

      <AnalogyBox>
        <p>
          Imagine you&rsquo;re filling out a form at the doctor&rsquo;s office.
          Each line has a label (&ldquo;Name&rdquo;, &ldquo;Date of
          birth&rdquo;, &ldquo;Phone number&rdquo;) and you write your answer
          next to it. JSON works the same way &mdash; it&rsquo;s just labels and
          values, organized so a computer can read them.
        </p>
      </AnalogyBox>

      <div className="stagger-item mt-5">
        <h3 className="font-display font-medium text-lg mb-3">
          Try it: Pick something to see as JSON
        </h3>
        <div className="flex gap-2 mb-4">
          {examples.map((ex, i) => (
            <Button
              key={ex.label}
              onClick={() => setSelectedIndex(i)}
              variant={selectedIndex === i ? "default" : "outline"}
              className={
                selectedIndex === i
                  ? "bg-pink-500 hover:bg-pink-600 text-white"
                  : "border-sage-300 text-sage-600 hover:bg-sage-50"
              }
              size="sm"
            >
              {ex.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-sage-200 p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-sage-400 mb-3">
              How you&rsquo;d understand it
            </div>
            <div className="space-y-2.5">
              {current.fields.map((f) => (
                <div key={f.key} className="flex items-center gap-3">
                  <span className="text-sm font-medium text-sage-600 min-w-[100px]">
                    {f.key.charAt(0).toUpperCase() + f.key.slice(1)}:
                  </span>
                  <span className="text-sm text-warm-gray">
                    {f.value.replace(/"/g, "")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="code-block">
              <div className="code-header">
                <div className="code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="code-lang">JSON</span>
              </div>
              <div className="font-mono text-sm leading-relaxed">
                <div>{"{"}</div>
                {current.fields.map((f, i) => (
                  <div key={f.key}>
                    {"  "}
                    <span className="syn-str">&quot;{f.key}&quot;</span>
                    {": "}
                    <span className={f.value.startsWith('"') ? "syn-str" : "syn-kw"}>
                      {f.value.startsWith('"')
                        ? `\u0022${f.value.slice(1, -1)}\u0022`
                        : f.value}
                    </span>
                    {i < current.fields.length - 1 ? "," : ""}
                  </div>
                ))}
                <div>{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="stagger-item mt-5">
        <h3 className="font-display font-medium text-lg mb-3">
          How to read JSON
        </h3>
        <div className="bg-white rounded-xl border border-sage-200 p-4">
          <div className="space-y-2.5">
            <div className="flex items-start gap-3">
              <span className="font-mono bg-sage-100 text-sage-600 px-2.5 py-0.5 rounded-md text-sm font-semibold min-w-[50px] text-center shrink-0">
                {"{  }"}
              </span>
              <span className="text-sm text-warm-gray">
                Curly braces mean &ldquo;here&rsquo;s a group of related
                information&rdquo;. Everything between them belongs together.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono bg-pink-100 text-pink-600 px-2.5 py-0.5 rounded-md text-sm font-semibold min-w-[50px] text-center shrink-0">
                &quot; &quot;
              </span>
              <span className="text-sm text-warm-gray">
                Quotes go around text values and labels. If you see quotes,
                it&rsquo;s a piece of text (not a number).
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono bg-sage-100 text-sage-600 px-2.5 py-0.5 rounded-md text-sm font-semibold min-w-[50px] text-center shrink-0">
                :
              </span>
              <span className="text-sm text-warm-gray">
                A colon separates the label from the value, like &ldquo;Name:
                Sarah&rdquo;. The label is on the left, the value is on the
                right.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono bg-sage-100 text-sage-600 px-2.5 py-0.5 rounded-md text-sm font-semibold min-w-[50px] text-center shrink-0">
                ,
              </span>
              <span className="text-sm text-warm-gray">
                Commas separate each item, just like in a list. The last item
                doesn&rsquo;t need one.
              </span>
            </div>
          </div>
        </div>
      </div>

      <SlideQA
        items={[
          {
            question: "Why not just use plain English?",
            answer:
              "Computers need things to be very structured and consistent. Plain English is full of ambiguity -- 'call me' could mean a phone call or a nickname. JSON removes all that ambiguity by using a strict format that computers can always understand.",
          },
          {
            question: "Will I ever need to write JSON?",
            answer:
              "Probably not! But you'll likely see it if you ever peek behind the scenes of an app or website. Developers work with it all the time, and knowing what it looks like helps you understand what they're talking about.",
          },
          {
            question: "Is JSON only used on websites?",
            answer:
              "No, JSON is used everywhere: mobile apps, smart home devices, video games, weather services -- basically anywhere two pieces of software need to share information with each other. It's one of the most common formats in all of computing.",
          },
        ]}
      />
    </SlideLayout>
  );
}
