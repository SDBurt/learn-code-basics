import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { HomePage } from "./home";

function renderHome() {
  return render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
}

describe("HomePage", () => {
  it("renders the page title", () => {
    renderHome();
    expect(
      screen.getByRole("heading", { name: /learn code basics/i })
    ).toBeInTheDocument();
  });

  it("renders all topic cards", () => {
    renderHome();
    expect(screen.getByText("Basics")).toBeInTheDocument();
    expect(screen.getByText("The Web")).toBeInTheDocument();
    expect(screen.getByText("Developer Tools")).toBeInTheDocument();
    expect(screen.getByText("The Big Picture")).toBeInTheDocument();
    expect(screen.getByText("AI & Data")).toBeInTheDocument();
    expect(screen.getByText("Mobile & Beyond")).toBeInTheDocument();
  });

  it("renders topic descriptions", () => {
    renderHome();
    expect(
      screen.getByText(/what code is, why it matters/i)
    ).toBeInTheDocument();
  });

  it("renders slide counts for each topic", () => {
    renderHome();
    expect(screen.getByText("13 slides")).toBeInTheDocument();
    expect(screen.getByText("10 slides")).toBeInTheDocument();
    expect(screen.getByText("8 slides")).toBeInTheDocument();
    expect(screen.getByText("7 slides")).toBeInTheDocument();
    expect(screen.getByText("5 slides")).toBeInTheDocument();
    expect(screen.getByText("4 slides")).toBeInTheDocument();
  });

  it("links each card to its topic page", () => {
    renderHome();
    const links = screen.getAllByRole("link");
    const hrefs = links.map((l) => l.getAttribute("href"));
    expect(hrefs).toContain("/topic/basics");
    expect(hrefs).toContain("/topic/the-web");
    expect(hrefs).toContain("/topic/developer-tools");
    expect(hrefs).toContain("/topic/the-big-picture");
    expect(hrefs).toContain("/topic/ai-and-data");
    expect(hrefs).toContain("/topic/mobile-and-beyond");
  });

  it("links to the terminology glossary and quiz", () => {
    renderHome();
    const links = screen.getAllByRole("link");
    const hrefs = links.map((l) => l.getAttribute("href"));
    expect(hrefs).toContain("/terminology");
    expect(hrefs).toContain("/quiz");
  });
});
