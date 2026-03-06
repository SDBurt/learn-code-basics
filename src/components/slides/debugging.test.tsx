import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { DebuggingSlide } from "./debugging";

describe("DebuggingSlide", () => {
  it("renders the heading containing Debugging", () => {
    render(<DebuggingSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Debugging");
  });

  it("renders all three bug cards", () => {
    render(<DebuggingSlide active={true} />);
    expect(screen.getByTestId("bug-card-0")).toBeInTheDocument();
    expect(screen.getByTestId("bug-card-1")).toBeInTheDocument();
    expect(screen.getByTestId("bug-card-2")).toBeInTheDocument();
  });

  it("can identify a bug correctly and shows green border", async () => {
    const user = userEvent.setup();
    render(<DebuggingSlide active={true} />);

    const card = screen.getByTestId("bug-card-0");
    expect(card.className).not.toMatch(/border-green-500/);

    const correctButton = screen.getByRole("button", {
      name: 'print("Hello World")',
    });
    await user.click(correctButton);

    expect(card.className).toMatch(/border-green-500/);
    expect(screen.getByText("Fixed!")).toBeInTheDocument();
  });
});
