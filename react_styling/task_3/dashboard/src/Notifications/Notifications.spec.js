import { render, screen, fireEvent } from "@testing-library/react";
import NotificationItem from "./NotificationItem";

describe("NotificationItem component", () => {
  test("renders correctly with value prop", () => {
    render(<NotificationItem value="Test notification" />);
    expect(screen.getByText("Test notification")).toBeInTheDocument();
  });

  test("renders correctly with html prop", () => {
    const html = { __html: "<u>Test HTML</u>" };
    render(<NotificationItem html={html} />);
    expect(screen.getByText("Test HTML")).toBeInTheDocument();
  });

  test("calls markAsRead when clicked", () => {
    const markAsReadMock = jest.fn();
    render(
      <NotificationItem
        id={1}
        value="Clickable"
        markAsRead={markAsReadMock}
      />
    );

    const item = screen.getByText("Clickable");
    fireEvent.click(item);
    expect(markAsReadMock).toHaveBeenCalledWith(1);
  });

  test("renders with default type when none provided", () => {
    render(<NotificationItem value="No type" />);
    const item = screen.getByText("No type");
    expect(item.dataset.notificationType).toBe("default");
  });

  test("renders with urgent type correctly", () => {
    render(<NotificationItem type="urgent" value="Urgent task" />);
    const item = screen.getByText("Urgent task");
    expect(item.dataset.notificationType).toBe("urgent");
  });
});
