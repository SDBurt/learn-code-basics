import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { HowTeamsWorkSlide } from "./how-teams-work";

describe("HowTeamsWorkSlide", () => {
  it("renders the heading containing How Teams Work", () => {
    render(<HowTeamsWorkSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("How");
    expect(heading).toHaveTextContent("Teams");
    expect(heading).toHaveTextContent("Work");
  });

  it("renders all role cards", () => {
    render(<HowTeamsWorkSlide active={true} />);
    expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
    expect(screen.getByText("Backend Developer")).toBeInTheDocument();
    expect(screen.getByText("Full-Stack Developer")).toBeInTheDocument();
    expect(screen.getByText("Designer (UI/UX)")).toBeInTheDocument();
    expect(screen.getByText("Product Manager")).toBeInTheDocument();
    expect(screen.getByText("QA / Tester")).toBeInTheDocument();
    expect(screen.getByText("DevOps / SRE")).toBeInTheDocument();
    expect(screen.getByText("Tech Lead / Architect")).toBeInTheDocument();
  });

  it("renders all workflow steps", () => {
    render(<HowTeamsWorkSlide active={true} />);
    expect(screen.getByText("Plan")).toBeInTheDocument();
    expect(screen.getByText("Design")).toBeInTheDocument();
    expect(screen.getByText("Build")).toBeInTheDocument();
    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByText("Deploy")).toBeInTheDocument();
    expect(screen.getByText("Monitor")).toBeInTheDocument();
  });

  it("renders the analogy box", () => {
    render(<HowTeamsWorkSlide active={true} />);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
    expect(
      screen.getByText(/dev team is like a film crew/)
    ).toBeInTheDocument();
  });
});
