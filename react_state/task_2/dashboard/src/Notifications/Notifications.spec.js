import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications";

describe("Notifications component", () => {
  test("calls handleDisplayDrawer when clicking on 'Your notifications'", () => {
    const handleDisplayDrawer = jest.fn();
    render(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);

    const menuItem = screen.getByText("Your notifications");
    fireEvent.click(menuItem);

    expect(handleDisplayDrawer).toHaveBeenCalledTimes(1);
  });

  test("calls handleHideDrawer when clicking on close button", () => {
    const handleHideDrawer = jest.fn();
    render(
      <Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />
    );

    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);

    expect(handleHideDrawer).toHaveBeenCalledTimes(1);
  });

  test("renders 'No new notification for now' when there are no notifications", () => {
    render(<Notifications displayDrawer={true} notifications={[]} />);
    expect(
      screen.getByText("No new notification for now")
    ).toBeInTheDocument();
  });

  test("renders notification list when notifications are provided", () => {
    const mockNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];

    render(
      <Notifications displayDrawer={true} notifications={mockNotifications} />
    );

    expect(
      screen.getByText("Here is the list of notifications")
    ).toBeInTheDocument();
    expect(screen.getByText("New course available")).toBeInTheDocument();
    expect(screen.getByText("New resume available")).toBeInTheDocument();
  });
});
