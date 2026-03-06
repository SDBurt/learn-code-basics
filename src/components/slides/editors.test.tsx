import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { EditorsSlide } from "./editors";

describe("EditorsSlide", () => {
  it("renders the heading containing Code Editors and IDEs", () => {
    render(<EditorsSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Code");
    expect(heading).toHaveTextContent("Editors");
    expect(heading).toHaveTextContent("IDEs");
  });

  it("renders all editor cards", () => {
    render(<EditorsSlide active={true} />);
    expect(screen.getByText("VS Code")).toBeInTheDocument();
    expect(screen.getByText("JetBrains IDEs")).toBeInTheDocument();
    expect(screen.getByText("Vim / Neovim")).toBeInTheDocument();
    expect(screen.getByText("Xcode / Android Studio")).toBeInTheDocument();
  });

  it("renders all key feature items", () => {
    render(<EditorsSlide active={true} />);
    expect(screen.getByText("Syntax Highlighting")).toBeInTheDocument();
    expect(screen.getByText("Autocomplete")).toBeInTheDocument();
    expect(screen.getByText("Error Detection")).toBeInTheDocument();
    expect(screen.getByText("Extensions")).toBeInTheDocument();
    expect(screen.getByText("Integrated Terminal")).toBeInTheDocument();
    expect(screen.getByText("Version Control")).toBeInTheDocument();
  });

  it("renders the analogy box", () => {
    render(<EditorsSlide active={true} />);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
    expect(
      screen.getByText(/chef\u2019s kitchen/)
    ).toBeInTheDocument();
  });
});
