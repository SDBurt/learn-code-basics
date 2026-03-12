import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { CodeBlock } from "@/components/shared/code-block";
import { AnalogyBox } from "@/components/shared/analogy-box";

const entries = [
  { key: '"name"', val: '"Juneau"' },
  { key: '"breed"', val: '"Pomsky"' },
  { key: '"likes_to_play"', val: "True" },
  { key: '"friendly"', val: "True" },
];

export function DictionariesSlide({ active }: { active: boolean }) {
  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-cream to-sage-50"
    >
      <Blob color="sage" className="w-[350px] h-[350px] -top-20 -left-20" />

      <Overline variant="sage">Data Structures</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        <span className="text-pink-500">Dictionaries</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        A dictionary stores data in <strong>key-value pairs</strong> &mdash;
        like a real dictionary where every word (key) has a definition (value).
      </p>

      <div className="stagger-item flex flex-col gap-2 my-5">
        {entries.map((e) => (
          <div key={e.key} className="flex items-center">
            <div className="bg-sage-200 border-2 border-sage-400 rounded-l-xl px-4 py-2.5 font-mono text-sm font-semibold text-sage-600 min-w-[100px] text-center">
              {e.key}
            </div>
            <div className="bg-sage-100 px-2 py-2.5 text-sm text-sage-500 border-t-2 border-b-2 border-sage-300">
              &rarr;
            </div>
            <div className="bg-pink-100 border-2 border-pink-300 rounded-r-xl px-4 py-2.5 font-mono text-sm text-pink-600 flex-1">
              {e.val}
            </div>
          </div>
        ))}
      </div>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <CodeBlock output={"Juneau\nJuneau is a Pomsky"}>
            <span className="syn-cm"># A dictionary about a dog</span>
            <br />
            <span className="syn-kw">dog</span> ={" "}
            <span className="syn-br">{"{"}</span>
            <br />
            {"  "}
            <span className="syn-str">"name"</span>:{" "}
            <span className="syn-str">"Juneau"</span>,<br />
            {"  "}
            <span className="syn-str">"breed"</span>:{" "}
            <span className="syn-str">"Pomsky"</span>,<br />
            {"  "}
            <span className="syn-str">"likes_to_play"</span>:{" "}
            <span className="syn-kw">True</span>,<br />
            {"  "}
            <span className="syn-str">"friendly"</span>:{" "}
            <span className="syn-kw">True</span>
            <br />
            <span className="syn-br">{"}"}</span>
            <br />
            <br />
            <span className="syn-bi">print</span>
            <span className="syn-br">(</span>
            <span className="syn-kw">dog</span>
            <span className="syn-br">[</span>
            <span className="syn-str">"name"</span>
            <span className="syn-br">]</span>
            <span className="syn-br">)</span>
            <br />
            <span className="syn-bi">print</span>
            <span className="syn-br">(</span>
            <span className="syn-str">f"</span>
            <span className="syn-br">{"{"}</span>
            <span className="syn-kw">dog</span>[
            <span className="syn-str">'name'</span>]
            <span className="syn-br">{"}"}</span>
            <span className="syn-str"> is a </span>
            <span className="syn-br">{"{"}</span>
            <span className="syn-kw">dog</span>[
            <span className="syn-str">'breed'</span>]
            <span className="syn-br">{"}"}</span>
            <span className="syn-str">"</span>
            <span className="syn-br">)</span>
          </CodeBlock>
        </div>

        <div>
          <AnalogyBox>
            <p>
              A dictionary is like a <strong>contact card</strong>. Instead of
              numbered slots, each piece of info has a <strong>label</strong>{" "}
              (name, phone, email) and a <strong>value</strong> next to it.
            </p>
          </AnalogyBox>
        </div>
      </div>
    </SlideLayout>
  );
}
