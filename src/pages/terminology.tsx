import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, LayoutGrid, List } from "lucide-react";
import { BackToTop } from "@/components/shared/back-to-top";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Term {
  name: string;
  definition: string;
  category: string;
}

const CATEGORIES = [
  "All",
  "Core Concepts",
  "Web & Internet",
  "Developer Tools",
  "Teamwork",
  "Data & Storage",
  "Security",
] as const;

const terms: Term[] = [
  // Core Concepts
  {
    name: "Script",
    definition:
      "A file containing code that can be run to perform a task. Like a recipe the computer follows from top to bottom.",
    category: "Core Concepts",
  },
  {
    name: "Algorithm",
    definition:
      "A step-by-step set of instructions for solving a problem. Like a recipe with precise steps to get a specific result.",
    category: "Core Concepts",
  },
  {
    name: "Variable",
    definition:
      "A named container that stores a value, like a labeled box. The value can change as the program runs.",
    category: "Core Concepts",
  },
  {
    name: "Function",
    definition:
      "A reusable block of code that performs a specific task. You define it once and can call it whenever you need it.",
    category: "Core Concepts",
  },
  {
    name: "Loop",
    definition:
      "Code that repeats a set of instructions multiple times, like reading each item on a shopping list one by one.",
    category: "Core Concepts",
  },
  {
    name: "Conditional",
    definition:
      'An if/else statement that makes decisions in code. "If it\'s raining, bring an umbrella; else, wear sunglasses."',
    category: "Core Concepts",
  },
  {
    name: "Data Type",
    definition:
      "The kind of value a piece of data is -- text (string), number (integer/float), or true/false (boolean).",
    category: "Core Concepts",
  },
  {
    name: "String",
    definition:
      'A data type for text, written in quotes. "Hello, world!" is a string.',
    category: "Core Concepts",
  },
  {
    name: "Boolean",
    definition:
      "A data type with only two possible values: true or false. Used for yes/no decisions in code.",
    category: "Core Concepts",
  },
  {
    name: "Array / List",
    definition:
      "An ordered collection of items. Like a numbered shopping list where each item has a position.",
    category: "Core Concepts",
  },
  {
    name: "Object / Dictionary",
    definition:
      'A collection of key-value pairs. Like a contact card: name -> "Alice", phone -> "555-1234".',
    category: "Core Concepts",
  },
  {
    name: "Class",
    definition:
      "A blueprint for creating objects. Defines what properties and behaviors a thing should have.",
    category: "Core Concepts",
  },
  {
    name: "Library",
    definition:
      "Pre-written code that you can use in your project. Like borrowing a tool instead of building one from scratch.",
    category: "Core Concepts",
  },
  {
    name: "Framework",
    definition:
      "A larger structure of pre-built code that provides a foundation for building apps. It tells you where to put your code.",
    category: "Core Concepts",
  },
  {
    name: "Package",
    definition:
      "A bundle of code (usually a library) that can be downloaded and added to your project with a package manager.",
    category: "Core Concepts",
  },
  {
    name: "Syntax",
    definition:
      "The rules for how code must be written in a particular language. Like grammar rules for English.",
    category: "Core Concepts",
  },
  {
    name: "Runtime",
    definition:
      "The environment where your code actually executes. When someone says 'at runtime,' they mean while the program is running.",
    category: "Core Concepts",
  },
  {
    name: "Compile",
    definition:
      "Converting code from a human-readable language into machine code the computer can execute directly.",
    category: "Core Concepts",
  },
  {
    name: "Bug",
    definition: "An error or unexpected behavior in code. Named after a real moth found in an early computer.",
    category: "Core Concepts",
  },
  {
    name: "Refactor",
    definition:
      "Rewriting code to be cleaner or more efficient without changing what it does. Like reorganizing a closet.",
    category: "Core Concepts",
  },

  // Web & Internet
  {
    name: "API",
    definition:
      "Application Programming Interface -- a set of rules that lets different software talk to each other. Like a waiter taking your order to the kitchen.",
    category: "Web & Internet",
  },
  {
    name: "REST API",
    definition:
      "A common style of API that uses standard HTTP methods (GET, POST, PUT, DELETE) to interact with resources.",
    category: "Web & Internet",
  },
  {
    name: "Endpoint",
    definition:
      'A specific URL where an API can be accessed. Like a specific counter at a post office for different services.',
    category: "Web & Internet",
  },
  {
    name: "HTTP",
    definition:
      "HyperText Transfer Protocol -- the rules for how browsers and servers communicate. The language of the web.",
    category: "Web & Internet",
  },
  {
    name: "HTTPS",
    definition:
      "The secure version of HTTP. Data is encrypted so nobody can eavesdrop on the conversation between browser and server.",
    category: "Web & Internet",
  },
  {
    name: "URL",
    definition:
      "Uniform Resource Locator -- the address of a page or resource on the internet.",
    category: "Web & Internet",
  },
  {
    name: "DNS",
    definition:
      'Domain Name System -- translates human-readable domain names (like google.com) into IP addresses computers understand.',
    category: "Web & Internet",
  },
  {
    name: "Frontend",
    definition:
      "The part of an app users see and interact with -- buttons, text, images, forms. Built with HTML, CSS, and JavaScript.",
    category: "Web & Internet",
  },
  {
    name: "Backend",
    definition:
      "The server-side part of an app that handles logic, databases, and authentication. Users never see it directly.",
    category: "Web & Internet",
  },
  {
    name: "Full-Stack",
    definition:
      "Working on both the frontend and backend of an application. A full-stack developer can build the entire app.",
    category: "Web & Internet",
  },
  {
    name: "Server",
    definition:
      "A computer that listens for requests and sends back responses. It serves your website or app to users.",
    category: "Web & Internet",
  },
  {
    name: "Client",
    definition:
      "The device or app making a request -- usually a web browser or mobile app on the user's side.",
    category: "Web & Internet",
  },
  {
    name: "JSON",
    definition:
      'JavaScript Object Notation -- a lightweight format for sending data between systems. Looks like: {"name": "Alice", "age": 25}.',
    category: "Web & Internet",
  },
  {
    name: "Cloud",
    definition:
      "Remote servers you rent instead of owning. Services like AWS, Google Cloud, and Azure provide cloud computing.",
    category: "Web & Internet",
  },
  {
    name: "Deploy",
    definition:
      "Pushing your code to a server so real users can access it. Taking your app from your computer to the internet.",
    category: "Web & Internet",
  },
  {
    name: "Domain",
    definition:
      "The human-readable name for a website (like google.com). You register a domain so people can find your site.",
    category: "Web & Internet",
  },
  {
    name: "Hosting",
    definition:
      "Storing your website or app on a server so it's accessible on the internet, 24/7.",
    category: "Web & Internet",
  },
  {
    name: "Latency",
    definition:
      "The delay between a request and a response. Low latency means things feel fast. High latency means things feel slow.",
    category: "Web & Internet",
  },
  {
    name: "Cache",
    definition:
      "A temporary storage layer that saves frequently used data so it can be retrieved faster next time.",
    category: "Web & Internet",
  },
  {
    name: "Load Balancer",
    definition:
      "A system that distributes incoming traffic across multiple servers so no single server gets overwhelmed.",
    category: "Web & Internet",
  },
  {
    name: "Webhook",
    definition:
      'A way for one app to notify another when something happens. Like a doorbell -- it calls you when someone arrives.',
    category: "Web & Internet",
  },

  // Developer Tools
  {
    name: "Git",
    definition:
      "A version control system that tracks changes to code. Like a detailed undo history for your entire project.",
    category: "Developer Tools",
  },
  {
    name: "Repo (Repository)",
    definition:
      "A project folder tracked by Git, containing all the code and its complete change history.",
    category: "Developer Tools",
  },
  {
    name: "Commit",
    definition:
      'A saved snapshot of your code changes, with a message describing what changed. Like a checkpoint in a game.',
    category: "Developer Tools",
  },
  {
    name: "Branch",
    definition:
      "A parallel copy of code where you can work without affecting the main version. Merged back when ready.",
    category: "Developer Tools",
  },
  {
    name: "Merge",
    definition:
      "Combining changes from one branch into another. Bringing your work back into the main codebase.",
    category: "Developer Tools",
  },
  {
    name: "Pull Request (PR)",
    definition:
      'A proposal to merge your code changes. Other developers review it before it goes into the main branch.',
    category: "Developer Tools",
  },
  {
    name: "Code Review",
    definition:
      "When another developer reads your code before it's merged. Catches bugs and improves quality.",
    category: "Developer Tools",
  },
  {
    name: "IDE",
    definition:
      "Integrated Development Environment -- a code editor with built-in tools for debugging, testing, and more. VS Code is the most popular.",
    category: "Developer Tools",
  },
  {
    name: "Terminal / CLI",
    definition:
      "A text-based interface for running commands on your computer. Developers use it constantly.",
    category: "Developer Tools",
  },
  {
    name: "CI/CD",
    definition:
      "Continuous Integration / Continuous Deployment -- automated systems that test and deploy code whenever changes are made.",
    category: "Developer Tools",
  },
  {
    name: "Linter",
    definition:
      "A tool that checks your code for style issues and potential errors. Like a grammar checker for code.",
    category: "Developer Tools",
  },
  {
    name: "Debugging",
    definition:
      "The process of finding and fixing errors in code. One of the most common (and sometimes frustrating) developer activities.",
    category: "Developer Tools",
  },
  {
    name: "Stack Trace",
    definition:
      "A list of function calls that shows where an error occurred in your code. Like breadcrumbs leading to the bug.",
    category: "Developer Tools",
  },
  {
    name: "Environment Variable",
    definition:
      "A value stored outside your code (like an API key or database URL) that can change between environments without modifying the code.",
    category: "Developer Tools",
  },
  {
    name: "Docker / Container",
    definition:
      "A way to package an app with everything it needs to run, so it works the same on any machine.",
    category: "Developer Tools",
  },
  {
    name: "npm / pip / yarn",
    definition:
      "Package managers that let you install and manage libraries. npm for JavaScript, pip for Python, yarn as an npm alternative.",
    category: "Developer Tools",
  },
  {
    name: "Localhost",
    definition:
      'Your own computer acting as a server during development. When you see "localhost:3000," that\'s your app running locally.',
    category: "Developer Tools",
  },

  // Teamwork
  {
    name: "Agile",
    definition:
      "A project management approach based on short work cycles (sprints), frequent feedback, and adapting to change.",
    category: "Teamwork",
  },
  {
    name: "Sprint",
    definition:
      "A 1-2 week work cycle where a team focuses on delivering specific features or fixes.",
    category: "Teamwork",
  },
  {
    name: "Standup",
    definition:
      'A quick daily meeting (usually 15 min) where each person shares what they did, what they\'re doing, and what\'s blocking them.',
    category: "Teamwork",
  },
  {
    name: "Ticket / Issue",
    definition:
      "A task or bug report tracked in a tool like Jira or GitHub Issues. Each piece of work gets its own ticket.",
    category: "Teamwork",
  },
  {
    name: "Backlog",
    definition:
      "The list of all planned work that hasn't been started yet. Teams pull items from the backlog into each sprint.",
    category: "Teamwork",
  },
  {
    name: "Scrum",
    definition:
      "A specific Agile framework with defined roles (Scrum Master, Product Owner) and ceremonies (standups, retros).",
    category: "Teamwork",
  },
  {
    name: "Retrospective (Retro)",
    definition:
      "A meeting at the end of a sprint where the team reflects on what went well and what to improve.",
    category: "Teamwork",
  },
  {
    name: "Tech Debt",
    definition:
      "Shortcuts taken in code that work now but will need to be fixed later. Like patching a leaky pipe instead of replacing it.",
    category: "Teamwork",
  },
  {
    name: "Scope Creep",
    definition:
      'When a project keeps getting bigger with new requirements that weren\'t in the original plan.',
    category: "Teamwork",
  },
  {
    name: "Shipping",
    definition:
      'Releasing a feature or product to users. "We shipped it!" means it\'s live.',
    category: "Teamwork",
  },
  {
    name: "DevOps",
    definition:
      "Practices that combine development and IT operations to automate deployments and keep systems reliable.",
    category: "Teamwork",
  },
  {
    name: "Stack",
    definition:
      'The combination of technologies used to build an app. "MERN stack" means MongoDB, Express, React, Node.js.',
    category: "Teamwork",
  },

  // Data & Storage
  {
    name: "Database",
    definition:
      "An organized collection of data stored electronically. Like a giant, searchable spreadsheet for your app.",
    category: "Data & Storage",
  },
  {
    name: "SQL",
    definition:
      "Structured Query Language -- the language used to ask questions and manage data in relational databases.",
    category: "Data & Storage",
  },
  {
    name: "NoSQL",
    definition:
      "Databases that don't use traditional tables. More flexible, good for unstructured data. Examples: MongoDB, Firebase.",
    category: "Data & Storage",
  },
  {
    name: "Query",
    definition:
      'A request for specific data from a database. "Get all users who signed up this month" is a query.',
    category: "Data & Storage",
  },
  {
    name: "Schema",
    definition:
      "The structure or blueprint of a database -- what tables exist, what columns they have, and how they relate.",
    category: "Data & Storage",
  },
  {
    name: "Migration",
    definition:
      "A controlled change to a database structure. Like remodeling a room in a house that's already built.",
    category: "Data & Storage",
  },
  {
    name: "CRUD",
    definition:
      "Create, Read, Update, Delete -- the four basic operations for managing data. Almost every app does CRUD.",
    category: "Data & Storage",
  },
  {
    name: "ORM",
    definition:
      "Object-Relational Mapping -- a tool that lets you interact with a database using your programming language instead of SQL.",
    category: "Data & Storage",
  },

  // Security
  {
    name: "Authentication",
    definition:
      'Verifying who someone is. "Are you really who you say you are?" Logging in is authentication.',
    category: "Security",
  },
  {
    name: "Authorization",
    definition:
      'Checking what someone is allowed to do. "You\'re logged in, but can you access this admin page?"',
    category: "Security",
  },
  {
    name: "Encryption",
    definition:
      "Scrambling data so only authorized parties can read it. HTTPS uses encryption to protect your web traffic.",
    category: "Security",
  },
  {
    name: "Token",
    definition:
      'A digital pass that proves your identity. After logging in, your browser uses a token instead of re-sending your password.',
    category: "Security",
  },
  {
    name: "Hash",
    definition:
      "A one-way transformation of data into a fixed-length string. Passwords are hashed so they can't be reversed.",
    category: "Security",
  },
  {
    name: "OAuth",
    definition:
      'A standard for letting apps access your data without sharing your password. Powers "Sign in with Google" buttons.',
    category: "Security",
  },
  {
    name: "SSL / TLS",
    definition:
      "Security protocols that encrypt data between your browser and a server. The 'S' in HTTPS.",
    category: "Security",
  },
  {
    name: "Firewall",
    definition:
      "A security system that monitors and controls incoming and outgoing network traffic based on rules.",
    category: "Security",
  },
];

type ViewMode = "cards" | "list";

export function TerminologyPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [view, setView] = useState<ViewMode>("cards");

  const filtered = terms.filter((term) => {
    const matchesSearch =
      search === "" ||
      term.name.toLowerCase().includes(search.toLowerCase()) ||
      term.definition.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || term.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <Link
          to="/"
          className="flex items-center gap-1 text-sm text-sage-400 hover:text-sage-600 transition-colors mb-6"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Topics
        </Link>

        <header className="mb-8">
          <h1 className="font-display font-bold text-3xl text-sage-700 mb-2">
            Terminology
          </h1>
          <p className="text-sage-500 text-lg">
            A searchable glossary of common programming and tech terms.
            No jargon left behind.
          </p>
        </header>

        <div className="space-y-4 mb-6">
          <Input
            placeholder="Search terms..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-sage-200 focus-visible:border-pink-300 focus-visible:ring-pink-200/50 w-full h-11 text-base"
          />
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <Button
                key={cat}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className={
                  activeCategory === cat
                    ? "bg-pink-500 hover:bg-pink-600 text-white"
                    : "bg-sage-100 text-sage-600 hover:bg-sage-200"
                }
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-sage-400">
            {filtered.length} {filtered.length === 1 ? "term" : "terms"} found
          </p>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setView("cards")}
              aria-label="Card view"
              className={`w-8 h-8 ${view === "cards" ? "text-sage-700 bg-sage-100" : "text-sage-400"}`}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setView("list")}
              aria-label="List view"
              className={`w-8 h-8 ${view === "list" ? "text-sage-700 bg-sage-100" : "text-sage-400"}`}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {view === "cards" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filtered.map((term) => (
              <Card key={term.name} className="border-sage-200 bg-white">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="font-semibold text-sage-600">{term.name}</p>
                    <span className="text-[0.6rem] uppercase tracking-wider text-pink-400 font-semibold shrink-0 mt-0.5">
                      {term.category}
                    </span>
                  </div>
                  <p className="text-sm text-warm-gray leading-relaxed">
                    {term.definition}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-0 border border-sage-200 rounded-xl overflow-hidden">
            {filtered.map((term, i) => (
              <div
                key={term.name}
                className={`flex flex-col sm:flex-row gap-1 sm:gap-4 px-5 py-3.5 ${i !== 0 ? "border-t border-sage-100" : ""} hover:bg-sage-50/50 transition-colors`}
              >
                <div className="sm:w-1/5 sm:shrink-0">
                  <p className="font-semibold text-sage-600 text-sm">{term.name}</p>
                  <span className="text-[0.55rem] uppercase tracking-wider text-pink-400 font-semibold">
                    {term.category}
                  </span>
                </div>
                <p className="text-sm text-warm-gray leading-relaxed flex-1">
                  {term.definition}
                </p>
              </div>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-12 text-sage-400">
            <p className="text-lg mb-1">No terms found</p>
            <p className="text-sm">Try a different search or category.</p>
          </div>
        )}
      </div>
      <BackToTop />
    </div>
  );
}
