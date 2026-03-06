import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { DevDaySlide } from "./dev-day";

describe("DevDaySlide", () => {
  it("renders the heading containing Day", () => {
    render(<DevDaySlide active={true} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Day");
  });

  it("renders all 7 activity titles", () => {
    render(<DevDaySlide active={true} />);
    expect(screen.getByText("Standup Meeting")).toBeInTheDocument();
    expect(screen.getByText("Code Review")).toBeInTheDocument();
    expect(screen.getByText("Writing Code")).toBeInTheDocument();
    expect(screen.getByText("Lunch Break")).toBeInTheDocument();
    expect(screen.getByText("Debugging")).toBeInTheDocument();
    expect(screen.getByText("Planning Meeting")).toBeInTheDocument();
    expect(screen.getByText("Deploying (Going Live)")).toBeInTheDocument();
  });

  it("expands an activity when clicked", async () => {
    const user = userEvent.setup();
    render(<DevDaySlide active={true} />);

    expect(
      screen.queryByText(/A quick 15-minute team check-in/)
    ).not.toBeInTheDocument();

    const standupCard = screen.getByText("Standup Meeting").closest('[role="button"]')!;
    await user.click(standupCard);

    expect(
      screen.getByText(/A quick 15-minute team check-in/)
    ).toBeInTheDocument();
  });

  it("collapses an activity when clicked again", async () => {
    const user = userEvent.setup();
    render(<DevDaySlide active={true} />);

    const standupCard = screen.getByText("Standup Meeting").closest('[role="button"]')!;

    await user.click(standupCard);
    expect(
      screen.getByText(/A quick 15-minute team check-in/)
    ).toBeInTheDocument();

    await user.click(standupCard);
    expect(
      screen.queryByText(/A quick 15-minute team check-in/)
    ).not.toBeInTheDocument();
  });
});
