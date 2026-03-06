import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { NativeVsWebSlide } from "./native-vs-web";

describe("NativeVsWebSlide", () => {
  it("renders the heading containing Native, Web, and Cross-Platform", () => {
    render(<NativeVsWebSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Native vs Web vs");
    expect(heading).toHaveTextContent("Cross-Platform");
  });

  it("renders all three approach cards", () => {
    render(<NativeVsWebSlide active={true} />);
    expect(screen.getByText("Native Apps")).toBeInTheDocument();
    expect(screen.getByText("Web Apps")).toBeInTheDocument();
    expect(screen.getAllByText("Cross-Platform").length).toBeGreaterThanOrEqual(2);
  });

  it("renders comparison categories", () => {
    render(<NativeVsWebSlide active={true} />);
    expect(screen.getByText("Performance")).toBeInTheDocument();
    expect(screen.getByText("Development Cost")).toBeInTheDocument();
    expect(screen.getByText("Device Access")).toBeInTheDocument();
    expect(screen.getByText("Updates")).toBeInTheDocument();
  });

  it("renders the analogy box", () => {
    render(<NativeVsWebSlide active={true} />);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
    expect(
      screen.getByText(/custom-tailored suit/)
    ).toBeInTheDocument();
  });
});
