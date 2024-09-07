import css from "./Contact.module.css";
import { FaPhone, FaUser } from "react-icons/fa6";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <>
      <div className={css.info}>
        <p className={css.p}>
          <FaUser size="16" />
          {name}
        </p>
        <p className={css.p}>
          <FaPhone size="16" />
          {number}
        </p>
      </div>

      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
}
