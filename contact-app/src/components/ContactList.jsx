import React from "react";
class ContactList extends React.Component {
  clickHandler = (contact) => {
    this.props.selectedContact(contact);
    console.log("Hello, clickiing working", contact.gender);
  };
  render() {
    return (
      <>
        <h1>Contact List </h1>
        <table class="table table-hover table-dark bg-dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Country</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.props.contacts.map((contact) => {
              return (
                <tr
                  onMouseOver={this.clickHandler.bind(this, contact)}
                  key={contact.login.uuid}
                >
                  <td>{contact.login.uuid.substr(32)}</td>
                  <td>{contact.name.last}</td>
                  <td>{contact.location.country}</td>
                  <td>{contact.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        
      </>
    );
  }
}
export default ContactList;