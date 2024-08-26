// src/components/ContactList.js
import React, { useEffect, useState } from "react";
import { getContacts, deleteContact } from "../api";
import { Link } from "react-router-dom";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await getContacts();
      setContacts(response.data);
    };
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    await deleteContact(id);
    setContacts(contacts.filter((contact) => contact._id !== id));
  };

  return (
    <div>
      <h2>Contact List</h2>
      <Link to="/new">Create New Contact</Link>
      <ul>
        {contacts.map((contact) => (
          <li key={contact._id}>
            <span>
              {contact.firstname} {contact.lastname}
            </span>
            <Link to={`/edit/${contact._id}`}>Edit</Link>
            <button onClick={() => handleDelete(contact._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
