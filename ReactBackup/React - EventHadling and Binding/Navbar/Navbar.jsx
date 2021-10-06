import React from "react";
class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark">
          <a href="/home" className="navbar-brand">
            React Props Example
          </a>
        </nav>
      </>
    );
  }
}
export default Navbar;
