import React from "react";

function NotificationItem({ id, type, value, html, markAsRead }) {
  if (html) {
    return (
      <li
        data-testid={`mark-read-${id}`}
        data-notification-type={type}
        style={{ cursor: "pointer" }}
        onClick={() => markAsRead(id)}
        dangerouslySetInnerHTML={html}
      />
    );
  }

  return (
    <li
      data-testid={`mark-read-${id}`}
      data-notification-type={type}
      style={{ cursor: "pointer" }}
      onClick={() => markAsRead(id)}
    >
      {value}
    </li>
  );
}

export default NotificationItem;
