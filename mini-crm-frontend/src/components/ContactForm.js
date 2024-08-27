// src/components/ContactForm.js
import React, { useState, useEffect } from "react";
import { createContact, getContact, updateContact } from "../api";
import { useHistory, useParams } from "react-router-dom";

const ContactForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (id) {
      const fetchContact = async () => {
        const response = await getContact(id);
        const { firstname, lastname, email, phone } = response.data;
        setFirstname(firstname);
        setLastname(lastname);
        setEmail(email);
        setPhone(phone);
      };
      fetchContact();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contact = { firstname, lastname, email, phone };
    if (id) {
      await updateContact(id, contact);
    } else {
      await createContact(contact);
    }
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button type="submit">{id ? "Update" : "Create"} Contact</button>
    </form>
  );
};

export default ContactForm;
