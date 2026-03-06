import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Info } from "lucide-react";
import { BackToTop } from "@/components/shared/back-to-top";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { usePageMeta } from "@/hooks/use-page-meta";

interface Joke {
  category: string;
  type: "one-liner" | "setup-punchline" | "scenario" | "quote";
  setup?: string;
  punchline?: string;
  text?: string;
  author?: string;
  explainer: string;
}

const jokes: Joke[] = [
  // Classic setup-punchlines
  {
    category: "Classic",
    type: "setup-punchline",
    setup: "Why do programmers prefer dark mode?",
    punchline: "Because light attracts bugs.",
    explainer:
      "\"Bugs\" means errors in code. The joke plays on the double meaning -- real bugs are attracted to light, and programmers want to avoid code bugs.",
  },
  {
    category: "Classic",
    type: "setup-punchline",
    setup: "A SQL query walks into a bar, sees two tables, and asks...",
    punchline: '"Can I JOIN you?"',
    explainer:
      "SQL is a database language. A JOIN is a command that combines data from two tables. The joke uses \"join\" in both the social and technical sense.",
  },
  {
    category: "Classic",
    type: "setup-punchline",
    setup: "Why do Java developers wear glasses?",
    punchline: "Because they can't C#.",
    explainer:
      "Java and C# (pronounced \"C sharp\") are both programming languages. \"Can't C#\" sounds like \"can't see sharp\" -- so they need glasses.",
  },
  {
    category: "Classic",
    type: "setup-punchline",
    setup: "Why did the developer go broke?",
    punchline: "Because he used up all his cache.",
    explainer:
      "\"Cache\" (pronounced \"cash\") is a place where computers store data temporarily so things load faster. The joke plays on cache sounding like cash (money).",
  },
  {
    category: "Classic",
    type: "setup-punchline",
    setup: "Why was the JavaScript developer sad?",
    punchline: "Because he didn't Node how to Express himself.",
    explainer:
      "Node.js and Express are popular JavaScript tools for building servers. The joke swaps \"know\" with \"Node\" and uses \"Express\" as a pun on expressing feelings.",
  },
  {
    category: "Classic",
    type: "setup-punchline",
    setup: "How many programmers does it take to change a light bulb?",
    punchline: "None. That's a hardware problem.",
    explainer:
      "Programmers write software (code). A light bulb is physical hardware. Programmers like to say hardware issues aren't their responsibility.",
  },
  {
    category: "Classic",
    type: "setup-punchline",
    setup: "What do you call a developer who doesn't comment their code?",
    punchline: "A sociopath.",
    explainer:
      "\"Comments\" are notes developers leave in their code to explain what it does. Code without comments is hard for anyone else to understand, which frustrates the whole team.",
  },
  {
    category: "Classic",
    type: "setup-punchline",
    setup: "Why do programmers always mix up Halloween and Christmas?",
    punchline: "Because Oct 31 == Dec 25.",
    explainer:
      "In computing, \"Oct\" means octal (base-8) and \"Dec\" means decimal (base-10). The number 31 in octal equals 25 in decimal. So Oct 31 literally equals Dec 25.",
  },

  // Relatable scenarios
  {
    category: "Relatable",
    type: "scenario",
    text: '"It works on my machine" -- the developer, moments before the production server catches fire.',
    explainer:
      "Code can behave differently on a developer's computer vs. the live server users access. This is one of the most common (and frustrating) developer excuses.",
  },
  {
    category: "Relatable",
    type: "scenario",
    text: "99 little bugs in the code, 99 little bugs. Take one down, patch it around... 127 little bugs in the code.",
    explainer:
      "A parody of \"99 Bottles of Beer.\" Fixing one bug in code often accidentally creates new ones, so the bug count goes up instead of down.",
  },
  {
    category: "Relatable",
    type: "scenario",
    text: "A developer's week: Monday -- this is impossible. Tuesday -- maybe I can do it. Wednesday -- I did it! Thursday -- wait, how did I do it? Friday -- it's broken again.",
    explainer:
      "This captures the emotional rollercoaster of programming: confusion, breakthroughs, and then discovering it somehow broke again.",
  },
  {
    category: "Relatable",
    type: "scenario",
    text: "Stages of debugging: 1) That can't happen. 2) That doesn't happen on my machine. 3) That shouldn't happen. 4) Why does that happen? 5) Oh, I see. 6) How did that ever work?",
    explainer:
      "Debugging (finding errors) follows a predictable emotional arc from denial to confusion to the horrifying realization that the code was always broken.",
  },
  {
    category: "Relatable",
    type: "scenario",
    text: 'The most terrifying message: "I didn\'t change anything, it just stopped working."',
    explainer:
      "When someone says they didn't change anything, they almost always did. This phrase strikes fear into every developer's heart because it makes the bug harder to find.",
  },
  {
    category: "Relatable",
    type: "scenario",
    text: "Programmer's diet: coffee and Stack Overflow answers from 2014 that somehow still work.",
    explainer:
      "Stack Overflow is a Q&A website where developers find solutions. Old answers from years ago are still surprisingly useful, and coffee is a developer stereotype.",
  },
  {
    category: "Relatable",
    type: "scenario",
    text: "There are only two hard things in computer science: cache invalidation, naming things, and off-by-one errors.",
    explainer:
      "The original quote lists two hard things, but this version lists three -- that's the off-by-one error in action. Cache invalidation means knowing when stored data is outdated.",
  },
  {
    category: "Relatable",
    type: "scenario",
    text: '"I\'ll just fix this one small thing before bed." -- a developer at 2 AM, 47 changes later.',
    explainer:
      "One small fix often leads to discovering other issues, which leads to more fixes. Developers frequently lose track of time chasing \"just one more thing.\"",
  },

  // One-liners
  {
    category: "One-Liners",
    type: "one-liner",
    text: "A good programmer looks both ways before crossing a one-way street.",
    explainer:
      "Good programmers are cautious and check for unexpected problems even when everything seems safe. Things can go wrong in surprising ways.",
  },
  {
    category: "One-Liners",
    type: "one-liner",
    text: "Debugging is like being the detective in a crime movie where you are also the murderer.",
    explainer:
      "When you debug code, you're hunting for the person who wrote the bug -- and that person is usually you.",
  },
  {
    category: "One-Liners",
    type: "one-liner",
    text: "The best thing about a Boolean is that even if you're wrong, you're only off by a bit.",
    explainer:
      "A Boolean is a true/false value stored as a single bit (0 or 1). \"Off by a bit\" means both slightly wrong and wrong by one binary digit.",
  },
  {
    category: "One-Liners",
    type: "one-liner",
    text: "In theory, there is no difference between theory and practice. In practice, there is.",
    explainer:
      "Things that work perfectly on paper often fail in the real world. This is especially true in software where edge cases and real users create unexpected problems.",
  },
  {
    category: "One-Liners",
    type: "one-liner",
    text: "A developer's prayer: \"Dear God, please let this work. I don't know why it doesn't. I don't know why it will. But please. Just let it work.\"",
    explainer:
      "Sometimes developers fix a problem without fully understanding what was wrong. They change things until it works and hope for the best.",
  },
  {
    category: "One-Liners",
    type: "one-liner",
    text: "Weeks of coding can save you hours of planning.",
    explainer:
      "This is sarcastic. It means developers sometimes jump straight into writing code when spending a few hours planning first would have saved weeks of wasted effort.",
  },
  {
    category: "One-Liners",
    type: "one-liner",
    text: "If at first you don't succeed, call it version 1.0.",
    explainer:
      "Software is released in versions. Version 1.0 is the first official release. The joke is that instead of fixing problems, you just ship it and call it done.",
  },
  {
    category: "One-Liners",
    type: "one-liner",
    text: "The code works. Nobody knows why. Do not touch it.",
    explainer:
      "Sometimes code works for reasons nobody fully understands. In those cases, developers are afraid to change anything because they might break it.",
  },

  // Quotes
  {
    category: "Wisdom",
    type: "quote",
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
    explainer:
      "Computers will run messy code just fine. The real challenge is writing code that other people (or future you) can read and make sense of.",
  },
  {
    category: "Wisdom",
    type: "quote",
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    explainer:
      "Many developers start typing code before fully understanding the problem. This quote reminds them to think first, code second.",
  },
  {
    category: "Wisdom",
    type: "quote",
    text: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs",
    explainer:
      "Rather than writing great error messages, it's better to design software so errors don't happen in the first place.",
  },
  {
    category: "Wisdom",
    type: "quote",
    text: "It's not a bug -- it's an undocumented feature.",
    author: "Every developer ever",
    explainer:
      "A classic developer joke. When something goes wrong, instead of admitting it's a bug (error), you claim it was intentional behavior that just wasn't written down.",
  },
  {
    category: "Wisdom",
    type: "quote",
    text: "Deleted code is debugged code.",
    author: "Jeff Sickel",
    explainer:
      "Code that doesn't exist can't have bugs. The simplest way to eliminate errors is to remove unnecessary code entirely.",
  },
  {
    category: "Wisdom",
    type: "quote",
    text: "The best performance improvement is the transition from nonworking to working.",
    author: "John Ousterhout",
    explainer:
      "Before worrying about making code faster or fancier, the most important step is just getting it to work in the first place.",
  },
];

const CATEGORIES = ["All", "Classic", "Relatable", "One-Liners", "Wisdom"] as const;

function ExplainerTip({ text }: { text: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full text-sage-400 hover:text-pink-400 hover:bg-pink-50 transition-colors ml-2 p-1"
          aria-label="Explain this joke"
        >
          <Info className="h-4 w-4" />
        </button>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        sideOffset={8}
        className="max-w-xs text-sm leading-relaxed"
      >
        {text}
      </TooltipContent>
    </Tooltip>
  );
}

export function CodingHumorPage() {
  usePageMeta(
    "Coding Humor",
    "30 curated programming jokes, one-liners, and developer quotes with plain-language explanations.",
  );
  const [activeCategory, setActiveCategory] = useState("All");
  const [revealedPunchlines, setRevealedPunchlines] = useState<Set<number>>(new Set());

  const filtered = jokes.filter(
    (j) => activeCategory === "All" || j.category === activeCategory
  );

  const revealPunchline = (index: number) => {
    setRevealedPunchlines((prev) => new Set(prev).add(index));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <Link
          to="/"
          className="flex items-center gap-1 text-sm text-sage-400 hover:text-sage-600 transition-colors mb-6"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Topics
        </Link>

        <header className="mb-8">
          <h1 className="font-display font-bold text-3xl text-sage-700 mb-2">
            Coding Humor
          </h1>
          <p className="text-sage-500 text-lg">
            The best part of programming is the jokes. Here are some
            classics that every developer knows.
          </p>
          <p className="text-sage-400 text-sm mt-1">
            Hover the <Info className="inline h-3.5 w-3.5" /> icon on any joke for a plain-English explanation.
          </p>
        </header>

        <div className="flex flex-wrap gap-2 mb-6">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat}
              size="sm"
              onClick={() => setActiveCategory(cat)}
              className={
                activeCategory === cat
                  ? "bg-pink-500 hover:bg-pink-600 text-white"
                  : "bg-sage-100 text-sage-600 hover:bg-sage-200"
              }
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map((joke) => {
            const globalIndex = jokes.indexOf(joke);

            return (
              <Card key={globalIndex} className="border-sage-200 bg-white overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[0.6rem] uppercase tracking-wider text-pink-400 font-semibold">
                      {joke.category}
                    </span>
                    <ExplainerTip text={joke.explainer} />
                  </div>

                  {joke.type === "setup-punchline" && (
                    <div className="mt-2">
                      <p className="text-base text-sage-700 font-medium mb-3">
                        {joke.setup}
                      </p>
                      {revealedPunchlines.has(globalIndex) ? (
                        <p className="text-base text-pink-600 font-semibold output-enter">
                          {joke.punchline}
                        </p>
                      ) : (
                        <Button
                          size="sm"
                          onClick={() => revealPunchline(globalIndex)}
                          className="bg-sage-100 text-sage-600 hover:bg-sage-200"
                        >
                          Reveal punchline
                        </Button>
                      )}
                    </div>
                  )}

                  {(joke.type === "scenario" || joke.type === "one-liner") && (
                    <p className="mt-2 text-base text-sage-700 leading-relaxed">
                      {joke.text}
                    </p>
                  )}

                  {joke.type === "quote" && (
                    <div className="mt-2">
                      <p className="text-base text-sage-700 italic leading-relaxed">
                        "{joke.text}"
                      </p>
                      {joke.author && (
                        <p className="mt-2 text-sm text-sage-500">
                          -- {joke.author}
                        </p>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      <BackToTop />
    </div>
  );
}
