import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";

const roles = [
  {
    title: "Frontend Developer",
    desc: "Builds the user interface -- everything you see and interact with.",
    color: "bg-pink-50 border-pink-200",
    steps: ["Build"],
  },
  {
    title: "Backend Developer",
    desc: "Handles the server, database, and logic behind the scenes.",
    color: "bg-sage-50 border-sage-200",
    steps: ["Build"],
  },
  {
    title: "Full-Stack Developer",
    desc: "Works on both frontend and backend. A generalist.",
    color: "bg-cream border-amber-200",
    steps: ["Build"],
  },
  {
    title: "Designer (UI/UX)",
    desc: "Designs how the app looks (UI) and how it feels to use (UX).",
    color: "bg-pink-50 border-pink-200",
    steps: ["Design"],
  },
  {
    title: "Product Manager",
    desc: "Decides what to build and why. Bridges users and developers.",
    color: "bg-sage-50 border-sage-200",
    steps: ["Plan"],
  },
  {
    title: "QA / Tester",
    desc: "Finds bugs before they reach users. Tests features manually and with automation.",
    color: "bg-cream border-amber-200",
    steps: ["Test"],
  },
  {
    title: "DevOps / SRE",
    desc: "Keeps the app running, handles deployments, and monitors performance.",
    color: "bg-pink-50 border-pink-200",
    steps: ["Deploy", "Monitor"],
  },
  {
    title: "Tech Lead / Architect",
    desc: "Makes technical decisions and guides the team on how to build things.",
    color: "bg-sage-50 border-sage-200",
    steps: ["Plan", "Build"],
  },
];

const workflow = [
  { step: "Plan", desc: "The team decides what to build during sprint planning." },
  { step: "Design", desc: "Designers create mockups and developers review feasibility." },
  { step: "Build", desc: "Developers write code, open pull requests, and review each other's work." },
  { step: "Test", desc: "QA tests the feature, developers fix any bugs found." },
  { step: "Deploy", desc: "The code goes live for real users." },
  { step: "Monitor", desc: "The team watches for errors and gathers feedback." },
];

export function HowTeamsWorkSlide({ active }: { active: boolean }) {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const activeSteps = selectedRole
    ? roles.find((r) => r.title === selectedRole)?.steps ?? []
    : [];

  function handleRoleClick(title: string) {
    setSelectedRole((prev) => (prev === title ? null : title));
  }

  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-cream to-sage-50"
    >
      <Blob color="pink" className="w-[350px] h-[350px] -top-20 -right-24" />
      <Blob color="sage" className="w-[250px] h-[250px] bottom-10 -left-16" />

      <Overline variant="pink">The Big Picture</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        How <span className="text-sage-500">Teams</span> Work
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        Software is almost never built alone. Teams of people with different
        skills come together to plan, build, test, and ship products.
      </p>

      <div className="stagger-item">
        <AnalogyBox>
          <p>
            A dev team is like a film crew. You have directors (product
            managers), actors (developers), set designers (UI/UX), editors
            (QA), and the crew that keeps the lights on (DevOps). Everyone
            plays a different role, but they all work toward the same movie.
          </p>
        </AnalogyBox>
      </div>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            Common Roles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {roles.map((r) => {
              const isSelected = selectedRole === r.title;
              return (
                <Card
                  key={r.title}
                  onClick={() => handleRoleClick(r.title)}
                  className={`cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? "border-pink-400 bg-pink-50 ring-2 ring-pink-300"
                      : selectedRole
                        ? `${r.color} opacity-60`
                        : r.color
                  }`}
                >
                  <CardContent className="p-3">
                    <p className="font-semibold text-sage-600 text-sm">
                      {r.title}
                    </p>
                    <p className="text-xs text-warm-gray">{r.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            Typical Workflow
          </h3>
          <div className="space-y-2">
            {workflow.map((w, i) => {
              const isHighlighted = activeSteps.includes(w.step);
              return (
                <div
                  key={w.step}
                  className={`flex gap-3 items-start rounded-xl p-3 border transition-all duration-200 ${
                    selectedRole
                      ? isHighlighted
                        ? "bg-pink-50 border-pink-300 ring-2 ring-pink-200"
                        : "bg-white border-sage-200 opacity-40"
                      : "bg-white border-sage-200"
                  }`}
                >
                  <span
                    className={`font-bold text-sm w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                      selectedRole && isHighlighted
                        ? "bg-pink-400 text-white"
                        : "bg-pink-100 text-pink-600"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-sage-600 text-sm">
                      {w.step}
                    </p>
                    <p className="text-xs text-warm-gray">{w.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
