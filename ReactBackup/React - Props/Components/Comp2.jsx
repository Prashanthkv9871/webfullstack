import React from "react";
function Comp2(props) {
  return (
    <div>
      <h1 style={{ backgroundColor: "red" }}>
        Component Two : {props.suman} ***** {props.a}
      </h1>
      <pre>{JSON.stringify(props)}</pre>
    </div>
  );
}
export default Comp2;
