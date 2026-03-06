import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { WelcomeSlide } from "./welcome";

describe("WelcomeSlide", () => {
  it("renders the main heading", () => {
    render(<WelcomeSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("What is Code?");
  });

  it("renders the recipe analogy", () => {
    render(<WelcomeSlide active={true} />);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
    expect(screen.getByText(/recipe for a cake/)).toBeInTheDocument();
  });

  it("renders both comparison cards", () => {
    render(<WelcomeSlide active={true} />);
    expect(screen.getByText("Human Language")).toBeInTheDocument();
    expect(
      screen.getByText(/Take the price of the item, add 20% tax/)
    ).toBeInTheDocument();
    const headings = screen.getAllByRole("heading", { level: 3 });
    const codeHeading = headings.find((h) => h.textContent === "Code");
    expect(codeHeading).toBeDefined();
  });

  it("renders the overline text", () => {
    render(<WelcomeSlide active={true} />);
    expect(screen.getByText("A Gentle Introduction")).toBeInTheDocument();
  });
});
