import React, { Component } from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer/Footer";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default App;
