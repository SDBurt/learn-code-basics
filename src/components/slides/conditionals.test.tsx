import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { ConditionalsSlide } from "./conditionals";

describe("ConditionalsSlide", () => {
  it("renders the heading", () => {
    render(<ConditionalsSlide active={true} />);
    expect(screen.getByText("Conditionals")).toBeInTheDocument();
  });

  it("renders all three weather buttons", () => {
    render(<ConditionalsSlide active={true} />);
    expect(
      screen.getByRole("button", { name: "Sunny" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Rainy" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Snowy" })
    ).toBeInTheDocument();
  });

  it("shows correct output when clicking Sunny", async () => {
    const user = userEvent.setup();
    render(<ConditionalsSlide active={true} />);

    await user.click(screen.getByRole("button", { name: "Sunny" }));

    expect(screen.getByText("Bring your sunglasses")).toBeInTheDocument();
  });

  it("shows correct output when clicking Rainy", async () => {
    const user = userEvent.setup();
    render(<ConditionalsSlide active={true} />);

    await user.click(screen.getByRole("button", { name: "Rainy" }));

    expect(screen.getByText("Bring your umbrella")).toBeInTheDocument();
  });

  it("shows correct output when clicking Snowy", async () => {
    const user = userEvent.setup();
    render(<ConditionalsSlide active={true} />);

    await user.click(screen.getByRole("button", { name: "Snowy" }));

    expect(screen.getByText("Bring your warm coat")).toBeInTheDocument();
  });
});
