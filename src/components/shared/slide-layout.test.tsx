import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SlideLayout, Overline, Blob } from "./slide-layout";

describe("SlideLayout", () => {
  it("renders children", () => {
    render(
      <SlideLayout active={true}>
        <p>Slide content</p>
      </SlideLayout>
    );
    expect(screen.getByText("Slide content")).toBeInTheDocument();
  });

  it("applies pointer-events-auto when active", () => {
    const { container } = render(
      <SlideLayout active={true}>content</SlideLayout>
    );
    const wrapper = container.firstElementChild!;
    expect(wrapper.className).toContain("pointer-events-auto");
    expect(wrapper.className).toContain("opacity-100");
  });

  it("applies pointer-events-none when inactive", () => {
    const { container } = render(
      <SlideLayout active={false}>content</SlideLayout>
    );
    const wrapper = container.firstElementChild!;
    expect(wrapper.className).toContain("pointer-events-none");
    expect(wrapper.className).toContain("opacity-0");
  });

  it("applies custom className", () => {
    const { container } = render(
      <SlideLayout active={true} className="bg-red-500">
        content
      </SlideLayout>
    );
    const wrapper = container.firstElementChild!;
    expect(wrapper.className).toContain("bg-red-500");
  });
});

describe("Overline", () => {
  it("renders children text", () => {
    render(<Overline>Section Title</Overline>);
    expect(screen.getByText("Section Title")).toBeInTheDocument();
  });

  it("defaults to sage variant", () => {
    render(<Overline>Title</Overline>);
    const el = screen.getByText("Title");
    expect(el.className).toContain("text-sage-500");
  });

  it("applies pink variant", () => {
    render(<Overline variant="pink">Title</Overline>);
    const el = screen.getByText("Title");
    expect(el.className).toContain("text-pink-500");
  });
});

describe("Blob", () => {
  it("renders a pink blob", () => {
    const { container } = render(<Blob color="pink" />);
    const el = container.firstElementChild!;
    expect(el.className).toContain("bg-pink-300");
  });

  it("renders a sage blob", () => {
    const { container } = render(<Blob color="sage" />);
    const el = container.firstElementChild!;
    expect(el.className).toContain("bg-sage-300");
  });

  it("applies custom className", () => {
    const { container } = render(
      <Blob color="pink" className="w-[400px]" />
    );
    const el = container.firstElementChild!;
    expect(el.className).toContain("w-[400px]");
  });
});
