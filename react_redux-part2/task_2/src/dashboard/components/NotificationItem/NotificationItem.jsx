import { memo } from "react";
import PropTypes from "prop-types";

function NotificationItem({ type = "default", html, value, id, markAsRead }) {
  const colorClass = type === "urgent"
    ? "text-[var(--urgent-notification-item)] mb-1 text-sm md:text-[0.95rem] max-[912px]:border-b max-[912px]:border-gray-300 max-[912px]:py-2 max-[912px]:px-3 max-[912px]:w-full"
    : "text-[var(--default-notification-item)] mb-1 text-sm md:text-[0.95rem] max-[912px]:border-b max-[912px]:border-gray-300 max-[912px]:py-2 max-[912px]:px-3 max-[912px]:w-full";

  if (html) {
    return (
      <li
        className={colorClass}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead && markAsRead(id)}
      ></li>
    );
  }

  return (
    <li
      className={colorClass}
      data-notification-type={type}
      onClick={() => markAsRead && markAsRead(id)}
    >
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  id: PropTypes.number,
  markAsRead: PropTypes.func,
};

export default memo(NotificationItem);