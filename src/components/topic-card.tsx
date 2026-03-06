import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import type { Topic } from "@/data/topics";

interface TopicCardProps {
  topic: Topic;
  index: number;
}

const ACCENT_COLORS = [
  "bg-sage-100 border-sage-200",
  "bg-pink-50 border-pink-200",
  "bg-amber-200/30 border-amber-200",
  "bg-sage-50 border-sage-200",
];

const ACCENT_DOTS = [
  "bg-sage-400",
  "bg-pink-400",
  "bg-amber-500",
  "bg-sage-300",
];

export function TopicCard({ topic, index }: TopicCardProps) {
  const colorClass = ACCENT_COLORS[index % ACCENT_COLORS.length];
  const dotClass = ACCENT_DOTS[index % ACCENT_DOTS.length];

  return (
    <Link
      to={`/topic/${topic.slug}`}
      data-sparkle
      className={`group block rounded-2xl border p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${colorClass}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className={`w-2 h-2 rounded-full ${dotClass}`} />
            <span className="text-xs font-medium text-sage-400 uppercase tracking-wider">
              {topic.slides.length} slides
            </span>
          </div>
          <h3 className="font-display font-bold text-xl text-sage-700 mb-1 group-hover:text-sage-800 transition-colors">
            {topic.name}
          </h3>
          <p className="text-base text-sage-500 leading-relaxed">
            {topic.description}
          </p>
        </div>
        <ChevronRight className="h-5 w-5 text-sage-300 group-hover:text-sage-500 transition-colors mt-1 shrink-0 ml-4" />
      </div>
    </Link>
  );
}
