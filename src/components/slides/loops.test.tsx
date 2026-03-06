import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { LoopsSlide } from "./loops";

describe("LoopsSlide", () => {
  it("renders the heading", () => {
    render(<LoopsSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Loops");
  });

  it("renders the Run Loop button", () => {
    render(<LoopsSlide active={true} />);
    expect(
      screen.getByRole("button", { name: /run loop/i })
    ).toBeInTheDocument();
  });

  it("shows items appearing after clicking Run Loop", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({
      advanceTimers: vi.advanceTimersByTime,
    });

    render(<LoopsSlide active={true} />);

    await user.click(screen.getByRole("button", { name: /run loop/i }));

    vi.advanceTimersByTime(600);

    await waitFor(() => {
      expect(screen.getByText("Setting up: balloons")).toBeInTheDocument();
    });

    vi.useRealTimers();
  });

  it("renders the analogy box", () => {
    render(<LoopsSlide active={true} />);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
    expect(screen.getByText(/party checklist/)).toBeInTheDocument();
  });
});
