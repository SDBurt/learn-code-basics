import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  SlideLayout,
  Overline,
  Blob,
} from "@/components/shared/slide-layout";

interface Activity {
  time: string;
  title: string;
  description: string;
}

const activities: Activity[] = [
  {
    time: "9:00 AM",
    title: "Standup Meeting",
    description:
      "A quick 15-minute team check-in. Everyone shares what they worked on yesterday, what they're doing today, and if anything is stuck or waiting on someone else.",
  },
  {
    time: "9:30 AM",
    title: "Code Review",
    description:
      "Reading a teammate's proposed changes (called a \"pull request\" \u2014 like submitting a draft for review before it becomes part of the main project) and leaving feedback. This catches mistakes early and helps everyone learn from each other.",
  },
  {
    time: "10:30 AM",
    title: "Writing Code",
    description:
      "The main event! Building new features, fixing mistakes in the code (called \"bugs\"), or improving what's already been written. Usually involves lots of thinking and some typing.",
  },
  {
    time: "12:00 PM",
    title: "Lunch Break",
    description:
      "Yes, developers eat too! Often spent chatting about tech, side projects, or completely non-work things.",
  },
  {
    time: "1:00 PM",
    title: "Debugging",
    description:
      "Something isn't working as expected. Time to play detective \u2014 reading the computer's error messages (hints about what went wrong), printing out values to see what the code is actually doing, and testing theories until the fix is found.",
  },
  {
    time: "2:30 PM",
    title: "Planning Meeting",
    description:
      "Discussing upcoming features with designers (who decide how it looks) and product managers (who decide what the app should do). Together they figure out what to build next and how to build it.",
  },
  {
    time: "4:00 PM",
    title: "Deploying (Going Live)",
    description:
      "Putting the finished code onto the live website or app so real users can actually use it. Before this step, changes only exist on the developer's computer. This is exciting and nerve-wracking at the same time!",
  },
];

export function DevDaySlide({ active }: { active: boolean }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  function toggleActivity(index: number) {
    setExpandedIndex((prev) => (prev === index ? null : index));
  }

  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-sage-50 via-cream to-sage-100"
    >
      <Blob color="sage" className="w-[400px] h-[400px] -top-24 -left-24" />
      <Blob color="pink" className="w-[300px] h-[300px] -bottom-16 -right-20" />

      <div className="text-center mb-6">
        <Overline variant="sage">The Big Picture</Overline>

        <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-4">
          A Developer&rsquo;s <span className="text-pink-500">Day</span>
        </h1>

        <p className="stagger-item text-lg text-warm-gray max-w-[560px] mx-auto">
          Ever wonder what developers actually do all day? It&rsquo;s a mix of
          thinking, collaborating, and problem-solving &mdash; not just typing
          code.
        </p>
      </div>

      <div className="stagger-item relative max-w-[600px] mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-sage-200" />

        <div className="flex flex-col gap-3">
          {activities.map((activity, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div key={index} className="relative pl-9">
                {/* Timeline dot */}
                <div
                  className={[
                    "absolute left-0 top-4 w-[22px] h-[22px] rounded-full border-2 transition-colors duration-200",
                    isExpanded
                      ? "bg-pink-400 border-pink-400"
                      : "bg-white border-sage-300",
                  ].join(" ")}
                />

                <Card
                  className={[
                    "cursor-pointer transition-all duration-200 border",
                    isExpanded
                      ? "border-pink-200 bg-pink-50/50 shadow-md"
                      : "border-sage-200 bg-white hover:border-sage-300 hover:shadow-sm",
                  ].join(" ")}
                  onClick={() => toggleActivity(index)}
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-sage-400 uppercase tracking-wider whitespace-nowrap">
                        {activity.time}
                      </span>
                      <span className="font-display font-medium text-sage-600">
                        {activity.title}
                      </span>
                    </div>

                    {isExpanded && (
                      <p className="mt-3 text-sm text-warm-gray leading-relaxed border-t border-pink-100 pt-3">
                        {activity.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </SlideLayout>
  );
}
