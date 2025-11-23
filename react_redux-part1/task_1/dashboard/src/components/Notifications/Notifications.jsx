import React from "react";
import NotificationItem from "../NotificationItem/NotificationItem";

function Notifications({ notifications, displayDrawer, handleDisplayDrawer, handleHideDrawer, markNotificationAsRead }) {
  return (
    <div>
      <div data-testid="menuItem" style={{ marginLeft: "auto", cursor: "pointer" }} onClick={handleDisplayDrawer}>
        Your notifications
      </div>
      {displayDrawer && (
        <div data-testid="notifications">
          <h2>Your notifications</h2>
          <ul>
            {notifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              notifications.map(n => (
                <NotificationItem
                  key={n.id}
                  id={n.id}
                  type={n.type}
                  value={n.value}
                  html={n.html}
                  markAsRead={markNotificationAsRead}
                />
              ))
            )}
          </ul>
          <button aria-label="Close" onClick={handleHideDrawer}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Notifications;
