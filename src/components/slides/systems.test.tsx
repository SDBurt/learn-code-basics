import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SystemsSlide } from "./systems";

describe("SystemsSlide", () => {
  it("renders the heading", () => {
    render(<SystemsSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("How Systems Work Together");
  });

  it("renders the system diagram components", () => {
    render(<SystemsSlide active={true} />);
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Backend / API")).toBeInTheDocument();
    expect(screen.getByText("Database")).toBeInTheDocument();
    expect(screen.getByText("Storage")).toBeInTheDocument();
  });

  it("renders the Instagram example steps", () => {
    render(<SystemsSlide active={true} />);
    expect(
      screen.getByText("What happens when you open Instagram?")
    ).toBeInTheDocument();
    expect(screen.getByText(/the latest posts/)).toBeInTheDocument();
    expect(screen.getByText(/Photos are loaded/)).toBeInTheDocument();
  });
});
