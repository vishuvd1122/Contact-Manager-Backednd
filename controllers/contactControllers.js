//@Get all contacts
//@GET /api/contacts
//@access public

const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all the contacts" });
};

//@Add a new contact
//@POST /api/contacts
//@access public

const addContact = (req, res) => {
    console.log(req.body);
  res.status(200).json({ message: "New contact added successfully" });
};

//@Get a particular contact using :id
//@GET /api/contacts/:id
//@access public

const getContact = (req, res) => {
  res.status(200).json({ message: "Get the contacts with the respective id" });
};

//@Delete a particular contact using :id
//@DELETE /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
  res
    .status(200)
    .json({ message: "Delete the contacts with the respective id" });
};

//@Update a particular contact using :id
//@PUT /api/contacts/:id
//@access public

const updateContact = (req, res) => {
  res
    .status(200)
    .json({ message: "Update the contacts with the respective id" });
};

module.exports = {
  getContacts,
  addContact,
  getContact,
  deleteContact,
  updateContact,
};
