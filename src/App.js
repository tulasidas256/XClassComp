import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  handleIncrement = (e) => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = (e) => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
