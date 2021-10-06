import React from "react";
class Wish extends React.Component {
  state = {
    message: "Hello",
  };
  gmHandler = () => {
    this.setState({ message: "Good Morning" });
  };
  gaHandler = () => {
    this.setState({ message: "Good Afternoon" });
  };
  gnHandler = () => {
    this.setState({ message: "Good Night" });
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3>Message:{this.state.message}</h3>
                </div>
                <div className="card-body">
                  <button
                    className="btn btn-success mr-3"
                    onClick={this.gmHandler}
                  >
                    GM
                  </button>
                  <button
                    className="btn btn-primary mr-3"
                    onClick={this.gaHandler}
                  >
                    GA
                  </button>
                  <button className="btn btn-danger" onClick={this.gnHandler}>
                    GM
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Wish;
