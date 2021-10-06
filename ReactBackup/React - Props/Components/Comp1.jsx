import React from "react";
import Comp2 from "./Comp2";
function Comp1() {
  let hero_Name = "Raj Kumar";
  let age = 22;
  return (
    <div>
      <h1 style={{ backgroundColor: "yellow" }}>
        Component One Data : {hero_Name}
      </h1>
      <Comp2 suman={hero_Name} a ={age}/>
    </div>
  );
}
export default Comp1;
