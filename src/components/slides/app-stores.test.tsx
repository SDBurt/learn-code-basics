import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AppStoresSlide } from "./app-stores";

describe("AppStoresSlide", () => {
  it("renders the heading containing App and Stores", () => {
    render(<AppStoresSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("App");
    expect(heading).toHaveTextContent("Stores");
  });

  it("renders all process steps", () => {
    render(<AppStoresSlide active={true} />);
    expect(screen.getByText("Build")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
    expect(screen.getByText("Review")).toBeInTheDocument();
    expect(screen.getByText("Approval")).toBeInTheDocument();
    expect(screen.getByText("Distribution")).toBeInTheDocument();
    expect(screen.getByText("Updates")).toBeInTheDocument();
  });

  it("renders both store cards", () => {
    render(<AppStoresSlide active={true} />);
    expect(screen.getByText("Apple App Store")).toBeInTheDocument();
    expect(screen.getByText("Google Play Store")).toBeInTheDocument();
  });

  it("renders key differences", () => {
    render(<AppStoresSlide active={true} />);
    expect(screen.getByText("Review Time")).toBeInTheDocument();
    expect(screen.getByText("Developer Fee")).toBeInTheDocument();
    expect(screen.getByText("Revenue Split")).toBeInTheDocument();
    expect(screen.getByText("Sideloading")).toBeInTheDocument();
  });

  it("renders the analogy box", () => {
    render(<AppStoresSlide active={true} />);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
    expect(
      screen.getByText(/curated farmers market/)
    ).toBeInTheDocument();
  });
});
