import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { IotSlide } from "./iot";

describe("IotSlide", () => {
  it("renders the heading containing Internet of Things", () => {
    render(<IotSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Internet of");
    expect(heading).toHaveTextContent("Things");
  });

  it("renders all IoT category cards", () => {
    render(<IotSlide active={true} />);
    expect(screen.getByText("Smart Home")).toBeInTheDocument();
    expect(screen.getByText("Wearables")).toBeInTheDocument();
    expect(screen.getByText("Industrial IoT")).toBeInTheDocument();
    expect(screen.getByText("Automotive")).toBeInTheDocument();
  });

  it("renders key concepts", () => {
    render(<IotSlide active={true} />);
    expect(screen.getByText("Sensor")).toBeInTheDocument();
    expect(screen.getByText("Actuator")).toBeInTheDocument();
    expect(screen.getByText("Embedded System")).toBeInTheDocument();
    expect(screen.getByText("Edge Computing")).toBeInTheDocument();
  });

  it("renders getting started tools", () => {
    render(<IotSlide active={true} />);
    expect(screen.getByText("Arduino")).toBeInTheDocument();
    expect(screen.getByText("Raspberry Pi")).toBeInTheDocument();
    expect(screen.getByText("ESP32")).toBeInTheDocument();
    expect(screen.getByText("MicroPython")).toBeInTheDocument();
  });

  it("renders the analogy box", () => {
    render(<IotSlide active={true} />);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
    expect(
      screen.getByText(/giving everyday objects a brain and a phone/)
    ).toBeInTheDocument();
  });
});
