import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, afterEach } from "vitest";
import { FrontendBackendSlide } from "./frontend-backend";

describe("FrontendBackendSlide", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders the heading", () => {
    render(<FrontendBackendSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Frontend vs");
    expect(heading).toHaveTextContent("Backend");
  });

  it("renders the Post button", () => {
    render(<FrontendBackendSlide active={true} />);
    expect(
      screen.getByRole("button", { name: "Post" })
    ).toBeInTheDocument();
  });

  it("renders both Frontend and Backend section labels", () => {
    render(<FrontendBackendSlide active={true} />);
    const headings = screen.getAllByRole("heading", { level: 3 });
    expect(headings.some((h) => h.textContent === "Frontend")).toBe(true);
    expect(headings.some((h) => h.textContent === "Backend")).toBe(true);
  });

  it("shows backend steps lighting up after clicking Post", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

    render(<FrontendBackendSlide active={true} />);

    expect(screen.queryAllByText("Done")).toHaveLength(0);

    await user.click(screen.getByRole("button", { name: "Post" }));

    await act(async () => {
      vi.advanceTimersByTime(600);
    });
    expect(screen.getAllByText("Done")).toHaveLength(1);

    await act(async () => {
      vi.advanceTimersByTime(500);
    });
    expect(screen.getAllByText("Done")).toHaveLength(2);

    await act(async () => {
      vi.advanceTimersByTime(500);
    });
    expect(screen.getAllByText("Done")).toHaveLength(3);
  });
});
