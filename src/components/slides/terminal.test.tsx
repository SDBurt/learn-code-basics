import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { TerminalSlide } from "./terminal";

describe("TerminalSlide", () => {
  it("renders the heading containing Terminal", () => {
    render(<TerminalSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Terminal");
  });

  it("renders all command buttons with descriptions", () => {
    render(<TerminalSlide active={true} />);
    expect(screen.getByText("ls")).toBeInTheDocument();
    expect(screen.getByText("cd projects")).toBeInTheDocument();
    expect(screen.getByText("mkdir new-app")).toBeInTheDocument();
    expect(screen.getByText("python hello.py")).toBeInTheDocument();
    expect(screen.getByText(/List all files/)).toBeInTheDocument();
    expect(screen.getByText(/Run a Python script/)).toBeInTheDocument();
  });

  it("shows command output after clicking a command button", async () => {
    const user = userEvent.setup();
    render(<TerminalSlide active={true} />);

    await user.click(screen.getByText("ls").closest("button")!);

    const history = screen.getByTestId("terminal-history");
    expect(history).toHaveTextContent("$ ls");
    expect(history).toHaveTextContent(/index\.html/);
    expect(history).toHaveTextContent(/app\.js/);
  });

  it("clears history when Clear button is clicked", async () => {
    const user = userEvent.setup();
    render(<TerminalSlide active={true} />);

    await user.click(screen.getByText("ls").closest("button")!);
    expect(screen.getByTestId("terminal-history")).toHaveTextContent("$ ls");

    await user.click(screen.getByRole("button", { name: "Clear" }));
    expect(screen.getByTestId("terminal-history")).not.toHaveTextContent(
      "$ ls"
    );
    expect(screen.getByTestId("terminal-history")).toHaveTextContent(
      "Click a command below to get started..."
    );
  });
});
