import { Component } from "react";
import PropTypes from "prop-types";
import closeButton from "../assets/close-button.png";
import NotificationItem from "./NotificationItem.jsx";

class Notifications extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      (this.props.notifications?.length || 0) !==
      (nextProps.notifications?.length || 0)
    );
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    const { notifications = [], displayDrawer = false } = this.props;
    const hasNotifications = notifications.length > 0;

    return (
      <div className="p-4 border-2 border-dashed border-[var(--main-color)]">
        <p className="text-right font-bold mb-2">Your notifications</p>

        {displayDrawer && (
          <div className="relative">
            <button
              type="button"
              aria-label="Close"
              className="absolute top-0 right-0"
              onClick={() => console.log("Close button has been clicked")}
            >
              <img src={closeButton} alt="Close" className="w-4 h-4" />
            </button>

            {hasNotifications ? (
              <>
                <p>Here is the list of notifications</p>
                <ul>
                  {notifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      {...notification}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              </>
            ) : (
              <p>No new notification for now</p>
            )}
          </div>
        )}
      </div>
    );
  }
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
