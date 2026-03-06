import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { DatabasesSlide } from "./databases";

describe("DatabasesSlide", () => {
  it("renders the heading containing Databases", () => {
    render(<DatabasesSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Databases");
  });

  it("renders all data rows", () => {
    render(<DatabasesSlide active={true} />);
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.getByText("Charlie")).toBeInTheDocument();
    expect(screen.getByText("Diana")).toBeInTheDocument();
    expect(screen.getByText("Eve")).toBeInTheDocument();
  });

  it("dims non-London rows when From London is clicked", async () => {
    const user = userEvent.setup();
    render(<DatabasesSlide active={true} />);

    const londonButton = screen.getByRole("button", { name: "From London" });
    await user.click(londonButton);

    const aliceRow = screen.getByTestId("row-Alice");
    const bobRow = screen.getByTestId("row-Bob");
    const charlieRow = screen.getByTestId("row-Charlie");
    const dianaRow = screen.getByTestId("row-Diana");
    const eveRow = screen.getByTestId("row-Eve");

    expect(aliceRow.className).toMatch(/opacity-100/);
    expect(charlieRow.className).toMatch(/opacity-100/);

    expect(bobRow.className).toMatch(/opacity-30/);
    expect(dianaRow.className).toMatch(/opacity-30/);
    expect(eveRow.className).toMatch(/opacity-30/);
  });

  it("renders the analogy box", () => {
    render(<DatabasesSlide active={true} />);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
    expect(
      screen.getByText(/giant, searchable spreadsheet/)
    ).toBeInTheDocument();
  });
});
