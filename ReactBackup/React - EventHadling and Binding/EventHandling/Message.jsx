import React from "react";
class Message extends React.Component {
  constructor(x) {
    super(x);
    this.state = {
      msg: "Hello",
    };
  }
  updateMessageHandler = (newMsg, a, b, c) => {
    console.log(c);
    this.setState({ msg: newMsg });
  };
  render() {
    return (
      <>
        <h1>Message : {this.state.msg}</h1>
        <button
          onClick={this.updateMessageHandler.bind(
            this,
            "Good Mornig",
            {},
            [],
            [{}, {}]
          )}
        >
          GM
        </button>
        <button onClick={this.updateMessageHandler.bind(this, "GN.....")}>
          GN
        </button>

        <button
          onClick={this.updateMessageHandler.bind(this, "GA ..go for lunch")}
        >
          GA
        </button>
      </>
    );
  }
}

export default Message;
