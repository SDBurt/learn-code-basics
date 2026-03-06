import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TuplesSetsSlide } from "./tuples-sets";

describe("TuplesSetsSlide", () => {
  it("renders the heading", () => {
    render(<TuplesSetsSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Tuples & Sets");
  });

  it("renders the Tuples section", () => {
    render(<TuplesSetsSlide active={true} />);
    expect(screen.getByText("Tuples")).toBeInTheDocument();
    expect(
      screen.getByText(/can't be changed/)
    ).toBeInTheDocument();
  });

  it("renders the Sets section", () => {
    render(<TuplesSetsSlide active={true} />);
    const setsHeading = screen.getByRole("heading", { level: 2, name: "Sets" });
    expect(setsHeading).toBeInTheDocument();
    expect(
      screen.getByText(/unique items/)
    ).toBeInTheDocument();
  });

  it("renders the analogy boxes", () => {
    render(<TuplesSetsSlide active={true} />);
    expect(screen.getByText(/sealed envelope/)).toBeInTheDocument();
    expect(screen.getByText(/bag of marbles/)).toBeInTheDocument();
  });
});
