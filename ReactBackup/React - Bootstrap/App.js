import React from "react";
import "./assets/css/super.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Product from "./components/Product/Product";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Login />
        <Product />
      </React.Fragment>
    );
  }
}
export default App;
