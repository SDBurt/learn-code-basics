import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CloudSlide } from "./cloud";

describe("CloudSlide", () => {
  it("renders the heading containing Cloud and Hosting", () => {
    render(<CloudSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Cloud");
    expect(heading).toHaveTextContent("Hosting");
  });

  it("renders all cloud provider cards", () => {
    render(<CloudSlide active={true} />);
    expect(screen.getByText("AWS")).toBeInTheDocument();
    expect(screen.getByText("Google Cloud")).toBeInTheDocument();
    expect(screen.getByText("Azure")).toBeInTheDocument();
  });

  it("renders all key concept items", () => {
    render(<CloudSlide active={true} />);
    expect(screen.getByText("Server")).toBeInTheDocument();
    expect(screen.getAllByText("Hosting").length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText("Scaling")).toBeInTheDocument();
    expect(screen.getByText("Serverless")).toBeInTheDocument();
    expect(screen.getByText("Container")).toBeInTheDocument();
  });

  it("renders the analogy box", () => {
    render(<CloudSlide active={true} />);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
    expect(
      screen.getByText(/renting an apartment instead of building a house/)
    ).toBeInTheDocument();
  });

  it("renders the fun fact callout", () => {
    render(<CloudSlide active={true} />);
    expect(screen.getByText("Fun fact:")).toBeInTheDocument();
  });
});
