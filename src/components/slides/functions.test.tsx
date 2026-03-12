import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FunctionsSlide } from "./functions";

describe("FunctionsSlide", () => {
  it("renders the heading", () => {
    render(<FunctionsSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Functions");
  });

  it("renders the code block with function definition", () => {
    render(<FunctionsSlide active={true} />);
    expect(screen.getAllByText("compliment").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("def")).toBeInTheDocument();
  });

  it("renders the Run Code button", () => {
    render(<FunctionsSlide active={true} />);
    expect(
      screen.getByRole("button", { name: /Run Code/ })
    ).toBeInTheDocument();
  });

  it("renders Hype and Sweet style buttons", () => {
    render(<FunctionsSlide active={true} />);
    expect(screen.getByRole("button", { name: "Hype" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sweet" })).toBeInTheDocument();
  });

  it("renders the analogy box", () => {
    render(<FunctionsSlide active={true} />);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
    expect(
      screen.getAllByText(/recipe card/).length
    ).toBeGreaterThanOrEqual(1);
  });
});
