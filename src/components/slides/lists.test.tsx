import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ListsSlide } from "./lists";

describe("ListsSlide", () => {
  it("renders the heading", () => {
    render(<ListsSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Lists");
  });

  it("renders the description about ordered collections", () => {
    render(<ListsSlide active={true} />);
    expect(
      screen.getByText(/ordered collection/)
    ).toBeInTheDocument();
  });

  it("renders the common list operations section", () => {
    render(<ListsSlide active={true} />);
    expect(screen.getByText("Common list operations")).toBeInTheDocument();
    expect(screen.getAllByText("append()").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("sort()").length).toBeGreaterThanOrEqual(1);
  });
});
