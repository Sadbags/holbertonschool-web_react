import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      count: 0,
    };

    // Bind the event handler to 'this' context
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  // Event handler method
  handleIncrement() {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default App;
