import React from "react";
class Message extends React.Component {
  product = {
    name: "iphone",
  };
  state = {
    message: "Hello......",
  };

  updateMessage = () => {
    console.log("two");
    this.setState({ message: "Good Morning" });
  };
  updateHandler = () => {
    this.setState({ message: "Good Night.. sweet React Dreams" });
  };
  render() {
    console.log("one");
    return (
      <React.Fragment>
        <h3>{this.state.message}</h3>
        <button onClick={this.updateMessage}>GM</button>
        <button onClick={this.updateHandler}>GN</button>
      </React.Fragment>
    );
  }
}

export default Message;
