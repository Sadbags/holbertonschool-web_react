import { Fragment } from "react";
import "./App.css";
import Notifications from "../Notifications/Notifications.jsx";
import Header from "../Header/Header.jsx";
import Login from "../Login/Login.jsx";
import Footer from "../Footer/Footer.jsx";

function App() {
  // Creamos el array de notificaciones con los 3 elementos requeridos
  const notificationsList = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: "<strong>Urgent requirement</strong>" } },
  ];

  return (
    <div className="App">
      <Fragment>
        <div className="root-notifications">
          <Notifications notifications={notificationsList} />
        </div>
        <Header />
        <div className="red-line" />
        <Login />
        <div className="red-line" />
        <Footer />
      </Fragment>
    </div>
  );
}

export default App;
