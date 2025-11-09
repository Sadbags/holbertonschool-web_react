import React from "react";
import PropTypes from "prop-types";

const NotificationItem = ({ type = "default", value, html, id, markAsRead }) => {
  const style = { color: type === "urgent" ? "red" : "blue" };

  if (html) {
    return (
      <li
        data-notification-type={type}
        data-testid="notification-item"
        style={style}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead && markAsRead(id)}
      />
    );
  }

  return (
    <li
      data-notification-type={type}
      data-testid="notification-item"
      style={style}
      onClick={() => markAsRead && markAsRead(id)}
    >
      {value}
    </li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  id: PropTypes.number,
  markAsRead: PropTypes.func,
};

export default NotificationItem;
