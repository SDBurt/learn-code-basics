import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { PythonIntroSlide } from "./python-intro";

describe("PythonIntroSlide", () => {
  it("renders the heading", () => {
    render(<PythonIntroSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Meet Python");
  });

  it("renders the Why Python section with key bullet points", () => {
    render(<PythonIntroSlide active={true} />);
    expect(screen.getByText("Why Python?")).toBeInTheDocument();
    expect(screen.getByText("Easy to read and write")).toBeInTheDocument();
    expect(
      screen.getByText("Companies like Google, Netflix, and NASA use it")
    ).toBeInTheDocument();
  });

  it("renders the introductory paragraph about Python", () => {
    render(<PythonIntroSlide active={true} />);
    expect(
      screen.getByText(/Python is one of the most popular programming languages/)
    ).toBeInTheDocument();
  });
});
