import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { DataScienceSlide } from "./data-science";

describe("DataScienceSlide", () => {
  it("renders the heading containing Data Science", () => {
    render(<DataScienceSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Data Science");
  });

  it("renders all process step cards", () => {
    render(<DataScienceSlide active={true} />);
    expect(screen.getByText("Collect")).toBeInTheDocument();
    expect(screen.getByText("Clean")).toBeInTheDocument();
    expect(screen.getByText("Analyze")).toBeInTheDocument();
    expect(screen.getByText("Visualize")).toBeInTheDocument();
    expect(screen.getByText("Communicate")).toBeInTheDocument();
  });

  it("renders common tools", () => {
    render(<DataScienceSlide active={true} />);
    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("SQL")).toBeInTheDocument();
    expect(screen.getByText("Excel")).toBeInTheDocument();
    expect(screen.getByText("Jupyter Notebooks")).toBeInTheDocument();
  });

  it("renders the analogy box", () => {
    render(<DataScienceSlide active={true} />);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
    expect(
      screen.getByText(/detective sifting through clues/)
    ).toBeInTheDocument();
  });
});
