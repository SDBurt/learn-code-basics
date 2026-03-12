import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  SlideLayout,
  Overline,
  Blob,
} from "@/components/shared/slide-layout";
import { AnalogyBox } from "@/components/shared/analogy-box";
import { SlideQA } from "@/components/shared/slide-qa";

function domainToIp(domain: string): string {
  let hash = 0;
  for (let i = 0; i < domain.length; i++) {
    hash = (hash * 31 + domain.charCodeAt(i)) >>> 0;
  }
  const a = (hash & 0xff000000) >>> 24 || 1;
  const b = (hash & 0x00ff0000) >>> 16;
  const c = (hash & 0x0000ff00) >>> 8;
  const d = hash & 0x000000ff || 1;
  return `${a}.${b}.${c}.${d}`;
}

function getDnsSteps(domain: string, ip: string) {
  return [
    { number: 1, text: `You type: ${domain}`, badge: "Browser" },
    { number: 2, text: "DNS Resolver looks up the name", badge: "Search" },
    { number: 3, text: `Finds IP: ${ip}`, badge: "Result" },
    { number: 4, text: "Connects to the server at that address", badge: "Connected" },
  ];
}

const networkTerms = [
  {
    term: "IP Address",
    description:
      "A device's unique number on the network (like a street address)",
  },
  {
    term: "Port",
    description:
      "A specific door on a server (like apartment numbers in a building)",
  },
  {
    term: "Protocol",
    description:
      "The agreed-upon language for communication (HTTP, HTTPS, FTP)",
  },
  {
    term: "Firewall",
    description:
      "A security guard that decides which traffic gets in or out",
  },
];

export function NetworkingSlide({ active }: { active: boolean }) {
  const [domain, setDomain] = useState("google.com");
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const ip = domainToIp(domain);
  const dnsSteps = getDnsSteps(domain, ip);

  useEffect(() => {
    if (!isRunning || visibleSteps >= 4) return;

    const timer = setTimeout(() => {
      const next = visibleSteps + 1;
      setVisibleSteps(next);
      if (next >= 4) {
        setIsRunning(false);
        setIsComplete(true);
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [isRunning, visibleSteps]);

  const handleLookUp = useCallback(() => {
    if (!domain.trim()) return;
    setVisibleSteps(0);
    setIsComplete(false);
    setIsRunning(true);
  }, [domain]);

  const handleReset = useCallback(() => {
    setVisibleSteps(0);
    setIsRunning(false);
    setIsComplete(false);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !isRunning) {
        handleLookUp();
      }
    },
    [handleLookUp, isRunning],
  );

  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-sage-50 to-cream"
    >
      <Blob color="sage" className="w-[300px] h-[300px] -top-16 -right-24" />
      <Blob color="pink" className="w-[220px] h-[220px] bottom-8 -left-20" />

      <Overline variant="pink">Advanced Concepts</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-2">
        Networking &amp; <span className="text-pink-500">DNS</span>
      </h1>

      <p className="stagger-item text-sm text-sage-500 font-medium mb-5">
        DNS stands for Domain Name System
      </p>

      <p className="stagger-item text-lg text-warm-gray mb-5">
        Every device on the internet has a numeric address (like 192.168.1.1).
        DNS translates human-friendly names like &ldquo;google.com&rdquo; into
        these addresses so you don&rsquo;t have to memorize numbers.
      </p>

      <AnalogyBox>
        <p>
          DNS is like a <strong>phone book for the internet</strong>. You look up
          a name (google.com) and it gives you the number (142.250.80.46) so your
          computer knows where to connect.
        </p>
      </AnalogyBox>

      <div className="stagger-item mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column: Interactive DNS Lookup Journey */}
        <div>
          <h3 className="font-display font-medium text-lg mb-4 text-sage-600">
            DNS Lookup Journey
          </h3>

          <div className="flex gap-2 mb-4">
            <Input
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter a domain name"
              disabled={isRunning}
              className="border-sage-300 focus:border-pink-400 focus:ring-pink-300"
            />
            {!isComplete ? (
              <Button
                onClick={handleLookUp}
                disabled={isRunning || !domain.trim()}
                className="bg-pink-500 hover:bg-pink-600 text-white shrink-0"
              >
                Look Up
              </Button>
            ) : (
              <Button
                onClick={handleReset}
                variant="outline"
                className="border-sage-300 text-sage-600 hover:bg-sage-100 shrink-0"
              >
                Reset
              </Button>
            )}
          </div>

          <div className="flex flex-col items-stretch">
            {dnsSteps.map((step, index) => (
              <div
                key={step.number}
                className={`transition-all duration-300 ${
                  index < visibleSteps
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                <Card className="border border-sage-200 bg-sage-50">
                  <CardContent className="p-4 flex items-center gap-4">
                    <Badge className="bg-pink-500 text-white shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </Badge>
                    <div className="flex-1">
                      <p className="text-sage-600 font-medium text-sm">
                        {step.text}
                      </p>
                    </div>
                    <Badge className="bg-sage-100 text-sage-600 border border-sage-300 text-xs">
                      {step.badge}
                    </Badge>
                  </CardContent>
                </Card>

                {index < dnsSteps.length - 1 && (
                  <div className="flex justify-center py-1">
                    <span
                      className="text-sage-400 text-lg leading-none"
                      aria-hidden="true"
                    >
                      &#8595;
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {isComplete && (
            <div className="mt-3 flex justify-center animate-in fade-in duration-500">
              <Badge className="bg-green-500 text-white px-4 py-1.5 text-sm font-semibold">
                Connected!
              </Badge>
            </div>
          )}
        </div>

        {/* Right column: Common Network Terms */}
        <div>
          <Card className="border border-sage-200 bg-white">
            <CardContent className="p-5">
              <h3 className="font-display font-medium text-lg mb-4 text-sage-600">
                Common Network Terms
              </h3>

              <div className="space-y-4">
                {networkTerms.map((item) => (
                  <div key={item.term}>
                    <p className="font-semibold text-sm text-pink-600">
                      {item.term}
                    </p>
                    <p className="text-sm text-warm-gray leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <SlideQA
        items={[
          {
            question: "What's the difference between HTTP and HTTPS?",
            answer: "The 'S' stands for 'Secure'. HTTPS encrypts the data being sent back and forth so nobody can spy on it. That's why you see the little padlock icon in your browser -- it means the connection is encrypted. Always look for https:// when entering passwords or payment info."
          },
          {
            question: "Why can't we just use IP addresses instead of domain names?",
            answer: "You technically can! But remembering 142.250.80.46 is much harder than remembering google.com. DNS exists purely for human convenience -- computers still use IP addresses behind the scenes."
          }
        ]}
      />
    </SlideLayout>
  );
}
