import React from "react";
import "./assets/css/super.css";
import Navbar from "./Navbar/Navbar";
/* import CompA from "./Components/Props/CompA";
 */
import Message from "./Components/State/Message";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        {/* <CompA /> */}
        <Message />
      </React.Fragment>
    );
  }
}
export default App;
