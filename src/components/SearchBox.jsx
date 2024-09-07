import css from "./SearchBox.module.css";

export default function SearchBox({ filterContacts, setFilterContacts }) {
  const handleSearch = (event) => {
    setFilterContacts(event.target.value);
  };
  return (
    <div className={css.div}>
      <label>Find contacts by name </label>
      <input type="text" value={filterContacts} onChange={handleSearch} />
    </div>
  );
}
