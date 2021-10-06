import React from "react";
class CompB extends React.Component {
  render() {
    return (
      <>
        <h2>Component B</h2>
        <pre>{JSON.stringify(this.props)}</pre>
        <h2>Product Name: {this.props.one.name}</h2>
      </>
    );
  }
}
export default CompB;
