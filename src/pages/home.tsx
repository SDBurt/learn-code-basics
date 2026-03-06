import { Link } from "react-router-dom";
import { BookOpen, HelpCircle, Laugh } from "lucide-react";
import { TOPICS } from "@/data/topics";
import { TopicCard } from "@/components/topic-card";

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <header className="mb-12">
          <h1 className="font-display font-bold text-3xl text-sage-700 mb-2">
            Learn Code Basics
          </h1>
          <p className="text-sage-500 text-lg">
            Understand what developers actually do -- no coding required.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2">
          {TOPICS.map((topic, i) => (
            <TopicCard key={topic.slug} topic={topic} index={i} />
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Link
            to="/terminology"
            data-sparkle
            className="group block rounded-2xl border border-pink-200 bg-gradient-to-r from-pink-50 to-sage-50 p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
          >
            <BookOpen className="h-5 w-5 text-pink-400 mb-3" />
            <h3 className="font-display font-bold text-xl text-sage-700 mb-1 group-hover:text-sage-800 transition-colors">
              Terminology Glossary
            </h3>
            <p className="text-base text-sage-500 leading-relaxed">
              Searchable reference of 80+ programming and tech terms.
            </p>
          </Link>

          <Link
            to="/quiz"
            data-sparkle
            className="group block rounded-2xl border border-sage-200 bg-gradient-to-r from-sage-50 to-pink-50 p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
          >
            <HelpCircle className="h-5 w-5 text-sage-400 mb-3" />
            <h3 className="font-display font-bold text-xl text-sage-700 mb-1 group-hover:text-sage-800 transition-colors">
              Test Your Knowledge
            </h3>
            <p className="text-base text-sage-500 leading-relaxed">
              20-question quiz covering everything you've learned.
            </p>
          </Link>

          <Link
            to="/coding-humor"
            data-sparkle
            className="group block rounded-2xl border border-pink-200 bg-gradient-to-r from-pink-50 to-sage-50 p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
          >
            <Laugh className="h-5 w-5 text-pink-400 mb-3" />
            <h3 className="font-display font-bold text-xl text-sage-700 mb-1 group-hover:text-sage-800 transition-colors">
              Coding Humor
            </h3>
            <p className="text-base text-sage-500 leading-relaxed">
              Jokes and quotes every developer knows and loves.
            </p>
          </Link>
        </div>

        <footer className="mt-16 pt-6 border-t border-sage-100 text-center">
          <p className="text-sm text-sage-400">
            Built with{" "}
            <span className="text-pink-400" aria-label="love">&hearts;</span>
            {" "}by{" "}
            <a
              href="https://sdburt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-500 hover:text-pink-500 transition-colors underline underline-offset-2"
            >
              sdburt
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
