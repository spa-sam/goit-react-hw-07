import { useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { selectContacts, selectNameFilter } from "../../redux/selectors";
import "./App.css";
import ClearStorageButton from "../ClearStorageButton/ClearStorageButton";

function App() {
  const contactList = useSelector(selectContacts);
  const searchQuery = useSelector(selectNameFilter);

  const filteredContacts =
    searchQuery.trim() === ""
      ? contactList
      : contactList.filter((contact) =>
          contact.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
        );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={filteredContacts} />
      <ClearStorageButton />
    </div>
  );
}

export default App;
