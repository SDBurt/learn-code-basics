import { Card, CardContent } from "@/components/ui/card";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";
import { SlideQA } from "@/components/shared/slide-qa";

const providers = [
  {
    name: "AWS",
    desc: "Amazon Web Services -- the largest cloud platform, used by Netflix, Airbnb, and more.",
  },
  {
    name: "Google Cloud",
    desc: "Powers YouTube and Gmail. Strong in data analytics and machine learning.",
  },
  {
    name: "Azure",
    desc: "Microsoft's cloud. Popular with enterprise companies and integrates with Office 365.",
  },
];

const concepts = [
  {
    term: "Server",
    plain: "A computer that runs your app and responds to requests from users.",
  },
  {
    term: "Hosting",
    plain: "Putting your app on a server so people can access it via the internet.",
  },
  {
    term: "Scaling",
    plain: "Adding more resources (servers, memory) when your app gets more traffic.",
  },
  {
    term: "Serverless",
    plain: "You write code, and the cloud runs it for you -- no server management needed.",
  },
  {
    term: "Container",
    plain: "A lightweight package with everything your app needs to run, works the same everywhere.",
  },
];

export function CloudSlide({ active }: { active: boolean }) {
  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-sage-50 via-cream to-pink-50"
    >
      <Blob color="sage" className="w-[350px] h-[350px] -top-20 -left-24" />
      <Blob color="pink" className="w-[250px] h-[250px] bottom-10 -right-16" />

      <Overline variant="sage">How the Web Works</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        Cloud & <span className="text-pink-500">Hosting</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        The "cloud" isn&rsquo;t magic &mdash; it&rsquo;s just someone
        else&rsquo;s computers. Instead of buying your own servers, you rent
        computing power from companies like Amazon, Google, or Microsoft.
      </p>

      <div className="stagger-item">
        <AnalogyBox>
          <p>
            The cloud is like renting an apartment instead of building a house.
            You get a place to live (run your app) without worrying about
            plumbing, electricity, or maintenance &mdash; the landlord (cloud
            provider) handles that.
          </p>
        </AnalogyBox>
      </div>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
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
        </div>

        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            Major Cloud Providers
          </h3>
          <div className="space-y-2.5">
            {providers.map((p) => (
              <Card key={p.name} className="border-sage-200">
                <CardContent className="p-4">
                  <p className="font-semibold text-sage-600">{p.name}</p>
                  <p className="text-sm text-warm-gray">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-4 bg-pink-50 rounded-xl p-4 border border-pink-200">
            <p className="text-sm text-warm-gray">
              <strong className="text-sage-600">Fun fact:</strong> When you
              scroll through social media, watch a video, or check the weather,
              the data is almost certainly coming from one of these cloud
              providers.
            </p>
          </div>
        </div>
      </div>

      <SlideQA
        items={[
          {
            question: "Is 'the cloud' just someone else's computer?",
            answer: "Essentially, yes! When people say 'in the cloud', they mean 'on computers owned and managed by a company like Amazon, Google, or Microsoft'. Instead of buying and maintaining your own servers, you rent space on theirs."
          },
          {
            question: "Why don't companies just use their own computers?",
            answer: "Running your own servers means buying hardware, keeping it cool, fixing things when they break, and making sure it's always on. Cloud providers handle all of that, and you can easily add more power when you need it -- like renting a bigger apartment instead of building a new house."
          }
        ]}
      />
    </SlideLayout>
  );
}
