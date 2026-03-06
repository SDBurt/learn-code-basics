import { Card, CardContent } from "@/components/ui/card";
import { SlideLayout, Overline } from "@/components/shared/slide-layout";

const steps = [
  {
    num: 1,
    color: "border-l-pink-400",
    text: (
      <>
        You tap the app icon &mdash; the <strong>frontend</strong> (the app on
        your phone) loads up.
      </>
    ),
  },
  {
    num: 2,
    color: "border-l-sage-400",
    text: (
      <>
        The app sends a request to Instagram's <strong>server</strong>{" "}
        (backend): "Hey, show me the latest posts!"
      </>
    ),
  },
  {
    num: 3,
    color: "border-l-amber-400",
    text: (
      <>
        The server checks the <strong>database</strong> for posts from people
        you follow.
      </>
    ),
  },
  {
    num: 4,
    color: "border-l-pink-300",
    text: (
      <>
        Photos are loaded from <strong>storage</strong>, and your feed appears
        on screen!
      </>
    ),
  },
];

export function SystemsSlide({ active }: { active: boolean }) {
  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-sage-50 via-cream to-pink-50"
    >
      <Overline variant="sage">The Big Picture</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        How <span className="text-pink-500">Systems</span> Work Together
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        When you open an app like Instagram, a lot happens behind the scenes.
        Here's a simplified view:
      </p>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Diagram */}
        <div className="flex flex-col items-center gap-0">
          <div className="bg-pink-50 border-2 border-pink-400 rounded-2xl px-7 py-4 text-center min-w-[180px] hover:scale-[1.04] hover:shadow-lg transition-all">
            <div className="font-semibold">Frontend</div>
            <div className="text-xs text-warm-gray">
              What you see and tap on
            </div>
          </div>

          <div className="w-0.5 h-8 bg-gradient-to-b from-pink-300 to-sage-300 relative">
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-sage-300" />
          </div>

          <div className="bg-sage-50 border-2 border-sage-400 rounded-2xl px-7 py-4 text-center min-w-[180px] hover:scale-[1.04] hover:shadow-lg transition-all">
            <div className="font-semibold">Backend / API</div>
            <div className="text-xs text-warm-gray">
              Processes your requests
            </div>
          </div>

          <div className="w-0.5 h-8 bg-gradient-to-b from-sage-300 to-amber-300 relative">
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-amber-300" />
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-amber-50 border-2 border-amber-400 rounded-2xl px-7 py-4 text-center min-w-[140px] hover:scale-[1.04] hover:shadow-lg transition-all">
              <div className="font-semibold">Database</div>
              <div className="text-xs text-warm-gray">Stores all the data</div>
            </div>

            <div className="w-10 h-0.5 bg-gradient-to-r from-amber-300 to-pink-300" />

            <div className="bg-pink-50 border-2 border-pink-300 rounded-2xl px-7 py-4 text-center min-w-[140px] hover:scale-[1.04] hover:shadow-lg transition-all">
              <div className="font-semibold">Storage</div>
              <div className="text-xs text-warm-gray">Photos & videos</div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div>
          <h3 className="font-display font-medium text-lg mb-3">
            What happens when you open Instagram?
          </h3>
          <div className="space-y-2.5">
            {steps.map((s) => (
              <Card
                key={s.num}
                className={`border-l-[3px] ${s.color} hover:-translate-y-0.5 transition-all`}
              >
                <CardContent className="p-4">
                  <p className="text-sm">
                    <strong>{s.num}.</strong> {s.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
