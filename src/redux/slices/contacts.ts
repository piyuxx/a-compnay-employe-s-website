import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IContact } from "../../types";

const initialState = {
  contacts: [] as IContact[],
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setCreateContact: (state, action: PayloadAction<IContact>) => {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    },
    setUpdateContact: (state, action: PayloadAction<IContact>) => {
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    },
    setDeleteContact: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    },
  },
});

export const { setCreateContact, setDeleteContact, setUpdateContact } =
  contactSlice.actions;
export default contactSlice.reducer;
