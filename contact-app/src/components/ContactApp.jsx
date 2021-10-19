import React from "react";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetials";
import Axois from "axios";
class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      selectedContactDetails: {},
    };
  }
  selectedContact = (contact) => {
    console.log("Child to Parent", contact.name.last);
    this.setState({ selectedContactDetails: contact });
  };
  componentDidMount() {
    Axois.get(
      "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist"
    )
      .then((response) => {
        this.setState({ contacts: response.data });
      })
      .catch();
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <ContactList
                contacts={this.state.contacts}
                selectedContact={this.selectedContact}
              />
            </div>
            <div className="col-md-4">
              <ContactDetails details={this.state.selectedContactDetails} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ContactApp;