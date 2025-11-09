import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Notifications from "./Notifications";

describe("Notifications component", () => {
  test("renders 'No new notification for now' when empty", () => {
    render(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(screen.getByText(/No new notification for now/i)).toBeInTheDocument();
  });

  test("renders notification list when provided", () => {
    const mockNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];
    render(<Notifications displayDrawer={true} listNotifications={mockNotifications} />);
    expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
    expect(screen.getByText(/New course available/i)).toBeInTheDocument();
  });

  test("calls markNotificationAsRead when clicking a notification item", () => {
    const mockNotifications = [{ id: 1, type: "default", value: "Test notification" }];
    const mockMarkAsRead = jest.fn();
    render(
      <Notifications
        displayDrawer={true}
        listNotifications={mockNotifications}
        markNotificationAsRead={mockMarkAsRead}
      />
    );
    const notifItem = screen.getByText(/Test notification/i);
    notifItem.click();
    expect(mockMarkAsRead).toHaveBeenCalledWith(1);
  });
});
