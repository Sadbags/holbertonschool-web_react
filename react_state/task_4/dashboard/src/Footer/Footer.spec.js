import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";
import AppContext from "../Context/context";

describe("Footer component with context", () => {
  test("renders without crashing", () => {
    render(<Footer />);
    expect(screen.getByText(/Holberton School/i)).toBeInTheDocument();
  });

  test("does NOT display Contact us link when user is logged out", () => {
    const user = { isLoggedIn: false };
    render(
      <AppContext.Provider value={{ user }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(screen.queryByText(/Contact us/i)).not.toBeInTheDocument();
  });

  test("displays Contact us link when user is logged in", () => {
    const user = { isLoggedIn: true, email: "test@example.com", password: "12345678" };
    render(
      <AppContext.Provider value={{ user }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(screen.getByText(/Contact us/i)).toBeInTheDocument();
  });
});
