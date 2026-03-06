import { Card, CardContent } from "@/components/ui/card";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";

const projects = [
  {
    icon: "\u{1F6D2}",
    title: "Online Store",
    desc: "Sell products with a shopping cart, payments, and order tracking.",
  },
  {
    icon: "\u{1F4F8}",
    title: "Social App",
    desc: "Share photos, follow friends, and send messages in real time.",
  },
  {
    icon: "\u{1F3B5}",
    title: "Music Player",
    desc: "Build your own Spotify-like app with playlists and recommendations.",
  },
  {
    icon: "\u{1F9E0}",
    title: "AI Chatbot",
    desc: "Create a smart assistant that answers questions and learns from conversations.",
  },
  {
    icon: "\u{1F4C8}",
    title: "Dashboard",
    desc: "Visualize data with charts \u2014 track fitness, finances, or business metrics.",
  },
  {
    icon: "\u{1F3AE}",
    title: "Games",
    desc: "From simple puzzles to multiplayer adventures with graphics and sound.",
  },
];

export function WhatYouBuildSlide({ active }: { active: boolean }) {
  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-pink-50 to-cream"
    >
      <Blob
        color="pink"
        className="w-[400px] h-[400px] -bottom-32 -right-32"
      />

      <Overline variant="pink">The Fun Part</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        What Can You <span className="text-sage-500">Build</span>?
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-4">
        With code, the possibilities are truly endless. Here are some real
        things people build:
      </p>

      <div className="stagger-item grid grid-cols-2 sm:grid-cols-3 gap-3.5">
        {projects.map((p) => (
          <Card
            key={p.title}
            className="text-center hover:-translate-y-1.5 hover:rotate-[-1deg] transition-all duration-400 hover:shadow-xl hover:shadow-pink-100/50"
          >
            <CardContent className="p-5">
              <span className="text-4xl mb-2.5 block">{p.icon}</span>
              <h3 className="font-display font-medium text-base mb-1.5">
                {p.title}
              </h3>
              <p className="text-xs text-warm-gray">{p.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SlideLayout>
  );
}
