import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";
import ContactList from "./ContactList";
import { FaAddressBook } from "react-icons/fa";

export default function App() {
  const savedContacts = window.localStorage.getItem("saved-contacts");

  const initialContacts = savedContacts
    ? JSON.parse(savedContacts)
    : [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ];

  const [contacts, setContacts] = useState(initialContacts);

  const [filterContacts, setFilterContacts] = useState("");

  const addContact = (newContact) => {
    setContacts((currentContacts) => [...currentContacts, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts((currentContacts) =>
      currentContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterContacts.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

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
