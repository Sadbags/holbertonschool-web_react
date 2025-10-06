import PropTypes from "prop-types";

// NotificationItem renders a notification entry with styling based on props.
function NotificationItem({ type, html, value }) {
  const itemStyle = {
    color: type === "urgent" ? "red" : "blue",
  };

  return (
    <li
      style={itemStyle}
      data-notification-type={type}
      {...(html ? { dangerouslySetInnerHTML: html } : {})}
    >
      {!html && value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: null,
};

export default NotificationItem;

