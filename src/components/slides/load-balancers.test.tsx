import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LoadBalancersSlide } from "./load-balancers";

describe("LoadBalancersSlide", () => {
  it("renders the heading containing Balancers", () => {
    render(<LoadBalancersSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Balancers");
  });

  it("renders all three servers", () => {
    render(<LoadBalancersSlide active={true} />);
    expect(screen.getByText("Server A")).toBeInTheDocument();
    expect(screen.getByText("Server B")).toBeInTheDocument();
    expect(screen.getByText("Server C")).toBeInTheDocument();
  });

  it("renders the Send Request button", () => {
    render(<LoadBalancersSlide active={true} />);
    expect(
      screen.getByRole("button", { name: "Send Request" })
    ).toBeInTheDocument();
  });

  it("renders the analogy box", () => {
    render(<LoadBalancersSlide active={true} />);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
    expect(
      screen.getByText(/host at a busy restaurant/)
    ).toBeInTheDocument();
  });
});
