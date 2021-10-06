import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    console.log("First");
  }
  incrHandler() {
    console.log("Third");
    this.setState({ counter: 100 });
  }
  render() {
    console.log("second");
    return (
      <>
        <h2>Counter Value: {this.state.counter}</h2>
        <button
          onClick={() => {
            this.incrHandler();
          }}
        >
          Increment
        </button>
      </>
    );
  }
}
export default Counter;
