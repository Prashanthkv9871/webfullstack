import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_Name: "APPLE iPhone 11 (Yellow, 64 GB)",
      price: 49999,
      image:
        "https://rukminim1.flixcart.com/image/224/224/kgiaykw0/mobile/r/f/s/apple-iphone-11-mhde3hn-a-original-imafwqepzbrcagw3.jpeg?q=90",
      qty: 10,
    };
  }

  decrHandler = () => {
    this.setState({ qty: this.state.qty - 1 });
  };
  incrHandler = () => {
    this.setState({ qty: this.state.qty + 1 });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-8">
              <table className="table table-hover bg-light">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>QTY</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.product_Name}</td>
                    <td>
                      <img src={this.state.image} alt="iphone" height="70%" />
                    </td>
                    <td>{this.state.price}</td>
                    <td>
                      <i
                        className="fas fa-minus-circle"
                        onClick={this.decrHandler}
                      ></i>
                      {this.state.qty}
                      <i
                        className="fas fa-plus-circle"
                        onClick={this.incrHandler}
                      ></i>
                    </td>
                    <td>{this.state.price * this.state.qty}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
