import React from "react";
import Cart from "./Cart";

class Product extends React.Component {
  product_Name = "Iphone 5S";
  color = ["White", "Gray", "Black"];
  render() {
    return (
      <div>
        <Cart
          message="Good Morning"
          name={this.product_Name}
          product_Color={this.color}
        />
      </div>
    );
  }
}
export default Product;
