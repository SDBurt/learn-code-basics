import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  SlideLayout,
  Overline,
  Blob,
} from "@/components/shared/slide-layout";

interface LanguageInfo {
  name: string;
  code: string;
  usedFor: string;
  who: string[];
}

const languages: LanguageInfo[] = [
  {
    name: "Python",
    code: 'print("Hello!")',
    usedFor: "Data science, AI, automation, web backends",
    who: ["Data Scientists", "AI Engineers"],
  },
  {
    name: "JavaScript",
    code: 'console.log("Hello!")',
    usedFor: "Websites, web apps, mobile apps, servers",
    who: ["Web Developers", "Full Stack Devs"],
  },
  {
    name: "SQL",
    code: "SELECT * FROM users WHERE age > 25;",
    usedFor: "Querying and managing databases",
    who: ["Data Analysts", "Backend Developers"],
  },
  {
    name: "HTML/CSS",
    code: '<h1 style="color: blue;">Hello!</h1>',
    usedFor: "Structuring and styling web pages",
    who: ["Web Designers", "Frontend Devs"],
  },
  {
    name: "TypeScript",
    code: "const greet = (name: string): string => name;",
    usedFor: "Large-scale web applications with type safety",
    who: ["Enterprise Developers", "Frontend Teams"],
  },
];

export function LanguagesSlide({ active }: { active: boolean }) {
  const [activeTab, setActiveTab] = useState("Python");

  const activeLanguage = languages.find((l) => l.name === activeTab)!;

  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-pink-50 to-cream"
    >
      <Blob color="pink" className="w-[300px] h-[300px] -top-16 -right-24" />
      <Blob color="sage" className="w-[220px] h-[220px] bottom-8 -left-20" />

      <Overline variant="pink">Developer Tools</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-4">
        <span className="text-sage-500">
          Programming <strong>Languages</strong>
        </span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-6 max-w-[720px]">
        Different programming languages are designed for different jobs &mdash;
        just like different tools in a kitchen. You wouldn&rsquo;t use a blender
        to chop onions.
      </p>

      <div className="stagger-item">
        <div className="flex flex-wrap gap-2 mb-4">
          {languages.map((lang) => (
            <Button
              key={lang.name}
              onClick={() => setActiveTab(lang.name)}
              variant="outline"
              size="sm"
              className={
                activeTab === lang.name
                  ? "bg-pink-500 text-white border-pink-500 hover:bg-pink-600"
                  : "border-sage-300 text-sage-600 hover:bg-pink-50 hover:border-pink-300"
              }
            >
              {lang.name}
            </Button>
          ))}
        </div>

        <Card className="border border-sage-200 bg-white">
          <CardContent className="p-5 space-y-4">
            <div
              className="rounded-lg bg-[#1e1e2e] p-4 font-mono text-sm text-sage-300"
              data-testid="code-display"
            >
              {activeLanguage.code}
            </div>

            <div>
              <p className="text-sm font-semibold text-sage-600 mb-1">
                Used for:
              </p>
              <p className="text-warm-gray text-[0.95rem]">
                {activeLanguage.usedFor}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-sage-600 mb-2">
                Who uses it:
              </p>
              <div className="flex flex-wrap gap-2">
                {activeLanguage.who.map((role) => (
                  <Badge
                    key={role}
                    className="bg-pink-100 text-pink-600 border-pink-200"
                  >
                    {role}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SlideLayout>
  );
}
