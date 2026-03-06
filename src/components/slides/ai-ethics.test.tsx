import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AiEthicsSlide } from "./ai-ethics";

describe("AiEthicsSlide", () => {
  it("renders the heading containing AI Ethics", () => {
    render(<AiEthicsSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("AI");
    expect(heading).toHaveTextContent("Ethics");
  });

  it("renders all concern cards", () => {
    render(<AiEthicsSlide active={true} />);
    expect(screen.getByText("Bias & Fairness")).toBeInTheDocument();
    expect(screen.getByText("Privacy")).toBeInTheDocument();
    expect(screen.getByText("Job Displacement")).toBeInTheDocument();
    expect(screen.getByText("Misinformation")).toBeInTheDocument();
    expect(screen.getByText("Transparency")).toBeInTheDocument();
  });

  it("renders good practices list", () => {
    render(<AiEthicsSlide active={true} />);
    expect(
      screen.getByText(/diverse, representative training data/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/human in the loop/)
    ).toBeInTheDocument();
  });

  it("renders the analogy box", () => {
    render(<AiEthicsSlide active={true} />);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
    expect(
      screen.getByText(/garbage in, garbage out/)
    ).toBeInTheDocument();
  });
});
