import PropTypes from "prop-types";

// NotificationItem renders a notification entry with styling based on props.
function NotificationItem({ type, value, html }) {
  // Render condicional según el type
  if (type === "urgent") {
    return (
      <li
        style={{ color: "red" }}
        data-notification-type="urgent"
        {...(html ? { dangerouslySetInnerHTML: html } : {})}
      >
        {!html && value}
      </li>
    );
  }

  // default
  return (
    <li
      style={{ color: "blue" }}
      data-notification-type="default"
      {...(html ? { dangerouslySetInnerHTML: html } : {})}
    >
      {!html && value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
};

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: null,
};

export default NotificationItem;
