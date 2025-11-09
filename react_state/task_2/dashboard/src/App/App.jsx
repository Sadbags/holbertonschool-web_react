import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySectionWithMarginBottom/BodySectionWithMarginBottom";
import AppContext, { user } from "../Context/context";

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
      <AppContext.Provider value={this.state}>
        <div className="App">
          <div className="NotificationsContainer">
            <Notifications />
          </div>
          <Header />
          <BodySectionWithMarginBottom>
            {user.isLoggedIn ? (
              <CourseList />
            ) : (
              <Login logIn={this.logIn} email={user.email} password={user.password} />
            )}
          </BodySectionWithMarginBottom>
          <BodySection title="News from the School">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </BodySection>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
