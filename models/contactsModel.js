const { required } = require('joi');
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
        name: {
          type: String,
          required: [true, 'Set name for contact'],
        },
        email: {
          type: String,
        },
        phone: {
          type: String,
        },
        favorite: {
          type: Boolean,
          default: false,
        },
      });

const Contact = new mongoose.model("Contact", contactSchema);

module.exports = Contact;