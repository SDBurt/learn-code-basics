import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TestingSlide } from "./testing";

describe("TestingSlide", () => {
  it("renders the heading containing Testing", () => {
    render(<TestingSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Testing");
  });

  it("renders all test type cards", () => {
    render(<TestingSlide active={true} />);
    expect(screen.getByText("Unit Tests")).toBeInTheDocument();
    expect(screen.getByText("Integration Tests")).toBeInTheDocument();
    expect(screen.getByText("End-to-End Tests")).toBeInTheDocument();
  });

  it("renders the analogy box", () => {
    render(<TestingSlide active={true} />);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
    expect(
      screen.getByText(/proofreading an essay/)
    ).toBeInTheDocument();
  });

  it("shows placeholder text before running tests", () => {
    render(<TestingSlide active={true} />);
    expect(
      screen.getByText(/Click "Run Tests" to see results/)
    ).toBeInTheDocument();
  });

  it("renders the Run Tests button", () => {
    render(<TestingSlide active={true} />);
    expect(
      screen.getByRole("button", { name: "Run Tests" })
    ).toBeInTheDocument();
  });
});
