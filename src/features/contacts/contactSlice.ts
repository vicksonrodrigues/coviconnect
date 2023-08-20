import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ContactModel {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

const contactSlice = createSlice({
  name: "contact",
  initialState: [] as ContactModel[],
  reducers: {
    addContact(state, action: PayloadAction<ContactModel>) {
      state.push(action.payload);
    },
    editContact(state, action) {
      const { id, editedContact } = action.payload;
      console.log(editedContact);
      return state.map((item) => (item.id !== id ? item : editedContact));
    },
    removeContact(state, action) {
      const { id } = action.payload;

      return state.filter((s) => s.id !== id);
    },
  },
});

export const { addContact, editContact, removeContact } = contactSlice.actions;
export default contactSlice.reducer;
