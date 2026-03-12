import { useState, useCallback, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  SlideLayout,
  Overline,
  Blob,
} from "@/components/shared/slide-layout";
import { SlideQA } from "@/components/shared/slide-qa";
import { InfoTip } from "@/components/shared/info-tip";

interface BackendStep {
  label: ReactNode;
  icon: string;
}

const backendSteps: BackendStep[] = [
  {
    label: (
      <>
        Check{" "}
        <InfoTip term="authentication">
          Checking that you are who you say you are -- like showing your ID at a
          door.
        </InfoTip>
      </>
    ),
    icon: "Lock",
  },
  {
    label: (
      <>
        Save to{" "}
        <InfoTip term="database">
          A place where the app stores information permanently, like a digital
          filing cabinet. You&apos;ll learn more about this on a later slide.
        </InfoTip>
      </>
    ),
    icon: "DB",
  },
  { label: "Notify followers", icon: "Bell" },
];

export function FrontendBackendSlide({ active }: { active: boolean }) {
  const [isPosted, setIsPosted] = useState(false);
  const [activeSteps, setActiveSteps] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = useCallback(() => {
    setIsLiked((prev) => !prev);
  }, []);

  const handlePost = useCallback(() => {
    if (isPosted) return;
    setIsPosted(true);
    setActiveSteps(0);

    setTimeout(() => setActiveSteps(1), 500);
    setTimeout(() => setActiveSteps(2), 1000);
    setTimeout(() => setActiveSteps(3), 1500);
  }, [isPosted]);

  return (
    <SlideLayout
      active={active}
      className="bg-gradient-to-br from-pink-50 via-cream to-pink-100"
    >
      <Blob color="pink" className="w-[320px] h-[320px] -top-16 -right-24" />
      <Blob color="sage" className="w-[220px] h-[220px] bottom-8 -left-20" />

      <Overline variant="sage">How the Web Works</Overline>

      <h1 className="stagger-item font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight mb-4">
        <span className="text-sage-600">Frontend vs </span>
        <strong className="text-sage-600">Backend</strong>
      </h1>

      <p className="stagger-item text-lg text-warm-gray mb-6 max-w-[720px]">
        Frontend is what you see &mdash; buttons, colors, layouts. Backend is
        the invisible machinery &mdash; storing data, checking passwords,
        sending notifications.
      </p>

      <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Frontend side */}
        <div>
          <h3 className="font-display font-semibold text-lg text-pink-500 mb-3">
            Frontend
          </h3>
          <Card className="border-pink-200 bg-white">
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-300 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  DS
                </div>
                <span className="font-medium text-sage-600">dev_sarah</span>
              </div>

              <p className="text-warm-gray text-[0.95rem]">
                Just shipped a new feature!
              </p>

              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  className={
                    isLiked
                      ? "border-pink-400 bg-pink-50 text-pink-600"
                      : "border-pink-200 text-pink-500 hover:bg-pink-50"
                  }
                  size="sm"
                  onClick={handleLike}
                >
                  &hearts; {isLiked ? "Liked" : "Like"}
                </Button>
                <Button
                  onClick={handlePost}
                  disabled={isPosted}
                  className="bg-pink-500 hover:bg-pink-600 text-white"
                  size="sm"
                >
                  Post
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Backend side */}
        <div>
          <h3 className="font-display font-semibold text-lg text-sage-500 mb-3">
            Backend
          </h3>
          <div className="space-y-3">
            {backendSteps.map((step, index) => {
              const isActive = activeSteps > index;

              return (
                <div
                  key={step.icon}
                  className={
                    isActive
                      ? "flex items-center gap-3 rounded-xl border border-sage-300 bg-sage-50 p-4 transition-colors duration-300"
                      : "flex items-center gap-3 rounded-xl border border-sage-200 bg-white p-4 transition-colors duration-300 opacity-50"
                  }
                >
                  <span className="text-sm font-mono text-sage-400 shrink-0">
                    {step.icon}
                  </span>
                  <span
                    className={
                      isActive
                        ? "text-sage-600 font-medium flex-1"
                        : "text-warm-gray flex-1"
                    }
                  >
                    {step.label}
                  </span>
                  {isActive && (
                    <Badge className="bg-sage-500 text-white">Done</Badge>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <SlideQA
        items={[
          {
            question: "Can I see the backend?",
            answer:
              "Not directly. The backend runs on a server somewhere else -- you only see what it sends back to your browser. When you post a photo on Instagram, you see the photo appear (frontend), but you don't see the server saving it, checking your login, or notifying your followers (backend).",
          },
          {
            question: "Do all websites have a backend?",
            answer:
              "Not all. Simple websites that just show text and images (like a personal blog) might only have a frontend. But anything that has user accounts, stores data, or needs to process information (like online shopping) needs a backend.",
          },
          {
            question: "Who builds the frontend vs the backend?",
            answer:
              "Some developers specialize in one or the other -- 'frontend developers' and 'backend developers'. Some do both and are called 'full-stack developers'. It's like how in a restaurant, some people cook (backend) and some serve tables (frontend), but some small restaurants have people who do both.",
          },
        ]}
      />
    </SlideLayout>
  );
}
