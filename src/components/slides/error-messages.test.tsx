import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { ErrorMessagesSlide } from "./error-messages";

describe("ErrorMessagesSlide", () => {
  it("renders the heading containing Error Messages", () => {
    render(<ErrorMessagesSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Error Messages");
  });

  it("renders all four error cards", () => {
    render(<ErrorMessagesSlide active={true} />);
    expect(screen.getByTestId("error-card-0")).toBeInTheDocument();
    expect(screen.getByTestId("error-card-1")).toBeInTheDocument();
    expect(screen.getByTestId("error-card-2")).toBeInTheDocument();
    expect(screen.getByTestId("error-card-3")).toBeInTheDocument();
  });

  it("shows tips by default before clicking an error", () => {
    render(<ErrorMessagesSlide active={true} />);
    expect(screen.getByText("Tips for reading errors")).toBeInTheDocument();
    expect(screen.getByText(/Read the last line first/)).toBeInTheDocument();
  });

  it("shows breakdown when an error card is clicked", async () => {
    const user = userEvent.setup();
    render(<ErrorMessagesSlide active={true} />);

    const card = screen.getByTestId("error-card-1");
    await user.click(card);

    expect(screen.getByText("Breaking it down")).toBeInTheDocument();
    expect(screen.getByText("What it means")).toBeInTheDocument();
    expect(screen.getByText("How to fix it")).toBeInTheDocument();
  });

  it("renders the analogy box", () => {
    render(<ErrorMessagesSlide active={true} />);
    expect(screen.getByText(/check engine light/)).toBeInTheDocument();
  });
});
