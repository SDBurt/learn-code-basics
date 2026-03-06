import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Topic } from "@/data/topics";
import { TOPICS } from "@/data/topics";

interface TopicSlideshowProps {
  topic: Topic;
}

export function TopicSlideshow({ topic }: TopicSlideshowProps) {
  const [current, setCurrent] = useState(0);
  const [showNavHint, setShowNavHint] = useState(
    () => !sessionStorage.getItem("nav-hint-dismissed")
  );
  const total = topic.slides.length;

  const navigate = useCallback(
    (dir: number) => {
      setCurrent((prev) => {
        const next = prev + dir;
        if (next < 0 || next >= total) return prev;
        return next;
      });
    },
    [total]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (
        e.key === "ArrowRight" ||
        e.key === "ArrowDown" ||
        e.key === " "
      ) {
        e.preventDefault();
        navigate(1);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        navigate(-1);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [navigate]);

  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const onStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const onEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
        navigate(dx < 0 ? 1 : -1);
      }
    };

    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
  }, [navigate]);

  const topicIndex = TOPICS.findIndex((t) => t.slug === topic.slug);
  const nextTopic = TOPICS[topicIndex + 1];
  const isLastSlide = current === total - 1;

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-sage-100 px-4 py-3">
        <div className="max-w-[900px] mx-auto flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-1 text-sm text-sage-400 hover:text-sage-600 transition-colors shrink-0"
          >
            <ChevronLeft className="h-4 w-4" />
            Topics
          </Link>

          <h1 className="font-display font-semibold text-sage-700 text-sm truncate text-right sm:text-center flex-1">
            {topic.slides[current].title}
          </h1>

          <div className="hidden sm:flex items-center gap-1 shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              disabled={current === 0}
              aria-label="Previous slide"
              className="w-8 h-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-xs text-sage-400 tabular-nums w-10 text-center">
              {current + 1}/{total}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(1)}
              disabled={isLastSlide}
              aria-label="Next slide"
              className="w-8 h-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <span className="sm:hidden text-xs text-sage-400 tabular-nums shrink-0">
            {current + 1}/{total}
          </span>
        </div>
      </header>

      {showNavHint && (
        <div className="bg-pink-50 border-b border-pink-100 px-4 py-2 text-center relative">
          <p className="text-xs text-sage-500">
            <span className="hidden sm:inline">Use <kbd className="bg-white border border-sage-200 rounded px-1.5 py-0.5 font-mono text-sage-600 text-[0.65rem]">&larr;</kbd> <kbd className="bg-white border border-sage-200 rounded px-1.5 py-0.5 font-mono text-sage-600 text-[0.65rem]">&rarr;</kbd> arrow keys to navigate</span>
            <span className="sm:hidden">Swipe left or right to navigate</span>
          </p>
          <button
            onClick={() => {
              setShowNavHint(false);
              sessionStorage.setItem("nav-hint-dismissed", "1");
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-sage-400 hover:text-sage-600 transition-colors p-1"
            aria-label="Dismiss hint"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Slides */}
      <main className="flex-1 relative overflow-hidden">
        {topic.slides.map((slide, i) => {
          const SlideComponent = slide.component;
          return <SlideComponent key={i} active={i === current} />;
        })}
      </main>

      {/* Mobile navigation */}
      <div className="sm:hidden border-t border-sage-100 grid grid-cols-2">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          disabled={current === 0}
          className="rounded-none h-12 text-sage-500 disabled:text-sage-300"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Button>
        <Button
          variant="ghost"
          onClick={() => navigate(1)}
          disabled={isLastSlide}
          className="rounded-none h-12 text-sage-500 disabled:text-sage-300 border-l border-sage-100"
        >
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>

      {/* Bottom indicator */}
      <footer className="bg-white/90 backdrop-blur-sm border-t border-sage-100 px-4 py-3 text-center">
        {isLastSlide ? (
          nextTopic ? (
            <Link
              to={`/topic/${nextTopic.slug}`}
              className="text-sm text-sage-500 hover:text-sage-700 transition-colors"
            >
              Next topic:{" "}
              <span className="font-medium text-sage-600">
                {nextTopic.name}
              </span>
              <ChevronRight className="inline h-4 w-4 ml-0.5" />
            </Link>
          ) : (
            <Link
              to="/"
              className="text-sm text-sage-500 hover:text-sage-700 transition-colors"
            >
              Back to Topics
            </Link>
          )
        ) : (
          <span className="text-xs text-sage-400">
            Up next{" "}
            <span className="font-medium text-sage-500">
              {topic.slides[current + 1].title}
            </span>
          </span>
        )}
      </footer>
    </div>
  );
}
