import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SlideLayout, Overline } from "@/components/shared/slide-layout";
import { CodeBlock } from "@/components/shared/code-block";
import { AnalogyBox } from "@/components/shared/analogy-box";

export function ListsSlide({ active }: { active: boolean }) {
  const [items, setItems] = useState<string[]>(["milk", "eggs", "bread"]);
  const [newItem, setNewItem] = useState("");
  const [fadingIndex, setFadingIndex] = useState<number | null>(null);

  function handleAppend() {
    const trimmed = newItem.trim();
    if (!trimmed) return;
    setItems((prev) => [...prev, trimmed]);
    setNewItem("");
  }

  function handleRemove(index: number) {
    setFadingIndex(index);
    setTimeout(() => {
      setItems((prev) => prev.filter((_, i) => i !== index));
      setFadingIndex(null);
    }, 300);
  }

  function handleSort() {
    setItems((prev) => [...prev].sort((a, b) => a.localeCompare(b)));
  }

  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-pink-50 to-cream"
    >
      <Overline variant="pink">Data Structures</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        <span className="text-sage-500">Lists</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        A list is an <strong>ordered collection</strong> of items &mdash; like a
        shopping list or a playlist. Each item has a position number (starting
        from 0).
      </p>

      {/* Interactive list display */}
      <div className="stagger-item flex items-center gap-1 flex-wrap my-5">
        <span className="font-mono text-2xl font-bold text-pink-300">[</span>
        {items.map((item, i) => (
          <div
            key={`${item}-${i}`}
            onClick={() => handleRemove(i)}
            className={`relative bg-pink-100 border-2 border-pink-300 rounded-xl px-4 py-3 text-center font-mono text-sm cursor-pointer hover:bg-pink-200 hover:scale-105 transition-all ${
              fadingIndex === i
                ? "opacity-0 scale-75 transition-all duration-300"
                : ""
            }`}
            title="Click to remove()"
          >
            <span className="absolute -top-2 -right-1 bg-sage-400 text-white text-[0.65rem] w-[18px] h-[18px] rounded-full flex items-center justify-center font-bold">
              {i}
            </span>
            &quot;{item}&quot;
          </div>
        ))}
        <span className="font-mono text-2xl font-bold text-pink-300">]</span>
      </div>

      {/* Controls */}
      <div className="stagger-item flex items-center gap-2 flex-wrap mb-5">
        <Input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAppend()}
          placeholder="New item..."
          className="w-40 font-mono text-sm border-pink-300 focus-visible:ring-pink-300"
        />
        <Button
          onClick={handleAppend}
          variant="outline"
          size="sm"
          className="font-mono border-pink-300 text-pink-500 hover:bg-pink-100"
        >
          append()
        </Button>
        <Button
          onClick={handleSort}
          variant="outline"
          size="sm"
          className="font-mono border-sage-400 text-sage-500 hover:bg-sage-50"
        >
          sort()
        </Button>
        <span className="font-mono text-sm text-warm-gray ml-2">
          len() = <span className="font-bold text-sage-500">{items.length}</span>
        </span>
      </div>

      <p className="stagger-item text-xs text-warm-gray/70 mb-5 italic">
        Click any item to remove() it.
      </p>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <CodeBlock output={"milk\n4"}>
            <span className="syn-cm"># Creating a list</span>
            <br />
            <span className="syn-kw">shopping</span> ={" "}
            <span className="syn-br">[</span>
            <span className="syn-str">&quot;milk&quot;</span>,{" "}
            <span className="syn-str">&quot;eggs&quot;</span>,{" "}
            <span className="syn-str">&quot;bread&quot;</span>
            <span className="syn-br">]</span>
            <br />
            <br />
            <span className="syn-cm"># Add an item</span>
            <br />
            <span className="syn-kw">shopping</span>.
            <span className="syn-fn">append</span>
            <span className="syn-br">(</span>
            <span className="syn-str">&quot;butter&quot;</span>
            <span className="syn-br">)</span>
            <br />
            <br />
            <span className="syn-cm"># Get the first item (index 0)</span>
            <br />
            <span className="syn-bi">print</span>
            <span className="syn-br">(</span>
            <span className="syn-kw">shopping</span>
            <span className="syn-br">[</span>
            <span className="syn-num">0</span>
            <span className="syn-br">]</span>
            <span className="syn-br">)</span>
            <br />
            <br />
            <span className="syn-cm"># How many items?</span>
            <br />
            <span className="syn-bi">print</span>
            <span className="syn-br">(</span>
            <span className="syn-bi">len</span>
            <span className="syn-br">(</span>
            <span className="syn-kw">shopping</span>
            <span className="syn-br">)</span>
            <span className="syn-br">)</span>
          </CodeBlock>
        </div>

        <div>
          <AnalogyBox>
            <p>
              A list is like a <strong>numbered shelf</strong>. Each slot holds
              something, and you can find any item by its slot number. You can
              add new items to the end or remove items from anywhere.
            </p>
          </AnalogyBox>

          <Card className="mt-3">
            <CardContent className="p-6">
              <h3 className="font-display font-medium text-lg mb-2">
                Common list operations
              </h3>
              <div className="font-mono text-sm leading-8">
                <span className="text-sage-500">append()</span> &mdash; add to
                end
                <br />
                <span className="text-sage-500">remove()</span> &mdash; delete
                item
                <br />
                <span className="text-sage-500">sort()</span> &mdash;
                alphabetize
                <br />
                <span className="text-sage-500">len()</span> &mdash; count items
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SlideLayout>
  );
}
