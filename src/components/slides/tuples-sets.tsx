import { SlideLayout, Overline } from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";

export function TuplesSetsSlide({ active }: { active: boolean }) {
  return (
    <SlideLayout active={active} className="bg-[#f8f5f0]">
      <Overline variant="pink">Data Structures</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        Tuples & <span className="text-sage-500">Sets</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        Python has a few more ways to organize data. Here are two more useful
        ones:
      </p>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tuples */}
        <div>
          <h2 className="font-display font-medium text-xl mb-2">Tuples</h2>
          <p className="text-warm-gray mb-3">
            Like a list, but <strong>can't be changed</strong> once created.
            Perfect for data that should stay the same, like coordinates or days
            of the week.
          </p>

          <div className="flex items-center gap-1 my-3">
            <span className="font-mono text-2xl font-bold text-sage-400">
              (
            </span>
            {["Mon", "Tue", "Wed"].map((d) => (
              <div
                key={d}
                className="bg-sage-100 border-2 border-dashed border-sage-400 rounded-xl px-4 py-2.5 font-mono text-sm text-sage-600"
              >
                "{d}"
              </div>
            ))}
            <span className="font-mono text-2xl font-bold text-sage-400">
              )
            </span>
          </div>

          <div className="code-block !text-[0.82rem]">
            <div className="code-header">
              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="code-lang">python</span>
            </div>
            <span className="syn-cm"># Tuples use parentheses</span>
            <br />
            <span className="syn-kw">coordinates</span> ={" "}
            <span className="syn-br">(</span>
            <span className="syn-num">40.7</span>,{" "}
            <span className="syn-num">-74.0</span>
            <span className="syn-br">)</span>
            <br />
            <span className="syn-kw">days</span> ={" "}
            <span className="syn-br">(</span>
            <span className="syn-str">"Mon"</span>,{" "}
            <span className="syn-str">"Tue"</span>,{" "}
            <span className="syn-str">"Wed"</span>
            <span className="syn-br">)</span>
            <br />
            <br />
            <span className="syn-bi">print</span>
            <span className="syn-br">(</span>
            <span className="syn-kw">days</span>
            <span className="syn-br">[</span>
            <span className="syn-num">0</span>
            <span className="syn-br">]</span>
            <span className="syn-br">)</span>{" "}
            <span className="syn-cm"># Mon</span>
          </div>

          <AnalogyBox>
            <p>
              A tuple is like a <strong>sealed envelope</strong> &mdash; once
              you put things in, you can look at them but can't change them.
            </p>
          </AnalogyBox>
        </div>

        {/* Sets */}
        <div>
          <h2 className="font-display font-medium text-xl mb-2">Sets</h2>
          <p className="text-warm-gray mb-3">
            A collection of <strong>unique items</strong> with no duplicates and
            no specific order. Great for removing duplicates or checking
            membership.
          </p>

          <div className="flex gap-2.5 flex-wrap my-3 p-4 border-2 border-pink-300 rounded-[50%/30%] justify-center bg-pink-50 min-h-[80px] items-center">
            {["\u{1F34E}", "\u{1F34C}", "\u{1F352}", "\u{1F347}"].map(
              (fruit) => (
                <div
                  key={fruit}
                  className="bg-pink-300 text-white rounded-full w-[50px] h-[50px] flex items-center justify-center font-mono text-sm font-semibold"
                >
                  {fruit}
                </div>
              )
            )}
          </div>

          <div className="code-block !text-[0.82rem]">
            <div className="code-header">
              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="code-lang">python</span>
            </div>
            <span className="syn-cm"># Sets use curly braces</span>
            <br />
            <span className="syn-kw">fruits</span> ={" "}
            <span className="syn-br">{"{"}</span>
            <span className="syn-str">"apple"</span>,{" "}
            <span className="syn-str">"banana"</span>,{" "}
            <span className="syn-str">"cherry"</span>
            <span className="syn-br">{"}"}</span>
            <br />
            <br />
            <span className="syn-cm"># Duplicates are ignored</span>
            <br />
            <span className="syn-kw">fruits</span>.
            <span className="syn-fn">add</span>
            <span className="syn-br">(</span>
            <span className="syn-str">"apple"</span>
            <span className="syn-br">)</span>{" "}
            <span className="syn-cm"># still 3 items</span>
            <br />
            <span className="syn-bi">print</span>
            <span className="syn-br">(</span>
            <span className="syn-bi">len</span>
            <span className="syn-br">(</span>
            <span className="syn-kw">fruits</span>
            <span className="syn-br">)</span>
            <span className="syn-br">)</span>
          </div>

          <AnalogyBox>
            <p>
              A set is like a <strong>bag of marbles</strong> &mdash; no two are
              the same colour, and they're all jumbled up (no order).
            </p>
          </AnalogyBox>
        </div>
      </div>
    </SlideLayout>
  );
}
