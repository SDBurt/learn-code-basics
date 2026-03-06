import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { PackageManagersSlide } from "./package-managers";

describe("PackageManagersSlide", () => {
  it("renders the heading containing Package Managers", () => {
    render(<PackageManagersSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Package");
    expect(heading).toHaveTextContent("Managers");
  });

  it("renders all four package manager cards", () => {
    render(<PackageManagersSlide active={true} />);
    expect(screen.getAllByText("npm").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("pip").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("yarn").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("cargo").length).toBeGreaterThanOrEqual(1);
  });

  it("renders key concepts", () => {
    render(<PackageManagersSlide active={true} />);
    expect(screen.getByText("Dependency")).toBeInTheDocument();
    expect(screen.getByText("Lock File")).toBeInTheDocument();
    expect(screen.getByText("Registry")).toBeInTheDocument();
    expect(screen.getByText("Versioning")).toBeInTheDocument();
  });

  it("renders the analogy box", () => {
    render(<PackageManagersSlide active={true} />);
    expect(screen.getByText(/app store for code/)).toBeInTheDocument();
  });
});
