import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Login from "./Login.jsx"; // Importa tu componente Login

describe("Login component", () => {
  test("renders 2 labels, 2 inputs, and 1 button", () => {
    render(<Login />);
    const labels = screen.getAllByText(/email:|password:/i);
    const inputs = screen.getAllByLabelText(/email|password/i);
    const buttons = screen.getAllByRole("button");

    expect(labels).toHaveLength(2);
    expect(inputs).toHaveLength(2);
    expect(buttons).toHaveLength(1);
    expect(buttons[0]).toHaveTextContent(/ok/i);
  });

  test("focuses the inputs when their label is clicked", async () => {
    const user = userEvent.setup();
    render(<Login />);

    const emailLabel = screen.getByText(/email:/i);
    const emailInput = screen.getByLabelText(/email/i);
    await user.click(emailLabel);
    expect(emailInput).toHaveFocus();

    const passwordLabel = screen.getByText(/password:/i);
    const passwordInput = screen.getByLabelText(/password/i);
    await user.click(passwordLabel);
    expect(passwordInput).toHaveFocus();
  });
});
