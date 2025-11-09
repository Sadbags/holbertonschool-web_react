import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { shallow } from "enzyme";

describe("App component", () => {
  test("renders the notifications component", () => {
    render(<App />);
    const notificationsCopy = screen.getByText(/here is the list of notifications/i);
    expect(notificationsCopy).toBeInTheDocument();
  });

  test("renders the header component", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { name: /school dashboard/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders the login component", () => {
    render(<App />);
    const loginPrompt = screen.getByText(/login to access the full dashboard/i);
    expect(loginPrompt).toBeInTheDocument();
  });

  test("renders the footer component", () => {
    render(<App />);
    const footerCopy = screen.getByText(/copyright/i);
    expect(footerCopy).toBeInTheDocument();
  });

  test("renders Login section even when isLoggedIn is false", () => {
    render(<App isLoggedIn={false} />);
    expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();
  });

  test("renders CourseList section correctly when isLoggedIn is true", () => {
    render(<App isLoggedIn={true} />);
    const table = screen.getByRole("table", { name: "" });
    expect(table).toBeInTheDocument();
    expect(table.getAttribute("id")).toBe("CourseList");
  });

  test("does not throw when pressing control+h", () => {
    render(<App />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h", bubbles: true });
    expect(() => document.dispatchEvent(event)).not.toThrow();
  });

  test("displays News from the School section", () => {
    render(<App />);
    const newsTitle = screen.getByText(/news from the school/i);
    expect(newsTitle).toBeInTheDocument();

    const newsContent = screen.getByText(/ipsum/i);
    expect(newsContent).toBeInTheDocument();
  });


  test("displayDrawer is false by default", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state("displayDrawer")).toBe(false);
  });

  test("handleDisplayDrawer sets displayDrawer to true", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state("displayDrawer")).toBe(true);
  });

  test("handleHideDrawer sets displayDrawer to false", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state("displayDrawer")).toBe(false);
  });
});
