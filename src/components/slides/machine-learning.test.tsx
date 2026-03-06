import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MachineLearningSlide } from "./machine-learning";

describe("MachineLearningSlide", () => {
  it("renders the heading containing Machine Learning", () => {
    render(<MachineLearningSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Machine Learning");
  });

  it("renders all key concept cards", () => {
    render(<MachineLearningSlide active={true} />);
    expect(screen.getByText("Training Data")).toBeInTheDocument();
    expect(screen.getAllByText("Model").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Prediction")).toBeInTheDocument();
    expect(screen.getByText("Accuracy")).toBeInTheDocument();
  });

  it("renders the pipeline steps", () => {
    render(<MachineLearningSlide active={true} />);
    expect(screen.getByText("Input Data")).toBeInTheDocument();
    expect(screen.getByText("Output")).toBeInTheDocument();
  });

  it("renders the analogy box", () => {
    render(<MachineLearningSlide active={true} />);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
    expect(
      screen.getByText(/learning to recognize dogs/)
    ).toBeInTheDocument();
  });

  it("renders the example callout", () => {
    render(<MachineLearningSlide active={true} />);
    expect(screen.getByText("Example:")).toBeInTheDocument();
  });
});
