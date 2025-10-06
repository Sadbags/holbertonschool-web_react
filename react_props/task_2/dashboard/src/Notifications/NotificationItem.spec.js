import { render, screen } from "@testing-library/react";
import NotificationItem from "./NotificationItem";

describe("NotificationItem component", () => {
  test("renders default notification with blue text and correct data attribute", () => {
    render(<NotificationItem type="default" value="Test default" />);
    const listItem = screen.getByText(/test default/i);
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveAttribute("data-notification-type", "default");
    expect(listItem).toHaveStyle("color: blue");
  });

  test("renders urgent notification with red text and correct data attribute", () => {
    render(<NotificationItem type="urgent" value="Test urgent" />);
    const listItem = screen.getByText(/test urgent/i);
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveAttribute("data-notification-type", "urgent");
    expect(listItem).toHaveStyle("color: red");
  });

  test("renders html content when html prop is provided", () => {
    const htmlContent = { __html: "<strong>Urgent HTML</strong>" };
    render(<NotificationItem type="urgent" html={htmlContent} />);
    const listItem = screen.getByText(/Urgent HTML/i);
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveAttribute("data-notification-type", "urgent");
    expect(listItem).toHaveStyle("color: red");
  });
});
