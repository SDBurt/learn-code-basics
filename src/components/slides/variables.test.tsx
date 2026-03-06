import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { VariablesSlide } from "./variables";

describe("VariablesSlide", () => {
  it("renders the variable type labels", () => {
    render(<VariablesSlide active={true} />);
    expect(screen.getAllByText("text (string)").length).toBeGreaterThanOrEqual(
      1
    );
    expect(screen.getByText("decimal (float)")).toBeInTheDocument();
    expect(screen.getByText("yes/no (boolean)")).toBeInTheDocument();
  });

  it("renders the variable value displays", () => {
    render(<VariablesSlide active={true} />);
    expect(
      screen.getAllByText('"Shayla"').length
    ).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("5.6").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("True").length).toBeGreaterThanOrEqual(1);
  });

  it("shows default values in the interactive section", () => {
    render(<VariablesSlide active={true} />);
    expect(
      screen.getByText(
        /Shayla loves purple and is amazing at coding/
      )
    ).toBeInTheDocument();
  });

  it("updates the live result when name input changes", async () => {
    const user = userEvent.setup();
    render(<VariablesSlide active={true} />);

    const nameInput = screen.getByDisplayValue("Shayla");
    await user.clear(nameInput);
    await user.type(nameInput, "Alex");

    expect(
      screen.getByText(/Alex loves purple and is amazing at coding/)
    ).toBeInTheDocument();
  });

  it("updates the live result when colour input changes", async () => {
    const user = userEvent.setup();
    render(<VariablesSlide active={true} />);

    const colourInput = screen.getByDisplayValue("purple");
    await user.clear(colourInput);
    await user.type(colourInput, "blue");

    expect(
      screen.getByText(/Shayla loves blue and is amazing at coding/)
    ).toBeInTheDocument();
  });

  it("updates the live result when talent input changes", async () => {
    const user = userEvent.setup();
    render(<VariablesSlide active={true} />);

    const talentInput = screen.getByDisplayValue("coding");
    await user.clear(talentInput);
    await user.type(talentInput, "art");

    expect(
      screen.getByText(/Shayla loves purple and is amazing at art/)
    ).toBeInTheDocument();
  });

  it("shows fallback values when inputs are empty", async () => {
    const user = userEvent.setup();
    render(<VariablesSlide active={true} />);

    const nameInput = screen.getByDisplayValue("Shayla");
    const talentInput = screen.getByDisplayValue("coding");

    await user.clear(nameInput);
    await user.clear(talentInput);

    expect(
      screen.getByText(
        /someone loves purple and is amazing at so many things/
      )
    ).toBeInTheDocument();
  });

  it("renders the try it yourself section", () => {
    render(<VariablesSlide active={true} />);
    expect(screen.getByText("Try it yourself!")).toBeInTheDocument();
  });
});
