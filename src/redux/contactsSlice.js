import { createSlice } from "@reduxjs/toolkit";
import contacts from "../contacts.json";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: contacts,
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.items;
export default contactsSlice.reducer;
