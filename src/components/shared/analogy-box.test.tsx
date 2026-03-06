import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AnalogyBox } from "./analogy-box";

describe("AnalogyBox", () => {
  it("renders children content", () => {
    render(<AnalogyBox>An analogy about lists</AnalogyBox>);
    expect(screen.getByText("An analogy about lists")).toBeInTheDocument();
  });

  it('displays the "Think of it this way" label', () => {
    render(<AnalogyBox>content</AnalogyBox>);
    expect(screen.getByText("Think of it this way")).toBeInTheDocument();
  });
});
