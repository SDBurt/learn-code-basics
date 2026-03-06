import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { GitSlide } from "./git";

describe("GitSlide", () => {
  it("renders the heading containing Version Control", () => {
    render(<GitSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Version Control");
  });

  it("renders all 5 commit nodes", () => {
    render(<GitSlide active={true} />);
    expect(screen.getByText("Initial setup")).toBeInTheDocument();
    expect(screen.getByText("Add login page")).toBeInTheDocument();
    expect(screen.getByText("Fix header bug")).toBeInTheDocument();
    expect(screen.getByText("Add dark mode")).toBeInTheDocument();
    expect(screen.getByText("Go live for real users")).toBeInTheDocument();
  });

  it("shows diff when clicking a commit node", async () => {
    const user = userEvent.setup();
    render(<GitSlide active={true} />);

    expect(screen.queryByTestId("diff-view")).not.toBeInTheDocument();

    await user.click(screen.getByTestId("commit-node-2"));

    expect(screen.getByTestId("diff-view")).toBeInTheDocument();
    expect(screen.getByText("+ header height: 60px")).toBeInTheDocument();
    expect(screen.getByText("- header height: 600px")).toBeInTheDocument();
  });

  it("renders the analogy box", () => {
    render(<GitSlide active={true} />);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
  });
});
