import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { LanguagesSlide } from "./languages";

describe("LanguagesSlide", () => {
  it("renders the heading containing Languages", () => {
    render(<LanguagesSlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Languages");
  });

  it("renders all 5 language tabs", () => {
    render(<LanguagesSlide active={true} />);
    expect(
      screen.getByRole("button", { name: "Python" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "JavaScript" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "SQL" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "HTML/CSS" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "TypeScript" })
    ).toBeInTheDocument();
  });

  it("shows Python content by default", () => {
    render(<LanguagesSlide active={true} />);
    const codeDisplay = screen.getByTestId("code-display");
    expect(codeDisplay).toHaveTextContent('print("Hello!")');
    expect(
      screen.getByText("Data science, AI, automation, web backends")
    ).toBeInTheDocument();
    expect(screen.getByText("Data Scientists")).toBeInTheDocument();
    expect(screen.getByText("AI Engineers")).toBeInTheDocument();
  });

  it("switches to JavaScript content when that tab is clicked", async () => {
    const user = userEvent.setup();
    render(<LanguagesSlide active={true} />);

    await user.click(screen.getByRole("button", { name: "JavaScript" }));

    const codeDisplay = screen.getByTestId("code-display");
    expect(codeDisplay).toHaveTextContent('console.log("Hello!")');
    expect(
      screen.getByText("Websites, web apps, mobile apps, servers")
    ).toBeInTheDocument();
    expect(screen.getByText("Web Developers")).toBeInTheDocument();
    expect(screen.getByText("Full Stack Devs")).toBeInTheDocument();
  });
});
