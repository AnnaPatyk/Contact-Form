import "../contactsDsplay/contactList.css";
import React from "react";

export default function ContactList({ contacts, deleteHandler }) {
  return (
    <div className="contacts-list">
      {contacts.length ? (
        contacts.map((contact, index) => (
          <div className="contact" key={index}>
            <p> First Name : {contact.firstName}</p>
            <p> Last Name : {contact.lastName}</p>
            {contact.phones.map((phone, index) => (
              <p key={index}>Phone : {phone.phone}</p>
            ))}
            <button type="button" onClick={() => deleteHandler(contact)}>
              Delete contact
            </button>
          </div>
        ))
      ) : (
        <h2>The contact list is empty</h2>
      )}
    </div>
  );
}
