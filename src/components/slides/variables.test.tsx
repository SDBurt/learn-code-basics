import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { VariablesSlide } from "./variables";

describe("VariablesSlide", () => {
  it("renders the variable type labels", () => {
    render(<VariablesSlide active={true} />);
    expect(screen.getAllByText("text").length).toBeGreaterThanOrEqual(1);
  });

  it("renders the variable value displays", () => {
    render(<VariablesSlide active={true} />);
    expect(
      screen.getAllByText('"Shayla"').length
    ).toBeGreaterThanOrEqual(1);
  });

  it("renders the Run Code button", () => {
    render(<VariablesSlide active={true} />);
    expect(
      screen.getByRole("button", { name: /Run Code/ })
    ).toBeInTheDocument();
  });

  it("updates variable boxes when name input changes", async () => {
    const user = userEvent.setup();
    render(<VariablesSlide active={true} />);

    const nameInput = screen.getByDisplayValue("Shayla");
    await user.clear(nameInput);
    await user.type(nameInput, "Alex");

    expect(
      screen.getAllByText('"Alex"').length
    ).toBeGreaterThanOrEqual(1);
  });

  it("updates variable boxes when colour input changes", async () => {
    const user = userEvent.setup();
    render(<VariablesSlide active={true} />);

    const colourInput = screen.getByDisplayValue("green");
    await user.clear(colourInput);
    await user.type(colourInput, "blue");

    expect(
      screen.getAllByText('"blue"').length
    ).toBeGreaterThanOrEqual(1);
  });

  it("updates variable boxes when talent input changes", async () => {
    const user = userEvent.setup();
    render(<VariablesSlide active={true} />);

    const talentInput = screen.getByDisplayValue("law");
    await user.clear(talentInput);
    await user.type(talentInput, "art");

    expect(
      screen.getAllByText('"art"').length
    ).toBeGreaterThanOrEqual(1);
  });

  it("uses fallback values when inputs are empty", async () => {
    const user = userEvent.setup();
    render(<VariablesSlide active={true} />);

    const nameInput = screen.getByDisplayValue("Shayla");
    await user.clear(nameInput);

    expect(
      screen.getAllByText('"someone"').length
    ).toBeGreaterThanOrEqual(1);
  });
});
