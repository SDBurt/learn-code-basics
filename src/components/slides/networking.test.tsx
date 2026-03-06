import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { NetworkingSlide } from "./networking";

describe("NetworkingSlide", () => {
  it("renders the heading containing DNS", () => {
    render(<NetworkingSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("DNS");
  });

  it("renders the DNS explanation text", () => {
    render(<NetworkingSlide active={true} />);
    expect(
      screen.getByText("DNS stands for Domain Name System")
    ).toBeInTheDocument();
  });

  it("renders the DNS lookup input and button", () => {
    render(<NetworkingSlide active={true} />);
    expect(screen.getByDisplayValue("google.com")).toBeInTheDocument();
    expect(screen.getByText("Look Up")).toBeInTheDocument();
  });

  it("renders network terms", () => {
    render(<NetworkingSlide active={true} />);
    expect(screen.getByText("IP Address")).toBeInTheDocument();
    expect(screen.getByText("Port")).toBeInTheDocument();
    expect(screen.getByText("Protocol")).toBeInTheDocument();
    expect(screen.getByText("Firewall")).toBeInTheDocument();
  });

  it("renders the analogy box", () => {
    render(<NetworkingSlide active={true} />);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
    expect(
      screen.getByText(/phone book for the internet/)
    ).toBeInTheDocument();
  });
});
