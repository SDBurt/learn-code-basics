import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { FrameworksSlide } from "./frameworks";

describe("FrameworksSlide", () => {
  it("renders the heading containing Libraries", () => {
    render(<FrameworksSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Libraries");
  });

  it("renders all framework and library options", () => {
    render(<FrameworksSlide active={true} />);

    // Frontend options
    expect(screen.getByRole("button", { name: /^React/ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^Vue/ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^Angular/ })).toBeInTheDocument();

    // Backend options
    expect(screen.getByRole("button", { name: /^Node\.js/ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^Python/ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^Ruby/ })).toBeInTheDocument();

    // Database options
    expect(screen.getByRole("button", { name: /^PostgreSQL/ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^MongoDB/ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^SQLite/ })).toBeInTheDocument();
  });

  it("shows Your Tech Stack summary with default selections", () => {
    render(<FrameworksSlide active={true} />);

    expect(screen.getByText("Your Tech Stack")).toBeInTheDocument();
    expect(
      screen.getByText(
        "A popular JavaScript-everywhere combo. Great for real-time apps."
      )
    ).toBeInTheDocument();
  });

  it("updates summary when changing a selection", async () => {
    const user = userEvent.setup();
    render(<FrameworksSlide active={true} />);

    // Change backend to Python
    await user.click(screen.getByRole("button", { name: /^Python/ }));

    // Description should update to the React + Python combo
    expect(
      screen.getByText("A solid choice for data-heavy applications.")
    ).toBeInTheDocument();
  });
});
