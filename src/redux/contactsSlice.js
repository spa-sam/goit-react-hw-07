import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./../api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const response = await api.get("/contacts");
    return response.data;
  }
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [] },
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
    });
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
