import PropTypes from "prop-types";

function NotificationItem({ type = "default", html, value }) {
  const itemStyle = {
    color: type === "urgent" ? "red" : "blue",
  };

  return html ? (
    <li
      style={itemStyle}
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
    ></li>
  ) : (
    <li style={itemStyle} data-notification-type={type}>
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
};

export default NotificationItem;
