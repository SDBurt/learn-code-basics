import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { PathwaysSlide } from "./pathways";

describe("PathwaysSlide", () => {
  it("renders the heading", () => {
    render(<PathwaysSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Coding Pathways");
  });

  it("renders all six pathway cards", () => {
    render(<PathwaysSlide active={true} />);
    expect(screen.getByText("Web Development")).toBeInTheDocument();
    expect(screen.getByText("Data Science & AI")).toBeInTheDocument();
    expect(screen.getByText("Mobile Apps")).toBeInTheDocument();
    expect(screen.getByText("Game Development")).toBeInTheDocument();
    expect(screen.getByText("Automation")).toBeInTheDocument();
    expect(screen.getByText("Hardware & Firmware")).toBeInTheDocument();
  });

  it("renders technology tags for each pathway", () => {
    render(<PathwaysSlide active={true} />);
    expect(screen.getByText("Websites & web apps")).toBeInTheDocument();
    expect(screen.getByText("Data, charts & AI")).toBeInTheDocument();
    expect(screen.getByText("Saving time with scripts")).toBeInTheDocument();
    expect(
      screen.getByText("Physical devices & electronics")
    ).toBeInTheDocument();
  });
});
