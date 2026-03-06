import { Card, CardContent } from "@/components/ui/card";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";

const process = [
  {
    name: "Collect",
    desc: "Gather raw data from databases, APIs, surveys, or sensors.",
    icon: "\u{1F4E5}",
  },
  {
    name: "Clean",
    desc: "Fix errors, remove duplicates, and handle missing values so the data is reliable.",
    icon: "\u{1F9F9}",
  },
  {
    name: "Analyze",
    desc: "Use statistics and algorithms to find patterns, trends, and relationships in the data.",
    icon: "\u{1F50D}",
  },
  {
    name: "Visualize",
    desc: "Turn numbers into charts, graphs, and dashboards that humans can quickly understand.",
    icon: "\u{1F4CA}",
  },
  {
    name: "Communicate",
    desc: "Tell the story behind the data -- present findings and recommend actions.",
    icon: "\u{1F4AC}",
  },
];

const tools = [
  { name: "Python", note: "The most popular language for data science, with libraries like pandas and scikit-learn." },
  { name: "SQL", note: "The language for querying databases -- essential for pulling and filtering data." },
  { name: "Excel", note: "Still widely used for quick analysis, pivot tables, and simple visualizations." },
  { name: "Jupyter Notebooks", note: "Interactive documents that mix code, output, and explanation in one place." },
];

export function DataScienceSlide({ active }: { active: boolean }) {
  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-pink-50 to-cream"
    >
      <Blob color="pink" className="w-[350px] h-[350px] -top-20 -right-24" />
      <Blob color="sage" className="w-[250px] h-[250px] bottom-10 -left-16" />

      <Overline variant="pink">AI &amp; Data</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        <span className="text-sage-500">Data Science</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        Data science is the art of finding meaningful insights hidden in data.
        It combines statistics, programming, and domain knowledge to answer
        questions and drive decisions.
      </p>

      <div className="stagger-item">
        <AnalogyBox>
          <p>
            A data scientist is like a detective sifting through clues to find
            patterns and tell a story. The &ldquo;clues&rdquo; are data, and the
            &ldquo;story&rdquo; is the insight that helps people make better
            decisions.
          </p>
        </AnalogyBox>
      </div>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            The Process
          </h3>
          <div className="space-y-2.5">
            {process.map((step) => (
              <Card key={step.name} className="border-sage-200">
                <CardContent className="p-4 flex gap-3 items-start">
                  <span className="text-2xl shrink-0">{step.icon}</span>
                  <div>
                    <p className="font-semibold text-sage-600 text-sm">
                      {step.name}
                    </p>
                    <p className="text-xs text-warm-gray">{step.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            Common Tools
          </h3>
          <div className="space-y-2">
            {tools.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-xl p-3 border border-sage-200"
              >
                <p className="font-semibold text-sage-600 text-sm">{t.name}</p>
                <p className="text-xs text-warm-gray">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
