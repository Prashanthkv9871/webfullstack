import React from "react";
import "./Footer.css";
class Footer extends React.Component {
  render() {
    let x = {
      color: "green",
    };
    return (
      <div>
        <h1> Footer Data</h1>
        <h2 style={{ color: "red" }}> Footer - Inside - inline style</h2>
        <h3 style={x}>Good Morning - inside component - inside render</h3>
        <h4 className="rajini"> RajinKanth</h4>
        <h1 style={{ backgroundColor: "green" }}>Viswajeet</h1>
      </div>
    );
  }
}
export default Footer;
