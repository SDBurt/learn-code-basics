import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { DictionariesSlide } from "./dictionaries";

describe("DictionariesSlide", () => {
  it("renders the heading", () => {
    render(<DictionariesSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Dictionaries");
  });

  it("renders key-value pair entries", () => {
    render(<DictionariesSlide active={true} />);
    const nameElements = screen.getAllByText('"name"');
    expect(nameElements.length).toBeGreaterThanOrEqual(1);
    const lunaElements = screen.getAllByText('"Luna"');
    expect(lunaElements.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the description about key-value pairs", () => {
    render(<DictionariesSlide active={true} />);
    expect(
      screen.getByText(/A dictionary stores data in/)
    ).toBeInTheDocument();
  });
});
