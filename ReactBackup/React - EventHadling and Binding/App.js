import React from "react";

import Navbar from "./Navbar/Navbar";
/* import Product from "./component/Product";
import Counter from "./component/Counter";
import Wish from "./component/Wish"; */
import Message from "./EventHandling/Message";
import "./assets/css/super.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        {/*  <Product /> */}
        <h4 />
        {/*   <Wish />
        <Counter /> */}
        <Message />
      </React.Fragment>
    );
  }
}
export default App;
