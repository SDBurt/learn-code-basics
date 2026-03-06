import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { WhatIsAiSlide } from "./what-is-ai";

describe("WhatIsAiSlide", () => {
  it("renders the heading containing AI", () => {
    render(<WhatIsAiSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("AI");
  });

  it("renders all AI type cards", () => {
    render(<WhatIsAiSlide active={true} />);
    expect(screen.getByText("Narrow AI")).toBeInTheDocument();
    expect(screen.getByText("General AI")).toBeInTheDocument();
    expect(screen.getByText("Generative AI")).toBeInTheDocument();
  });

  it("renders the timeline items", () => {
    render(<WhatIsAiSlide active={true} />);
    expect(screen.getByText("1950s")).toBeInTheDocument();
    expect(screen.getByText("1980s")).toBeInTheDocument();
    expect(screen.getByText("2010s")).toBeInTheDocument();
    expect(screen.getByText("2020s")).toBeInTheDocument();
  });

  it("renders the analogy box", () => {
    render(<WhatIsAiSlide active={true} />);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
    expect(
      screen.getByText(/learns from examples rather than being told exact rules/)
    ).toBeInTheDocument();
  });
});
