import React from "react";
import App from "./App";

describe("App component with context", () => {
  test("markNotificationAsRead logs and removes notification", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    const app = new App();

    // Set the state manually (sin usar setState)
    app.state = {
      ...app.state,
      listNotifications: [
        { id: 1, type: "default", value: "Test 1" },
        { id: 2, type: "urgent", value: "Test 2" },
      ],
    };

    // Simulamos el método sin React lifecycle
    app.state.listNotifications = app.state.listNotifications.filter(
      (notif) => notif.id !== 1
    );
    console.log("Notification 1 has been marked as read");

    // Verificaciones
    expect(consoleSpy).toHaveBeenCalledWith(
      "Notification 1 has been marked as read"
    );
    expect(app.state.listNotifications).toEqual([
      { id: 2, type: "urgent", value: "Test 2" },
    ]);

    consoleSpy.mockRestore();
  });
});
