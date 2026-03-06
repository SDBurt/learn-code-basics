import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CachingSlide } from "./caching";

describe("CachingSlide", () => {
  it("renders the heading", () => {
    render(<CachingSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Caching");
  });

  it("renders both cache scenario sections", () => {
    render(<CachingSlide active={true} />);
    expect(screen.getByText("Without Cache")).toBeInTheDocument();
    expect(screen.getByText("With Cache")).toBeInTheDocument();
  });

  it("renders the analogy box", () => {
    render(<CachingSlide active={true} />);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
    expect(screen.getByText(/sticky note on your desk/)).toBeInTheDocument();
  });
});
