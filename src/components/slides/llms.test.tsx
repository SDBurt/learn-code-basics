import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LlmsSlide } from "./llms";

describe("LlmsSlide", () => {
  it("renders the heading containing Large Language Models", () => {
    render(<LlmsSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Large Language");
    expect(heading).toHaveTextContent("Models");
  });

  it("renders all facet cards", () => {
    render(<LlmsSlide active={true} />);
    expect(screen.getByText("How They're Trained")).toBeInTheDocument();
    expect(screen.getByText("What They Can Do")).toBeInTheDocument();
    expect(screen.getByText("What They Can't Do")).toBeInTheDocument();
  });

  it("renders popular LLM examples", () => {
    render(<LlmsSlide active={true} />);
    expect(screen.getByText("ChatGPT")).toBeInTheDocument();
    expect(screen.getByText("Claude")).toBeInTheDocument();
    expect(screen.getByText("Gemini")).toBeInTheDocument();
  });

  it("renders the analogy box", () => {
    render(<LlmsSlide active={true} />);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
    expect(
      screen.getByText(/autocomplete on your phone/)
    ).toBeInTheDocument();
  });

  it("renders the key insight callout", () => {
    render(<LlmsSlide active={true} />);
    expect(screen.getByText("Key insight:")).toBeInTheDocument();
  });
});
