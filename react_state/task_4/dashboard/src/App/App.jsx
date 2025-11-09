import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySectionWithMarginBottom/BodySectionWithMarginBottom";
import AppContext, { user as defaultUser, logOut } from "../Context/context";
import { notificationsList } from "../Notifications/NotificationsList";
import { coursesList } from "../CourseList/CourseList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: defaultUser,
      isLoggedIn: false,
      listNotifications: notificationsList,
      listCourses: coursesList,
    };
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
      isLoggedIn: true,
    });
  };

  logOut = () => {
    this.setState({
      user: defaultUser,
      isLoggedIn: false,
    });
  };

  markNotificationAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
    this.setState({
      listNotifications: this.state.listNotifications.filter(
        (notif) => notif.id !== id
      ),
    });
  };

  render() {
    const { isLoggedIn, listNotifications, listCourses, user } = this.state;
    const value = {
      user,
      logOut: this.logOut,
    };

    return (
      <AppContext.Provider value={value}>
        <div className="App">
          <div className="heading-section">
            <Notifications
              listNotifications={listNotifications}
              markNotificationAsRead={this.markNotificationAsRead}
            />
            <Header />
          </div>

          <div className="App-body">
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>
                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                consequat ipsum, nec sagittis sem nibh id elit.
              </p>
            </BodySection>
          </div>

          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
