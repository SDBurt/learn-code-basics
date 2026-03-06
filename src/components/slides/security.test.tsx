import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SecuritySlide } from "./security";

describe("SecuritySlide", () => {
  it("renders the heading containing Security Basics", () => {
    render(<SecuritySlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Security");
    expect(heading).toHaveTextContent("Basics");
  });

  it("renders all threat cards", () => {
    render(<SecuritySlide active={true} />);
    expect(screen.getByText("Phishing")).toBeInTheDocument();
    expect(screen.getByText("SQL Injection")).toBeInTheDocument();
    expect(screen.getByText("Cross-Site Scripting (XSS)")).toBeInTheDocument();
    expect(screen.getByText("Brute Force")).toBeInTheDocument();
  });

  it("renders all good practice items", () => {
    render(<SecuritySlide active={true} />);
    expect(
      screen.getByText(/Never store passwords in plain text/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Use HTTPS to encrypt data in transit/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Keep software up to date/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/least privilege/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Validate user input on the server/)
    ).toBeInTheDocument();
  });

  it("renders the analogy box", () => {
    render(<SecuritySlide active={true} />);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
    expect(
      screen.getByText(/locking up a store at night/)
    ).toBeInTheDocument();
  });
});
