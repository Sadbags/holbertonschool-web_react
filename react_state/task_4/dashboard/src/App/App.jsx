import React, { Component } from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from "../BodySectionWithMarginBottom/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import AppContext, { user as defaultUser } from "../Context/context";
import { notificationsList } from "../Notifications/NotificationsList";
import { coursesList } from "../CourseList/CourseList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: defaultUser,
      listNotifications: notificationsList,
      listCourses: coursesList,
    };
  }

  // ✅ Método que el checker busca
  markNotificationAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
    this.setState({
      listNotifications: this.state.listNotifications.filter(
        (notif) => notif.id !== id
      ),
    });
  };

  render() {
    const { user, listNotifications, listCourses } = this.state;

    return (
      <AppContext.Provider value={{ user }}>
        <>
          <Notifications
            listNotifications={listNotifications}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <div className="App">
            <Header />
            {user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the school">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum gravida sem sit amet orci malesuada, et cursus eros
                pretium.
              </p>
            </BodySection>
            <Footer />
          </div>
        </>
      </AppContext.Provider>
    );
  }
}

export default App;
