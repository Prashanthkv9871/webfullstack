import React from "react";
class ContactDetails extends React.Component {
  render() {
    return (
      <>
        <h2>Contact Details</h2>
        {/*  <pre>{JSON.stringify(this.props)}</pre> */}
        {Object.keys(this.props.details).length !== 0 ? (
          <>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="card">
                    <div className="card-header">
                      <img src={this.props.details.picture.large} alt='' />
                    </div>
                    <div className="card-body">
                      <ul className="list-group">
                        <li className="list-group-item">
                          {this.props.details.name.first}
                        </li>
                        <li className="list-group-item">
                          {" "}
                          {this.props.details.registered.age}
                        </li>
                        <li className="list-group-item">
                          {this.props.details.location.city}
                        </li>
                        <li className="list-group-item">
                          {this.props.details.phone}
                        </li>
                        <li className="list-group-item">
                          {this.props.details.nat}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}{" "}
      </>
    );
  }
}
export default ContactDetails;