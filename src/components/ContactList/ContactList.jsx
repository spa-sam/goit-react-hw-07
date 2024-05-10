import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { fetchContacts, selectContacts } from "../../redux/contactsSlice";

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contactList}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
}

export default ContactList;
