import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AuthSlide } from "./auth";

describe("AuthSlide", () => {
  it("renders the heading containing Authentication", () => {
    render(<AuthSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Authentication");
  });

  it("renders all authentication method cards", () => {
    render(<AuthSlide active={true} />);
    expect(screen.getByText("Username & Password")).toBeInTheDocument();
    expect(screen.getByText("Two-Factor Authentication (2FA)")).toBeInTheDocument();
    expect(screen.getByText("Social Login (OAuth)")).toBeInTheDocument();
    expect(screen.getByText("Tokens & Sessions")).toBeInTheDocument();
  });

  it("renders the login simulation", () => {
    render(<AuthSlide active={true} />);
    expect(screen.getByText("Log In")).toBeInTheDocument();
    expect(screen.getByDisplayValue("you@example.com")).toBeInTheDocument();
  });

  it("renders the analogy box", () => {
    render(<AuthSlide active={true} />);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
    expect(
      screen.getByText(/showing your ID at a club/)
    ).toBeInTheDocument();
  });
});
