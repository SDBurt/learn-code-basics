import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { TopicPage } from "./topic-page";

function renderTopicPage(slug: string) {
  return render(
    <MemoryRouter initialEntries={[`/topic/${slug}`]}>
      <Routes>
        <Route path="/topic/:slug" element={<TopicPage />} />
      </Routes>
    </MemoryRouter>
  );
}

describe("TopicPage", () => {
  it("renders the slideshow for a valid topic slug", () => {
    renderTopicPage("basics");
    expect(screen.getByText("What is Code?")).toBeInTheDocument();
    expect(screen.getAllByText(/1\/14/).length).toBeGreaterThanOrEqual(1);
  });

  it("renders 404 for an invalid slug", () => {
    renderTopicPage("nonexistent");
    expect(screen.getByText(/topic not found/i)).toBeInTheDocument();
    expect(screen.getByText(/nonexistent/)).toBeInTheDocument();
  });

  it("provides a back link on 404", () => {
    renderTopicPage("nonexistent");
    const link = screen.getByRole("link", { name: /back to topics/i });
    expect(link).toHaveAttribute("href", "/");
  });
});
