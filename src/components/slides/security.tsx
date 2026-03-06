import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { SlideLayout, Overline, Blob } from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";

const threats = [
  {
    name: "Phishing",
    what: "Fake emails or websites designed to look real (like your bank) that trick you into typing your password or personal info.",
    example: 'An email saying "Your account has been locked! Click here to verify" that leads to a fake login page.',
    defense: "Always check the sender's email address and the website URL before clicking or entering info.",
  },
  {
    name: "SQL Injection",
    what: "SQL is the language used to talk to databases. In this attack, a hacker types special code into a form field (like a login box) to trick the database into giving up private data.",
    example: 'Typing something like \' OR 1=1 -- into a username field to bypass the login check.',
    defense: "Developers clean (sanitize) everything a user types before sending it to the database.",
  },
  {
    name: "Cross-Site Scripting (XSS)",
    what: "An attacker sneaks a tiny program (a script) into a website -- for example in a comment box. When other people visit that page, the script runs in their browser and can steal their data.",
    example: "Posting a comment that secretly contains code which steals login cookies from anyone who reads it.",
    defense: "Developers escape and filter all user-submitted content so hidden scripts can't run.",
  },
  {
    name: "Brute Force",
    what: "Trying every possible password combination one after another until the right one is found. Like trying every key on a giant keyring.",
    example: "A program automatically trying thousands of passwords per second on a login page.",
    defense: "Limit login attempts, require strong passwords, and use two-factor authentication (2FA).",
  },
];

const practices = [
  {
    rule: "Never store passwords in plain text",
    why: "Passwords are scrambled (hashed) so even if a database is stolen, the actual passwords can't be read.",
  },
  {
    rule: "Use HTTPS to encrypt data in transit",
    why: "HTTPS scrambles data as it travels between your browser and the server so nobody can eavesdrop. Look for the lock icon in your address bar.",
  },
  {
    rule: "Keep software up to date",
    why: "Updates often fix known security holes. Running old software is like leaving a window open that burglars already know about.",
  },
  {
    rule: "Principle of least privilege",
    why: "Only give people the minimum access they need. An intern shouldn't have admin access to delete the whole database.",
  },
  {
    rule: "Validate user input on the server",
    why: "Never trust what a user sends. Always double-check it on the server side, because someone could bypass the browser checks.",
  },
];

export function SecuritySlide({ active }: { active: boolean }) {
  const [expandedThreat, setExpandedThreat] = useState<number | null>(null);

  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-sage-50 to-cream"
    >
      <Blob color="sage" className="w-[350px] h-[350px] -top-20 -left-24" />
      <Blob color="pink" className="w-[250px] h-[250px] bottom-10 -right-16" />

      <Overline variant="sage">The Big Picture</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-5">
        Security <span className="text-pink-500">Basics</span>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        Security is about protecting apps and data from people who shouldn't
        have access. Think of it as the locks, alarms, and cameras for the
        digital world.
      </p>

      <div className="stagger-item">
        <AnalogyBox>
          <p>
            Security is like locking up a store at night. You check the doors
            (verify who's logging in), set the alarm (watch for suspicious
            activity), and make sure the safe is locked (scramble sensitive
            data). Developers do the digital version of this for every app.
          </p>
        </AnalogyBox>
      </div>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            Common Threats
          </h3>
          <p className="text-sm text-warm-gray mb-3">
            Click any threat to learn what it means and how developers defend against it.
          </p>
          <div className="space-y-2.5">
            {threats.map((t, i) => {
              const isExpanded = expandedThreat === i;
              return (
                <Card
                  key={t.name}
                  className={`cursor-pointer transition-all duration-200 ${
                    isExpanded
                      ? "border-pink-400 bg-white ring-2 ring-pink-200"
                      : "border-sage-200 hover:border-sage-300"
                  }`}
                  onClick={() => setExpandedThreat(isExpanded ? null : i)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-sage-600 text-sm">
                        {t.name}
                      </p>
                      <span className="text-sage-400 text-sm">
                        {isExpanded ? "−" : "+"}
                      </span>
                    </div>
                    {isExpanded && (
                      <div className="mt-3 space-y-2 output-enter">
                        <p className="text-sm text-warm-gray leading-relaxed">
                          <strong className="text-sage-600">What is it?</strong>{" "}
                          {t.what}
                        </p>
                        <p className="text-sm text-warm-gray leading-relaxed">
                          <strong className="text-sage-600">Example:</strong>{" "}
                          {t.example}
                        </p>
                        <div className="bg-sage-50 rounded-lg p-2.5 border border-sage-200">
                          <p className="text-sm text-sage-600">
                            <strong>Defense:</strong> {t.defense}
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="font-display font-medium text-lg mb-3 text-sage-600">
            Good Practices
          </h3>
          <div className="space-y-2">
            {practices.map((p, i) => (
              <div
                key={i}
                className="flex gap-3 items-start bg-white rounded-xl p-3 border border-sage-200"
              >
                <span className="bg-sage-100 text-sage-600 font-bold text-sm w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-medium text-sage-600">{p.rule}</p>
                  <p className="text-sm text-warm-gray leading-relaxed">{p.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
