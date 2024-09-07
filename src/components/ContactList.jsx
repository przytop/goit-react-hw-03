import Contact from "./Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.contacts}>
      {contacts.map((contact) => {
        return (
          <li className={css.contact} key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDelete={onDelete}
            />
          </li>
        );
      })}
    </ul>
  );
}
