import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { CodeBlock } from "./code-block";

describe("CodeBlock", () => {
  it("renders children as code content", () => {
    render(
      <CodeBlock>
        <span>print("hello")</span>
      </CodeBlock>
    );
    expect(screen.getByText('print("hello")')).toBeInTheDocument();
  });

  it("shows the python language label by default", () => {
    render(<CodeBlock>code</CodeBlock>);
    expect(screen.getByText("python")).toBeInTheDocument();
  });

  it("shows a custom language label when provided", () => {
    render(<CodeBlock language="javascript">code</CodeBlock>);
    expect(screen.getByText("javascript")).toBeInTheDocument();
    expect(screen.queryByText("python")).not.toBeInTheDocument();
  });

  it("does not render a run button when no output prop is given", () => {
    render(<CodeBlock>code</CodeBlock>);
    expect(screen.queryByText("Run Code")).not.toBeInTheDocument();
  });

  it("renders a run button when output prop is given", () => {
    render(<CodeBlock output="Hello">code</CodeBlock>);
    expect(screen.getByText("Run Code")).toBeInTheDocument();
  });

  it("does not show output before clicking run", () => {
    render(<CodeBlock output="Hello">code</CodeBlock>);
    expect(screen.queryByText("Output")).not.toBeInTheDocument();
  });

  it("shows the output area after clicking run", async () => {
    const user = userEvent.setup();
    render(<CodeBlock output="Hi">code</CodeBlock>);

    await user.click(screen.getByText("Run Code"));

    expect(screen.getByText("Output")).toBeInTheDocument();
  });

  it("eventually displays the full output text after running", async () => {
    const user = userEvent.setup();
    render(<CodeBlock output="Hello">code</CodeBlock>);

    await user.click(screen.getByText("Run Code"));

    // The typewriter effect uses setTimeout(fn, 25) per character.
    // Wait for the full text to appear in the output container.
    const outputLabel = await screen.findByText("Output");
    const container = outputLabel.parentElement!;

    await vi.waitFor(
      () => {
        expect(container.textContent).toContain("Hello");
      },
      { timeout: 2000 }
    );
  });

  it("renders the three window dots", () => {
    const { container } = render(<CodeBlock>code</CodeBlock>);
    const dots = container.querySelectorAll(".code-dots span");
    expect(dots).toHaveLength(3);
  });
});
