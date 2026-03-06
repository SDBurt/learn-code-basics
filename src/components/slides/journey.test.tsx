import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { JourneySlide } from "./journey";

describe("JourneySlide", () => {
  it("renders the heading", () => {
    render(<JourneySlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Get It");
  });

  it("renders all four takeaway cards", () => {
    render(<JourneySlide active={true} />);
    expect(screen.getByText("You now know the vocabulary")).toBeInTheDocument();
    expect(screen.getByText("You understand the building blocks")).toBeInTheDocument();
    expect(screen.getByText("You can follow the conversation")).toBeInTheDocument();
    expect(screen.getByText("You see the bigger picture")).toBeInTheDocument();
  });

  it("renders the closing quote", () => {
    render(<JourneySlide active={true} />);
    expect(
      screen.getByText("Understanding is the first step to great conversations.")
    ).toBeInTheDocument();
  });
});
