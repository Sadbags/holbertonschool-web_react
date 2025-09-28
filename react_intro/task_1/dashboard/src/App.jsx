import "./App.css";
import holberton_logo from "./holberton_logo.jpg";
import utils from "./utils";
import Notifications from "./Notifications";

const { getCurrentYear, getFooterCopy } = utils;

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={holberton_logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>

      {/* Notifications component */}
      <div className="root-notifications">
        <Notifications />
      </div>

      <div className="App-footer">
      <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
