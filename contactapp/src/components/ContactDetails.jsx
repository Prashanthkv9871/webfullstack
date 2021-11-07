import React, { Component } from 'react'

class ContactDetails extends Component {
    render() {
        return (
            <>
                {Object.keys(this.props.details).length!==0 ?(
                    <>
                    <h1>Contact Details</h1>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-header ">
                                            <img src={this.props.details.picture.medium} className="card-img-top" style={{height:"200px"}} alt=" "/>
                                        </div>

                                        <div className="card-body ">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">{this.props.details.name.first}</li>
                                                <li className="list-group-item">{this.props.details.gender}</li>
                                                <li className="list-group-item">{this.props.details.email}</li>
                                                <li className="list-group-item">{this.props.details.dob.age}</li>
                                                <li className="list-group-item">{this.props.details.phone}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ):null}
                
            </>
        )
    }
}

export default ContactDetails
