# Learn Code Basics

An interactive learning platform that explains what developers actually do -- no coding required. Built for anyone who wants to understand the world of software without writing a single line of code.

## What's Inside

- **7 Topic Slide Decks** -- Basics, The Web, Developer Tools, The Big Picture, AI & Data, Mobile & Beyond, each with interactive slides, analogies, and code examples
- **Terminology Glossary** -- 80+ searchable terms across 6 categories with card and list views
- **Knowledge Quiz** -- 20 shuffled multiple-choice questions with instant feedback and scoring
- **Coding Humor** -- Curated jokes, one-liners, and quotes every developer knows

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4 with a custom sage/pink/cream palette
- shadcn/ui components
- React Router DOM
- Vitest for testing
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

# See all available commands
make help
```

## Project Structure

```
src/
  components/
    shared/       # Reusable components (SlideLayout, CodeBlock, AnalogyBox, etc.)
    slides/       # Individual slide components for each topic
    ui/           # shadcn/ui primitives
  data/
    topics.ts     # Central registry of all topics and slides
  pages/
    home.tsx          # Landing page with topic cards
    topic-page.tsx    # Slide viewer with navigation
    terminology.tsx   # Searchable glossary
    quiz.tsx          # Multiple-choice quiz
    coding-humor.tsx  # Developer jokes and quotes
```
