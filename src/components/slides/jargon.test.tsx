import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { JargonSlide } from "./jargon";

describe("JargonSlide", () => {
  it("renders the heading containing Jargon", () => {
    render(<JargonSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Jargon");
  });

  it("renders all 25 term cards initially", () => {
    render(<JargonSlide active={true} />);
    const grid = screen.getByTestId("term-grid");
    const cards = grid.querySelectorAll("[data-testid^='term-card-']");
    expect(cards).toHaveLength(25);
  });

  it("filters cards when typing in search", async () => {
    const user = userEvent.setup();
    render(<JargonSlide active={true} />);

    const input = screen.getByPlaceholderText("Search terms...");
    await user.type(input, "deploy");

    const grid = screen.getByTestId("term-grid");
    const cards = grid.querySelectorAll("[data-testid^='term-card-']");
    expect(cards).toHaveLength(2);
    expect(screen.getByTestId("term-card-Deploy")).toBeInTheDocument();
  });

  it("shows all cards when search is cleared", async () => {
    const user = userEvent.setup();
    render(<JargonSlide active={true} />);

    const input = screen.getByPlaceholderText("Search terms...");
    await user.type(input, "deploy");

    const gridAfterSearch = screen.getByTestId("term-grid");
    expect(
      gridAfterSearch.querySelectorAll("[data-testid^='term-card-']")
    ).toHaveLength(2);

    await user.clear(input);

    const gridAfterClear = screen.getByTestId("term-grid");
    expect(
      gridAfterClear.querySelectorAll("[data-testid^='term-card-']")
    ).toHaveLength(25);
  });
});
