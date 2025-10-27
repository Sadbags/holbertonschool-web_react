import { PureComponent } from "react";
import PropTypes from "prop-types";

class NotificationItem extends PureComponent {
  render() {
    const { type = "default", html, value, id, markAsRead } = this.props;

    // Usa las variables de color declaradas en main.css
    const itemStyle = {
      color:
        type === "urgent"
          ? "var(--urgent-notification-item)"
          : "var(--default-notification-item)",
    };

    if (html) {
      return (
        <li
          style={itemStyle}
          data-notification-type={type}
          dangerouslySetInnerHTML={html}
          onClick={() => markAsRead && markAsRead(id)}
        ></li>
      );
    }

    return (
      <li
        style={itemStyle}
        data-notification-type={type}
        onClick={() => markAsRead && markAsRead(id)}
      >
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  id: PropTypes.number,
  markAsRead: PropTypes.func,
};

export default NotificationItem;
