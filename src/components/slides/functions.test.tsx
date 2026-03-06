import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { FunctionsSlide } from "./functions";

describe("FunctionsSlide", () => {
  it("renders the heading", () => {
    render(<FunctionsSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Functions");
  });

  it("shows default hype compliment with Shayla", () => {
    render(<FunctionsSlide active={true} />);
    expect(
      screen.getByText(
        "Shayla is an incredible lawyer -- the best advocate you could ask for!"
      )
    ).toBeInTheDocument();
  });

  it("updates compliment when name changes", async () => {
    const user = userEvent.setup();
    render(<FunctionsSlide active={true} />);

    const nameInput = screen.getByDisplayValue("Shayla");
    await user.clear(nameInput);
    await user.type(nameInput, "Jordan");

    expect(
      screen.getByText(
        "Jordan is an incredible lawyer -- the best advocate you could ask for!"
      )
    ).toBeInTheDocument();
  });

  it("switches to sweet compliment when Sweet button clicked", async () => {
    const user = userEvent.setup();
    render(<FunctionsSlide active={true} />);

    const sweetButton = screen.getByRole("button", { name: "Sweet" });
    await user.click(sweetButton);

    expect(
      screen.getByText(
        "Shayla, your dedication to justice inspires everyone around you."
      )
    ).toBeInTheDocument();
  });

  it("renders the analogy box", () => {
    render(<FunctionsSlide active={true} />);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
    expect(
      screen.getAllByText(/recipe card/).length
    ).toBeGreaterThanOrEqual(1);
  });
});
