import { useParams, Link } from "react-router-dom";
import { getTopicBySlug } from "@/data/topics";
import { TopicSlideshow } from "@/components/topic-slideshow";
import { usePageMeta } from "@/hooks/use-page-meta";

export function TopicPage() {
  const { slug } = useParams<{ slug: string }>();
  const topic = slug ? getTopicBySlug(slug) : undefined;

  usePageMeta(
    topic ? topic.name : "Topic Not Found",
    topic?.description,
  );

  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="font-display font-bold text-2xl text-sage-700 mb-2">
            Topic not found
          </h1>
          <p className="text-sage-500 mb-4">
            The topic "{slug}" doesn't exist.
          </p>
          <Link
            to="/"
            className="text-sm font-medium text-sage-600 hover:text-sage-800 underline"
          >
            Back to Topics
          </Link>
        </div>
      </div>
    );
  }

  return <TopicSlideshow topic={topic} />;
}
