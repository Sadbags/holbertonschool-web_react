import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App component", () => {
  test("renders the Notifications component", () => {
    render(<App />);
    expect(
      screen.getByText(/here is the list of notifications/i)
    ).toBeInTheDocument();
  });

  test("renders the Header component", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { name: /school dashboard/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders the Login component", () => {
    render(<App />);
    expect(
      screen.getByText(/login to access the full dashboard/i)
    ).toBeInTheDocument();
  });

  test("renders the Footer component", () => {
    render(<App />);
    expect(screen.getByText(/copyright/i)).toBeInTheDocument();
  });

  test("renders Login section when isLoggedIn is false", () => {
    render(<App isLoggedIn={false} />);
    expect(
      screen.getByText(/login to access the full dashboard/i)
    ).toBeInTheDocument();
  });

  test("renders CourseList section correctly when isLoggedIn is true", () => {
    render(<App isLoggedIn={true} />);
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
    expect(table.id).toBe("CourseList");
  });

  test("does not crash when pressing control+h", () => {
    render(<App />);
    const event = new KeyboardEvent("keydown", {
      ctrlKey: true,
      key: "h",
      bubbles: true,
    });
    expect(() => document.dispatchEvent(event)).not.toThrow();
  });

  test("displays News from the School section", () => {
    render(<App />);
    const newsTitle = screen.getByText(/news from the school/i);
    expect(newsTitle).toBeInTheDocument();

    // Verifica que el contenido del texto esté presente
    expect(screen.getByText(/ipsum/i)).toBeInTheDocument();
  });
});
