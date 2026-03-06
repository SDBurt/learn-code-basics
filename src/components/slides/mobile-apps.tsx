import { Card, CardContent } from "@/components/ui/card";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";

const mobileFeatures = [
  {
    name: "Touch Interface",
    desc: "Taps, swipes, pinches -- mobile apps are designed for fingers, not mice.",
  },
  {
    name: "GPS & Location",
    desc: "Your phone knows where you are, so apps can give you directions, find nearby restaurants, and more.",
  },
  {
    name: "Camera & Sensors",
    desc: "Apps can access your camera, microphone, accelerometer, and other hardware built into your phone.",
  },
  {
    name: "Push Notifications",
    desc: "Apps can send you alerts even when you're not using them -- like a text message from an app.",
  },
];

const lifecycle = [
  { step: "Download", desc: "You find the app in an app store and download it to your device." },
  { step: "Install", desc: "The app is unpacked and set up on your phone, ready to launch." },
  { step: "Run", desc: "You open the app. It loads into memory and starts responding to your taps." },
  { step: "Update", desc: "Developers push new versions with bug fixes and features. Your phone downloads the update." },
];

const platforms = [
  {
    name: "iOS (iPhone/iPad)",
    desc: "Apple's mobile operating system. Apps are built with Swift or Objective-C and distributed through the App Store.",
  },
  {
    name: "Android",
    desc: "Google's mobile OS, used by Samsung, Pixel, and many others. Apps are built with Kotlin or Java and found on Google Play.",
  },
];

export function MobileAppsSlide({ active }: { active: boolean }) {
  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-sage-50 via-cream to-pink-50"
    >
      <Blob color="sage" className="w-[350px] h-[350px] -top-20 -left-24" />
      <Blob color="pink" className="w-[250px] h-[250px] bottom-10 -right-16" />

      <Overline variant="sage">Mobile &amp; Beyond</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        Mobile <span className="text-pink-500">Apps</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        Mobile apps are software designed to run on smartphones and tablets.
        They&rsquo;re built differently from websites because they need to work
        with touchscreens, sensors, and limited battery life.
      </p>

      <div className="stagger-item">
        <AnalogyBox>
          <p>
            A mobile app is like a tiny storefront that lives in your pocket.
            It&rsquo;s always with you, knows your location, and can tap you on
            the shoulder (notifications) whenever something important happens.
          </p>
        </AnalogyBox>
      </div>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            What Makes Mobile Different
          </h3>
          <div className="space-y-2">
            {mobileFeatures.map((f) => (
              <div
                key={f.name}
                className="bg-white rounded-xl p-3 border border-sage-200"
              >
                <p className="font-semibold text-sage-600 text-sm">{f.name}</p>
                <p className="text-xs text-warm-gray">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
              Platforms
            </h3>
            <div className="space-y-2.5">
              {platforms.map((p) => (
                <Card key={p.name} className="border-sage-200">
                  <CardContent className="p-4">
                    <p className="font-semibold text-sage-600">{p.name}</p>
                    <p className="text-sm text-warm-gray">{p.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            App Lifecycle
          </h3>
          <div className="space-y-2">
            {lifecycle.map((l, i) => (
              <div
                key={l.step}
                className="flex gap-3 items-start bg-white rounded-xl p-3 border border-sage-200"
              >
                <span className="bg-pink-100 text-pink-600 font-bold text-sm w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-sage-600 text-sm">
                    {l.step}
                  </p>
                  <p className="text-xs text-warm-gray">{l.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-pink-50 rounded-xl p-4 border border-pink-200">
            <p className="text-sm text-warm-gray">
              <strong className="text-sage-600">Fun fact:</strong> The average
              person has over 80 apps installed on their phone, but only uses
              about 9 per day. Mobile apps account for over 90% of time spent
              on phones.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
