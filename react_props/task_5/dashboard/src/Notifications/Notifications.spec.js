import { fireEvent, render, screen } from "@testing-library/react";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils";

describe("Notifications component", () => {
  const notificationsList = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
  ];

  // Title should always be present regardless of displayDrawer
  test("always renders the Your notifications title", () => {
    render(<Notifications />);
    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
  });

  // displayDrawer = false: no drawer content
  test("does not render drawer content when displayDrawer is false", () => {
    render(<Notifications notifications={notificationsList} displayDrawer={false} />);
    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /close/i })).toBeNull();
    expect(screen.queryByText(/here is the list of notifications/i)).toBeNull();
    expect(screen.queryByRole("list")).toBeNull();
  });

  // displayDrawer = true: drawer content visible
  test("renders drawer content when displayDrawer is true", () => {
    render(<Notifications notifications={notificationsList} displayDrawer={true} />);
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });

  // displayDrawer = true and notifications empty: empty-state message
  test("renders empty state when displayDrawer is true and notifications is empty", () => {
    render(<Notifications notifications={[]} displayDrawer={true} />);
    expect(screen.getByText(/no new notification for now/i)).toBeInTheDocument();
    expect(screen.queryByText(/here is the list of notifications/i)).toBeNull();
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });

  test("renders the notifications title", () => {
    render(<Notifications notifications={notificationsList} displayDrawer={true} />);
    const title = screen.getByText(/here is the list of notifications/i);
    expect(title).toBeInTheDocument();
  });

  test("renders the close button", () => {
    render(<Notifications notifications={notificationsList} displayDrawer={true} />);
    const closeButton = screen.getByRole("button", { name: /close/i });
    expect(closeButton).toBeInTheDocument();
  });

  test("renders three notification list items with expected text", () => {
    render(<Notifications notifications={notificationsList} displayDrawer={true} />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(3);

    expect(items[0]).toHaveTextContent(/new course available/i);
    expect(items[1]).toHaveTextContent(/new resume available/i);
    expect(items[2]).toHaveTextContent(/urgent requirement\s*-\s*complete by eod/i);
  });

  test("logs to console when close button is clicked", () => {
    const consoleSpy = jest.spyOn(console, "log");
    render(<Notifications notifications={notificationsList} displayDrawer={true} />);

    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);

    expect(consoleSpy).toHaveBeenCalledWith("Close button has been clicked");

    consoleSpy.mockRestore();
  });
});
