import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { DataTypesSlide } from "./data-types";

describe("DataTypesSlide", () => {
  it("renders the heading containing Data Types", () => {
    render(<DataTypesSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Data Types");
  });

  it("renders all four data type cards", () => {
    render(<DataTypesSlide active={true} />);
    expect(screen.getByText("String")).toBeInTheDocument();
    expect(screen.getByText("Integer")).toBeInTheDocument();
    expect(screen.getByText("Float")).toBeInTheDocument();
    expect(screen.getByText("Boolean")).toBeInTheDocument();
  });

  it("renders descriptions for each data type", () => {
    render(<DataTypesSlide active={true} />);
    expect(
      screen.getByText("Text -- like names, sentences, anything in quotes")
    ).toBeInTheDocument();
    expect(
      screen.getByText("A whole number, no decimals")
    ).toBeInTheDocument();
    expect(
      screen.getByText("A number with a decimal point")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Just True or False, like a yes/no")
    ).toBeInTheDocument();
  });

  it("renders the analogy box", () => {
    render(<DataTypesSlide active={true} />);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
    expect(
      screen.getByText(/phone.*contacts/)
    ).toBeInTheDocument();
  });
});
