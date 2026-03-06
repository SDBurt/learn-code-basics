import { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { BackToTop } from "@/components/shared/back-to-top";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { usePageMeta } from "@/hooks/use-page-meta";

interface Question {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic: string;
}

const QUESTIONS: Question[] = [
  {
    question: "What is a variable?",
    options: [
      "A named container for data",
      "A type of loop",
      "A programming language",
      "A file format",
    ],
    correctIndex: 0,
    explanation:
      "A variable is a named container that stores a value. Think of it like a labeled box that can hold different things.",
    topic: "Basics",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "High Tech Machine Language",
      "HyperText Markup Language",
      "Home Tool Management Language",
      "Hyper Transfer Markup Layer",
    ],
    correctIndex: 1,
    explanation:
      "HTML stands for HyperText Markup Language. It is the standard language used to structure content on web pages.",
    topic: "Web",
  },
  {
    question: "What is an API?",
    options: [
      "A programming language",
      "A way for apps to communicate",
      "A type of database",
      "An operating system",
    ],
    correctIndex: 1,
    explanation:
      "An API (Application Programming Interface) defines rules for how different software systems talk to each other.",
    topic: "Web",
  },
  {
    question: "What does Git do?",
    options: [
      "Runs your code",
      "Designs websites",
      "Tracks code changes",
      "Tests for bugs",
    ],
    correctIndex: 2,
    explanation:
      "Git is a version control system that tracks changes to code over time, like a detailed undo history for your project.",
    topic: "Dev Tools",
  },
  {
    question: "What is the frontend?",
    options: [
      "The database",
      "The server",
      "What users see and interact with",
      "The network layer",
    ],
    correctIndex: 2,
    explanation:
      "The frontend is the part of an application that users see and interact with -- buttons, text, images, and forms.",
    topic: "Web",
  },
  {
    question: "What is a boolean?",
    options: [
      "A decimal number",
      "A true/false value",
      "A list of items",
      "A text string",
    ],
    correctIndex: 1,
    explanation:
      "A boolean is a data type with only two possible values: true or false. It is used for yes/no decisions in code.",
    topic: "Basics",
  },
  {
    question: "What is debugging?",
    options: [
      "Adding new features",
      "Finding and fixing errors",
      "Deploying code",
      "Writing documentation",
    ],
    correctIndex: 1,
    explanation:
      "Debugging is the process of finding and fixing errors (bugs) in code. It is one of the most common developer activities.",
    topic: "Dev Tools",
  },
  {
    question: "What does DNS do?",
    options: [
      "Encrypts data",
      "Translates domain names to IP addresses",
      "Stores passwords",
      "Runs JavaScript",
    ],
    correctIndex: 1,
    explanation:
      "DNS (Domain Name System) translates human-readable domain names like google.com into IP addresses that computers understand.",
    topic: "Web",
  },
  {
    question: "What is a function?",
    options: [
      "A reusable block of code",
      "A type of variable",
      "A database query",
      "A CSS style",
    ],
    correctIndex: 0,
    explanation:
      "A function is a reusable block of code that performs a specific task. You define it once and can call it whenever you need it.",
    topic: "Basics",
  },
  {
    question: "What is a sprint in Agile?",
    options: [
      "A type of test",
      "A 1-2 week work cycle",
      "A programming language",
      "A deployment tool",
    ],
    correctIndex: 1,
    explanation:
      "A sprint is a 1-2 week work cycle where a team focuses on delivering specific features or fixes.",
    topic: "Big Picture",
  },
  {
    question: "What is SQL used for?",
    options: [
      "Styling web pages",
      "Managing database data",
      "Building mobile apps",
      "Version control",
    ],
    correctIndex: 1,
    explanation:
      "SQL (Structured Query Language) is the language used to ask questions and manage data in relational databases.",
    topic: "Big Picture",
  },
  {
    question: "What is a pull request?",
    options: [
      "Downloading code",
      "A proposal to merge code changes",
      "A bug report",
      "A server request",
    ],
    correctIndex: 1,
    explanation:
      "A pull request is a proposal to merge your code changes into the main branch. Other developers review it before it is accepted.",
    topic: "Dev Tools",
  },
  {
    question: "What is caching?",
    options: [
      "Deleting old data",
      "Storing frequently used data for faster access",
      "Encrypting files",
      "A type of database",
    ],
    correctIndex: 1,
    explanation:
      "Caching is a temporary storage layer that saves frequently used data so it can be retrieved faster next time.",
    topic: "Big Picture",
  },
  {
    question: "What is the backend?",
    options: [
      "The user interface",
      "The server-side logic and databases",
      "The CSS styles",
      "The mobile app",
    ],
    correctIndex: 1,
    explanation:
      "The backend is the server-side part of an application that handles logic, databases, and authentication. Users never see it directly.",
    topic: "Web",
  },
  {
    question: "What is a container (Docker)?",
    options: [
      "A file format",
      "A packaged app with all its dependencies",
      "A type of variable",
      "A testing framework",
    ],
    correctIndex: 1,
    explanation:
      "A Docker container packages an application with everything it needs to run, so it works the same on any machine.",
    topic: "Dev Tools",
  },
  {
    question: "What is OAuth?",
    options: [
      "A programming language",
      "A standard for secure login without sharing passwords",
      "A database type",
      "A CSS framework",
    ],
    correctIndex: 1,
    explanation:
      "OAuth is a standard that lets apps access your data without sharing your password. It powers 'Sign in with Google' buttons.",
    topic: "Big Picture",
  },
  {
    question: "What is machine learning?",
    options: [
      "Teaching computers from data",
      "Installing software",
      "A programming language",
      "A type of server",
    ],
    correctIndex: 0,
    explanation:
      "Machine learning is a branch of AI where computers learn patterns from data rather than following explicit instructions.",
    topic: "AI",
  },
  {
    question: "What is a script?",
    options: [
      "A movie screenplay",
      "A file of code that runs top to bottom",
      "A database table",
      "A network protocol",
    ],
    correctIndex: 1,
    explanation:
      "In programming, a script is a file containing code that the computer executes from top to bottom to perform tasks.",
    topic: "Basics",
  },
  {
    question: "What is responsive design?",
    options: [
      "Fast loading pages",
      "Adapting layout to different screen sizes",
      "Server response time",
      "Code that responds to errors",
    ],
    correctIndex: 1,
    explanation:
      "Responsive design means building web pages that adapt their layout to look good on different screen sizes, from phones to desktops.",
    topic: "Mobile",
  },
  {
    question: "What is open source?",
    options: [
      "Code anyone can view and modify",
      "A type of API",
      "Free web hosting",
      "A testing framework",
    ],
    correctIndex: 0,
    explanation:
      "Open source refers to software whose source code is publicly available for anyone to view, use, and modify.",
    topic: "Big Picture",
  },
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function getResultMessage(percentage: number): string {
  if (percentage === 100) {
    return "Perfect score! You have a solid grasp of all the fundamentals.";
  }
  if (percentage >= 80) {
    return "Excellent work! You clearly understand most of the key concepts.";
  }
  if (percentage >= 60) {
    return "Good effort! Review the topics you missed and try again.";
  }
  if (percentage >= 40) {
    return "Not bad for a start. Go through the slides again and come back stronger.";
  }
  return "Looks like there is room to learn. Review the topics and give it another shot!";
}

export function QuizPage() {
  usePageMeta(
    "Test Your Knowledge",
    "20-question quiz on coding fundamentals, web development, developer tools, and more. See how much you've learned.",
  );
  const [questions, setQuestions] = useState<Question[]>(() =>
    shuffleArray(QUESTIONS)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentIndex];
  const progress = isFinished
    ? 100
    : ((currentIndex) / questions.length) * 100;
  const isCorrect =
    selectedOption !== null && selectedOption === currentQuestion?.correctIndex;

  const handleSelect = useCallback(
    (optionIndex: number) => {
      if (selectedOption !== null) return;
      setSelectedOption(optionIndex);
      if (optionIndex === currentQuestion.correctIndex) {
        setScore((prev) => prev + 1);
      }
    },
    [selectedOption, currentQuestion]
  );

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= questions.length) {
      setIsFinished(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
    }
  }, [currentIndex, questions.length]);

  const handleReset = useCallback(() => {
    setQuestions(shuffleArray(QUESTIONS));
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
  }, []);

  const percentage = useMemo(
    () => Math.round((score / questions.length) * 100),
    [score, questions.length]
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-10">
        <Link
          to="/"
          className="flex items-center gap-1 text-sm text-sage-400 hover:text-sage-600 transition-colors mb-6"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Topics
        </Link>

        <header className="mb-8">
          <h1 className="font-display font-bold text-3xl text-sage-700 mb-2">
            Knowledge Quiz
          </h1>
          <p className="text-sage-500 text-lg">
            Test what you have learned across all the topics.
          </p>
        </header>

        <div className="mb-6">
          <div className="flex justify-between text-sm text-sage-400 mb-2">
            <span>
              {isFinished
                ? "Complete"
                : `Question ${currentIndex + 1} of ${questions.length}`}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="bg-sage-100 [&>[data-slot=progress-indicator]]:bg-pink-400" />
        </div>

        {!isFinished && currentQuestion && (
          <Card className="border-sage-200 bg-white">
            <CardContent className="p-6">
              <span className="text-xs uppercase tracking-wider text-pink-400 font-semibold mb-2 block">
                {currentQuestion.topic}
              </span>
              <h2 className="font-display font-semibold text-xl text-sage-700 mb-6">
                {currentQuestion.question}
              </h2>

              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => {
                  let optionStyle =
                    "bg-sage-50 text-sage-600 hover:bg-sage-100 border-2 border-sage-200";

                  if (selectedOption !== null) {
                    if (index === currentQuestion.correctIndex) {
                      optionStyle =
                        "bg-emerald-100 text-emerald-900 border-2 border-emerald-500 font-semibold";
                    } else if (
                      index === selectedOption &&
                      index !== currentQuestion.correctIndex
                    ) {
                      optionStyle =
                        "bg-red-100 text-red-900 border-2 border-red-400";
                    } else {
                      optionStyle =
                        "bg-sage-50 text-sage-400 border-2 border-sage-200 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleSelect(index)}
                      disabled={selectedOption !== null}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors text-sm font-medium ${optionStyle} disabled:cursor-default`}
                    >
                      <span className="font-semibold mr-2">
                        {String.fromCharCode(65 + index)}.
                      </span>
                      {option}
                    </button>
                  );
                })}
              </div>

              {selectedOption !== null && (
                <div className="mt-6">
                  <div
                    className={`rounded-lg px-4 py-3 text-sm leading-relaxed ${
                      isCorrect
                        ? "bg-emerald-100 text-emerald-900 border border-emerald-400"
                        : "bg-red-100 text-red-900 border border-red-300"
                    }`}
                  >
                    <span className="font-semibold">
                      {isCorrect ? "Correct!" : "Incorrect."}
                    </span>{" "}
                    {currentQuestion.explanation}
                  </div>

                  <div className="mt-4 flex justify-end">
                    <Button
                      onClick={handleNext}
                      className="bg-pink-500 hover:bg-pink-600 text-white"
                    >
                      {currentIndex + 1 >= questions.length
                        ? "See Results"
                        : "Next"}
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {isFinished && (
          <Card className="border-sage-200 bg-white">
            <CardContent className="p-8 text-center">
              <h2 className="font-display font-bold text-2xl text-sage-700 mb-2">
                Quiz Complete
              </h2>
              <div className="my-6">
                <p className="text-5xl font-display font-bold text-pink-500 mb-1">
                  {score}/{questions.length}
                </p>
                <p className="text-lg text-sage-500">{percentage}% correct</p>
              </div>
              <p className="text-sage-600 text-sm leading-relaxed mb-8 max-w-md mx-auto">
                {getResultMessage(percentage)}
              </p>
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={handleReset}
                  className="bg-pink-500 hover:bg-pink-600 text-white"
                >
                  Try Again
                </Button>
                <Button
                  asChild
                  className="bg-sage-100 text-sage-600 hover:bg-sage-200"
                >
                  <Link to="/">Back to Topics</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
      <BackToTop />
    </div>
  );
}
