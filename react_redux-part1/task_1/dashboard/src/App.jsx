import React, { useEffect, useReducer } from "react";
import Notifications from "./components/Notifications/Notifications";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";
import CourseList from "./pages/CourseList/CourseList";
import BodySectionWithMarginBottom from "./components/BodySectionWithMarginBottom/BodySectionWithMarginBottom";
import BodySection from "./components/BodySection/BodySection";
import { getLatestNotification } from "./utils/utils";
import { appReducer, initialState, APP_ACTIONS } from "./appReducer";

function App({ initialNotifications = [] }) {
  const [state, dispatch] = useReducer(appReducer, { ...initialState, notifications: initialNotifications });

  // Handlers
  const handleLogin = (email, password) =>
    dispatch({ type: APP_ACTIONS.LOGIN, payload: { email, password } });

  const handleLogout = () => dispatch({ type: APP_ACTIONS.LOGOUT });

  const handleDisplayDrawer = () => dispatch({ type: APP_ACTIONS.SHOW_DRAWER });
  const handleHideDrawer = () => dispatch({ type: APP_ACTIONS.HIDE_DRAWER });

  const handleMarkNotificationAsRead = id =>
    dispatch({ type: APP_ACTIONS.MARK_NOTIFICATION_READ, payload: id });

  return (
    <>
      <Notifications
        notifications={state.notifications}
        displayDrawer={state.displayDrawer}
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
        markNotificationAsRead={handleMarkNotificationAsRead}
      />

      <Header user={state.user} logOut={handleLogout} />

      {!state.user.isLoggedIn ? (
        <BodySectionWithMarginBottom title="Log in to continue">
          <Login logIn={handleLogin} />
        </BodySectionWithMarginBottom>
      ) : (
        <BodySectionWithMarginBottom title="Course list">
          <CourseList courses={state.courses} />
        </BodySectionWithMarginBottom>
      )}

      <BodySection title="News from the School">
        <p>Holberton School News goes here</p>
      </BodySection>

      <Footer user={state.user} logOut={handleLogout} />
    </>
  );
}

export default App;
