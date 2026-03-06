import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MobileAppsSlide } from "./mobile-apps";

describe("MobileAppsSlide", () => {
  it("renders the heading containing Mobile and Apps", () => {
    render(<MobileAppsSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Mobile");
    expect(heading).toHaveTextContent("Apps");
  });

  it("renders all mobile feature cards", () => {
    render(<MobileAppsSlide active={true} />);
    expect(screen.getByText("Touch Interface")).toBeInTheDocument();
    expect(screen.getByText("GPS & Location")).toBeInTheDocument();
    expect(screen.getByText("Camera & Sensors")).toBeInTheDocument();
    expect(screen.getByText("Push Notifications")).toBeInTheDocument();
  });

  it("renders platform cards", () => {
    render(<MobileAppsSlide active={true} />);
    expect(screen.getByText("iOS (iPhone/iPad)")).toBeInTheDocument();
    expect(screen.getByText("Android")).toBeInTheDocument();
  });

  it("renders the app lifecycle steps", () => {
    render(<MobileAppsSlide active={true} />);
    expect(screen.getByText("Download")).toBeInTheDocument();
    expect(screen.getByText("Install")).toBeInTheDocument();
    expect(screen.getByText("Run")).toBeInTheDocument();
    expect(screen.getByText("Update")).toBeInTheDocument();
  });

  it("renders the analogy box", () => {
    render(<MobileAppsSlide active={true} />);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
    expect(
      screen.getByText(/tiny storefront that lives in your pocket/)
    ).toBeInTheDocument();
  });
});
