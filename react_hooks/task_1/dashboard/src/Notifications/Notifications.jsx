import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";

class Notifications extends PureComponent {
  render() {
    const { displayDrawer, listNotifications, markNotificationAsRead } = this.props;

    return (
      <>
        <div className="menuItem">Your notifications</div>
        {displayDrawer && (
          <div className="Notifications">
            <button
              style={{ float: "right" }}
              aria-label="Close"
              onClick={() => console.log("Close button has been clicked")}
            >
              x
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {(!listNotifications || listNotifications.length === 0) && (
                <li>No new notification for now</li>
              )}
              {listNotifications &&
                listNotifications.map((n) => (
                  <NotificationItem
                    key={n.id}
                    type={n.type}
                    value={n.value}
                    html={n.html}
                    markAsRead={() => markNotificationAsRead(n.id)}
                  />
                ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.array,
  markNotificationAsRead: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  markNotificationAsRead: () => {},
};

export default Notifications;
