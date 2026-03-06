import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { QuizPage } from "./quiz";

function renderQuiz() {
  return render(
    <MemoryRouter>
      <QuizPage />
    </MemoryRouter>
  );
}

describe("QuizPage", () => {
  it("renders the quiz heading", () => {
    renderQuiz();
    expect(
      screen.getByRole("heading", { name: /knowledge quiz/i })
    ).toBeInTheDocument();
  });

  it("renders the first question with four options", () => {
    renderQuiz();
    expect(screen.getByText(/question 1 of 20/i)).toBeInTheDocument();
    const buttons = screen.getAllByRole("button").filter((btn) =>
      btn.textContent?.match(/^[A-D]\./)
    );
    expect(buttons).toHaveLength(4);
  });

  it("selecting the correct answer shows explanation and next button", async () => {
    renderQuiz();
    const user = userEvent.setup();

    // Find the question text to identify which question is displayed
    screen.getByRole("heading", { level: 2 });

    // Find all option buttons
    const optionButtons = screen.getAllByRole("button").filter((btn) =>
      btn.textContent?.match(/^[A-D]\./)
    );

    // Click the first option (we do not know which is correct due to shuffling,
    // but we can verify the explanation appears regardless)
    await user.click(optionButtons[0]);

    // After selecting, an explanation should appear (either "Correct!" or "Incorrect.")
    const hasExplanation =
      screen.queryByText(/correct!/i) || screen.queryByText(/incorrect\./i);
    expect(hasExplanation).toBeInTheDocument();

    // The Next button (or "See Results") should appear
    const nextButton =
      screen.queryByRole("button", { name: /next/i }) ||
      screen.queryByRole("button", { name: /see results/i });
    expect(nextButton).toBeInTheDocument();
  });

  it("disables options after an answer is selected", async () => {
    renderQuiz();
    const user = userEvent.setup();

    const optionButtons = screen.getAllByRole("button").filter((btn) =>
      btn.textContent?.match(/^[A-D]\./)
    );

    await user.click(optionButtons[0]);

    // All option buttons should now be disabled
    optionButtons.forEach((btn) => {
      expect(btn).toBeDisabled();
    });
  });

  it("advances to the next question when Next is clicked", async () => {
    renderQuiz();
    const user = userEvent.setup();

    expect(screen.getByText(/question 1 of 20/i)).toBeInTheDocument();

    // Answer the first question
    const optionButtons = screen.getAllByRole("button").filter((btn) =>
      btn.textContent?.match(/^[A-D]\./)
    );
    await user.click(optionButtons[0]);

    // Click Next
    const nextButton =
      screen.queryByRole("button", { name: /next/i }) ||
      screen.queryByRole("button", { name: /see results/i });
    expect(nextButton).toBeInTheDocument();
    await user.click(nextButton!);

    // Should now show question 2
    expect(screen.getByText(/question 2 of 20/i)).toBeInTheDocument();
  });

  it("shows results after completing all questions", async () => {
    renderQuiz();
    const user = userEvent.setup();

    // Click through all 20 questions
    for (let i = 0; i < 20; i++) {
      const optionButtons = screen.getAllByRole("button").filter((btn) =>
        btn.textContent?.match(/^[A-D]\./)
      );
      await user.click(optionButtons[0]);

      const nextButton =
        screen.queryByRole("button", { name: /next/i }) ||
        screen.queryByRole("button", { name: /see results/i });
      await user.click(nextButton!);
    }

    // Results screen should be shown
    expect(
      screen.getByRole("heading", { name: /quiz complete/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/% correct/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /try again/i })
    ).toBeInTheDocument();
  });

  it("resets the quiz when Try Again is clicked", async () => {
    renderQuiz();
    const user = userEvent.setup();

    // Complete all questions
    for (let i = 0; i < 20; i++) {
      const optionButtons = screen.getAllByRole("button").filter((btn) =>
        btn.textContent?.match(/^[A-D]\./)
      );
      await user.click(optionButtons[0]);

      const nextButton =
        screen.queryByRole("button", { name: /next/i }) ||
        screen.queryByRole("button", { name: /see results/i });
      await user.click(nextButton!);
    }

    // Click Try Again
    await user.click(screen.getByRole("button", { name: /try again/i }));

    // Should be back at question 1
    expect(screen.getByText(/question 1 of 20/i)).toBeInTheDocument();
  });

  it("has a back link to home", () => {
    renderQuiz();
    const backLink = screen.getByRole("link", { name: /back to topics/i });
    expect(backLink).toBeInTheDocument();
    expect(backLink).toHaveAttribute("href", "/");
  });
});
