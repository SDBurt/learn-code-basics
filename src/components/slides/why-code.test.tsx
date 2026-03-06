import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { WhyCodeSlide } from "./why-code";

describe("WhyCodeSlide", () => {
  it("renders the heading", () => {
    render(<WhyCodeSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Why Does Code Matter?");
  });

  it("renders all four reason cards", () => {
    render(<WhyCodeSlide active={true} />);
    expect(screen.getByText("Understand the Conversation")).toBeInTheDocument();
    expect(screen.getByText("See What's Really Happening")).toBeInTheDocument();
    expect(screen.getByText("Bridge the Gap")).toBeInTheDocument();
    expect(screen.getByText("Demystify the Magic")).toBeInTheDocument();
  });

  it("renders the introductory paragraph", () => {
    render(<WhyCodeSlide active={true} />);
    expect(
      screen.getByText(/You don't need to write code/)
    ).toBeInTheDocument();
  });
});
