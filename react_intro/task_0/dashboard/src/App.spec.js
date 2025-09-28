import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders 2 input elements", () => {
    render(<App />);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    // Combined check for both inputs
    expect([emailInput, passwordInput].every(el => el)).toBe(true);
  });

  test("renders 2 labels with text Email and Password", () => {
    render(<App />);
    const emailLabel = screen.getByText(/email/i);
    const passwordLabel = screen.getByText(/password/i);

    // Combined check for both labels
    expect([emailLabel, passwordLabel].every(el => el)).toBe(true);
  });

  test('renders a button with text "OK"', () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /ok/i });
    expect(button).toBeInTheDocument();
  });

  test("renders the form element", () => {
    render(<App />);
    const form = screen.getByRole("form", { hidden: true });
    expect(form).toBeInTheDocument();
  });
});
