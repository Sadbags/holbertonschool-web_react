import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotificationItem from "./NotificationItem";

describe("NotificationItem component", () => {
  test("renders the correct text when value prop is provided", () => {
    render(<NotificationItem type="default" value="Test notification" />);
    const item = screen.getByText("Test notification");
    expect(item).toBeInTheDocument();
    expect(item).toHaveAttribute("data-notification-type", "default");
  });

  test("renders HTML content when html prop is provided", () => {
    const html = { __html: "<strong>Urgent requirement</strong>" };
    render(<NotificationItem type="urgent" html={html} />);
    const item = screen.getByTestId("notification-item");
    expect(item.innerHTML).toContain("Urgent requirement");
    expect(item).toHaveAttribute("data-notification-type", "urgent");
  });

  test("calls markAsRead with correct id when clicked", () => {
    const mockMarkAsRead = jest.fn();
    render(
      <NotificationItem
        id={42}
        value="Click me"
        markAsRead={mockMarkAsRead}
      />
    );
    const item = screen.getByText("Click me");
    fireEvent.click(item);
    expect(mockMarkAsRead).toHaveBeenCalledTimes(1);
    expect(mockMarkAsRead).toHaveBeenCalledWith(42);
  });
});
