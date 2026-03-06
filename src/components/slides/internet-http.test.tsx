import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, afterEach } from "vitest";
import { InternetHttpSlide } from "./internet-http";

describe("InternetHttpSlide", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders the heading containing HTTP", () => {
    render(<InternetHttpSlide active={true} />);
    expect(screen.getByText("HTTP")).toBeInTheDocument();
  });

  it("renders the URL input with default value", () => {
    render(<InternetHttpSlide active={true} />);
    expect(screen.getByDisplayValue("example.com")).toBeInTheDocument();
  });

  it("renders the Go button", () => {
    render(<InternetHttpSlide active={true} />);
    expect(screen.getByRole("button", { name: "Go" })).toBeInTheDocument();
  });

  it("shows 200 status after clicking Go", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

    render(<InternetHttpSlide active={true} />);

    await user.click(screen.getByRole("button", { name: "Go" }));

    await act(async () => {
      vi.advanceTimersByTime(800);
    });
    await act(async () => {
      vi.advanceTimersByTime(800);
    });

    expect(screen.getByText("200 OK")).toBeInTheDocument();
  });

  it("renders the analogy box", () => {
    render(<InternetHttpSlide active={true} />);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
  });
});
