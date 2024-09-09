import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";
import ContactList from "./ContactList";
import { FaAddressBook } from "react-icons/fa";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((currentContacts) => {
      const duplicateName = currentContacts.find(
        (contact) =>
          contact.name.toLowerCase() === newContact.name.toLowerCase()
      );
      const duplicateNumber = currentContacts.find(
        (contact) => contact.number === newContact.number
      );

      if (duplicateName) {
        alert(`The name ${newContact.name} is already in your contacts.`);
        return currentContacts;
      }

      if (duplicateNumber) {
        alert(`The number ${newContact.number} is already in your contacts.`);
        return currentContacts;
      }

      return [...currentContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((currentContacts) =>
      currentContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const [filterContacts, setFilterContacts] = useState("");
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterContacts.toLowerCase())
  );

  return (
    <>
      <FaAddressBook size="50" />
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox
        filterContacts={filterContacts}
        setFilterContacts={setFilterContacts}
      />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </>
  );
}
