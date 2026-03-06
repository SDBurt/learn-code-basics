import { Card, CardContent } from "@/components/ui/card";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";

const process = [
  { step: "Build", desc: "Developers write the code, design the interface, and test everything locally." },
  { step: "Submit", desc: "The finished app is packaged and uploaded to the app store for review." },
  { step: "Review", desc: "Apple or Google checks the app for bugs, security issues, and policy violations." },
  { step: "Approval", desc: "Once approved, the app is published and becomes available to download." },
  { step: "Distribution", desc: "Users discover the app through search, recommendations, or direct links." },
  { step: "Updates", desc: "Developers push new versions -- each update goes through review again." },
];

const stores = [
  {
    name: "Apple App Store",
    desc: "Strict review process, typically takes 1-3 days. Known for high quality standards and consistent guidelines.",
    highlight: "iOS / iPadOS / macOS",
    color: "bg-sage-50 border-sage-200",
  },
  {
    name: "Google Play Store",
    desc: "Faster review process, usually hours to a day. More lenient policies but still checks for malware and policy violations.",
    highlight: "Android / ChromeOS",
    color: "bg-pink-50 border-pink-200",
  },
];

const differences = [
  {
    category: "Review Time",
    apple: "1-3 days",
    google: "Hours to 1 day",
  },
  {
    category: "Developer Fee",
    apple: "$99/year",
    google: "$25 one-time",
  },
  {
    category: "Revenue Split",
    apple: "70/30 (developer/store)",
    google: "85/15 for first $1M, then 70/30",
  },
  {
    category: "Sideloading",
    apple: "Restricted (changing in EU)",
    google: "Allowed -- install from any source",
  },
];

export function AppStoresSlide({ active }: { active: boolean }) {
  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-cream to-sage-50"
    >
      <Blob color="pink" className="w-[350px] h-[350px] -top-20 -right-24" />
      <Blob color="sage" className="w-[250px] h-[250px] bottom-10 -left-16" />

      <Overline variant="pink">Mobile &amp; Beyond</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        App <span className="text-sage-500">Stores</span> & Distribution
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        App stores are the gatekeepers between developers and users. They handle
        discovery, payments, updates, and quality control for millions of apps.
      </p>

      <div className="stagger-item">
        <AnalogyBox>
          <p>
            App stores are like a curated farmers market &mdash; you submit your
            goods, they check quality, and then customers can find you. The
            market takes a cut of every sale, but in return you get foot traffic
            and trust.
          </p>
        </AnalogyBox>
      </div>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            From Code to Download
          </h3>
          <div className="space-y-2">
            {process.map((p, i) => (
              <div
                key={p.step}
                className="flex gap-3 items-start bg-white rounded-xl p-3 border border-sage-200"
              >
                <span className="bg-pink-100 text-pink-600 font-bold text-sm w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-sage-600 text-sm">
                    {p.step}
                  </p>
                  <p className="text-xs text-warm-gray">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            The Two Major Stores
          </h3>
          <div className="space-y-2.5">
            {stores.map((s) => (
              <Card key={s.name} className={s.color}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-semibold text-sage-600">{s.name}</p>
                    <span className="text-[0.65rem] uppercase tracking-wider text-pink-500 font-semibold">
                      {s.highlight}
                    </span>
                  </div>
                  <p className="text-xs text-warm-gray">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-4">
            <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
              Key Differences
            </h3>
            <div className="space-y-2">
              {differences.map((d) => (
                <div
                  key={d.category}
                  className="bg-white rounded-xl p-3 border border-sage-200"
                >
                  <p className="font-semibold text-sage-600 text-sm">
                    {d.category}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-warm-gray mt-1">
                    <div>
                      <span className="font-semibold text-sage-500">Apple:</span>{" "}
                      {d.apple}
                    </div>
                    <div>
                      <span className="font-semibold text-pink-500">Google:</span>{" "}
                      {d.google}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
