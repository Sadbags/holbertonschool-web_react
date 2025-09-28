import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders 2 input elements', () => {
    render(<App />);
    const inputs = screen.getAllByRole('textbox'); // Finds input elements
    expect(inputs).toHaveLength(1); // Email input is a textbox
    const passwordInput = screen.getByLabelText(/password/i); // Finds password input
    expect(passwordInput).toBeInTheDocument();
  });

  test('renders 2 label elements with the text Email and Password', () => {
    render(<App />);
    const emailLabel = screen.getByLabelText(/email/i);
    const passwordLabel = screen.getByLabelText(/password/i);
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });

  test('renders a button with the text "OK"', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /ok/i });
    expect(button).toBeInTheDocument();
  });
});
