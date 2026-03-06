import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  SlideLayout,
  Overline,
  Blob,
} from "@/components/shared/slide-layout";

type Frontend = "React" | "Vue" | "Angular";
type Backend = "Node.js" | "Python" | "Ruby";
type Database = "PostgreSQL" | "MongoDB" | "SQLite";

interface Selections {
  frontend: Frontend;
  backend: Backend;
  database: Database;
}

const frontendOptions: Frontend[] = ["React", "Vue", "Angular"];
const backendOptions: Backend[] = ["Node.js", "Python", "Ruby"];
const databaseOptions: Database[] = ["PostgreSQL", "MongoDB", "SQLite"];

const toolDescriptions: Record<string, string> = {
  React: "for building interactive UIs",
  Vue: "for building simple UIs",
  Angular: "for large-scale web apps",
  "Node.js": "runs JavaScript on servers",
  Python: "great for data & AI",
  Ruby: "known for fast development",
  PostgreSQL: "powerful & widely used",
  MongoDB: "flexible, document-based",
  SQLite: "lightweight & simple",
};

function getStackDescription(frontend: Frontend, backend: Backend): string {
  if (frontend === "React" && backend === "Node.js") {
    return "A popular JavaScript-everywhere combo. Great for real-time apps.";
  }
  if (frontend === "React" && backend === "Python") {
    return "A solid choice for data-heavy applications.";
  }
  if (frontend === "Vue" && backend === "Node.js") {
    return "A lightweight, approachable combo. Great for quick projects.";
  }
  return "A solid combination! Each tool handles its layer of the application.";
}

export function FrameworksSlide({ active }: { active: boolean }) {
  const [selections, setSelections] = useState<Selections>({
    frontend: "React",
    backend: "Node.js",
    database: "PostgreSQL",
  });

  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-sage-50 to-cream"
    >
      <Blob color="sage" className="w-[350px] h-[350px] -top-20 -right-24" />
      <Blob color="pink" className="w-[250px] h-[250px] bottom-10 -left-16" />

      <Overline variant="pink">Developer Tools</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        Frameworks &amp;{" "}
        <strong className="text-pink-500">Libraries</strong>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-6">
        Developers don&rsquo;t build everything from scratch. Frameworks provide
        structure (like a house&rsquo;s framing), and libraries provide
        ready-made tools (like buying furniture instead of building it).
      </p>

      <div className="stagger-item">
        <Card className="border border-sage-200 bg-white">
          <CardContent className="p-5">
            <h3 className="font-display font-semibold text-lg text-sage-600 mb-1">
              Build a Tech Stack
            </h3>
            <p className="text-xs text-warm-gray mb-4">
              A &ldquo;tech stack&rdquo; is just the combination of tools a team
              picks to build their app.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-sage-500 w-44 shrink-0">
                  Frontend <span className="font-normal text-xs">(what users see)</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {frontendOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() =>
                        setSelections((prev) => ({
                          ...prev,
                          frontend: option,
                        }))
                      }
                      className={[
                        "px-3 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer",
                        selections.frontend === option
                          ? "bg-sage-200 text-sage-600 font-bold"
                          : "bg-sage-50 text-sage-500 hover:bg-sage-100",
                      ].join(" ")}
                      title={toolDescriptions[option]}
                    >
                      {option} <span className="text-xs font-normal opacity-70">({toolDescriptions[option]})</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-sage-500 w-44 shrink-0">
                  Backend <span className="font-normal text-xs">(behind-the-scenes logic)</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {backendOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() =>
                        setSelections((prev) => ({
                          ...prev,
                          backend: option,
                        }))
                      }
                      className={[
                        "px-3 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer",
                        selections.backend === option
                          ? "bg-sage-200 text-sage-600 font-bold"
                          : "bg-sage-50 text-sage-500 hover:bg-sage-100",
                      ].join(" ")}
                      title={toolDescriptions[option]}
                    >
                      {option} <span className="text-xs font-normal opacity-70">({toolDescriptions[option]})</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-sage-500 w-44 shrink-0">
                  Database <span className="font-normal text-xs">(stores &amp; organizes data)</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {databaseOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() =>
                        setSelections((prev) => ({
                          ...prev,
                          database: option,
                        }))
                      }
                      className={[
                        "px-3 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer",
                        selections.database === option
                          ? "bg-sage-200 text-sage-600 font-bold"
                          : "bg-sage-50 text-sage-500 hover:bg-sage-100",
                      ].join(" ")}
                      title={toolDescriptions[option]}
                    >
                      {option} <span className="text-xs font-normal opacity-70">({toolDescriptions[option]})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="stagger-item mt-4">
        <Card className="border border-sage-200 bg-sage-50">
          <CardContent className="p-5">
            <h3 className="font-display font-semibold text-lg text-sage-600 mb-3">
              Your Tech Stack
            </h3>

            <div className="flex flex-wrap gap-2 mb-3">
              <Badge className="bg-pink-100 text-pink-600 border-pink-200">
                {selections.frontend}
              </Badge>
              <Badge className="bg-sage-200 text-sage-600 border-sage-300">
                {selections.backend}
              </Badge>
              <Badge className="bg-pink-100 text-pink-600 border-pink-200">
                {selections.database}
              </Badge>
            </div>

            <p className="text-sm text-warm-gray">
              {getStackDescription(selections.frontend, selections.backend)}
            </p>
          </CardContent>
        </Card>
      </div>
    </SlideLayout>
  );
}
