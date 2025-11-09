// src/App/App.jsx
import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import AppContext, { user as defaultUser } from "../Context/context";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: defaultUser,
      displayDrawer: false,
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

  handleDisplayDrawer = () => this.setState({ displayDrawer: true });
  handleHideDrawer = () => this.setState({ displayDrawer: false });

  render() {
    const { user, displayDrawer } = this.state;

    return (
      <AppContext.Provider value={{ user, logOut: this.logOut }}>
        <>
          <Notifications
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />
          <div className="App">
            <Header />
            {user.isLoggedIn ? (
              <CourseList />
            ) : (
              <Login
                logIn={this.logIn}
                email={user.email}
                password={user.password}
              />
            )}
            <Footer />
          </div>
        </>
      </AppContext.Provider>
    );
  }
}

export default App;
