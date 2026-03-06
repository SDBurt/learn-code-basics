import { Card, CardContent } from "@/components/ui/card";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";

const categories = [
  {
    name: "Smart Home",
    desc: "Thermostats that learn your schedule, lights you control with your voice, and doorbells that show you who's there.",
    examples: "Nest, Philips Hue, Ring",
    color: "bg-sage-50 border-sage-200",
  },
  {
    name: "Wearables",
    desc: "Devices you wear that track your health, show notifications, and even make payments.",
    examples: "Apple Watch, Fitbit, Oura Ring",
    color: "bg-pink-50 border-pink-200",
  },
  {
    name: "Industrial IoT",
    desc: "Sensors in factories, farms, and warehouses that monitor conditions and automate processes.",
    examples: "Factory sensors, smart agriculture, supply chain tracking",
    color: "bg-cream border-amber-200",
  },
  {
    name: "Automotive",
    desc: "Connected cars that update over the air, report diagnostics, and even drive themselves.",
    examples: "Tesla, Waymo, connected fleet management",
    color: "bg-sage-50 border-sage-200",
  },
];

const tools = [
  {
    name: "Arduino",
    desc: "A beginner-friendly microcontroller board. Great for learning embedded programming and building simple projects.",
  },
  {
    name: "Raspberry Pi",
    desc: "A tiny, affordable computer. Runs Linux and can be used for everything from home servers to robots.",
  },
  {
    name: "ESP32",
    desc: "A low-cost chip with built-in Wi-Fi and Bluetooth. Popular for IoT projects that need wireless connectivity.",
  },
  {
    name: "MicroPython",
    desc: "A version of Python designed for microcontrollers. Makes embedded programming accessible to beginners.",
  },
];

const concepts = [
  {
    term: "Sensor",
    plain: "A device that detects changes in the environment -- temperature, motion, light, pressure.",
  },
  {
    term: "Actuator",
    plain: "A device that takes action -- turning on a motor, opening a valve, switching a light.",
  },
  {
    term: "Embedded System",
    plain: "A small computer built into a device to perform a specific task, like a thermostat or car engine controller.",
  },
  {
    term: "Edge Computing",
    plain: "Processing data on the device itself instead of sending everything to the cloud. Faster and more private.",
  },
];

export function IotSlide({ active }: { active: boolean }) {
  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-sage-50 via-cream to-pink-50"
    >
      <Blob color="sage" className="w-[350px] h-[350px] -top-20 -left-24" />
      <Blob color="pink" className="w-[250px] h-[250px] bottom-10 -right-16" />

      <Overline variant="sage">Mobile &amp; Beyond</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        Internet of <span className="text-pink-500">Things</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        IoT is about connecting everyday objects to the internet so they can
        send data, receive instructions, and work together. From smart fridges
        to factory robots, billions of devices are now online.
      </p>

      <div className="stagger-item">
        <AnalogyBox>
          <p>
            IoT is like giving everyday objects a brain and a phone &mdash; your
            fridge can text you when you&rsquo;re out of milk, your watch can
            call for help if you fall, and your thermostat learns when
            you&rsquo;re home.
          </p>
        </AnalogyBox>
      </div>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            IoT Categories
          </h3>
          <div className="space-y-2.5">
            {categories.map((c) => (
              <Card key={c.name} className={c.color}>
                <CardContent className="p-4">
                  <p className="font-semibold text-sage-600">{c.name}</p>
                  <p className="text-xs text-warm-gray">{c.desc}</p>
                  <p className="text-xs text-warm-gray mt-1">
                    <strong className="text-sage-500">Examples:</strong>{" "}
                    {c.examples}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

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

          <div className="mt-4">
            <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
              Getting Started
            </h3>
            <div className="space-y-2">
              {tools.map((t) => (
                <div
                  key={t.name}
                  className="bg-white rounded-xl p-3 border border-sage-200"
                >
                  <p className="font-semibold text-sage-600 text-sm">{t.name}</p>
                  <p className="text-xs text-warm-gray">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
