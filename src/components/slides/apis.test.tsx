import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { ApisSlide } from "./apis";

describe("ApisSlide", () => {
  it("renders the heading", () => {
    render(<ApisSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("APIs");
  });

  it("renders all three endpoint buttons", () => {
    render(<ApisSlide active={true} />);
    expect(
      screen.getByRole("button", { name: "/weather" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "/jokes" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "/dog" })
    ).toBeInTheDocument();
  });

  it("shows weather response when /weather clicked", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({
      advanceTimers: vi.advanceTimersByTime,
    });

    render(<ApisSlide active={true} />);

    await user.click(screen.getByRole("button", { name: "/weather" }));

    vi.advanceTimersByTime(2000);

    await waitFor(() => {
      expect(screen.getByText(/Partly cloudy/)).toBeInTheDocument();
    });

    vi.useRealTimers();
  });

  it("renders the analogy box", () => {
    render(<ApisSlide active={true} />);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
    expect(screen.getByText(/waiter at a restaurant/)).toBeInTheDocument();
  });
});
