import React, { Component } from "react";
import PropTypes from "prop-types";
import closeButton from "../assets/close-button.png";
import NotificationItem from "./NotificationItem";

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

    // Condición para la animación bounce
    const shouldBounce = notifications.length > 0 && !displayDrawer;

    return (
      <div
        className={`notifications-root fixed sm:static right-0 top-0 sm:right-auto sm:top-auto
        ${displayDrawer ? "block" : "hidden sm:block"}
        bg-white sm:bg-transparent border sm:border-none
        border-[var(--main-color)] border-dashed
        p-4 sm:p-0 w-full h-full sm:h-auto z-50 overflow-auto`}
      >
        {/* Título con animación condicional */}
        <div
          className={`notification-title text-right font-semibold text-lg mb-2 ${
            shouldBounce ? "animate-bounce" : ""
          }`}
        >
          Your notifications
        </div>

        {displayDrawer && (
          <div className="notification-items relative">
            <button
              className="notification-close-button absolute right-2 top-2"
              type="button"
              aria-label="Close"
              onClick={() => console.log("Close button has been clicked")}
            >
              <img
                src={closeButton}
                alt="Close"
                className="w-4 h-4 cursor-pointer"
              />
            </button>

            {notifications.length ? (
              <>
                <p className="mb-2">Here is the list of notifications</p>
                <ul className="list-disc sm:list-none pl-6 sm:pl-0">
                  {notifications.map((n) => (
                    <NotificationItem
                      key={n.id}
                      {...n}
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
