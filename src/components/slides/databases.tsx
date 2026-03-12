import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  SlideLayout,
  Overline,
  Blob,
} from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";
import { SlideQA } from "@/components/shared/slide-qa";

interface Person {
  name: string;
  age: number;
  city: string;
}

const data: Person[] = [
  { name: "Alice", age: 28, city: "London" },
  { name: "Bob", age: 34, city: "Paris" },
  { name: "Charlie", age: 22, city: "London" },
  { name: "Diana", age: 29, city: "Tokyo" },
  { name: "Eve", age: 31, city: "Paris" },
];

type Query = "all" | "london" | "over25" | "paris";

const queries: { label: string; value: Query }[] = [
  { label: "Show all", value: "all" },
  { label: "From London", value: "london" },
  { label: "Over 25", value: "over25" },
  { label: "From Paris", value: "paris" },
];

function matchesQuery(person: Person, query: Query): boolean {
  switch (query) {
    case "all":
      return true;
    case "london":
      return person.city === "London";
    case "over25":
      return person.age > 25;
    case "paris":
      return person.city === "Paris";
  }
}

export function DatabasesSlide({ active }: { active: boolean }) {
  const [activeQuery, setActiveQuery] = useState<Query>("all");

  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-pink-50 to-cream"
    >
      <Blob color="pink" className="w-[300px] h-[300px] -top-16 -right-24" />
      <Blob color="sage" className="w-[220px] h-[220px] bottom-8 -left-20" />

      <Overline variant="pink">How the Web Works</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        <span className="text-sage-500">Databases</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        Databases store and organize data so apps can find it quickly. Every app
        you use &mdash; from social media to banking &mdash; has a database
        behind it.
      </p>

      <AnalogyBox>
        <p>
          A database is like a <strong>giant, searchable spreadsheet</strong>.
          Instead of scrolling through thousands of rows, you can ask it specific
          questions like &ldquo;show me everyone from London&rdquo; and get
          instant answers.
        </p>
      </AnalogyBox>

      <div className="stagger-item mt-6">
        <Card className="border border-sage-200 bg-white">
          <CardContent className="p-5">
            <table className="w-full text-left text-sm" data-testid="data-table">
              <thead>
                <tr className="border-b border-sage-200">
                  <th className="py-2 pr-4 font-semibold text-sage-600">Name</th>
                  <th className="py-2 pr-4 font-semibold text-sage-600">Age</th>
                  <th className="py-2 font-semibold text-sage-600">City</th>
                </tr>
              </thead>
              <tbody>
                {data.map((person) => {
                  const matches = matchesQuery(person, activeQuery);
                  return (
                    <tr
                      key={person.name}
                      data-testid={`row-${person.name}`}
                      className={[
                        "border-b border-sage-100 transition-opacity duration-300",
                        matches ? "opacity-100" : "opacity-30",
                      ].join(" ")}
                    >
                      <td className="py-2 pr-4 text-sage-600">{person.name}</td>
                      <td className="py-2 pr-4 text-sage-600">{person.age}</td>
                      <td className="py-2 text-sage-600">{person.city}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="flex flex-wrap gap-2 mt-4">
              {queries.map((q) => (
                <button
                  key={q.value}
                  onClick={() => setActiveQuery(q.value)}
                  className={[
                    "px-3 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer",
                    activeQuery === q.value
                      ? "bg-pink-500 text-white"
                      : "bg-sage-100 text-sage-600 hover:bg-sage-200",
                  ].join(" ")}
                >
                  {q.label}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <SlideQA
        items={[
          {
            question: "How is a database different from a spreadsheet?",
            answer: "A spreadsheet is great for one person working with a small amount of data. A database can handle millions of entries, let many people access it at the same time, and find specific information almost instantly. Think of it as a supercharged, automated spreadsheet."
          },
          {
            question: "Where does the database live?",
            answer: "Usually on a server -- a computer that's always running somewhere in a data centre. When you sign up for an app, your information gets sent over the internet to that server's database. That's why you can log in from any device and still see your data."
          }
        ]}
      />
    </SlideLayout>
  );
}
