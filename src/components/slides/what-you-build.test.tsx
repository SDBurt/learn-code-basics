import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { WhatYouBuildSlide } from "./what-you-build";

describe("WhatYouBuildSlide", () => {
  it("renders the heading", () => {
    render(<WhatYouBuildSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("What Can You Build?");
  });

  it("renders all six project cards", () => {
    render(<WhatYouBuildSlide active={true} />);
    expect(screen.getByText("Online Store")).toBeInTheDocument();
    expect(screen.getByText("Social App")).toBeInTheDocument();
    expect(screen.getByText("Music Player")).toBeInTheDocument();
    expect(screen.getByText("AI Chatbot")).toBeInTheDocument();
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Games")).toBeInTheDocument();
  });

  it("renders the introductory paragraph", () => {
    render(<WhatYouBuildSlide active={true} />);
    expect(
      screen.getByText(/the possibilities are truly endless/)
    ).toBeInTheDocument();
  });
});
