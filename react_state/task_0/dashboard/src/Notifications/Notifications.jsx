import React, { Component } from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import "./Notifications.css";

class Notifications extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.notifications.length !== this.props.notifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  render() {
    const {
      displayDrawer,
      notifications,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;

    return (
      <div className="NotificationsContainer">
        <div className="menuItem" onClick={handleDisplayDrawer}>
          Your notifications
        </div>

        {displayDrawer && (
          <div className="Notifications">
            <button
              aria-label="Close"
              onClick={handleHideDrawer}
              style={{
                position: "absolute",
                right: "1rem",
                top: "1rem",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              X
            </button>

            <p>Here is the list of notifications</p>
            <ul>
              {notifications && notifications.length > 0 ? (
                notifications.map((notif) => (
                  <NotificationItem
                    key={notif.id}
                    type={notif.type}
                    value={notif.value}
                    html={notif.html}
                  />
                ))
              ) : (
                <NotificationItem value="No new notification for now" />
              )}
            </ul>
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
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string,
      }),
    })
  ),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: true,
  notifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
