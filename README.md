# Learn Code Basics

An interactive learning platform that explains what developers actually do -- no coding required. Built for anyone who wants to understand the world of software without writing a single line of code.

## What's Inside

- **7 Topic Slide Decks** -- Basics, The Web, Developer Tools, The Big Picture, AI & Data, Mobile & Beyond, each with interactive demos, analogies, and beginner-friendly explanations
- **Terminology Glossary** -- 80+ searchable terms across 6 categories with card and list views
- **Knowledge Quiz** -- 20 shuffled multiple-choice questions with instant feedback and scoring
- **Coding Humor** -- 30 curated jokes, one-liners, and quotes with tooltip explainers for non-technical readers

## Features

- Swipe and arrow-key navigation for slides
- Interactive demos (DNS lookup, login simulation, type sorter, list builder, and more)
- Tooltip explainers on jokes for people who don't get the reference
- Responsive mobile design with full-width nav buttons and back-to-top
- Dismissible navigation hints (persisted via sessionStorage)
- Pre-commit hook runs build, lint, and tests automatically

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4 with a custom sage/pink/cream palette
- shadcn/ui components
- React Router DOM
- Vitest (249 tests)
- Husky pre-commit hooks
- Lucide React icons
- Fraunces (display) and DM Sans (body) fonts

## Getting Started

```sh
# Install dependencies
make install

# Start the dev server
make dev

# Run tests
make test

# Type-check and build for production
make build

# Run ESLint
make lint

# See all available commands
make help
```

## Project Structure

```
src/
  components/
    shared/       # Reusable components (SlideLayout, CodeBlock, AnalogyBox, BackToTop, etc.)
    slides/       # Individual slide components for each topic
    ui/           # shadcn/ui primitives (Button, Card, Badge, Tooltip, etc.)
  data/
    topics.ts     # Central registry of all topics and slides
  pages/
    home.tsx          # Landing page with topic cards and footer
    topic-page.tsx    # Slide viewer with swipe/keyboard navigation
    terminology.tsx   # Searchable glossary with card and list views
    quiz.tsx          # Multiple-choice quiz with scoring
    coding-humor.tsx  # Developer jokes with tooltip explainers
```
