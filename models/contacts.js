const fs = require('fs/promises');
const path = require('path');
const Joi = require("joi");
const { v4: uuidv4 } = require("uuid");

console.log("here is my language")

const contactsPath = path.format({ dir: "./models", base: "contacts.json"});


const listContacts = async () => {
  const string = JSON.stringify(arr, null, 2);
  try {
    await fs.readFile(filePath, string);
  } catch (err) {
    console.error(err)
  }
};

const getContactById = async (contactId) => {
  const contactData = await listContacts();
  const contact = contactData.filter(({ id }) => id === contactId);
  if (contact.length === 0 && contact === 'false') {
    throw new Error("Contact not found");
  }
  return contact;
};

const removeContact = async (contactId) => {
  const contactsData = await listContacts();
  const contactIndex = contactsData.findIndex(
    (contact) => contact.id === contactId
  );

  if (contactIndex === -1) {
    throw new Error("Contact not found");
  }

  contactsData.splice(contactIndex, 1);
  await saveArrayToFile(contactsPath, contactsData);
};

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();

  const contact = {
    id: uuidv4(),
    name,
    email,
    phone,
  };

  const updatedContacts = [...contacts, contact];
  await saveArrayToFile(contactsPath, updatedContacts);

  return contact;
};



const updateContact = async (contactId, body) => {
  const {name, email, phone} = body;

  const contactsData = await listContacts();
  const contactIndex = contactsData.findIndex(
    (contact) => contact.id === contactId
  );

  if (contactIndex === -1) {
    throw new Error("Contact not found");
  }
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
  });;


  const {error} = schema.validate({ name, email, phone });

  if (error) {
    throw new Error("missing fields");
  }

  contactsData[contactId] = {
    ...contactsData[contactIndex],
    name: name || contactsData[contactIndex].name,
    email: email || contactsData[contactIndex].email,
    phone: phone || contactsData[contactIndex].phone,
  };

  await saveArrayToFile(contactsPath, contactsData);
  return contactsData[contactIndex];
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
