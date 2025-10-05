import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {
  // El login prompt debe mostrarse
  test("renders the login prompt", () => {
    render(<Login />);
    const loginPrompt = screen.getByText(/login to access the full dashboard/i);
    expect(loginPrompt).toBeInTheDocument();
  });

  // El formulario debe incluir 2 labels, 2 inputs y 1 botón
  test("renders 2 labels, 2 inputs, and 1 button", () => {
    render(<Login />);
    const labels = screen.getAllByText(/(email|password):/i); // Labels con ':'
    const inputs = screen.getAllByLabelText(/email|password/i); // Inputs asociados
    const buttons = screen.getAllByRole("button"); // Botón OK
    expect(labels).toHaveLength(2);
    expect(inputs).toHaveLength(2);
    expect(buttons).toHaveLength(1);
    expect(buttons[0]).toHaveTextContent(/ok/i);
  });

  // Hacer click en el label debe enfocar el input correspondiente
  test("focuses the email input when its label is clicked", async () => {
    const user = userEvent.setup();
    render(<Login />);
    const emailLabel = screen.getByText(/email:/i);
    const emailInput = screen.getByLabelText(/email/i);
    await user.click(emailLabel);
    expect(emailInput).toHaveFocus();
  });
});
