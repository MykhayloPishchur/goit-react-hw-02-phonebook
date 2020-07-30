import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  };

  addContact = (contact) => {
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  };

  render() {
    return (
      <>
        <ContactForm onSubmit={this.addContact}></ContactForm>
        <h2>Contact</h2>
        <ul>
          {this.state.contacts.map((item) => (
            <li key={item.id}>
              {item.name} : {item.number}{" "}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
