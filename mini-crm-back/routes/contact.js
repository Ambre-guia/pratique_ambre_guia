const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// Create Contact
router.post("/contacts", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).send(contact);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Read All Contacts
router.get("/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).send(contacts);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Read Single Contact
router.get("/contacts/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).send();
    res.status(200).send(contact);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update Contact
router.put("/contacts/:id", async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!contact) return res.status(404).send();
    res.status(200).send(contact);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete Contact
router.delete("/contacts/:id", async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).send();
    res.status(200).send(contact);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
