import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from './Components/Container/Container';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import './App.scss';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    const getName = this.state.contacts.map(contact => contact.name);

    if (getName.includes(contact.name)) {
      alert(`${contact.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const filterNormalize = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalize),
    );
  };

  render() {
    const filter = this.state.filter;
    const visibleContacts = this.filterContacts();
    return (
      <Container>
        <h1 className="main_title">Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2 className="contacts_title">Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
