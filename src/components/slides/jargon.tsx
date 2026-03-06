import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  SlideLayout,
  Overline,
  Blob,
} from "@/components/shared/slide-layout";

interface Term {
  name: string;
  definition: string;
}

const terms: Term[] = [
  {
    name: "Script",
    definition:
      "A file of code that runs from top to bottom to perform a task — like a recipe the computer follows",
  },
  {
    name: "API",
    definition:
      "Application Programming Interface — how apps communicate with each other",
  },
  {
    name: "PR",
    definition:
      "Pull Request — a proposal to merge code changes into the main project",
  },
  {
    name: "Deploy",
    definition:
      "Pushing code to a live server so real users can access it",
  },
  {
    name: "Repo",
    definition:
      "Repository — a project's folder containing all its code and history",
  },
  {
    name: "Branch",
    definition:
      "A parallel version of code where developers can work without affecting the main code",
  },
  {
    name: "Sprint",
    definition:
      "A 1-2 week work cycle where a team focuses on specific tasks",
  },
  {
    name: "Standup",
    definition:
      "A quick daily meeting where the team shares progress and blockers",
  },
  {
    name: "Refactor",
    definition:
      "Rewriting code to be cleaner without changing what it does",
  },
  {
    name: "Bug",
    definition: "An error or unexpected behavior in the code",
  },
  {
    name: "Merge",
    definition: "Combining code from one branch into another",
  },
  {
    name: "Commit",
    definition: "A saved snapshot of code changes with a description",
  },
  {
    name: "Frontend",
    definition:
      "The visible part of an app that users interact with",
  },
  {
    name: "Backend",
    definition:
      "The server-side logic, databases, and infrastructure behind an app",
  },
  {
    name: "DevOps",
    definition:
      "Practices that combine development and operations for faster, reliable releases",
  },
  {
    name: "Stack",
    definition:
      "The combination of technologies used to build an application",
  },
  {
    name: "Agile",
    definition:
      "A flexible project management approach with short cycles and frequent feedback",
  },
  {
    name: "JSON",
    definition:
      "A lightweight data format that looks like key-value pairs — the lingua franca of APIs",
  },
  {
    name: "CLI",
    definition:
      "Command Line Interface — a text-based way to interact with your computer",
  },
  {
    name: "Token",
    definition:
      "A digital pass that proves your identity after logging in",
  },
  {
    name: "Endpoint",
    definition:
      "A specific URL where an API can be accessed to get or send data",
  },
  {
    name: "Localhost",
    definition:
      "Your own computer acting as a server during development",
  },
  {
    name: "Linter",
    definition:
      "A tool that checks code for style issues and potential errors",
  },
  {
    name: "CI/CD",
    definition:
      "Continuous Integration / Deployment — automated testing and releasing of code",
  },
  {
    name: "Tech Debt",
    definition:
      "Shortcuts in code that work now but will need to be fixed later",
  },
];

export function JargonSlide({ active }: { active: boolean }) {
  const [search, setSearch] = useState("");

  const filtered = terms.filter((term) => {
    const query = search.toLowerCase();
    return (
      term.name.toLowerCase().includes(query) ||
      term.definition.toLowerCase().includes(query)
    );
  });

  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-pink-50 to-cream"
    >
      <Blob color="pink" className="w-[300px] h-[300px] -top-16 -right-24" />
      <Blob color="sage" className="w-[220px] h-[220px] bottom-8 -left-20" />

      <Overline variant="pink">The Big Picture</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        <span className="text-sage-500">
          Tech <strong>Jargon</strong>
        </span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        Developers use a lot of shorthand and jargon. Here&rsquo;s a quick
        reference so you know what they&rsquo;re talking about.
      </p>

      <div className="stagger-item mb-4">
        <Input
          placeholder="Search terms..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-sage-200 focus-visible:border-pink-300 focus-visible:ring-pink-200/50"
        />
      </div>

      <div
        className="stagger-item grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
        data-testid="term-grid"
      >
        {filtered.map((term) => (
          <Card
            key={term.name}
            className="border-sage-200 bg-white"
            data-testid={`term-card-${term.name}`}
          >
            <CardContent className="p-4">
              <p className="font-semibold text-sage-600 mb-1">{term.name}</p>
              <p className="text-sm text-warm-gray">{term.definition}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SlideLayout>
  );
}
