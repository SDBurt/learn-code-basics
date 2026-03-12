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
    expect(screen.getByText("What you might say")).toBeInTheDocument();
    expect(
      screen.getByText(/Take the price, add the tax, and tell me the total/)
    ).toBeInTheDocument();
    const headings = screen.getAllByRole("heading", { level: 3 });
    const codeHeading = headings.find(
      (h) => h.textContent === "What you'd write for a computer"
    );
    expect(codeHeading).toBeDefined();
  });

  it("renders the ordered list in the computer card", () => {
    render(<WelcomeSlide active={true} />);
    expect(screen.getByText("The price is 50")).toBeInTheDocument();
    expect(
      screen.getByText("The total is the price plus the tax")
    ).toBeInTheDocument();
  });

  it("renders the overline text", () => {
    render(<WelcomeSlide active={true} />);
    expect(screen.getByText("A Gentle Introduction")).toBeInTheDocument();
  });
});
