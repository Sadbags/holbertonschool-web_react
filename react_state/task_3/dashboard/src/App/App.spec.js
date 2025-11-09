import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

describe("App component with context", () => {
  test("renders Login when user is not logged in", () => {
    render(<App />);
    expect(screen.getAllByText(/log in to continue/i).length).toBeGreaterThan(0);
  });

  test("renders CourseList when user is logged in", async () => {
    render(<App />);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /ok/i });

    await userEvent.type(emailInput, "test@example.com");
    await userEvent.type(passwordInput, "password123");

    expect(submitButton).not.toBeDisabled();

    await userEvent.click(submitButton);

    expect(screen.getByText(/available courses/i)).toBeInTheDocument();
  });
});
