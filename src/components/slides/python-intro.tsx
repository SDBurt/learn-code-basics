import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { CodeBlock } from "@/components/shared/code-block";

export function PythonIntroSlide({ active }: { active: boolean }) {
  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-sage-50 to-cream"
    >
      <Blob color="sage" className="w-[350px] h-[350px] -bottom-20 -right-24" />

      <Overline variant="sage">Your First Language</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        Meet <span className="text-sage-500">Python</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-7">
        Python is one of the most popular programming languages in the world
        &mdash; and it's perfect for beginners because it reads almost like
        English.
      </p>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-display font-medium text-xl mb-3">
            Why Python?
          </h3>
          <ul className="space-y-2">
            {[
              "Easy to read and write",
              "Huge community and tons of tutorials",
              "Used in web dev, data science, AI, automation",
              "Companies like Google, Netflix, and NASA use it",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-sage-400 rounded-full shrink-0" />
                <span className="text-warm-gray">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <CodeBlock output={"Hello, world!\nThe answer is 84"}>
            <span className="syn-cm"># Your very first program!</span>
            <br />
            <span className="syn-bi">print</span>
            <span className="syn-br">(</span>
            <span className="syn-str">"Hello, world!"</span>
            <span className="syn-br">)</span>
            <br />
            <br />
            <span className="syn-cm"># Python can do math too</span>
            <br />
            <span className="syn-kw">result</span> ={" "}
            <span className="syn-num">42</span> *{" "}
            <span className="syn-num">2</span>
            <br />
            <span className="syn-bi">print</span>
            <span className="syn-br">(</span>
            <span className="syn-str">"The answer is"</span>,{" "}
            <span className="syn-kw">result</span>
            <span className="syn-br">)</span>
          </CodeBlock>
        </div>
      </div>
    </SlideLayout>
  );
}
