import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { TerminologyPage } from "./terminology";

function renderTerminology() {
  return render(
    <MemoryRouter>
      <TerminologyPage />
    </MemoryRouter>
  );
}

describe("TerminologyPage", () => {
  it("renders the page heading", () => {
    renderTerminology();
    expect(
      screen.getByRole("heading", { name: /terminology/i })
    ).toBeInTheDocument();
  });

  it("renders term cards", () => {
    renderTerminology();
    expect(screen.getByText("Script")).toBeInTheDocument();
    expect(screen.getByText("API")).toBeInTheDocument();
  });

  it("filters terms when searching", async () => {
    renderTerminology();
    const user = userEvent.setup();
    const searchInput = screen.getByPlaceholderText("Search terms...");

    await user.type(searchInput, "Algorithm");

    expect(screen.getByText("Algorithm")).toBeInTheDocument();
    expect(screen.queryByText("API")).not.toBeInTheDocument();
    expect(screen.queryByText("Script")).not.toBeInTheDocument();
  });

  it("filters terms by category", async () => {
    renderTerminology();
    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: "Security" }));

    expect(screen.getByText("Authentication")).toBeInTheDocument();
    expect(screen.getByText("Encryption")).toBeInTheDocument();
    expect(screen.queryByText("Script")).not.toBeInTheDocument();
    expect(screen.queryByText("API")).not.toBeInTheDocument();
  });

  it("shows no terms found when search has no matches", async () => {
    renderTerminology();
    const user = userEvent.setup();
    const searchInput = screen.getByPlaceholderText("Search terms...");

    await user.type(searchInput, "xyznonexistentterm");

    expect(screen.getByText("No terms found")).toBeInTheDocument();
    expect(screen.getByText("0 terms found")).toBeInTheDocument();
  });

  it("has a back link to home", () => {
    renderTerminology();
    const backLink = screen.getByRole("link", { name: /back to topics/i });
    expect(backLink).toBeInTheDocument();
    expect(backLink).toHaveAttribute("href", "/");
  });
});
