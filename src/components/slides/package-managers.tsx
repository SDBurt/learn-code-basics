import { Card, CardContent } from "@/components/ui/card";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";
import { CodeBlock } from "@/components/shared/code-block";

const managers = [
  {
    name: "npm",
    lang: "JavaScript",
    command: "npm install lodash",
    desc: "The default for Node.js. Over 2 million packages available.",
  },
  {
    name: "pip",
    lang: "Python",
    command: "pip install requests",
    desc: "Python's package installer. Simple and widely used.",
  },
  {
    name: "yarn",
    lang: "JavaScript",
    command: "yarn add lodash",
    desc: "A faster alternative to npm, created by Facebook.",
  },
  {
    name: "cargo",
    lang: "Rust",
    command: "cargo add serde",
    desc: "Rust's built-in package manager. Known for reliability.",
  },
];

const concepts = [
  {
    term: "Package",
    plain: "A bundle of reusable code someone else wrote that you can add to your project.",
  },
  {
    term: "Dependency",
    plain: "A package your project relies on to work. Your app depends on it.",
  },
  {
    term: "Lock File",
    plain: "Records exact versions of every dependency so everyone on the team gets the same code.",
  },
  {
    term: "Registry",
    plain: "An online directory where packages are published and downloaded from (like npmjs.com).",
  },
  {
    term: "Versioning",
    plain: 'Packages use version numbers (e.g., 2.1.3) so you can choose which version to use.',
  },
];

export function PackageManagersSlide({ active }: { active: boolean }) {
  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-sage-50 to-cream"
    >
      <Blob color="sage" className="w-[350px] h-[350px] -top-20 -right-24" />
      <Blob color="pink" className="w-[250px] h-[250px] bottom-10 -left-16" />

      <Overline variant="sage">Developer Tools</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        Package <span className="text-pink-500">Managers</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        A package manager lets you install, update, and manage code libraries
        that other people have written. Instead of building everything from
        scratch, you stand on the shoulders of thousands of open-source
        contributors.
      </p>

      <div className="stagger-item">
        <AnalogyBox>
          <p>
            A package manager is like an app store for code. You search for
            what you need, install it with one command, and it handles all the
            setup for you. It even manages updates.
          </p>
        </AnalogyBox>
      </div>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            Popular Package Managers
          </h3>
          <div className="space-y-2.5">
            {managers.map((m) => (
              <Card key={m.name} className="border-sage-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-semibold text-sage-600">{m.name}</p>
                    <span className="text-[0.65rem] uppercase tracking-wider text-pink-500 font-semibold">
                      {m.lang}
                    </span>
                  </div>
                  <p className="text-xs text-warm-gray mb-2">{m.desc}</p>
                  <code className="text-xs bg-gray-900 text-green-400 px-2.5 py-1 rounded font-mono block">
                    $ {m.command}
                  </code>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            Key Concepts
          </h3>
          <div className="space-y-2">
            {concepts.map((c) => (
              <div
                key={c.term}
                className="bg-white rounded-xl p-3 border border-sage-200"
              >
                <p className="font-semibold text-sage-600 text-sm">{c.term}</p>
                <p className="text-xs text-warm-gray">{c.plain}</p>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
              Example: Installing a package
            </h3>
            <CodeBlock language="bash" output="added 1 package in 1.2s">
              <span className="syn-cm"># Install a library called "axios"</span>
              <br />
              <span className="syn-cm"># for making HTTP requests</span>
              <br />
              <span className="syn-bi">npm</span>{" "}
              <span className="syn-str">install</span>{" "}
              <span className="syn-kw">axios</span>
            </CodeBlock>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
