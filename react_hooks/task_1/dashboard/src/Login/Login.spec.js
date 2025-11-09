import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Login from "./Login";

describe("Login component", () => {
  test("submit button is disabled by default", () => {
    render(<Login logIn={() => {}} />);
    const submitButton = screen.getByRole("button", { name: /ok/i });
    expect(submitButton).toBeDisabled();
  });

  test("enables submit when email and password are valid", async () => {
    render(<Login logIn={() => {}} />);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /ok/i });

    await userEvent.type(emailInput, "test@example.com");
    await userEvent.type(passwordInput, "password123");

    expect(submitButton).not.toBeDisabled();
  });

  test("calls logIn when form is submitted", async () => {
    const mockLogIn = jest.fn();
    render(<Login logIn={mockLogIn} />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /ok/i });

    await userEvent.type(emailInput, "test@example.com");
    await userEvent.type(passwordInput, "password123");
    await userEvent.click(submitButton);

    expect(mockLogIn).toHaveBeenCalledWith("test@example.com", "password123");
  });
});
