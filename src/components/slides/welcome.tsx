import { Card, CardContent } from "@/components/ui/card";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";

export function WelcomeSlide({ active }: { active: boolean }) {
  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-pink-50 via-cream to-sage-50"
    >
      <Blob color="pink" className="w-[400px] h-[400px] -top-24 -right-24" />
      <Blob color="sage" className="w-[350px] h-[350px] -bottom-20 -left-16" />

      <Overline variant="sage">A Gentle Introduction</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        What is <span className="text-pink-500">Code</span>?
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-7">
        Code is simply a set of <strong>instructions</strong> that tells a
        computer what to do &mdash; like writing a recipe, but instead of
        cooking food, you're creating apps, websites, and so much more.
      </p>

      <AnalogyBox>
        <p>
          Imagine you're writing a recipe for a cake. You list the ingredients,
          the steps, and the order to do them in.{" "}
          <strong>Code is exactly that</strong> &mdash; but your kitchen is a
          computer, and instead of a cake, you might get a website, a game, or
          an app.
        </p>
      </AnalogyBox>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <Card className="hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-pink-100">
          <CardContent className="p-6">
            <span className="text-3xl mb-3 block">&#x1F4DD;</span>
            <h3 className="font-display font-medium text-lg mb-2">
              Human Language
            </h3>
            <p className="text-sm text-warm-gray">
              "Take the price of the item, add 20% tax, and show me the total"
            </p>
          </CardContent>
        </Card>

        <Card className="hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-pink-100">
          <CardContent className="p-6">
            <span className="text-3xl mb-3 block">&#x1F4BB;</span>
            <h3 className="font-display font-medium text-lg mb-2">Code</h3>
            <div className="code-block !mt-2 !p-3 !text-[0.8rem]">
              <span className="syn-kw">price</span>{" "}
              <span className="syn-br">=</span>{" "}
              <span className="syn-num">50</span>
              <br />
              <span className="syn-kw">tax</span>{" "}
              <span className="syn-br">=</span>{" "}
              <span className="syn-kw">price</span> *{" "}
              <span className="syn-num">0.20</span>
              <br />
              <span className="syn-kw">total</span>{" "}
              <span className="syn-br">=</span>{" "}
              <span className="syn-kw">price</span> +{" "}
              <span className="syn-kw">tax</span>
              <br />
              <span className="syn-bi">print</span>
              <span className="syn-br">(</span>
              <span className="syn-str">"Total:"</span>,{" "}
              <span className="syn-kw">total</span>
              <span className="syn-br">)</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </SlideLayout>
  );
}
