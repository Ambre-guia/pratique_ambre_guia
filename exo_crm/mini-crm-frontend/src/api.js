// src/api.js
import axios from "axios";

const API_URL = "http://localhost:3000/api/contacts";

export const getContacts = async () => {
  return await axios.get(API_URL);
};

export const getContact = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

export const createContact = async (contact) => {
  return await axios.post(API_URL, contact);
};

export const updateContact = async (id, contact) => {
  return await axios.put(`${API_URL}/${id}`, contact);
};

export const deleteContact = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
