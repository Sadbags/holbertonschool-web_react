import React from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySectionWithMarginBottom/BodySectionWithMarginBottom";
import newContext, { user, logOut } from "../Context/context";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user,
      logOut: this.logOut,
    };
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  };

  logOut = () => {
    this.setState({
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
    });
  };

  render() {
    const { user } = this.state;

    return (
      <newContext.Provider value={{ user: this.state.user, logOut: this.state.logOut }}>
        <div className="App">
          <div className="NotificationsContainer">
            <Notifications />
          </div>
          <Header />
          <BodySectionWithMarginBottom>
            {!user.isLoggedIn ? (
              <Login
                logIn={this.logIn}
                email={user.email}
                password={user.password}
              />
            ) : (
              <CourseList />
            )}
          </BodySectionWithMarginBottom>
          <BodySection title="News from the School">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </BodySection>
          <Footer />
        </div>
      </newContext.Provider>
    );
  }
}

export default App;
