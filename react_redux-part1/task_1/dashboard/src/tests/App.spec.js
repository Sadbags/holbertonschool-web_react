import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";

// Notificaciones mock para los tests
const mockNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
];

describe("App Component (Functional)", () => {
  test("renders App without crashing", () => {
    render(<App initialNotifications={mockNotifications} />);
    expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
  });

  test("markNotificationAsRead removes the correct notification", async () => {
    render(<App initialNotifications={mockNotifications} />);

    // Mostrar el drawer de notificaciones
    const menuItems = screen.getAllByTestId("menuItem");
    fireEvent.click(menuItems[0]); // clic en el primer menuItem

    // Verificar que existan dos notificaciones al inicio
    const notifications = screen.getAllByTestId(/mark-read-/);
    expect(notifications.length).toBe(2);

    // Marcar la primera como leída
    fireEvent.click(screen.getByTestId("mark-read-1"));

    // Esperar a que la lista se actualice
    await waitFor(() => {
      const updatedNotifications = screen.getAllByTestId(/mark-read-/);
      expect(updatedNotifications.length).toBe(1);
      expect(updatedNotifications[0].getAttribute("data-testid")).toBe("mark-read-2");
    });
  });

  test("fetches notifications on mount (mocked)", async () => {
    render(<App initialNotifications={mockNotifications} />);

    const menuItems = screen.getAllByTestId("menuItem");
    fireEvent.click(menuItems[0]); // abrir drawer

    // Verificar que las notificaciones se muestran
    expect(screen.getByText(/New course available/i)).toBeInTheDocument();
    expect(screen.getByText(/New resume available/i)).toBeInTheDocument();
  });
});
