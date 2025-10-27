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
    const hasNotifications = notifications && notifications.length > 0;

    return (
      <div className="relative border border-dashed border-[var(--main-color)] p-4 w-[80%] mx-auto mt-6">
        <div className="absolute right-4 top-2 font-bold">
          Your notifications
        </div>

        {displayDrawer && (
          <div className="mt-8">
            <button
              type="button"
              aria-label="Close"
              onClick={() => console.log("Close button has been clicked")}
              className="absolute right-4 top-2"
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
