import React, { Component } from "react";

class Product extends Component {
  state = {
    counter: 1,
  };
  incrHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decrHandler = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <React.Fragment>
        <h3>Counter Value : {this.state.counter}</h3>
        <button onClick={this.decrHandler}>Decr</button>
        <button onClick={this.incrHandler}> Incr</button>
      </React.Fragment>
    );
  }
}

export default Product;
