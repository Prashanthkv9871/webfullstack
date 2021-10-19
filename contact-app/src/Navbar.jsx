import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark">
          <Link to="/home" className="navbar-brand">
            React Routing
          </Link>

          <Link to="/contactapp" className="navbar-brand">
            Contacts
          </Link>
        </nav>
      </>
    );
  }
}
export default Navbar;