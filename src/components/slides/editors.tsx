import { Card, CardContent } from "@/components/ui/card";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";

const editors = [
  {
    name: "VS Code",
    desc: "The most popular editor. Free, made by Microsoft, with thousands of extensions.",
    highlight: "Used by most developers today",
  },
  {
    name: "JetBrains IDEs",
    desc: "Powerful IDEs like IntelliJ (Java), PyCharm (Python), and WebStorm (JavaScript). Smart, but heavier.",
    highlight: "Popular in enterprise",
  },
  {
    name: "Vim / Neovim",
    desc: "A keyboard-only editor that lives in the terminal. Steep learning curve, but blazing fast once mastered.",
    highlight: "The hacker aesthetic",
  },
  {
    name: "Xcode / Android Studio",
    desc: "Specialized editors for building iPhone (Xcode) and Android apps. Required for mobile development.",
    highlight: "Mobile-specific",
  },
];

const features = [
  {
    name: "Syntax Highlighting",
    desc: "Colors different parts of your code so it's easier to read.",
  },
  {
    name: "Autocomplete",
    desc: "Suggests code as you type, like predictive text on your phone.",
  },
  {
    name: "Error Detection",
    desc: "Underlines mistakes in real time, before you even run the code.",
  },
  {
    name: "Extensions",
    desc: "Add-ons that customize your editor -- themes, language support, AI helpers.",
  },
  {
    name: "Integrated Terminal",
    desc: "A built-in command line so you don't have to switch windows.",
  },
  {
    name: "Version Control",
    desc: "See file changes and manage Git directly from the editor.",
  },
];

export function EditorsSlide({ active }: { active: boolean }) {
  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-sage-50 to-cream"
    >
      <Blob color="sage" className="w-[350px] h-[350px] -top-20 -right-24" />
      <Blob color="pink" className="w-[250px] h-[250px] bottom-10 -left-16" />

      <Overline variant="sage">Developer Tools</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        Code <span className="text-pink-500">Editors</span> & IDEs
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        A code editor is where developers spend most of their day. It&rsquo;s
        like a word processor, but designed for writing code instead of essays.
        An <strong>IDE</strong> (Integrated Development Environment) is a
        code editor with extra tools built in.
      </p>

      <div className="stagger-item">
        <AnalogyBox>
          <p>
            A code editor is like a chef&rsquo;s kitchen. A basic text editor is
            like a home kitchen &mdash; it works, but a professional kitchen
            (IDE) comes with specialized tools, better organization, and
            everything you need within arm&rsquo;s reach.
          </p>
        </AnalogyBox>
      </div>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            Popular Editors
          </h3>
          <div className="space-y-2.5">
            {editors.map((e) => (
              <Card key={e.name} className="border-sage-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-semibold text-sage-600">{e.name}</p>
                    <span className="text-[0.65rem] uppercase tracking-wider text-pink-500 font-semibold">
                      {e.highlight}
                    </span>
                  </div>
                  <p className="text-xs text-warm-gray">{e.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            Key Features
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {features.map((f) => (
              <div
                key={f.name}
                className="bg-white rounded-xl p-3 border border-sage-200"
              >
                <p className="font-semibold text-sage-600 text-sm">{f.name}</p>
                <p className="text-xs text-warm-gray">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
