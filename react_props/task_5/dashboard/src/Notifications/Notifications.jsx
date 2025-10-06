import PropTypes from "prop-types";
import "./Notifications.css";
import closeButton from "../assets/close-button.png";
import NotificationItem from "./NotificationItem.jsx";

function Notifications({ notifications = [], displayDrawer = true }) {
  return (
    <div className="notifications-root">
      <p>Here is the list of notifications</p>
      {displayDrawer && (
        <div className="notification-items">
          <button
            className="notification-close-button"
            type="button"
            aria-label="Close"
            onClick={() => {
              console.log("Close button has been clicked");
            }}
          >
            <img className="notification-close-icon" src={closeButton} alt="Close" />
          </button>

          {notifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <ul>
              {notifications.map((notification) => (
                <NotificationItem key={notification.id} {...notification} />
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.shape({ __html: PropTypes.string }),
    })
  ),
};

export default Notifications;
