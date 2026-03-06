import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { TopicSlideshow } from "./topic-slideshow";
import type { Topic } from "@/data/topics";

function StubSlideA({ active }: { active: boolean }) {
  return active ? <div>Slide A content</div> : null;
}

function StubSlideB({ active }: { active: boolean }) {
  return active ? <div>Slide B content</div> : null;
}

function StubSlideC({ active }: { active: boolean }) {
  return active ? <div>Slide C content</div> : null;
}

const testTopic: Topic = {
  name: "Test Topic",
  slug: "basics",
  description: "A test topic",
  slides: [
    { title: "First Slide", component: StubSlideA },
    { title: "Second Slide", component: StubSlideB },
    { title: "Third Slide", component: StubSlideC },
  ],
};

function renderSlideshow(topic = testTopic) {
  return render(
    <MemoryRouter>
      <TopicSlideshow topic={topic} />
    </MemoryRouter>
  );
}

function getCounter(text: string) {
  return screen.getAllByText(text).length;
}

describe("TopicSlideshow", () => {
  it("renders the first slide title and counter", () => {
    renderSlideshow();
    expect(screen.getByText("First Slide")).toBeInTheDocument();
    expect(getCounter("1/3")).toBeGreaterThanOrEqual(1);
  });

  it("renders a back link to topics", () => {
    renderSlideshow();
    const backLink = screen.getByRole("link", { name: /topics/i });
    expect(backLink).toHaveAttribute("href", "/");
  });

  it("navigates forward when clicking next", async () => {
    const user = userEvent.setup();
    renderSlideshow();

    const nextButtons = screen.getAllByRole("button", { name: /next slide/i });
    await user.click(nextButtons[0]);
    expect(screen.getByText("Second Slide")).toBeInTheDocument();
    expect(getCounter("2/3")).toBeGreaterThanOrEqual(1);
  });

  it("navigates backward when clicking previous", async () => {
    const user = userEvent.setup();
    renderSlideshow();

    const nextButtons = screen.getAllByRole("button", { name: /next slide/i });
    await user.click(nextButtons[0]);
    const prevButtons = screen.getAllByRole("button", { name: /previous slide/i });
    await user.click(prevButtons[0]);
    expect(screen.getByText("First Slide")).toBeInTheDocument();
    expect(getCounter("1/3")).toBeGreaterThanOrEqual(1);
  });

  it("disables previous button on the first slide", () => {
    renderSlideshow();
    const prevButtons = screen.getAllByRole("button", { name: /previous slide/i });
    expect(prevButtons[0]).toBeDisabled();
  });

  it("disables next button on the last slide", async () => {
    const user = userEvent.setup();
    renderSlideshow();

    const nextButtons = screen.getAllByRole("button", { name: /next slide/i });
    await user.click(nextButtons[0]);
    await user.click(nextButtons[0]);
    const updatedNext = screen.getAllByRole("button", { name: /next slide/i });
    expect(updatedNext[0]).toBeDisabled();
  });

  it("navigates with arrow keys", async () => {
    const user = userEvent.setup();
    renderSlideshow();

    await user.keyboard("{ArrowRight}");
    expect(getCounter("2/3")).toBeGreaterThanOrEqual(1);

    await user.keyboard("{ArrowLeft}");
    expect(getCounter("1/3")).toBeGreaterThanOrEqual(1);
  });

  it("does not navigate before first slide", async () => {
    const user = userEvent.setup();
    renderSlideshow();

    await user.keyboard("{ArrowLeft}");
    expect(getCounter("1/3")).toBeGreaterThanOrEqual(1);
  });

  it("does not navigate past last slide", async () => {
    const user = userEvent.setup();
    renderSlideshow();

    await user.keyboard("{ArrowRight}");
    await user.keyboard("{ArrowRight}");
    await user.keyboard("{ArrowRight}");
    expect(getCounter("3/3")).toBeGreaterThanOrEqual(1);
  });

  it("shows up next indicator for non-last slides", () => {
    renderSlideshow();
    expect(screen.getByText(/up next/i)).toBeInTheDocument();
    expect(screen.getByText("Second Slide")).toBeInTheDocument();
  });
});
