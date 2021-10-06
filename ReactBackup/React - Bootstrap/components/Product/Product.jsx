import React, { Component } from "react";

class Product extends Component {
  image =
    "https://rukminim1.flixcart.com/image/570/684/jwgple80/watch/h/f/h/g953-casio-original-imafh545jh3rajug.jpeg?q=50";
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <img src={this.image} width="100px" height="300px" />
                </div>
                <div className="card-body">
                  <h4>Casio Watch</h4>
                  <h5>Price: 500 INR</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <img src={this.image} width="100px" height="300px" />
                </div>
                <div className="card-body">
                  <h4>Casio Watch</h4>
                  <h5>Price: 500 INR</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <img src={this.image} width="100px" height="300px" />
                </div>
                <div className="card-body">
                  <h4>Casio Watch</h4>
                  <h5>Price: 500 INR</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <img src={this.image} width="100px" height="300px" />
                </div>
                <div className="card-body">
                  <h4>Casio Watch</h4>
                  <h5>Price: 500 INR</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
