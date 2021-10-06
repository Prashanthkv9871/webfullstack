import React from "react";
import CompB from "./CompB";
class CompA extends React.Component {
  product = {
    name: "Iphone 5s",
    price: 55000,
    color: ["gray", "red"],
    image:
      "https://rukminim1.flixcart.com/image/312/312/mobile/m/t/8/apple-iphone-7-na-original-imaemzfjmrwpksbu.jpeg?q=70",
  };
  render() {
    return (
      <>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <div class="card">
                <div className="card-heder">
                  <img src={this.product.image} width="300px" height="200px" />
                </div>
                <div className="card-body">
                  <h3>{this.product.name}</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <CompB one={this.product} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default CompA;
