import { type } from "@testing-library/user-event/dist/type";
import reducer, { initialState } from "../store/store";
import ContactList from "./contactsDsplay/ContactList";
import FormСustom from "./form/Form";
import React, { useReducer } from "react";

export default function ContactsManager() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submitHandler = (values, formikBag) => {
    dispatch({ type: "add", payload: values });
    formikBag.resetForm();
  };

  const deleteHandler = (values) => {
    dispatch({ type: "delete", payload: values });
  };

  return (
    <>
      <FormСustom submitHandler={submitHandler}></FormСustom>
      <ContactList contacts={state} deleteHandler={deleteHandler}></ContactList>
    </>
  );
}
