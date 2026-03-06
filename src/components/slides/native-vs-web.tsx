import { Card, CardContent } from "@/components/ui/card";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";

const approaches = [
  {
    name: "Native Apps",
    languages: "Swift (iOS), Kotlin (Android)",
    pros: "Fastest performance, full access to device features, best user experience",
    cons: "Need separate codebases for each platform, more expensive to build",
    color: "bg-sage-50 border-sage-200",
  },
  {
    name: "Web Apps",
    languages: "HTML, CSS, JavaScript",
    pros: "Works in any browser, easy to update, one codebase for all devices",
    cons: "Slower performance, limited device access, no app store presence",
    color: "bg-pink-50 border-pink-200",
  },
  {
    name: "Cross-Platform",
    languages: "React Native, Flutter, .NET MAUI",
    pros: "One codebase for both iOS and Android, faster development, lower cost",
    cons: "Slightly slower than native, may lag behind new platform features",
    color: "bg-cream border-amber-200",
  },
];

const comparison = [
  {
    category: "Performance",
    native: "Excellent -- direct hardware access",
    web: "Good -- limited by browser",
    cross: "Very good -- near-native speed",
  },
  {
    category: "Development Cost",
    native: "High -- two separate apps",
    web: "Low -- one codebase",
    cross: "Medium -- one codebase, some platform tweaks",
  },
  {
    category: "Device Access",
    native: "Full -- camera, GPS, Bluetooth, everything",
    web: "Limited -- basic sensors only",
    cross: "Most -- plugins for common features",
  },
  {
    category: "Updates",
    native: "Requires app store review",
    web: "Instant -- just update the server",
    cross: "Requires app store review",
  },
];

export function NativeVsWebSlide({ active }: { active: boolean }) {
  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-sage-50 to-cream"
    >
      <Blob color="sage" className="w-[350px] h-[350px] -top-20 -right-24" />
      <Blob color="pink" className="w-[250px] h-[250px] bottom-10 -left-16" />

      <Overline variant="sage">Mobile &amp; Beyond</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        Native vs Web vs <span className="text-pink-500">Cross-Platform</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        There are three main ways to build mobile apps, each with different
        trade-offs between performance, cost, and reach.
      </p>

      <div className="stagger-item">
        <AnalogyBox>
          <p>
            Native apps are like a custom-tailored suit &mdash; perfect fit but
            expensive. Web apps are like off-the-rack &mdash; works everywhere
            but not perfectly. Cross-platform is like made-to-measure &mdash; a
            good middle ground.
          </p>
        </AnalogyBox>
      </div>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            Three Approaches
          </h3>
          <div className="space-y-2.5">
            {approaches.map((a) => (
              <Card key={a.name} className={a.color}>
                <CardContent className="p-4">
                  <p className="font-semibold text-sage-600">{a.name}</p>
                  <p className="text-xs text-warm-gray mt-1">
                    <strong>Languages:</strong> {a.languages}
                  </p>
                  <p className="text-xs text-warm-gray">
                    <strong className="text-sage-500">{"\u{2713}"} Pros:</strong>{" "}
                    {a.pros}
                  </p>
                  <p className="text-xs text-warm-gray">
                    <strong className="text-pink-500">{"\u{2717}"} Cons:</strong>{" "}
                    {a.cons}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            Side-by-Side Comparison
          </h3>
          <div className="space-y-2">
            {comparison.map((c) => (
              <div
                key={c.category}
                className="bg-white rounded-xl p-3 border border-sage-200"
              >
                <p className="font-semibold text-sage-600 text-sm mb-1">
                  {c.category}
                </p>
                <div className="grid grid-cols-3 gap-2 text-xs text-warm-gray">
                  <div>
                    <span className="font-semibold text-sage-500">Native:</span>{" "}
                    {c.native}
                  </div>
                  <div>
                    <span className="font-semibold text-pink-500">Web:</span>{" "}
                    {c.web}
                  </div>
                  <div>
                    <span className="font-semibold text-amber-600">Cross:</span>{" "}
                    {c.cross}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-pink-50 rounded-xl p-4 border border-pink-200">
            <p className="text-sm text-warm-gray">
              <strong className="text-sage-600">Bottom line:</strong> Most
              startups choose cross-platform (React Native or Flutter) to save
              time and money. Big companies like Apple and Google build native.
              Simple apps often work great as web apps.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
