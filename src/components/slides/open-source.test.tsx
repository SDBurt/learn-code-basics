import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { OpenSourceSlide } from "./open-source";

describe("OpenSourceSlide", () => {
  it("renders the heading containing Open Source", () => {
    render(<OpenSourceSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Open Source");
  });

  it("renders famous project cards", () => {
    render(<OpenSourceSlide active={true} />);
    expect(screen.getByText("Linux")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("VS Code")).toBeInTheDocument();
    expect(screen.getByText("WordPress")).toBeInTheDocument();
    expect(screen.getByText("Firefox")).toBeInTheDocument();
  });

  it("renders how to contribute steps", () => {
    render(<OpenSourceSlide active={true} />);
    expect(screen.getByText("Find a project")).toBeInTheDocument();
    expect(screen.getByText("Read the docs")).toBeInTheDocument();
    expect(screen.getByText("Start small")).toBeInTheDocument();
    expect(screen.getByText("Submit a PR")).toBeInTheDocument();
  });

  it("renders the analogy box", () => {
    render(<OpenSourceSlide active={true} />);
    expect(screen.getByText(/community cookbook/)).toBeInTheDocument();
  });
});
