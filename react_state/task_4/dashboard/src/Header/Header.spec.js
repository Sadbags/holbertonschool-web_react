import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import AppContext from "../Context/context";

describe("Header component", () => {
  test("contains the Holberton logo image", () => {
    render(<Header />);
    const logo = screen.getByRole("img", { name: /holberton logo/i });
    expect(logo).toBeInTheDocument();
  });

  test("contains the h1 heading with the correct text", () => {
    render(<Header />);
    const heading = screen.getByRole("heading", {
      level: 1,
      name: /school dashboard/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test("does not render logoutSection when user is not logged in", () => {
    render(
      <AppContext.Provider
        value={{
          user: { email: "", password: "", isLoggedIn: false },
          logOut: jest.fn(),
        }}
      >
        <Header />
      </AppContext.Provider>
    );
    expect(screen.queryByText(/logout/i)).toBeNull();
  });

  test("renders logoutSection when user is logged in", () => {
    render(
      <AppContext.Provider
        value={{
          user: { email: "test@test.com", password: "12345678", isLoggedIn: true },
          logOut: jest.fn(),
        }}
      >
        <Header />
      </AppContext.Provider>
    );

    expect(
      screen.getByText((content, element) =>
        content.startsWith("Welcome") && element.textContent.includes("test@test.com")
      )
    ).toBeInTheDocument();

    expect(screen.getByText(/\(logout\)/i)).toBeInTheDocument();
  });

  test("calls logOut when clicking logout link", () => {
    const mockLogOut = jest.fn();
    render(
      <AppContext.Provider
        value={{
          user: { email: "test@test.com", password: "12345678", isLoggedIn: true },
          logOut: mockLogOut,
        }}
      >
        <Header />
      </AppContext.Provider>
    );

    fireEvent.click(screen.getByText(/\(logout\)/i));
    expect(mockLogOut).toHaveBeenCalled();
  });
});
