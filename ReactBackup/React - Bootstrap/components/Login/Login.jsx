import React from "react";

class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-8"></div>
            <div className="col-md-4">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Please Enter User Name"
                  />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-success"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Login;
