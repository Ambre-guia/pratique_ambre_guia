const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/\S+@\S+\.\S+/, "is invalid"],
  },
  phone: {
    type: String,
  },
});

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
